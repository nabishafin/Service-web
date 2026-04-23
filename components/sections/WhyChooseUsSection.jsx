"use client";

import Image from "next/image";
import { useState } from "react";

const reasons = [
  {
    id: 1,
    title: "Skilled & Certified Professionals",
    description: "Our team consists of background-checked, highly trained professionals with extensive industry experience.",
    icon: (
      <Image src="/images/fSXw5NAa4SYRsOryJB42DNb1U.svg" alt="Skilled & Certified Professionals" width={52} height={52} className="object-contain" />
    ),
  },
  {
    id: 2,
    title: "Transparent & Honest Pricing",
    description: "We provide clear, upfront quotes with no hidden fees. You always know exactly what to expect from ServiceFlow.",
    icon: (
      <Image src="/images/JfBzkZnCKP2TNf96vcQLi6bEY.svg" alt="Clear & Honest Pricing" width={52} height={52} className="object-contain" />
    ),
  },
  {
    id: 3,
    title: "24/7 Premium Support",
    description: "We understand that needs can arise at any time, which is why we offer around-the-clock emergency service and support.",
    icon: (
      <Image src="/images/Eem3jlg3FPNI5ba8uZlajCzw.svg" alt="24/7 Emergency Services" width={52} height={52} className="object-contain" />
    ),
  },
];

export function WhyChooseUsSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            The ServiceFlow Advantage
          </p>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[#18344f] sm:text-[2.5rem] lg:text-4xl">
            Why Clients Prefer Our Professional Expertise
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image & Video Block */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video shadow-[0_8px_30px_rgba(0,0,0,0.12)] lg:self-center">
            {!isVideoPlaying ? (
              <>
                <Image
                  src="/images/Kpvz8XbHV38RHiTdldTScmM.jpg"
                  alt="Service professionals at work"
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    type="button"
                    onClick={() => setIsVideoPlaying(true)}
                    className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1.5 h-8 w-8 text-[#ff6017]">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/VCPGMjCW0is?autoplay=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <ul className="flex flex-col gap-10 lg:pl-10">
            {reasons.map((reason) => (
              <li key={reason.id} className="flex items-start gap-7">
                <div className="flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-full bg-[#f4f7f9]">
                  {reason.icon}
                </div>
                <div className="mt-1">
                  <h3 className="text-lg font-semibold tracking-tight text-[#18344f]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-base font-light text-[#66737d] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
