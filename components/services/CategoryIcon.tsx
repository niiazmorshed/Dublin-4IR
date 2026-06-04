import type { ServiceCategory } from "@/lib/service-categories";

export function CategoryIcon({ kind }: { kind: ServiceCategory["icon"] }) {
  const common =
    "h-10 w-10 shrink-0 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-tint)] p-2 text-[var(--purple-2)] shadow-[var(--shadow-card)] min-[960px]:h-11 min-[960px]:w-11 min-[960px]:p-2.5";
  switch (kind) {
    case "enterprise":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 21V6.5L12 3l8 3.5V21M4 21h16M9 21v-8h6v8M9 10h6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "sme":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "ecommerce":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6h15l-1.5 9h-12L6 6zM6 6L5 3H2M9 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "fintech":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "insurance":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3l7 4v6c0 4.5-3 7.5-7 8-4-.5-7-3.5-7-8V7l7-4z" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "regtech":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 14h6M9 18h6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "emerging":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3c-4.5 3-6 7.5-6 10.5a6 6 0 1012 0c0-3-1.5-7.5-6-10.5z" strokeLinejoin="round" />
            <path d="M12 10v4M10 12h4" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "cloud":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 18h12a4 4 0 000-8 5 5 0 00-9.9-1A4 4 0 006 18z" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case "health":
      return (
        <div className={common} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.5">
            <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1112 6.5a5 5 0 117.5 6.072z" strokeLinejoin="round" />
            <path d="M12 10v6M9 13h6" strokeLinecap="round" />
          </svg>
        </div>
      );
  }
}
