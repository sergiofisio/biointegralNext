import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HeroSection() {
  return (
    <section className="pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-[#7A5F2A] text-xs font-semibold tracking-wider uppercase mb-6">
            Saúde Integrativa · Desde 2008
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-navy text-balance mb-8">
            Ciência e sensibilidade para o seu{" "}
            <span className="italic text-[#9A7838]">equilíbrio vital.</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-[52ch] text-pretty mb-10 leading-relaxed">
            Com ciência e sensibilidade, buscamos o seu equilíbrio vital sob a
            coordenação do Dr. Sergio e Dra. Fresia. Unimos a precisão da
            Microfisioterapia ao reequilíbrio emocional do PSYCH-K® e Biodécodage
            para tratar a causa primária das suas dores físicas e emocionais.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppButton>Agende sua consulta</WhatsAppButton>
            <a
              href="#tecnicas"
              className="bg-transparent text-navy py-3 px-6 rounded-full text-sm font-medium ring-1 ring-zinc-950/10 hover:bg-zinc-950/5 transition-colors flex items-center gap-2"
            >
              Conheça nossas técnicas
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 animate-fade-up">
          <div className="w-full aspect-[4/5] bg-champagne outline outline-1 -outline-offset-1 outline-black/5 rounded-3xl overflow-hidden relative">
            <Image
              src={IMAGES.hero}
              alt="Dr. Sergio e Dra. Fresia, fisioterapeutas integrativos"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
