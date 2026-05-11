"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal, WordReveal } from "@/components/ui/reveal";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);
  const sampleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const dataY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32"
    >
      <GridPattern className="text-line/50" size={56} />

      <motion.div
        aria-hidden
        style={{ y: orbY, scale: orbScale, opacity }}
        className="pointer-events-none absolute -right-32 top-12 h-[520px] w-[520px] rounded-full"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(47,102,168,0.45),rgba(47,102,168,0)_70%)]" />
        <div className="absolute inset-6 rounded-full bg-[radial-gradient(closest-side,rgba(94,234,212,0.25),transparent_70%)]" />
        <div className="absolute inset-16 rounded-full border border-cyan-glow/15" />
        <div className="absolute inset-28 rounded-full border border-cyan-glow/20" />
        <div className="absolute inset-40 rounded-full border border-cyan-glow/30" />
      </motion.div>

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <Reveal className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-ink-3">
              <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center rounded-full bg-cyan-glow">
                <span className="absolute inset-0 animate-[pulse-ring_2s_ease-out_infinite] rounded-full bg-cyan-glow/50" />
              </span>
              Catalogue 2025 / Issue VI
            </Reveal>

            <h1 className="text-balance text-[44px] leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[88px]">
              <WordReveal text="Metallography," className="block text-ink" />
              <span className="relative block">
                <WordReveal
                  text="reduced to"
                  className="text-ink"
                />{" "}
                <span className="font-display italic text-cyan-glow">
                  <WordReveal text="one micron." delay={0.2} />
                </span>
              </span>
            </h1>

            <Reveal
              delay={0.4}
              className="mt-7 max-w-xl text-base leading-[1.65] text-ink-2 md:text-lg"
              as="p"
            >
              METALAB designs and manufactures cutting, mounting, grinding,
              polishing, etching and microscopy instruments for metallurgical
              laboratories. Every machine is calibrated against ISO and ASTM
              references — so what you see at 1000× is the truth.
            </Reveal>

            <Reveal
              delay={0.6}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-shadow hover:shadow-[0_18px_60px_-12px_rgba(244,246,251,0.45)]"
                >
                  Browse catalogue
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href="#cta"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-5 py-3 text-sm text-ink transition-colors hover:border-cyan-glow/50 hover:bg-surface"
                >
                  <Sparkles className="h-4 w-4 text-cyan-glow" />
                  Talk to an application engineer
                </a>
              </Magnetic>
            </Reveal>

            <Reveal
              delay={0.8}
              className="mt-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3"
            >
              <ArrowDown className="h-3.5 w-3.5 text-cyan-glow" />
              Scroll for sample preparation pipeline
            </Reveal>
          </div>

          <div className="relative col-span-12 lg:col-span-4">
            <motion.div
              style={{ y: sampleY }}
              className="relative ml-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl border border-line bg-surface/40 backdrop-blur-sm"
            >
              <MicrostructurePreview />
              <SampleHUD />
            </motion.div>

            <motion.div
              style={{ y: dataY }}
              className="absolute -bottom-10 -left-4 hidden w-[260px] rounded-xl border border-line bg-bg-raised/90 p-4 shadow-2xl backdrop-blur-md sm:block lg:-left-12"
            >
              <DataCard />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-line/60 pt-6">
          <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
            <span>EST. 2014</span>
            <span className="text-ink-4">/</span>
            <span>ISO 17025 Calibrated</span>
            <span className="text-ink-4">/</span>
            <span>34 Countries</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-display italic text-ink">A — C</span>
            <span className="text-xs text-ink-3">Series of six instruments</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MicrostructurePreview() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="60%">
          <stop offset="60%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
        </radialGradient>
        <linearGradient id="gradFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1c2330" />
          <stop offset="1" stopColor="#0c1b2e" />
        </linearGradient>
        <pattern
          id="hatch"
          width="6"
          height="6"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="#5eead4" strokeWidth="0.6" opacity="0.35" />
        </pattern>
      </defs>

      <rect width="400" height="400" fill="url(#gradFill)" />

      {/* Voronoi-like grain boundaries */}
      <g stroke="#5eead4" strokeWidth="0.7" fill="none" opacity="0.5">
        <path d="M40 60 L120 30 L200 75 L260 35 L350 80" />
        <path d="M30 130 L100 110 L160 160 L230 130 L310 165 L380 130" />
        <path d="M55 220 L130 210 L210 250 L290 215 L370 230" />
        <path d="M40 310 L120 290 L200 330 L280 290 L370 320" />
        <path d="M20 380 L110 365 L210 390 L300 370 L390 395" />

        <path d="M120 30 L100 110 L130 210 L120 290 L110 365" />
        <path d="M200 75 L160 160 L210 250 L200 330 L210 390" />
        <path d="M260 35 L230 130 L290 215 L280 290 L300 370" />
        <path d="M350 80 L310 165 L370 230 L370 320 L390 395" />
      </g>

      {/* Pearlite / cementite hatches in random grains */}
      <polygon
        points="120,30 200,75 160,160 100,110"
        fill="url(#hatch)"
        opacity="0.55"
      />
      <polygon
        points="210,250 290,215 280,290 200,330"
        fill="url(#hatch)"
        opacity="0.4"
      />
      <polygon
        points="40,310 120,290 130,210 55,220"
        fill="rgba(94,234,212,0.06)"
      />

      {/* Inclusions */}
      <g fill="#fbbf24" opacity="0.85">
        <circle cx="240" cy="120" r="3" />
        <circle cx="180" cy="210" r="2" />
        <circle cx="320" cy="260" r="2.5" />
        <circle cx="90" cy="270" r="1.6" />
      </g>

      <rect width="400" height="400" fill="url(#vignette)" />
    </svg>
  );
}

function SampleHUD() {
  return (
    <div className="absolute inset-0 p-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-2">
      <div className="flex items-start justify-between">
        <span>Sample 247-A</span>
        <span className="text-cyan-glow">500× DIC</span>
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <div className="h-12 w-px bg-ink-3/50" />
        <div className="mt-1 text-ink-3">Y</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div className="space-y-1">
          <div className="h-px w-16 bg-ink-3/60" />
          <div className="text-ink-3">10 µm</div>
        </div>
        <div className="text-right">
          <div className="text-ink-3">Grain G</div>
          <div className="text-ink">8.7 ASTM</div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-cyan-glow/70" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-cyan-glow/70" />
        <div className="absolute inset-0 rounded-full border border-cyan-glow/60" />
      </div>
    </div>
  );
}

function DataCard() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-ink-3">
        <span>Live · Polishing</span>
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-glow" />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs text-ink-3">Surface Ra</div>
          <div className="font-display text-3xl text-ink">0.02</div>
        </div>
        <div className="text-right text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-glow">
          µm
        </div>
      </div>
      <div className="grid grid-cols-12 items-end gap-[3px] h-12">
        {Array.from({ length: 28 }).map((_, i) => {
          const h = 20 + Math.sin(i * 0.6) * 18 + Math.sin(i * 1.3) * 10 + 24;
          return (
            <div
              key={i}
              className="w-full rounded-sm bg-cyan-glow/60 col-span-1"
              style={{ height: `${Math.min(46, Math.max(8, h))}px` }}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-ink-3">
        <span>00:00</span>
        <span>04:32</span>
      </div>
    </div>
  );
}
