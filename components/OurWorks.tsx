import ProjectStack from "@/components/ProjectStack";

export default function OurWorks() {
  return (
    <section
      id="projects"
      aria-labelledby="our-works-heading"
      className="relative mx-auto max-w-[1240px] px-6 pt-10 pb-24 min-[960px]:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[420px] w-[min(100%,760px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(93,63,214,0.18)_0%,transparent_70%)] blur-3xl"
      />

      <div className="text-center">
        <div className="section-eyebrow mb-4 rounded-full border border-[var(--border-soft)] bg-[var(--surface-tint)] py-1.5 pr-3.5 pl-2.5 shadow-[var(--shadow-card)] backdrop-blur-[10px]">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-[linear-gradient(135deg,#998ccd_0%,#5d3fd6_60%,#332760_100%)] text-[10px] font-extrabold text-white">
            ◆
          </span>
          Our Works
        </div>
        <h2
          id="our-works-heading"
          className="text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-0.03em] text-[var(--text)]"
        >
          Projects we&apos;ve shipped
        </h2>
        <p className="mx-auto mt-3 max-w-[540px] text-[15px] leading-relaxed text-[var(--text-dim)]">
          A selection of live products we&apos;ve designed and built — scroll to
          explore each one.
        </p>
      </div>

      <ProjectStack />
    </section>
  );
}
