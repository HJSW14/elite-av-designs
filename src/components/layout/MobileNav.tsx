"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, ArrowRight } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-sm flex-col bg-[#0C0C0C] shadow-2xl"
          >
            <div className="flex items-center justify-between p-5">
              <span className="text-lg font-bold text-[#E8E4DF]">
                Elite<span className="text-[#D4844C]">AV</span>{" "}
                <span className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#7A7570]">
                  Designs
                </span>
              </span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-[#E8E4DF] transition-colors hover:bg-[#E8E4DF]/5"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-1">
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-[#E8E4DF] transition-colors hover:bg-[#E8E4DF]/5"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 text-[#7A7570] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    </Link>

                    {item.children && (
                      <div className="ml-4 space-y-1 border-l border-[#E8E4DF]/8 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block rounded-lg px-4 py-2 text-sm text-[#7A7570] transition-colors hover:text-[#E8E4DF] hover:bg-[#E8E4DF]/5"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </nav>

            <div className="border-t border-[#E8E4DF]/8 p-5 space-y-4">
              <div className="flex flex-col gap-2 text-sm text-[#7A7570]">
                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-[#E8E4DF]"
                >
                  <Phone className="h-4 w-4" />
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-[#E8E4DF]"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
              <Button href="/contact" size="lg" className="w-full" onClick={onClose}>
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
