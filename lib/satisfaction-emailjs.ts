import emailjs from "@emailjs/browser";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SATISFACTION_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
  isSatisfactionEmailJsConfigured,
} from "@/lib/emailjs-config";
import { mapEmailJsError } from "@/lib/emailjs";
import { HONEYPOT_FIELD_NAME } from "@/lib/form-guard";

export { isSatisfactionEmailJsConfigured, mapEmailJsError };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RATING_LABELS: Record<number, string> = {
  1: "Muito insatisfeito",
  2: "Insatisfeito",
  3: "Neutro",
  4: "Satisfeito",
  5: "Muito satisfeito",
};

export const EVOLUCAO_SINTOMAS_LABELS: Record<string, string> = {
  significativa: "Melhora significativa",
  moderada: "Melhora moderada",
  pouca: "Pouca ou nenhuma melhora ainda",
  cedo: "Ainda é cedo para avaliar",
};

export const RECOMENDARIA_LABELS: Record<string, string> = {
  sim: "Sim, recomendaria",
  talvez: "Talvez",
  nao: "Não recomendaria",
};

export type SatisfactionFormField =
  | "nome"
  | "email"
  | "telefone"
  | "unidade"
  | "profissional"
  | "nota"
  | "depoimento"
  | "autoriza_publicacao"
  | "ponto_positivo"
  | "sugestao_melhoria"
  | "evolucao_sintomas"
  | "recomendaria"
  | "comentarios_melhoria";

export type SatisfactionFormErrors = Partial<
  Record<SatisfactionFormField, string>
> & {
  form?: string;
};

export type SatisfactionFormPayload = {
  nome: string;
  email: string;
  telefone: string;
  unidade: string;
  profissional: string;
  nota: string;
  depoimento: string;
  autoriza_publicacao: string;
  ponto_positivo: string;
  sugestao_melhoria: string;
  evolucao_sintomas: string;
  recomendaria: string;
  comentarios_melhoria: string;
};

const OPTIONAL_TEXT_MAX = 1000;
const EMPTY_OPTIONAL = "Não informado";

function optionalText(value: string): string {
  const trimmed = value.trim();
  return trimmed || EMPTY_OPTIONAL;
}

function optionalChoice(
  value: string,
  labels: Record<string, string>,
): string {
  return labels[value] ?? EMPTY_OPTIONAL;
}

function getFormValue(form: HTMLFormElement, name: string): string {
  // FormData lê corretamente grupos de radio (namedItem retorna RadioNodeList).
  const value = new FormData(form).get(name);
  return typeof value === "string" ? value : "";
}

export function readSatisfactionFormPayload(
  form: HTMLFormElement,
): SatisfactionFormPayload {
  return {
    nome: getFormValue(form, "nome"),
    email: getFormValue(form, "email"),
    telefone: getFormValue(form, "telefone"),
    unidade: getFormValue(form, "unidade"),
    profissional: getFormValue(form, "profissional"),
    nota: getFormValue(form, "nota"),
    depoimento: getFormValue(form, "depoimento"),
    autoriza_publicacao: getFormValue(form, "autoriza_publicacao"),
    ponto_positivo: getFormValue(form, "ponto_positivo"),
    sugestao_melhoria: getFormValue(form, "sugestao_melhoria"),
    evolucao_sintomas: getFormValue(form, "evolucao_sintomas"),
    recomendaria: getFormValue(form, "recomendaria"),
    comentarios_melhoria: getFormValue(form, "comentarios_melhoria"),
  };
}

