"use client";

import { SectionHeader } from "@/components/sections/products";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="05 — Studio"
          title={
            <>
              We come from{" "}
              <span className="font-display italic text-cyan-glow">
                metallurgy
              </span>
              , not marketing.
            </>
          }
          description="A small studio of metallurgists, mechanical engineers and machinists. We sell the same instruments we use in our own QA laboratory."
        />

        <div className="mt-14 grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-raised/80 p-7 md:p-10">
              <p className="text-pretty text-xl leading-[1.5] text-ink md:text-2xl">
                Sample preparation is where the experiment is{" "}
                <span className="font-display italic text-cyan-glow">
                  won or lost
                </span>
                . Our instruments treat the specimen as data — every cut, every
                pressure ramp, every polishing minute is recorded against the
                certificate that ships with the part.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line/60 pt-6 md:grid-cols-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    Founded
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink">
                    2014
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    Engineers
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink">42</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    Installs
                  </div>
                  <div className="mt-1 font-display text-2xl text-ink">
                    1,280+
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="col-span-12 lg:col-span-5"
          >
            <div className="grid h-full grid-cols-2 gap-4">
              <Pillar
                no="A"
                title="Service-first."
                body="On-site recommissioning and recipe migration when you move benches, sites, or operators."
              />
              <Pillar
                no="B"
                title="No black boxes."
                body="Every setpoint, every coefficient is exposed and editable. Your metallurgists own the recipe."
              />
              <Pillar
                no="C"
                title="Calibrated for export."
                body="Crates leave with the calibration file. Plug in, log in, and reproduce the same image on the other side of the world."
              />
              <Pillar
                no="D"
                title="Quiet by design."
                body="Sub-65 dB cycles. The lab stays the lab — even when six instruments run in parallel."
              />
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
