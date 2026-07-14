"use client";

import { useState } from "react";
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
  };
}
