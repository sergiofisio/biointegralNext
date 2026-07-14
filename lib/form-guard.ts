/** Proteções anti-spam no cliente (honeypot + cooldown). */

export const HONEYPOT_FIELD_NAME = "company_website";

export const FORM_COOLDOWN_MS = 60_000;

const COOLDOWN_PREFIX = "biointegral:form-cooldown:";

export function isHoneypotFilled(form: HTMLFormElement): boolean {
  const field = form.elements.namedItem(HONEYPOT_FIELD_NAME);
  if (!(field instanceof HTMLInputElement)) return false;
  return field.value.trim().length > 0;
}

export function getCooldownRemainingMs(formKey: string): number {
  if (typeof sessionStorage === "undefined") return 0;
  const raw = sessionStorage.getItem(`${COOLDOWN_PREFIX}${formKey}`);
  if (!raw) return 0;
  const last = Number.parseInt(raw, 10);
  if (!Number.isFinite(last)) return 0;
  const remaining = FORM_COOLDOWN_MS - (Date.now() - last);
  return remaining > 0 ? remaining : 0;
}

export function markFormSubmitted(formKey: string): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(`${COOLDOWN_PREFIX}${formKey}`, String(Date.now()));
}

export function cooldownMessage(remainingMs: number): string {
  const seconds = Math.max(1, Math.ceil(remainingMs / 1000));
  return `Aguarde ${seconds}s antes de enviar novamente.`;
}
