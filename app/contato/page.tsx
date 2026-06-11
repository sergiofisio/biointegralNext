import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Envie sua dúvida ou agende uma consulta pelo WhatsApp. Atendimento em SP e ABC.",
  path: "/contato",
  ogTitle: "Contato — Biointegral Saúde",
});

export default function ContactPage() {
  return <ContactForm />;
}
