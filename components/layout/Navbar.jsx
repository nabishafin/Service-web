"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems, siteConfig } from "@/lib/site-data";
import { serviceItems } from "@/lib/services-data";
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { LogoMark } from "@/components/ui/LogoMark";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarHeight = 86;

  useEffect(() => {
    const updateNavbarState = () => {
      const hero = document.getElementById("home-hero");

      if (!hero) {
        // On subpages, the navbar should always be solid for clear visibility against light backgrounds
        setIsAtTop(false);
        setHasPassedHero(true);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
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
    <div
      className={`fixed inset-x-0 z-40 transition-all duration-300 ${
        isAtTop ? "top-0" : "top-0 lg:top-[42px]"
      } ${
        hasPassedHero || activeDropdown
          ? "bg-[var(--color-navy)] shadow-[0_14px_32px_rgba(8,17,29,0.18)]"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav className="mx-auto h-[86px] w-full">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-3 text-white">
              <LogoMark />
              <span className="text-3xl font-extrabold tracking-tight">ServiceFlow</span>
            </Link>
          </div>

          <ul className="hidden items-center gap-10 text-base font-semibold text-white/90 lg:flex">
            {navigationItems.map((item) => (
              <li 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.hasDropdown ? setActiveDropdown(item.label) : null}
              >
                <a 
                  href={item.href} 
                  className={`inline-flex items-center gap-1 transition-all duration-200 py-8 ${
                    activeDropdown === item.label ? "text-white" : "hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-10 lg:flex-1">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="hidden items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(255,111,36,0.4)] transition hover:bg-[var(--color-accent-strong)] lg:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{siteConfig.phone}</span>
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

      {/* Mega Menu Dropdown */}
      {activeDropdown === "Services" && (
        <div className="absolute left-0 top-[86px] w-full border-t border-white/10 bg-[var(--color-navy)] py-10 shadow-2xl">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-4 gap-x-12 gap-y-10">
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-white mb-4">Our Expertise</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We provide a wide range of professional cleaning and hospitality services tailored to your needs.
                </p>
                <Link 
                  href="/services" 
                  className="mt-6 inline-block text-[var(--color-accent)] font-bold hover:underline"
                  onClick={() => setActiveDropdown(null)}
                >
                  View All Services →
                </Link>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-x-8 gap-y-4">
                {serviceItems.map((service) => (
                  <Link 
                    key={service.id} 
                    href={`/services/${service.id}`}
                    className="group flex flex-col rounded-xl p-3 transition hover:bg-white/5"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="text-sm font-bold text-white transition group-hover:text-[var(--color-accent)]">
                      {service.title}
                    </span>
                    <span className="mt-1 text-xs text-white/40 line-clamp-1">
                      {service.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {menuOpen ? (
        <div className="mx-4 mb-4 rounded-[28px] border border-white/15 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur lg:hidden">
          <ul className="space-y-4 text-lg font-semibold">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <div className="flex flex-col gap-2">
                  <a href={item.href} className="inline-flex items-center gap-2 text-white/90 transition hover:text-white">
                    <span>{item.label}</span>
                  </a>
                  {item.hasDropdown && (
                    <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 pl-4">
                      {serviceItems.slice(0, 8).map((service) => (
                        <li key={service.id}>
                          <Link 
                            href={`/services/${service.id}`}
                            className="text-sm font-medium text-white/50 hover:text-white"
                            onClick={() => setMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link 
                          href="/services" 
                          className="text-sm font-bold text-[var(--color-accent)]"
                          onClick={() => setMenuOpen(false)}
                        >
                          More...
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-4 text-base font-bold text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
