"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fineAnswer from "@/public/fineanswer.png";
import irishBangla from "@/public/irishbangla.png";
import fineAnswerIreland from "@/public/fineanswerIreland.png";

type Project = {
  name: string;
  category: string;
  description: string;
  liveUrl: string;
  image: StaticImageData;
  /** unique accent so each stacked card is visually distinct */
  accent: string;
};

const PROJECTS: Project[] = [
  {
    name: "Fine Answer",
    category: "Web Platform",
    description:
      "A fast, content-first web platform with a clean reading experience and responsive layouts across every device.",
    liveUrl: "https://www.fineanswer.net",
    image: fineAnswer,
    accent: "#33bbcf",
  },
  {
    name: "Irish Bangla",
    category: "Community Platform",
    description:
      "A community-driven platform bridging Irish and Bangla audiences with a modern, mobile-friendly design.",
    liveUrl: "https://irishbangla.vercel.app",
    image: irishBangla,
    accent: "#c2705a",
  },
  {
    name: "Fine Answer Ireland",
    category: "Regional Edition",
    description:
      "The Ireland-focused edition — localized content and an accessible interface built for speed and clarity.",
    liveUrl: "https://fine-answer-ireland-plhp.vercel.app",
    image: fineAnswerIreland,
    accent: "#18a06b",
  },
];

function ExternalArrow() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]"
      aria-hidden
    >
      <path
        d="M5 11l6-6M6 5h5v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectStack() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    // gsap.matchMedia runs the scroll-linked stacking ONLY on larger screens
    // and only when the user hasn't requested reduced motion. Outside those
    // conditions the cards stay as a plain vertical list (handled in CSS), so
    // the effect degrades gracefully on mobile and for reduced-motion users.
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const panels = gsap.utils.toArray<HTMLElement>(".work-panel", root);

        panels.forEach((panel, i) => {
          // The last card has nothing stacking over it, so it never recedes.
          if (i === panels.length - 1) return;

          const card = panel.querySelector<HTMLElement>(".work-card");
          const dim = panel.querySelector<HTMLElement>(".work-card-dim");
          if (!card) return;

          // Scrub a timeline to scroll progress: while this panel is pinned and
          // the NEXT card slides up to cover it (roughly one viewport height of
          // scrolling), shrink this card to 0.92 and fade in its dim overlay.
          gsap
            .timeline({
              scrollTrigger: {
                trigger: panel,
                start: "top top", // panel pins to the top of the viewport
                end: "bottom top", // ...until the next card fully covers it (~100vh)
                scrub: true,
              },
            })
            .to(card, { scale: 0.92, ease: "none" }, 0)
            .to(dim, { opacity: 0.55, ease: "none" }, 0);
        });
      },
    );

    // Recalculate trigger positions once late-loading assets settle.
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      mm.revert(); // kills every ScrollTrigger/tween created above
    };
  }, []);

  return (
    <div ref={rootRef} className="work-stack mt-12 min-[768px]:mt-16">
      {PROJECTS.map((project, index) => {
        const host = new URL(project.liveUrl).hostname.replace(/^www\./, "");

        return (
          <div key={project.name} className="work-panel">
            <article
              className="work-card"
              style={{ "--accent": project.accent } as React.CSSProperties}
            >
              {/* depth overlay, animated by GSAP */}
              <span aria-hidden className="work-card-dim" />

              <div className="relative grid h-full grid-cols-1 min-[768px]:grid-cols-2">
                {/* text side */}
                <div className="flex flex-col justify-center gap-5 p-7 min-[768px]:p-12">
                  <div className="flex items-center gap-3">
                    <span className="work-card-index text-[26px] font-extrabold tracking-[-0.03em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="work-card-badge inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-[var(--text)] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-[clamp(26px,3vw,40px)] font-bold tracking-[-0.03em] text-[var(--text)]">
                    {project.name}
                  </h3>

                  <p className="max-w-[460px] text-[15px] leading-relaxed text-white">
                    {project.description}
                  </p>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit the live site for ${project.name} (opens in a new tab)`}
                    className="work-card-btn group/btn mt-1 inline-flex w-fit items-center gap-2 px-5 py-3 text-[14px] text-white"
                  >
                    Visit live site
                    <ExternalArrow />
                  </a>
                </div>

                {/* image side — the screenshot sits in a browser mockup at its
                    true wide aspect ratio, so the full site capture reads
                    clearly instead of being cropped into a narrow slice */}
                <div className="relative flex items-center justify-center border-t border-[var(--border-soft)] p-7 min-[768px]:border-t-0 min-[768px]:border-l min-[768px]:p-10">
                  {/* accent glow behind the mockup */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(60% 55% at 70% 40%, color-mix(in srgb, ${project.accent} 36%, transparent), transparent 70%)`,
                    }}
                  />
                  <figure className="relative w-full max-w-[560px] overflow-hidden rounded-[14px] border border-[var(--border-soft)] bg-[var(--surface-sidebar)] shadow-[var(--shadow-card)]">
                    {/* browser chrome */}
                    <figcaption className="flex items-center gap-2 border-b border-[var(--border-soft)] bg-[var(--surface-tint)] px-3.5 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-2 truncate rounded-md bg-black/30 px-2.5 py-1 text-[11px] text-[var(--text-dim)]">
                        {host}
                      </span>
                    </figcaption>
                    {/* screenshot at its native ~2.2:1 ratio (no crop) */}
                    <div className="relative aspect-[22/10]">
                      <Image
                        src={project.image}
                        alt={`Screenshot of the ${project.name} website`}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 768px) 560px, 90vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
