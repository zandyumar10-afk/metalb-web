"use client";

import { motion, useReducedMotion } from "motion/react";
import { MicrographTile, type TileSpec } from "@/components/ui/micrograph-tile";
import { cn } from "@/lib/utils";

const colA: TileSpec[] = [
  { variant: "grain", tint: "cyan", label: "SAMPLE 247-A", sub: "500× DIC" },
  { variant: "pearlite", tint: "amber", label: "SAMPLE 184-B", sub: "200× BF" },
  { variant: "hex", tint: "steel", label: "SAMPLE 092-C", sub: "1000× POL" },
  { variant: "dendrite", tint: "cyan", label: "SAMPLE 311-D", sub: "100× DF" },
  { variant: "polish", tint: "neutral", label: "SAMPLE 408-E", sub: "Ra · 0.02 µm" },
];

const colB: TileSpec[] = [
  { variant: "twin", tint: "steel", label: "SAMPLE 156-F", sub: "400× DIC" },
  { variant: "diffraction", tint: "cyan", label: "EBSD 207", sub: "Φ 1·2 mrad" },
  { variant: "etch", tint: "rust", label: "ETCH 062-G", sub: "Nital 2%" },
  { variant: "macro", tint: "amber", label: "MACRO 411-H", sub: "5× STR" },
  { variant: "particles", tint: "cyan", label: "INCL 503-J", sub: "EDX MAP" },
];

const colC: TileSpec[] = [
  { variant: "austenite", tint: "amber", label: "SAMPLE 612-K", sub: "γ-Fe FCC" },
  { variant: "ferrite", tint: "steel", label: "SAMPLE 219-L", sub: "α-Fe BCC" },
  { variant: "fracture", tint: "rust", label: "FRAC 088-M", sub: "BRITTLE" },
  { variant: "weld", tint: "amber", label: "WELD 322-N", sub: "HAZ 1·3 mm" },
  { variant: "intermetallic", tint: "cyan", label: "PHASE 477-P", sub: "FE-AL" },
];

type ScrollColumnProps = {
  tiles: TileSpec[];
  direction: "up" | "down";
  duration: number;
  className?: string;
};

function ScrollColumn({ tiles, direction, duration, className }: ScrollColumnProps) {
  const reduce = useReducedMotion();
  const loop = [...tiles, ...tiles];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex flex-col gap-4 will-change-transform"
        initial={false}
        animate={
          reduce
            ? undefined
            : {
                y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                duration,
                ease: "linear",
                repeat: Infinity,
              }
        }
      >
        {loop.map((spec, i) => (
          <MicrographTile
            key={`${spec.variant}-${i}`}
            spec={spec}
            className="aspect-[4/5] w-full shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}

export function PhotoWall({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[640px] w-full overflow-hidden md:h-[720px]",
        className,
      )}
    >
      <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-3">
        <ScrollColumn tiles={colA} direction="up" duration={42} />
        <ScrollColumn tiles={colB} direction="down" duration={36} className="hidden md:block" />
        <ScrollColumn tiles={colC} direction="up" duration={48} />
      </div>

      {/* Top fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg to-transparent"
      />
      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent"
      />
    </div>
  );
}

type HorizontalLaneProps = {
  tiles: TileSpec[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
};

export function PhotoLane({
  tiles,
  direction = "left",
  duration = 50,
  className,
}: HorizontalLaneProps) {
  const reduce = useReducedMotion();
  const loop = [...tiles, ...tiles];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex gap-4 will-change-transform"
        initial={false}
        animate={
          reduce
            ? undefined
            : {
                x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                duration,
                ease: "linear",
                repeat: Infinity,
              }
        }
      >
        {loop.map((spec, i) => (
          <MicrographTile
            key={`${spec.variant}-${i}`}
            spec={spec}
            className="aspect-[4/5] h-44 shrink-0 sm:h-56 md:h-64"
          />
        ))}
      </motion.div>

      {/* Left & right fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent"
      />
    </div>
  );
}

export const photoLaneAll: TileSpec[] = [
  ...colA,
  ...colB.slice(0, 3),
  ...colC.slice(0, 3),
];
