"use client";

import { useState, type FormEvent } from "react";

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
      <div className="surface-card p-8 text-center">
        <h2 className="text-[20px] font-semibold text-[var(--text)]">Thanks — message received</h2>
        <p className="mx-auto mt-3 max-w-[44ch] text-[15px] leading-relaxed text-[var(--text-dim)]">
          We&apos;ll be in touch within one business day with next steps. In the meantime, feel free
          to reply directly to the confirmation email.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="surface-card p-6 min-[960px]:p-8"
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
        className="btn-primary mt-6 w-full sm:w-auto"
      >
        Send message
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
