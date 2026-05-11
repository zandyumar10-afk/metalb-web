"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    function onMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function loop() {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (el) {
        el.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[440px] w-[440px] rounded-full opacity-70 mix-blend-screen blur-3xl md:block"
      style={{
        background:
          "radial-gradient(closest-side, rgba(94,234,212,0.18), rgba(47,102,168,0.12) 40%, transparent 70%)",
      }}
      ref={ref}
    />
  );
}
