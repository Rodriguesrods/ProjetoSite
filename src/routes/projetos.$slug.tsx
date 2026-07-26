import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Rodrigues.dev` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: `${loaderData.project.title} — Rodrigues.dev` },
          { property: "og:description", content: loaderData.project.tagline },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [{ title: "Projeto — Rodrigues.dev" }, { name: "robots", content: "noindex" }],
  }),
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Projeto</p>
      <h1 className="mt-6 font-display text-6xl tracking-tight">Não encontrado.</h1>
      <Link to="/projetos" className="mt-10 inline-flex border-b border-foreground pb-1 text-sm">
        Ver todos os projetos →
      </Link>
    </div>
  ),
});

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };
  const next = project.next ? getProject(project.next) : projects[0];

  return (
    <article>
      {/* Header editorial */}
      <header className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-24">
        <Link to="/projetos" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          ← Projetos
        </Link>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <h1 className="max-w-[14ch] font-display text-5xl leading-[0.9] tracking-tight md:text-8xl">
            {project.title}
          </h1>
          <p className="max-w-sm text-muted-foreground md:pb-4">{project.tagline}</p>
        </div>

        <dl className="mt-16 grid gap-8 border-t border-border/60 pt-8 text-sm md:grid-cols-4">
          {[
            ["Cliente", project.client],
            ["Ano", project.year],
            ["Função", project.role],
            ["Disciplina", project.discipline],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{k}</dt>
              <dd className="mt-2">{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Cover */}
      <div className="mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
        <img src={project.cover} alt={project.title} className="aspect-[16/10] w-full rounded-sm object-cover" />
      </div>

      {/* Narrativa */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          {[
            ["Contexto", project.context],
            ["Problema", project.problem],
            ["Solução", project.solution],
          ].map(([label, body], i) => (
            <div key={label} className={`md:col-span-8 ${i % 2 === 1 ? "md:col-start-5" : "md:col-start-1"}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
              <p className="mt-4 font-display text-2xl leading-[1.35] tracking-tight md:text-3xl">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria alternada */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-12">
          {project.gallery.map((src, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? "md:col-span-8"
                  : i === 1
                  ? "md:col-span-5 md:col-start-8"
                  : "md:col-span-12"
              }
            >
              <img src={src} alt="" className="w-full rounded-sm object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Stack + Resultados */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Stack</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-border px-3 py-1 text-xs">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Resultados</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label}>
                  <p className="font-display text-4xl tracking-tight md:text-5xl">{r.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Próximo projeto */}
      {next && (
        <section className="mx-auto mt-40 max-w-[1400px] border-t border-border/60 px-6 pt-16 md:px-10">
          <Link to="/projetos/$slug" params={{ slug: next.slug }} className="group flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Próximo projeto</p>
            <p className="font-display text-5xl tracking-tight transition-[letter-spacing] group-hover:tracking-[-0.03em] md:text-7xl">
              {next.title} →
            </p>
          </Link>
        </section>
      )}
    </article>
  );
}
