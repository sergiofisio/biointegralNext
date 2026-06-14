import emailjs from "@emailjs/browser";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  isEmailJsConfigured,
} from "@/lib/emailjs-config";

export { isEmailJsConfigured } from "@/lib/emailjs-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  return "";
}

function getErrorStatus(error: unknown): number | null {
  if (error && typeof error === "object" && "status" in error) {
    const status = error.status;
    if (typeof status === "number") return status;
  }
  return null;
}

export function mapEmailJsError(error: unknown): ContactFormErrors {
  const text = getErrorText(error);
  const status = getErrorStatus(error);

  if (text.includes("network") || text.includes("fetch")) {
    return {
      form: "Sem conexão com a internet. Verifique sua rede e tente novamente.",
    };
  }

  if (status === 429 || text.includes("rate limit")) {
    return {
      form: "Você enviou várias mensagens seguidas. Aguarde cerca de 1 minuto e tente novamente.",
    };
  }

  if (text.includes("template")) {
    return {
      form: "O template de e-mail não foi encontrado. Confira o Template ID no painel EmailJS (aba Settings) e atualize o .env.",
    };
  }

  if (text.includes("service")) {
    return {
      form: "O serviço de e-mail não foi encontrado. Confira o Service ID no painel EmailJS e atualize o .env.",
    };
  }

  if (text.includes("user id") || text.includes("public key")) {
    return {
      form: "A chave pública do EmailJS está incorreta. Confira a Public Key no painel EmailJS.",
    };
  }

  if (status === 403 || text.includes("non-browser")) {
    return {
      form: "O EmailJS bloqueou o envio. Ative 'Allow EmailJS API for non-browser applications' em Account → Security no painel EmailJS.",
    };
  }

  if (status === 400 || status === 422) {
    return {
      form: "Não foi possível processar o envio. Revise os campos e tente novamente.",
    };
  }

  if (status === 503 || text.includes("missing emailjs")) {
    return {
      form: "Variáveis do EmailJS não carregadas. Reinicie o servidor com yarn dev após configurar o .env.",
    };
  }

  return {
    form: "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.",
  };
}

export async function sendContactForm(form: HTMLFormElement) {
  if (!isEmailJsConfigured()) {
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

  await emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    form,
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
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
