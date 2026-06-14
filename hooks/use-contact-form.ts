"use client";

import { useState } from "react";
import {
  isEmailJsConfigured,
  mapEmailJsError,
  readContactFormPayload,
  sendContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormField,
} from "@/lib/emailjs";

type FormStatus = "idle" | "loading" | "sent" | "error";

const emptyErrors: ContactFormErrors = {};

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<ContactFormErrors>(emptyErrors);

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

    const payload = readContactFormPayload(form);
    const validationErrors = validateContactForm(payload);
    if (validationErrors) {
      setStatus("error");
      setErrors(validationErrors);
      return;
    }

    if (!isEmailJsConfigured()) {
      setStatus("error");
      setErrors({
        form: "Variáveis do EmailJS não carregadas. Confira o arquivo .env e reinicie o servidor com yarn dev.",
      });
      return;
    }

    try {
      await sendContactForm(form);
      setStatus("sent");
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("[contato] EmailJS:", err);
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
