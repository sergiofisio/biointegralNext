"use client";

import { useState } from "react";
import { useWhatsApp } from "./use-whatsapp";

export function useContactForm() {
  const [sent, setSent] = useState(false);
  const { openWhatsApp } = useWhatsApp();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const message = data.get("message");
    const text = `Olá! Meu nome é ${name}.\n\n${message}`;
    openWhatsApp(text);
    setSent(true);
  }

  return { sent, handleSubmit };
}
