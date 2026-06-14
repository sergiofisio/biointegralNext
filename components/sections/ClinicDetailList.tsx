import { CLINICS } from "@/lib/site-data";
import { ClinicDetailCard } from "@/components/cards/ClinicDetailCard";

export function ClinicDetailList() {
  return (
    <section className="px-6 pb-24 max-w-7xl mx-auto space-y-8">
      {CLINICS.map((c) => (
        <ClinicDetailCard key={c.slug} clinic={c} />
      ))}
    </section>
  );
}
