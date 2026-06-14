"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useTestimonialCarousel } from "@/hooks/use-testimonial-carousel";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const { active, goTo, next, prev, pause, resume } = useTestimonialCarousel(
    TESTIMONIALS.length,
  );
  const current = TESTIMONIALS[active];

  return (
    <section
      className="bg-navy py-24 px-6 relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-roledescription="carousel"
      aria-label="Depoimentos de pacientes"
    >
      <button
        type="button"
        onClick={prev}
        aria-label="Depoimento anterior"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 size-11 rounded-full bg-white/10 text-champagne hover:bg-white/20 transition-colors flex items-center justify-center ring-1 ring-white/10"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Próximo depoimento"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 size-11 rounded-full bg-white/10 text-champagne hover:bg-white/20 transition-colors flex items-center justify-center ring-1 ring-white/10"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-10 md:px-14">
        <div className="lg:col-span-7">
          <SectionLabel className="mb-6">Depoimento</SectionLabel>
          <blockquote
            key={active}
            className="font-display text-3xl md:text-4xl text-champagne leading-tight text-balance animate-fade-up"
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>
        </div>

        <div className="lg:col-span-5 space-y-6" role="tablist" aria-label="Selecionar depoimento">
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => goTo(i)}
                className={cn(
                  "w-full flex items-center gap-4 text-left transition-opacity duration-300",
                  i < TESTIMONIALS.length - 1 && "border-b border-white/10 pb-6",
                  isActive ? "opacity-100" : "opacity-40 hover:opacity-70",
                )}
              >
                <div
                  className={cn(
                    "size-12 rounded-full grid place-items-center font-display text-lg shrink-0 transition-colors",
                    isActive
                      ? "bg-gold/20 ring-1 ring-gold/30 text-gold"
                      : "bg-white/5 ring-1 ring-white/10 text-champagne/60",
                  )}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className={cn(
                      "font-medium",
                      isActive ? "text-white" : "text-white/80",
                    )}
                  >
                    {t.name}
                  </div>
                  <div className="text-gold/70 text-xs">{t.location}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
