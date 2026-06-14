import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ClinicDetailList } from "@/components/sections/ClinicDetailList";

export const metadata: Metadata = pageMetadata({
  title: "Unidades em São Paulo e ABC Paulista",
  description:
    "Atendimento em três unidades: Livance Brigadeiro, Livance Paulista e Livance Santo André.",
  path: "/clinicas",
  ogTitle: "Unidades — Biointegral Saúde",
});

export default function ClinicsPage() {
  return (
    <div className="bg-canvas">
      <PageHeader
        label="Onde estamos"
        title="Três unidades, um mesmo cuidado."
        description="Escolha a unidade mais conveniente para você em São Paulo capital ou no ABC Paulista."
        showBackLink
      />
      <ClinicDetailList />
    </div>
  );
}
