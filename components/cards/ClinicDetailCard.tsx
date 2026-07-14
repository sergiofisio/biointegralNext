import { MapPin, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/site-data";

type Clinic = {
  slug: string;
  name: string;
  city: string;
  address: string;
  neighborhood: string;
  mapsUrl: string;
  embed: string;
};

export function ClinicDetailCard({ clinic }: { clinic: Clinic }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden">
      <div className="aspect-video md:aspect-auto md:min-h-[320px]">
        <iframe
          src={clinic.embed}
          title={`Mapa ${clinic.name}`}
          loading="lazy"
          className="w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          allowFullScreen
        />
      </div>
      <div className="p-10 flex flex-col justify-center">
        <SectionLabel className="mb-2">{clinic.city}</SectionLabel>
        <h2 className="font-display text-3xl text-navy mb-4">{clinic.name}</h2>
        <p className="text-zinc-600 mb-6 flex items-start gap-2">
          <MapPin className="size-4 text-gold mt-1 shrink-0" />
          <span>
            {clinic.address}
            <br />
            {clinic.neighborhood}
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={clinic.mapsUrl}
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
  );
}
