"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { stats } from "@/lib/data";
import { SectionHeader } from "@/components/sections/products";
import { Reveal } from "@/components/ui/reveal";

export function SpecsSection() {
  return (
    <section id="specs" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="04 — Engineering"
          title={
            <>
              Every micron has a{" "}
              <span className="font-display italic text-amber-glow">
                certificate
              </span>{" "}
              behind it.
            </>
          }
          description="We measure the things our clients measure. Calibration data ships with every machine — no black boxes, no marketing numbers."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface/30 p-5 md:p-6"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(94,234,212,0.10), transparent 60%)",
                }}
              />
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                {s.label}
              </div>
              <div className="mt-5 flex items-baseline gap-1.5">
                <Counter
                  to={s.value}
                  className="font-display text-5xl text-ink md:text-6xl"
                />
                {s.unit && (
                  <span className="text-sm text-ink-3">{s.unit}</span>
                )}
              </div>
              <p className="mt-4 text-sm text-ink-2/90">{s.hint}</p>
              <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 overflow-hidden rounded-2xl border border-line bg-bg-raised/70 p-7 md:col-span-7 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
              Certifications · Standards
            </div>
            <h3 className="mt-3 text-pretty text-3xl text-ink md:text-4xl">
              Built against the strictest measurement frameworks in the
              industry.
            </h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-ink-2">
              {[
                "ISO 17025 — Calibration laboratories",
                "ASTM E3 — Specimen preparation",
                "ASTM E112 — Grain size",
                "ASTM E45 — Inclusions",
                "ISO 14577 — Hardness",
                "GE-S400 — Aerospace QA",
                "EN 10247 — Steel inclusions",
                "NADCAP — Aerospace audited",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan-glow" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative col-span-12 overflow-hidden rounded-2xl border border-line bg-bg-raised/70 p-7 md:col-span-5 md:p-10"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
              Operating envelope
            </div>
            <h3 className="mt-3 text-pretty font-display text-3xl text-ink">
              From microalloys to medical grade.
            </h3>
            <p className="mt-3 max-w-md text-sm text-ink-2">
              Carbon · stainless · tool steels · superalloys · titanium · aluminum
              · copper · magnesium · cast iron · composites.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { sym: "C", num: 6 },
                { sym: "Cr", num: 24 },
                { sym: "Ni", num: 28 },
                { sym: "Ti", num: 22 },
                { sym: "Al", num: 13 },
                { sym: "Cu", num: 29 },
                { sym: "Mo", num: 42 },
                { sym: "V", num: 23 },
                { sym: "W", num: 74 },
              ].map((el) => (
                <div
                  key={el.sym}
                  className="relative flex aspect-square items-center justify-center rounded-md border border-line bg-bg-soft text-sm font-mono uppercase tracking-[0.15em] text-ink-2 transition-colors hover:border-cyan-glow/50 hover:text-ink"
                >
                  <span className="absolute left-1.5 top-1 text-[9px] text-ink-4">
                    {el.num}
                  </span>
                  {el.sym}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, className }: { to: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isIn = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState<string>(() => {
    const isNumeric = /^-?\d+(\.\d+)?$/.test(to);
    return isNumeric ? "0" : to;
  });

  useEffect(() => {
    if (!isIn) return;
    const isNumeric = /^-?\d+(\.\d+)?$/.test(to);
    if (!isNumeric) {
      setVal(to);
      return;
    }
    const target = parseFloat(to);
    const decimals = (to.split(".")[1] ?? "").length;
    const start = performance.now();
    const dur = 1200;

    let raf = 0;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 4);
      const current = target * eased;
      setVal(current.toFixed(decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isIn, to]);

  return (
    <span ref={ref} className={className}>
      {val}
    </span>
  );
}
