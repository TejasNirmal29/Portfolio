import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export function useSmoothScroll({
  targetSelector,
  enabled = true,
  duration = 0.2,
}: {
  targetSelector?: string;
  enabled?: boolean;
  duration?: number;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const wrapper = targetSelector
      ? (document.querySelector(targetSelector) as HTMLElement | null)
      : window;

    if (!wrapper) return;

    const lenis = new Lenis({
      duration,
      easing: (t: number) => t,
      smoothWheel: true,
      wrapper: wrapper instanceof Window ? undefined : wrapper,
      content:
        wrapper instanceof Window
          ? document.documentElement
          : (wrapper.firstElementChild as HTMLElement),
    });

    lenisRef.current = lenis;

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [targetSelector, enabled, duration]);

  return lenisRef;
}
