import Image from "next/image";
import TechOrbit from "@/components/tech-stack/TechOrbit";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="tech-stack-heading"
      className="relative mx-auto max-w-[1240px] px-6 pb-14 pt-4 min-[960px]:px-10"
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-5">
        {/* Left: orbit — "Every Stack Ever" */}
        <div className="flex min-h-0 flex-col rounded-2xl border border-[rgba(220,215,232,0.1)] bg-[linear-gradient(165deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-6 lg:col-span-5 lg:row-span-2 lg:min-h-[440px]">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-dim)] uppercase">
            Technology
          </p>
          <h2
            id="tech-stack-heading"
            className="mt-2 max-w-[20ch] text-[clamp(1.5rem,4vw,2rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)]"
          >
            Every{" "}
            <span className={`${serifItalic} text-[var(--text-muted)]`}>Stack</span> Ever
          </h2>
          <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-[var(--text-dim)]">
            End-to-end proficiency across web, mobile, APIs, and data — from JavaScript to cloud-native delivery.
          </p>

          <div className="relative mt-auto flex flex-1 flex-col items-center justify-center pt-4 min-h-[240px] sm:min-h-[260px]">
            <TechOrbit className="!max-w-[min(100%,320px)] sm:!max-w-[min(100%,360px)]" />
            <p className="mt-4 text-center text-[11px] text-[var(--text-dim)]">
              Hover to pause · 22 tools on twin orbits
            </p>
          </div>
        </div>

        {/* Middle top: blue CTA */}
        <div className="flex flex-col justify-between rounded-2xl border border-[rgba(93,63,214,0.35)] bg-[linear-gradient(145deg,#5d3fd6_0%,#4a32c4_50%,#332760_100%)] p-5 text-white shadow-[0_24px_48px_-24px_rgba(93,63,214,0.55)] sm:p-6 lg:col-span-4 lg:col-start-6">
          <div>
            <p className="text-[13px] font-semibold leading-snug text-white/95 sm:text-[15px]">
              Quick access to vetted delivery teams
            </p>
            <p className="mt-1 text-[12px] text-white/70">
              Government &amp; enterprise projects, aligned to your timelines.
            </p>
          </div>
          <p
            className="mt-5 text-[clamp(2.25rem,7vw,3.4rem)] font-extrabold leading-none tracking-[-0.04em] text-white tabular-nums"
            aria-label="Under twelve hours initial response"
          >
            &lt;12h
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
            Typical first response window
          </p>
        </div>

        {/* Middle bottom: image + copy */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[rgba(220,215,232,0.1)] bg-[rgba(12,10,22,0.6)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:col-span-4 lg:col-start-6">
          <div className="p-5 pb-3 sm:p-6 sm:pb-4">
            <h3 className="text-lg font-bold tracking-tight text-[var(--text)]">
              Zero administrative{" "}
              <span className={`${serifItalic} text-[var(--text-muted)]`}>burden</span>
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-dim)]">
              We own delivery mechanics—clear reporting, secure practices, and procurement-friendly engagement.
            </p>
          </div>
          <div className="relative mt-auto aspect-[16/6] w-full min-h-[120px]">
            <Image
              src="/tech.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(14,11,25,0.85)_0%,transparent_55%)]"
              aria-hidden
            />
          </div>
        </div>

        {/* Right: engagements + portal visual */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[rgba(220,215,232,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-1">
          <div className="p-5 sm:p-6">
            <h3 className="text-[clamp(1.125rem,2.5vw,1.375rem)] font-bold leading-snug tracking-[-0.02em] text-[var(--text)]">
              <span className={`${serifItalic} text-[var(--text-muted)]`}>Flexible</span> and hassle-free{" "}
              engagements
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-dim)]">
              Time &amp; materials suits continuous delivery (backlog-driven, weekly reporting, rapid iteration). Fixed milestones fit tendered outcomes with defined scope and acceptance; blended delivery supports phased rollouts—each aligned with procurement, audit trails, security reviews, and budget controls.
            </p>
          </div>
          <div className="relative mt-auto flex min-h-[190px] flex-1 items-end justify-center lg:min-h-[220px]">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div className="h-[72%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(93,63,214,0.45)_0%,rgba(93,63,214,0.08)_45%,transparent_70%)] blur-md" />
              <div className="absolute h-[52%] w-[52%] rounded-full border border-[rgba(93,63,214,0.5)] shadow-[0_0_60px_-8px_rgba(93,63,214,0.75),inset_0_0_40px_-10px_rgba(93,63,214,0.35)]" />
              <div className="absolute h-[38%] w-[38%] rounded-full bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.25)_0%,transparent_50%)] opacity-70" />
            </div>
            <div className="relative z-[1] h-[170px] w-full max-w-[92%] sm:h-[200px]">
              <Image
                src="/tech2.jpg"
                alt=""
                fill
                className="object-cover object-bottom opacity-90 mix-blend-screen contrast-[1.05]"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(14,11,25,0.55)_15%,transparent_50%)]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
