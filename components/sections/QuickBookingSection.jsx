export function QuickBookingSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#d8deea] bg-[#f3f5fc] px-8 py-5 shadow-[0_20px_50px_rgba(24,52,79,0.08)] sm:py-6 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[25rem]">
              <h2 className="text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-[#18344f] lg:text-[2.25rem]">
                Professional Service Booked in 60 Seconds
              </h2>
            </div>

            <form className="flex w-full max-w-[43rem] flex-col gap-4 md:flex-row md:items-center md:gap-3">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-full border border-[#edf0f5] bg-white px-6 py-4 text-base text-[#18344f] outline-none placeholder:text-[#6f7c86] md:h-14 md:flex-1 md:py-0"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-full border border-[#edf0f5] bg-white px-6 py-4 text-base text-[#18344f] outline-none placeholder:text-[#6f7c86] md:h-14 md:flex-1 md:py-0"
              />
              <button
                type="submit"
                className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(255,111,36,0.28)] transition hover:bg-[var(--color-accent-strong)] md:h-14 md:w-auto md:py-0"
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

