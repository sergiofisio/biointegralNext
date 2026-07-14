const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "";
const CONTATO_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTATO_TEMPLATE_ID?.trim() ?? "";
const SATISFACTION_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SATISFACTION_TEMPLATE_ID?.trim() ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";

export const EMAILJS_SERVICE_ID = SERVICE_ID;
export const EMAILJS_PUBLIC_KEY = PUBLIC_KEY;
export const EMAILJS_TEMPLATE_ID = TEMPLATE_ID;
export const EMAILJS_SATISFACTION_TEMPLATE_ID = SATISFACTION_TEMPLATE_ID;

/** Template de contato: CONTATO explícito, senão cai no TEMPLATE_ID legado. */
export const EMAILJS_CONTATO_TEMPLATE_ID =
  CONTATO_TEMPLATE_ID || TEMPLATE_ID;

function maskSecret(value: string): string {
  if (!value) return "(vazio)";
  if (value.length <= 6) return `${value.slice(0, 2)}…`;
  return `${value.slice(0, 4)}…${value.slice(-3)} (${value.length} chars)`;
}

export type EmailJsConfigSnapshot = {
  serviceId: string;
  publicKey: string;
  contatoTemplateId: string;
  satisfactionTemplateId: string;
  legacyTemplateId: string;
  contatoReady: boolean;
  satisfactionReady: boolean;
};

export function getEmailJsConfigSnapshot(): EmailJsConfigSnapshot {
  return {
    serviceId: maskSecret(SERVICE_ID),
    publicKey: maskSecret(PUBLIC_KEY),
    contatoTemplateId: maskSecret(EMAILJS_CONTATO_TEMPLATE_ID),
    satisfactionTemplateId: maskSecret(SATISFACTION_TEMPLATE_ID),
    legacyTemplateId: maskSecret(TEMPLATE_ID),
    contatoReady: isContatoEmailJsConfigured(),
    satisfactionReady: isSatisfactionEmailJsConfigured(),
  };
}

export function isEmailJsConfigured(): boolean {
  return isContatoEmailJsConfigured();
}

export function isSatisfactionEmailJsConfigured(): boolean {
  return (
    SERVICE_ID.length > 0 &&
    SATISFACTION_TEMPLATE_ID.length > 0 &&
    PUBLIC_KEY.length > 0
  );
}

export function isContatoEmailJsConfigured(): boolean {
  return (
    SERVICE_ID.length > 0 &&
    EMAILJS_CONTATO_TEMPLATE_ID.length > 0 &&
    PUBLIC_KEY.length > 0
  );
}
