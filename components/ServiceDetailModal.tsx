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
        className="surface-card relative z-[1] max-h-[min(88vh,720px)] w-full max-w-[520px] overflow-y-auto p-6 min-[960px]:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-tint)] text-[var(--text-muted)] transition-colors hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--text)]"
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
            className="btn-primary btn-primary-sm"
          >
            Discuss this service
          </a>
          <button
            type="button"
            onClick={onClose}
            className="btn-ghost"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
