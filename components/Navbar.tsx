"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
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
 *
 * On narrow viewports (below 960px) the inline links collapse into a toggle
 * button that opens a dropdown panel exposing the same routes.
 */
export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

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

  // Close the mobile menu on Escape or when clicking outside the bar.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <div
      className={`sticky top-[14px] z-50 px-6 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <nav
        ref={navRef}
        aria-label="Primary"
        className="relative mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-[var(--border-soft)] bg-[rgba(0,4,15,0.72)] py-3 pr-[18px] pl-[22px] shadow-[var(--shadow-card)] backdrop-blur-[18px] backdrop-saturate-[140%]"
      >
        <Link
          href="/"
          className="flex items-center text-[19px] font-extrabold tracking-[-0.02em] text-[var(--text)]"
        >
          <span>
            Dublin<span className="text-[var(--accent)]">4ir</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 min-[960px]:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary btn-primary-sm">
            Start a Project
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-tint)] hover:text-[var(--text)] min-[960px]:hidden"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M4.5 4.5l9 9M13.5 4.5l-9 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M3 5h12M3 9h12M3 13h12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            id="primary-mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+10px)] flex flex-col gap-1 rounded-[22px] border border-[var(--border-soft)] bg-[rgba(0,4,15,0.92)] p-2 shadow-[var(--shadow-card)] backdrop-blur-[18px] backdrop-saturate-[140%] min-[960px]:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-[15px] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-tint)] hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
