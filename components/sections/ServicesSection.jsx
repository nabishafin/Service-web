"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceItems } from "@/lib/services-data";

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

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("cleaning");
  const [activeServiceId, setActiveServiceId] = useState("house-cleaning");

  // Group services for better navigation
  const filteredServices = useMemo(() => {
    if (activeTab === "cleaning") {
      return serviceItems.slice(0, 8); // First 8 are cleaning
    }
    return serviceItems.slice(8); // Rest are hospitality
  }, [activeTab]);

  const activeService = useMemo(
    () => serviceItems.find((service) => service.id === activeServiceId) ?? serviceItems[0],
    [activeServiceId]
  );

  return (
    <section id="services" className="bg-[#f8fafc] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
              Our Expertise
            </p>
            <h2 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[#0f3048] sm:text-[2.5rem]">
              Premium Solutions for Every Need
            </h2>
          </div>
          
          <Link
            href="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-base font-bold text-white shadow-[0_12px_24px_rgba(255,111,36,0.15)] transition-all hover:bg-[var(--color-accent-strong)] active:scale-95"
          >
            View All Services
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Category Toggles */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl bg-gray-100 p-1.5">
            <button
              onClick={() => {
                setActiveTab("cleaning");
                setActiveServiceId(serviceItems[0].id);
              }}
              className={`rounded-lg px-6 py-2.5 text-base font-bold transition-all ${
                activeTab === "cleaning"
                  ? "bg-white text-[var(--color-accent)] shadow-sm"
                  : "text-[#526677] hover:text-[#0f3048]"
              }`}
            >
              Cleaning Services
            </button>
            <button
              onClick={() => {
                setActiveTab("hospitality");
                setActiveServiceId(serviceItems[8].id);
              }}
              className={`rounded-lg px-6 py-2.5 text-base font-bold transition-all ${
                activeTab === "hospitality"
                  ? "bg-white text-[var(--color-accent)] shadow-sm"
                  : "text-[#526677] hover:text-[#0f3048]"
              }`}
            >
              Hospitality & Support
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[400px_1fr] lg:items-center">
          {/* Left Column - List */}
          <div className="space-y-2">
            {filteredServices.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group flex w-full items-center justify-between rounded-xl p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/10 translate-x-3"
                      : "bg-white border border-gray-100 text-[#526677] hover:border-[var(--color-accent)]/30 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg font-bold">{service.title}</span>
                  <ArrowRightIcon className={`h-4 w-4 transition-transform ${isActive ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column - Large Interactive Card */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[#0f3048] shadow-2xl lg:aspect-auto lg:h-[550px]">
            <Image
              key={activeService.id}
              src={activeService.image.src}
              alt={activeService.image.alt}
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f3048] via-[#0f3048]/20 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{activeService.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
                    {activeService.description}
                  </p>
                  <Link
                    href={`/services/${activeService.id}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                    className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-[var(--color-accent-strong)] hover:shadow-[var(--color-accent)]/30 active:scale-95"
                  >
                    Explore Service Details
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
