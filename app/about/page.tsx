import type { Metadata } from "next";
import Link from "next/link";
import SmoothScroll from "@/components/about/SmoothScroll";
import AboutHero from "@/components/about/AboutHero";
import StackingServices from "@/components/about/StackingServices";
import IndustriesBeans from "@/components/about/IndustriesBeans";
import StackBeam from "@/components/about/StackBeam";

export const metadata: Metadata = {
  title: "About — Dublin4ir",
  description:
    "We are innovators, problem-solvers, and visionaries — building resilient infrastructure, intelligent products, and secure platforms for governments and enterprises worldwide.",
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="relative w-full">
        <AboutHero />
        <StackingServices />
        <IndustriesBeans />
        <StackBeam />

        {/* closing CTA */}
        <section className="relative w-full px-6 py-24 min-[960px]:py-32">
          <div className="surface-card-accent relative mx-auto max-w-[1000px] overflow-hidden px-8 py-16 text-center min-[960px]:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(51,187,207,0.22),transparent_70%)]"
            />
            <h2 className="relative text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--text)]">
              Let&apos;s build something that lasts.
            </h2>
            <p className="relative mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-[var(--text-dim)]">
              Tell us where you&apos;re headed. We&apos;ll bring the
              infrastructure, the engineering, and the intelligence to get you
              there.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/#services" className="btn-secondary">
                Explore our services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
