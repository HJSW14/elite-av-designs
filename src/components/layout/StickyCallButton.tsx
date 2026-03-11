"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { company } from "@/data/company";

export function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile: bottom bar */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          >
            <a
              href={company.phoneHref}
              data-location="sticky_call_mobile"
              className="flex min-h-[56px] w-full items-center justify-center gap-3 bg-[var(--color-accent)] px-6 py-4 text-white shadow-[0_-4px_20px_rgba(62,154,209,0.3)] safe-area-pb"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-medium uppercase tracking-wider opacity-80">
                  24/7 Emergency Dispatch
                </div>
                <div className="text-base font-bold tracking-wide">
                  {company.phone}
                </div>
              </div>
            </a>
          </motion.div>

          {/* Desktop: floating button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-8 right-8 z-50 hidden md:block"
          >
            <a
              href={company.phoneHref}
              data-location="sticky_call_desktop"
              className="group flex items-center gap-3 rounded-full bg-[var(--color-accent)] px-5 py-3.5 text-white shadow-xl shadow-[var(--color-accent)]/30 transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--color-accent)]/50 hover:scale-105"
            >
              {/* Pulse ring */}
              <span className="relative flex h-9 w-9 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <Phone className="h-4 w-4" />
                </span>
              </span>
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-widest opacity-80">
                  Call 24/7
                </div>
                <div className="text-sm font-bold">{company.phone}</div>
              </div>
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
