import { useEffect, useRef, useState } from "react";

export function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (reduced) { setVal(to); return; }
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            setVal(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}
