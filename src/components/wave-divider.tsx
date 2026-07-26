import { cn } from "@/lib/utils";

type Props = { className?: string; flip?: boolean };

/** Divisor abstrato inspirado em ondas. Muito discreto. */
export function WaveDivider({ className, flip = false }: Props) {
  return (
    <div className={cn("relative w-full", className)} aria-hidden>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-16 w-full text-foreground/10"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,30 C180,10 360,50 540,30 C720,10 900,50 1080,30 C1260,10 1440,50 1440,30"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0,40 C180,20 360,60 540,40 C720,20 900,60 1080,40 C1260,20 1440,60 1440,40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
