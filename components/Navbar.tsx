type NavLinkProps = {
  href: string;
  caret?: boolean;
  children: React.ReactNode;
};

function NavLink({ href, caret = false, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] text-[var(--text-muted)] transition-colors hover:bg-white/[0.04] hover:text-[var(--text)]"
    >
      {children}
      {caret && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-2 w-2 -translate-y-px rotate-45 border-b-[1.5px] border-r-[1.5px] border-current opacity-70"
        />
      )}
    </a>
  );
}

export default function Navbar() {
  return (
    <div className="sticky top-[14px] z-50 px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-[var(--border-soft)] bg-[rgba(14,11,25,0.55)] py-3 pr-[18px] pl-[22px] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-[18px] backdrop-saturate-[140%]"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-[-0.02em] text-[var(--text)]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-[8px] bg-[linear-gradient(135deg,#998ccd_0%,#5d3fd6_60%,#332760_100%)] text-[14px] font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_8px_24px_-8px_var(--purple-glow)]">
            D
          </span>
          <span>
            Dublin<span className="text-[var(--text-muted)]">4ir</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 min-[960px]:flex">
          <NavLink href="#services" caret>
            Services
          </NavLink>
          <NavLink href="#projects" caret>
            Projects
          </NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#tenders">Government Tenders</NavLink>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/[0.16] bg-[linear-gradient(180deg,#5d3fd6_0%,#5c43c3_60%,#332760_100%)] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_-10px_var(--purple-glow),0_1px_0_rgba(255,255,255,0.2)_inset] transition-transform duration-200 hover:-translate-y-px hover:shadow-[0_12px_30px_-10px_var(--purple-glow)]"
        >
          Start a Project
        </a>
      </nav>
    </div>
  );
}
