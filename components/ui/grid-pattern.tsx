import { cn } from "@/lib/utils";

type GridPatternProps = {
  className?: string;
  size?: number;
  fade?: boolean;
};

export function GridPattern({
  className,
  size = 48,
  fade = true,
}: GridPatternProps) {
  return (
    <svg
      aria-hidden
      className={cn(
        "absolute inset-0 h-full w-full text-line/60",
        fade &&
          "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
        className,
      )}
    >
      <defs>
        <pattern
          id="grid"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.35"
          />
        </pattern>
        <pattern
          id="grid-dot"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <circle cx="0.5" cy="0.5" r="1" fill="currentColor" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#grid-dot)" />
    </svg>
  );
}
