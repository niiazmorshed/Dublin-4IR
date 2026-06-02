"use client";

import { useLayoutEffect, useRef } from "react";

const NET_COLOR = 0x3fbdff;
const NET_BG = 0x00040f;

type VantaNetInstance = {
  destroy: () => void;
  resize: () => void;
};

/**
 * Vanta.js NET mesh background for the hero. Three.js is loaded client-side
 * only so it never runs during SSR.
 */
export default function HeroVantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaNetInstance | null>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    let cancelled = false;
    let resizeObserver: ResizeObserver | undefined;
    let frame = 0;

    const init = async () => {
      try {
        const [threeModule, netModule] = await Promise.all([
          import("three"),
          import("vanta/dist/vanta.net.min"),
        ]);

        if (cancelled || !containerRef.current) return;

        const THREE =
          "WebGLRenderer" in threeModule
            ? threeModule
            : (threeModule as { default: typeof threeModule }).default;

        (window as Window & { THREE?: typeof THREE }).THREE = THREE;

        effectRef.current = netModule.default({
          el: containerRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: NET_COLOR,
          backgroundColor: NET_BG,
          backgroundAlpha: 0,
          points: 16,
          maxDistance: 26,
          spacing: 16,
          showDots: true,
        }) as VantaNetInstance;

        effectRef.current.resize();

        resizeObserver = new ResizeObserver(() => {
          effectRef.current?.resize();
        });
        resizeObserver.observe(containerRef.current);
      } catch (error) {
        console.error("[HeroVantaBackground] Failed to initialize Vanta NET", error);
      }
    };

    frame = requestAnimationFrame(() => {
      void init();
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="absolute inset-0 z-0 h-full min-h-[480px] w-full opacity-[0.72]"
    />
  );
}
