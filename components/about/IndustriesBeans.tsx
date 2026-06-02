"use client";

import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";

const INDUSTRIES = [
  "Telecommunications",
  "Edtech",
  "Manufacturing",
  "Retail & E-Commerce",
  "Broadcasting",
  "Fintech",
  "Healthcare",
  "Government",
  "Logistics",
  "Energy & Utilities",
  "Insurance",
  "Banking",
  "Education",
  "Media",
  "Travel & Hospitality",
  "Real Estate",
  "Automotive",
  "Agriculture",
  "Gaming",
  "Pharma & Life Sciences",
  "Public Sector",
  "SaaS",
  "Non-Profit",
  "Retail & E-Commerce",
  "Telecommunications",
  "Fintech",
  "Healthcare",
  "Edtech",
];

const WALL = 60; // thickness of invisible boundary bodies

export default function IndustriesBeans() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [started, setStarted] = useState(false);

  // Drop the pills only once the arena scrolls into view.
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !started) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const width = scene.clientWidth;
    const height = scene.clientHeight;

    const { Engine, Runner, World, Bodies, Body, Mouse, MouseConstraint, Events } =
      Matter;

    const engine = Engine.create();
    engine.gravity.y = 1;
    const world = engine.world;

    // measured DOM pills → matching physics bodies
    const pills = pillRefs.current.filter(Boolean) as HTMLDivElement[];
    const bodies = pills.map((pill, i) => {
      const w = pill.offsetWidth;
      const h = pill.offsetHeight;
      const x = 40 + Math.random() * Math.max(width - 80, 1);
      // stagger the drop heights so they cascade in instead of all at once
      const y = reduce ? height - 60 - i * 18 : -120 - i * 90;
      const body = Bodies.rectangle(x, y, w, h, {
        chamfer: { radius: h / 2 },
        restitution: 0.35,
        friction: 0.45,
        frictionAir: 0.012,
      });
      Body.setAngle(body, (Math.random() - 0.5) * 0.6);
      return body;
    });

    const opts = { isStatic: true, render: { visible: false } };
    const boundaries = [
      Bodies.rectangle(width / 2, height + WALL / 2, width + WALL * 2, WALL, opts),
      Bodies.rectangle(-WALL / 2, height / 2, WALL, height * 2, opts),
      Bodies.rectangle(width + WALL / 2, height / 2, WALL, height * 2, opts),
    ];

    World.add(world, [...boundaries, ...bodies]);

    // Drag-to-toss, but only on fine pointers — on touch devices the mouse
    // constraint hijacks touchmove and would trap the page scroll.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer) {
      const mouse = Mouse.create(scene);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      World.add(world, mouseConstraint);
      // keep wheel scrolling working over the arena
      const wheelHandler = (mouse as unknown as { mousewheel: EventListener })
        .mousewheel;
      mouse.element.removeEventListener("mousewheel", wheelHandler);
      mouse.element.removeEventListener("DOMMouseScroll", wheelHandler);
    }

    const sync = () => {
      for (let i = 0; i < pills.length; i++) {
        const body = bodies[i];
        const pill = pills[i];
        pill.style.transform = `translate(${body.position.x - pill.offsetWidth / 2}px, ${body.position.y - pill.offsetHeight / 2}px) rotate(${body.angle}rad)`;
        pill.style.opacity = "1";
      }
    };
    Events.on(engine, "afterUpdate", sync);

    const runner = Runner.create();
    Runner.run(runner, engine);

    // rebuild on resize for responsiveness
    const onResize = () => {
      const nw = scene.clientWidth;
      const nh = scene.clientHeight;
      Body.setPosition(boundaries[0], { x: nw / 2, y: nh + WALL / 2 });
      Body.setPosition(boundaries[2], { x: nw + WALL / 2, y: nh / 2 });
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      Events.off(engine, "afterUpdate", sync);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
    };
  }, [started]);

  return (
    <section
      aria-labelledby="industries-heading"
      className="relative w-full overflow-hidden py-20 min-[960px]:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 min-[960px]:px-10">
        <div className="flex flex-col gap-6 min-[960px]:flex-row min-[960px]:items-end min-[960px]:justify-between">
          <div>
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--purple)]" />
              Crafting specialised innovations for your industry
            </span>
            <h2
              id="industries-heading"
              className="mt-3 text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--text)]"
            >
              Industries we serve
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] leading-relaxed text-[var(--text-dim)]">
            Our expertise spans a diverse range of sectors, each with its own
            digital landscape — delivering tailored solutions that foster growth,
            sharpen efficiency, and drive innovation.
          </p>
        </div>

        {/* physics arena */}
        <div
          ref={sceneRef}
          className="surface-card relative mt-12 h-[540px] w-full cursor-grab overflow-hidden active:cursor-grabbing min-[960px]:h-[640px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(93,63,214,0.18),transparent_70%)]"
          />
          {INDUSTRIES.map((label, i) => (
            <div
              key={`${label}-${i}`}
              ref={(node) => {
                pillRefs.current[i] = node;
              }}
              className="pointer-events-none absolute left-0 top-0 flex select-none items-center whitespace-nowrap rounded-full border border-[rgba(220,215,232,0.28)] bg-[rgba(255,255,255,0.04)] px-5 py-2.5 text-[14px] font-medium text-[var(--text)] opacity-0 backdrop-blur-sm will-change-transform"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
