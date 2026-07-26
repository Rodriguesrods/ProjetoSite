import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground — Rodrigues.dev" },
      { name: "description", content: "Experimentos, componentes e pequenas curiosidades visuais em construção no estúdio." },
      { property: "og:title", content: "Playground — Rodrigues.dev" },
      { property: "og:description", content: "Experimentos e pequenas curiosidades visuais em construção." },
    ],
  }),
  component: Playground,
});

const experiments = [
  { tag: "motion", title: "Ondas paramétricas", note: "Curvas de Bézier interpolando com o scroll — WIP." },
  { tag: "shader", title: "Grão vivo", note: "Ruído procedural em GLSL reagindo ao cursor." },
  { tag: "component", title: "Divisor magnético", note: "Um separador que respira quando o mouse passa." },
  { tag: "type", title: "Fraunces variable", note: "Estudo de eixo óptico em títulos editoriais." },
  { tag: "layout", title: "Grid quebrado", note: "12 colunas + regras propositais de exceção." },
  { tag: "3d", title: "Costa em WebGL", note: "Linha de costa abstrata, low-poly, contemplativa." },
];

function Playground() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-24 md:px-10 md:pt-40">
      <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
        Playground · em obra permanente
      </p>
      <Reveal delay={100}>
        <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(2.75rem,10vw,8rem)] font-light leading-[0.9] tracking-[-0.03em]">
          Estudos sem <em className="italic text-gradient-ocean">pressa</em> — e sem cliente.
        </h1>
      </Reveal>
      <Reveal delay={200} className="mt-10 max-w-xl text-muted-foreground md:text-lg">
        Este espaço guarda experimentos: coisas que ainda não têm forma final, mas
        ensinam. Vai crescer devagar, como maré subindo.
      </Reveal>

      <ul className="mt-24 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((e, i) => (
          <Reveal key={e.title} as="li" delay={i * 60}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-background/40 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-float">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {e.tag}
              </p>
              <p className="mt-6 font-display text-2xl tracking-tight">{e.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
              <div className="pointer-events-none absolute inset-x-8 bottom-8 h-px origin-left scale-x-0 bg-gradient-to-r from-foreground/40 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
