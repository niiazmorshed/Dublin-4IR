import ServicesOrbit from "@/components/services/ServicesOrbit";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative mx-auto w-full overflow-visible px-4 py-16 min-[960px]:px-5 min-[960px]:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(88vw,720px)] w-[min(88vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(51,187,207,0.1)_0%,transparent_65%)]"
      />

      <header className="relative mb-10 text-center min-[960px]:mb-14">
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
          Explore our practices in the round — enterprise, SME, commerce, fintech, insurance, RegTech, and more.
        </p>
      </header>

      <ServicesOrbit />
    </section>
  );
}
