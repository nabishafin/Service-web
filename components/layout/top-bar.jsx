"use client";

import { useEffect, useState } from "react";
import { contactItems } from "@/lib/site-data";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";

const iconMap = {
  phone: PhoneIcon,
  mail: MailIcon,
  clock: ClockIcon,
};

export function TopBar() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const updateTopBarState = () => {
      const hero = document.getElementById("home-hero");

      if (!hero) {
        setShowTopBar(true);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowTopBar(heroBottom > 128);
    };

    updateTopBarState();
    window.addEventListener("scroll", updateTopBarState, { passive: true });
    window.addEventListener("resize", updateTopBarState);

    return () => {
      window.removeEventListener("scroll", updateTopBarState);
      window.removeEventListener("resize", updateTopBarState);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 hidden bg-[var(--color-navy)] text-white transition-all duration-300 lg:block ${
        showTopBar
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="w-full">
        <div className="mx-auto flex h-[42px] max-w-7xl items-center justify-end gap-6 px-4 sm:px-6 lg:px-8 text-sm font-medium">
          {contactItems.map((item) => {
          const Icon = iconMap[item.type];

          return (
            <a key={item.label} href={item.href} className="inline-flex items-center gap-2 text-white/90 transition hover:text-white">
              <Icon className="h-4 w-4 text-orange-400" />
              <span>{item.label}</span>
            </a>
          );
        })}
        </div>
      </div>
    </div>
  );
}
