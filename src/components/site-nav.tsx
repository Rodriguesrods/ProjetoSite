import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/processo", label: "Processo" },
  { to: "/playground", label: "Playground" },
  { to: "/notas", label: "Notas" },
  { to: "/contato", label: "Contato" },
] as const;

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return { dark, toggle };
}

export function SiteNav() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[height,backdrop-filter,background,border-color] duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/60 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[height] duration-500 md:px-10",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-medium tracking-tight">
            Rodrigues<span className="text-gradient-ocean">.dev</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            full stack · bahia
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
            >
              <span className="relative">
                {l.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <span className="mr-3 hidden items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:inline-flex">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tropical opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tropical" />
            </span>
            disponível
          </span>
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/80 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border/40 py-3 font-display text-2xl tracking-tight text-foreground last:border-0"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
