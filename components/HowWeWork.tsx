import RevealGroup from "@/components/RevealGroup";
import ProcessFlowTrack from "@/components/how-we-work/ProcessFlowTrack";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative mx-auto max-w-[1240px] px-6 py-16 min-[960px]:px-10 min-[960px]:py-24"
    >
      <header className="mb-12 text-center min-[960px]:mb-16">
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[var(--text-muted)] uppercase">
          <span className="text-[var(--purple-2)]" aria-hidden>
            ✦
          </span>
          Process
        </div>
        <h2
          id="how-we-work-heading"
          className="mx-auto max-w-[18ch] text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--text)]"
        >
          How We Work — From{" "}
          <span className={`${serifItalic} text-[var(--text-muted)]`}>Concept</span> to Completion
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[var(--text-dim)]">
          A structured delivery model connecting Dublin strategy with Bangladesh engineering — transparent at every stage.
        </p>
      </header>

      <RevealGroup>
        <ProcessFlowTrack />
      </RevealGroup>
    </section>
  );
}
