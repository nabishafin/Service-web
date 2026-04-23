"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { aboutStats, aboutTabs } from "@/lib/about-data";
import { CheckIcon } from "@/components/ui/Icons";

function AnimatedStat({
  value,
  suffix,
  label,
  start,
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(0);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const frame = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        window.requestAnimationFrame(frame);
      }
    };

    const raf = window.requestAnimationFrame(frame);
    return () => window.cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <div className="text-center">
      <p className="text-[2.5rem] font-medium leading-none tracking-[-0.02em] text-[#18344f] sm:text-[3.5rem]">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-3 text-base text-[#66737d] sm:text-[1.05rem]">{label}</p>
    </div>
  );
}

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission");
  const [hasStartedCount, setHasStartedCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasStartedCount(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const activeContent = useMemo(
    () => aboutTabs.find((tab) => tab.id === activeTab) ?? aboutTabs[0],
    [activeTab]
  );

  return (
    <section id="about" ref={sectionRef} className="bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
          <div className="overflow-hidden rounded-2xl bg-[#eef2f7]">
            <Image
              key={activeContent.id}
              src={activeContent.image.src}
              alt={activeContent.image.alt}
              width={activeContent.image.width}
              height={activeContent.image.height}
              className="h-full w-full object-cover transition duration-500"
            />
          </div>

          <div className="pt-2 min-w-0">
            <p className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Expertise & Experience
            </p>

            <h2 className="mt-4 w-full break-words text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[#18344f] sm:text-[2.5rem] lg:text-[3.25rem]">
              Years of Dedicated Quality Service
            </h2>

            <div className="mt-8 flex flex-row overflow-x-auto border-b border-[#dbe2ea] -mx-6 px-6 sm:mx-0 sm:flex-nowrap sm:px-0">
              {aboutTabs.map((tab) => {
                const isActive = tab.id === activeTab;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`shrink-0 whitespace-nowrap px-6 py-4 text-left text-lg font-bold transition sm:whitespace-normal sm:px-8 sm:text-xl sm:flex-1 sm:text-center ${isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[#18344f] hover:text-[var(--color-accent)]"
                      }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <p className="mt-7 max-w-[52rem] text-lg leading-relaxed text-[#66737d] sm:text-[1.05rem]">
              {activeContent.body}
            </p>

            <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {activeContent.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--color-accent)]">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <p className="text-lg leading-8 text-[#66737d] sm:text-[1.05rem]">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <ul className="mt-18 grid gap-10 border-t border-transparent pt-4 sm:grid-cols-2 lg:mt-22 lg:grid-cols-4">
          {aboutStats.map((stat) => (
            <li key={stat.label}>
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                start={hasStartedCount}
              />
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}
