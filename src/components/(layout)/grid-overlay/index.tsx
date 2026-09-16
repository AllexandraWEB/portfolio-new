"use client"

import { useIsMobile } from "@/src/hooks/use-mobile";

export function GridOverlay() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
    >
      <div className="grid-4-vars mx-auto grid min-h-screen grid-4 px-4">
        <div className="border-l border-black/10" />
        <div className="border-l border-black/10" />
        <div className="border-l border-black/10" />
        <div className="border-x border-black/10" />
      </div>
    </div>
  ) : (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
    >
      <div className="grid-4-vars mx-auto grid min-h-screen max-w-360 grid-4">
        <div className="border-l border-black/10" />
        <div className="border-l border-black/10" />
        <div className="border-l border-black/10" />
        <div className="border-x border-black/10" />
      </div>
    </div>
  );
}