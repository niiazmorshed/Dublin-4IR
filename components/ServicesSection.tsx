import type { CSSProperties } from "react";
import Image from "next/image";
import RevealGroup from "@/components/RevealGroup";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

type ServiceCategory = {
  title: string;
  summary: string;
  /** Short labels only — shown as a single scannable line */
  items: string[];
  icon: "enterprise" | "fintech" | "emerging" | "cloud" | "health";
};

const CATEGORIES: ServiceCategory[] = [
  {
    title: "Enterprise Software Development",
    summary: "ERP, CRM, e-commerce, CMS, and bespoke web & mobile.",
    icon: "enterprise",
    items: ["ERP & CRM", "E-commerce", "Enterprise CMS", "Custom apps"],
  },
  {
    title: "Fintech & Business Solutions",
    summary: "Financial strategy, insurance tech, payments, and workflow automation.",
    icon: "fintech",
    items: ["Fintech consulting", "Insurance platforms", "Payment APIs", "Process automation"],
  },
  {
    title: "AI, Data & Emerging Tech",
    summary: "ML, IoT, immersive experiences, and interactive products.",
    icon: "emerging",
    items: ["AI / ML & data", "IoT", "AR / VR", "Games (Unity / cross-platform)"],
  },
  {
    title: "Cloud & DevOps",
    summary: "Architecture, migration, CI/CD, resilience, and security testing.",
    icon: "cloud",
    items: ["Cloud consulting", "Migration & managed", "DevOps & QA", "Hosting & DR", "Pen testing"],
  },
  {
    title: "HealthTech, LMS & IT Talent",
    summary: "Digital health, learning platforms, and flexible engineering capacity.",
    icon: "health",
    items: ["HealthTech", "LMS", "Talent augmentation", "IT outsourcing"],
  },
];

function CategoryIcon({ kind }: { kind: ServiceCategory["icon"] }) {
  const common =
    "h-10 w-10 shrink-0 rounded-xl border border-white/[0.1] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.02)_100%)] p-2 text-[var(--purple-2)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] min-[960px]:h-11 min-[960px]:w-11 min-[960px]:p-2.5";
  switch (kind) {
    case "enterprise":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 21V6.5L12 3l8 3.5V21M4 21h16M9 21v-8h6v8M9 10h6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "fintech":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "emerging":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3c-4.5 3-6 7.5-6 10.5a6 6 0 1012 0c0-3-1.5-7.5-6-10.5z" strokeLinejoin="round" />
            <path d="M12 10v4M10 12h4" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "cloud":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 18h12a4 4 0 000-8 5 5 0 00-9.9-1A4 4 0 006 18z" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "health":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1112 6.5a5 5 0 117.5 6.072z" strokeLinejoin="round" />
            <path d="M12 10v6M9 13h6" strokeLinecap="round" />
          </svg>
        </div>
      );
  }
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative mx-auto max-w-[1240px] px-6 py-16 min-[960px]:px-10 min-[960px]:py-20"
    >
      <header className="mb-12 text-center min-[960px]:mb-14">
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[var(--text-muted)] uppercase">
          <span className="text-[var(--purple-2)]" aria-hidden>
            ✦
          </span>
          Services
        </div>
        <h2
          id="services-heading"
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)]"
        >
          Our Core{" "}
          <span className={`${serifItalic} text-[var(--text-muted)]`}>Capabilities</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[var(--text-dim)]">
          From ideation to deployment, we deliver end-to-end technology solutions tailored to your business needs.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border border-[rgba(220,215,232,0.1)] bg-[linear-gradient(165deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] min-[960px]:p-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-dim)] uppercase">
              At a glance
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">
              Five focused practices — enterprise engineering, financial & operations tech, intelligent products, cloud &amp; DevOps, and HealthTech with flexible talent.
            </p>
            <ul className="mt-4 space-y-2 text-[13px] leading-snug text-[var(--text)]">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--purple-2)]" aria-hidden />
                <span>Platforms, ERP/CRM, commerce &amp; CMS</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--purple-2)]" aria-hidden />
                <span>Fintech, insurance, payments &amp; workflows</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--purple-2)]" aria-hidden />
                <span>AI/ML, IoT, AR/VR &amp; games</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--purple-2)]" aria-hidden />
                <span>Cloud, migration, DevOps &amp; security testing</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--purple-2)]" aria-hidden />
                <span>HealthTech, LMS &amp; outsourced engineering</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[rgba(220,215,232,0.1)] bg-[rgba(255,255,255,0.02)] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]">
            <Image
              src="/tech3.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={false}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(14,11,25,0.2)_0%,transparent_50%,rgba(93,63,214,0.12)_100%)]"
              aria-hidden
            />
          </div>
        </div>

        <RevealGroup className="flex flex-col gap-3 min-[960px]:gap-3.5">
          {CATEGORIES.map((cat, i) => (
            <article
              key={cat.title}
              className="stagger-item group relative overflow-hidden rounded-2xl border border-[rgba(220,215,232,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] min-[960px]:p-5"
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
                  <a
                    href="#contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--purple-2)] transition-colors hover:text-[var(--text)] min-[960px]:text-[13px]"
                  >
                    Learn more
                    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 left-3 right-3 h-px rounded-full bg-[linear-gradient(90deg,transparent,rgba(93,63,214,0.9),rgba(153,140,205,0.7),transparent)] opacity-70 min-[960px]:left-4 min-[960px]:right-4"
                aria-hidden
              />
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
