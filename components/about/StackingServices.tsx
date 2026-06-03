import CardFrame from "@/components/about/CardFrame";

type GlyphKind =
  | "server"
  | "cloud"
  | "migration"
  | "hosting"
  | "devops"
  | "shield"
  | "pentest"
  | "modernize"
  | "cms"
  | "commerce"
  | "ai"
  | "iot"
  | "vr"
  | "game"
  | "health"
  | "lms"
  | "insurance"
  | "talent";

type Service = {
  tab: string;
  title: string;
  description: string;
  cta: string;
  glyph: GlyphKind;
};

const GLYPHS: Record<GlyphKind, React.ReactNode> = {
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  cloud: <path d="M6 18h12a4 4 0 000-8 5 5 0 00-9.9-1A4 4 0 006 18z" />,
  migration: (
    <>
      <path d="M6 16h11a3.5 3.5 0 000-7 4.5 4.5 0 00-8.7-1.2" />
      <path d="M3.6 13.4l2.2 2.2 2.2-2.2" />
      <path d="M5.8 15.6V9" />
    </>
  ),
  hosting: (
    <>
      <path d="M12 3l7 3v5c0 4.2-2.8 7.4-7 8.6C7.8 18.4 5 15.2 5 11V6l7-3z" />
      <rect x="9" y="10" width="6" height="4" rx="1" />
      <path d="M11 12h.01" />
    </>
  ),
  devops: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z" />
      <path d="M9.2 12l2 2 3.6-4" />
    </>
  ),
  pentest: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  modernize: (
    <>
      <path d="M21 12a9 9 0 11-2.6-6.4" />
      <path d="M21 4v5h-5" />
    </>
  ),
  cms: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  commerce: (
    <>
      <circle cx="9.5" cy="20" r="1.1" />
      <circle cx="17.5" cy="20" r="1.1" />
      <path d="M2.5 3.5H5l2.3 11.2a1.5 1.5 0 001.5 1.2h8.1a1.5 1.5 0 001.5-1.2L21 7H6" />
    </>
  ),
  ai: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3.2v3.4M12 17.4V20.8M5 7.7l2.7 1.6M16.3 14.7l2.7 1.6M19 7.7l-2.7 1.6M7.7 14.7L5 16.3" />
      <circle cx="12" cy="3.2" r="1" />
      <circle cx="12" cy="20.8" r="1" />
      <circle cx="19" cy="7.7" r="1" />
      <circle cx="5" cy="7.7" r="1" />
      <circle cx="19" cy="16.3" r="1" />
      <circle cx="5" cy="16.3" r="1" />
    </>
  ),
  iot: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" />
      <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
    </>
  ),
  vr: (
    <>
      <path d="M3 9.5A1.5 1.5 0 014.5 8h15A1.5 1.5 0 0121 9.5v4a1.5 1.5 0 01-1.5 1.5h-3.7l-1.6 1.8a1.5 1.5 0 01-2.4 0L10.2 15H4.5A1.5 1.5 0 013 13.5v-4z" />
      <path d="M8 11.5h.01M16 11.5h.01" />
    </>
  ),
  game: (
    <>
      <rect x="2" y="7" width="20" height="10" rx="4" />
      <path d="M7 11v2M6 12h2M15.5 11.5h.01M18 13.5h.01" />
    </>
  ),
  health: (
    <>
      <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />
      <path d="M12 9v4M10 11h4" />
    </>
  ),
  lms: (
    <>
      <path d="M4 5a2 2 0 012-2h13v15H6a2 2 0 00-2 2V5z" />
      <path d="M4 20a2 2 0 012-2h13" />
      <path d="M9 8h6" />
    </>
  ),
  insurance: (
    <>
      <path d="M12 2v2.2M3.5 12a8.5 8.5 0 0117 0z" />
      <path d="M12 12v6.6a2.4 2.4 0 01-4.8 0" />
    </>
  ),
  talent: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0111 0" />
      <path d="M16 5.5a3 3 0 010 5.8M20.5 20a5.5 5.5 0 00-4.5-5.4" />
    </>
  ),
};

