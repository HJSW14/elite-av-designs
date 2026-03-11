import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function ReviewsHero() {
  return (
    <section className="noise-overlay relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
        <div className="h-[400px] w-[600px] rounded-full bg-[var(--color-accent)]/[0.03] blur-[100px]" />
      </div>
      <Container className="relative z-10 text-center">
        <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
          Customer Reviews
        </span>
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#ededed] sm:text-5xl lg:text-6xl">
          What our customers say
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-[#888]">
          Real reviews from Sacramento-area drivers who called us when they
          needed help. We take pride in every single one.
        </p>

        {/* Rating summary - compact */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-[#ededed]/8 bg-[#141414] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#ededed]">{company.rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <span className="text-[#ededed]/40">·</span>
          <span className="text-sm text-[#888]">
            {company.reviewCount > 0 ? `${company.reviewCount}+ reviews on Google` : "Reviews on Google"}
          </span>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 copper-divider" />
    </section>
  );
}
