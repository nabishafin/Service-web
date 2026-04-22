"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
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
