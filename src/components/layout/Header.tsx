"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { Menu, Phone } from "lucide-react";

export function Header() {
  const { scrolled, hidden } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0C0C0C]/90 backdrop-blur-xl shadow-lg shadow-black/10 py-3"
            : "bg-transparent py-5",
          hidden && "-translate-y-full"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-[#E8E4DF] transition-colors group-hover:text-[#D4844C]">
                Elite<span className="text-[#D4844C]">AV</span>
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#7A7570] sm:block">
                Designs
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-4 md:flex">
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-[13px] text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>
              <Button href="/contact" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center rounded-lg p-2 text-[#E8E4DF] transition-colors hover:bg-[#E8E4DF]/5 md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
