"use client";

import { useState } from "react";
import { sendContactEmail, validateContactForm } from "@/lib/emailjs";

type FormStatus = "idle" | "loading" | "sent" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const validationError = validateContactForm(payload);
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    try {
      await sendContactEmail(payload);
      setStatus("sent");
      e.currentTarget.reset();
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
