import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Rodrigues.dev" },
      { name: "description", content: "Estudos de caso selecionados: sites editoriais, SaaS, portais de saúde e e-commerce autoral." },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Projetos</p>
          <h1 className="mt-6 max-w-[14ch] font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
            Estudos de caso, um por vez.
          </h1>
        </div>
        <p className="max-w-sm text-muted-foreground md:pb-4">
          Cada projeto abaixo é contado inteiro: contexto, problema, decisões, o que sobreviveu
          ao lançamento e o que aprendi.
        </p>
      </div>

      <ul className="mt-24 space-y-24 md:space-y-32">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link
              to="/projetos/$slug"
              params={{ slug: p.slug }}
              className="group grid gap-8 md:grid-cols-12 md:gap-12"
            >
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2 md:col-start-6" : ""}`}>
                <div className="relative overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className={`md:col-span-4 md:pt-8 ${i % 2 === 1 ? "md:order-1 md:col-start-2" : "md:col-start-9"}`}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {p.year}
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{p.title}</h2>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.discipline}</p>
                <p className="mt-6 text-muted-foreground">{p.tagline}</p>
                <span className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
                  Ler estudo de caso →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
