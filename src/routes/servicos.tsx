import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Rodrigues.dev" },
      { name: "description", content: "Três formas de trabalhar juntos: produtos digitais sob medida, sites editoriais e consultoria técnica." },
    ],
  }),
  component: Servicos,
});

const services = [
  {
    n: "01",
    title: "Produtos digitais sob medida",
    body: "Do primeiro esboço ao deploy: aplicações web, SaaS internos e portais que precisam ser construídos do zero, com arquitetura pensada para durar.",
    inclui: ["Discovery técnico", "Arquitetura e stack", "Design de produto", "Desenvolvimento full stack", "Deploy e observabilidade"],
    partir: "a partir de 12 semanas",
  },
  {
    n: "02",
    title: "Sites editoriais e institucionais",
    body: "Para marcas, estúdios e criadores que querem uma presença digital com voz própria — narrativa, tipografia e uma performance que não te trai.",
    inclui: ["Estratégia narrativa", "Design editorial", "Desenvolvimento em Next/TanStack", "CMS sob medida", "SEO técnico"],
    partir: "a partir de 6 semanas",
  },
  {
    n: "03",
    title: "Consultoria & code review",
    body: "Sessões contínuas com times pequenos: revisão de código, decisões de arquitetura, mentoria técnica e desatolamento de projetos empacados.",
    inclui: ["Auditoria técnica", "Sessões semanais", "Roadmap de melhoria", "Pair programming"],
    partir: "modelo mensal",
  },
];

function Servicos() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Serviços</p>
      <h1 className="mt-6 max-w-[16ch] font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
        Três formas de trabalhar juntos.
      </h1>

      <div className="mt-24 divide-y divide-border/60">
        {services.map((s) => (
          <div key={s.n} className="grid gap-8 py-16 md:grid-cols-12 md:gap-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground md:col-span-2 md:pt-4">
              {s.n}
            </p>
            <div className="md:col-span-6">
              <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">{s.title}</h2>
              <p className="mt-6 text-muted-foreground md:text-lg">{s.body}</p>
            </div>
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Inclui</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.inclui.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-muted-foreground">·</span> {i}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.partir}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <Link to="/contato" className="inline-flex border-b border-foreground pb-1 text-sm">
          Conversar sobre um projeto →
        </Link>
      </div>
    </div>
  );
}
