"use client";

import Image from "next/image";
import CountUp from "@/components/CountUp";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

const statValueClass =
  "text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-none tracking-[-0.03em] text-white tabular-nums";

function StatCard({
  label,
  value,
  className = "",
  decor,
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
  decor?: React.ReactNode;
}) {
  return (
    <article
      className={`surface-card relative flex min-h-[148px] flex-col justify-between overflow-hidden p-5 sm:min-h-[160px] sm:p-6 ${className}`}
    >
      {decor}
      <div className="relative z-[1]">
        <p className="max-w-[18ch] text-[13px] leading-snug text-white/75">{label}</p>
        <p className={`mt-3 ${statValueClass}`}>{value}</p>
      </div>
    </article>
  );
}

function VerticalGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-[10%] left-[18%] h-[130%] w-[28%] rotate-[8deg] bg-[linear-gradient(180deg,rgba(51,187,207,0.55)_0%,rgba(93,212,224,0.12)_55%,transparent_100%)]" />
      <div className="absolute -top-[5%] left-[48%] h-[120%] w-[18%] -rotate-[6deg] bg-[linear-gradient(180deg,rgba(51,187,207,0.35)_0%,transparent_70%)]" />
      <div className="absolute top-0 right-[8%] h-full w-[22%] rotate-[12deg] bg-[linear-gradient(180deg,rgba(93,212,224,0.28)_0%,transparent_65%)]" />
    </div>
  );
}

function HorizontalGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[linear-gradient(90deg,transparent,rgba(51,187,207,0.9),rgba(93,212,224,0.7),rgba(182,128,114,0.5),transparent)]" />
      <div className="absolute bottom-2 left-[5%] h-[2px] w-[90%] bg-[linear-gradient(90deg,transparent,rgba(51,187,207,0.45),transparent)]" />
      <div className="absolute bottom-6 left-[15%] right-[10%] h-16 bg-[radial-gradient(ellipse_at_center,rgba(51,187,207,0.22)_0%,transparent_70%)] blur-xl" />
    </div>
  );
}

function RetentionDiagram() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 100"
      className="pointer-events-none absolute top-1/2 right-4 h-[72%] w-[min(42%,200px)] -translate-y-1/2 opacity-80 sm:right-6"
      fill="none"
    >
      <path
        d="M10 70 L50 70 L70 45 L95 55 L120 30 L155 38 L190 15"
        stroke="rgba(93,212,224,0.55)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 70 L50 70 L70 45 L95 55 L120 30 L155 38 L190 15 L190 85 L10 85 Z"
        fill="url(#impact-fill)"
        opacity="0.35"
      />
      <circle cx="120" cy="30" r="4" fill="#5dd4e0" />
      <circle cx="155" cy="38" r="3" fill="#33bbcf" />
      <circle cx="190" cy="15" r="3.5" fill="#c8f0f4" />
      <defs>
        <linearGradient id="impact-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5dd4e0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#5dd4e0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TeamGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-[15%] -bottom-[10%] h-[90%] w-[90%] rounded-full bg-[radial-gradient(circle,rgba(51,187,207,0.5)_0%,rgba(10,61,72,0.18)_45%,transparent_70%)] blur-2xl"
    />
  );
}

