"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "sent" | "error";

const contactApiUrl =
  process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "/api/contact";

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

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Falha ao enviar.");
      }

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
