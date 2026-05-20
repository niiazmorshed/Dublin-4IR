import Image, { type StaticImageData } from "next/image";
import RevealGroup from "@/components/RevealGroup";
import project1 from "@/public/project_1.png";
import project2 from "@/public/project_2.png";
import project3 from "@/public/project_3.png";

type Project = {
  name: string;
  category: string;
  description: string;
  liveUrl: string;
  image: StaticImageData;
};

const PROJECTS: Project[] = [
  {
    name: "Fine Answer",
    category: "Web Platform",
    description:
      "A fast, content-first web platform with a clean reading experience and responsive layouts across every device.",
    liveUrl: "https://www.fineanswer.net",
    image: project1,
  },
  {
    name: "Fine Answer Ireland",
    category: "Regional Edition",
    description:
      "The Ireland-focused edition — localized content and an accessible interface built for speed and clarity.",
    liveUrl: "https://fine-answer-ireland-plhp.vercel.app",
    image: project2,
  },
  {
    name: "Irish Bangla",
    category: "Community Platform",
    description:
      "A community-driven platform bridging Irish and Bangla audiences with a modern, mobile-friendly design.",
    liveUrl: "https://irishbangla.vercel.app",
    image: project3,
  },
];

function ExternalArrow() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const host = new URL(project.liveUrl).hostname.replace(/^www\./, "");

  return (
    <li
      className="stagger-item list-none"
      style={{ "--i": index } as React.CSSProperties}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit the live site for ${project.name} (opens in a new tab)`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.015)_100%)] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_28px_56px_-32px_rgba(0,0,0,0.85)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(220,215,232,0.24)] hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_36px_72px_-28px_var(--purple-glow)]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border-soft)]">
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.name} website`}
            fill
            placeholder="blur"
            sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(14,11,25,0.55)_100%)]"
          />
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[rgba(14,11,25,0.55)] px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-[var(--text-muted)] uppercase backdrop-blur-[10px]">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[var(--text)]">
              {project.name}
            </h3>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border-soft)] bg-white/[0.04] text-[var(--text-muted)] transition-colors duration-200 group-hover:border-[rgba(220,215,232,0.24)] group-hover:text-[var(--text)]">
              <ExternalArrow />
            </span>
          </div>
          <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-[var(--text-dim)]">
            {project.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--purple-2)]">
            <span className="h-[6px] w-[6px] rounded-full bg-[var(--warm)] shadow-[0_0_8px_var(--warm)]" />
            {host}
          </span>
        </div>
      </a>
    </li>
  );
}

export default function OurWorks() {
  return (
    <section
      id="projects"
      aria-labelledby="our-works-heading"
      className="relative mx-auto max-w-[1240px] px-6 pt-10 pb-24 min-[960px]:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[12%] left-1/2 -z-10 h-[420px] w-[min(100%,760px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(93,63,214,0.18)_0%,transparent_70%)] blur-3xl"
      />

      <RevealGroup>
        <div
          className="stagger-item text-center"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.04] py-1.5 pr-3.5 pl-2.5 text-[12px] font-medium tracking-[0.06em] text-[var(--text-muted)] uppercase backdrop-blur-[10px]">
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
            A selection of live products we&apos;ve designed and built — explore
            each one in production.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index + 1}
            />
          ))}
        </ul>
      </RevealGroup>
    </section>
  );
}
