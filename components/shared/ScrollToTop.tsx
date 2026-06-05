"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed right-5 bottom-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-[var(--border-accent)] bg-[rgba(0,4,15,0.88)] text-[var(--accent-light)] shadow-[var(--shadow-card)] backdrop-blur-md transition-[opacity,transform,visibility] duration-300 hover:border-[rgba(51,187,207,0.5)] hover:bg-[rgba(5,8,16,0.95)] hover:text-white min-[960px]:right-8 min-[960px]:bottom-8 ${
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M8 3v10M4.5 6.5L8 3l3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
