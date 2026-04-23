"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDownIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { serviceItems } from "@/lib/services-data";

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
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-16">

          {/* Left Column - Content */}
          <div>
            {/* Service Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#dfe5ee] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <Image
                src={service.image.src}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Main Article Content */}
            <div className="space-y-16 lg:space-y-24">
              {/* Introduction Section */}
              <section id="overview">
                <div className=" mt-2  inline-flex items-center gap-2 rounded-full bg-[rgba(255,96,23,0.1)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]  " />
                  Service Overview
                </div>
                <h2 className="mt-6 text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-[#0f3048] sm:text-[2.75rem]">
                  Professional {service.title} for Your Specific Needs
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
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
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
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-bold text-[#0f3048]">Common Questions</h3>
                  <p className="mt-4 text-lg text-[#526677]">
                    Find answers to common inquiries regarding our {service.title.toLowerCase()} solutions.
                  </p>

                  <div className="mt-10 space-y-4">
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
                            className="flex w-full items-center justify-between p-6 text-left"
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
                            <div className="px-6 pb-6 text-base leading-relaxed text-[#526677]">
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

          {/* Right Column - Sidebar */}
          <aside className="lg:sticky lg:top-32 space-y-8 bg-[#0f3048] rounded-2xl">
            {/* Services Navigation */}
            <div className="overflow-hidden rounded-2xl ">
              <div className=" px-8 py-6 text-white bg-[var(--color-accent)]">
                <h3 className="text-xl font-bold">Our Services</h3>
              </div>
              <nav className="p-4">
                <ul className="space-y-1">
                  {serviceItems && serviceItems.length > 0 ? (
                    serviceItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/services/${item.id}`}
                          className={`flex items-center justify-between rounded-xl px-5 py-4 transition-all duration-200 ${item.id === service.id
                            ? "bg-[var(--color-accent)] shadow-inner"
                            : "text-[#526677]  hover:text-[#0f3048]"
                            }`}
                        >
                          <span className="font-bold">{item.title}</span>
                          <ChevronDownIcon className="-rotate-90 h-4 w-4 opacity-40" />
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="p-4 text-center text-sm text-[#526677]">No services found</li>
                  )}
                </ul>
              </nav>
            </div>

            {/* Quick Support Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-[var(--color-accent)] p-8 text-white">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
              <h4 className="text-xl font-bold">Need Urgent Help?</h4>
              <p className="mt-2 text-white/80 text-sm">Our team is available 24/7 for emergency requests.</p>
              
              <div className="mt-6 space-y-4">
                <a href="tel:+11245678900" className="flex items-center gap-3 text-lg font-black transition-transform hover:scale-105">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--color-accent)]">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  (124) 567 8900
                </a>
                
                <a href="https://wa.me/1245678900" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-black transition-transform hover:scale-105">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
