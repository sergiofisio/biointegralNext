import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ClinicDetailList } from "@/components/sections/ClinicDetailList";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Unidades em São Paulo e ABC Paulista",
  description:
    "Microfisioterapia, PSYCH-K® e Biodécodage nas unidades Livance Brigadeiro, Livance Paulista (São Paulo) e Livance Santo André (ABC).",
  path: "/clinicas",
  ogTitle: "Unidades — Biointegral Saúde",
  keywords: [
    "clínica microfisioterapia São Paulo",
    "fisioterapia Av Paulista",
    "fisioterapia Santo André",
  ],
});

const breadcrumbItems = [
  { name: "Início", path: "/" },
  { name: "Unidades", path: "/clinicas" },
];

export default function ClinicsPage() {
  return (
    <div className="bg-canvas">
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />
      <div className="px-6 pt-16 max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <PageHeader
        label="Onde estamos"
        title="Três unidades, um mesmo cuidado."
        description="Escolha a unidade mais conveniente para você em São Paulo capital ou no ABC Paulista."
        className="pt-4"
        showBackLink
      />
      <ClinicDetailList />
    </div>
  );
}
