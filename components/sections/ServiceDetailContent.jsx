"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDownIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { serviceItems } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-data";

const faqs = [
  {
    question: "How do I book a service?",
    answer: "You can book easily through our website contact form, or by calling our 24/7 support line. We'll discuss your needs and schedule a time that works for you.",
  },
  {
    question: "Are your staff professionally trained?",
    answer: "Yes, all our staff members undergo rigorous background checks and specialized training in their respective fields (cleaning, catering, or hospitality) to ensure the highest standards.",
  },
  {
    question: "Do you provide your own equipment?",
    answer: "For cleaning services, we provide all professional-grade supplies and equipment. For hospitality and catering, we coordinate with you on specific venue requirements.",
  },
  {
    question: "Is your service available for emergencies?",
    answer: "Yes, we offer 24/7 emergency cleaning and support services. Contact our hotline for immediate assistance.",
  },
];

export function ServiceDetailContent({ service }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Force scroll to top when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [service.id]);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12">
        {/* Main Content Area - Now Centered and Single Column */}
        <div className="flex flex-col gap-10">

          {/* Service Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-[#dfe5ee] shadow-lg">
            <Image
              src={service.image.src}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-4xl w-full">
            {/* Main Article Content */}
            <div className="space-y-12 lg:space-y-20">
              {/* Introduction Section */}
              <section id="overview">
                <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,96,23,0.1)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Service Overview
                </div>
                <h2 className="mt-5 text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-[#0f3048] sm:text-[2.25rem]">
                  Professional {service.title} Solutions
                </h2>
                <div className="mt-6 space-y-6 text-base leading-relaxed text-[#526677] sm:text-lg">
                  <p className="first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-black first-letter:text-[#0f3048]">
                    {service.fullDescription || service.description}
                  </p>
                </div>
              </section>

              {/* Key Features Grid */}
              {service.features && (
                <section id="features">
                  <h3 className="text-xl font-bold text-[#0f3048] sm:text-2xl">Key Features & Inclusions</h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg border border-[#e2e8f0] bg-white p-4 transition-all hover:border-[var(--color-accent)]/30 hover:shadow-sm">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(255,96,23,0.1)] text-[var(--color-accent)]">
                          <CheckIcon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold text-[#0f3048] sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Process Section - Clean Vertical Steps */}
              {service.process && (
                <section id="process" className="relative">
                  <div className="max-w-2xl">
                    <span className="text-[0.75rem] font-bold uppercase tracking-widest text-[var(--color-accent)]">How We Work</span>
                    <h3 className="mt-2 text-2xl font-extrabold text-[#0f3048] sm:text-3xl">Our Service Process</h3>
                    <p className="mt-3 text-base text-[#526677]">
                      We follow a rigorous, systematic approach to ensure every job is completed to our highest standards.
                    </p>
                  </div>

                  <div className="mt-8 space-y-5">
                    {service.process.map((step, index) => (
                      <div key={index} className="relative flex gap-5 sm:gap-8 group">
                        {/* Connecting Line */}
                        {index !== service.process.length - 1 && (
                          <div className="absolute left-[19px] top-[40px] h-[calc(100%+20px)] w-[2px] bg-gradient-to-b from-[var(--color-accent)] to-[#e2e8f0]/30" />
                        )}

                        {/* Step Number Dot */}
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--color-accent)] bg-white font-black text-[var(--color-accent)] shadow-[0_6px_15px_rgba(255,96,23,0.1)] transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-105">
                          {index + 1}
                        </div>

                        {/* Step Content Card */}
                        <div className="flex-1 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-white hover:shadow-lg">
                          <h4 className="text-lg font-bold text-[#0f3048]">{step.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-[#526677] sm:text-base">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Quick Support - Integrated Premium Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-[#0f3048] p-8 text-white shadow-xl sm:p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
                  <div>
                    <h4 className="text-xl font-bold sm:text-2xl">Need Immediate Assistance?</h4>
                    <p className="mt-2 text-white/60 text-sm max-w-sm sm:text-base">Our expert team is on standby 24/7 to handle your emergency requests with precision.</p>
                  </div>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
                    <a href={`tel:${siteConfig.emergencyPhone.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-7 py-3 text-base font-black transition hover:bg-[var(--color-accent-strong)] active:scale-95">
                      <PhoneIcon className="h-4 w-4" />
                      {siteConfig.emergencyPhone}
                    </a>
                    
                    <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hello! I'm interested in your services.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base font-black backdrop-blur-sm transition hover:bg-white/20 active:scale-95">
                      <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              {service.benefits && (
                <section id="benefits">
                  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0f3048] sm:text-3xl">Why Choose Our {service.title}?</h3>
                      <p className="mt-3 text-base text-[#526677] sm:text-lg">
                        We combine industry expertise with high-quality equipment to deliver results that exceed expectations.
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                            <span className="text-sm font-medium text-[#0f3048] sm:text-base">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0f3048]/20 to-transparent" />
                      <img
                        src={service.image.src}
                        alt={service.image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* FAQs Accordion */}
              <section id="faqs" className="border-t border-[#e2e8f0] pt-12">
                <div className="mx-auto max-w-3xl">
                  <h3 className="text-2xl font-bold text-[#0f3048] text-center sm:text-3xl">Common Questions</h3>
                  <p className="mt-3 text-base text-[#526677] text-center sm:text-lg">
                    Everything you need to know about our {service.title.toLowerCase()} solutions.
                  </p>

                  <div className="mt-8 space-y-3">
                    {(service.faqs || faqs).map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? "border-[var(--color-accent)] bg-white shadow-lg" : "border-[#e2e8f0] bg-[#f8fafc]"
                            }`}
                        >
                          <button
                            type="button"
                            className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                            onClick={() => toggleFaq(index)}
                          >
                            <span className={`text-base font-bold sm:text-lg ${isOpen ? "text-[var(--color-accent)]" : "text-[#0f3048]"}`}>
                              {faq.question}
                            </span>
                            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-[var(--color-accent)] bg-[var(--color-accent)] text-white" : "border-[#e2e8f0] text-[#0f3048]"
                              }`}>
                              <ChevronDownIcon className="h-4 w-4" />
                            </div>
                          </button>
                          <div
                            className={`transition-all duration-300 ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                              }`}
                          >
                            <div className="px-5 pb-5 text-sm leading-relaxed text-[#526677] sm:px-6 sm:pb-6 sm:text-base">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
