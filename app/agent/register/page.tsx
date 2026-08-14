import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Registro de agentes",
  description:
    "Como registrar um agente de IA para uso das informações públicas da Biointegral Saúde.",
  path: "/agent/register",
  ogTitle: "Registro de agentes — Biointegral Saúde",
});

export default function AgentRegisterPage() {
  return (
    <div className="bg-canvas text-zinc-900 pb-24">
      <PageHeader
        label="Agentes"
        title="Registro de agentes"
        description="Envie um e-mail para revisão humana. Não há emissão automática de tokens."
        showBackLink
      />
      <section className="px-6 max-w-5xl mx-auto space-y-4 text-zinc-700">
        <p>
          Destinatário:{" "}
          <a className="underline underline-offset-2" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </p>
        <p>
          Assunto sugerido: <strong>Agent registration</strong>. Inclua nome do
          agente, organização, e-mail do operador e finalidade.
        </p>
        <p>
          Instruções completas:{" "}
          <a className="underline underline-offset-2" href="/auth.md">
            /auth.md
          </a>
        </p>
      </section>
    </div>
  );
}
