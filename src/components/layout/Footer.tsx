import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E4DF]/6 bg-[#0C0C0C] pt-16 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-[#E8E4DF]">
                Elite<span className="text-[#D4844C]">AV</span>
              </span>
              <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#7A7570]">
                Designs
              </span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-[#7A7570]">
              Denver&apos;s premier home theater and automation company.
              Transforming homes with technology and thoughtful design.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2.5 text-[13px] text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
              >
                <Phone className="h-3.5 w-3.5 text-[#D4844C]" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 text-[13px] text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
              >
                <Mail className="h-3.5 w-3.5 text-[#D4844C]" />
                {company.email}
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-[#7A7570]">
                <MapPin className="h-3.5 w-3.5 text-[#D4844C]" />
                {company.fullAddress}
              </div>
            </div>

            {/* Google Review Button */}
            <div className="mt-6">
              <a
                href="https://share.google/Ah5mfYwDXqSrXXPqN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#D4844C] px-4 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-[#C47741] hover:shadow-lg hover:shadow-[#D4844C]/20"
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
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8E4DF]">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8E4DF]">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8E4DF]">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {company.serviceAreas.slice(0, 6).map((area) => {
                const slug = area.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={area}>
                    <Link
                      href={`/areas/${slug}`}
                      className="text-[13px] text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
                    >
                      {area}, CO
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/areas"
                  className="text-[13px] text-[#D4844C] transition-colors hover:text-[#E8E4DF]"
                >
                  View all areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#E8E4DF]/6 pt-8 sm:flex-row">
          <p className="text-[11px] text-[#7A7570]" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-[#7A7570] transition-colors hover:text-[#E8E4DF]"
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
