"use client";

import { useEffect, useId, useRef } from "react";
import type { ServiceCategory } from "@/lib/service-categories";

type ServiceDetailModalProps = {
  category: ServiceCategory | null;
  onClose: () => void;
};

export default function ServiceDetailModal({ category, onClose }: ServiceDetailModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!category) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(8,6,14,0.72)] backdrop-blur-[6px]"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative z-[1] max-h-[min(88vh,720px)] w-full max-w-[520px] overflow-y-auto rounded-2xl border border-[rgba(220,215,232,0.14)] bg-[linear-gradient(180deg,rgba(22,17,38,0.98)_0%,rgba(14,11,25,0.98)_100%)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_40px_80px_-24px_rgba(0,0,0,0.85)] min-[960px]:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] bg-white/[0.04] text-[var(--text-muted)] transition-colors hover:bg-white/[0.08] hover:text-[var(--text)]"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
          Service details
        </p>
        <h3 id={titleId} className="mt-2 pr-10 text-xl font-bold tracking-[-0.02em] text-[var(--text)]">
          {category.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">{category.description}</p>

        <ul className="mt-6 space-y-4 border-t border-white/[0.08] pt-6">
          {category.subs.map((sub) => (
            <li key={sub.name}>
              <p className="text-[14px] font-semibold text-[var(--text)]">{sub.name}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-dim)]">{sub.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
          <a
            href={`#contact-${category.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[linear-gradient(180deg,#5d3fd6_0%,#5c43c3_60%,#332760_100%)] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_-12px_var(--purple-glow)] transition hover:-translate-y-px"
          >
            Discuss this service
          </a>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-[13px] font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
