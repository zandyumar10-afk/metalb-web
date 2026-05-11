"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal, WordReveal } from "@/components/ui/reveal";
import { PhotoWall } from "@/components/ui/photo-wall";
import { useT } from "@/components/i18n-provider";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const t = useT();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);
  const wallY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const wallScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);
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
        <div className="absolute inset-0 rounded-full tint-blob-blue" />
        <div className="absolute inset-6 rounded-full tint-blob-cyan-soft" />
        <div className="absolute inset-16 rounded-full border border-cyan-glow/15" />
        <div className="absolute inset-28 rounded-full border border-cyan-glow/20" />
        <div className="absolute inset-40 rounded-full border border-cyan-glow/30" />
      </motion.div>

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 lg:col-span-7">
            <Reveal className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-ink-3">
              <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center rounded-full bg-cyan-glow">
                <span className="absolute inset-0 animate-[pulse-ring_2s_ease-out_infinite] rounded-full bg-cyan-glow/50" />
              </span>
              {t.hero.eyebrow}
            </Reveal>

            <h1 className="text-balance text-[44px] leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[88px]">
              <WordReveal text={t.hero.titleA} className="block text-ink" />
              <span className="relative block">
                <WordReveal text={t.hero.titleB} className="text-ink" />{" "}
                <span className="font-display italic text-cyan-glow">
                  <WordReveal text={t.hero.titleAccent} delay={0.2} />
                </span>
              </span>
            </h1>

            <Reveal
              delay={0.4}
              className="mt-7 max-w-xl text-base leading-[1.65] text-ink-2 md:text-lg"
              as="p"
            >
              {t.hero.subhead}
            </Reveal>

            <Reveal
              delay={0.6}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-shadow hover:shadow-[0_18px_60px_-12px_color-mix(in_oklab,var(--ink)_45%,transparent)]"
                >
                  {t.hero.browse}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href="#cta"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-5 py-3 text-sm text-ink transition-colors hover:border-cyan-glow/50 hover:bg-surface"
                >
                  <Sparkles className="h-4 w-4 text-cyan-glow" />
                  {t.hero.talk}
                </a>
              </Magnetic>
            </Reveal>

            <Reveal
              delay={0.8}
              className="mt-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3"
            >
              <ArrowDown className="h-3.5 w-3.5" />
              {t.hero.scroll}
            </Reveal>
          </div>

          <div className="relative col-span-12 lg:col-span-5">
            <motion.div
              style={{ y: wallY, scale: wallScale }}
              className="relative ml-auto w-full"
            >
              <PhotoWall />
            </motion.div>

            <motion.div
              style={{ y: dataY }}
              className="absolute -bottom-6 -left-6 z-10 hidden w-56 rounded-xl border border-line bg-bg-raised/90 p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] backdrop-blur sm:block"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                {t.hero.live}
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
              </div>
              <div className="mt-2 text-[11px] text-ink-3">
                {t.hero.surfaceRa}
              </div>
              <div className="flex items-baseline gap-1.5">
                <div className="font-display text-4xl text-ink">0.02</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-4">
                  {t.hero.mm}
                </div>
              </div>
              <BarSpark />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 items-end gap-6 border-t border-line/60 pt-6 md:mt-20">
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              <span>{t.hero.est}</span>
              <span className="hidden h-3 w-px bg-line md:inline" />
              <span>{t.hero.iso}</span>
              <span className="hidden h-3 w-px bg-line md:inline" />
              <span>{t.hero.countries}</span>
            </div>
          </div>
          <div className="col-span-12 flex items-center justify-start gap-3 md:col-span-4 md:justify-end">
            <span className="font-display italic text-ink-2">A — C</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              {t.hero.seriesTag}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BarSpark() {
  const data = [3, 5, 8, 6, 9, 7, 11, 10, 12, 8, 6, 5];
  return (
    <div className="mt-3 flex h-12 items-end gap-1">
      {data.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm bg-cyan-glow/70"
          style={{ height: `${(v / 14) * 100}%` }}
        />
      ))}
    </div>
  );
}
