import { useEffect, useState } from "react";

/**
 * Fundo ambiente global: gradientes orgânicos + noise sutil.
 * Reage discretamente ao scroll (parallax leve).
 * Fica atrás de todo o conteúdo (pointer-events: none).
 */
export function AmbientBackground() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 gradient-sand" />

      {/* orbs */}
      <div
        className="absolute -top-40 -left-40 h-[70vh] w-[70vh] rounded-full opacity-60 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle at 30% 30%, var(--turquoise), transparent 60%)",
          transform: `translate3d(0, ${y * 0.05}px, 0)`,
        }}
      />
      <div
        className="absolute top-[30vh] -right-40 h-[80vh] w-[80vh] rounded-full opacity-40 blur-3xl animate-wave"
        style={{
          background: "radial-gradient(circle at 70% 40%, var(--ocean), transparent 65%)",
          transform: `translate3d(0, ${y * -0.03}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-[-30vh] left-[10vw] h-[70vh] w-[70vh] rounded-full opacity-40 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--gold), transparent 65%)",
          transform: `translate3d(0, ${y * 0.02}px, 0)`,
          animationDelay: "-4s",
        }}
      />

      {/* wave line */}
      <svg
        className="absolute inset-x-0 top-1/3 h-40 w-full opacity-[0.07]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ transform: `translate3d(0, ${y * -0.08}px, 0)` }}
      >
        <path
          d="M0,100 C240,40 480,160 720,100 C960,40 1200,160 1440,100 L1440,200 L0,200 Z"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>

      {/* grain noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />
    </div>
  );
}