export function validateSatisfactionForm(
  payload: SatisfactionFormPayload,
): SatisfactionFormErrors | null {
  const trimmedNome = payload.nome.trim();
  const trimmedEmail = payload.email.trim();
  const trimmedTelefone = payload.telefone.trim();
  const trimmedDepoimento = payload.depoimento.trim();
  const nota = Number.parseInt(payload.nota, 10);

  const errors: SatisfactionFormErrors = {};

  if (!trimmedNome) {
    errors.nome = "Informe seu nome.";
  } else if (trimmedNome.length > 120) {
    errors.nome = "O nome pode ter no máximo 120 caracteres.";
  }

  if (trimmedEmail) {
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      errors.email = "Digite um e-mail válido, como nome@email.com.";
    } else if (trimmedEmail.length > 254) {
      errors.email = "O e-mail informado é longo demais.";
    }
  }

  if (trimmedTelefone) {
    if (!isValidPhoneNumber(trimmedTelefone)) {
      errors.telefone =
        "Número inválido. Verifique o país selecionado e se digitou o DDD corretamente.";
    }
  }

  if (!payload.unidade) {
    errors.unidade = "Selecione a unidade em que foi atendido(a).";
  }

  if (!payload.profissional) {
    errors.profissional = "Selecione o profissional que o(a) atendeu.";
  }

  if (!Number.isInteger(nota) || nota < 1 || nota > 5) {
    errors.nota = "Selecione uma nota de 1 a 5.";
  }

  if (!trimmedDepoimento) {
    errors.depoimento = "Escreva seu depoimento.";
  } else if (trimmedDepoimento.length < 20) {
    errors.depoimento = "O depoimento deve ter pelo menos 20 caracteres.";
  } else if (trimmedDepoimento.length > 2000) {
    errors.depoimento = "O depoimento pode ter no máximo 2.000 caracteres.";
  }

  if (
    payload.autoriza_publicacao !== "sim" &&
    payload.autoriza_publicacao !== "nao"
  ) {
    errors.autoriza_publicacao =
      "Informe se autoriza a publicação do depoimento no site.";
  }

  const optionalTexts: Array<{
    field: "ponto_positivo" | "sugestao_melhoria" | "comentarios_melhoria";
    value: string;
    label: string;
  }> = [
    {
      field: "ponto_positivo",
      value: payload.ponto_positivo.trim(),
      label: "O que mais valorizou",
    },
    {
      field: "sugestao_melhoria",
      value: payload.sugestao_melhoria.trim(),
      label: "Sugestão de melhoria",
    },
    {
      field: "comentarios_melhoria",
      value: payload.comentarios_melhoria.trim(),
      label: "Comentários adicionais",
    },
  ];

  for (const { field, value, label } of optionalTexts) {
    if (value.length > OPTIONAL_TEXT_MAX) {
      errors[field] = `${label} pode ter no máximo ${OPTIONAL_TEXT_MAX} caracteres.`;
    }
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export async function sendSatisfactionForm(form: HTMLFormElement) {
  if (!isSatisfactionEmailJsConfigured()) {
    throw Object.assign(new Error("Missing EmailJS configuration"), {
      status: 503,
      text: "Missing EmailJS configuration",
    });
  }

  const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
  const replyToInput = form.elements.namedItem("reply_to") as HTMLInputElement | null;
  const telefoneInput = form.elements.namedItem("telefone") as HTMLInputElement | null;
  const notaInput = form.elements.namedItem("nota") as HTMLInputElement | null;
  const notaLabelInput = form.elements.namedItem("nota_label") as HTMLInputElement | null;
  const autorizaInput = form.elements.namedItem(
    "autoriza_publicacao_label",
  ) as HTMLInputElement | null;

  if (replyToInput) {
    replyToInput.value = emailInput?.value.trim() ?? "";
  }

  if (telefoneInput?.value) {
    const parsed = parsePhoneNumber(telefoneInput.value.trim());
    if (parsed) {
      telefoneInput.value = parsed.formatInternational();
    }
  }

  const nota = Number.parseInt(notaInput?.value ?? "", 10);
  if (notaLabelInput && Number.isInteger(nota)) {
    notaLabelInput.value = `${nota} — ${RATING_LABELS[nota]}`;
  }

  const autoriza = getFormValue(form, "autoriza_publicacao");
  if (autorizaInput) {
    autorizaInput.value =
      autoriza === "sim"
        ? "Sim, autorizo publicar no site"
        : "Não, prefiro manter privado";
  }

  const setHidden = (name: string, value: string) => {
    const input = form.elements.namedItem(name) as HTMLInputElement | null;
    if (input) input.value = value;
  };

  setHidden("ponto_positivo_envio", optionalText(getFormValue(form, "ponto_positivo")));
  setHidden(
    "sugestao_melhoria_envio",
    optionalText(getFormValue(form, "sugestao_melhoria")),
  );
  setHidden(
    "evolucao_sintomas_envio",
    optionalChoice(getFormValue(form, "evolucao_sintomas"), EVOLUCAO_SINTOMAS_LABELS),
  );
  setHidden(
    "recomendaria_envio",
    optionalChoice(getFormValue(form, "recomendaria"), RECOMENDARIA_LABELS),
  );
  setHidden(
    "comentarios_melhoria_envio",
    optionalText(getFormValue(form, "comentarios_melhoria")),
  );

  const honeypot = form.elements.namedItem(HONEYPOT_FIELD_NAME);
  if (honeypot instanceof HTMLInputElement) {
    honeypot.disabled = true;
  }

  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_SATISFACTION_TEMPLATE_ID,
      form,
      { publicKey: EMAILJS_PUBLIC_KEY },
    );
  } finally {
    if (honeypot instanceof HTMLInputElement) {
      honeypot.disabled = false;
    }
  }
}
