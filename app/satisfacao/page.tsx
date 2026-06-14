import type { Metadata } from "next";
import { SatisfactionForm } from "@/components/satisfaction/SatisfactionForm";

export const metadata: Metadata = {
  title: "Pesquisa de satisfação",
  description:
    "Formulário interno para pacientes compartilharem feedback e depoimentos sobre o atendimento Biointegral.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function SatisfactionPage() {
  return <SatisfactionForm />;
}
