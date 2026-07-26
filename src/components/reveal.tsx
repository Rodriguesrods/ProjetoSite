import type { ReactNode, ElementType, CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  style?: CSSProperties;
};

/** Wrap any block to fade + rise on entering the viewport. */
export function Reveal({ children, as: Tag = "div", className, delay = 0, y = 24, style }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0",
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? undefined : `translate3d(0, ${y}px, 0)`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
