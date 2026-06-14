"use client";

import { useCallback, useEffect, useState } from "react";

const AUTO_INTERVAL_MS = 6000;

export function useTestimonialCarousel(length: number) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (length === 0) return;
      setActive(((index % length) + length) % length);
    },
    [length],
  );

  const next = useCallback(() => {
    setActive((i) => (i + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    if (paused || length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, length]);

  return {
    active,
    goTo,
    next,
    prev,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
