"use client";

import Link from "next/link";
import { WhatsAppIcon, MailIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/site-data";

export function WhatsAppButton() {
  const whatsappNumber = siteConfig.whatsapp;
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-center gap-4">
      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_8px_32px_rgba(255,96,23,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(255,96,23,0.5)] active:scale-95 group/contact"
        aria-label="Contact With Us"
      >
        <MailIcon className="h-6 w-6" />

        {/* Tooltip */}
        <span className="absolute right-[4.5rem] w-36 text-center rounded-lg bg-white py-2 text-sm font-bold text-[#0f3048] shadow-xl opacity-0 lg:opacity-100 transition-opacity group-hover/contact:opacity-100 pointer-events-none border border-gray-100">
          Contact With Us
        </span>
      </Link>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] active:scale-95 group/whatsapp"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />

        {/* Tooltip */}
        <span className="absolute right-[4.5rem] w-36 text-center rounded-lg bg-white py-2 text-sm font-bold text-[#0f3048] shadow-xl opacity-0 lg:opacity-100 transition-opacity group-hover/whatsapp:opacity-100 pointer-events-none border border-gray-100">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
