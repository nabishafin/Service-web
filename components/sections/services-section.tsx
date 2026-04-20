"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { serviceItems } from "@/lib/services-data";

function ArrowRightIcon({ className = "" }: { className?: string }) {
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

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] =
    useState<(typeof serviceItems)[number]["id"]>("leak-detection");

  const activeService = useMemo(
    () => serviceItems.find((service) => service.id === activeServiceId) ?? serviceItems[0],
    [activeServiceId]
  );

  return (
    <section className="bg-[#f5f7fd] px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-sm font-extrabold text-[var(--color-accent)] sm:text-base">Our Service</p>
            <h2 className="mt-5 max-w-[48rem] text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-[#18344f] sm:text-[3.8rem] lg:text-[4.35rem]">
              Reliable, Fast, and Expert Plumbing Solutions
            </h2>
          </div>

          <a
            href="#services"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-lg font-bold text-white shadow-[0_16px_34px_rgba(255,111,36,0.28)] transition hover:bg-[var(--color-accent-strong)]"
          >
            View All Service
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="flex flex-col">
            {serviceItems.map((service) => {
              const isActive = service.id === activeServiceId;

              return (
                <button
                  key={service.id}
                  type="button"
                  className={`group flex items-center gap-4 border-b border-transparent py-7 text-left transition first:pt-4 last:border-b-0 ${
                    isActive ? "text-[var(--color-accent)]" : "text-[#4f5d63]"
                  }`}
                  onClick={() => setActiveServiceId(service.id)}
                >
                  <ArrowRightIcon
                    className={`h-6 w-6 shrink-0 transition ${
                      isActive ? "text-[var(--color-accent)]" : "text-[#4f5d63]"
                    }`}
                  />
                  <span className="text-[1.7rem] font-bold leading-none tracking-[-0.03em] sm:text-[2.05rem]">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-[1.45rem] bg-[#dfe5ee]">
            <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[30.25rem]">
              <Image
                key={activeService.id}
                src={activeService.image.src}
                alt={activeService.image.alt}
                width={activeService.image.width}
                height={activeService.image.height}
                className="absolute inset-0 h-full w-full object-cover transition duration-500"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_28%,rgba(0,0,0,0.74)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="max-w-[45rem] text-base leading-8 text-white/92 sm:text-[1.05rem]">
                  {activeService.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex h-13 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-lg font-bold text-white shadow-[0_14px_28px_rgba(255,111,36,0.28)] transition hover:bg-[var(--color-accent-strong)]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

