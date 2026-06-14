"use client";

import { SITE } from "@/lib/site-data";

export function buildWhatsAppUrl(message?: string) {
  if (!message) return SITE.whatsappUrl;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function useWhatsApp() {
  function openWhatsApp(message?: string) {
    window.open(buildWhatsAppUrl(message), "_blank");
  }

  return { whatsappUrl: SITE.whatsappUrl, openWhatsApp, buildWhatsAppUrl };
}
