"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

// cobe v2 still calls `onRender` at runtime but dropped it from its typings.
type GlobeOptions = COBEOptions & {
  onRender: (state: Record<string, number>) => void;
};

type EarthProps = {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
};

/**
 * Auto-rotating cobe globe that fills its parent. Width is tracked with a
 * ResizeObserver (read every frame in onRender) so it renders correctly even
 * when the canvas starts at zero size before layout settles.
 */
export default function Earth({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.55, 0.5, 0.72],
  markerColor = [0.7, 0.55, 1],
  glowColor = [0.36, 0.25, 0.85],
}: EarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = canvas.offsetWidth;

    const ro = new ResizeObserver(() => {
      width = canvas.offsetWidth;
    });
    ro.observe(canvas);

    const options: GlobeOptions = {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta,
      dark,
      scale,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity: 0.9,
      offset: [0, 0],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.0035;
        state.width = width * 2;
        state.height = width * 2;
      },
    };

    const globe = createGlobe(canvas, options);
    const id = requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(id);
      globe.destroy();
      ro.disconnect();
    };
  }, [theta, dark, scale, diffuse, mapSamples, mapBrightness]);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-1000"
        style={{ aspectRatio: "1 / 1", contain: "layout paint size" }}
      />
    </div>
  );
}
