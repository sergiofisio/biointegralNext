import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutPreview() {
  return (
    <section id="sobre" className="scroll-mt-20 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 relative">
            <Image
              src={IMAGES.draFresia}
              alt="Dra. Fresia"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 mt-12 relative">
            <Image
              src={IMAGES.drSergio}
              alt="Dr. Sergio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
        <div>
          <SectionLabel className="mb-3">Quem somos</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance leading-tight mb-6">
            Dr. Sergio e Dra. Fresia — pioneiros das terapias integrativas no
            Brasil.
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Fisioterapeutas formados pelas Faculdades Integradas Pitágoras de
            Montes Claros/MG, aperfeiçoaram-se em Terapia Manual e se
            especializaram em Microfisioterapia diretamente com os criadores da
            técnica, Daniel Grosjean e Patrice Benini, na França.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-8">
            Especializaram-se também em Décodage Biologique com Emmanuel
            Corbeel, na Bélgica, e dedicam-se atualmente ao estudo da
            BIOdécodage Prática com seu criador Christian Flèche.
          </p>
          <Link
            href="/quem-somos"
            className="inline-flex items-center gap-2 text-navy font-semibold border-b border-gold pb-1 hover:gap-3 transition-all"
          >
            Conheça nossa trajetória <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
