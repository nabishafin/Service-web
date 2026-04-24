"use client";

import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/site-data";

export function WhatsAppButton() {
  const whatsappNumber = siteConfig.whatsapp; // Pulled from centralized config
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] active:scale-95 group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="h-9 w-9" />
      
      {/* Tooltip */}
      <span className="absolute right-20 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#0f3048] shadow-xl opacity-0 lg:opacity-100 transition-opacity group-hover:opacity-100 pointer-events-none border border-gray-100">
        Chat with us!
      </span>
    </a>
  );
}
