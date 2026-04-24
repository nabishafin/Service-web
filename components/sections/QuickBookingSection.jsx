"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export function QuickBookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: ""
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setStatus("loading");
    const toastId = toast.loading("Sending your request...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.fullName,
          service: "Quick Call Back Request",
          message: `User requested a quick callback. Phone: ${formData.phone}`
        })
      });

      if (response.ok) {
        toast.success("Request sent! We will call you back soon.", { id: toastId });
        setStatus("idle");
        setFormData({ fullName: "", phone: "" });
      } else {
        toast.error("Something went wrong. Please try again.", { id: toastId });
        setStatus("idle");
      }
    } catch (error) {
      console.error("Quick booking error:", error);
      toast.error("Failed to send request. Please try again.", { id: toastId });
      setStatus("idle");
    }
  };

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="rounded-2xl border border-[#d8deea] bg-[#f3f5fc] px-6 py-6 shadow-[0_20px_50px_rgba(24,52,79,0.08)] sm:px-8 sm:py-7 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {/* Heading */}
            <div className="max-w-full lg:max-w-[25rem]">
              <h2 className="text-[1.5rem] font-extrabold leading-[1.15] tracking-tight text-[#18344f] sm:text-[1.75rem] lg:text-3xl">
                Professional Service Booked in 60 Seconds
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 md:flex-row md:items-stretch md:gap-3 lg:max-w-[43rem]">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-full border border-[#edf0f5] bg-white px-5 py-3.5 text-sm text-[#18344f] outline-none placeholder:text-[#6f7c86] focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] md:h-14 md:flex-1 md:py-0"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full rounded-full border border-[#edf0f5] bg-white px-5 py-3.5 text-sm text-[#18344f] outline-none placeholder:text-[#6f7c86] focus:border-[#94a3b8] focus:ring-1 focus:ring-[#94a3b8] md:h-14 md:flex-1 md:py-0"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(255,111,36,0.28)] transition hover:bg-[var(--color-accent-strong)] md:h-14 md:w-auto md:py-0 md:text-base disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
