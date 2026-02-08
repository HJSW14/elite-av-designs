import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Terms of Service | ${company.name}`,
  description: `Terms of Service for ${company.name}. Review the terms governing your use of our website and home theater, automation, and AV installation services in Denver, Colorado.`,
  alternates: {
    canonical: "https://eliteavdesigns.com/terms",
  },
  openGraph: {
    title: `Terms of Service | ${company.name}`,
    description: `Terms governing use of the ${company.name} website and services.`,
    url: "https://eliteavdesigns.com/terms",
  },
  twitter: {
    card: "summary",
    title: `Terms of Service | ${company.name}`,
    description: `Terms governing use of the ${company.name} website and services.`,
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="noise-overlay relative bg-[#0C0C0C] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Legal
              </span>
              <h1 className="text-3xl font-semibold tracking-tight text-[#E8E4DF] sm:text-4xl lg:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-[13px] text-[#7A7570]">
                Last updated: February 2026
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-[#0C0C0C] pb-20 lg:pb-28">
          <Container>
            <div className="prose-custom mx-auto max-w-3xl space-y-10">
              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  By accessing or using the {company.name} website at
                  eliteavdesigns.com (&quot;the Site&quot;), you agree to be
                  bound by these Terms of Service (&quot;Terms&quot;). If you do
                  not agree to all of these Terms, you should not use the Site.
                  These Terms apply to all visitors, users, and others who
                  access the Site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  2. Description of Services
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  {company.name} provides professional home technology services
                  including, but not limited to:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#7A7570]">
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Custom home theater design and installation
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Smart home automation (Control4, Lutron, and related
                    platforms)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Motorized window coverings and shading solutions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Surveillance and security camera installation
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Distributed audio and networking solutions
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  All services are provided in the Denver, Colorado metropolitan
                  area and surrounding communities. Specific service details,
                  pricing, timelines, and deliverables are determined through
                  individual consultations and documented in separate service
                  agreements between {company.name} and the client.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  3. Consultations and Estimates
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  Initial consultations are offered free of charge. Project
                  estimates provided during consultations are non-binding and
                  subject to change based on final project scope, site
                  conditions, material availability, and other factors discovered
                  during the planning or installation process. A formal written
                  proposal will be provided before any work begins, and no work
                  will commence until both parties have agreed to the scope and
                  cost.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  4. Use of the Website
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  You agree to use the Site only for lawful purposes and in a
                  manner that does not infringe on the rights of, restrict, or
                  inhibit anyone else&apos;s use and enjoyment of the Site. You
                  may not:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#7A7570]">
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Use the Site in any way that violates applicable local,
                    state, national, or international law
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Attempt to gain unauthorized access to any part of the Site,
                    its servers, or any connected systems
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Use the Site to transmit any malicious software or harmful
                    code
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Reproduce, duplicate, copy, or re-sell any part of the Site
                    without our express written permission
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  5. Intellectual Property
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  All content on this Site, including text, images, graphics,
                  logos, design elements, photography, videos, and software, is
                  the property of {company.name} or its content suppliers and is
                  protected by United States and international copyright,
                  trademark, and other intellectual property laws. You may not
                  reproduce, distribute, modify, or create derivative works from
                  any content on this Site without our prior written consent.
                </p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  Project photos displayed on the Site may depict clients&apos;
                  private residences and are shared with their permission. These
                  images may not be used, reproduced, or distributed without
                  express written consent from {company.name}.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  6. Limitation of Liability
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  To the fullest extent permitted by Colorado law,{" "}
                  {company.name}, its owners, employees, contractors, and agents
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of or relating
                  to your use of the Site or our services.
                </p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  The Site is provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind, either express
                  or implied, including but not limited to implied warranties of
                  merchantability, fitness for a particular purpose, and
                  non-infringement. We do not guarantee that the Site will be
                  available at all times or that it will be free of errors.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  7. Warranties on Services
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  Warranties on installed products and labor are specified in
                  individual service agreements and vary by project scope and
                  equipment. Manufacturer warranties on equipment (such as
                  Control4, Lutron, Sonos, Sony, and others) are passed through
                  to the client. {company.name} warranties on installation labor
                  and workmanship are detailed in the signed service agreement
                  for each project.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  8. Third-Party Links
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  The Site may contain links to third-party websites or services
                  that are not owned or controlled by {company.name}. We have
                  no control over, and assume no responsibility for, the content,
                  privacy policies, or practices of any third-party websites.
                  Visiting any linked site is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  9. Indemnification
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  You agree to indemnify and hold harmless {company.name}, its
                  owners, employees, contractors, and agents from any claims,
                  damages, losses, liabilities, and expenses (including
                  reasonable attorney&apos;s fees) arising out of your use of
                  the Site or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  10. Governing Law
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of Colorado, without regard to its
                  conflict of law provisions. Any disputes arising under these
                  Terms shall be subject to the exclusive jurisdiction of the
                  courts located in Douglas County, Colorado.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  11. Changes to These Terms
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We reserve the right to modify or replace these Terms at any
                  time. Changes will be effective immediately upon posting to
                  the Site. Your continued use of the Site after changes are
                  posted constitutes acceptance of the revised Terms. We
                  encourage you to review these Terms periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  12. Contact Us
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="mt-4 space-y-2 text-[15px] text-[#7A7570]">
                  <p>{company.name}</p>
                  <p>{company.fullAddress}</p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="text-[#D4844C] hover:underline"
                    >
                      {company.email}
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                      className="text-[#D4844C] hover:underline"
                    >
                      {company.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
