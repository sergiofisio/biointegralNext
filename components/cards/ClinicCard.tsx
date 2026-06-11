import { MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Clinic = {
  slug: string;
  name: string;
  city: string;
  address: string;
  neighborhood: string;
  mapsUrl: string;
};

export function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <div className="p-8 rounded-3xl bg-white ring-1 ring-black/5 flex flex-col">
      <SectionLabel className="mb-2">{clinic.city}</SectionLabel>
      <h3 className="font-display text-2xl text-navy mb-3">{clinic.name}</h3>
      <p className="text-sm text-zinc-500 mb-6 flex-1">
        {clinic.address}
        <br />
        {clinic.neighborhood}
      </p>
      <a
        href={clinic.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-semibold text-navy uppercase tracking-wider"
      >
        <MapPin className="size-4" /> Ver no Google Maps
      </a>
    </div>
  );
}
