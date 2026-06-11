import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quem somos — Dr. Sergio e Dra. Fresia",
  description:
    "Conheça Dr. Sergio Augusto e Dra. Fresia Jorge, fisioterapeutas pioneiros no Brasil em Microfisioterapia, PSYCH-K® e Biodécodage.",
  alternates: { canonical: "/quem-somos" },
  openGraph: {
    title: "Quem somos — Biointegral Saúde",
    description:
      "Trajetória dos fisioterapeutas Dr. Sergio e Dra. Fresia.",
    url: "/quem-somos",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      <section className="px-6 pt-20 pb-12 max-w-5xl mx-auto">
        <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-4 block">
          Quem somos
        </span>
        <h1 className="font-display text-5xl md:text-7xl text-navy leading-[0.95] text-balance mb-8">
          Dr. Sergio e Dra. Fresia — uma vida dedicada à{" "}
          <span className="italic text-gold">causa</span>.
        </h1>
        <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Fisioterapeutas formados pelas Faculdades Integradas Pitágoras de
          Montes Claros/MG, aperfeiçoaram-se em Terapia Manual e construíram
          uma das trajetórias mais sólidas do Brasil em terapias integrativas.
        </p>
      </section>

      <section className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden">
          <div className="relative w-full aspect-square">
            <Image
              src="/images/dra-fresia.jpg"
              alt="Dra. Fresia Jorge de Sá Bastos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8">
            <h2 className="font-display text-3xl text-navy mb-1">
              Dra. Fresia Jorge de Sá Bastos
            </h2>
            <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-4">
              CREFITO-3 · 118.225-F
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Especialista em Microfisioterapia, Biodécodage e PSYCH-K®. Atua
              há mais de uma década integrando ciência fisioterapêutica e
              abordagens emocionais para tratar a raiz das queixas.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden md:mt-16">
          <div className="relative w-full aspect-square">
            <Image
              src="/images/dr-sergio.jpg"
              alt="Dr. Sergio Augusto Moreira Bastos Jr."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8">
            <h2 className="font-display text-3xl text-navy mb-1">
              Dr. Sergio A. M. Bastos Jr.
            </h2>
            <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-4">
              CREFITO-3 · 111.132-F
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Pioneiro no Brasil de diversas técnicas integrativas. Formado pelos
              próprios criadores das técnicas que pratica, é referência em
              Microfisioterapia e BIOdécodage no país.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-champagne/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-8">
            Formação internacional
          </h2>
          <ul className="space-y-4 text-zinc-600">
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">Microfisioterapia</strong> —
              formação direta com Daniel Grosjean e Patrice Benini, criadores da
              técnica, na França.
            </li>
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">Décodage Biologique</strong> —
              especialização com Emmanuel Corbeel, na Bélgica.
            </li>
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">BIOdécodage Prática</strong> —
              estudos continuados com o criador do método, Christian Flèche.
            </li>
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">PSYCH-K®</strong> — facilitadores
              certificados internacionalmente.
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-navy-soft transition-colors"
        >
          Agendar uma consulta <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
