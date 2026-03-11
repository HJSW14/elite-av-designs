import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Terms of Service | ${company.name}`,
  description: `Terms of Service for ${company.name}. Review the terms governing your use of our website and towing and roadside assistance services in Sacramento, California.`,
  alternates: {
    canonical: "https://nextleveltow.com/terms",
  },
  openGraph: {
    title: `Terms of Service | ${company.name}`,
    description: `Terms governing use of the ${company.name} website and services.`,
    url: "https://nextleveltow.com/terms",
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
        <section className="noise-overlay relative bg-[#0a0a0a] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Legal
              </span>
              <h1 className="text-3xl font-semibold tracking-tight text-[#ededed] sm:text-4xl lg:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-[13px] text-[#888]">
                Last updated: February 2026
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-[#0a0a0a] pb-20 lg:pb-28">
          <Container>
            <div className="prose-custom mx-auto max-w-3xl space-y-10 break-words">
              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  By accessing or using the {company.name} website at
                  nextleveltow.com (&quot;the Website&quot;), you agree to be
                  bound by these Terms of Service (&quot;Terms&quot;). If you do
                  not agree to all of these Terms, you should not use the Website.
                  These Terms apply to all visitors, users, and others who
                  access the Website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  2. Description of Services
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  {company.name} provides professional towing and roadside
                  assistance services including, but not limited to:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#888]">
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Flatbed towing and vehicle transport
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Roadside assistance (jump-starts, tire changes, fuel delivery, lockouts)
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Vehicle recovery from ditches, mud, and accident scenes
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Long-distance vehicle transport
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  All services are provided in the Sacramento, California
                  metropolitan area and surrounding communities. Specific
                  service details, pricing, timelines, and deliverables are
                  determined when you call or at the time of service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  3. Pricing and Estimates
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We quote prices before we hook up. Estimates provided by phone
                  or at the scene are based on the information you provide and
                  may be subject to change based on the actual situation, vehicle
                  type, distance, or other factors. Final pricing is confirmed
                  before we begin the tow or service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  4. Use of the Website
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  You agree to use the Website only for lawful purposes and in a
                  manner that does not infringe on the rights of, restrict, or
                  inhibit anyone else&apos;s use and enjoyment of the Website. You
                  may not:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#888]">
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Use the Website in any way that violates applicable local,
                    state, national, or international law
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Attempt to gain unauthorized access to any part of the Website,
                    its servers, or any connected systems
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Use the Website to transmit any malicious software or harmful
                    code
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Reproduce, duplicate, copy, or re-sell any part of the Website
                    without our express written permission
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  5. Intellectual Property
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  All content on this Site, including text, images, graphics,
                  logos, design elements, photography, videos, and software, is
                  the property of {company.name} or its content suppliers and is
                  protected by United States and international copyright,
                  trademark, and other intellectual property laws. You may not
                  reproduce, distribute, modify, or create derivative works from
                  any content on this Site without our prior written consent.
                </p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  Photos and images displayed on the Website are used for
                  illustrative purposes. These images may not be used,
                  reproduced, or distributed without express written consent
                  from {company.name}.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  6. Limitation of Liability
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  To the fullest extent permitted by California law,{" "}
                  {company.name}, its owners, employees, contractors, and agents
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of or relating
                  to your use of the Website or our services.
                </p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  The Site is provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind, either express
                  or implied, including but not limited to implied warranties of
                  merchantability, fitness for a particular purpose, and
                  non-infringement. We do not guarantee that the Website will be
                  available at all times or that it will be free of errors.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  7. Warranties on Services
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  {company.name} operates with care and proper equipment for all
                  towing and roadside services. We are fully licensed and
                  insured. Specific warranties or guarantees, when offered, are
                  communicated at the time of service. Vehicle damage claims
                  should be reported immediately upon delivery.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  8. Third-Party Links
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  The Site may contain links to third-party websites or services
                  that are not owned or controlled by {company.name}. We have
                  no control over, and assume no responsibility for, the content,
                  privacy policies, or practices of any third-party websites.
                  Visiting any linked site is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  9. Indemnification
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  You agree to indemnify and hold harmless {company.name}, its
                  owners, employees, contractors, and agents from any claims,
                  damages, losses, liabilities, and expenses (including
                  reasonable attorney&apos;s fees) arising out of your use of
                  the Website or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  10. Governing Law
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of California, without regard to
                  its conflict of law provisions. Any disputes arising under
                  these Terms shall be subject to the exclusive jurisdiction of
                  the courts located in Sacramento County, California.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  11. Changes to These Terms
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We reserve the right to modify or replace these Terms at any
                  time. Changes will be effective immediately upon posting to
                  the Website. Your continued use of the Website after changes are
                  posted constitutes acceptance of the revised Terms. We
                  encourage you to review these Terms periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  12. Contact Us
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="mt-4 space-y-2 text-[15px] text-[#888]">
                  <p>{company.name}</p>
                  <p>{company.fullAddress}</p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      {company.email}
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                      className="text-[var(--color-accent)] hover:underline"
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
