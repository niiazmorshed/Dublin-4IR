import type { ReactNode } from "react";

type TechItem = {
  name: string;
  tagline: string;
  color: string;
  Icon: () => ReactNode;
};

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden>
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.885 2.885 0 0 0-1.102-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-2.08-.837 25.64 25.64 0 0 0-1.506-2.32c1.602-1.48 3.155-2.322 4.548-2.12zm-9.77.02c1.393-.202 2.945.64 4.548 2.12a23.463 23.463 0 0 0-2.06 1.501 25.65 25.65 0 0 0-1.524 2.335 23.66 23.66 0 0 0-1.58.86c-.108-.493-.196-.978-.253-1.439-.225-1.869.062-3.322.727-3.704a1.38 1.38 0 0 1 .558-.127l.002-.006zm4.994 6.16c.276 0 .555.07.837.204l.12.053.12.06a6.41 6.41 0 0 1 2.904 2.45 6.41 6.41 0 0 1-2.904 2.45l-.12.06-.12.053a6.384 6.384 0 0 1-.837.203c-.276 0-.555-.07-.837-.204l-.12-.053-.12-.06a6.41 6.41 0 0 1-2.904-2.45 6.41 6.41 0 0 1 2.904-2.45l.12-.06.12-.053c.282-.134.56-.204.837-.204zm-7.066 2.777c.698 1.285 1.554 2.43 2.524 3.39-.97.96-2.035 1.816-3.26 2.52a22.008 22.008 0 0 1-2.264-5.91c.76-.336 1.486-.704 2.114-1.09l.886.09zm14.032 0l.885-.09c.628.386 1.354.754 2.114 1.09a22.008 22.008 0 0 1-2.264 5.91c-1.225-.704-2.29-1.56-3.26-2.52.97-.96 1.826-2.105 2.524-3.39z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a.544.544 0 0 0-.192.063.86.86 0 0 0-.406.375c-.047.094-.122.305-.175.583l-1.19 6.605H6.797L.753 2.064l-.075-.035-.051-.023a.543.543 0 0 0-.241-.076.544.544 0 0 0-.356.148.862.862 0 0 0-.139.243.86.86 0 0 0-.063.423v16.447a.86.86 0 0 0 .063.423.543.543 0 0 0 .395.391.86.86 0 0 0 .241.076.544.544 0 0 0 .356-.148l7.044-4.045 3.193-1.83 5.788-3.315a.544.544 0 0 0 .241-.406.86.86 0 0 0-.063-.423.543.543 0 0 0-.395-.391.861.861 0 0 0-.241-.076.544.544 0 0 0-.356.148l-5.788 3.315-3.193 1.83-4.129 2.365V2.88l8.43 4.79 3.193 1.83 5.788 3.315a.544.544 0 0 0 .241.406.86.86 0 0 0 .063.423V21.53a.86.86 0 0 0-.063.423.544.544 0 0 0-.192.063.861.861 0 0 0-.241.076.544.544 0 0 0-.356-.148l-5.788-3.315-3.193-1.83L11.93 17.07v9.008l1.19-6.605h2.637l5.044 4.538.075.035.051.023a.543.543 0 0 0 .241.076.544.544 0 0 0 .356-.148.862.862 0 0 0 .139-.243.86.86 0 0 0 .063-.423V2.073a.86.86 0 0 0-.063-.423.543.543 0 0 0-.395-.391.861.861 0 0 0-.241-.076.544.544 0 0 0-.356.148l-5.044 4.538H14.76L11.572 0z" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden>
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68C2.99 6.729 2.936 6.825 2.936 6.921v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.281.163-.601.247-.922.247zM19.099 13.993c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141c.071 0 .138-.031.186-.081.048-.054.074-.123.067-.196-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742-.02-.124-.126-.215-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 2.605 0 4.203-1.097 4.203-3.014z" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden>
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden>
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden>
      <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z" />
    </svg>
  );
}

const STACK: TechItem[] = [
  { name: "React", tagline: "Component UI", color: "#61DAFB", Icon: ReactIcon },
  { name: "Next.js", tagline: "Full-stack framework", color: "#ffffff", Icon: NextIcon },
  { name: "Node.js", tagline: "Runtime", color: "#339933", Icon: NodeIcon },
  { name: "Express", tagline: "API layer", color: "#ffffff", Icon: ExpressIcon },
  { name: "MongoDB", tagline: "Document store", color: "#47A248", Icon: MongoIcon },
  { name: "PostgreSQL", tagline: "Relational data", color: "#336791", Icon: PostgresIcon },
];

function TechCard({ name, tagline, color, Icon }: TechItem) {
  return (
    <li className="group relative list-none">
      <div className="relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-[18px] border border-[var(--border-strong)] bg-[linear-gradient(165deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_55%,rgba(93,63,214,0.06)_100%)] px-5 py-8 text-center shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_24px_48px_-28px_rgba(0,0,0,0.85)] backdrop-blur-[18px] backdrop-saturate-[150%] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(220,215,232,0.22)] hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_28px_56px_-24px_var(--purple-glow)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle, ${color}55 0%, transparent 70%)` }}
        />
        <div className="relative grid h-[72px] w-[72px] place-items-center rounded-2xl border border-white/[0.1] bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_100%)] shadow-[0_1px_0_rgba(255,255,255,0.14)_inset] backdrop-blur-[10px] transition-colors duration-300 group-hover:border-white/[0.18]">
          <span className="transition-transform duration-300 group-hover:scale-110" style={{ color }}>
            <Icon />
          </span>
        </div>
        <div>
          <p className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--text)]">{name}</p>
          <p className="mt-1 text-[12px] font-medium tracking-[0.04em] text-[var(--text-dim)] uppercase">
            {tagline}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="tech-stack-heading"
      className="relative mx-auto max-w-[1240px] px-6 pb-24 min-[960px]:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[min(100%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(93,63,214,0.2)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_100%)] px-6 py-12 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_40px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-[20px] min-[960px]:px-12 min-[960px]:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(153,140,205,0.06)_0%,transparent_45%,rgba(93,63,214,0.08)_100%)]"
        />

        <div className="relative text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.04] py-1.5 pr-3.5 pl-2.5 text-[12px] font-medium tracking-[0.06em] text-[var(--text-muted)] uppercase backdrop-blur-[10px]">
            <span className="grid h-5 w-5 place-items-center rounded-md bg-[linear-gradient(135deg,#998ccd_0%,#5d3fd6_60%,#332760_100%)] text-[10px] font-extrabold text-white">
              ◆
            </span>
            Technology
          </div>
          <h2
            id="tech-stack-heading"
            className="text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-0.03em] text-[var(--text)]"
          >
            Built on a modern stack
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-[var(--text-dim)]">
            Production-grade tools we use to ship fast, secure web and app solutions for government and enterprise.
          </p>
        </div>

        <ul className="relative mt-10 grid grid-cols-2 gap-4 min-[640px]:grid-cols-3 min-[960px]:gap-5">
          {STACK.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </ul>
      </div>
    </section>
  );
}
