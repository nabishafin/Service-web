"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation & Booking",
    description:
      "Start by reaching out to ServiceFlow. We discuss your specific needs and schedule a service time that fits perfectly with your home or business schedule.",
  },
  {
    number: "02",
    title: "On-Site Assessment",
    description:
      "Our professional team arrives promptly to evaluate the space and identify any specific requirements or areas needing extra attention to ensure a perfect result.",
  },
  {
    number: "03",
    title: "Professional Service",
    description:
      "We execute the service using industry-leading equipment and specialized techniques, whether it's deep cleaning, hospitality support, or facility maintenance.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "We believe a job isn't done until it's perfect. Our supervisors conduct a thorough quality check to ensure every standard of excellence has been met.",
  },
  {
    number: "05",
    title: "Client Satisfaction",
    description:
      "We walk through the results with you to ensure complete satisfaction. Your feedback is vital to maintaining our premium service standards.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftCardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function OurProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            How We Work
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[#18344f] sm:text-[2.5rem] lg:text-4xl">
            Streamlined Process for Quality Results
          </h2>

          {/* CTA Button */}
          <motion.a
            href="#quote"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_30px_rgba(255,111,36,0.35)] transition-all hover:bg-[var(--color-accent-strong)] hover:shadow-[0_12px_40px_rgba(255,111,36,0.45)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get a Free Quote
          </motion.a>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative mt-16 lg:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Vertical Line - Hidden on mobile, visible on lg */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--color-accent)] via-[#e2e8f0] to-[#e2e8f0] lg:block" />

          {/* Mobile Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[#e2e8f0] to-[#e2e8f0] lg:hidden" />

          <ol className="relative space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 1;

              return (
                <li
                  key={step.number}
                  className={`relative flex items-center ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col lg:flex-row`}
                >
                  {/* Card */}
                  <motion.div
                    className={`w-full lg:w-[calc(50%-40px)] ${isLeft ? "lg:pr-0" : "lg:pl-0"
                      } ${isLeft ? "lg:text-right" : "lg:text-left"} pl-12 lg:pl-0`}
                    variants={isLeft ? leftCardVariants : rightCardVariants}
                  >
                    <div
                      className={`flex min-h-[200px] flex-col rounded-2xl bg-[#0f3048] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] sm:p-8 ${isLeft ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"
                        } max-w-[34rem] ${isLeft ? "lg:ml-auto" : "lg:mr-auto"}`}
                    >
                      {/* Step Number */}
                      <span className="text-3xl font-bold text-[var(--color-accent)] sm:text-4xl">
                        {step.number}
                      </span>

                      {/* Title */}
                      <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 grow text-sm font-light leading-relaxed text-[#94a3b8] sm:text-[0.95rem]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Timeline Dot - Center for desktop, left for mobile */}
                  <motion.div
                    className="absolute left-4 top-8 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-white lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
                    variants={dotVariants}
                  >
                    <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  </motion.div>

                  {/* Timeline Check Icon - Shows progress (hidden on mobile dots) */}
                  <motion.div
                    className="absolute left-4 top-8 z-10 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#0f3048] shadow-[0_4px_16px_rgba(15,48,72,0.4)] lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-y-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      delay: 0.3 + index * 0.15,
                      duration: 0.4,
                      ease: "backOut",
                    }}
                  >
                    <CheckIcon className="h-4 w-4 text-white" />
                  </motion.div>

                  {/* Empty space for other side on desktop */}
                  <div className="hidden w-[calc(50%-40px)] lg:block" />
                </li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
