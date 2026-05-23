"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full rounded-xl border border-[var(--border-soft)] bg-white/[0.03] px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--text-dim)] transition-colors focus:border-[var(--border-strong)] focus:bg-white/[0.05] focus:outline-none";
const labelClass = "mb-2 block text-[13px] font-medium text-[var(--text-muted)]";

const BUDGET_OPTIONS = [
  "Under €25k",
  "€25k – €75k",
  "€75k – €150k",
  "€150k+",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // Placeholder handler — no backend yet. Wire this to a server action or
  // /services endpoint (email/CRM) when one is available.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--border-soft)] bg-[linear-gradient(165deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <h2 className="text-[20px] font-semibold text-[var(--text)]">Thanks — message received</h2>
        <p className="mx-auto mt-3 max-w-[44ch] text-[15px] leading-relaxed text-[var(--text-dim)]">
          We&apos;ll be in touch within one business day with next steps. In the meantime, feel free
          to reply directly to the confirmation email.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex rounded-full border border-[var(--border-strong)] bg-white/[0.04] px-5 py-2.5 text-[14px] font-semibold text-[var(--text)] transition-colors hover:bg-white/[0.08]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--border-soft)] bg-[linear-gradient(165deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] min-[960px]:p-8"
    >
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
        <div>
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
        <div>
          <label htmlFor="budget" className={labelClass}>
            Estimated budget
          </label>
          <select id="budget" name="budget" defaultValue="" required className={fieldClass}>
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

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

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.18] bg-[linear-gradient(180deg,#5d3fd6_0%,#5c43c3_60%,#332760_100%)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_18px_40px_-14px_var(--purple-glow)] transition duration-200 hover:-translate-y-px hover:shadow-[0_24px_50px_-14px_var(--purple-glow)] sm:w-auto"
      >
        Send message
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
