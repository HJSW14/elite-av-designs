"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Defer Lenis init until after hydration to avoid DOM changes during React hydration
  useEffect(() => {
    let cancelled = false;
    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        lenisRef.current = lenis;

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
