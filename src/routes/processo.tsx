import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "Processo — Rodrigues.dev" },
      { name: "description", content: "Como um projeto acontece: da primeira conversa ao lançamento e à parceria contínua." },
    ],
  }),
  component: Processo,
});

const steps = [
  {
    n: "I",
    title: "Escuta",
    dur: "semana 1",
    body: "Antes de qualquer proposta, quero entender o negócio. Uma ou duas conversas longas, sem apresentação de slides, para mapear o problema real e as pessoas envolvidas.",
  },
  {
    n: "II",
    title: "Escopo",
    dur: "semana 2",
    body: "Documento curto — no máximo cinco páginas — com o problema, a hipótese, o recorte do MVP e o que fica de fora. Se não couber em cinco páginas, ainda não entendi bem.",
  },
  {
    n: "III",
    title: "Direção",
    dur: "semanas 3–4",
    body: "Duas ou três direções visuais e de arquitetura, cada uma com um ponto de vista claro. Você escolhe uma; eu comprometo o resto do projeto com ela.",
  },
  {
    n: "IV",
    title: "Construção",
    dur: "iterativa",
    body: "Ciclos semanais com entregas navegáveis, não apenas telas. Você acompanha o progresso em um ambiente real, comenta em cima do que já roda.",
  },
  {
    n: "V",
    title: "Lançamento",
    dur: "última semana",
    body: "Deploy, monitoramento, documentação e treinamento da sua equipe. Nada de entregar um zip e desaparecer.",
  },
  {
    n: "VI",
    title: "Continuidade",
    dur: "opcional",
    body: "Um contrato leve de acompanhamento mensal para pequenas evoluções, correções e as decisões técnicas que aparecem depois que o produto ganha vida.",
  },
];

function Processo() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Processo</p>
      <h1 className="mt-6 max-w-[14ch] font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
        Devagar é a única forma rápida.
      </h1>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        O jeito como conduzo cada projeto é quase sempre o mesmo. Seis capítulos que se
        adaptam ao tamanho da encomenda, mas nunca ao apelo da pressa.
      </p>

      <ol className="mt-24">
        {steps.map((s, i) => (
          <li key={s.n} className="grid gap-6 border-t border-border/60 py-12 md:grid-cols-[6rem_1fr_2fr] md:gap-12">
            <div>
              <p className="font-display text-4xl tracking-tight">{s.n}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.dur}</p>
            </div>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">{s.title}</h2>
            <p className="text-muted-foreground md:text-lg md:leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-24">
        <Link to="/contato" className="inline-flex border-b border-foreground pb-1 text-sm">
          Começar um projeto →
        </Link>
      </div>
    </div>
  );
}
