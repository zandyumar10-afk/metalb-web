"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { SectionHeader } from "@/components/sections/products";

export function ProcessSection() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="03 — Pipeline"
          title={
            <>
              The five-step pipeline,{" "}
              <span className="font-display italic text-steel-300">
                tuned in our laboratory
              </span>{" "}
              before it leaves the factory.
            </>
          }
          description="Each step preserves what the previous step earned. Calibration profiles travel with the instrument — same recipes on the bench in Jakarta and in Stuttgart."
        />

        <div className="mt-16 grid grid-cols-12 gap-8 md:gap-12">
          <div className="hidden md:col-span-5 md:block">
            <StickyPreview />
          </div>
          <div className="col-span-12 md:col-span-7">
            <ol className="relative space-y-12 md:space-y-24">
              <span
                aria-hidden
                className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-line to-transparent md:left-[18px]"
              />
              {processSteps.map((step, i) => (
                <ProcessRow key={step.index} index={i} step={step} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 35%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [16, 0]);

  return (
    <motion.li
      ref={ref}
      style={{ opacity, x }}
      className="relative grid grid-cols-[36px_1fr] gap-5 md:grid-cols-[48px_1fr] md:gap-7"
    >
      <div className="relative">
        <span className="absolute left-1.5 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-bg ring-1 ring-cyan-glow md:left-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
        </span>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
            Step {step.index}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-glow">
            · {step.tag}
          </span>
        </div>
        <h3 className="mt-2 text-pretty text-3xl text-ink md:text-4xl">
          {step.title}
          {index === 2 && (
            <span className="ml-3 font-display italic text-steel-300">
              the truth surface
            </span>
          )}
        </h3>
        <p className="mt-3 max-w-xl text-pretty text-base text-ink-2">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}

function StickyPreview() {
  return (
    <div className="sticky top-28">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-bg-raised/70">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(47,102,168,0.25),transparent_70%)]" />
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <pattern
              id="ticks"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40 L 40 40"
                stroke="rgba(125,162,210,0.18)"
                strokeWidth="0.6"
              />
              <path
                d="M40 30 L 40 40"
                stroke="rgba(125,162,210,0.45)"
                strokeWidth="0.6"
              />
            </pattern>
            <linearGradient id="spec-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1c2330" />
              <stop offset="1" stopColor="#0a0f17" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#spec-grad)" />
          <rect width="400" height="500" fill="url(#ticks)" />

          {/* Specimen profile */}
          <g transform="translate(80 80)">
            <rect
              width="240"
              height="320"
              rx="12"
              fill="rgba(94,234,212,0.04)"
              stroke="rgba(94,234,212,0.45)"
              strokeWidth="1"
            />
            <rect
              x="30"
              y="30"
              width="180"
              height="260"
              rx="6"
              fill="rgba(125,162,210,0.06)"
              stroke="rgba(125,162,210,0.4)"
              strokeWidth="0.8"
            />
            <g
              stroke="rgba(125,162,210,0.3)"
              strokeWidth="0.6"
              fill="none"
              strokeDasharray="2 4"
            >
              <line x1="0" y1="80" x2="240" y2="80" />
              <line x1="0" y1="160" x2="240" y2="160" />
              <line x1="0" y1="240" x2="240" y2="240" />
              <line x1="80" y1="0" x2="80" y2="320" />
              <line x1="160" y1="0" x2="160" y2="320" />
            </g>

            {/* Microstructure inset */}
            <g transform="translate(60 90)">
              <rect
                width="120"
                height="140"
                rx="4"
                fill="rgba(7,9,13,0.85)"
                stroke="rgba(94,234,212,0.5)"
              />
              <g
                stroke="rgba(94,234,212,0.55)"
                strokeWidth="0.6"
                fill="none"
                opacity="0.7"
              >
                <path d="M10 30 L40 20 L70 35 L100 25" />
                <path d="M15 60 L45 55 L75 70 L105 60" />
                <path d="M10 95 L50 90 L85 105 L115 95" />
                <path d="M20 125 L60 115 L100 130" />
                <path d="M40 20 L45 55 L60 115" />
                <path d="M70 35 L75 70 L85 105" />
                <path d="M100 25 L105 60 L115 95" />
              </g>
              <circle cx="58" cy="68" r="1.5" fill="#fbbf24" />
              <circle cx="95" cy="40" r="1" fill="#fbbf24" />
              <circle cx="34" cy="100" r="1.2" fill="#fbbf24" />
            </g>

            {/* Crosshair */}
            <g stroke="rgba(94,234,212,0.7)" strokeWidth="0.8">
              <line x1="-12" y1="160" x2="12" y2="160" />
              <line x1="120" y1="-12" x2="120" y2="12" />
              <line x1="228" y1="160" x2="252" y2="160" />
              <line x1="120" y1="308" x2="120" y2="332" />
            </g>
          </g>

          {/* Labels */}
          <g fontFamily="ui-monospace, SFMono-Regular, monospace" fill="rgba(197,205,217,0.6)" fontSize="9">
            <text x="20" y="40">SPEC-247-A</text>
            <text x="20" y="55">Ø 30 mm · Cu-resin</text>
            <text x="320" y="40" textAnchor="end">FOCUS</text>
            <text x="320" y="55" textAnchor="end">+0.000 µm</text>
            <text x="20" y="470">STAGE · 500× DIC</text>
            <text x="380" y="470" textAnchor="end" fill="rgba(94,234,212,0.8)">REC</text>
          </g>
        </svg>

        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-line bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" />
          Live preview
        </div>
      </div>
    </div>
  );
}
