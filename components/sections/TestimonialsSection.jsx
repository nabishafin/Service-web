"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { testimonials } from "@/lib/testimonials-data";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8">
      <path d="m12 2.7 2.87 5.82 6.43.94-4.65 4.53 1.1 6.4L12 17.34 6.25 20.4l1.1-6.4L2.7 9.46l6.43-.94L12 2.7Z" />
    </svg>
  );
}

function QuoteBadge() {
  return (
    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#ff6017] shadow-sm">
      <span className="text-white text-xl sm:text-2xl font-black leading-none pt-1.5 sm:pt-2 font-serif">&ldquo;</span>
    </span>
  );
}

function BrandMark({ brand }) {
  if (brand === "yelp") {
    return <span className="text-[2rem] font-black tracking-[-0.05em] text-[#2d2f33]">yelp*</span>;
  }

  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[4px] border-[#11395c] text-lg font-black text-[#ef3f34]">
        b
      </span>
      <span className="text-[2rem] font-black tracking-[-0.05em] text-[#11395c]">bimota</span>
    </span>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const syncViewport = () => setIsDesktop(window.innerWidth >= 1024);

    syncViewport();
    window.addEventListener("resize", syncViewport);

    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  const visibleTestimonials = useMemo(() => {
    if (!isDesktop) {
      return [testimonials[activeIndex % testimonials.length]];
    }

    return [
      testimonials[activeIndex % testimonials.length],
      testimonials[(activeIndex + 1) % testimonials.length],
    ];
  }, [activeIndex, isDesktop]);

  return (
    <section className="bg-[var(--color-navy)] py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
            Customer Voice
          </p>
          <h2 className="mx-auto mt-4 text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2rem] lg:text-[2.5rem]">
            Trusted by Homeowners Across the Region
          </h2>
        </div>

        <div className={`mt-14 grid items-stretch gap-8 ${isDesktop ? "lg:grid-cols-2" : ""}`}>
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col rounded-2xl bg-white px-7 py-8 text-[#18344f] shadow-[0_24px_60px_rgba(9,20,32,0.16)] sm:px-8 sm:py-9"
            >
              <div className="flex items-center gap-1.5 text-[var(--color-accent)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path d="m12 2.7 2.87 5.82 6.43.94-4.65 4.53 1.1 6.4L12 17.34 6.25 20.4l1.1-6.4L2.7 9.46l6.43-.94L12 2.7Z" />
                  </svg>
                ))}
              </div>

              <p className="mt-6 grow text-base leading-8 text-[#18344f] sm:text-[1.05rem]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 flex flex-col gap-6 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt}
                      width={testimonial.avatar.width}
                      height={testimonial.avatar.height}
                      className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                    />
                    <QuoteBadge />
                  </div>

                  <div>
                    <p className="text-[1.45rem] font-extrabold tracking-[-0.04em] text-[#18344f]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-lg text-[#7a858d]">{testimonial.role}</p>
                  </div>
                </div>

                <div className="sm:pb-1">
                  <BrandMark brand={testimonial.brand} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              title={testimonial.name}
              onClick={() => setActiveIndex(index)}
              className={`h-3.5 w-3.5 rounded-full transition ${index === activeIndex ? "bg-[var(--color-accent)]" : "bg-[rgba(255,167,111,0.45)] hover:bg-[rgba(255,167,111,0.75)]"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
