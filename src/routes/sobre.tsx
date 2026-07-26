import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Rodrigues.dev" },
      { name: "description", content: "Sobre o desenvolvedor por trás do Rodrigues.dev — trajetória, valores e forma de trabalhar." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Sobre</p>
      <h1 className="mt-6 max-w-[16ch] font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
        Um estúdio de <em className="italic">uma pessoa</em>, com dedicação de duas
      </h1>

      <div className="mt-24 grid gap-16 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-[1.7]">
                    <p>
              Minha jornada na programação começou pela curiosidade de entender como as coisas
              funcionavam por trás das telas. Desde então venho explorando desenvolvimento web,
              unindo código, design e experiência do usuário para criar soluções mais simples
              e bem construídas.
            </p>

            <p>
              Hoje desenvolvo projetos full stack, criando interfaces modernas, aplicações web
              e experiências digitais para pessoas e negócios que querem melhorar sua presença
              online. Gosto de participar de cada etapa: da ideia inicial até a implementação.
            </p>

            <p>
              Minha forma de trabalhar mistura desenvolvimento, atenção aos detalhes e uma visão
              de produto. Acredito que um bom projeto não é apenas sobre tecnologia, mas sobre
              resolver problemas reais com uma experiência clara e agradável.
            </p>
        </div>

        <aside className="space-y-10 md:pl-8 md:border-l md:border-border/60">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Baseado em</p>
            <p className="mt-3 font-display text-2xl tracking-tight">Alcobaça, BA</p>
            <p className="text-sm text-muted-foreground">Atendendo o mundo (UTC−3)</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Idiomas</p>
            <p className="mt-3">Português · Inglês </p>
          </div>
          <div>
            
          </div>
        </aside>
      </div>

      {/* Timeline */}
      

      <div className="mt-32">
        <Link to="/contato" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
          Trabalhar comigo →
        </Link>
      </div>
    </div>
  );
}
