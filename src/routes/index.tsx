import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/reveal";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rodrigues.dev — Desenvolvedor Full Stack" },
      { name: "description", content: "Rodrigues.dev — produtos digitais e sites editoriais para marcas que se recusam a parecer com todo mundo." },
    ],
  }),
  component: Home,
});

const technologies = [
  { name: "TypeScript", level: 95 },
  { name: "React", level: 96 },
  { name: "Next.js / TanStack", level: 92 },
  { name: "Node.js", level: 90 },
  { name: "PostgreSQL", level: 84 },
  { name: "Design Systems", level: 90 },
  { name: "Framer Motion", level: 82 },
  { name: "Java / Spring", level: 68 },
];

const exploring = [
  { tag: "backend", label: "Java · Spring Boot", note: "arquiteturas maduras para times grandes" },
  { tag: "design", label: "UX / UI editorial", note: "tipografia, ritmo, silêncio" },
  { tag: "segurança", label: "Cyber Security", note: "OWASP, ameaças modernas, hardening" },
  { tag: "motion", label: "WebGL & Shaders", note: "GLSL, three.js — aos poucos" },
];

const evolution = [
  ["2013", "Primeiro <div>", "Modificando temas de fórum, aos 13. A curiosidade nunca voltou pra caixa."],
  ["2017", "Primeiro cliente pago", "Uma landing page. Nada de especial. Tudo pra mim."],
  ["2019", "Full Stack", "Node, Postgres, deploy de verdade. Aprendi errando alto."],
  ["2022", "Product Engineer", "Design + engenharia sem fronteira. Produto virou obsessão."],
  ["2025", "Rodrigues.dev", "Estúdio pessoal. Poucos clientes, muito cuidado."],
];

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* ═══════════════ HERO — editorial, assimétrico, respiro máximo ═══════════════ */}
      <section className="relative min-h-[92vh]">
        {/* label vertical no canto */}
        <div className="pointer-events-none absolute left-4 top-40 hidden md:block">
          <span className="vertical-label text-muted-foreground">Est. 2024 — Alcobaça · Bahia</span>
        </div>
        {/* coordenadas discretas */}
        <div className="pointer-events-none absolute right-6 top-32 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block md:right-10">
          <span></span>
          <span className="mx-2 opacity-40">/</span>
          <span></span>
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pt-28 md:px-10 md:pt-44">
          <Reveal className="col-span-12 md:col-span-10 md:col-start-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="inline-block h-px w-8 translate-y-[-3px] bg-muted-foreground/60" />
              <span className="mx-3">Portfólio</span>
              <span className="inline-block h-px w-8 translate-y-[-3px] bg-muted-foreground/60" />
            </p>
          </Reveal>

          {/* Título quebrado assimétrico */}
          <div className="col-span-12 mt-12 md:mt-16">
            <Reveal delay={120}>
              <h1 className="font-display font-light leading-[0.84] tracking-[-0.04em]">
                <span className="block text-[clamp(3rem,11vw,9.5rem)]">Tecnologia</span>
                <span className="ml-[8vw] block text-[clamp(3rem,11vw,9.5rem)]">
                  que  <em className="font-normal italic text-gradient-ocean">conectaㅤ</em>
                </span>
                <span className="block text-right text-[clamp(3rem,11vw,9.5rem)] md:pr-[18vw]">
                  ideias
                </span>
              </h1>
            </Reveal>
          </div>

          <Reveal
            delay={280}
            className="col-span-12 mt-20 grid gap-10 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-5 md:col-start-2">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Sou <span className="text-foreground">Rodrigues</span> — desenvolvedor
                Crio experiências digitais que unem tecnologia, design e simplicidade.
                Cada projeto é pensado para ser rápido, intuitivo e memorável.
              </p>
            </div>
            <div className="flex items-center gap-6 md:col-span-5 md:col-start-8 md:justify-end">
              <Link
                to="/projetos"
                data-cursor="hover"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-float"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
                <span className="relative">Ver projetos</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/contato"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                ou diga olá →
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue — um único fio elegante */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em]">role</span>
            <span className="relative block h-14 w-px overflow-hidden bg-border">
              <span className="absolute left-0 top-0 h-5 w-px animate-[float-slow_2.6s_ease-in-out_infinite] bg-foreground/80" />
            </span>
            <ArrowDown className="h-3 w-3" />
          </div>
        </div>
      </section>

      {/* ═══════════════ MARQUEE — respiro entre hero e o resto ═══════════════ */}
      <section className="relative border-y border-border/40 py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl italic tracking-tight text-foreground/70 md:text-5xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-14 pr-14">
              <span>Design</span>
              <Dot />
              <span className="italic text-gradient-ocean">Arquiteturaㅤ</span>
              <Dot />
              <span>Marca</span>
              <Dot />
              <span className="italic">Ritmoㅤ</span>
              <Dot />
              <span>Planejamento</span>
              <Dot />
              <span className="italic text-gradient-ocean">Detalheㅤ</span>
              <Dot />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ MANIFESTO — texto gigante, numeral fantasma ═══════════════ */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-40 md:px-10 md:py-56">
        <span aria-hidden className="backdrop-numeral absolute -top-8 right-0 hidden select-none md:block">01</span>

        <div className="relative grid gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              (minha filosofia)
            </p>
            <div className="mt-6 h-px w-16 bg-foreground/60" />
          </div>
          <Reveal className="md:col-span-8">
            <p className="font-display text-3xl leading-[1.08] tracking-[-0.02em] md:text-[4.25rem]">
              Tecnologia deveria criar
              <em className="italic text-gradient-ocean"> experiências memoráveis</em>,
              não apenas <span className="whitespace-nowrap">interfaces</span> bonitas.
            </p>
            <div className="mt-14 flex items-center gap-8">
              <Link to="/sobre" className="group inline-flex items-center gap-2 text-sm">
                <span className="border-b border-foreground pb-1">Como eu penso</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <span className="hidden text-xs text-muted-foreground md:inline">
                — leitura de 4 min
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ ÍNDICE / NÚMEROS — grid assimétrico ═══════════════ */}
      <section className="relative border-y border-border/40 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-border/40 md:grid-cols-4">
                      {[
              ["2026", "início da jornada"],
              ["04+", "projetos desenvolvidos"],
              ["100%", "dedicação em cada projeto"],
              ["∞", "vontade de aprender"],
            ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 100} className="group relative px-6 py-16 md:px-10 md:py-24">
              <span className="absolute left-6 top-6 font-mono text-[10px] text-muted-foreground/70 md:left-10">
                0{i + 1}
              </span>
              <p className="font-display text-5xl font-light leading-none tracking-[-0.03em] md:text-7xl">
                {n}
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                {l}
              </p>
              <div className="mt-8 h-px w-8 origin-left scale-x-0 bg-foreground transition-transform duration-700 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ PROJETOS SELECIONADOS — vitrine editorial ═══════════════ */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-40 md:px-10 md:py-56">
        <span aria-hidden className="backdrop-numeral absolute -top-6 -left-6 hidden select-none md:block">02</span>

        <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Trabalhos selecionados / 
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-[-0.03em] md:text-8xl">
              Uma <em className="italic text-gradient-ocean">pequenaㅤ</em>
              <br />
              seleção.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/projetos"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="border-b border-current pb-0.5">Ver arquivo completo</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <ul className="relative mt-24 space-y-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} as="li" delay={i * 90}>
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                data-cursor="hover"
                className="group relative block border-t border-border/60 py-10 md:py-16"
              >
                {/* Preview flutuante no hover (desktop) */}
                <div className="pointer-events-none absolute right-6 top-1/2 hidden h-40 w-56 -translate-y-1/2 overflow-hidden rounded-sm opacity-0 shadow-float transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:right-10 md:block">
                  <img src={p.cover} alt="" className="h-full w-full object-cover scale-105 transition-transform duration-[1400ms] group-hover:scale-110" />
                </div>

                <div className="grid grid-cols-[3rem_1fr_auto] items-center gap-6 md:grid-cols-[5rem_2fr_1fr_auto] md:gap-10">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} /
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-3xl font-light leading-tight tracking-[-0.02em] md:text-7xl">
                      <span className="inline-block transition-[letter-spacing,transform] duration-500 group-hover:tracking-[-0.045em] group-hover:italic">
                        {p.title}
                      </span>
                    </h3>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      {p.discipline}
                    </p>
                  </div>
                  <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
                    {p.year}
                  </p>
                  <span className="text-2xl text-muted-foreground transition-all duration-500 group-hover:translate-x-2 group-hover:text-foreground">
                    →
                  </span>
                </div>

                {/* fio decorativo que desenha no hover */}
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-foreground/60 transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ═══════════════ FRASE DE IMPACTO — respiro editorial ═══════════════ */}
      <section className="relative overflow-hidden py-32 md:py-48">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
               style={{ background: "radial-gradient(circle, var(--turquoise), transparent 65%)" }} />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="mx-auto max-w-[22ch] text-center font-display text-4xl font-light italic leading-[1.05] tracking-[-0.02em] md:text-7xl">
              &ldquo;Editar é <span className="text-gradient-ocean">mais </span>importante que produzir.&rdquo;
            </p>
            <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              — princípio de trabalho, nº 03
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ EXPLORANDO — layout mosaico ═══════════════ */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
        <span aria-hidden className="backdrop-numeral absolute -top-4 right-4 hidden select-none md:block">03</span>

        <div className="relative grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Atualmente explorando
            </p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] md:text-6xl">
              Aprender é <em className="italic">parte do ofício</em>
            </h2>
            <p className="mt-8 max-w-sm text-muted-foreground">
              Estou constantemente explorando novas ferramentas e aprofundando meus conhecimentos.
              Essas são algumas das tecnologias que utilizo e continuo desenvolvendo
            </p>
          </div>

          <ul className="grid gap-4 md:col-span-8 md:grid-cols-6">
            {exploring.map((e, i) => {
              // mosaico assimétrico: 4 tiles, tamanhos alternados
              const span = [
                "md:col-span-4",
                "md:col-span-2",
                "md:col-span-2",
                "md:col-span-4",
              ][i];
              return (
                <Reveal key={e.label} as="li" delay={i * 90} className={span}>
                  <div className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-background/40 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-float">
                    <span className="absolute right-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      <span className="relative grid h-1.5 w-1.5 place-items-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tropical/70" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-tropical" />
                      </span>
                      {e.tag}
                    </span>
                    <p className="mt-8 font-display text-2xl font-light tracking-[-0.02em] md:text-3xl">
                      {e.label}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ═══════════════ TECNOLOGIAS — fio horizontal ═══════════════ */}
      <section className="relative mx-auto max-w-[1400px] border-t border-border/40 px-6 py-32 md:px-10 md:py-40">
        <div className="grid gap-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Ferramentas / stack
            </p>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.02] tracking-[-0.02em] md:text-6xl">
              As ferramentas <em className="italic">servem</em> à ideia
            </h2>
            <p className="mt-8 max-w-sm text-muted-foreground">
              Gosto de aprender tecnologias com propósito, entendendo quando e por que utilizá-las
            </p>
          </div>
          <ul className="space-y-6 md:col-span-7 md:col-start-6">
            {technologies.map((t, i) => (
              <Reveal key={t.name} as="li" delay={i * 50}>
                <TechBar name={t.name} level={t.level} index={i} />
              </Reveal>
            ))}
          </ul> 
        </div>
      </section>

      {/* ═══════════════ EVOLUÇÃO — timeline com numeral fantasma ═══════════════ */}
    
    </div>
  );
}

function Dot() {
  return (
    <span aria-hidden className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
  );
}

function TechBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between gap-4">
        <span className="flex items-baseline gap-4">
          <span className="font-mono text-[10px] text-muted-foreground/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg font-light tracking-[-0.01em] md:text-2xl">
            {name}
          </span>
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-4 h-px w-full overflow-hidden bg-border/60">
        <div
          className="h-full origin-left gradient-ocean transition-all duration-[1400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:h-[2px]"
          style={{ transform: `scaleX(${level / 100})` }}
        />
      </div>
    </div>
  );
}
