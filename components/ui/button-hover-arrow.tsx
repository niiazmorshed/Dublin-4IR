"use client";

type ArrowDirection = "up" | "right" | "down" | "left";

const ROTATION: Record<ArrowDirection, string> = {
  up: "-rotate-90",
  right: "rotate-0",
  down: "rotate-90",
  left: "rotate-180",
};

type ButtonHoverArrowProps = {
  direction?: ArrowDirection;
  label: string;
  expandLabel?: string;
  onClick: () => void;
  className?: string;
};

export default function ButtonHoverArrow({
  direction = "right",
  label,
  expandLabel = "Visit",
  onClick,
  className = "",
}: ButtonHoverArrowProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`group relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[rgba(51,187,207,0.45)] bg-[linear-gradient(135deg,#0a1628_0%,#0d3d48_55%,#1a5f6b_100%)] text-[var(--text)] shadow-[0_0_24px_-6px_rgba(51,187,207,0.4)] transition-all duration-300 hover:w-[7.5rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${className}`}
    >
      <span className="inline-flex whitespace-nowrap pl-3 text-[13px] font-medium opacity-0 transition-all duration-200 group-hover:-translate-x-2 group-hover:opacity-100">
        {expandLabel}
      </span>
      <span className={`absolute right-3.5 ${ROTATION[direction]}`}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          aria-hidden
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
}
