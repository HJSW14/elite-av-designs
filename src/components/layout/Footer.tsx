import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NextLevelLogo } from "@/components/ui/NextLevelLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#ededed]/6 bg-[#0a0a0a] pt-16 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Column */}
          <div className="min-w-0 sm:col-span-2 md:col-span-1">
            <NextLevelLogo imageClassName="h-10" />

            <p className="mt-4 text-[13px] leading-relaxed text-[#888]">
              Sacramento&apos;s 24/7 towing and roadside assistance service.
              Fast response, upfront pricing, and flatbed trucks for every
              situation.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={company.phoneHref}
                data-location="footer_phone"
                className="flex items-center gap-2.5 text-[13px] text-[#888] transition-colors hover:text-[#ededed]"
              >
                <Phone className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 text-[13px] text-[#888] transition-colors hover:text-[#ededed]"
              >
                <Mail className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {company.email}
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-[#888]">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]" />
                {company.fullAddress}
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-[#888]">
                <Clock className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]" />
                {company.hours}
              </div>
            </div>

            {/* Google Review Button */}
            <div className="mt-6">
              <a
                href={company.socials.google}
                data-track="google-review"
                data-location="footer_review_cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Leave us a review
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ededed]">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#888] transition-colors hover:text-[#ededed]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ededed]">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#888] transition-colors hover:text-[#ededed]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ededed]">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {company.serviceAreas.slice(0, 6).map((area) => {
                const slug = area.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={area}>
                    <Link
                      href={`/areas/${slug}`}
                      className="text-[13px] text-[#888] transition-colors hover:text-[#ededed]"
                    >
                      {area}, CA
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/areas"
                  className="text-[13px] text-[var(--color-accent)] transition-colors hover:text-[#ededed]"
                >
                  View all areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#ededed]/6 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-[12px] text-[#888] sm:text-[11px]">
            &copy; {company.copyrightYear} {company.legalName}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-[#888] transition-colors hover:text-[#ededed]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
