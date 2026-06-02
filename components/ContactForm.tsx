"use client";

import { useState, type FormEvent } from "react";
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

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [budgetError, setBudgetError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!budget) {
      setBudgetError(true);
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      await sendContactEmail({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        company: String(data.get("company") ?? "").trim() || "—",
        budget,
        message: String(data.get("message") ?? ""),
      });
      form.reset();
      setBudget("");
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
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
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="mt-5 text-[14px] text-[#ff9a9a]">
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href="mailto:hello@dublin4ir.com" className="underline underline-offset-4">
            hello@dublin4ir.com
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={sending} className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto">
        {sending ? "Sending…" : "Send message"}
        {!sending && <span aria-hidden>→</span>}
      </button>
    </form>
  );
}
