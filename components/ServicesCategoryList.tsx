"use client";

import { useState, type CSSProperties } from "react";
import RevealGroup from "@/components/RevealGroup";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/service-categories";
import { CategoryIcon } from "@/components/services/CategoryIcon";

const learnMoreClass =
  "mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--purple-2)] transition-colors hover:text-[var(--text)] min-[960px]:text-[13px]";

export default function ServicesCategoryList() {
  const [active, setActive] = useState<ServiceCategory | null>(null);

  return (
    <>
      <RevealGroup className="flex flex-col gap-3 min-[960px]:gap-3.5">
        {SERVICE_CATEGORIES.map((cat, i) => (
          <article
            key={cat.slug}
            className="stagger-item surface-card-sm group relative overflow-hidden p-4 min-[960px]:p-5"
            style={{ "--i": i } as CSSProperties}
          >
            <div className="flex gap-3 min-[960px]:gap-4">
              <CategoryIcon kind={cat.icon} />
              <div className="min-w-0 flex-1">
                <h3 className="text-[16px] font-bold tracking-[-0.02em] text-[var(--text)] min-[960px]:text-[17px]">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--text-dim)] min-[960px]:text-[13px]">
                  {cat.summary}
                </p>
                <p className="mt-2.5 text-[12px] leading-snug text-[var(--text-muted)] min-[960px]:text-[13px]">
                  <span className="text-[var(--text-dim)]">Includes: </span>
                  {cat.items.join(" · ")}
                </p>
                <button
                  type="button"
                  className={learnMoreClass}
                  aria-haspopup="dialog"
                  onClick={() => setActive(cat)}
                >
                  Learn more
                  <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-3 right-3 h-px rounded-full bg-[linear-gradient(90deg,transparent,rgba(51,187,207,0.9),rgba(93,212,224,0.7),transparent)] opacity-70 min-[960px]:left-4 min-[960px]:right-4"
              aria-hidden
            />
          </article>
        ))}
      </RevealGroup>

      <ServiceDetailModal category={active} onClose={() => setActive(null)} />
    </>
  );
}
