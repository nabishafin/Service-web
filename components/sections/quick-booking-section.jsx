export function QuickBookingSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[81.25rem]">
        <div className="rounded-[1.35rem] border border-[#d8deea] bg-[#f3f5fc] px-8 py-10 shadow-[0_18px_50px_rgba(16,24,40,0.06)] lg:px-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[25rem]">
              <h2 className="text-[2rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#18344f] sm:text-[2.35rem]">
                Quick Plumbing Service Book in 60 Seconds.
              </h2>
            </div>

            <form className="flex w-full max-w-[43rem] flex-col gap-4 md:flex-row md:items-center md:gap-3">
              <input
                type="text"
                placeholder="Enter your full name"
                className="h-14 flex-1 rounded-full border border-[#edf0f5] bg-white px-6 text-base text-[#18344f] outline-none placeholder:text-[#6f7c86]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-14 flex-1 rounded-full border border-[#edf0f5] bg-white px-6 text-base text-[#18344f] outline-none placeholder:text-[#6f7c86]"
              />
              <button
                type="submit"
                className="inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-base font-bold text-white shadow-[0_14px_30px_rgba(255,111,36,0.28)] transition hover:bg-[var(--color-accent-strong)]"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

