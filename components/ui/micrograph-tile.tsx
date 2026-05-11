import { cn } from "@/lib/utils";

type Variant =
  | "grain"
  | "dendrite"
  | "pearlite"
  | "twin"
  | "hex"
  | "fracture"
  | "etch"
  | "particles"
  | "ferrite"
  | "austenite"
  | "diffraction"
  | "macro"
  | "polish"
  | "weld"
  | "bcc"
  | "intermetallic";

export type TileSpec = {
  variant: Variant;
  tint?: "steel" | "cyan" | "amber" | "rust" | "neutral";
  label?: string;
  sub?: string;
};

const tintColors: Record<NonNullable<TileSpec["tint"]>, string> = {
  steel: "var(--steel-300)",
  cyan: "var(--cyan-glow)",
  amber: "var(--amber-glow)",
  rust: "var(--rust)",
  neutral: "var(--ink-3)",
};

export function MicrographTile({
  spec,
  className,
}: {
  spec: TileSpec;
  className?: string;
}) {
  const tint = tintColors[spec.tint ?? "neutral"];
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-line bg-bg-raised/85 shadow-[0_18px_60px_-30px_rgba(10,14,22,0.18)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient id={`tile-bg-${spec.variant}-${spec.tint}`} cx="0.5" cy="0.5" r="0.8">
            <stop offset="0" stopColor={tint} stopOpacity="0.18" />
            <stop offset="1" stopColor="var(--bg-raised)" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill={`url(#tile-bg-${spec.variant}-${spec.tint})`} />
        <Pattern variant={spec.variant} tint={tint} />
      </svg>

      {/* corner labels */}
      {spec.label && (
        <div className="absolute left-3 top-3 z-10 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-3">
          {spec.label}
        </div>
      )}
      {spec.sub && (
        <div
          className="absolute right-3 top-3 z-10 font-mono text-[9px] uppercase tracking-[0.22em]"
          style={{ color: tint }}
        >
          {spec.sub}
        </div>
      )}
      {/* scale bar */}
      <div className="absolute left-3 bottom-3 z-10 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-4">
        <span className="h-px w-5" style={{ background: tint, opacity: 0.7 }} />
        <span>10 µm</span>
      </div>

      {/* subtle inner ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-line/40" />
    </div>
  );
}

function Pattern({ variant, tint }: { variant: Variant; tint: string }) {
  switch (variant) {
    case "grain":
      return (
        <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="0.9">
          <path d="M30 60 L130 80 L120 180 L50 220 Z" />
          <path d="M130 80 L240 60 L260 160 L120 180 Z" />
          <path d="M240 60 L360 100 L340 200 L260 160 Z" />
          <path d="M120 180 L260 160 L280 290 L150 300 Z" />
          <path d="M260 160 L340 200 L360 320 L280 290 Z" />
          <path d="M50 220 L120 180 L150 300 L70 350 Z" />
          <path d="M150 300 L280 290 L260 380 L160 380 Z" />
          <circle cx="180" cy="130" r="2" fill={tint} fillOpacity="0.7" stroke="none" />
          <circle cx="230" cy="240" r="2" fill={tint} fillOpacity="0.7" stroke="none" />
        </g>
      );
    case "dendrite":
      return (
        <g stroke={tint} strokeOpacity="0.7" fill="none" strokeWidth="0.7">
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 50 + i * 38;
            return (
              <g key={i} transform={`translate(${x} 60) rotate(${i % 2 ? 8 : -6})`}>
                <line x1="0" y1="0" x2="0" y2="280" />
                {Array.from({ length: 14 }).map((__, j) => (
                  <line
                    key={j}
                    x1="0"
                    y1={20 + j * 18}
                    x2={j % 2 ? 16 : -16}
                    y2={28 + j * 18}
                  />
                ))}
              </g>
            );
          })}
        </g>
      );
    case "pearlite":
      return (
        <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="0.9">
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1={0}
              y1={20 + i * 16}
              x2={400}
              y2={20 + i * 16 + (i % 3 === 0 ? 12 : -8)}
            />
          ))}
        </g>
      );
    case "twin":
      return (
        <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="0.7">
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={i} x1={20 + i * 22} y1={0} x2={140 + i * 22} y2={400} />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`b-${i}`} x1={0} y1={50 + i * 60} x2={400} y2={50 + i * 60} strokeOpacity="0.3" />
          ))}
        </g>
      );
    case "hex":
      return (
        <g stroke={tint} strokeOpacity="0.5" fill="none" strokeWidth="0.7">
          {Array.from({ length: 7 }).flatMap((_, row) =>
            Array.from({ length: 6 }).map((__, col) => {
              const cx = 40 + col * 60 + (row % 2 ? 30 : 0);
              const cy = 50 + row * 52;
              const r = 28;
              const points = Array.from({ length: 6 })
                .map((___, k) => {
                  const a = (Math.PI / 3) * k + Math.PI / 6;
                  return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
                })
                .join(" ");
              return <polygon key={`${row}-${col}`} points={points} />;
            }),
          )}
        </g>
      );
    case "fracture":
      return (
        <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="0.9">
          <path d="M0 200 L80 180 L120 240 L200 200 L260 260 L320 220 L400 240" />
          <path d="M0 220 L60 260 L130 200 L210 230 L280 180 L340 230 L400 200" strokeOpacity="0.3" />
          <path d="M70 0 L100 90 L80 160 L130 220 L100 320 L150 400" strokeOpacity="0.35" />
          <path d="M300 0 L280 90 L320 170 L290 260 L320 340 L300 400" strokeOpacity="0.35" />
        </g>
      );
    case "etch":
      return (
        <g>
          <g stroke={tint} strokeOpacity="0.5" fill="none" strokeWidth="0.6">
            {Array.from({ length: 14 }).map((_, i) => (
              <circle key={i} cx={(i * 73) % 380 + 20} cy={(i * 113) % 360 + 20} r={14 + (i % 4) * 6} />
            ))}
          </g>
          <g stroke={tint} strokeOpacity="0.7" strokeWidth="0.8" fill="none">
            <path d="M20 100 C140 60 280 140 380 90" />
            <path d="M10 240 C120 200 240 280 390 230" strokeOpacity="0.4" />
          </g>
        </g>
      );
    case "particles":
      return (
        <g>
          <g fill={tint} fillOpacity="0.5">
            {Array.from({ length: 60 }).map((_, i) => (
              <circle
                key={i}
                cx={(i * 47) % 380 + 10}
                cy={(i * 89) % 380 + 10}
                r={1 + ((i * 13) % 5)}
              />
            ))}
          </g>
          <g stroke={tint} strokeOpacity="0.25" fill="none" strokeWidth="0.6">
            <circle cx="200" cy="200" r="140" />
            <circle cx="200" cy="200" r="90" />
            <circle cx="200" cy="200" r="50" />
          </g>
        </g>
      );
    case "ferrite":
      return (
        <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="0.8">
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={i}
              d={`M${-50 + i * 90} 0 Q ${50 + i * 90} 200 ${-50 + i * 90} 400`}
              strokeOpacity={0.3 + (i % 3) * 0.15}
            />
          ))}
          <g fill={tint} fillOpacity="0.45">
            <circle cx="160" cy="140" r="3" />
            <circle cx="240" cy="240" r="2.5" />
            <circle cx="100" cy="280" r="2.5" />
          </g>
        </g>
      );
    case "austenite":
      return (
        <g stroke={tint} strokeOpacity="0.6" fill="none" strokeWidth="0.7">
          {Array.from({ length: 5 }).flatMap((_, row) =>
            Array.from({ length: 5 }).map((__, col) => {
              const cx = 50 + col * 75;
              const cy = 50 + row * 75;
              return (
                <g key={`${row}-${col}`}>
                  <circle cx={cx} cy={cy} r={26} strokeOpacity="0.5" />
                  <circle cx={cx} cy={cy} r={4} fill={tint} fillOpacity="0.4" stroke="none" />
                </g>
              );
            }),
          )}
        </g>
      );
    case "diffraction":
      return (
        <g>
          <g stroke={tint} strokeOpacity="0.5" fill="none" strokeWidth="0.7">
            <circle cx="200" cy="200" r="40" />
            <circle cx="200" cy="200" r="90" />
            <circle cx="200" cy="200" r="140" />
            <circle cx="200" cy="200" r="180" />
          </g>
          <g fill={tint} fillOpacity="0.85">
            <circle cx="200" cy="200" r="3" />
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const r = 90;
              const a = (deg * Math.PI) / 180;
              return <circle key={deg} cx={200 + r * Math.cos(a)} cy={200 + r * Math.sin(a)} r="3" />;
            })}
            {[30, 90, 150, 210, 270, 330].map((deg) => {
              const r = 140;
              const a = (deg * Math.PI) / 180;
              return <circle key={`r2-${deg}`} cx={200 + r * Math.cos(a)} cy={200 + r * Math.sin(a)} r="2.5" />;
            })}
          </g>
        </g>
      );
    case "macro":
      return (
        <g>
          <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="1">
            <path d="M30 60 L180 60 L200 100 L370 110 L370 290 L210 320 L180 360 L30 350 Z" />
            <path d="M180 60 L180 360" strokeOpacity="0.4" />
            <path d="M30 200 L370 200" strokeOpacity="0.4" />
          </g>
          <g stroke={tint} strokeOpacity="0.35" fill="none" strokeWidth="0.5">
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1={40 + i * 24} y1={70} x2={40 + i * 24} y2={340} />
            ))}
          </g>
        </g>
      );
    case "polish":
      return (
        <g>
          <g stroke={tint} strokeOpacity="0.4" fill="none" strokeWidth="0.5">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={i} x1={-20} y1={i * 14} x2={420} y2={i * 14 + 8} />
            ))}
          </g>
          <g fill={tint} fillOpacity="0.4">
            <circle cx="120" cy="160" r="2" />
            <circle cx="240" cy="240" r="2" />
            <circle cx="320" cy="120" r="2" />
          </g>
        </g>
      );
    case "weld":
      return (
        <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="0.9">
          <path d="M0 100 Q200 60 400 110" />
          <path d="M0 180 Q200 140 400 190" />
          <path d="M0 260 Q200 220 400 270" />
          <path d="M0 340 Q200 300 400 350" strokeOpacity="0.35" />
          <g fill={tint} fillOpacity="0.5">
            <circle cx="120" cy="100" r="3" />
            <circle cx="260" cy="200" r="3" />
            <circle cx="340" cy="290" r="3" />
          </g>
        </g>
      );
    case "bcc":
      return (
        <g stroke={tint} strokeOpacity="0.55" fill="none" strokeWidth="0.6">
          {Array.from({ length: 5 }).flatMap((_, row) =>
            Array.from({ length: 5 }).map((__, col) => {
              const x = 40 + col * 80;
              const y = 40 + row * 80;
              return (
                <g key={`${row}-${col}`}>
                  <rect x={x} y={y} width="50" height="50" />
                  <circle cx={x} cy={y} r="3" fill={tint} fillOpacity="0.7" stroke="none" />
                  <circle cx={x + 50} cy={y} r="3" fill={tint} fillOpacity="0.7" stroke="none" />
                  <circle cx={x} cy={y + 50} r="3" fill={tint} fillOpacity="0.7" stroke="none" />
                  <circle cx={x + 50} cy={y + 50} r="3" fill={tint} fillOpacity="0.7" stroke="none" />
                  <circle cx={x + 25} cy={y + 25} r="3" fill={tint} fillOpacity="0.9" stroke="none" />
                </g>
              );
            }),
          )}
        </g>
      );
    case "intermetallic":
      return (
        <g>
          <g stroke={tint} strokeOpacity="0.4" fill="none" strokeWidth="0.6">
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={i}
                d={`M${20 + i * 30} 40 L${40 + i * 30} 380`}
                strokeOpacity={0.2 + (i % 5) * 0.1}
              />
            ))}
          </g>
          <g fill={tint} fillOpacity="0.6">
            {Array.from({ length: 18 }).map((_, i) => (
              <rect
                key={i}
                x={(i * 53) % 360 + 20}
                y={(i * 91) % 360 + 20}
                width={8 + (i % 3) * 6}
                height={3}
                transform={`rotate(${(i * 31) % 180} ${(i * 53) % 360 + 24} ${(i * 91) % 360 + 21})`}
              />
            ))}
          </g>
        </g>
      );
    default:
      return null;
  }
}
