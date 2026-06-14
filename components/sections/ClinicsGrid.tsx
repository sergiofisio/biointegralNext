import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CLINICS } from "@/lib/site-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClinicCard } from "@/components/cards/ClinicCard";

export function ClinicsGrid() {
  return (
    <section id="clinicas" className="scroll-mt-20 py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Onde estamos"
        title="Clínicas em São Paulo e ABC Paulista."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CLINICS.map((c) => (
          <ClinicCard key={c.slug} clinic={c} />
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/clinicas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-navy font-semibold border-b border-gold pb-1 hover:gap-3 transition-all"
        >
          Ver todas as unidades <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
