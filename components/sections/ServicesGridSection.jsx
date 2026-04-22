"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { serviceItems } from "@/lib/services-data";

const INITIAL_COUNT = 6;

function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ServicesGridSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? serviceItems : serviceItems.slice(0, INITIAL_COUNT);
  const hiddenCount = serviceItems.length - INITIAL_COUNT;

  return (
    <section className="bg-[#f5f7fd] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Expert Services
          </p>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[#18344f] sm:text-[2.5rem] lg:text-[3.25rem]">
            Fast &amp; Reliable Solutions for Every Plumbing Need
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#66737d] sm:text-[1.05rem]">
            From minor leaks to full system overhauls, our certified plumbers are equipped and ready to handle any job — on time and on budget.
          </p>
        </div>

        {/* Services grid */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleItems.map((service, index) => {
            const isNew = showAll && index >= INITIAL_COUNT;
            return (
              <li
                key={service.id}
                className={isNew ? "animate-fade-in-up" : ""}
                style={
                  isNew
                    ? {
                        animation: `fadeInUp 0.45s ease both`,
                        animationDelay: `${(index - INITIAL_COUNT) * 0.08}s`,
                      }
                    : {}
                }
              >
              <Link href={`/services/${service.id}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(24,52,79,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(24,52,79,0.13)]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe5ee]">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-[#18344f] sm:text-[1.35rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 grow text-[0.95rem] leading-relaxed text-[#66737d]">
                      {service.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] transition group-hover:gap-3">
                      <span>View Details</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
              </li>
            );
          })}
        </ul>

        {/* Load More button */}
        {!showAll && (
          <div className="mt-12 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[var(--color-accent)] px-8 py-3.5 text-base font-bold text-[var(--color-accent)] transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-white hover:shadow-[0_12px_30px_rgba(255,96,23,0.28)]"
            >
              <span>Load More Services</span>
              <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>
            <p className="text-sm text-[#66737d]">
              Showing 6 of {serviceItems.length} — {hiddenCount} more available
            </p>
          </div>
        )}

        {/* Bottom CTA — shown after all loaded */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <p className="text-base font-medium text-[#66737d]">
            Need an emergency plumber right now?
          </p>
          <a
            href="tel:+11245678900"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-white shadow-[0_12px_30px_rgba(255,96,23,0.28)] transition hover:bg-[var(--color-accent-strong)]"
          >
            Call (124) 567 8900
          </a>
        </div>
      </div>

      {/* Keyframe for the fade-in animation of new cards */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
