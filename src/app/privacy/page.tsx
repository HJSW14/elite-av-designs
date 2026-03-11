import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `Privacy Policy for ${company.name}. Learn how we collect, use, and protect your personal information when you use our website or contact us about towing and roadside assistance services.`,
  alternates: {
    canonical: "https://nextleveltow.com/privacy",
  },
  openGraph: {
    title: `Privacy Policy | ${company.name}`,
    description: `How ${company.name} collects, uses, and protects your personal information.`,
    url: "https://nextleveltow.com/privacy",
  },
  twitter: {
    card: "summary",
    title: `Privacy Policy | ${company.name}`,
    description: `How ${company.name} collects, uses, and protects your personal information.`,
  },
};

export default function PrivacyPage() {
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
                Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  {company.name} (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) respects your privacy and is committed to
                  protecting the personal information you share with us. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website at
                  nextleveltow.com or contact us regarding our towing and
                  roadside assistance services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  2. Information We Collect
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We may collect personal information that you voluntarily
                  provide when you:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#888]">
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Fill out our contact form (name, email address, phone number,
                    and message)
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Call us or send us an email directly
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Request a tow or roadside assistance quote
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Interact with us on social media
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We may also automatically collect certain information when you
                  visit our website, including your IP address, browser type,
                  operating system, referring URLs, pages viewed, and the dates
                  and times of your visits. This information is collected through
                  cookies and similar tracking technologies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  3. How We Use Your Information
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We use the information we collect to:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#888]">
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Respond to your inquiries and provide requested services
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Respond to service requests and provide estimates
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Communicate with you about your tow or our services
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Improve our website and user experience
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Analyze website traffic and usage patterns
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Comply with legal obligations
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  Our website may use cookies, web beacons, and similar
                  technologies to enhance your browsing experience. Cookies are
                  small text files placed on your device that help us understand
                  how you use our site. You can control cookie settings through
                  your browser preferences. Disabling cookies may affect certain
                  features of our website.
                </p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We may use third-party analytics and advertising tools,
                  including Google tag integrations and Vercel Analytics, to
                  measure website usage, phone clicks, form submissions, and
                  other lead-related interactions. These services help us
                  understand visitor behavior and improve our website and
                  marketing performance.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  5. Third-Party Services
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We may share your information with trusted third-party service
                  providers who assist us in operating our website, conducting
                  our business, or serving you, provided they agree to keep your
                  information confidential. These may include:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#888]">
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Web hosting providers (Vercel)
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Analytics and advertising platforms (Google tag, Google
                    Analytics, Vercel Analytics)
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    Email service providers for communication (Resend)
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  6. Data Security
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access, alteration,
                  disclosure, or destruction. Our website uses HTTPS encryption
                  to protect data transmitted between your browser and our
                  servers. However, no method of electronic transmission or
                  storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  7. Your Rights (California Consumer Privacy Act)
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  Under the California Consumer Privacy Act (CCPA), California
                  residents have certain rights regarding their personal data, including:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#888]">
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    The right to know whether we are processing your personal
                    data
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    The right to access your personal data
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    The right to correct inaccuracies in your personal data
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    The right to delete your personal data
                  </li>
                  <li className="flex min-w-0 gap-2">
                    <span className="shrink-0 text-[var(--color-accent)]">&bull;</span>
                    The right to opt out of targeted advertising or the sale of
                    personal data
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    {company.email}
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    {company.phone}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  8. Children&apos;s Privacy
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  Our website and services are not directed to individuals under
                  the age of 13. We do not knowingly collect personal information
                  from children. If we become aware that we have collected
                  personal data from a child under 13, we will take steps to
                  delete that information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  9. Changes to This Policy
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or applicable laws. Any changes will
                  be posted on this page with an updated effective date. We
                  encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">
                  10. Contact Us
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#888]">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us:
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
