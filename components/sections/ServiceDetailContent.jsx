"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@/components/ui/Icons";

const faqs = [
  {
    question: "What plumbing services do you offer?",
    answer: "We offer a wide range of plumbing services including emergency repairs, pipe repair, drain cleaning, leak detection, water heater installation, and complete kitchen and bathroom plumbing solutions.",
  },
  {
    question: "How quickly can I expect a plumber to arrive?",
    answer: "We offer 24/7 emergency services and aim to dispatch a certified plumber to your location as quickly as possible, often within the hour for urgent issues.",
  },
  {
    question: "Do you provide free estimates for your work?",
    answer: "Yes, we provide upfront pricing and free estimates for most standard plumbing jobs so you know the cost before we begin any work.",
  },
  {
    question: "How much will my plumbing service cost?",
    answer: "The cost varies depending on the complexity of the job and materials needed. However, we always provide clear, honest pricing with no hidden fees.",
  },
  {
    question: "Why should I hire a professional plumber instead?",
    answer: "Professional plumbers have the training, tools, and experience to correctly diagnose and fix issues, preventing costly water damage and ensuring the work meets safety codes.",
  },
];

export function ServiceDetailContent({ service }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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

            <div className="mt-10 lg:mt-12">
              <h2 className="text-[2rem] font-bold tracking-tight text-[#18344f] sm:text-[2.5rem]">
                Emergency Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#66737d] sm:text-lg">
                Plumbing emergencies don&apos;t wait for convenient times. Quality service and maintenance are essential for a healthy home or business environment. Our specialized plumbing team is available 24/7 to tackle your most urgent issues safely and efficiently.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#66737d] sm:text-lg">
                Whether it&apos;s a burst pipe, severe leak, or stubborn blockage, we have the tools and expertise to quickly locate the problem and implement reliable repairs to minimize damage and restore comfort to your space.
              </p>

              <h2 className="mt-12 text-[2rem] font-bold tracking-tight text-[#18344f] sm:text-[2.5rem]">
                Exceptional Service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#66737d] sm:text-lg">
                At PlumbFlow, we believe that exceptional plumbing service goes beyond just fixing the immediate issue. We are committed to transparency, reliability, and delivering solutions that last. We stand by the quality of our work.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "Fast & Professional Team",
                  "Upfront Pricing",
                  "Best Equipment Used",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(255,96,23,0.15)] text-[var(--color-accent)]">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span className="text-base font-medium text-[#18344f] sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-[2rem] font-bold tracking-tight text-[#18344f] sm:text-[2.5rem]">
                Everything We Offer
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#66737d] sm:text-lg">
                From minor leaks to major pipe bursts, our team handles it all with precision and care. We are dedicated to delivering top-quality services that exceed your expectations. Our comprehensive offerings ensure you have a trusted partner for all your plumbing needs.
              </p>
              <ul className="mt-6 flex flex-col gap-4 pl-2">
                {[
                  "24/7 Emergency Plumber: Fast response to leaks and overflows to prevent water damage and restore peace of mind.",
                  "Pipe Repairs & Installations: Professional repair and replacement of damaged pipes, ensuring optimal water flow and preventing future issues.",
                  "Upfront Pricing & No Hidden Fees: Transparent estimates before any work begins, so you know exactly what to expect with no surprises.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-base text-[#66737d] sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[#66737d] sm:text-lg">
                With years of experience, we pride ourselves on a job well done. Customer satisfaction is our priority, and we don&apos;t consider a job complete until you are 100% happy. We use only the best materials and proven techniques to guarantee a long-lasting fix.
              </p>
            </div>

            {/* FAQs Accordion */}
            <div className="mt-16 border-t border-[#e2e8f0] pt-12">
              <h2 className="text-[2rem] font-bold tracking-tight text-[#18344f] sm:text-[2.5rem]">
                Your Plumbing Questions Answered
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#66737d] sm:text-lg">
                We understand that dealing with plumbing issues can be stressful. That&apos;s why we&apos;ve compiled a list of frequently asked questions to help provide clarity and peace of mind.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-6 transition-all duration-300"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-5 text-left"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="text-lg font-bold text-[#18344f]">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`h-5 w-5 shrink-0 text-[#66737d] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-base text-[#66737d]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:sticky lg:top-32">
            <div className="rounded-2xl bg-[#0f3048] p-6 shadow-[0_20px_60px_rgba(15,48,72,0.15)] sm:p-9">
              <h3 className="text-center text-xl font-bold tracking-tight text-white sm:text-[1.7rem]">
                Get in Touch with Us
              </h3>

              <form className="mt-7 flex flex-col gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 text-sm text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 text-sm text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 text-sm text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
                />
                <input
                  type="text"
                  placeholder="Service areas"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 text-sm text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
                />
                <textarea
                  placeholder="Type your message"
                  rows={4}
                  className="w-full resize-none rounded-[1.5rem] border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 text-sm text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8] sm:px-6 sm:py-4 sm:text-[0.95rem]"
                />
                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-[#ff6017] px-8 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,96,23,0.3)] transition hover:bg-[#e85614] sm:py-3.5 sm:text-[1rem]"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
