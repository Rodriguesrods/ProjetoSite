import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";
import { AmbientBackground } from "../components/ambient-background";
import { ScrollProgress } from "../components/scroll-progress";
import { CustomCursor } from "../components/custom-cursor";
import { PageLoader } from "../components/page-loader";
import { BackToTop } from "../components/back-to-top";

function NotFoundComponent() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-[1400px] flex-col items-start justify-center px-6 md:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        404 · página perdida na maré
      </p>
      <h1 className="mt-6 font-display text-6xl leading-[0.92] tracking-tight md:text-[10rem]">
        A maré levou<br />
        <em className="italic text-gradient-ocean">esta página</em>.
      </h1>
      <p className="mt-8 max-w-lg text-muted-foreground">
        Talvez você tenha digitado errado. Talvez eu tenha mudado de rumo. De qualquer forma,
        há muito mais para explorar no litoral.
      </p>
      <a
        href="/"
        className="mt-10 inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/40 px-6 py-3 text-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-float"
      >
        Voltar para o início →
      </a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-start justify-center px-6 md:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">algo travou</p>
      <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Esta página<br />não carregou.
      </h1>
      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="rounded-full border border-border/70 bg-background/40 px-5 py-2.5 backdrop-blur-md hover:shadow-soft"
        >
          Tentar novamente →
        </button>
        <a href="/" className="border-b border-muted-foreground pb-1 text-muted-foreground">
          Ir para o início
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rodrigues.dev — Desenvolvedor Full Stack" },
      { name: "description", content: "Rodrigues.dev — desenvolvedor Full Stack. Produtos digitais, sites editoriais e experiências sob medida, feitas à mão a partir de Alcobaça, Bahia." },
      { name: "author", content: "Rodrigues.dev" },
      { property: "og:title", content: "Rodrigues.dev — Desenvolvedor Full Stack" },
      { property: "og:description", content: "Produtos digitais e experiências sob medida — feitos à mão, com atenção obsessiva aos detalhes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "icon", href: "/favicon.png", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <PageLoader />
      <AmbientBackground />
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      <div className="relative flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
