import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `Privacy Policy for ${company.name}. Learn how we collect, use, and protect your personal information when you use our website or contact us about home theater and smart home services.`,
  alternates: {
    canonical: "https://eliteavdesigns.com/privacy",
  },
  openGraph: {
    title: `Privacy Policy | ${company.name}`,
    description: `How ${company.name} collects, uses, and protects your personal information.`,
    url: "https://eliteavdesigns.com/privacy",
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
        <section className="noise-overlay relative bg-[#0C0C0C] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Legal
              </span>
              <h1 className="text-3xl font-semibold tracking-tight text-[#E8E4DF] sm:text-4xl lg:text-5xl">
                Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  {company.name} (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) respects your privacy and is committed to
                  protecting the personal information you share with us. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website at
                  eliteavdesigns.com or contact us regarding our home theater,
                  smart home automation, motorized window covering, and
                  surveillance installation services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  2. Information We Collect
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We may collect personal information that you voluntarily
                  provide when you:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#7A7570]">
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Fill out our contact form (name, email address, phone number,
                    and project details)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Call us or send us an email directly
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Request a consultation or quote
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Interact with us on social media
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We may also automatically collect certain information when you
                  visit our website, including your IP address, browser type,
                  operating system, referring URLs, pages viewed, and the dates
                  and times of your visits. This information is collected through
                  cookies and similar tracking technologies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  3. How We Use Your Information
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We use the information we collect to:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#7A7570]">
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Respond to your inquiries and provide requested services
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Schedule consultations and prepare project estimates
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Communicate with you about your project or our services
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Improve our website and user experience
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Analyze website traffic and usage patterns
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Comply with legal obligations
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  Our website may use cookies, web beacons, and similar
                  technologies to enhance your browsing experience. Cookies are
                  small text files placed on your device that help us understand
                  how you use our site. You can control cookie settings through
                  your browser preferences. Disabling cookies may affect certain
                  features of our website.
                </p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We may use third-party analytics services (such as Google
                  Analytics) that use cookies to collect anonymized data about
                  website usage. These services help us understand visitor
                  behavior and improve our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  5. Third-Party Services
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We may share your information with trusted third-party service
                  providers who assist us in operating our website, conducting
                  our business, or serving you, provided they agree to keep your
                  information confidential. These may include:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#7A7570]">
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Web hosting providers (Vercel)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Analytics services (Google Analytics)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    Email service providers for communication
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  6. Data Security
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
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
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  7. Your Rights (Colorado Privacy Act)
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  Under the Colorado Privacy Act (CPA), Colorado residents have
                  certain rights regarding their personal data, including:
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.85] text-[#7A7570]">
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    The right to know whether we are processing your personal
                    data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    The right to access your personal data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    The right to correct inaccuracies in your personal data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    The right to delete your personal data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#D4844C]">&bull;</span>
                    The right to opt out of targeted advertising or the sale of
                    personal data
                  </li>
                </ul>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[#D4844C] hover:underline"
                  >
                    {company.email}
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                    className="text-[#D4844C] hover:underline"
                  >
                    {company.phone}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  8. Children&apos;s Privacy
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  Our website and services are not directed to individuals under
                  the age of 13. We do not knowingly collect personal information
                  from children. If we become aware that we have collected
                  personal data from a child under 13, we will take steps to
                  delete that information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  9. Changes to This Policy
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or applicable laws. Any changes will
                  be posted on this page with an updated effective date. We
                  encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#E8E4DF]">
                  10. Contact Us
                </h2>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us:
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
