import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { StaticPicture } from "@/components/ui/StaticPicture";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HeroSection() {
  return (
    <section className="pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-[#7A5F2A] text-xs font-semibold tracking-wider uppercase mb-6">
            Saúde Integrativa · Desde 2008
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-navy text-balance mb-8">
            Fisioterapia e{" "}
            <span className="italic text-[#9A7838]">cuidado integrativo</span>{" "}
            em São Paulo e Santo André
          </h1>
          <p className="text-lg text-zinc-600 max-w-[52ch] text-pretty mb-10 leading-relaxed">
            Na Biointegral Saúde, Fresia Sá e Sérgio Bastos começam o
            atendimento ouvindo o que trouxe você até aqui, como isso afeta sua
            rotina e quais cuidados você já recebe. A partir dessa conversa,
            explicamos as abordagens disponíveis, seus limites e os próximos
            passos possíveis para o seu caso.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppButton className="text-left">
              Agendar pré-avaliação gratuita pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#tecnicas"
              className="bg-transparent text-navy py-3 px-6 rounded-full text-sm font-medium ring-1 ring-zinc-950/10 hover:bg-zinc-950/5 transition-colors flex items-center gap-2"
            >
              Conheça nossas técnicas
              <ArrowRight className="size-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-zinc-500 max-w-[52ch] text-pretty">
            Conversa online de 20 a 30 minutos, sem compromisso de iniciar o
            acompanhamento. Você conhece o profissional, conta o que trouxe
            você até nós e tira suas dúvidas.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="w-full aspect-4/5 bg-champagne outline -outline-offset-1 outline-black/5 rounded-3xl overflow-hidden relative">
            <StaticPicture
              src={IMAGES.hero.src}
              srcSet={IMAGES.hero.srcSet}
              sizes={IMAGES.hero.sizes}
              alt="Dr. Sergio e Dra. Fresia, fisioterapeutas integrativos"
              priority
              className="absolute inset-0 size-full object-cover object-[92%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
