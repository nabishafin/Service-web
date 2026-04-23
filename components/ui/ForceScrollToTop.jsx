"use client";

import { useEffect } from "react";

export function ForceScrollToTop() {
  useEffect(() => {
    // Force a scroll to top immediately on mount
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // As a fallback for some browsers or delayed layouts
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
