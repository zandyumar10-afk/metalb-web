"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Scissors,
  CircleDot,
  Disc3,
  FlaskConical,
  Microscope,
  Gauge,
} from "lucide-react";
import { motion } from "motion/react";
import { products, type Product } from "@/lib/data";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/components/i18n-provider";
import { FooterSection } from "@/components/sections/footer";
import { cn } from "@/lib/utils";

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  cutting: Scissors,
  mounting: CircleDot,
  polishing: Disc3,
  etching: FlaskConical,
  microscope: Microscope,
  hardness: Gauge,
};

const accentText: Record<Product["accent"], string> = {
  steel: "text-steel-300",
  cyan: "text-cyan-glow",
  amber: "text-amber-glow",
  rust: "text-rust",
};

const accentBg: Record<Product["accent"], string> = {
  steel: "bg-steel-300",
  cyan: "bg-cyan-glow",
  amber: "bg-amber-glow",
  rust: "bg-rust",
};

export function ProductDetailView({ product }: { product: Product }) {
  const { t, lang } = useI18n();
  const Icon = productIcons[product.id] ?? CircleDot;

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <article className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <GridPattern className="text-line/40" size={56} />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute -right-32 top-12 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl",
            accentBg[product.accent],
          )}
          style={{ opacity: 0.18 }}
        />

        <div className="container-x relative">
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.detail.back}
          </Link>

          <div className="mt-10 grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal
                as="span"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3"
              >
                {t.detail.catalogueIndex} · {product.index}
                <span className={cn("h-1.5 w-1.5 rounded-full", accentBg[product.accent])} />
                {product.category[lang]}
              </Reveal>

              <Reveal
                as="h1"
                delay={0.1}
                className="mt-6 text-balance text-5xl leading-[1.02] tracking-[-0.02em] text-ink md:text-7xl"
              >
                {product.name}
              </Reveal>

              <Reveal
                as="p"
                delay={0.2}
                className="mt-5 max-w-2xl text-pretty text-lg text-ink-2"
              >
                <span className="font-display italic">
                  {product.tagline[lang]}
                </span>
              </Reveal>

              <Reveal
                delay={0.3}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <a
                  href="/#cta"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-shadow hover:shadow-[0_18px_60px_-12px_color-mix(in_oklab,var(--ink)_45%,transparent)]"
                >
                  {t.detail.requestCta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-5 py-3 text-sm text-ink transition-colors hover:border-cyan-glow/50 hover:bg-surface"
                >
                  {t.detail.datasheet}
                </a>
              </Reveal>
            </div>

            <Reveal
              delay={0.15}
              className="col-span-12 lg:col-span-5"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line bg-bg-raised/80 p-7">
                <div
                  aria-hidden
                  className={cn(
                    "absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-50 blur-3xl",
                    accentBg[product.accent],
                  )}
                  style={{ opacity: 0.22 }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div
                    className={cn(
                      "inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg",
                    )}
                  >
                    <Icon className={cn("h-7 w-7", accentText[product.accent])} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                      {product.index}
                    </div>
                    <div className="mt-2 font-display text-4xl text-ink">
                      {product.name}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                      {product.category[lang]}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="relative scroll-mt-24 py-16 md:py-24">
        <div className="container-x grid grid-cols-12 gap-8 md:gap-12">
          <Reveal as="div" className="col-span-12 md:col-span-5">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              {t.detail.overview}
            </h2>
          </Reveal>
          <Reveal as="p" delay={0.1} className="col-span-12 max-w-2xl text-pretty text-lg text-ink-2 md:col-span-7">
            {product.longDescription[lang]}
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container-x grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <Reveal as="h2" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              {t.detail.specs}
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="mt-3 max-w-md text-pretty text-3xl text-ink md:text-4xl"
            >
              {product.name}
            </Reveal>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-3 md:col-span-7 md:grid-cols-2">
            {product.specs.map((spec, i) => (
              <motion.div
                key={spec.label.en}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-line bg-surface/30 p-5"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                  {spec.label[lang]}
                </div>
                <div className="mt-2 font-display text-2xl text-ink md:text-3xl">
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container-x grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <Reveal as="h2" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              {t.detail.highlights}
            </Reveal>
          </div>
          <ul className="col-span-12 space-y-3 md:col-span-7">
            {product.highlights.map((h, i) => (
              <motion.li
                key={h.en}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3 border-b border-line/60 pb-3 text-lg text-ink md:text-xl"
              >
                <span
                  className={cn(
                    "inline-flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg-raised",
                    accentText[product.accent],
                  )}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                {h[lang]}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container-x grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <Reveal as="h2" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              {t.detail.useCases}
            </Reveal>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-4 md:col-span-7 md:grid-cols-3">
            {product.useCases.map((u, i) => (
              <motion.div
                key={u.en}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-line bg-surface/30 p-5 text-pretty text-base text-ink-2"
              >
                <span className={cn("font-mono text-[10px] uppercase tracking-[0.22em]", accentText[product.accent])}>
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 text-ink">{u[lang]}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6">
            <Reveal as="h2" delay={0} className="col-span-12 text-pretty text-4xl text-ink md:col-span-6 md:text-5xl">
              {t.detail.relatedTitle}
            </Reveal>
            <Reveal as="p" delay={0.1} className="col-span-12 max-w-md text-pretty text-ink-2 md:col-span-6">
              {t.detail.relatedSub}
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((p, i) => {
              const RIcon = productIcons[p.id] ?? CircleDot;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-surface/30 p-5 transition-all hover:border-cyan-glow/40 hover:bg-surface/60"
                >
                  <Link href={`/products/${p.id}`} className="absolute inset-0 z-10" aria-label={p.name} />
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {p.index}
                    <ArrowUpRight className={cn("h-4 w-4", accentText[p.accent])} />
                  </div>
                  <div className={cn(
                    "mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-bg-raised",
                  )}>
                    <RIcon className={cn("h-5 w-5", accentText[p.accent])} />
                  </div>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {p.category[lang]}
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink">{p.name}</div>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-2">{p.tagline[lang]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
