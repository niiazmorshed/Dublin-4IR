"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import { sendContactEmail } from "@/services/email/contact";

const fieldClass =
  "w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-tint)] px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--text-dim)] transition-colors focus:border-[var(--border-strong)] focus:bg-[rgba(255,255,255,0.08)] focus:outline-none";
const labelClass = "mb-2 block text-[13px] font-medium text-[var(--text-muted)]";

const BUDGET_OPTIONS = [
  "Under €25k",
  "€25k – €75k",
  "€75k – €150k",
  "€150k+",
  "Not sure yet",
];

// Message accepts up to 250 words; surfaced to the user via a live counter.
const MAX_WORDS = 250;
// Character caps stop oversized payloads from reaching EmailJS.
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_COMPANY = 120;
// Bot guard: a real person can't fill name, email, message, and budget faster
// than this. Submissions under the threshold are treated as automated.
const MIN_SUBMIT_MS = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Client-side send cooldown: max RATE_MAX successful sends per rolling hour,
// tracked in localStorage. This is a UX guard against accidental re-sends — it
// does NOT stop a determined bot (which ignores this JS entirely). Real rate
// limiting must live server-side; see the contact-form notes.
const RATE_KEY = "d4ir_contact_sends";
const RATE_MAX = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

/** Parse stored timestamps, keeping only those inside the rolling window. */
function parseSends(raw: string): number[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const cutoff = Date.now() - RATE_WINDOW_MS;
    return parsed.filter((t): t is number => typeof t === "number" && t > cutoff);
  } catch {
    return [];
  }
}

function readRecentSends(): number[] {
  if (typeof window === "undefined") return [];
  return parseSends(window.localStorage.getItem(RATE_KEY) ?? "[]");
}

function recordSend(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(RATE_KEY, JSON.stringify([...readRecentSends(), Date.now()]));
  } catch {
    // Storage unavailable (private mode / quota) — cooldown just won't persist.
  }
}

/** Minutes until the next send is allowed, or 0 if under the limit. */
function cooldownMinutesLeft(sends: number[]): number {
  if (sends.length < RATE_MAX) return 0;
  const remaining = RATE_WINDOW_MS - (Date.now() - Math.min(...sends));
  return Math.max(1, Math.ceil(remaining / 60_000));
}

// External-store plumbing so the cooldown reads localStorage without a
// hydration mismatch: the server snapshot is empty, the client snapshot is the
// raw stored value. The raw string is stable between renders (changes only when
// storage changes), so it's safe as a snapshot; minutes are derived in render.
function subscribeSends(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function getSendsSnapshot(): string {
  return window.localStorage.getItem(RATE_KEY) ?? "[]";
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [budgetError, setBudgetError] = useState(false);
  const [formError, setFormError] = useState("");
  const [messageWords, setMessageWords] = useState(0);
  // Send cooldown derived from localStorage via an external store (SSR-safe).
  const sendsRaw = useSyncExternalStore(subscribeSends, getSendsSnapshot, () => "[]");
  const cooldownLeft = cooldownMinutesLeft(parseSends(sendsRaw));
  // Synchronous guard against double submission. The `disabled` attribute only
  // takes effect after React commits the re-render, leaving a brief window where
  // a fast double-click could fire two sends — this ref blocks that immediately.
  const submittingRef = useRef(false);
  // Timestamp the form became interactive, for the bot time-trap below. Set in
  // an effect (not at render) to keep the render pure.
  const mountedAtRef = useRef(0);
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  const wordsOverLimit = messageWords > MAX_WORDS;
  const onCooldown = cooldownLeft > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittingRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: a hidden field no human sees. If it's filled, a bot did it —
    // pretend success so the bot moves on, but never send.
    if (String(data.get("company_website") ?? "").trim() !== "") {
      form.reset();
      setBudget("");
      setStatus("success");
      return;
    }

    // Time-trap: submitted faster than a person could fill the form → bot.
    if (Date.now() - mountedAtRef.current < MIN_SUBMIT_MS) {
      form.reset();
      setBudget("");
      setStatus("success");
      return;
    }

    if (!budget) {
      setBudgetError(true);
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!EMAIL_RE.test(email)) {
      setFormError("Enter a valid email address.");
      return;
    }

    if (countWords(message) > MAX_WORDS) {
      setFormError(`Message is too long — keep it under ${MAX_WORDS} words.`);
      return;
    }

    const wait = cooldownMinutesLeft(readRecentSends());
    if (wait > 0) {
      setFormError(
        `You've hit the limit of ${RATE_MAX} messages per hour. Try again in ${wait} min, or email us directly at info@dublin4ir.com.`,
      );
      return;
    }

    setFormError("");
    submittingRef.current = true;
    setStatus("sending");
    try {
      await sendContactEmail({
        name,
        email,
        company: String(data.get("company") ?? "").trim() || "—",
        budget,
        message,
      });
      recordSend();
      form.reset();
      setBudget("");
      setMessageWords(0);
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="surface-card p-8 text-center">
        <h2 className="text-[20px] font-semibold text-[var(--text)]">Thanks — message received</h2>
        <p className="mx-auto mt-3 max-w-[44ch] text-[15px] leading-relaxed text-[var(--text-dim)]">
          We&apos;ll be in touch within one business day with next steps. In the meantime, feel free
          to reply directly to the confirmation email.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="surface-card p-6 min-[960px]:p-8">
      {/* Honeypot: hidden from people, catnip for bots. Kept off-screen rather
          than display:none so naive scrapers still see and fill it. */}
      <div aria-hidden className="absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={MAX_NAME}
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={MAX_EMAIL}
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-[var(--text-dim)]">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={MAX_COMPANY}
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={labelClass}>Estimated budget</legend>
        <div role="radiogroup" aria-label="Estimated budget" className="flex flex-wrap gap-2.5">
          {BUDGET_OPTIONS.map((option) => {
            const selected = budget === option;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => {
                  setBudget(option);
                  setBudgetError(false);
                }}
                className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                  selected
                    ? "border-[var(--purple)] bg-[color-mix(in_srgb,var(--purple)_22%,transparent)] text-[var(--text)]"
                    : "border-[var(--border-soft)] bg-[var(--surface-tint)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {budgetError && (
          <p className="mt-2 text-[13px] text-[#ff9a9a]">Please select an estimated budget.</p>
        )}
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, goals, and timeline…"
          aria-describedby="message-hint"
          onChange={(e) => setMessageWords(countWords(e.target.value))}
          className={`${fieldClass} resize-y`}
        />
        <div id="message-hint" className="mt-1.5 flex items-center justify-between text-[12px]">
          <span className="text-[var(--text-dim)]">Up to {MAX_WORDS} words.</span>
          <span className={wordsOverLimit ? "text-[#ff9a9a]" : "text-[var(--text-dim)]"}>
            {messageWords} / {MAX_WORDS} words
          </span>
        </div>
      </div>

      {formError && (
        <p className="mt-5 text-[14px] text-[#ff9a9a]">{formError}</p>
      )}

      {onCooldown && !formError && (
        <p className="mt-5 text-[14px] text-[var(--text-dim)]">
          You can send up to {RATE_MAX} messages per hour. Please try again in {cooldownLeft} min.
        </p>
      )}

      {status === "error" && (
        <p className="mt-5 text-[14px] text-[#ff9a9a]">
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href="mailto:info@dublin4ir.com" className="underline underline-offset-4">
            info@dublin4ir.com
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={sending || wordsOverLimit || onCooldown} className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto">
        {sending ? "Sending…" : "Send message"}
        {!sending && <span aria-hidden>→</span>}
      </button>
    </form>
  );
}
