"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full px-3.5 py-2 text-[14px] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-tint)] hover:text-[var(--text)]"
    >
      {children}
    </Link>
  );
}

/**
 * Hides the navbar while scrolling down and reveals it while scrolling up.
 * The bar always stays visible near the top of the page. Sticky positioning is
 * kept so it occupies layout space; only a transform animates the show/hide.
 */
export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Ignore sub-pixel jitter so the bar doesn't flicker.
      if (Math.abs(delta) < 6) return;

      // Always show near the top; otherwise follow scroll direction.
      setHidden(delta > 0 && y > 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-[14px] z-50 px-6 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-[var(--border-soft)] bg-[rgba(14,11,25,0.55)] py-3 pr-[18px] pl-[22px] shadow-[var(--shadow-card)] backdrop-blur-[18px] backdrop-saturate-[140%]"
      >
        <Link
          href="/"
          className="flex items-center text-[19px] font-extrabold tracking-[-0.02em] text-[var(--text)]"
        >
          <span>
            Dublin<span className="text-[var(--text-muted)]">4ir</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 min-[960px]:flex">
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <Link
          href="/contact"
          className="btn-primary btn-primary-sm"
        >
          Start a Project
        </Link>
      </nav>
    </div>
  );
}
