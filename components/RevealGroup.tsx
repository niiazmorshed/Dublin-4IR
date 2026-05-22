"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Reveals its children once, when the group first scrolls into view.
 * Sets `data-revealed="true"`, which CSS uses to play the staggered
 * entrance on descendant `.stagger-item` elements (delay driven by `--i`).
 * No-JS and reduced-motion users see content immediately (handled in CSS).
 */
export default function RevealGroup({ children, className }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-revealed={revealed ? "true" : undefined}>
      {children}
    </div>
  );
}