const SERVICES: Service[] = [
  {
    tab: "Infrastructure",
    title: "Infrastructure Services",
    description:
      "We build and manage the robust IT infrastructure behind modern enterprises — network design, cloud integration, and elastic scalability that stays reliable while staying agile.",
    cta: "Build Now",
    glyph: "server",
  },
  {
    tab: "Cloud",
    title: "Cloud Consulting",
    description:
      "We chart your cloud strategy end to end — architecture design, cost modelling, and a pragmatic roadmap that maps the right platforms and patterns to your workloads.",
    cta: "Plan Now",
    glyph: "cloud",
  },
  {
    tab: "Migration",
    title: "Cloud Migration & Managed Services",
    description:
      "We move workloads to AWS or Azure with zero-drama lift-and-shift or re-platforming — then run them for you with proactive monitoring, patching, and optimisation.",
    cta: "Migrate Now",
    glyph: "migration",
  },
  {
    tab: "Resilience",
    title: "Cloud Hosting & Disaster Recovery",
    description:
      "We engineer high-availability hosting and tested disaster-recovery plans — so your platforms stay online through traffic spikes, failures, and the unexpected.",
    cta: "Secure Uptime",
    glyph: "hosting",
  },
  {
    tab: "DevOps",
    title: "DevOps & QA Automation",
    description:
      "We streamline delivery with automated CI/CD pipelines and end-to-end test suites — accelerating release cadence, removing manual bottlenecks, and locking in consistent quality.",
    cta: "Automate Now",
    glyph: "devops",
  },
  {
    tab: "Security",
    title: "Cybersecurity",
    description:
      "We fuse current threat intelligence with cutting-edge detection — endpoint protection, network resilience, and multi-layered defense for an ever-evolving threat landscape.",
    cta: "Defend Now",
    glyph: "shield",
  },
  {
    tab: "Offensive Sec",
    title: "Penetration Testing",
    description:
      "We probe your systems the way an attacker would — surfacing exploitable weaknesses across apps, networks, and infrastructure before anyone else can.",
    cta: "Test Now",
    glyph: "pentest",
  },
  {
    tab: "Modernization",
    title: "Application Modernization",
    description:
      "We redefine your software architecture — refactoring legacy systems into agile, scalable, cloud-ready applications built to evolve instead of holding you back.",
    cta: "Modernize Now",
    glyph: "modernize",
  },
  {
    tab: "Content",
    title: "Enterprise CMS",
    description:
      "We deliver content platforms for large organisations — governed workflows, multi-site publishing, and headless architectures your teams can actually move fast in.",
    cta: "Compose Now",
    glyph: "cms",
  },
  {
    tab: "Commerce",
    title: "E-Commerce Solutions",
    description:
      "We design and build scalable online retail and marketplace platforms — fast storefronts, resilient checkout, and integrations that turn browsers into buyers.",
    cta: "Sell Now",
    glyph: "commerce",
  },
  {
    tab: "Data & AI",
    title: "AI / ML & Data Science",
    description:
      "We turn vast data landscapes into strategic assets with intelligent automation, predictive analytics, and NLP — production-grade AI frameworks, not experiments.",
    cta: "Explore AI",
    glyph: "ai",
  },
  {
    tab: "IoT",
    title: "IoT Solutions",
    description:
      "We architect connected devices and the data pipelines behind them — secure telemetry, edge processing, and real-time insight from the physical world.",
    cta: "Connect Now",
    glyph: "iot",
  },
  {
    tab: "Immersive",
    title: "AR / VR Solutions",
    description:
      "We craft augmented and virtual reality experiences for training, commerce, and visualisation — immersive products engineered with production-grade rigour.",
    cta: "Immerse Now",
    glyph: "vr",
  },
  {
    tab: "Games",
    title: "Game Development",
    description:
      "We build Unity 3D and cross-platform games — from interactive prototypes to polished, performant titles that ship across desktop, mobile, and console.",
    cta: "Play Now",
    glyph: "game",
  },
  {
    tab: "HealthTech",
    title: "HealthTech Solutions",
    description:
      "We deliver digital health platforms and patient-management systems — compliant, secure, and designed around the realities of clinical and operational workflows.",
    cta: "Heal Now",
    glyph: "health",
  },
  {
    tab: "Learning",
    title: "LMS Solutions",
    description:
      "We build learning management systems for education and corporate training — engaging course delivery, progress tracking, and analytics that prove outcomes.",
    cta: "Teach Now",
    glyph: "lms",
  },
  {
    tab: "Insurance",
    title: "Insurance Solutions",
    description:
      "We modernise insurance operations with digital platforms — policy administration, claims automation, and customer portals that cut cost and friction.",
    cta: "Protect Now",
    glyph: "insurance",
  },
  {
    tab: "Talent",
    title: "Tech Talent Augmentation",
    description:
      "We extend your team with vetted engineers — individual specialists or full squads from Bangladesh, aligned to your delivery model and timelines.",
    cta: "Scale Team",
    glyph: "talent",
  },
];

