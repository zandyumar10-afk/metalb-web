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

type TrackProps = {
  tiles: TileSpec[];
  duration: number;
  delay: number;
  tilt: number;
  className?: string;
};

function PhotoTrack({ tiles, duration, delay, tilt, className }: TrackProps) {
  const loop = [...tiles, ...tiles];
  return (
    <div
      className={cn("absolute top-0 flex flex-col gap-5 photo-wall-track", className)}
      style={
        {
          "--photo-duration": `${duration}s`,
          "--photo-delay": `${delay}s`,
          "--photo-tilt": `${tilt}deg`,
        } as React.CSSProperties
      }
    >
      {loop.map((spec, i) => (
        <div
          key={`${spec.variant}-${i}`}
          className="photo-wall-card overflow-hidden rounded-2xl shadow-[0_30px_80px_-40px_rgba(13,18,26,0.4)] ring-1 ring-line/60"
        >
          <MicrographTile spec={spec} className="aspect-[4/5] w-full" />
        </div>
      ))}
    </div>
  );
}

export function PhotoWall({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[560px] w-full overflow-hidden md:h-[680px] lg:h-[760px]",
        className,
      )}
    >
      <div className="photo-wall-stage absolute inset-0">
        <div className="photo-wall-plane absolute inset-0">
          {/* Lane 1 — left, narrower, slower drift */}
          <PhotoTrack
            tiles={colA}
            duration={42}
            delay={0}
            tilt={-2}
            className="left-[-6%] w-[44%] sm:left-[-2%] sm:w-[40%] md:left-[2%] md:w-[34%]"
          />
          {/* Lane 2 — middle, taller, offset start (negative delay = mid-cycle) */}
          <PhotoTrack
            tiles={colB}
            duration={50}
            delay={-18}
            tilt={1.5}
            className="left-[36%] hidden w-[40%] md:flex md:w-[34%] lg:left-[34%]"
          />
          {/* Lane 3 — right, narrower, faster, deepest tilt */}
          <PhotoTrack
            tiles={colC}
            duration={38}
            delay={-9}
            tilt={3}
            className="right-[-6%] w-[44%] sm:right-[-2%] sm:w-[40%] md:right-[2%] md:w-[34%]"
          />
        </div>
      </div>

      {/* Edge fades into the page background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg via-bg/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg via-bg/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg/70 to-transparent"
      />
    </div>
  );
}

/**
 * Kept for backward compat — current hero no longer renders a horizontal lane.
 * Renders an aria-hidden empty span so any import keeps building.
 */
export function PhotoLane(_: {
  tiles?: TileSpec[];
  direction?: "left" | "right";
  durationSeconds?: number;
  className?: string;
}) {
  return null;
}

export const photoLaneAll: TileSpec[] = [
  ...colA,
  ...colB.slice(0, 3),
  ...colC.slice(0, 3),
];
