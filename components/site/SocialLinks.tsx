import { Facebook, Instagram, type LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type SocialName = (typeof SOCIAL_LINKS)[number]["name"];

const ICONS: Record<SocialName, LucideIcon> = {
  Instagram,
  Facebook,
};

const EXTERNAL_LINK_PROPS = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

type SocialLinksProps = {
  variant?: "nav" | "footer" | "menu" | "cards";
  className?: string;
  onNavigate?: () => void;
};

export function SocialLinks({
  variant = "nav",
  className,
  onNavigate,
}: SocialLinksProps) {
  if (variant === "nav") {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.name];
          return (
            <a
              key={social.name}
              href={social.href}
              {...EXTERNAL_LINK_PROPS}
              aria-label={`${social.name} — ${social.handle}`}
              onClick={onNavigate}
              className="size-10 rounded-full grid place-items-center text-zinc-500 hover:text-navy hover:bg-zinc-950/5 transition-colors"
            >
              <Icon className="size-5" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "menu") {
    return (
      <div className={cn("flex gap-3 pt-2", className)}>
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.name];
          return (
            <a
              key={social.name}
              href={social.href}
              {...EXTERNAL_LINK_PROPS}
              onClick={onNavigate}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-navy/5 text-navy text-sm font-medium hover:bg-navy/10 transition-colors"
            >
              <Icon className="size-4" />
              {social.name}
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", className)}>
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.name];
          return (
            <a
              key={social.name}
              href={social.href}
              {...EXTERNAL_LINK_PROPS}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white ring-1 ring-black/5 hover:ring-gold/40 transition-colors"
            >
              <span className="size-11 rounded-full bg-navy/5 grid place-items-center text-navy shrink-0">
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block font-medium text-navy">
                  {social.name}
                </span>
                <span className="block text-xs text-zinc-500">
                  {social.handle}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs font-semibold text-navy uppercase tracking-widest">
        Siga a Biointegral
      </p>
      <div className="flex flex-wrap gap-3">
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.name];
          return (
            <a
              key={social.name}
              href={social.href}
              {...EXTERNAL_LINK_PROPS}
              className="inline-flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-soft transition-colors"
            >
              <Icon className="size-4" />
              {social.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
