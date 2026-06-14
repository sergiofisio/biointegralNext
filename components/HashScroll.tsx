"use client";

import { useEffect } from "react";

export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
