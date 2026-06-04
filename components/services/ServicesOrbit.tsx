"use client";

import { useCallback, useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { CategoryIcon } from "@/components/services/CategoryIcon";
import ButtonHoverArrow from "@/components/ui/button-hover-arrow";
import {
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from "@/lib/service-categories";

const CARD_SLOTS = ["top", "right", "bottom", "left"] as const;

/** Cardinal points on a perfect circle (equal inset from center) */
const SLOT_POSITION: Record<(typeof CARD_SLOTS)[number], string> = {
  top: "left-1/2 top-[10%] -translate-x-1/2",
  right: "right-[10%] top-1/2 -translate-y-1/2",
  bottom: "bottom-[10%] left-1/2 -translate-x-1/2",
  left: "left-[10%] top-1/2 -translate-y-1/2",
};

const NAV_POSITION: Record<(typeof CARD_SLOTS)[number], string> = {
  top: "left-1/2 top-[5%] z-30 -translate-x-1/2 -translate-y-1/2",
  right: "right-[5%] top-1/2 z-30 translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-[5%] left-1/2 z-30 -translate-x-1/2 translate-y-1/2",
  left: "left-[5%] top-1/2 z-30 -translate-x-1/2 -translate-y-1/2",
};

function shortTitle(title: string, max = 26) {
  if (title.length <= max) return title;
  const amp = title.indexOf(" & ");
  if (amp > 0 && amp <= max) return title.slice(0, amp);
  return `${title.slice(0, max - 1)}…`;
}

const ORBIT_ACCENTS = [
  { angle: -90, color: "rgba(51, 187, 207, 0.35)", label: "Strategy" },
  { angle: -45, color: "rgba(93, 212, 224, 0.3)", label: "Design" },
  { angle: 0, color: "rgba(0, 210, 255, 0.28)", label: "Build" },
  { angle: 45, color: "rgba(51, 187, 207, 0.32)", label: "Scale" },
  { angle: 90, color: "rgba(13, 61, 72, 0.5)", label: "Secure" },
  { angle: 135, color: "rgba(93, 212, 224, 0.28)", label: "Data" },
] as const;

function OrbitServiceCard({
  category,
  position,
  onOpen,
}: {
  category: ServiceCategory;
  position: (typeof CARD_SLOTS)[number];
  onOpen: () => void;
}) {
  const bullets = category.subs.slice(0, 3);

  return (
    <article
      className={`absolute z-10 w-[min(100%,220px)] min-[768px]:w-[210px] min-[960px]:w-[228px] min-[1200px]:w-[240px] ${SLOT_POSITION[position]}`}
    >
      <button
        type="button"
        onClick={onOpen}
        className="group w-full rounded-[20px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.06)] p-4 text-left shadow-[var(--shadow-card)] backdrop-blur-[20px] backdrop-saturate-[150%] transition-[border-color,background-color,transform] duration-300 hover:border-[rgba(51,187,207,0.35)] hover:bg-[rgba(255,255,255,0.09)] hover:scale-[1.02] min-[960px]:p-5"
      >
        <div className="flex items-start gap-3">
          <CategoryIcon kind={category.icon} />
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-bold leading-tight tracking-[-0.02em] text-[var(--text)] min-[960px]:text-[16px]">
              {shortTitle(category.title)}
            </h3>
            <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-[var(--text-dim)] min-[960px]:text-[12px]">
              {category.summary}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 border-t border-[var(--border-soft)] pt-3">
          <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--text-dim)] uppercase">
            Focus
          </span>
          <div className="flex gap-1" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i < bullets.length ? "bg-[var(--accent)]" : "bg-[rgba(255,255,255,0.12)]"
                }`}
              />
            ))}
          </div>
        </div>

        <ul className="mt-2.5 space-y-1.5 text-[11px] leading-snug text-[var(--text-muted)] min-[960px]:text-[12px]">
          {bullets.map((item) => (
            <li key={item.name} className="flex gap-2">
              <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent-light)]" />
              <span className="line-clamp-1">{item.name}</span>
            </li>
          ))}
        </ul>
      </button>
    </article>
  );
}

export default function ServicesOrbit() {
  const total = SERVICE_CATEGORIES.length;
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState<ServiceCategory | null>(null);

  const step = useCallback(
    (dir: 1 | -1) => {
      setOffset((o) => (o + dir + total) % total);
    },
    [total],
  );

  const visible = CARD_SLOTS.map((_, i) => SERVICE_CATEGORIES[(offset + i) % total]);

  return (
    <>
      <div className="relative w-full">
        {/* Desktop / tablet — perfect circle orbit */}
        <div className="relative mx-auto hidden w-full max-w-[min(100%,900px)] overflow-visible min-[768px]:block">
          <div className="relative aspect-square w-full">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[8%] rounded-full border border-dashed border-[rgba(255,255,255,0.14)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[16%] rounded-full bg-[radial-gradient(circle,rgba(51,187,207,0.08)_0%,transparent_70%)]"
          />

          {ORBIT_ACCENTS.map((accent) => (
            <div
              key={accent.label}
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[42%] w-px origin-bottom"
              style={{
                transform: `translate(-50%, -100%) rotate(${accent.angle}deg)`,
              }}
            >
              <span
                className="absolute -top-1 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full blur-xl"
                style={{ background: accent.color }}
              />
              <span className="absolute -top-3 left-1/2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-[var(--border-soft)] bg-[rgba(0,4,15,0.75)] text-[10px] font-semibold text-[var(--accent-light)] backdrop-blur-sm">
                {accent.label.slice(0, 1)}
              </span>
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(51,187,207,0.35)] bg-[rgba(0,4,15,0.9)] shadow-[0_0_40px_-8px_rgba(51,187,207,0.45)] backdrop-blur-md min-[960px]:h-[80px] min-[960px]:w-[80px]">
            <span className="font-[family-name:var(--font-playfair)] text-[26px] font-semibold italic leading-none tracking-[-0.02em] text-[var(--text)] min-[960px]:text-[30px]">
              D4
            </span>
          </div>

          {CARD_SLOTS.map((slot, i) => (
            <OrbitServiceCard
              key={`${slot}-${visible[i].slug}`}
              category={visible[i]}
              position={slot}
              onOpen={() => setActive(visible[i])}
            />
          ))}

          <div className={`absolute ${NAV_POSITION.top}`}>
            <ButtonHoverArrow
              direction="up"
              label="Previous services"
              expandLabel="Back"
              onClick={() => step(-1)}
            />
          </div>
          <div className={`absolute ${NAV_POSITION.right}`}>
            <ButtonHoverArrow
              direction="right"
              label="Next services"
              expandLabel="Next"
              onClick={() => step(1)}
            />
          </div>
          <div className={`absolute ${NAV_POSITION.bottom}`}>
            <ButtonHoverArrow
              direction="down"
              label="Next services"
              expandLabel="Next"
              onClick={() => step(1)}
            />
          </div>
          <div className={`absolute ${NAV_POSITION.left}`}>
            <ButtonHoverArrow
              direction="left"
              label="Previous services"
              expandLabel="Back"
              onClick={() => step(-1)}
            />
          </div>

          </div>

          <p className="mt-12 text-center text-[11px] leading-relaxed text-[var(--text-dim)] min-[960px]:mt-14">
            Showing 4 of {total} practices · use arrow.
          </p>
        </div>

        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[768px]:hidden">
          {visible.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActive(cat)}
              className="rounded-[20px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.06)] p-4 text-left backdrop-blur-[16px] transition-colors hover:border-[rgba(51,187,207,0.35)]"
            >
              <div className="flex gap-3">
                <CategoryIcon kind={cat.icon} />
                <div>
                  <h3 className="text-[15px] font-bold text-[var(--text)]">{cat.title}</h3>
                  <p className="mt-1 text-[12px] text-[var(--text-dim)]">{cat.summary}</p>
                </div>
              </div>
            </button>
          ))}
          <div className="col-span-full flex items-center justify-center gap-3 pt-2 min-[480px]:col-span-2">
            <button
              type="button"
              onClick={() => step(-1)}
              className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-[13px] text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Previous
            </button>
            <span className="text-[12px] text-[var(--text-dim)]">
              4 of {total} practices
            </span>
            <button
              type="button"
              onClick={() => step(1)}
              className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-[13px] text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <ServiceDetailModal category={active} onClose={() => setActive(null)} />
    </>
  );
}
