"use client";

import { useState } from "react";
import {
  readContactFormPayload,
  sendContactForm,
  validateContactForm,
} from "@/lib/emailjs";

type FormStatus = "idle" | "loading" | "sent" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("loading");
    setError("");

    const payload = readContactFormPayload(form);
    const validationError = validateContactForm(payload);
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    try {
      await sendContactForm(form);
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar. Tente pelo WhatsApp.",
      );
    }
  }

  return {
    sent: status === "sent",
    loading: status === "loading",
    error,
    handleSubmit,
  };
}
