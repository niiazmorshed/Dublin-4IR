"use client";

import Image from "next/image";
import Link from "next/link";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const INFO_LINKS = [
  { label: "About", href: "/#about" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Tech Stack", href: "/#stack" },
  { label: "Support", href: "mailto:info@dublin4ir.com" },
] as const;

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
] as const;

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[11px] font-semibold tracking-[0.12em] text-white uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function FooterLinkList({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {links.map(({ label, href }) => {
        const isExternal = href.startsWith("http") || href.startsWith("mailto:");
        return (
          <li key={label}>
            <Link
              href={href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[13px] text-white/90 transition-colors hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.45)]"
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-[var(--border-soft)]">
      <div className="absolute inset-0">
        <Image
          src="/nasa.jpg"
          alt=""
          fill
          className="object-cover object-center brightness-[1.05] contrast-[1.08]"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,18,0.35)_0%,rgba(10,8,18,0.55)_55%,rgba(10,8,18,0.68)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-8 min-[960px]:px-10 min-[960px]:py-10">
        <div className="grid grid-cols-2 gap-8 min-[960px]:grid-cols-[1.4fr_repeat(3,1fr)] min-[960px]:gap-6">
          <div className="col-span-2 min-[960px]:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[-0.02em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
              Dublin<span className="text-white/80">4ir</span>
            </Link>
            <p className="mt-2 max-w-[240px] text-[13px] leading-snug text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.45)]">
              Web &amp; app delivery for government and enterprise teams in Ireland.
            </p>
          </div>

          <FooterColumn title="Menu">
            <FooterLinkList links={MENU_LINKS} />
          </FooterColumn>

          <FooterColumn title="Info">
            <FooterLinkList links={INFO_LINKS} />
          </FooterColumn>

          <FooterColumn title="Social">
            <FooterLinkList links={SOCIAL_LINKS} />
          </FooterColumn>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 min-[960px]:mt-8 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.1em] text-white/85 uppercase transition-colors hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.45)]"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M6 2v8M3 5l3-3 3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to top
          </button>
          <p className="text-[11px] text-white/75 [text-shadow:0_1px_6px_rgba(0,0,0,0.45)]">
            © {new Date().getFullYear()} Dublin 4ir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
