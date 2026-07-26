import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "underline" | "ghost" | "primary";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

/** Link elegante com efeito magnético leve no hover. */
export function MagneticLink({ children, className, variant = "underline", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate3d(${x * 0.15}px, ${y * 0.2}px, 0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  const base =
    "relative inline-flex items-center gap-2 text-sm font-medium transition-[transform,box-shadow,color] duration-300 ease-out";
  const styles: Record<Variant, string> = {
    underline: "border-b border-foreground pb-1 hover:opacity-80",
    ghost:
      "rounded-full border border-border/70 px-5 py-2.5 backdrop-blur-md hover:border-foreground/60 hover:shadow-soft",
    primary:
      "rounded-full bg-foreground px-6 py-3 text-background shadow-soft hover:shadow-float hover:-translate-y-0.5",
  };

  return (
    <Link
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, styles[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}
