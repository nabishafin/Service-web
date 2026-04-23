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
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12">
        {/* Main Content Area - Now Centered and Single Column */}
        <div className="flex flex-col gap-12">

          {/* Service Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-[#dfe5ee] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <Image
              src={service.image.src}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-4xl w-full">
            {/* Main Article Content */}
            <div className="space-y-16 lg:space-y-24">
              {/* Introduction Section */}
              <section id="overview">
                <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,96,23,0.1)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Service Overview
                </div>
                <h2 className="mt-6 text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-[#0f3048] sm:text-[3rem]">
                  Professional {service.title} Solutions
                </h2>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#526677]">
                  <p className="first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-black first-letter:text-[#0f3048]">
                    {service.fullDescription || service.description}
                  </p>
                </div>
              </section>

              {/* Key Features Grid */}
              {service.features && (
                <section id="features">
                  <h3 className="text-2xl font-bold text-[#0f3048] sm:text-3xl">Key Features & Inclusions</h3>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5 transition-all hover:border-[var(--color-accent)]/30 hover:shadow-md">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,96,23,0.1)] text-[var(--color-accent)]">
                          <CheckIcon className="h-5 w-5" />
                        </div>
                        <span className="font-semibold text-[#0f3048]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Process Section - Clean Vertical Steps */}
              {service.process && (
                <section id="process" className="relative">
                  <div className="max-w-2xl">
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">How We Work</span>
                    <h3 className="mt-2 text-3xl font-extrabold text-[#0f3048] sm:text-4xl">Our Service Process</h3>
                    <p className="mt-4 text-lg text-[#526677]">
                      We follow a rigorous, systematic approach to ensure every job is completed to our highest standards.
                    </p>
                  </div>

                  <div className="mt-8 space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="relative flex gap-6 sm:gap-10 group">
                        {/* Connecting Line */}
                        {index !== service.process.length - 1 && (
                          <div className="absolute left-[23px] top-[48px] h-[calc(100%+24px)] w-[3px] bg-gradient-to-b from-[var(--color-accent)] to-[#e2e8f0]/30" />
                        )}

                        {/* Step Number Dot */}
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[var(--color-accent)] bg-white font-black text-[var(--color-accent)] shadow-[0_8px_20px_rgba(255,96,23,0.15)] transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110">
                          {index + 1}
                        </div>

                        {/* Step Content Card */}
                        <div className="flex-1 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-white hover:shadow-xl">
                          <h4 className="text-xl font-bold text-[#0f3048]">{step.title}</h4>
                          <p className="mt-2 text-base leading-relaxed text-[#526677]">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Quick Support - Integrated Premium Card */}
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#0f3048] p-10 text-white shadow-2xl">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
                  <div>
                    <h4 className="text-2xl font-bold">Need Immediate Assistance?</h4>
                    <p className="mt-2 text-white/60 text-base max-w-sm">Our expert team is on standby 24/7 to handle your emergency requests with precision.</p>
                  </div>
                  
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
                    <a href={`tel:${siteConfig.emergencyPhone.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-lg font-black transition hover:bg-[var(--color-accent-strong)] hover:scale-105">
                      <PhoneIcon className="h-5 w-5" />
                      {siteConfig.emergencyPhone}
                    </a>
                    
                    <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hello! I'm interested in your services.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-black backdrop-blur-sm transition hover:bg-white/20 hover:scale-105">
                      <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              {service.benefits && (
                <section id="benefits">
                  <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-[#0f3048]">Why Choose Our {service.title}?</h3>
                      <p className="mt-4 text-lg text-[#526677]">
                        We combine industry expertise with high-quality equipment to deliver results that exceed expectations.
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                            <span className="font-medium text-[#0f3048]">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0f3048]/20 to-transparent" />
                      <img
                        src={service.image.src}
                        alt={service.image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* FAQs Accordion */}
              <section id="faqs" className="border-t border-[#e2e8f0] pt-16">
                <div className="mx-auto max-w-3xl">
                  <h3 className="text-3xl font-bold text-[#0f3048] text-center">Common Questions</h3>
                  <p className="mt-4 text-lg text-[#526677] text-center">
                    Everything you need to know about our {service.title.toLowerCase()} solutions.
                  </p>

                  <div className="mt-10 space-y-4">
                    {(service.faqs || faqs).map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? "border-[var(--color-accent)] bg-white shadow-xl" : "border-[#e2e8f0] bg-[#f8fafc]"
                            }`}
                        >
                          <button
                            type="button"
                            className="flex w-full items-center justify-between p-6 text-left sm:p-8"
                            onClick={() => toggleFaq(index)}
                          >
                            <span className={`text-lg font-bold ${isOpen ? "text-[var(--color-accent)]" : "text-[#0f3048]"}`}>
                              {faq.question}
                            </span>
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-[var(--color-accent)] bg-[var(--color-accent)] text-white" : "border-[#e2e8f0] text-[#0f3048]"
                              }`}>
                              <ChevronDownIcon className="h-5 w-5" />
                            </div>
                          </button>
                          <div
                            className={`transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                              }`}
                          >
                            <div className="px-6 pb-6 text-base leading-relaxed text-[#526677] sm:px-8 sm:pb-8">
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
