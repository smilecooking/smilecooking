"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function AnalyticsTracker() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[data-cta]");
      if (!link) return;

      const ctaType = link.dataset.cta ?? "navigation";
      const eventName = ctaType === "booking"
        ? "booking_click"
        : ctaType === "line"
          ? "line_click"
          : ctaType === "lesson"
            ? "lesson_click"
            : "navigation_click";
      const details = {
        cta_type: ctaType,
        cta_label: link.textContent?.replace(/\s+/g, " ").trim() ?? "",
        destination_url: link.href,
        page_path: window.location.pathname,
      };

      if (window.gtag) {
        window.gtag("event", eventName, details);
      } else if (window.dataLayer) {
        window.dataLayer.push({ event: eventName, ...details });
      }
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
