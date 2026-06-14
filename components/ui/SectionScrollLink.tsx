"use client";

import { Link as ScrollLink } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";
import { isHomePath, sectionHref } from "@/lib/nav";
import {
  queueHomeSectionScroll,
  SCROLL_DURATION,
  SCROLL_OFFSET,
} from "@/lib/scroll-to-section";

type SectionScrollLinkProps = {
  section: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

const scrollLinkProps = {
  spy: false,
  smooth: true,
  duration: SCROLL_DURATION,
  offset: SCROLL_OFFSET,
  isDynamic: true,
  href: "",
};

export function SectionScrollLink({
  section,
  children,
  className,
  onNavigate,
}: SectionScrollLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (isHomePath(pathname)) {
    return (
      <ScrollLink
        to={section}
        {...scrollLinkProps}
        className={className}
        onClick={() => onNavigate?.()}
      >
        {children}
      </ScrollLink>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();
    queueHomeSectionScroll(section);
    router.push("/", { scroll: false });
  };

  return (
    <a href={sectionHref(section)} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
