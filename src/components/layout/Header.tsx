"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NextLevelLogo } from "@/components/ui/NextLevelLogo";
import { MobileNav } from "./MobileNav";
import { Menu, Phone } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 translate-y-0 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg shadow-black/20 py-4 transition-colors duration-300"
      >
        <Container>
          <div className="flex min-w-0 items-center justify-between gap-3">
            {/* Logo */}
            <div className="max-w-[45%] min-w-0 shrink sm:max-w-none">
              <NextLevelLogo imageClassName="h-8 sm:h-10" priority />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-7 lg:flex">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[#d8d8d8] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-4 md:flex">
              <a
                href={company.phoneHref}
                data-location="header_phone"
                className="flex items-center gap-2 text-[13px] text-[#d8d8d8] transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {company.phone}
              </a>
              <Button href={company.phoneHref} size="sm">
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg p-2.5 text-[#ededed] transition-colors hover:bg-[#ededed]/5 md:hidden"
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
