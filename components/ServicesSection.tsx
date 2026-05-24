import Image from "next/image";
import ServicesCategoryList from "@/components/ServicesCategoryList";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative mx-auto max-w-[1240px] px-6 py-16 min-[960px]:px-10 min-[960px]:py-20"
    >
      <header className="mb-12 text-center min-[960px]:mb-14">
        <div className="section-eyebrow mb-3">
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
          <div className="surface-card-sm p-5 min-[960px]:p-6">
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
          <div className="surface-card relative aspect-[4/3] w-full overflow-hidden">
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

        <ServicesCategoryList />
      </div>
    </section>
  );
}
