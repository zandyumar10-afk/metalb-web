"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="cta" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-line bg-bg-raised/80 p-7 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(47,102,168,0.35),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(94,234,212,0.22),transparent_70%)]"
          />

          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                Request quotation
              </span>
              <h2 className="mt-6 text-pretty text-4xl leading-[1.05] text-ink md:text-6xl">
                Tell us about your{" "}
                <span className="font-display italic text-cyan-glow">
                  specimen
                </span>
                . We&apos;ll send the bench, the recipe and the calibration plan.
              </h2>
              <p className="mt-5 max-w-md text-ink-2">
                Application engineers reply within one working day with a
                tailored quotation. No middleman, no marketing scripts.
              </p>

              <div className="mt-8 space-y-3 text-sm text-ink-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-glow" />
                  <a
                    href="mailto:engineering@metalab.example"
                    className="hover:text-ink"
                  >
                    engineering@metalab.example
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-glow" />
                  <a href="tel:+622112345678" className="hover:text-ink">
                    +62 21 1234 5678
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="col-span-12 grid grid-cols-1 gap-4 md:col-span-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" required>
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-line bg-bg/70 px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-4 focus:border-cyan-glow/50"
                  />
                </Field>
                <Field label="Company">
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Optional"
                    className="w-full rounded-lg border border-line bg-bg/70 px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-4 focus:border-cyan-glow/50"
                  />
                </Field>
              </div>
              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@lab.com"
                  className="w-full rounded-lg border border-line bg-bg/70 px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-4 focus:border-cyan-glow/50"
                />
              </Field>
              <Field label="Instruments of interest">
                <select
                  name="instruments"
                  className="w-full appearance-none rounded-lg border border-line bg-bg/70 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan-glow/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select up to one
                  </option>
                  <option>Full pipeline</option>
                  <option>Cutting</option>
                  <option>Mounting</option>
                  <option>Grinding & Polishing</option>
                  <option>Etching</option>
                  <option>Microscope</option>
                  <option>Hardness</option>
                </select>
              </Field>
              <Field label="Specimen brief">
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Material, geometry, throughput, standards…"
                  className="w-full resize-none rounded-lg border border-line bg-bg/70 px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-4 focus:border-cyan-glow/50"
                />
              </Field>

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-ink-3">
                  By submitting you accept our quotation terms.
                </p>
                <Magnetic strength={0.25}>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-shadow hover:shadow-[0_18px_60px_-12px_rgba(244,246,251,0.45)] disabled:opacity-50"
                    disabled={sent}
                  >
                    {sent ? "Sent — we'll reply soon" : "Request quotation"}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </Magnetic>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-cyan-glow/30 bg-cyan-glow/5 px-3 py-2 text-xs text-cyan-glow"
                >
                  Demo submission — wire this form to your endpoint of choice.
                </motion.div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
        {label}
        {required && <span className="text-cyan-glow">●</span>}
      </span>
      {children}
    </label>
  );
}
