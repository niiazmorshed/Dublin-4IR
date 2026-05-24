import Image from "next/image";
import RevealGroup from "@/components/RevealGroup";
import ProcessFlowTrack from "@/components/how-we-work/ProcessFlowTrack";

const serifItalic = "font-[family-name:var(--font-playfair)] italic font-normal";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden bg-[var(--bg)]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <Image
          src="/metalbg.png"
          alt=""
          width={800}
          height={800}
          className="absolute top-[4%] -left-[16%] h-[min(68vw,500px)] w-auto max-w-none opacity-[0.46] min-[960px]:top-[8%] min-[960px]:-left-[5%] min-[960px]:opacity-[0.54]"
          sizes="(min-width: 960px) 500px, 68vw"
          priority={false}
        />
        <Image
          src="/metbg2.png"
          alt=""
          width={800}
          height={800}
          className="absolute -right-[18%] bottom-[2%] h-[min(74vw,560px)] w-auto max-w-none opacity-[0.44] min-[960px]:-right-[4%] min-[960px]:bottom-[6%] min-[960px]:opacity-[0.5]"
          sizes="(min-width: 960px) 560px, 74vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,25,0.9)_0%,rgba(14,11,25,0.38)_45%,rgba(14,11,25,0.88)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-16 min-[960px]:px-10 min-[960px]:py-24">
        <header className="mb-12 text-center min-[960px]:mb-16">
          <div className="section-eyebrow mb-3">
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
      </div>
    </section>
  );
}
