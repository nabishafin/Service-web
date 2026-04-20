"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "@/lib/site-data";
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";
import { LogoMark } from "@/components/ui/logo-mark";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <LogoMark />
          <span className="text-3xl font-extrabold tracking-tight">PlumbFlow</span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-10 text-base font-semibold text-white/90">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-flex items-center gap-1 transition hover:text-white">
                  <span>{item.label}</span>
                  {item.hasDropdown ? <ChevronDownIcon className="h-4 w-4" /> : null}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:+11245678900"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(255,111,36,0.4)] transition hover:bg-[var(--color-accent-strong)]"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>(124) 567 8900</span>
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="mx-4 rounded-[28px] border border-white/15 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur lg:hidden">
          <ul className="space-y-4 text-lg font-semibold">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-flex items-center gap-2 text-white/90 transition hover:text-white">
                  <span>{item.label}</span>
                  {item.hasDropdown ? <ChevronDownIcon className="h-4 w-4" /> : null}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:+11245678900"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-4 text-base font-bold text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>(124) 567 8900</span>
          </a>
        </div>
      ) : null}
    </header>
  );
}
