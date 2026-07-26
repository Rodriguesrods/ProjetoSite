import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "group fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-background/60 text-muted-foreground shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:text-foreground hover:shadow-float",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4",
      )}
    >
      <ArrowUp className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-foreground/5" />
    </button>
  );
}
