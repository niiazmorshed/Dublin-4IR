const PARTNERS = [
  { name: "Irish Gov", sub: "Rialtas na hÉireann" },
  { name: "Enterprise Ireland", sub: "Trade & Innovation" },
  { name: "Dublin City Council", sub: "Comhairle Cathrach" },
  { name: "IDA Ireland", sub: "Investment & Development" },
];

export default function PartnerLogos() {
  return (
    <section
      aria-label="Trusted by"
      className="relative mx-auto mt-10 max-w-[1240px] px-6 pt-[60px] pb-20 text-center min-[960px]:px-10"
    >
      <div className="mb-9 inline-flex items-center gap-2.5 text-[13px] text-[var(--text-muted)]">
        <span className="grid h-5 w-5 place-items-center rounded-md bg-[linear-gradient(135deg,#998ccd_0%,#5d3fd6_60%,#332760_100%)] text-[11px] font-extrabold text-white">
          D
        </span>
        Trusted by Ireland&apos;s leading institutions
      </div>

      <div className="grid grid-cols-2 items-center gap-6 opacity-55 min-[960px]:grid-cols-4">
        {PARTNERS.map((p) => (
          <div key={p.name} className="group p-3 text-center transition-opacity">
            <div className="text-[17px] font-bold tracking-[-0.01em] text-white/50 transition-colors group-hover:text-white/90">
              {p.name}
            </div>
            <span className="mt-0.5 block text-[10px] font-medium tracking-[0.12em] uppercase opacity-70">
              {p.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
