import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import { CLINICS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Unidades em São Paulo e ABC Paulista",
  description:
    "Atendimento em três unidades: Livance Brigadeiro, Livance Paulista e Livance Santo André.",
  alternates: { canonical: "/clinicas" },
  openGraph: {
    title: "Unidades — Biointegral Saúde",
    description: "Três clínicas em SP e ABC Paulista.",
    url: "/clinicas",
  },
};

export default function ClinicsPage() {
  return (
    <div className="bg-canvas">
      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-4 block">
          Onde estamos
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-navy leading-[0.95] text-balance mb-6">
          Três unidades, um mesmo cuidado.
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          Escolha a unidade mais conveniente para você em São Paulo capital ou
          no ABC Paulista.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto space-y-8">
        {CLINICS.map((c) => (
          <div
            key={c.slug}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden"
          >
            <div className="aspect-video md:aspect-auto md:min-h-[320px]">
              <iframe
                src={c.embed}
                title={`Mapa ${c.name}`}
                loading="lazy"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                {c.city}
              </span>
              <h2 className="font-display text-3xl text-navy mb-4">
                {c.name}
              </h2>
              <p className="text-zinc-600 mb-6 flex items-start gap-2">
                <MapPin className="size-4 text-gold mt-1 shrink-0" />
                <span>
                  {c.address}
                  <br />
                  {c.neighborhood}
                </span>
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-soft transition-colors"
                >
                  Mostrar no Google Maps <ArrowRight className="size-4" />
                </a>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium ring-1 ring-zinc-950/10 text-navy"
                >
                  Agendar aqui
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
