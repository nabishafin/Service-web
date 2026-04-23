import Image from "next/image";
import { CheckIcon } from "@/components/ui/Icons";

const avatarItems = [
  { type: "image", src: "/images/JcrnwGYRV1uMCIgxw5KS2EzOx0.png", alt: "Happy customer" },
  { type: "initial", label: "C", color: "from-[#cf915f] to-[#6f4832]" },
  { type: "initial", label: "R", color: "from-[#c9e3e8] to-[#5a7a80]" },
];

function RecognitionPanel() {
  return (
    <div className="absolute bottom-0 right-0 hidden w-full max-w-[33rem] rounded-tl-2xl border border-white/35 bg-[linear-gradient(90deg,rgba(201,194,189,0.62)_0%,rgba(44,63,90,0.82)_100%)] px-6 pb-5 pt-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-[10px] xl:block">
      <p className="max-w-[28rem] text-[1.1rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
        Recognized for Excellence in Professional Cleaning & Hospitality!
      </p>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-[2px] border-[#111827] bg-[#f8f6f1] shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[2px] border-[#111827] bg-white text-center">
            <div className="leading-none">
              <p className="text-[7px] font-black uppercase tracking-[0.12em] text-[#111827]">The</p>
              <p className="mt-0.5 text-[12px] font-black uppercase text-[#111827]">Best</p>
              <p className="mt-0.5 text-[9px] font-black uppercase text-[#111827]">Choice</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-[68px] w-[56px] flex-col items-center overflow-hidden rounded-[5px] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
          <div className="flex h-[14px] w-full items-center justify-center bg-[#111827] text-[9px] font-black text-white">G</div>
          <div className="mt-2 text-center leading-none text-[#111827]">
            <p className="text-[9px] font-black">Users</p>
            <p className="mt-0.5 text-[9px] font-black">Love Us</p>
          </div>
          <div className="mt-auto w-full bg-[#eceff4] py-0.5 text-center text-[9px] font-black text-[#111827]">2024</div>
          <div className="absolute bottom-4 flex gap-0.5">
            <span className="h-[4px] w-[9px] rounded-full bg-[#ef6a1f]" />
            <span className="h-[4px] w-[9px] rounded-full bg-[#ef6a1f]" />
            <span className="h-[4px] w-[9px] rounded-full bg-[#ef6a1f]" />
          </div>
        </div>

        <div className="relative flex h-[68px] w-[60px] items-center justify-center">
          <div
            className="absolute inset-x-[6px] bottom-0 h-[12px] bg-[#f4a61d]"
            style={{ clipPath: "polygon(8% 0, 46% 0, 36% 100%, 0 100%)" }}
          />
          <div
            className="absolute inset-x-[21px] bottom-0 h-[12px] bg-[#f4a61d]"
            style={{ clipPath: "polygon(54% 0, 92% 0, 100% 100%, 64% 100%)" }}
          />
          <div
            className="relative flex h-[57px] w-[48px] flex-col items-center justify-center border-2 border-[#f4a61d] bg-[#17324b] text-center text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
            style={{ clipPath: "polygon(50% 0, 90% 18%, 90% 72%, 50% 100%, 10% 72%, 10% 18%)" }}
          >
            <p className="text-[5px] font-bold uppercase tracking-[0.14em] text-[#f4d36a]">Labor Day</p>
            <p className="mt-0.5 text-[12px] font-black uppercase leading-none">Sale</p>
          </div>
        </div>

        <div className="relative flex h-[68px] w-[60px] items-center justify-center">
          <div
            className="absolute bottom-[6px] left-[5px] h-[13px] w-[16px] bg-[#d7dbe5]"
            style={{ clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)" }}
          />
          <div
            className="absolute bottom-[6px] right-[5px] h-[13px] w-[16px] bg-[#d7dbe5]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 22% 100%)" }}
          />
          <div
            className="relative flex h-[58px] w-[48px] flex-col items-center justify-center border-2 border-[#d06d36] bg-white text-center shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
            style={{ clipPath: "polygon(50% 0, 90% 16%, 90% 84%, 50% 100%, 10% 84%, 10% 16%)" }}
          >
            <p className="text-[9px] font-black italic text-[#2d5f97]">Premium</p>
            <p className="mt-0.5 text-[7px] font-black text-[#d06d36]">100%</p>
            <p className="mt-0.5 text-[5px] font-bold uppercase tracking-[0.06em] text-[#6b7280]">Premium Quality</p>
          </div>
        </div>

        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/25 bg-[rgba(255,255,255,0.28)] shadow-[0_6px_18px_rgba(0,0,0,0.14)]">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/70 text-center text-white/90">
            <div className="leading-none">
              <p className="text-[5px] font-bold uppercase tracking-[0.12em]">Premium Support</p>
              <p className="mt-1 text-[14px]">✨</p>
              <p className="mt-1 text-[5px] font-bold uppercase tracking-[0.08em]">ServiceFlow Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home-hero" className="relative min-h-[580px] overflow-hidden bg-slate-950 text-white sm:min-h-[740px] lg:min-h-[1050px]">
      <Image
        src="/images/6hZX53cd2BQPBn5f2U9LrdEHxw.png"
        alt="Professional cleaning service"
        fill
        priority
        className="object-cover object-[right_top]"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,14,24,0.92)_0%,rgba(7,14,24,0.75)_40%,rgba(7,14,24,0.25)_70%,rgba(7,14,24,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%)]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[580px] w-full items-center pb-20 pt-16 sm:min-h-[740px] sm:pb-28 sm:pt-24 lg:min-h-[1050px] lg:pb-40 lg:pt-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="mt-14 text-sm font-semibold text-[var(--color-accent)] sm:mt-16 sm:text-lg lg:text-xl">
              Professional & Reliable Solutions
            </p>

            {/* Headline — refined for a more premium feel */}
            <h1 className="mt-4 max-w-xl text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:mt-6 sm:text-4xl lg:text-6xl">
              Professional Cleaning & Hospitality Services
            </h1>

            {/* Sub-copy */}
            <p className="mt-5 max-w-lg text-base leading-7 text-white/80 sm:mt-7 sm:text-lg sm:leading-8 lg:max-w-2xl lg:text-xl">
              Experience the ultimate convenience with ServiceFlow. From deep home cleaning and office maintenance to expert hospitality staffing and private chefs, we provide tailored, premium services that exceed expectations.
            </p>

            {/* Added Content: Benefits List */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:gap-4">
              {[
                "Certified & Background-Checked Staff",
                "Eco-Friendly Cleaning Products",
                "24/7 Support & Emergency Service",
                "Fully Insured & Guaranteed Results"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium text-white/90 sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons — stacked on mobile, row on sm+ */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-base font-bold text-white shadow-[0_18px_40px_rgba(255,111,36,0.4)] transition hover:bg-[var(--color-accent-strong)] sm:px-8 sm:py-4 sm:text-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/65 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg"
              >
                Contact Us Today
              </a>
            </div>

            {/* Social proof pill */}
            <div className="relative mt-10 mx-auto flex w-fit max-w-full items-center gap-3 rounded-[999px] border border-white/40 bg-[rgba(95,95,103,0.32)] px-3 py-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-[10px] sm:mx-0 sm:mt-14 sm:gap-5 sm:px-4 sm:py-3">
              {/* Avatar stack */}
              <div className="flex shrink-0 items-center">
                {avatarItems.map((item, index) => (
                  <div
                    key={item.type === "image" ? item.src : item.label}
                    className="-ml-2 first:ml-0"
                    style={{ zIndex: avatarItems.length - index }}
                  >
                    {item.type === "image" ? (
                      <div className="overflow-hidden rounded-full border-[3px] border-[#3d3d45] shadow-sm">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                        />
                      </div>
                    ) : (
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#3d3d45] bg-gradient-to-br ${item.color} text-xs font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-sm`}
                      >
                        {item.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Count */}
              <div className="min-w-0 pr-8 sm:pr-10">
                <p className="text-[1.2rem] font-extrabold leading-none tracking-[-0.02em] text-white sm:text-[1.4rem]">
                  130K +
                </p>
                <p className="mt-1.5 text-[0.7rem] font-semibold leading-none text-white/90 sm:text-[0.8rem]">
                  Customer Reviews
                </p>
              </div>

              {/* Check badge */}
              <span className="absolute -right-1 -top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_12px_24px_rgba(255,111,36,0.45)] sm:h-10 sm:w-10">
                <CheckIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition panel — xl only, positioned absolutely */}
      {/* <div className="pointer-events-none absolute inset-0 mx-auto w-full">
        <div className="relative mx-auto h-full w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="pointer-events-auto">
            <RecognitionPanel />
          </div>
        </div>
      </div> */}
    </section>
  );
}
