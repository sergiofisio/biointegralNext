"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  getHomeSectionForPath,
  getSectionLabel,
  homeSectionHref,
  isHomePath,
  type HomeSection,
} from "@/lib/nav";
import {
  queueHomeSectionScroll,
  scrollToSectionWhenReady,
} from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

type BackToHomeProps = {
  className?: string;
  section?: HomeSection;
};

export function BackToHome({ className, section }: BackToHomeProps) {
  const pathname = usePathname();
  const router = useRouter();
  const targetSection = section ?? getHomeSectionForPath(pathname);
  const href = targetSection ? homeSectionHref(targetSection) : "/";
  const label = targetSection
    ? `Voltar para ${getSectionLabel(targetSection)}`
    : "Voltar para a home";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!targetSection) {
      router.push("/");
      return;
    }

    if (isHomePath(pathname)) {
      scrollToSectionWhenReady(targetSection);
      return;
    }

    queueHomeSectionScroll(targetSection);
    router.push("/", { scroll: false });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest hover:opacity-80 transition-opacity",
        className,
      )}
    >
      <ArrowLeft className="size-4" />
      {label}
    </a>
  );
}
