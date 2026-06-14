import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-20 py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gold rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
        <h2 className="font-display text-4xl md:text-6xl text-navy mb-6 text-balance leading-tight">
          Pronto para tratar a causa,{" "}
          <span className="italic">não apenas o sintoma?</span>
        </h2>
        <p className="text-navy/80 mb-10 max-w-xl mx-auto text-pretty">
          Fale com nossa recepção pelo WhatsApp e agende uma avaliação em uma
          das três unidades.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton variant="outline">
            Agendar pelo WhatsApp
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
