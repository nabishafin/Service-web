"use client";

import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact-us" className="relative flex flex-col">
      {/* Top Dark Background Segment */}
      <div className="relative h-[25rem] w-full bg-[#0a1622] sm:h-[28rem]">
        <Image
          src="/images/EM4AaWEyJ9wPPFWwzQyNNn56cU.png"
          alt="Contact background"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-start px-4 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#ff6017]">
            Contact Us
          </p>
          <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.75rem] lg:text-[3.2rem]">
            Book Expert Plumbing<br />Service Today!
          </h2>
        </div>
      </div>

      {/* Bottom Light Background Segment */}
      <div className="relative bg-[#f4f7f9] pb-20 pt-6 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="relative -mt-[8rem] flex flex-col-reverse gap-12 sm:-mt-[11rem] lg:grid lg:grid-cols-[1fr_450px] lg:items-start lg:gap-16 xl:grid-cols-[1.2fr_500px]">
            
            {/* Left Content Column */}
            <div className="lg:pt-[16rem]">
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-[#18344f] sm:text-[2rem]">
                24/7 Emergency Plumbing Service
              </h3>
              <p className="mt-6 text-base font-semibold leading-relaxed text-[#18344f] lg:pr-10">
                Don't let plumbing issues disrupt your home! FixFlow offers 24/7 emergency plumbing services, ensuring fast, professional, and reliable repairs. Call now and get a licensed plumber at your doorstep!
              </p>
              <p className="mt-5 text-[0.95rem] font-light leading-relaxed text-[#66737d] lg:pr-10">
                We understand the stress and potential damage a plumbing emergency can cause, which is why we prioritize quick response times, quality repairs, and customer satisfaction. Whether it's a small leak or a major flooding issue, our licensed professionals arrive fully equipped.
              </p>
            </div>

            {/* Right Form Column */}
            <div className="relative z-20 mx-auto w-full max-w-[500px] rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(15,48,72,0.08)] sm:p-10 lg:mx-0">
              <h3 className="text-center text-2xl font-bold tracking-tight text-[#18344f] sm:text-[1.7rem]">
                Get in Touch with Us
              </h3>
              
              <form className="mt-8 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-6 py-3.5 text-[0.95rem] text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-6 py-3.5 text-[0.95rem] text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8]"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-6 py-3.5 text-[0.95rem] text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8]"
                />
                <input
                  type="text"
                  placeholder="Service areas"
                  className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-6 py-3.5 text-[0.95rem] text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8]"
                />
                <textarea
                  placeholder="Type your message"
                  rows={4}
                  className="w-full resize-none rounded-[1.5rem] border border-[#e2e8f0] bg-[#f8fafc] px-6 py-4 text-[0.95rem] text-[#18344f] outline-none transition focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] placeholder:text-[#94a3b8]"
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#ff6017] px-8 py-3.5 text-[1rem] font-bold text-white shadow-[0_12px_30px_rgba(255,96,23,0.3)] transition hover:bg-[#e85614]"
                >
                  Submit Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
