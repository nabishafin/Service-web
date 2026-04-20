import Image from "next/image";
import { CheckIcon } from "@/components/ui/icons";
import { recognitionBadges } from "@/lib/site-data";

const avatarItems = [
  { name: "JA", color: "from-sky-400 to-sky-600" },
  { name: "MK", color: "from-orange-400 to-orange-600" },
  { name: "AL", color: "from-emerald-400 to-emerald-600" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-44px)] overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/6hZX53cd2BQPBn5f2U9LrdEHxw.png"
        alt="Plumber repairing a kitchen faucet"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,14,24,0.92)_0%,rgba(7,14,24,0.76)_32%,rgba(7,14,24,0.22)_63%,rgba(7,14,24,0.06)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-44px)] max-w-7xl items-center px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-lg font-bold text-orange-400 sm:text-xl">Your Trusted Plumbing Experts</p>

          <h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Fast Solutions for Plumbing Problems
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            From minor leaks to major plumbing emergencies, our expert team is ready to deliver fast,
            reliable affordable solutions ensuring.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-4 text-lg font-bold text-white shadow-[0_18px_40px_rgba(255,111,36,0.4)] transition hover:bg-[var(--color-accent-strong)]"
            >
              Get a Free Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/65 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact Us Today
            </a>
          </div>

          <div className="mt-16 flex max-w-md items-center gap-4 rounded-[32px] border border-white/25 bg-white/10 px-5 py-4 shadow-[0_30px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="flex">
              {avatarItems.map((item, index) => (
                <span
                  key={item.name}
                  className={`-ml-2 inline-flex h-13 w-13 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${item.color} text-sm font-bold text-white first:ml-0`}
                  style={{ zIndex: avatarItems.length - index }}
                >
                  {item.name}
                </span>
              ))}
            </div>

            <div className="min-w-0">
              <p className="text-4xl font-extrabold leading-none">130K +</p>
              <p className="mt-2 text-base font-medium text-white/80">Customer Review</p>
            </div>

            <span className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
              <CheckIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden w-full max-w-[40rem] rounded-tl-[36px] border border-white/20 bg-white/16 p-6 shadow-2xl backdrop-blur-md xl:block">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-2xl font-bold leading-tight">Recognized for Excellence in Plumbing</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="rounded-2xl bg-white px-5 py-3 text-center text-lg font-semibold text-slate-900">Free Template</span>
            <span className="rounded-2xl bg-blue-600 px-5 py-3 text-center text-lg font-semibold text-white">Free More Template</span>
            <span className="rounded-2xl bg-white px-5 py-3 text-center text-lg font-semibold text-slate-900">Made in Framer</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-3">
          {recognitionBadges.map((badge) => (
            <div
              key={badge}
              className="flex aspect-square items-center justify-center rounded-3xl border border-white/20 bg-slate-950/15 px-3 text-center text-sm font-bold text-white"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