export default function ImpactStats() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="relative overflow-hidden bg-[var(--bg)]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <Image
          src="/crome.png"
          alt=""
          width={1200}
          height={1200}
          className="absolute top-[38%] left-1/2 h-[min(110vw,880px)] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.5] min-[960px]:top-[52%] min-[960px]:right-[-10%] min-[960px]:left-auto min-[960px]:translate-x-0 min-[960px]:opacity-[0.58]"
          sizes="(min-width: 960px) 880px, 110vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,4,15,0.9)_0%,rgba(0,4,15,0.42)_45%,rgba(0,4,15,0.88)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-14 min-[960px]:px-10 min-[960px]:py-16">
        <header className="mb-8 min-[960px]:mb-10">
        <p className="section-eyebrow">
          <span className="text-[var(--purple-2)]" aria-hidden>
            ✦
          </span>
          Impact
        </p>
        <h2
          id="impact-heading"
          className="mt-3 max-w-[20ch] text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--text)]"
        >
          Delivery at <span className={`${serifItalic} text-[var(--text-muted)]`}>scale</span>
        </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:items-stretch lg:gap-5">
        <StatCard
          label="Active users on the platforms we designed"
          value={<CountUp end={100} suffix="K+" duration={2200} />}
          className="lg:col-span-3 lg:row-start-1"
          decor={<VerticalGlow />}
        />

        <article className="surface-card-accent-solid relative flex min-h-[220px] flex-col justify-between overflow-hidden p-5 sm:p-6 lg:col-span-3 lg:row-span-2 lg:row-start-1 lg:min-h-0">
          <div className="relative z-[1] space-y-3">
            <p className="text-[13px] font-semibold leading-snug text-white/90">
              Total project value delivered for clients
            </p>
            <p className="max-w-[26ch] text-[12px] leading-relaxed text-white/70">
              Cumulative value of government and enterprise programmes — from discovery and
              procurement through build, launch, and ongoing support across our Dublin and
              Dhaka delivery teams.
            </p>
          </div>
          <p className={`relative z-[1] mt-6 ${statValueClass} !text-[clamp(2rem,4.5vw,3rem)] !tracking-[-0.04em]`}>
            <CountUp end={500} prefix="€" suffix="K+" duration={2400} />
          </p>
        </article>

        <article className="surface-card relative flex min-h-[148px] flex-col justify-between overflow-hidden p-5 sm:min-h-[160px] sm:p-6 lg:col-span-3 lg:row-start-1">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(51,187,207,0.28)_0%,rgba(0,4,15,0.15)_55%,rgba(0,4,15,0.85)_100%)]"
          />
          <VerticalGlow />
          <div className="relative z-[1]">
            <p className="text-[13px] leading-snug text-white/75">Total clients</p>
            <p className={`mt-3 ${statValueClass}`}>
              <CountUp end={15} duration={2000} />
            </p>
          </div>
        </article>

        <StatCard
          label="Complex projects complete"
          value={<CountUp end={10} suffix="+" duration={2100} />}
          className="lg:col-span-3 lg:row-start-2"
          decor={<HorizontalGlow />}
        />

        <article className="surface-card relative flex min-h-[148px] flex-col justify-between overflow-hidden p-5 sm:min-h-[160px] sm:p-6 lg:col-span-3 lg:col-start-7 lg:row-start-2">
          <RetentionDiagram />
          <div className="relative z-[1] max-w-[55%]">
            <p className="text-[13px] leading-snug text-white/75">Client retention rate</p>
            <p className={`mt-3 ${statValueClass}`}>
              <CountUp end={94} suffix="%" duration={2000} />
            </p>
          </div>
        </article>

        <div className="flex flex-col gap-4 lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-1 lg:h-full lg:min-h-0">
          <article className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-card-sm)] border border-[var(--border-soft)] bg-[linear-gradient(165deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] px-4 py-3 shadow-[var(--shadow-card)]">
            <Image
              src="/logo.png"
              alt="Dublin 4ir"
              width={2618}
              height={835}
              className="h-7 w-auto"
              sizes="160px"
            />
          </article>

          <article className="surface-card relative flex min-h-[148px] flex-1 flex-col justify-between overflow-hidden p-5 sm:min-h-[160px] sm:p-6">
            <TeamGlow />
            <div className="relative z-[1]">
              <p className="text-[13px] leading-snug text-white/75">Team members</p>
              <p className={`mt-3 ${statValueClass}`}>
                <CountUp end={30} suffix="+" duration={2200} />
              </p>
              <p className="mt-3 max-w-[28ch] text-[11px] leading-relaxed text-white/60 sm:text-[12px]">
                Dublin &amp; Dhaka delivery leads across product, engineering, and QA.
                Aligned time zones from discovery and build through launch and ongoing
                support for government and enterprise programmes.
              </p>
            </div>
          </article>
        </div>
      </div>
      </div>
    </section>
  );
}
