import { Facebook, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site-data";

const ICONS = {
  Instagram,
  Facebook,
} as const;

export function SocialRail() {
  return (
    <div
      className="hidden lg:flex fixed left-4 bottom-28 z-40 flex-col gap-2 items-start"
      aria-label="Redes sociais"
    >
      {SOCIAL_LINKS.map((social) => {
        const Icon = ICONS[social.name];
        return (
          <a
            key={social.name}
            href={social.href}
            aria-label={`${social.name} — ${social.handle}`}
            title={social.name}
            className="group/item flex items-center rounded-full bg-white text-navy shadow-lg ring-1 ring-black/5 hover:bg-navy hover:text-white transition-colors overflow-hidden"
          >
            <span className="flex size-11 shrink-0 items-center justify-center">
              <Icon className="size-5" />
            </span>
            <span className="max-w-0 overflow-hidden opacity-0 transition-[max-width,opacity] duration-500 ease-in-out group-hover/item:max-w-40 group-hover/item:opacity-100 group-focus-visible/item:max-w-40 group-focus-visible/item:opacity-100">
              <span className="block pr-4 pl-1 text-sm font-medium whitespace-nowrap">
                {social.name}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
