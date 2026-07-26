import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Rodrigues.dev" },
      { name: "description", content: "Vamos conversar sobre seu próximo projeto." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contato</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-8xl">
            Diga <em className="italic">olá</em>.
          </h1>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Prefiro conversas antes de propostas. Me conte um pouco sobre o projeto,
            o momento da empresa e o que te trouxe até aqui.
          </p>

          <dl className="mt-16 space-y-8">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">E-mail direto</dt>
              <dd className="mt-2 font-display text-2xl tracking-tight">contatorodriguesrods@gmail.com</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Localização</dt>
              <dd className="mt-2">Alcobaça, Bahia · disponível para viagens curtas</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Agenda</dt>
              <dd className="mt-2">Aceitando projetos a partir de {new Date().toLocaleString("pt-BR", { month: "long" })} próximo.</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-5 md:col-start-8"
        >
          {sent ? (
            <div className="rounded-sm border border-border/60 p-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Recebido</p>
              <p className="mt-4 font-display text-3xl tracking-tight">
                Obrigado. Respondo em até dois dias úteis.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {[
                { name: "nome", label: "Seu nome", type: "text" },
                { name: "email", label: "E-mail", type: "email" },
                { name: "empresa", label: "Empresa / projeto", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{f.label}</span>
                  <input
                    type={f.type}
                    name={f.name}
                    required
                    className="mt-2 w-full border-0 border-b border-border bg-transparent py-2 text-lg outline-none transition-colors focus:border-foreground"
                  />
                </label>
              ))}
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Conte um pouco</span>
                <textarea
                  name="mensagem"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-base outline-none transition-colors focus:border-foreground"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium"
              >
                Enviar mensagem →
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
