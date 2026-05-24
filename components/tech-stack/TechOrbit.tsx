"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TechIcon from "./TechIcon";
import { INNER_RING, OUTER_RING, type TechEntry } from "./tech-data";

/** Orbit radius as fraction of half the stage (SVG circles r=32 / r=44, center 50). */
const INNER_ORBIT_RATIO = 32 / 50;
const OUTER_ORBIT_RATIO = 44 / 50;

function useStageSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState(400);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setSize(el.offsetWidth);
  }, [ref]);

  useEffect(() => {
    measure();
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, ref]);

  const half = size / 2;
  return {
    innerRadius: half * INNER_ORBIT_RATIO,
    outerRadius: half * OUTER_ORBIT_RATIO,
  };
}

type SolarRingProps = {
  items: TechEntry[];
  radius: number;
  duration: number;
  direction: "cw" | "ccw";
  iconSize?: "sm" | "md";
  paused: boolean;
};

function SolarRing({
  items,
  radius,
  duration,
  direction,
  iconSize = "md",
  paused,
}: SolarRingProps) {
  const ringSpin = direction === "cw" ? "orbit-cw" : "orbit-ccw";
  const iconCounter = direction === "cw" ? "orbit-ccw" : "orbit-cw";
  const playState = paused ? "paused" : "running";
  const diameter = radius * 2;

  return (
    <div
      className="orbit-ring pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-[var(--border-soft)] shadow-[var(--shadow-card)]"
      style={{
        width: diameter,
        height: diameter,
        marginLeft: -radius,
        marginTop: -radius,
        animation: `${ringSpin} ${duration}s linear infinite`,
        animationPlayState: playState,
      }}
      aria-hidden
    >
      {items.map((tech, index) => {
        const angle = (360 / items.length) * index;
        return (
          <div
            key={tech.name}
            className="pointer-events-auto absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
            }}
          >
            <div
              className="absolute left-0 top-0"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div
                className="orbit-counter group"
                style={{
                  animation: `${iconCounter} ${duration}s linear infinite`,
                  animationPlayState: playState,
                }}
              >
                <div
                  tabIndex={0}
                  title={tech.name}
                  className="grid h-11 w-11 place-items-center rounded-[13px] border border-white/[0.12] bg-[linear-gradient(145deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_100%)] shadow-[0_1px_0_rgba(255,255,255,0.16)_inset,0_12px_32px_-12px_rgba(0,0,0,0.65)] backdrop-blur-[14px] backdrop-saturate-[160%] transition-[transform,box-shadow,border-color] duration-300 hover:scale-110 hover:border-white/25 hover:shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_16px_40px_-10px_var(--purple-glow)] min-[640px]:h-12 min-[640px]:w-12 min-[960px]:h-[52px] min-[960px]:w-[52px] min-[960px]:rounded-[14px]"
                >
                  <TechIcon path={tech.path} color={tech.color} label={tech.name} size={iconSize} />
                </div>
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-wide text-[var(--text-dim)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 min-[960px]:text-[11px]">
                  {tech.name}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TechOrbit({ className = "" }: { className?: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const { innerRadius, outerRadius } = useStageSize(stageRef);

  return (
    <div
      ref={stageRef}
      className={`relative mx-auto aspect-square w-full max-w-[min(92vw,720px)] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,63,214,0.35)_0%,transparent_70%)] blur-xl"
      />

      <SolarRing
        items={INNER_RING}
        radius={innerRadius}
        duration={55}
        direction="cw"
        paused={paused}
      />
      <SolarRing
        items={OUTER_RING}
        radius={outerRadius}
        duration={85}
        direction="ccw"
        iconSize="sm"
        paused={paused}
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[clamp(1.125rem,3.2vw,1.75rem)] font-extrabold tracking-[-0.04em] text-[var(--text)]">
            Dublin
            <span className="bg-[linear-gradient(135deg,#61dafb_0%,#998ccd_45%,#5d3fd6_75%,#b68072_100%)] bg-clip-text text-transparent">
              4ir
            </span>
          </p>
          <p className="mt-1 text-[11px] font-medium tracking-[0.2em] text-[var(--text-dim)] uppercase min-[640px]:text-[12px]">
            Tech stack
          </p>
        </div>
      </div>
    </div>
  );
}
