import type { ProcessStep } from "@/lib/process-steps";

function StepIcon({ kind }: { kind: ProcessStep["icon"] }) {
  const stroke = { stroke: "currentColor", strokeWidth: 1.5, fill: "none" as const };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[var(--purple-2)]" aria-hidden>
      {kind === "discover" && (
        <>
          <circle cx="11" cy="11" r="7" {...stroke} />
          <path d="M16 16l4 4" strokeLinecap="round" {...stroke} />
        </>
      )}
      {kind === "plan" && (
        <>
          <path d="M5 5h14v14H5z" {...stroke} />
          <path d="M8 9h8M8 13h5" strokeLinecap="round" {...stroke} />
        </>
      )}
      {kind === "build" && (
        <>
          <rect x="7" y="4" width="10" height="16" rx="2" {...stroke} />
          <path d="M10 18h4" strokeLinecap="round" {...stroke} />
        </>
      )}
      {kind === "test" && (
        <>
          <path d="M9 12l2 2 4-5" strokeLinecap="round" strokeLinejoin="round" {...stroke} />
          <path d="M12 3a9 9 0 109 9" {...stroke} />
        </>
      )}
      {kind === "launch" && (
        <>
          <path d="M12 4v10M8 10l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" {...stroke} />
          <path d="M5 20h14" strokeLinecap="round" {...stroke} />
        </>
      )}
      {kind === "support" && (
        <>
          <path d="M12 3v3M8 7h8a4 4 0 010 8h-1l-3 3v-3H8a4 4 0 010-8z" {...stroke} strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export default function ProcessCard({ step }: { step: ProcessStep }) {
  const isAccent = step.variant === "accent";

  return (
    <article
      className={`flex w-full max-w-[min(100%,560px)] overflow-hidden ${
        isAccent ? "surface-card-accent" : "surface-card"
      }`}
    >
      <div
        className={`flex w-[52px] shrink-0 items-center justify-center px-2 py-8 sm:w-[58px] ${
          isAccent ? "surface-sidebar-accent" : "surface-sidebar"
        }`}
      >
        <span className="text-[10px] font-semibold tracking-[0.14em] text-[var(--purple-2)] uppercase [writing-mode:vertical-rl] rotate-180">
          {step.duration}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:flex-row sm:gap-4 sm:p-6">
        <div className="flex items-center gap-2 sm:mt-1">
          <StepIcon kind={step.icon} />
          <span className="text-[11px] font-bold tracking-[0.18em] text-[var(--purple)] tabular-nums sm:hidden">
            {step.number}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="text-[17px] font-bold leading-snug tracking-[-0.02em] text-[var(--text)] sm:text-lg">
            <span className="mr-2 hidden text-[var(--purple)] tabular-nums sm:inline">{step.number}</span>
            {step.title}
          </h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--text-dim)] sm:text-[14px]">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}
