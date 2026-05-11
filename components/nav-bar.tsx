"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Specs", href: "#specs" },
  { label: "About", href: "#about" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border] duration-500",
        scrolled
          ? "border-b border-line/60 bg-bg/65 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-2"
        >
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
              <line
                x1="12"
                y1="2"
                x2="12"
                y2="22"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <line
                x1="2"
                y1="12"
                x2="22"
                y2="12"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
            <span className="absolute inset-0 animate-[pulse-ring_2.4s_ease-out_infinite] rounded-sm border border-cyan-glow/40" />
          </span>
          <span className="text-ink">METALAB</span>
          <span className="hidden text-ink-4 sm:inline">/ Instruments</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm text-ink-2 transition-colors hover:text-ink"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 -z-0 scale-95 rounded-full bg-surface/0 opacity-0 transition-all group-hover:scale-100 group-hover:bg-surface/80 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-3">
          <a
            href="#cta"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-ink transition-all hover:border-cyan-glow/40 hover:bg-surface hover:shadow-[0_0_0_4px_rgba(94,234,212,0.06)]"
          >
            Request quotation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-ink md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line/60 bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink-2 hover:bg-surface/60 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-between rounded-lg border border-line bg-surface/60 px-3 py-3 text-base text-ink"
            >
              Request quotation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
