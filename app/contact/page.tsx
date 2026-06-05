import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Dublin 4ir",
  description:
    "Tell us about your project and we'll respond with a clear scope, timeline, and engagement model.",
};

const serifItalic =
  "font-[family-name:var(--font-playfair)] italic font-normal";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[760px] px-6 pb-24 pt-20 min-[960px]:pt-28">
      <header className="max-w-[52ch]">
        <p className="section-eyebrow">Contact</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em] text-[var(--text)]">
          Start your{" "}
          <span className={`${serifItalic} text-[var(--text-muted)]`}>
            project
          </span>
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-[var(--text-dim)]">
          Share your goals and we&apos;ll match you with the right team, stack,
          and delivery approach. We typically respond within one business day.
        </p>
      </header>

      <div className="mt-10">
        <ContactForm />
      </div>

      <p className="mt-6 text-[14px] text-[var(--text-dim)]">
        Prefer email?{" "}
        <a
          href="mailto:info@dublin4ir.com?subject=Project%20enquiry"
          className="text-[var(--text-muted)] underline-offset-4 transition-colors hover:text-[var(--text)] hover:underline"
        >
          info@dublin4ir.com
        </a>{" "}
        or call{" "}
        <a
          href="tel:+8801734804733"
          className="text-[var(--text-muted)] underline-offset-4 transition-colors hover:text-[var(--text)] hover:underline"
        >
          +880 1734 804733
        </a>
        .
      </p>
    </main>
  );
}
