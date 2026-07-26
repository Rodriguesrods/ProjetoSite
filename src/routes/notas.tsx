import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/notas")({
  head: () => ({
    meta: [
      { title: "Notas — Rodrigues.dev" },
      { name: "description", content: "Pequenos pensamentos sobre design, desenvolvimento, tecnologia e o ofício de fazer produto" },
      { property: "og:title", content: "Notas — Rodrigues.dev" },
      { property: "og:description", content: "Pequenos pensamentos sobre design, desenvolvimento e tecnologia" },
    ],
  }),
  component: Notas,
});
/*
const notas = [
  {
    date: "abr · 2026",
    tag: "processo",
    title: "O silêncio entre duas seções",
    body: "Espaço em branco é um argumento — diz que a próxima ideia merece ser ouvida sozinha. Densidade impressiona; respiro convence.",
  },
  {
    date: "mar · 2026",
    tag: "código",
    title: "Contra o hype de stack",
    body: "Framework é ferramenta, não identidade. O produto sobrevive à moda quando as decisões arquiteturais respondem ao contexto — não ao Twitter.",
  },
  {
    date: "fev · 2026",
    tag: "design",
    title: "Tipografia é postura",
    body: "Uma serifada bem escolhida diz mais sobre a marca do que qualquer logotipo. Fraunces com opsz alto é um sorriso; com opsz baixo, um cochicho.",
  },
  {
    date: "jan · 2026",
    tag: "ofício",
    title: "Poucos clientes, muito cuidado",
    body: "Aceitar menos trabalho é a única forma honesta de entregar mais. O calendário é o primeiro item do briefing.",
  },
  {
    date: "dez · 2025",
    tag: "detalhe",
    title: "A microinteração invisível",
    body: "Se o usuário percebe a animação, ela é ruído. Se ele sente que algo está certo sem saber por quê — aí ela virou linguagem.",
  },
]; */

function Notas() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-24 md:px-10 md:pt-40">
      <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
        Notas · caderno aberto
      </p>
      <Reveal delay={100}>
        <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.75rem,10vw,8rem)] font-light leading-[0.9] tracking-[-0.03em]">
          Pequenas ideias, <em className="italic text-gradient-ocean">em voz baixa</em>.
        </h1>
      </Reveal>

      <ol className="mt-24 space-y-16">
        {notas.map((n, i) => (
          <Reveal key={n.title} as="li" delay={i * 60}>
            <article className="grid gap-6 border-t border-border/40 pt-10 md:grid-cols-[10rem_1fr] md:gap-16">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{n.date}</p>
                <p className="inline-flex rounded-full border border-border/60 bg-background/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur-md">
                  {n.tag}
                </p>
              </div>
              <div className="max-w-[62ch]">
                <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                  {n.title}
                </h2>
                <p className="mt-6 text-muted-foreground md:text-lg">{n.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  );
} 