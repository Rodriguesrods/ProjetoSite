import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-border/60">
      {/* wordmark gigante */}
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Rodrigues.dev — encerramento
        </p>
        <p className="mt-8 max-w-[18ch] font-display text-5xl leading-[0.95] tracking-tight md:max-w-none md:text-[clamp(3rem,10vw,9rem)]">
          Vamos construir algo que <em className="italic text-gradient-ocean">sobreviva </em>às tendências
        </p>
        <Link
          to="/contato"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/40 px-6 py-3 text-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-float"
        >
          Iniciar uma conversa <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mx-auto mt-24 grid max-w-[1400px] gap-12 px-6 pb-16 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-display text-2xl tracking-tight">
            Rodrigues<span className="text-gradient-ocean">.dev</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Desenvolvedor  — construindo experiências digitais com atenção obsessiva
            aos detalhes
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-tropical/40 bg-tropical/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-tropical">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tropical opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-tropical" />
            </span>
            disponível para novos projetos
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Navegar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/sobre" className="hover:text-foreground text-muted-foreground">Sobre</Link></li>
            <li><Link to="/projetos" className="hover:text-foreground text-muted-foreground">Projetos</Link></li>
            <li><Link to="/servicos" className="hover:text-foreground text-muted-foreground">Serviços</Link></li>
            <li><Link to="/processo" className="hover:text-foreground text-muted-foreground">Processo</Link></li>
            <li><Link to="/playground" className="hover:text-foreground text-muted-foreground">Playground</Link></li>
            <li><Link to="/notas" className="hover:text-foreground text-muted-foreground">Notas</Link></li>
            <li><Link to="/contato" className="hover:text-foreground text-muted-foreground">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Redes</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://github.com/Rodriguesrods" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Github className="h-3.5 w-3.5" /> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/joaopaulorodriguess/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a></li>
            <li><a href="mailto:contatorodriguesrods@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="h-3.5 w-3.5" /> ola@rodrigues.dev</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Onde</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Alcobaça · Bahia</li>
            <li>Brasil · UTC−3</li>
            <li className="font-mono"></li>
          </ul>
        </div>
      </div>

      {/* wave illustration */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="h-10 w-full text-foreground/20" aria-hidden>
          <path d="M0,20 C240,0 480,40 720,20 C960,0 1200,40 1440,20" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} Rodrigues.dev — feito à mão, sem pressa.</p>
          <p className="font-mono">v1.0 · desde 2026</p>
        </div>
      </div>
    </footer>
  );
}
