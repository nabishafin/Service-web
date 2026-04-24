import Image from "next/image";
import Link from "next/link";

export function ServicesHeroSection() {
  return (
    <section id="home-hero" className="relative min-h-[340px] overflow-hidden bg-slate-950 text-white sm:min-h-[420px] lg:min-h-[500px]">
      {/* Background image */}
      <Image
        src="/images/6hZX53cd2BQPBn5f2U9LrdEHxw.png"
        alt="Professional cleaning and hospitality services"
        fill
        priority
        className="object-cover object-[70%_center] sm:object-center"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0.75)_0%,rgba(8,17,29,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,96,23,0.08),transparent_65%)]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[340px] w-full max-w-7xl flex-col items-center justify-end pb-10 px-6 text-center pt-28 sm:justify-center sm:pb-0 sm:pt-0 sm:min-h-[420px] sm:px-10 lg:min-h-[500px] lg:px-12">
        {/* Breadcrumb */}
        {/* <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-medium text-white/60">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <span className="text-white/30">/</span>
          <span className="text-[var(--color-accent)]">Services</span>
        </nav> */}

        {/* Eyebrow */}
        <p className="text-[0.8rem] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
          What We Offer
        </p>

        {/* Headline */}
        <h1 className="mt-4 max-w-2xl text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-5xl">
          Our Services
        </h1>

        {/* Sub-copy */}
        <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Professional solutions for every need — from deep cleaning and maintenance to expert event staffing and hospitality support.
        </p>

        {/* Decorative bottom bar */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-12 bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          <span className="h-px w-12 bg-white/20" />
        </div>
      </div>
    </section>
  );
}
