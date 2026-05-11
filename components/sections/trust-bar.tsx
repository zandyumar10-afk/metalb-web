"use client";

import { Marquee } from "@/components/ui/marquee";
import { trustedBy } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function TrustBar() {
  return (
    <section className="relative border-y border-line/60 bg-bg-soft/60 py-12">
      <div className="container-x mb-6 flex items-center justify-between gap-6">
        <Reveal
          as="p"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3"
        >
          Trusted across 34 countries —
        </Reveal>
        <Reveal
          as="p"
          className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-ink-4 sm:block"
        >
          ASTM E3 · ISO 17025 · GE-S400
        </Reveal>
      </div>

      <Marquee duration={42} className="py-4">
        {trustedBy.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="mx-10 flex items-center gap-3 whitespace-nowrap text-ink-2 transition-colors hover:text-ink"
          >
            <span className="font-display text-2xl tracking-tight md:text-3xl">
              {item.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-4">
              / {item.sub}
            </span>
            <span className="ml-10 h-6 w-px bg-line" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
