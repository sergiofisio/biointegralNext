import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xl ring-4 ring-white/30 hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
