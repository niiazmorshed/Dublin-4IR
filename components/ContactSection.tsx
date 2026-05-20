"use client";

import { useCallback, useEffect, useState } from "react";
import { getCategoryBySlug, SERVICE_CATEGORIES } from "@/lib/service-categories";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

function parseServiceSlugFromHash(hash: string): string | null {
  if (!hash) return null;
  const id = hash.replace(/^#/, "");
  if (id === "contact") return null;
  if (id.startsWith("contact-")) return id.slice("contact-".length);
  return null;
}

export default function ContactSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const syncFromHash = useCallback(() => {
    setActiveSlug(parseServiceSlugFromHash(window.location.hash));
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  const active = activeSlug ? getCategoryBySlug(activeSlug) : null;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto max-w-[1240px] scroll-mt-28 px-6 pb-24 pt-8 min-[960px]:px-10"
    >
      {SERVICE_CATEGORIES.map((cat) => (
        <span key={cat.slug} id={`contact-${cat.slug}`} className="sr-only" tabIndex={-1} />
      ))}

      <div className="rounded-2xl border border-[rgba(220,215,232,0.1)] bg-[linear-gradient(165deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] px-6 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] min-[960px]:px-12 min-[960px]:py-12">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--text-muted)] uppercase">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-3 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.03em] text-[var(--text)]"
        >
          {active ? (
            <>
              Discuss{" "}
              <span className={`${serifItalic} text-[var(--text-muted)]`}>{active.title}</span>
            </>
          ) : (
            <>
              Start your <span className={`${serifItalic} text-[var(--text-muted)]`}>project</span>
            </>
          )}
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-[15px] leading-relaxed text-[var(--text-dim)]">
          {active
            ? `Tell us about your ${active.title.toLowerCase()} needs — we'll respond with a clear scope, timeline, and engagement model.`
            : "Share your goals and we'll match you with the right team, stack, and delivery approach."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#start"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[linear-gradient(180deg,#5d3fd6_0%,#5c43c3_60%,#332760_100%)] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_18px_40px_-14px_var(--purple-glow)] transition duration-200 hover:-translate-y-px hover:shadow-[0_24px_50px_-14px_var(--purple-glow)]"
          >
            Start a project
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="mailto:hello@dublin4ir.com?subject=Project%20enquiry"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.04] px-6 py-3.5 text-[14px] font-semibold text-[var(--text)] backdrop-blur-[10px] transition-colors hover:border-[rgba(220,215,232,0.22)] hover:bg-white/[0.08]"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
