"use client";

import { useCallback, useState } from "react";
import {
  isContatoEmailJsConfigured,
  logEmailJsFailure,
  mapEmailJsError,
  readContactFormPayload,
  sendContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormField,
} from "@/lib/emailjs";
import {
  cooldownMessage,
  getCooldownRemainingMs,
  isHoneypotFilled,
  markFormSubmitted,
} from "@/lib/form-guard";
import { isTurnstileConfigured } from "@/components/forms/TurnstileWidget";

type FormStatus = "idle" | "loading" | "sent" | "error";

const FORM_KEY = "contato";
const emptyErrors: ContactFormErrors = {};

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<ContactFormErrors>(emptyErrors);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const onTurnstileTokenChange = useCallback((token: string | null) => {
    setTurnstileToken(token);
  }, []);

  function clearFieldError(field: ContactFormField) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("loading");
    setErrors(emptyErrors);

    if (isHoneypotFilled(form)) {
      console.warn("[Biointegral/contato] Honeypot preenchido — envio ignorado.");
      setStatus("sent");
      return;
    }

    const remaining = getCooldownRemainingMs(FORM_KEY);
    if (remaining > 0) {
      console.warn("[Biointegral/contato] Cooldown ativo", { remaining });
      setStatus("error");
      setErrors({ form: cooldownMessage(remaining) });
      return;
    }

    const payload = readContactFormPayload(form);
    const validationErrors = validateContactForm(payload);
    if (validationErrors) {
      console.warn("[Biointegral/contato] Validação falhou", validationErrors);
      setStatus("error");
      setErrors(validationErrors);
      requestAnimationFrame(() => {
        const firstInvalid =
          form.querySelector<HTMLElement>("[aria-invalid='true']") ??
          form.querySelector<HTMLElement>("[role='alert']");
        firstInvalid?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }

    if (isTurnstileConfigured() && !turnstileToken) {
      console.warn("[Biointegral/contato] Turnstile sem token");
      setStatus("error");
      setErrors({
        form: "Confirme que você não é um robô antes de enviar.",
      });
      return;
    }

    if (!isContatoEmailJsConfigured()) {
      const configError = Object.assign(
        new Error("Missing EmailJS configuration"),
        { status: 503, text: "Missing EmailJS configuration" },
      );
      logEmailJsFailure("contato", configError);
      setStatus("error");
      setErrors(mapEmailJsError(configError));
      return;
    }

    try {
      await sendContactForm(form);
      markFormSubmitted(FORM_KEY);
      setTurnstileToken(null);
      setStatus("sent");
    } catch (err) {
      logEmailJsFailure("contato", err);
      setStatus("error");
      setErrors(mapEmailJsError(err));
    }
  }

  return {
    sent: status === "sent",
    loading: status === "loading",
    errors,
    clearFieldError,
    handleSubmit,
    turnstileToken,
    onTurnstileTokenChange,
  };
}
