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
  durationSeconds: number;
  className?: string;
};

function ScrollColumn({
  tiles,
  direction,
  durationSeconds,
  className,
}: ScrollColumnProps) {
  const loop = [...tiles, ...tiles];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex flex-col gap-4",
          direction === "up" ? "photo-wall-col-up" : "photo-wall-col-down",
        )}
        style={
          {
            "--scroll-duration": `${durationSeconds}s`,
          } as React.CSSProperties
        }
      >
        {loop.map((spec, i) => (
          <MicrographTile
            key={`${spec.variant}-${i}`}
            spec={spec}
            className="aspect-[4/5] w-full shrink-0"
          />
        ))}
      </div>
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
        <ScrollColumn tiles={colA} direction="up" durationSeconds={42} />
        <ScrollColumn
          tiles={colB}
          direction="down"
          durationSeconds={36}
          className="hidden md:block"
        />
        <ScrollColumn tiles={colC} direction="up" durationSeconds={48} />
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
  durationSeconds?: number;
  className?: string;
};

export function PhotoLane({
  tiles,
  direction = "left",
  durationSeconds = 55,
  className,
}: HorizontalLaneProps) {
  const loop = [...tiles, ...tiles];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-4",
          direction === "left" ? "photo-lane-left" : "photo-lane-right",
        )}
        style={
          {
            "--scroll-duration": `${durationSeconds}s`,
          } as React.CSSProperties
        }
      >
        {loop.map((spec, i) => (
          <MicrographTile
            key={`${spec.variant}-${i}`}
            spec={spec}
            className="aspect-[4/5] h-44 shrink-0 sm:h-56 md:h-64"
          />
        ))}
      </div>

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
