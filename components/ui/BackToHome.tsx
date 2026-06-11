import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type BackToHomeProps = {
  className?: string;
};

export function BackToHome({ className }: BackToHomeProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest hover:opacity-80 transition-opacity",
        className,
      )}
    >
      <ArrowLeft className="size-4" />
      Voltar para a home
    </Link>
  );
}
