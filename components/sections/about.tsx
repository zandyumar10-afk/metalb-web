"use client";

import { SectionHeader } from "@/components/sections/products";
import { Reveal } from "@/components/ui/reveal";
import { useT } from "@/components/i18n-provider";

export function AboutSection() {
  const t = useT();
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={
            <>
              {t.about.titleA}{" "}
              <span className="font-display italic text-cyan-glow">
                {t.about.titleAccent}
              </span>
              {t.about.titleB}
            </>
          }
          description={t.about.description}
        />

        <div className="mt-14 grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-raised/80 p-7 md:p-10">
              <p className="text-pretty text-xl leading-[1.5] text-ink md:text-2xl">
                {t.about.philosophyA}{" "}
                <span className="font-display italic text-cyan-glow">
                  {t.about.philosophyAccent}
                </span>
                {t.about.philosophyB}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line/60 pt-6 md:grid-cols-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {t.about.founded}
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink">
                    2014
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {t.about.engineers}
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink">42</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {t.about.installs}
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink">
                    1,280+
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-5">
            <div className="grid h-full grid-cols-2 gap-4">
              {(["A", "B", "C", "D"] as const).map((no) => {
                const p = t.about.pillars[no];
                return (
                  <Pillar key={no} no={no} title={p.title} body={p.body} />
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  no,
  title,
  body,
}: {
  no: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/30 p-5 transition-colors hover:border-cyan-glow/30">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
        <span>{no}</span>
        <span className="opacity-0 transition-opacity group-hover:opacity-100 text-cyan-glow">
          ●
        </span>
      </div>
      <div className="mt-auto">
        <div className="font-display text-2xl text-ink">{title}</div>
        <p className="mt-2 text-sm text-ink-2">{body}</p>
      </div>
    </div>
  );
}
