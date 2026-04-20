"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/lib/site-data";
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";
import { LogoMark } from "@/components/ui/logo-mark";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const navbarHeight = 86;

  useEffect(() => {
    const updateNavbarState = () => {
      const hero = document.getElementById("home-hero");

      if (!hero) {
        setIsAtTop(false);
        setHasPassedHero(false);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      // 128px = TopBar (42px) + Navbar (86px)
      setIsAtTop(heroBottom <= 128);
      setHasPassedHero(heroBottom <= navbarHeight);
    };

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("resize", updateNavbarState);

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("resize", updateNavbarState);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-40 transition-all duration-300 ${
        isAtTop ? "top-0" : "top-0 lg:top-[42px]"
      } ${
        hasPassedHero
          ? "bg-[var(--color-navy)] shadow-[0_14px_32px_rgba(8,17,29,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto h-[86px] w-full">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-3 text-white">
            <LogoMark />
            <span className="text-3xl font-extrabold tracking-tight">PlumbFlow</span>
          </Link>
        </div>

        <ul className="hidden items-center gap-10 text-base font-semibold text-white/90 lg:flex">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="inline-flex items-center gap-1 transition hover:text-white">
                <span>{item.label}</span>
                {item.hasDropdown ? <ChevronDownIcon className="h-4 w-4" /> : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-10 lg:flex-1">
          <a
            href="tel:+11245678900"
            className="hidden items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(255,111,36,0.4)] transition hover:bg-[var(--color-accent-strong)] lg:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>(124) 567 8900</span>
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border text-white backdrop-blur lg:hidden ${
            hasPassedHero ? "border-white/10 bg-white/10" : "border-white/20 bg-white/10"
          }`}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="mx-4 mb-4 rounded-[28px] border border-white/15 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur lg:hidden">
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
