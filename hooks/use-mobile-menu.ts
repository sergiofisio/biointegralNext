"use client";

import { useState, useCallback } from "react";

export function useMobileMenu() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  return { open, toggle, close, setOpen };
}
