"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";

const NAV_LINKS = [
  { href: "/", label: "Home", isHome: true },
  { href: "/#services", label: "Services", hash: "#services" },
  { href: "/#projects", label: "Projects", hash: "#projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

type HomeSection = "" | "#services" | "#projects";

const SCROLL_OFFSET = 120;

function getHomeSectionFromScroll(): HomeSection {
  const servicesEl = document.getElementById("services");
  const projectsEl = document.getElementById("projects");
  if (!servicesEl) return "";

  const y = window.scrollY + SCROLL_OFFSET;
  if (y < servicesEl.offsetTop) return "";
  if (projectsEl && y >= projectsEl.offsetTop) return "#projects";
  return "#services";
}

function isLinkActive(
  pathname: string,
  homeSection: HomeSection,
  link: (typeof NAV_LINKS)[number],
): boolean {
  if ("isHome" in link && link.isHome) {
    return pathname === "/" && homeSection === "";
  }
  if ("hash" in link && link.hash) {
    return pathname === "/" && homeSection === link.hash;
  }
  return pathname === link.href;
}

function goToHomeTop() {
  window.history.replaceState(null, "", "/");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Vestilo-style pill navbar with liquid glass. Hides on scroll down, shows on scroll up.
 * Mobile menu closes on route change, Escape, or click outside.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [homeSection, setHomeSection] = useState<HomeSection>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Highlight Home / Services / Projects from scroll position, not a stale URL hash.
  useEffect(() => {
    if (pathname !== "/") {
      setHomeSection("");
      return;
    }

    const update = () => setHomeSection(getHomeSectionFromScroll());

    update();
    const raf = requestAnimationFrame(() => requestAnimationFrame(update));

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, [pathname]);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) < 6) return;
      setHidden(delta > 0 && y > 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, homeSection]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [mobileOpen]);

  return (
    <div
      ref={navRef}
      className={`sticky top-[14px] z-50 px-4 transition-transform duration-300 ease-out motion-reduce:transition-none min-[960px]:px-6 ${
        hidden ? "-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <LiquidGlassCard
        draggable={false}
        expandable={false}
        blurIntensity="xl"
        glowIntensity="none"
        shadowIntensity="none"
        borderRadius="28px"
        className="font-[family-name:var(--font-red-rose)] mx-auto w-full max-w-[1240px] border-0 bg-transparent min-[960px]:rounded-full"
      >
        <nav
          aria-label="Primary"
          className="relative px-4 py-3 min-[960px]:rounded-full min-[960px]:px-5 min-[960px]:py-3.5"
        >
          <div className="flex items-center justify-between gap-3 min-[960px]:gap-5">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname !== "/") return;
                e.preventDefault();
                goToHomeTop();
                setHomeSection("");
              }}
              className="shrink-0 text-[20px] font-semibold tracking-[-0.02em] text-[var(--text)] min-[960px]:text-[22px]"
            >
              <span className="text-[var(--accent)]">D</span>ublin
              <span className="text-[var(--text)]">4ir</span>
            </Link>

            <div className="hidden min-[960px]:flex min-[960px]:flex-1 min-[960px]:justify-center">
              <div className="inline-flex items-center gap-0.5 rounded-full bg-[rgba(255,255,255,0.06)] p-1">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(pathname, homeSection, link);
                  return (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      onClick={
                        "isHome" in link && link.isHome && pathname === "/"
                          ? (e) => {
                              e.preventDefault();
                              goToHomeTop();
                              setHomeSection("");
                            }
                          : undefined
                      }
                      className={`nav-pill-link rounded-full px-3.5 py-2 text-[13px] font-medium leading-none whitespace-nowrap min-[1100px]:px-4 min-[1100px]:text-[14px] ${
                        active
                          ? "bg-[rgba(255,255,255,0.14)] text-[var(--text)]"
                          : "text-[var(--text-muted)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--text)]"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/contact"
                className="hidden rounded-full border border-[var(--border-strong)] bg-[rgba(255,255,255,0.05)] px-4 py-2.5 text-[13px] font-medium text-[var(--text)] transition-colors hover:border-[rgba(51,187,207,0.35)] hover:bg-[rgba(255,255,255,0.08)] min-[640px]:inline-flex"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2.5 text-[13px] font-semibold text-[#00040f] transition-colors hover:bg-[var(--accent-light)] min-[960px]:px-5"
              >
                Start a Project
              </Link>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--text-muted)] transition-colors hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--text)] min-[960px]:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((open) => !open)}
              >
                <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {mobileOpen ? (
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M4 7h16M4 12h16M4 17h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

        </nav>
      </LiquidGlassCard>

      {/* Rendered outside LiquidGlassCard: the glass card clips overflow, which
          would otherwise hide this dropdown that sits below the bar. */}
      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="absolute left-4 right-4 top-[calc(100%+10px)] z-50 flex flex-col gap-1 rounded-[22px] border border-[var(--border-soft)] bg-[rgba(0,4,15,0.92)] p-2 shadow-[var(--shadow-card)] backdrop-blur-[18px] min-[960px]:hidden"
        >
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(pathname, homeSection, link);
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={(e) => {
                  if ("isHome" in link && link.isHome && pathname === "/") {
                    e.preventDefault();
                    goToHomeTop();
                    setHomeSection("");
                  }
                  setMobileOpen(false);
                }}
                className={`nav-pill-link rounded-2xl px-4 py-3 text-[15px] font-medium ${
                  active
                    ? "bg-[rgba(255,255,255,0.12)] text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
