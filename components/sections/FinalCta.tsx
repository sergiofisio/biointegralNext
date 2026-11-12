import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-20 py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gold rounded-4xl p-12 md:p-20 text-center relative overflow-hidden">
        <h2 className="font-display text-4xl md:text-6xl text-navy mb-6 text-balance leading-tight">
          Quer conversar sobre o{" "}
          <span className="italic">seu caso?</span>
        </h2>
        <p className="text-navy/80 mb-10 max-w-xl mx-auto text-pretty">
          Pré-avaliação online gratuita de 20 a 30 minutos, sem compromisso de
          iniciar o acompanhamento. Você conhece o profissional, conta o que
          trouxe você até nós e tira suas dúvidas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton variant="outline" className="text-left">
            Agendar pré-avaliação gratuita pelo WhatsApp
          </WhatsAppButton>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-navy ring-1 ring-navy/20 hover:bg-navy/5 transition-colors"
          >
            Enviar mensagem <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
