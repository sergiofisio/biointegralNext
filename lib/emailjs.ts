import emailjs from "@emailjs/browser";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_CONTATO_TEMPLATE_ID,
  getEmailJsConfigSnapshot,
  isEmailJsConfigured,
  isContatoEmailJsConfigured,
} from "@/lib/emailjs-config";
import { HONEYPOT_FIELD_NAME } from "@/lib/form-guard";

export { isEmailJsConfigured, isContatoEmailJsConfigured } from "@/lib/emailjs-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const USER_GENERIC_ERROR =
  "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.";

const USER_NETWORK_ERROR =
  "Sem conexão com a internet. Verifique sua rede e tente novamente.";

const USER_RATE_LIMIT_ERROR =
  "Você enviou várias mensagens seguidas. Aguarde cerca de 1 minuto e tente novamente.";

const USER_CONFIG_ERROR =
  "O envio automático está temporariamente indisponível. Por favor, fale conosco pelo WhatsApp.";

export type ContactFormField = "nome" | "email" | "telefone" | "mensagem";

export type ContactFormErrors = Partial<Record<ContactFormField, string>> & {
  form?: string;
};

export type ContactFormPayload = {
  nome: string;
  email: string;
  mensagem: string;
  telefone: string;
};

export function validateContactForm(
  payload: ContactFormPayload,
): ContactFormErrors | null {
  const trimmedNome = payload.nome.trim();
  const trimmedEmail = payload.email.trim();
  const trimmedMensagem = payload.mensagem.trim();
  const trimmedTelefone = payload.telefone.trim();

  const errors: ContactFormErrors = {};

  if (!trimmedNome) {
    errors.nome = "Informe seu nome.";
  } else if (trimmedNome.length > 120) {
    errors.nome = "O nome pode ter no máximo 120 caracteres.";
  }

  if (!trimmedEmail) {
    errors.email = "Informe seu e-mail.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Digite um e-mail válido, como nome@email.com.";
  } else if (trimmedEmail.length > 254) {
    errors.email = "O e-mail informado é longo demais.";
  }

  if (!trimmedTelefone) {
    errors.telefone = "Informe seu telefone com DDD.";
  } else if (!isValidPhoneNumber(trimmedTelefone)) {
    errors.telefone =
      "Número inválido. Verifique o país selecionado e se digitou o DDD corretamente.";
  }

  if (!trimmedMensagem) {
    errors.mensagem = "Escreva sua mensagem.";
  } else if (trimmedMensagem.length > 5000) {
    errors.mensagem = "A mensagem pode ter no máximo 5.000 caracteres.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

function getErrorText(error: unknown): string {
  if (error && typeof error === "object") {
    if ("text" in error && typeof error.text === "string") {
      return error.text.toLowerCase();
    }
  }
  if (error instanceof Error) {
    return error.message.toLowerCase();
  }
  return String(error ?? "").toLowerCase();
}

function getErrorStatus(error: unknown): number | null {
  if (error && typeof error === "object" && "status" in error) {
    const status = error.status;
    if (typeof status === "number") return status;
  }
  return null;
}

/** Log técnico no console (produção e desenvolvimento) para facilitar diagnóstico. */
export function logEmailJsFailure(context: string, error: unknown) {
  const text = getErrorText(error);
  const status = getErrorStatus(error);
  const config = getEmailJsConfigSnapshot();

  console.error(`[Biointegral/${context}] Falha no envio EmailJS`, {
    status,
    message: text || "(sem mensagem)",
    error,
    config,
    dica: [
      !config.contatoReady && context === "contato"
        ? "Config de contato incompleta (service / template / public key)."
        : null,
      !config.satisfactionReady && context === "satisfacao"
        ? "Config de satisfação incompleta (service / satisfaction template / public key)."
        : null,
      text.includes("public key") || text.includes("user id")
        ? "Public Key inválida — confira Account → General → Public Key no EmailJS e a variável NEXT_PUBLIC_EMAILJS_PUBLIC_KEY no GitHub (Variables)."
        : null,
      text.includes("template")
        ? "Template ID inválido — confira o ID na aba Settings do template no EmailJS."
        : null,
      text.includes("service")
        ? "Service ID inválido — confira Email Services no EmailJS."
        : null,
    ].filter(Boolean),
  });
}

export function mapEmailJsError(error: unknown): ContactFormErrors {
  const text = getErrorText(error);
  const status = getErrorStatus(error);

  if (text.includes("network") || text.includes("fetch") || text.includes("failed to fetch")) {
    return { form: USER_NETWORK_ERROR };
  }

  if (status === 429 || text.includes("rate limit")) {
    return { form: USER_RATE_LIMIT_ERROR };
  }

  if (
    status === 503 ||
    text.includes("missing emailjs") ||
    text.includes("public key") ||
    text.includes("user id") ||
    text.includes("template") ||
    text.includes("service") ||
    status === 403 ||
    text.includes("non-browser")
  ) {
    return { form: USER_CONFIG_ERROR };
  }

  if (status === 400 || status === 422) {
    return {
      form: "Não foi possível processar o envio. Revise os campos e tente novamente.",
    };
  }

  return { form: USER_GENERIC_ERROR };
}

export async function sendContactForm(form: HTMLFormElement) {
  if (!isContatoEmailJsConfigured()) {
    throw Object.assign(new Error("Missing EmailJS configuration"), {
      status: 503,
      text: "Missing EmailJS configuration",
    });
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

  const honeypot = form.elements.namedItem(HONEYPOT_FIELD_NAME);
  if (honeypot instanceof HTMLInputElement) {
    honeypot.disabled = true;
  }

  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTATO_TEMPLATE_ID,
      form,
      { publicKey: EMAILJS_PUBLIC_KEY },
    );
  } finally {
    if (honeypot instanceof HTMLInputElement) {
      honeypot.disabled = false;
    }
  }
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
