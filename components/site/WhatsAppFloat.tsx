import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappUrl}
      aria-label="Agendar pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center rounded-full bg-emerald-600 text-white shadow-xl ring-4 ring-white/30 hover:scale-105 active:scale-95 transition-transform duration-300 overflow-hidden"
    >
      <span className="max-w-0 overflow-hidden transition-[max-width] duration-300 ease-out group-hover:max-w-48 group-focus-visible:max-w-48">
        <span className="block pl-5 pr-1 text-sm font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          Agende pelo WhatsApp
        </span>
      </span>
      <span className="flex size-14 shrink-0 items-center justify-center">
        <MessageCircle className="size-6" />
      </span>
    </a>
  );
}
