"use client";

import { useState } from "react";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";
import { serviceItems } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-data";

function ClockIcon({ className = "" }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", service: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
            Get in Touch
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0f3048] sm:text-5xl lg:text-[3.25rem]">
            We're Here to Help
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#526677]">
            Have a question, need a quote, or want to book a service? Reach out to us using the form below or contact us directly. Our dedicated team is ready to assist you.
          </p>
        </div>

        {/* Form and Map Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Form */}
          <div className="rounded-[2.5rem] bg-white p-8 shadow-[0_20px_60px_rgba(15,48,72,0.06)] sm:p-12">
            <h2 className="text-3xl font-bold text-[#0f3048]">Send us a message</h2>
            <p className="mt-3 text-[#526677]">We typically reply within a few hours.</p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-[#0f3048]">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none transition focus:border-[var(--color-accent)] focus:bg-white focus:ring-1 focus:ring-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-[#0f3048]">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none transition focus:border-[var(--color-accent)] focus:bg-white focus:ring-1 focus:ring-[var(--color-accent)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#0f3048]">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none transition focus:border-[var(--color-accent)] focus:bg-white focus:ring-1 focus:ring-[var(--color-accent)]"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[#0f3048]">Service Required</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#526677] outline-none transition focus:border-[var(--color-accent)] focus:bg-white focus:ring-1 focus:ring-[var(--color-accent)]"
                >
                  <option value="">Select a service...</option>
                  {serviceItems.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#0f3048]">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none transition focus:border-[var(--color-accent)] focus:bg-white focus:ring-1 focus:ring-[var(--color-accent)]"
                ></textarea>
              </div>

              {status === "error" && (
                <p className="text-sm font-semibold text-red-500">{errorMessage}</p>
              )}
              {status === "success" && (
                <p className="text-sm font-semibold text-green-600">Your message has been sent successfully!</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-lg font-bold text-white shadow-lg transition hover:bg-[var(--color-accent-strong)] hover:shadow-[var(--color-accent)]/40 active:scale-95 disabled:opacity-70 disabled:active:scale-100"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(15,48,72,0.06)] lg:h-auto">
            <iframe
              src={siteConfig.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="grayscale filter transition-all hover:grayscale-0 duration-500"
            ></iframe>
          </div>
        </div>

        {/* About Us Brief */}
        <div className="mt-20 flex flex-col items-center justify-center rounded-[1rem] bg-[#f8fafc] p-10 text-center shadow-sm sm:p-16 lg:p-20">
          <h2 className="text-3xl font-extrabold text-[#0f3048] sm:text-4xl">About ServiceFlow</h2>
          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-relaxed text-[#526677]">
            <p>
              At ServiceFlow, we believe that a clean, well-maintained environment is the foundation of a happy home and a productive business. Founded with a commitment to excellence, we have grown into a premier provider of professional cleaning, hospitality, and facility support services.
            </p>
            <p>
              Our team consists of highly trained, background-checked professionals who share our passion for perfection. From meticulous deep cleaning and office maintenance to supplying top-tier waitstaff and chefs for your private events, we tailor our services to meet your exact standards.
            </p>
            <p className="pt-2 text-xl font-semibold text-[var(--color-accent)]">
              Experience the ServiceFlow difference—where quality meets reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
