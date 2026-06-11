import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Envie sua dúvida ou agende uma consulta pelo WhatsApp. Atendimento em SP e ABC.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato — Biointegral Saúde",
    description: "Fale conosco e agende sua consulta.",
    url: "/contato",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
