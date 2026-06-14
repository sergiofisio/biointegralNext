"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isHomePath } from "@/lib/nav";
import {
  consumeHomeSectionScroll,
  scrollToHash,
  scrollToSectionWhenReady,
} from "@/lib/scroll-to-section";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !isHomePath(pathname)) return;

    history.scrollRestoration = "manual";

    const queuedSection = consumeHomeSectionScroll();
    if (queuedSection) {
      window.scrollTo(0, 0);
      scrollToSectionWhenReady(queuedSection);
      return;
    }

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace(/^#/, "");
    history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    window.scrollTo(0, 0);
    scrollToSectionWhenReady(id);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (!isHomePath(window.location.pathname)) return;
      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
