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
