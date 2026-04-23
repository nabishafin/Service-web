"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Also try setting document body to top just in case
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
