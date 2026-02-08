import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center bg-[#0C0C0C] pt-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
              Coming Soon
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#E8E4DF] sm:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-base text-[#7A7570]">{description}</p>
            )}
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/" variant="secondary">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <Button href="/contact">Get a Quote</Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
