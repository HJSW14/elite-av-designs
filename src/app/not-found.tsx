import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Browse our home theater, smart home, and AV installation services in Denver, CO.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="noise-overlay relative min-h-[70vh] bg-[#0C0C0C]">
        <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            404 Error
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#E8E4DF] sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.7] text-[#7A7570]">
            The page you are looking for does not exist or has been moved. Let
            us help you find what you need.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" size="lg">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-[13px] text-[#7A7570]">
            <Link
              href="/services"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              About
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
