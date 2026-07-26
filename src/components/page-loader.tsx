import { useEffect, useState } from "react";

/** Loader inicial discreto — monograma R com onda. Some após primeira paint. */
export function PageLoader() {
  const [gone, setGone] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 550);
    const t2 = setTimeout(() => setGone(true), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (gone) return null;
  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[80] grid place-items-center bg-background transition-opacity duration-500 ${
        fade ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="font-display text-4xl italic tracking-tight">R.</span>
        <svg viewBox="0 0 80 12" className="h-3 w-20 text-foreground/60">
          <path
            d="M0,6 C10,0 20,12 30,6 C40,0 50,12 60,6 C70,0 80,12 80,6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0 160"
              to="160 0"
              dur="0.9s"
              fill="freeze"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}
