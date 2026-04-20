import Image from "next/image";
import { CheckIcon } from "@/components/ui/icons";

const avatarItems = [
  { type: "image", src: "/images/JcrnwGYRV1uMCIgxw5KS2EzOx0.png", alt: "Happy customer" },
  { type: "initial", label: "C", color: "from-[#cf915f] to-[#6f4832]" },
  { type: "initial", label: "R", color: "from-[#c9e3e8] to-[#5a7a80]" },
];

function RecognitionPanel() {
  return (
    <div className="absolute bottom-0 right-0 hidden w-full max-w-[33rem] rounded-tl-2xl border border-white/35 bg-[linear-gradient(90deg,rgba(201,194,189,0.62)_0%,rgba(44,63,90,0.82)_100%)] px-6 pb-5 pt-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-[10px] xl:block">
      <p className="max-w-[28rem] text-[1.1rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
        Recognized for Excellence in Plumbing Services!
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
              <p className="text-[5px] font-bold uppercase tracking-[0.12em]">Plumbing Services</p>
              <p className="mt-1 text-[14px]">🔧</p>
              <p className="mt-1 text-[5px] font-bold uppercase tracking-[0.08em]">Membership Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home-hero" className="relative min-h-[600px] sm:min-h-[800px] lg:min-h-[1050px] overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/6hZX53cd2BQPBn5f2U9LrdEHxw.png"
        alt="Plumber repairing a kitchen faucet"
        fill
        priority
        className="object-cover object-[right_top]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,14,24,0.85)_0%,rgba(7,14,24,0.65)_32%,rgba(7,14,24,0.15)_63%,rgba(7,14,24,0.02)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-[600px] sm:min-h-[800px] lg:min-h-[1050px] w-full items-center pb-16 pt-14 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className=" mt-16 text-md font-semibold text-[var(--color-accent)] sm:text-xl">Your Trusted Plumbing Experts</p>

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

          <div className="relative mt-16 flex w-fit items-center gap-5 rounded-[999px] border border-white/40 bg-[rgba(95,95,103,0.32)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-[10px]">
            <div className="flex items-center">
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
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#3d3d45] bg-gradient-to-br ${item.color} text-sm font-bold text-white shadow-sm`}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="min-w-0 pr-10">
              <p className="text-[22px] font-extrabold leading-none tracking-[-0.02em] text-white sm:text-[25px]">
                130K +
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-none text-white/90 sm:text-[14px]">
                Customer Review
              </p>
            </div>

            <span className="absolute -right-1 -top-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_12px_24px_rgba(255,111,36,0.45)]">
              <CheckIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 mx-auto w-full">
        <div className="relative mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto">
            <RecognitionPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
