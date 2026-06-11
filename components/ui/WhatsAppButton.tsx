import { Calendar } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "nav";
  className?: string;
  href?: string;
};

const variants = {
  primary:
    "bg-navy text-white py-3 pr-5 pl-4 flex items-center gap-2 rounded-full text-sm font-medium ring-1 ring-navy hover:bg-navy-soft transition-colors",
  outline:
    "inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-navy-soft transition-colors",
  nav: "bg-navy text-white px-5 py-2 rounded-full text-sm font-medium ring-1 ring-navy hover:bg-navy-soft transition-colors",
};

export function WhatsAppButton({
  children,
  variant = "primary",
  className,
  href = SITE.whatsappUrl,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variants[variant], className)}
    >
      {variant !== "nav" && <Calendar className="size-4 shrink-0" />}
      {children}
    </a>
  );
}
