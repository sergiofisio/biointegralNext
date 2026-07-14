"use client";

import { useEffect } from "react";
import { SITE_BUILD_ID } from "@/lib/build-id";

const STORAGE_KEY = "site-build-id";
const RELOAD_FLAG = "site-version-reloading";

async function clearBrowserCaches() {
  if (typeof caches === "undefined") return;
  const keys = await caches.keys();
  await Promise.all(keys.map((key) => caches.delete(key)));
}

export function SiteVersionGuard() {
  useEffect(() => {
    if (SITE_BUILD_ID === "development") return;

    let cancelled = false;

    async function verifyVersion() {
      try {
        const response = await fetch(`/version.json?t=${Date.now()}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          syncEmbeddedVersion();
          return;
        }

        const data = (await response.json()) as { buildId?: string };
        const remoteId = data.buildId ?? SITE_BUILD_ID;
        applyVersionCheck(remoteId);
      } catch {
        syncEmbeddedVersion();
      }
    }

    function syncEmbeddedVersion() {
      applyVersionCheck(SITE_BUILD_ID);
    }

    async function applyVersionCheck(latestId: string) {
      if (cancelled) return;

      const storedId = localStorage.getItem(STORAGE_KEY);

      if (!storedId) {
        localStorage.setItem(STORAGE_KEY, latestId);
        sessionStorage.removeItem(RELOAD_FLAG);
        return;
      }

      if (storedId === latestId) {
        sessionStorage.removeItem(RELOAD_FLAG);
        return;
      }

      if (sessionStorage.getItem(RELOAD_FLAG) === latestId) {
        localStorage.setItem(STORAGE_KEY, latestId);
        sessionStorage.removeItem(RELOAD_FLAG);
        return;
      }

      localStorage.setItem(STORAGE_KEY, latestId);
      sessionStorage.setItem(RELOAD_FLAG, latestId);
      await clearBrowserCaches();
      window.location.reload();
    }

    const useIdle = typeof requestIdleCallback === "function";
    const idleId = useIdle
      ? requestIdleCallback(() => {
          if (!cancelled) void verifyVersion();
        })
      : window.setTimeout(() => {
          if (!cancelled) void verifyVersion();
        }, 1);

    return () => {
      cancelled = true;
      if (useIdle) {
        cancelIdleCallback(idleId as number);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, []);

  return null;
}
