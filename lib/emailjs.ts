import emailjs from "@emailjs/browser";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormPayload = {
  nome: string;
  email: string;
  mensagem: string;
  telefone: string;
};

export function validateContactForm({
  nome,
  email,
  mensagem,
  telefone,
}: ContactFormPayload): string | null {
  const trimmedNome = nome.trim();
  const trimmedEmail = email.trim();
  const trimmedMensagem = mensagem.trim();
  const trimmedTelefone = telefone.trim();

  if (!trimmedNome || !trimmedEmail || !trimmedTelefone || !trimmedMensagem) {
    return "Preencha nome, e-mail, telefone e mensagem.";
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return "Informe um e-mail válido.";
  }

  if (!isValidPhoneNumber(trimmedTelefone)) {
    return "Informe um telefone válido para o país selecionado.";
  }

  if (
    trimmedNome.length > 120 ||
    trimmedEmail.length > 254 ||
    trimmedMensagem.length > 5000
  ) {
    return "Mensagem muito longa.";
  }

  return null;
}

export async function sendContactForm(form: HTMLFormElement) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Formulário de contato não configurado.");
  }

  const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
  const replyToInput = form.elements.namedItem("reply_to") as HTMLInputElement | null;
  const telefoneInput = form.elements.namedItem("telefone") as HTMLInputElement | null;

  if (emailInput && replyToInput) {
    replyToInput.value = emailInput.value.trim();
  }

  if (telefoneInput?.value) {
    const parsed = parsePhoneNumber(telefoneInput.value.trim());
    if (parsed) {
      telefoneInput.value = parsed.formatInternational();
    }
  }

  await emailjs.sendForm(serviceId, templateId, form, { publicKey });
}

export function readContactFormPayload(form: HTMLFormElement): ContactFormPayload {
  const getValue = (name: string) => {
    const field = form.elements.namedItem(name);
    return field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement
      ? field.value
      : "";
  };

  return {
    nome: getValue("nome"),
    email: getValue("email"),
    mensagem: getValue("mensagem"),
    telefone: getValue("telefone"),
  };
}
