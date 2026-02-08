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
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/[^\d+]/g, "")}`,
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
  "Home Theater",
  "Home Automation",
  "Window Coverings",
  "Surveillance",
  "Other / Not Sure",
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
    } else {
      setError(result.error || "Failed to send message. Please try again.");
    }
  }

  return (
    <section ref={ref} className="bg-[#0C0C0C] py-16 lg:py-24">
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
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
              Contact Info
            </span>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
              Reach out{" "}
              <span className="heading-display text-[#D4844C]">anytime</span>
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4844C]/20 bg-[#D4844C]/8">
                      <Icon className="h-4.5 w-4.5 text-[#D4844C]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wider text-[#7A7570]">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-[#E8E4DF]">
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
            <div className="mt-10 rounded-xl border border-[#E8E4DF]/6 bg-[#111110] p-5">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8E4DF]">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {company.serviceAreas.slice(0, 8).map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[#E8E4DF]/8 px-2.5 py-0.5 text-[11px] text-[#7A7570]"
                  >
                    {area}
                  </span>
                ))}
                <span className="rounded-full border border-[#D4844C]/20 px-2.5 py-0.5 text-[11px] text-[#D4844C]">
                  + more
                </span>
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
            <div className="rounded-2xl border border-[#E8E4DF]/6 bg-[#111110] p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4844C]/10">
                    <CheckCircle className="h-7 w-7 text-[#D4844C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#E8E4DF]">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-[14px] text-[#7A7570]">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
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

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#7A7570]"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-[#E8E4DF]/10 bg-[#0C0C0C] px-4 py-3 text-sm text-[#E8E4DF] placeholder:text-[#7A7570]/50 focus:border-[#D4844C]/40 focus:outline-none focus:ring-1 focus:ring-[#D4844C]/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#7A7570]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-[#E8E4DF]/10 bg-[#0C0C0C] px-4 py-3 text-sm text-[#E8E4DF] placeholder:text-[#7A7570]/50 focus:border-[#D4844C]/40 focus:outline-none focus:ring-1 focus:ring-[#D4844C]/20"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#7A7570]"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-[#E8E4DF]/10 bg-[#0C0C0C] px-4 py-3 text-sm text-[#E8E4DF] placeholder:text-[#7A7570]/50 focus:border-[#D4844C]/40 focus:outline-none focus:ring-1 focus:ring-[#D4844C]/20"
                        placeholder="(303) 555-0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#7A7570]"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-[#E8E4DF]/10 bg-[#0C0C0C] px-4 py-3 text-sm text-[#E8E4DF] focus:border-[#D4844C]/40 focus:outline-none focus:ring-1 focus:ring-[#D4844C]/20"
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
                      className="mb-1.5 block text-[12px] font-medium uppercase tracking-wider text-[#7A7570]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-[#E8E4DF]/10 bg-[#0C0C0C] px-4 py-3 text-sm text-[#E8E4DF] placeholder:text-[#7A7570]/50 focus:border-[#D4844C]/40 focus:outline-none focus:ring-1 focus:ring-[#D4844C]/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4844C] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#D4844C]/15 transition-all duration-300 hover:bg-[#C07040] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-[#7A7570]/60">
                    Free consultations for all new projects. We typically
                    respond within 24 hours.
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
