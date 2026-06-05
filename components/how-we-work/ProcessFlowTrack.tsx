"use client";

import type { CSSProperties } from "react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/lib/process-steps";
import ProcessCard from "@/components/how-we-work/ProcessCard";

type ConnectorPath = { d: string; key: number };

function buildConnectorPath(
  from: DOMRect,
  to: DOMRect,
  container: DOMRect,
  fromAlign: "left" | "right",
  toAlign: "left" | "right",
): string {
  const pad = 20;
  const y1 = from.bottom - container.top;
  /* Arrow sits slightly below the next card’s top edge */
  const y2 = to.top - container.top + 14;
  const gap = y2 - y1;
  const drop = Math.min(40, Math.max(22, gap * 0.38));
  const yMid = y1 + drop;

  const x1 =
    fromAlign === "left"
      ? from.right - container.left - pad
      : from.left - container.left + pad;

  const x2 =
    toAlign === "right"
      ? to.left - container.left + pad
      : to.right - container.left - pad;

  /* Vertical down from previous card → horizontal → vertical into next card */
  return `M ${x1} ${y1} V ${yMid} H ${x2} V ${y2}`;
}

function MobileConnector({ animIndex }: { animIndex: number }) {
  return (
    <div
      className="stagger-item stagger-item--flow-line flex justify-center pb-3 pt-8 min-[960px]:hidden"
      style={{ "--i": animIndex } as CSSProperties}
      aria-hidden
    >
      <div className="flex flex-col items-center">
        {/* Long vertical stem so the arrow sits low in the gap, clear of the card above */}
        <div className="h-16 w-0 border-l-2 border-dashed border-[var(--purple-2)] opacity-75" />
        <svg
          viewBox="0 0 12 10"
          className="mt-0.5 h-3 w-3.5 text-[var(--purple-2)]"
          aria-hidden
        >
          <path d="M1 2 L6 9 L11 2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default function ProcessFlowTrack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [paths, setPaths] = useState<ConnectorPath[]>([]);
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });

  const updatePaths = useCallback(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    const isDesktop = window.matchMedia("(min-width: 960px)").matches;
    if (!isDesktop) {
      setPaths([]);
      return;
    }

    const cRect = container.getBoundingClientRect();
    setSvgSize({ w: container.offsetWidth, h: container.offsetHeight });

    const next: ConnectorPath[] = [];

    for (let i = 0; i < PROCESS_STEPS.length - 1; i++) {
      const fromEl = cardRefs.current[i];
      const toEl = cardRefs.current[i + 1];
      if (!fromEl || !toEl) continue;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();
      if (fromRect.height === 0 || toRect.height === 0) continue;

      next.push({
        key: i,
        d: buildConnectorPath(
          fromRect,
          toRect,
          cRect,
          PROCESS_STEPS[i].align,
          PROCESS_STEPS[i + 1].align,
        ),
      });
    }

    setPaths(next);
  }, []);

  const setCardRef = useCallback(
    (index: number, el: HTMLElement | null) => {
      cardRefs.current[index] = el;
      if (el) requestAnimationFrame(updatePaths);
    },
    [updatePaths],
  );

  useEffect(() => {
    updatePaths();

    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => requestAnimationFrame(updatePaths));
    ro.observe(container);

    cardRefs.current.forEach((el) => {
      if (el) ro.observe(el);
    });

    const mq = window.matchMedia("(min-width: 960px)");
    const onMq = () => requestAnimationFrame(updatePaths);
    mq.addEventListener("change", onMq);
    window.addEventListener("resize", updatePaths);

    const revealRoot = container.closest("[data-revealed]");
    const mo = revealRoot
      ? new MutationObserver(() => requestAnimationFrame(updatePaths))
      : null;
    if (mo && revealRoot) {
      mo.observe(revealRoot, { attributes: true, attributeFilter: ["data-revealed"] });
    }

    const t1 = window.setTimeout(updatePaths, 100);
    const t2 = window.setTimeout(updatePaths, 500);
    const t3 = window.setTimeout(updatePaths, 1000);

    return () => {
      ro.disconnect();
      mo?.disconnect();
      mq.removeEventListener("change", onMq);
      window.removeEventListener("resize", updatePaths);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [updatePaths]);

  return (
    <div
      ref={containerRef}
      className="process-flow-track relative mx-auto flex w-full max-w-[820px] flex-col"
    >
      {svgSize.w > 0 && paths.length > 0 && (
        <svg
          className="pointer-events-none absolute left-0 top-0 z-0 hidden overflow-visible min-[960px]:block"
          width={svgSize.w}
          height={svgSize.h}
          fill="none"
          aria-hidden
        >
          <defs>
            <marker
              id="process-flow-arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="5"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0 0 L10 5 L0 10 Z" fill="var(--purple-2)" />
            </marker>
          </defs>
          {paths.map(({ d, key }) => (
            <path
              key={key}
              d={d}
              stroke="var(--purple-2)"
              strokeWidth="2"
              strokeDasharray="7 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#process-flow-arrowhead)"
              opacity="0.85"
            />
          ))}
        </svg>
      )}

      {PROCESS_STEPS.map((step, i) => {
        const animIndex = i * 2;
        const slideClass =
          step.align === "left" ? "stagger-item--from-left" : "stagger-item--from-right";
        const isLast = i === PROCESS_STEPS.length - 1;

        return (
          <Fragment key={step.number}>
            <div
              ref={(el) => setCardRef(i, el)}
              className={`process-flow-card stagger-item stagger-item--flow-card ${slideClass} relative z-[1] w-full max-w-[min(100%,560px)] ${
                step.align === "left" ? "self-start" : "self-end"
              } ${!isLast ? "min-[960px]:mb-16" : ""}`}
              style={{ "--i": animIndex } as CSSProperties}
            >
              <ProcessCard step={step} />
            </div>

            {!isLast && <MobileConnector animIndex={animIndex + 1} />}
          </Fragment>
        );
      })}
    </div>
  );
}
