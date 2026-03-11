"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { submitContactForm } from "@/actions/contact";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone (24/7)",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: company.fullAddress,
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: company.hours,
    href: null,
  },
];

const serviceOptions = [
  "Flatbed Towing",
  "Roadside Assistance",
  "Vehicle Recovery",
  "Long Distance Transport",
  "Not Sure / Other",
];

export function ContactForm() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      window.dispatchEvent(
        new CustomEvent("nltow:lead", {
          detail: {
            type: "contact_form_submit",
            location: "contact_form",
          },
        })
      );
    } else {
      setError(result.error || "Failed to send message. Please try again.");
    }
  }

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-5 md:gap-16 lg:gap-20">
          {/* Left: Contact info */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Contact Info
            </span>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
              Reach out{" "}
              <span className="heading-display text-[var(--color-accent)]">anytime</span>
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8">
                      <Icon className="h-4 w-4 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wider text-[#888]">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-[#ededed]">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Service area */}
            <div className="mt-10 rounded-xl border border-[#ededed]/6 bg-[#141414] p-5">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ededed]">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {company.serviceAreas.slice(0, 8).map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[#ededed]/8 px-2.5 py-0.5 text-[11px] text-[#888]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <div className="rounded-2xl border border-[#ededed]/6 bg-[#141414] p-5 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                    <CheckCircle className="h-7 w-7 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#ededed]">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-[14px] text-[#888]">
                    Thanks for reaching out. We will get back to you shortly. For urgent
                    needs, call us at{" "}
                    <a href={company.phoneHref} className="text-[var(--color-accent)]">
                      {company.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                      <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                      <p className="text-sm text-red-300">{error}</p>
                    </div>
                  )}

                  {/* Honeypot - hidden from users, catches bots */}
                  <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#888]"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="min-h-[44px] w-full rounded-lg border border-[#ededed]/10 bg-[#0a0a0a] px-4 py-3 text-base text-[#ededed] placeholder:text-[#888]/50 focus:border-[var(--color-accent)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 sm:text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#888]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="min-h-[44px] w-full rounded-lg border border-[#ededed]/10 bg-[#0a0a0a] px-4 py-3 text-base text-[#ededed] placeholder:text-[#888]/50 focus:border-[var(--color-accent)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 sm:text-sm"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#888]"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        className="min-h-[44px] w-full rounded-lg border border-[#ededed]/10 bg-[#0a0a0a] px-4 py-3 text-base text-[#ededed] placeholder:text-[#888]/50 focus:border-[var(--color-accent)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 sm:text-sm"
                        placeholder="(916) 555-0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#888]"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="min-h-[44px] w-full rounded-lg border border-[#ededed]/10 bg-[#0a0a0a] px-4 py-3 text-base text-[#ededed] focus:border-[var(--color-accent)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 sm:text-sm"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#888]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="min-h-[120px] w-full resize-none rounded-lg border border-[#ededed]/10 bg-[#0a0a0a] px-4 py-3 text-base text-[#ededed] placeholder:text-[#888]/50 focus:border-[var(--color-accent)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20 sm:text-sm"
                      placeholder="Describe your situation or ask us a question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-[var(--color-accent)]/15 transition-all duration-300 hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-sm"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-[#888]/60">
                    For emergencies, call us directly at{" "}
                    <a href={company.phoneHref} className="text-[var(--color-accent)]">
                      {company.phone}
                    </a>{" "}
                    for immediate dispatch.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
