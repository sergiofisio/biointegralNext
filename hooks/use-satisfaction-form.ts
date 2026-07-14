"use client";

import { useState } from "react";
import {
  isSatisfactionEmailJsConfigured,
  mapEmailJsError,
  readSatisfactionFormPayload,
  sendSatisfactionForm,
  validateSatisfactionForm,
  type SatisfactionFormErrors,
  type SatisfactionFormField,
} from "@/lib/satisfaction-emailjs";

type FormStatus = "idle" | "loading" | "sent" | "error";

const emptyErrors: SatisfactionFormErrors = {};

export function useSatisfactionForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<SatisfactionFormErrors>(emptyErrors);

  function clearFieldError(field: SatisfactionFormField) {
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

    const payload = readSatisfactionFormPayload(form);
    const validationErrors = validateSatisfactionForm(payload);
    if (validationErrors) {
      setStatus("error");
      setErrors(validationErrors);
      // Garante feedback visível: erros de campo ficam fora da viewport do botão.
      requestAnimationFrame(() => {
        const firstInvalid =
          form.querySelector<HTMLElement>("[aria-invalid='true']") ??
          form.querySelector<HTMLElement>("[role='alert']");
        firstInvalid?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }

    if (!isSatisfactionEmailJsConfigured()) {
      setStatus("error");
      setErrors({
        form: "Variáveis do EmailJS não carregadas. Confira o arquivo .env e reinicie o servidor com yarn dev.",
      });
      return;
    }

    try {
      await sendSatisfactionForm(form);
      setStatus("sent");
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("[satisfacao] EmailJS:", err);
      }
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
  };
}
