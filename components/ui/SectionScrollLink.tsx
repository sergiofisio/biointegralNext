"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionScrollLinkProps = {
  section: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

function scrollToSection(section: string) {
  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  window.history.pushState(null, "", `#${section}`);
}

export function SectionScrollLink({
  section,
  children,
  className,
  onNavigate,
}: SectionScrollLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection(section);
      onNavigate?.();
    }
  };

  return (
    <Link href={`/#${section}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
