"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scissors,
  CircleDot,
  Disc3,
  FlaskConical,
  Microscope,
  Gauge,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { products, type Product } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n-provider";

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  cutting: Scissors,
  mounting: CircleDot,
  polishing: Disc3,
  etching: FlaskConical,
  microscope: Microscope,
  hardness: Gauge,
};

const accentClass: Record<Product["accent"], string> = {
  steel: "text-steel-300",
  cyan: "text-cyan-glow",
  amber: "text-amber-glow",
  rust: "text-rust",
};

const accentRing: Record<Product["accent"], string> = {
  steel:
    "group-hover:border-steel-300/40 group-hover:shadow-[0_0_0_4px_color-mix(in_oklab,var(--steel-300)_8%,transparent)]",
  cyan:
    "group-hover:border-cyan-glow/40 group-hover:shadow-[0_0_0_4px_color-mix(in_oklab,var(--cyan-glow)_8%,transparent)]",
  amber:
    "group-hover:border-amber-glow/40 group-hover:shadow-[0_0_0_4px_color-mix(in_oklab,var(--amber-glow)_8%,transparent)]",
  rust:
    "group-hover:border-rust/40 group-hover:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rust)_8%,transparent)]",
};

export function ProductsSection() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<string>(products[0].id);
  const current = products.find((p) => p.id === active) ?? products[0];

  return (
    <section id="products" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow={t.products.eyebrow}
          title={
            <>
              {t.products.titleA}{" "}
              <span className="font-display italic text-cyan-glow">
                {t.products.titleAccent}
              </span>{" "}
              {t.products.titleB}
            </>
          }
          description={t.products.description}
        />

        <div className="mt-14 grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:col-span-7 lg:grid-cols-2">
            {products.map((p, i) => {
              const Icon = productIcons[p.id] ?? CircleDot;
              const isActive = p.id === active;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.06,
                  }}
                  onMouseEnter={() => setActive(p.id)}
                  onFocus={() => setActive(p.id)}
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-2xl border border-line bg-surface/30 p-5 text-left transition-all",
                    accentRing[p.accent],
                    isActive && "border-line/80 bg-surface/60",
                  )}
                >
                  <Link
                    href={`/products/${p.id}`}
                    className="absolute inset-0 z-10"
                    aria-label={`${p.name} — ${p.category[lang]}`}
                  />
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                      {p.index}
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 text-ink-3 transition-all",
                        isActive && "translate-x-0.5 -translate-y-0.5",
                        accentClass[p.accent],
                      )}
                    />
                  </div>
                  <div
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-bg-raised transition-colors",
                      isActive && "border-line/80",
                    )}
                  >
                    <Icon className={cn("h-5 w-5", accentClass[p.accent])} />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                      {p.category[lang]}
                    </div>
                    <div className="font-display text-2xl text-ink">
                      {p.name}
                    </div>
                  </div>
                  <p className="line-clamp-2 text-sm text-ink-2/90">
                    {p.tagline[lang]}
                  </p>
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-700",
                      p.accent === "steel" && "bg-steel-300/60",
                      p.accent === "cyan" && "bg-cyan-glow/70",
                      p.accent === "amber" && "bg-amber-glow/60",
                      p.accent === "rust" && "bg-rust/60",
                      isActive && "scale-x-100",
                    )}
                  />
                </motion.div>
              );
            })}
          </div>

          <Reveal className="col-span-12 lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden rounded-2xl border border-line bg-bg-raised/80 p-7 md:p-8"
              >
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full tint-blob-cyan" />
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {t.products.catalogue} · {current.index}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.22em]",
                      accentClass[current.accent],
                    )}
                  >
                    {current.category[lang]}
                  </span>
                </div>
                <h3 className="mt-6 text-pretty font-display text-4xl text-ink md:text-5xl">
                  {current.name}
                </h3>
                <p className="mt-3 text-pretty text-base text-ink-2">
                  {current.description[lang]}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3">
                  {current.specs.map((spec) => (
                    <div
                      key={spec.label.en}
                      className="border-t border-line/60 pt-3"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
                        {spec.label[lang]}
                      </div>
                      <div className="mt-0.5 text-sm text-ink">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-7 space-y-2">
                  {current.highlights.map((h) => (
                    <li
                      key={h.en}
                      className="flex items-center gap-2 text-sm text-ink-2"
                    >
                      <Check
                        className={cn("h-3.5 w-3.5", accentClass[current.accent])}
                      />
                      {h[lang]}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/products/${current.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-shadow hover:shadow-[0_18px_60px_-12px_color-mix(in_oklab,var(--ink)_35%,transparent)]"
                  >
                    {t.products.viewDetail}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-ink transition-all hover:border-cyan-glow/40 hover:bg-surface"
                  >
                    {t.products.requestDatasheet}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <Reveal
        className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 md:col-span-3"
        as="p"
      >
        {eyebrow}
      </Reveal>
      <div className="col-span-12 md:col-span-9">
        <Reveal as="h2" className="text-balance text-4xl leading-[1.05] text-ink md:text-6xl">
          {title}
        </Reveal>
        <Reveal
          delay={0.1}
          as="p"
          className="mt-5 max-w-2xl text-pretty text-base text-ink-2 md:text-lg"
        >
          {description}
        </Reveal>
      </div>
    </div>
  );
}
