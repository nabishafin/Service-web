"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { LogoMark } from "@/components/ui/LogoMark";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon
} from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      {/* Emergency CTA Bar */}
      <div className="border-b border-white/5 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <h2 className="text-center text-[1.5rem] font-bold leading-tight tracking-tight sm:text-[1.75rem] md:text-left md:max-w-xl md:text-[2.25rem]">
              Get Professional Cleaning & Hospitality Help — Call Today!
            </h2>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 text-lg font-bold text-white shadow-[0_12px_24px_rgba(255,96,23,0.3)] transition hover:bg-[var(--color-accent-strong)]"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            {/* Brand column */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-3 text-white">
                <LogoMark />
                <span className="text-3xl font-extrabold tracking-tight">ServiceFlow</span>
              </Link>
              <p className="max-w-xs text-base leading-relaxed text-gray-400">
                ServiceFlow provides top-quality cleaning and hospitality services, from deep cleaning to event staffing by certified professionals.
              </p>
              <div className="flex items-center gap-4">
                <a href={siteConfig.socials.facebook} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-[#ff6017]">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href={siteConfig.socials.instagram} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-[#ff6017]">
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a href={siteConfig.socials.twitter} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-[#ff6017]">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href={siteConfig.socials.youtube} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-[#ff6017]">
                  <YouTubeIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-8 text-lg font-bold text-white">Quick Links</h3>
              <ul className="space-y-4 text-base font-medium text-gray-400">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="transition hover:text-white">Contact Us</Link></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="mb-8 text-lg font-bold text-white">Service Areas</h3>
              <ul className="space-y-4 text-base font-medium text-gray-400">
                <li><Link href="/services/house-cleaning" className="transition hover:text-white">House Cleaning</Link></li>
                <li><Link href="/services/office-cleaning" className="transition hover:text-white">Office Cleaning</Link></li>
                <li><Link href="/services/waiter-waitress" className="transition hover:text-white">Hospitality Staffing</Link></li>
                <li><Link href="/services/outside-catering" className="transition hover:text-white">Catering & Chef</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <address className="not-italic">
              <h3 className="mb-8 text-lg font-bold text-white transition hover:text-white">Contact Us</h3>
              <ul className="space-y-6 text-base font-medium text-gray-400">
                <li className="flex gap-4">
                  <MapPinIcon className="h-6 w-6 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex gap-4">
                  <MailIcon className="h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">{siteConfig.email}</a>
                </li>
                <li className="flex gap-4">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="transition hover:text-white">{siteConfig.phone}</a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <p className="text-center text-sm font-medium text-gray-500 md:text-left">
            &copy; {currentYear} ServiceFlow. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
