function PinIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s-7-7.58-7-13a7 7 0 0114 0c0 5.42-7 13-7 13z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#998ccd,#5d3fd6_70%,#332760)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]">
      {children}
    </div>
  );
}

const NODE_BASE =
  "absolute flex items-center gap-2.5 rounded-[14px] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] px-3.5 py-3 text-[var(--text)] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-[14px]";

function Constellation() {
  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-[1.05/1] w-full max-w-[460px] min-[960px]:ml-auto min-[960px]:mr-0 min-[960px]:max-w-[620px]"
    >
      {/* dashed connector lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 600 580"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#998ccd" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#998ccd" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <path
          d="M 130 110 L 130 200 L 240 200 L 240 290"
          stroke="url(#lg)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <path
          d="M 410 60 L 410 150 L 320 150 L 320 240"
          stroke="url(#lg)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <path
          d="M 510 150 L 420 150 L 420 270 L 370 270"
          stroke="url(#lg)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <path
          d="M 130 470 L 130 380 L 240 380 L 240 330"
          stroke="url(#lg)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <path
          d="M 300 520 L 300 360"
          stroke="url(#lg)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
        <path
          d="M 500 490 L 500 400 L 380 400 L 380 340"
          stroke="url(#lg)"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />
      </svg>

      {/* central hub */}
      <div className="absolute top-1/2 left-1/2 grid h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[26px] border border-[rgba(153,140,205,0.4)] bg-[radial-gradient(circle_at_30%_30%,rgba(153,140,205,0.55),transparent_60%),linear-gradient(160deg,#332760_0%,#161139_100%)] shadow-[0_0_0_1px_rgba(220,215,232,0.06)_inset,0_0_80px_0_rgba(93,63,214,0.55),0_30px_80px_-20px_rgba(93,63,214,0.7)]">
        <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle,rgba(93,63,214,0.35)_0%,transparent_60%)] blur-[20px]" />
        <div className="bg-[linear-gradient(180deg,#fff_0%,#dcd7e8_100%)] bg-clip-text text-[44px] font-extrabold tracking-[-0.04em] text-transparent">
          D4
        </div>
      </div>

      {/* top-left: Gov Tender card */}
      <div
        className={`${NODE_BASE} top-[6%] left-[4%] min-w-[170px] animate-[float-a_6s_ease-in-out_infinite]`}
      >
        <IconTile>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l2.5 5.5L20 9.5l-4 4 1 6L12 17l-5 2.5 1-6-4-4 5.5-1L12 3z"
              fill="#fff"
            />
          </svg>
        </IconTile>
        <div>
          <div className="text-[13.5px] leading-[1.2] font-semibold whitespace-nowrap">
            Gov Tender Won
          </div>
          <div className="mt-[3px] flex items-center gap-1 text-[11px] text-[var(--text-dim)]">
            <PinIcon />
            Dublin, IE
          </div>
        </div>
      </div>

      {/* top mid-right: Officer pill */}
      <div
        className={`${NODE_BASE} top-[2%] right-[24%] animate-[float-c_5.5s_ease-in-out_infinite] gap-2 rounded-full py-[6px] pr-2.5 pl-[6px]`}
      >
        <div className="h-7 w-7 shrink-0 rounded-full border-[1.5px] border-white/[0.15] bg-[linear-gradient(135deg,#b68072,#5c43c3)]" />
        <div className="text-[11.5px] font-medium text-[var(--text-muted)]">
          Senior Engineer in Dhaka
        </div>
      </div>

      {/* top-right: Stat card */}
      <div
        className={`${NODE_BASE} top-[14%] right-[4%] w-[168px] animate-[float-b_7s_ease-in-out_infinite] flex-col items-stretch gap-2`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] tracking-[0.02em] text-[var(--text-dim)]">
            Project velocity
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[24px] font-bold tracking-[-0.02em]">+47%</span>
          <span className="text-[11px] text-[var(--warm)]">▲</span>
        </div>
        <svg
          className="h-7 w-full"
          viewBox="0 0 140 28"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#998ccd" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#998ccd" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,22 L18,20 L32,21 L50,16 L66,18 L82,12 L98,14 L114,8 L130,9 L140,4 L140,28 L0,28 Z"
            fill="url(#chartg)"
          />
          <path
            d="M0,22 L18,20 L32,21 L50,16 L66,18 L82,12 L98,14 L114,8 L130,9 L140,4"
            stroke="#998ccd"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* bottom-left: Project Lead */}
      <div
        className={`${NODE_BASE} bottom-[18%] left-[4%] animate-[float-b_6.5s_ease-in-out_infinite]`}
      >
        <div className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[var(--warm)] text-[10px] font-extrabold text-[var(--bg)]">
          ✓
        </div>
        <div className="h-[34px] w-[34px] shrink-0 rounded-full border-[1.5px] border-white/[0.15] bg-[linear-gradient(135deg,#998ccd,#5d3fd6)]" />
        <div>
          <div className="text-[13.5px] leading-[1.2] font-semibold whitespace-nowrap">
            Project Lead
          </div>
          <div className="mt-[3px] flex items-center gap-1 text-[11px] text-[var(--text-dim)]">
            <PinIcon />
            Cork, IE
          </div>
        </div>
      </div>

      {/* bottom-center: chip */}
      <div className="absolute bottom-[8%] left-1/2 -ml-[70px] inline-flex items-center gap-2 rounded-[14px] border border-[var(--border-strong)] bg-white/[0.06] px-4 py-2.5 text-[12px] font-semibold tracking-[0.04em] whitespace-nowrap text-[var(--text-muted)] uppercase">
        <span className="text-[var(--purple-2)]">▸</span> Dublin Gov
      </div>

      {/* bottom-right: status pill */}
      <div
        className={`${NODE_BASE} right-[8%] bottom-[4%] animate-[float-c_6s_ease-in-out_infinite] gap-2 rounded-full py-[6px] pr-3 pl-[6px]`}
      >
        <div className="h-7 w-7 shrink-0 rounded-full border-[1.5px] border-white/[0.15] bg-[linear-gradient(135deg,#dcd7e8,#b68072)]" />
        <div className="text-[11.5px] font-medium text-[var(--text-muted)]">
          Shipped to production
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-6 pt-10 pb-6 min-[960px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] min-[960px]:px-10 min-[960px]:pt-20 min-[960px]:pb-[60px]">
      <div className="pointer-events-none absolute -top-[10%] -right-[10%] -z-10 h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(93,63,214,0.42)_0%,rgba(93,63,214,0)_60%)] blur-[20px]" />

      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.03] py-[7px] pr-3.5 pl-3 text-[13px] text-[var(--text-muted)] backdrop-blur-[8px]">
          <span className="h-[7px] w-[7px] rounded-full bg-[var(--warm)] shadow-[0_0_10px_var(--warm)]" />
          Ireland&apos;s Digital Partner
        </div>
        <h1 className="text-[clamp(44px,5.4vw,76px)] leading-[1.02] font-bold tracking-[-0.035em] text-[var(--text)]">
          Accelerate Your Digital Future
          <span className="block bg-[linear-gradient(180deg,#dcd7e8_0%,#998ccd_25%,#5d3fd6_60%,#5c43c3_100%)] bg-clip-text text-transparent">
            Web &amp; App Solutions
          </span>
        </h1>
        <p className="mt-[26px] max-w-[510px] text-[17px] leading-[1.55] text-[var(--text-muted)]">
          Bridging Ireland&apos;s digital ambitions with world-class development
          — delivering government and enterprise projects with precision and
          speed.
        </p>
        <div className="mt-9 flex items-center gap-3.5">
          <a
            href="#start"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[linear-gradient(180deg,#5d3fd6_0%,#5c43c3_60%,#332760_100%)] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_18px_40px_-14px_var(--purple-glow)] transition duration-200 hover:-translate-y-px hover:shadow-[0_24px_50px_-14px_var(--purple-glow)]"
          >
            Start a Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-[3px]"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <Constellation />
    </section>
  );
}
