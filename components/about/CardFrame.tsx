"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

/**
 * A rounded panel wrapped in a gradient "tabbed frame" — the folder-tab outline
 * seen on the reference Infrastructure Services card. The outline is drawn as a
 * size-aware SVG path (regenerated via ResizeObserver) so the corners and the
 * concave fillets stay crisp at any width/height instead of distorting like a
 * stretched static SVG would.
 */

const TAB_H = 30; // how far the tab protrudes above the panel top edge
const PAD = 8; // breathing room so the stroke + glow never clip

type Geometry = { w: number; h: number };

function buildFramePath({ w, h }: Geometry): string {
  const R = 24; // panel corner radius
  const tr = 15; // tab corner radius (convex)
  const fr = 18; // fillet radius where the tab meets the top edge (concave)

  // Tab sits on the right portion of the top edge.
  const tabW = Math.min(Math.max(w * 0.42, 150), 340);
  const tabRightX = w - 64;
  const tabLeftX = Math.max(tabRightX - tabW, R + 48);

  const top = TAB_H; // y of the panel's top edge (tab rises above to y≈0)

  return [
    `M ${R} ${top}`,
    `H ${tabLeftX - fr}`,
    // concave fillet up into the tab's left wall
    `A ${fr} ${fr} 0 0 0 ${tabLeftX} ${top - fr}`,
    `V ${tr}`,
    // tab top-left convex corner
    `A ${tr} ${tr} 0 0 1 ${tabLeftX + tr} 0`,
    `H ${tabRightX - tr}`,
    // tab top-right convex corner
    `A ${tr} ${tr} 0 0 1 ${tabRightX} ${tr}`,
    `V ${top - fr}`,
    // concave fillet back down to the top edge
    `A ${fr} ${fr} 0 0 0 ${tabRightX + fr} ${top}`,
    `H ${w - R}`,
    `A ${R} ${R} 0 0 1 ${w} ${top + R}`,
    `V ${top + h - R}`,
    `A ${R} ${R} 0 0 1 ${w - R} ${top + h}`,
    `H ${R}`,
    `A ${R} ${R} 0 0 1 0 ${top + h - R}`,
    `V ${top + R}`,
    `A ${R} ${R} 0 0 1 ${R} ${top}`,
    "Z",
  ].join(" ");
}

type CardFrameProps = {
  children: ReactNode;
  className?: string;
  /** label shown inside the protruding tab */
  tabLabel?: string;
};

export default function CardFrame({
  children,
  className,
  tabLabel,
}: CardFrameProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Geometry>({ w: 0, h: 0 });
  const gradientId = useId();

  useEffect(() => {
    const el = hostRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) setSize({ w: Math.round(rect.width), h: Math.round(rect.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const path = size.w > 0 && size.h > 0 ? buildFramePath(size) : "";

  return (
    <div
      ref={hostRef}
      className={`relative ${className ?? ""}`}
      style={{ marginTop: TAB_H }}
    >
      {path && (
        <svg
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: -(TAB_H + PAD),
            left: -PAD,
            width: size.w + PAD * 2,
            height: size.h + TAB_H + PAD * 2,
            overflow: "visible",
          }}
          viewBox={`${-PAD} ${-PAD} ${size.w + PAD * 2} ${size.h + TAB_H + PAD * 2}`}
          fill="none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5dd4e0" />
              <stop offset="45%" stopColor="#33bbcf" />
              <stop offset="100%" stopColor="#2f2270" />
            </linearGradient>
          </defs>
          {/* soft outer halo */}
          <path
            d={path}
            stroke="#33bbcf"
            strokeOpacity="0.35"
            strokeWidth="6"
            strokeLinejoin="round"
            style={{ filter: "blur(7px)" }}
          />
          {/* faint inner hairline for the double-line look */}
          <path
            d={path}
            stroke="rgba(220,215,232,0.16)"
            strokeWidth="5.5"
            strokeLinejoin="round"
          />
          {/* crisp gradient stroke */}
          <path
            d={path}
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {tabLabel && (
        <span
          className="pointer-events-none absolute right-[80px] z-10 text-[11px] font-semibold tracking-[0.16em] text-[var(--purple-2)] uppercase"
          style={{ top: -(TAB_H - 8) }}
        >
          {tabLabel}
        </span>
      )}

      <div className="relative h-full">{children}</div>
    </div>
  );
}
