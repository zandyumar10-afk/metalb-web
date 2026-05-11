"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { SectionHeader } from "@/components/sections/products";
import { useI18n } from "@/components/i18n-provider";

export function ProcessSection() {
  const { t, lang } = useI18n();
  return (
    <section id="process" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title={
            <>
              {t.process.titleA}{" "}
              <span className="font-display italic text-steel-300">
                {t.process.titleAccent}
              </span>{" "}
              {t.process.titleB}
            </>
          }
          description={t.process.description}
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
                <ProcessRow
                  key={step.index}
                  index={i}
                  step={step}
                  stepLabel={t.process.step}
                  grindAccent={t.process.grindAccent}
                  lang={lang}
                />
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
  stepLabel,
  grindAccent,
  lang,
}: {
  step: (typeof processSteps)[number];
  index: number;
  stepLabel: string;
  grindAccent: string;
  lang: "id" | "en";
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
            {stepLabel} {step.index}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-glow">
            · {step.tag[lang]}
          </span>
        </div>
        <h3 className="mt-2 text-pretty text-3xl text-ink md:text-4xl">
          {step.title[lang]}
          {index === 2 && (
            <span className="ml-3 font-display italic text-steel-300">
              {grindAccent}
            </span>
          )}
        </h3>
        <p className="mt-3 max-w-xl text-pretty text-base text-ink-2">
          {step.body[lang]}
        </p>
      </div>
    </motion.li>
  );
}

function StickyPreview() {
  const { t } = useI18n();
  return (
    <div className="sticky top-28">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-bg-raised/70">
        <div className="pointer-events-none absolute inset-0 tint-blob-cyan-soft" />
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
                stroke="var(--line)"
                strokeWidth="0.6"
              />
              <path
                d="M40 30 L 40 40"
                stroke="var(--steel-300)"
                strokeWidth="0.6"
              />
            </pattern>
            <linearGradient id="spec-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--surface-2)" />
              <stop offset="1" stopColor="var(--bg-soft)" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#spec-grad)" />
          <rect width="400" height="500" fill="url(#ticks)" />

          <g transform="translate(80 80)">
            <rect
              width="240"
              height="320"
              rx="12"
              fill="color-mix(in oklab, var(--cyan-glow) 6%, transparent)"
              stroke="var(--cyan-glow)"
              strokeOpacity="0.55"
              strokeWidth="1"
            />
            <rect
              x="30"
              y="30"
              width="180"
              height="260"
              rx="6"
              fill="none"
              stroke="var(--cyan-glow)"
              strokeOpacity="0.35"
              strokeWidth="0.6"
            />
            <g transform="translate(60 80)">
              <path
                d="M0 50 L 50 30 L 100 60 L 60 110 Z"
                fill="none"
                stroke="var(--cyan-glow)"
                strokeWidth="0.9"
              />
              <path
                d="M50 30 L 100 60 L 130 30 Z"
                fill="none"
                stroke="var(--cyan-glow)"
                strokeOpacity="0.7"
                strokeWidth="0.7"
              />
              <circle cx="80" cy="60" r="2" fill="var(--amber-glow)" />
              <circle cx="50" cy="100" r="2" fill="var(--amber-glow)" />
            </g>
            {/* Crosshair */}
            <g stroke="var(--cyan-glow)" strokeOpacity="0.7" strokeWidth="0.6">
              <line x1="0" y1="160" x2="240" y2="160" />
              <line x1="120" y1="0" x2="120" y2="320" />
            </g>
          </g>

          <g
            fill="var(--cyan-glow)"
            fillOpacity="0.6"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
          >
            <text x="22" y="40">SPEC-247-A</text>
            <text x="22" y="55">Ø 30 mm · Cu-resin</text>
            <text x="290" y="40">FOCUS</text>
            <text x="290" y="55">+0.000 µm</text>
            <text x="22" y="475">STAGE · 500× DIC</text>
            <text x="345" y="475">REC</text>
          </g>
        </svg>
        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-line bg-bg-raised/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-glow backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
          {t.process.livePreview}
        </div>
      </div>
    </div>
  );
}
