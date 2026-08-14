import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "API pública para agentes",
  description:
    "Catálogo e documentação das URLs públicas da Biointegral Saúde para descoberta por agentes de IA.",
  path: "/docs/api",
  ogTitle: "API pública — Biointegral Saúde",
});

const LINKS = [
  {
    href: "/.well-known/api-catalog",
    label: "API Catalog (RFC 9727)",
  },
  { href: "/openapi.json", label: "OpenAPI" },
  { href: "/status.json", label: "Status" },
  { href: "/llms.txt", label: "llms.txt" },
  { href: "/auth.md", label: "auth.md" },
];

export default function ApiDocsPage() {
  return (
    <div className="bg-canvas text-zinc-900 pb-24">
      <PageHeader
        label="Agentes"
        title="API pública"
        description="O site é estático. Agentes devem usar o catálogo, o resumo factual e a negociação Markdown."
        showBackLink
      />
      <section className="px-6 max-w-5xl mx-auto space-y-4">
        <ul className="list-disc pl-6 text-zinc-700 space-y-2">
          {LINKS.map((item) => (
            <li key={item.href}>
              <a className="underline underline-offset-2" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
