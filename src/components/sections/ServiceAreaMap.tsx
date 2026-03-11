"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { areas } from "@/data/areas";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function ServiceAreaMap() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [MapComponent, setMapComponent] = useState<React.ComponentType<{ containerRef: React.RefObject<HTMLDivElement | null> }> | null>(null);

  useEffect(() => {
    if (!inView) return;

    // Lazy-load the Mapbox component only when in view
    import("./MapboxMap").then((mod) => {
      setMapComponent(() => mod.MapboxMap);
      setMapLoaded(true);
    }).catch(() => {
      setMapLoaded(false);
    });
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]"
          >
            Service Area
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-3 text-3xl font-semibold tracking-tight text-[#ededed] sm:text-4xl"
          >
            We serve all of{" "}
            <span className="heading-display text-[var(--color-accent)]">Sacramento</span>{" "}
            and beyond
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 max-w-xl text-[15px] leading-[1.7] text-[#888]"
          >
            24/7 coverage across Sacramento county and surrounding cities.
            Average response time: {company.responseTime}.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-2"
          >
            <div
              ref={mapContainerRef}
              className="relative h-[280px] overflow-hidden rounded-2xl border border-[#ededed]/6 bg-[#141414] sm:h-[350px] lg:h-[500px]"
            >
              {mapLoaded && MapComponent ? (
                <MapComponent containerRef={mapContainerRef} />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-[var(--color-accent)] mb-3" />
                    <p className="text-[13px] text-[#888]">
                      Loading map...
                      {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN && (
                        <span className="block mt-1 text-[11px] text-[#888]/60">
                          (Add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* City list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col gap-3"
          >
            {areas.map((area, i) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Link
                  href={`/areas/${area.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-[#ededed]/6 bg-[#141414] px-5 py-4 transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[#1a1a1a]"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
                    <div>
                      <div className="text-sm font-semibold text-[#ededed]">
                        {area.city}
                      </div>
                      <div className="text-[11px] text-[#888]">Sacramento Area</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                    View &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
