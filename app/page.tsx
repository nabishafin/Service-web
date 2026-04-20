import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { QuickBookingSection } from "@/components/sections/quick-booking-section";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <div className="relative">
        <HeroSection />
      </div>
      <QuickBookingSection />
      <AboutSection />
    </main>
  );
}
