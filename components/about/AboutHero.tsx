"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Earth from "@/components/ui/globe";

const LINES = [
  "We are innovators, problem-solvers, and",
  "visionaries experts in our fields and",
  "catalysts for meaningful change",
];

/** Emphasised words render in italic serif (Playfair) like the reference. */
const HIGHLIGHT = new Set([
  "innovators,",
  "problem-solvers,",
  "meaningful",
  "change",
]);

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M5 11l6-6M6 5h5v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  let wordIndex = 0;

  return (
    <section className="relative flex min-h-[94vh] w-full items-center justify-center overflow-hidden px-6">
      {/* globe behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-[-48%] z-0 h-[1000px] w-[1000px] max-w-[140vw] -translate-x-1/2 opacity-60 [mask-image:radial-gradient(circle_at_50%_45%,#000_42%,transparent_68%)] min-[960px]:bottom-[-52%]"
      >
        <Earth className="h-full w-full" />
      </div>

      {/* faint engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(220,215,232,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,215,232,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_35%,#000_50%,transparent_100%)]"
      />
      {/* accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 z-0 h-[520px] w-[760px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(51,187,207,0.22)_0%,transparent_60%)] blur-[30px]"
      />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <span
          className="section-eyebrow justify-center transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(12px)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--purple)]" />
          About Dublin4ir
        </span>

        <h1 className="mt-7 text-[clamp(2.1rem,5.6vw,4.6rem)] font-bold leading-[1.14] tracking-[-0.03em] text-[var(--text)]">
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {line.split(" ").map((word) => {
                const i = wordIndex++;
                const highlighted = HIGHLIGHT.has(word);
                return (
                  <span
                    key={`${li}-${i}`}
                    className="inline-block whitespace-pre"
                    style={{
                      opacity: mounted ? 1 : 0,
                      filter: mounted ? "blur(0)" : "blur(8px)",
                      transform: mounted ? "none" : "translateY(20px)",
                      transition:
                        "opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1), filter 0.7s cubic-bezier(0.22,0.61,0.36,1)",
                      transitionDelay: `${0.18 + i * 0.06}s`,
                    }}
                  >
                    <span
                      className={
                        highlighted ? `${serifItalic} text-[var(--purple-2)]` : ""
                      }
                    >
                      {word}
                    </span>{" "}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <div
          className="mt-9 flex items-center justify-center gap-3 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transitionDelay: "1s",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
          <Link
            href="/contact"
            aria-label="Get started"
            className="grid h-11 w-11 place-items-center rounded-full bg-[var(--purple-btn)] text-white transition-colors hover:bg-[var(--purple-btn-hover)]"
          >
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
