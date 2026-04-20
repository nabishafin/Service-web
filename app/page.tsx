import { HeroSection } from "@/components/sections/hero-section";
import { QuickBookingSection } from "@/components/sections/quick-booking-section";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";

export default function Home() {
  return (
    <main>
      <TopBar />
      <div className="relative">
        <div className="absolute inset-x-0 top-0">
          <Navbar />
        </div>
        <HeroSection />
      </div>
      <QuickBookingSection />
    </main>
  );
}
