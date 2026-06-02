"use client";

import { useEffect, useId, useRef, useState } from "react";
import { INNER_RING, OUTER_RING } from "@/components/tech-stack/tech-data";

const ALL = [...INNER_RING, ...OUTER_RING];
const tech = (name: string) => ALL.find((t) => t.name === name)!;

const LEFT = [tech("React"), tech("Next.js"), tech("TypeScript")];
const RIGHT = [tech("Node.js"), tech("PostgreSQL"), tech("Docker")];

function LogoTile({
  entry,
  innerRef,
}: {
  entry: (typeof ALL)[number];
  innerRef: (n: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={innerRef}
      className="z-10 grid h-12 w-12 place-items-center rounded-[14px] border border-[var(--border-soft)] bg-[var(--surface-tint)] shadow-[var(--shadow-card)] backdrop-blur-[14px] min-[560px]:h-14 min-[560px]:w-14"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 min-[560px]:h-7 min-[560px]:w-7">
        <path d={entry.path} fill={entry.color} />
      </svg>
    </div>
  );
}

export default function StackBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gid = useId().replace(/:/g, "");

  const [beams, setBeams] = useState<
    { d: string; reverse: boolean }[]
  >([]);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const hub = hubRef.current;
    if (!container || !hub) return;

    const compute = () => {
      const cRect = container.getBoundingClientRect();
      setBox({ w: cRect.width, h: cRect.height });
      const center = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left - cRect.left + r.width / 2,
          y: r.top - cRect.top + r.height / 2,
        };
      };
      const h = center(hub);

      const make = (nodes: (HTMLDivElement | null)[], reverse: boolean) =>
        nodes
          .filter(Boolean)
          .map((node) => {
            const p = center(node as HTMLElement);
            const cpx = (p.x + h.x) / 2;
            return {
              d: `M ${p.x} ${p.y} C ${cpx} ${p.y}, ${cpx} ${h.y}, ${h.x} ${h.y}`,
              reverse,
            };
          });

      setBeams([
        ...make(leftRefs.current, false),
        ...make(rightRefs.current, true),
      ]);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(container);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <section
      aria-labelledby="stack-beam-heading"
      className="relative w-full overflow-hidden py-20 min-[960px]:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 text-center min-[960px]:px-10">
        <span className="section-eyebrow justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--purple)]" />
          One connected stack
        </span>
        <h2
          id="stack-beam-heading"
          className="mt-3 text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--text)]"
        >
          Every layer, <span className="text-heading-gradient">wired together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-[var(--text-dim)]">
          Frontend, services, and data flow through one coherent pipeline — so
          the tools we choose talk to each other and ship as a single system.
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto mt-14 flex h-[340px] max-w-[760px] items-center justify-between px-2 min-[560px]:h-[400px] min-[560px]:px-10"
        >
          {/* beams */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${box.w} ${box.h}`}
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {beams.map((beam, i) => (
                <linearGradient
                  key={i}
                  id={`${gid}-beam-${i}`}
                  gradientUnits="objectBoundingBox"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0" stopColor="#5d3fd6" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#b9aaff" stopOpacity="1" />
                  <stop offset="1" stopColor="#5d3fd6" stopOpacity="0" />
                  <animateTransform
                    attributeName="gradientTransform"
                    type="translate"
                    from={beam.reverse ? "1 0" : "-1 0"}
                    to={beam.reverse ? "-1 0" : "1 0"}
                    dur="2.6s"
                    begin={`${i * 0.45}s`}
                    repeatCount="indefinite"
                  />
                </linearGradient>
              ))}
            </defs>

            {beams.map((beam, i) => (
              <path
                key={`base-${i}`}
                d={beam.d}
                stroke="rgba(220,215,232,0.14)"
                strokeWidth="1.4"
              />
            ))}
            {beams.map((beam, i) => (
              <path
                key={`flow-${i}`}
                d={beam.d}
                stroke={`url(#${gid}-beam-${i})`}
                strokeWidth="2"
                strokeLinecap="round"
              />
            ))}
          </svg>

          {/* left column */}
          <div className="relative flex flex-col gap-7 min-[560px]:gap-10">
            {LEFT.map((entry, i) => (
              <LogoTile
                key={entry.name}
                entry={entry}
                innerRef={(n) => {
                  leftRefs.current[i] = n;
                }}
              />
            ))}
          </div>

          {/* center hub */}
          <div
            ref={hubRef}
            className="relative z-10 grid h-[88px] w-[88px] place-items-center rounded-[24px] border border-[rgba(153,140,205,0.4)] bg-[radial-gradient(circle_at_30%_30%,rgba(153,140,205,0.55),transparent_60%),linear-gradient(160deg,#332760_0%,#161139_100%)] shadow-[0_0_0_1px_rgba(220,215,232,0.06)_inset,0_0_70px_0_rgba(93,63,214,0.55)] min-[560px]:h-[104px] min-[560px]:w-[104px]"
          >
            <div className="bg-[linear-gradient(180deg,#fff_0%,#dcd7e8_100%)] bg-clip-text text-[30px] font-extrabold tracking-[-0.04em] text-transparent min-[560px]:text-[36px]">
              D4
            </div>
          </div>

          {/* right column */}
          <div className="relative flex flex-col gap-7 min-[560px]:gap-10">
            {RIGHT.map((entry, i) => (
              <LogoTile
                key={entry.name}
                entry={entry}
                innerRef={(n) => {
                  rightRefs.current[i] = n;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
