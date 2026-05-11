"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Instruments",
    links: [
      "Cutting",
      "Mounting",
      "Polishing",
      "Etching",
      "Microscopy",
      "Hardness",
    ],
  },
  {
    title: "Studio",
    links: ["About", "Engineering team", "Calibration lab", "Careers"],
  },
  {
    title: "Resources",
    links: ["Catalogue PDF", "Recipes", "Service manuals", "Publications"],
  },
];

export function FooterSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.2, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line/60">
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[460px] w-[1200px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(47,102,168,0.4),transparent_70%)]"
      />

      <div className="container-x relative grid grid-cols-12 gap-8 pt-20 pb-8 md:gap-10 md:pt-24">
        <div className="col-span-12 md:col-span-5">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-2">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-sm border border-line bg-bg-raised">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-cyan-glow">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </span>
            <span className="text-ink">METALAB</span>
          </div>
          <p className="mt-6 max-w-sm text-pretty text-ink-2">
            Precision metallography instruments — engineered, calibrated and
            shipped from a single workshop.
          </p>
          <a
            href="#cta"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-ink transition-all hover:border-cyan-glow/40 hover:bg-surface"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-6 md:col-span-7 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="col-span-12 -mb-24 mt-4 select-none overflow-hidden">
          <div className="text-[clamp(80px,18vw,320px)] leading-[0.85] font-display italic tracking-[-0.04em] text-ink/5">
            METALAB
          </div>
        </div>

        <div className="col-span-12 mt-16 flex flex-col items-start justify-between gap-3 border-t border-line/60 pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} METALAB Instruments</span>
          <span>Bandung · Jakarta · Stuttgart</span>
          <span>Made for metallurgists</span>
        </div>
      </div>
    </footer>
  );
}