function Glyph({ kind }: { kind: GlyphKind }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
    >
      {GLYPHS[kind]}
    </svg>
  );
}

function ArrowIcon() {
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

export default function StackingServices() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative w-full"
    >
      <div className="mx-auto flex max-w-[1240px] gap-8 px-6 min-[960px]:px-10">
        {/* sticky heading rail */}
        <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 flex-col justify-center min-[960px]:flex">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--purple)]" />
            What we do
          </span>
          <h2
            id="capabilities-heading"
            className="mt-4 text-[clamp(1.75rem,2.6vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--text)]"
          >
            Capabilities that{" "}
            <span className="text-heading-gradient">compound</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-dim)]">
            Each layer of our work reinforces the next — from the infrastructure
            beneath your product to the intelligence on top of it.
          </p>
          <div className="mt-6 h-px w-16 bg-[var(--border-strong)]" />
          <p className="mt-4 text-[12px] tracking-[0.14em] text-[var(--text-dim)] uppercase">
            {SERVICES.length} services · one partner
          </p>
        </aside>

        {/* stacking cards */}
        <div className="min-w-0 flex-1">
          {SERVICES.map((service, index) => (
            <figure
              key={service.title}
              className="sticky top-0 grid min-h-screen place-content-center py-[6vh]"
            >
              <CardFrame className="w-[min(86vw,620px)]" tabLabel={service.tab}>
                <div className="relative grid grid-cols-1 gap-6 overflow-hidden rounded-[24px] bg-[#050810]/95 p-7 backdrop-blur-md min-[560px]:grid-cols-[1fr_auto] min-[560px]:items-center min-[560px]:p-9">
                  {/* accent wash */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(51,187,207,0.18),transparent_55%)]"
                  />

                  <div className="relative flex flex-col gap-4">
                    <span className="text-[28px] font-extrabold tracking-[-0.04em] text-[var(--purple-2)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[clamp(1.4rem,3vw,1.9rem)] font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
                      {service.title}
                    </h3>
                    <p className="max-w-[42ch] text-[14.5px] leading-relaxed text-[var(--text-dim)]">
                      {service.description}
                    </p>
                    <button
                      type="button"
                      className="btn-primary group/btn mt-1 w-fit"
                    >
                      {service.cta}
                      <ArrowIcon />
                    </button>
                  </div>

                  {/* service glyph tile */}
                  <div className="relative hidden h-[160px] w-[160px] shrink-0 place-items-center min-[560px]:grid">
                    <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_30%_25%,rgba(51,187,207,0.35),transparent_60%),linear-gradient(160deg,#0d3d48_0%,#0a1628_100%)] shadow-[0_0_0_1px_rgba(176,192,204,0.08)_inset,0_24px_60px_-24px_rgba(51,187,207,0.5)]" />
                    <div className="relative h-[64px] w-[64px] text-white">
                      <Glyph kind={service.glyph} />
                    </div>
                  </div>
                </div>
              </CardFrame>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
