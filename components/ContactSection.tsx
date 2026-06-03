"use client";

import { useSyncExternalStore } from "react";
import ContactForm from "@/components/ContactForm";
import {
  getCategoryBySlug,
  SERVICE_CATEGORIES,
} from "@/lib/service-categories";

const serifItalic =
  "font-[family-name:var(--font-playfair)] italic font-normal";

function parseServiceSlugFromHash(hash: string): string | null {
  if (!hash) return null;
  const id = hash.replace(/^#/, "");
  if (id === "contact") return null;
  if (id.startsWith("contact-")) return id.slice("contact-".length);
  return null;
}

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export default function ContactSection() {
  // Read the URL hash from an external store: the snapshot is sampled during
  // render (so no setState inside an effect) and re-sampled on `hashchange`.
  // The server snapshot is "" so SSR/hydration stay consistent.
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => "",
  );
  const activeSlug = parseServiceSlugFromHash(hash);

  const active = activeSlug ? getCategoryBySlug(activeSlug) : null;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto max-w-[1240px] scroll-mt-28 px-6 pb-24 pt-8 min-[960px]:px-10"
    >
      {SERVICE_CATEGORIES.map((cat) => (
        <span
          key={cat.slug}
          id={`contact-${cat.slug}`}
          className="sr-only"
          tabIndex={-1}
        />
      ))}

      <div className="mx-auto max-w-[760px]">
        <div className="text-center">
          <p className="section-eyebrow">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.03em] text-[var(--text)]"
          >
            {active ? (
              <>
                Discuss{" "}
                <span className={`${serifItalic} text-[var(--text-muted)]`}>
                  {active.title}
                </span>
              </>
            ) : (
              <>
                Start your{" "}
                <span className={`${serifItalic} text-[var(--text-muted)]`}>
                  project
                </span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[15px] leading-relaxed text-[var(--text-dim)]">
            {active
              ? `Tell us about your ${active.title.toLowerCase()} needs — we'll respond with a clear scope, timeline, and engagement model.`
              : "Share your goals and we'll match you with the right team, stack, and delivery approach."}
          </p>
        </div>

        <div id="start" className="mt-10 scroll-mt-28">
          <ContactForm />
        </div>

        <p className="mt-6 text-center text-[14px] text-[var(--text-dim)]">
          Prefer email?{" "}
          <a
            href="mailto:info@dublin4ir.com?subject=Project%20enquiry"
            className="text-[var(--text-muted)] underline-offset-4 transition-colors hover:text-[var(--text)] hover:underline"
          >
            info@dublin4ir.com
          </a>
        </p>
      </div>
    </section>
  );
}
