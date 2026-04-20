import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { QuickBookingSection } from "@/components/sections/quick-booking-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { OurProcess } from "@/components/sections/our-process";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { ServiceGallerySection } from "@/components/sections/service-gallery-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <div className="relative">
        <HeroSection />
      </div>
      <QuickBookingSection />
      {/* About Section */}
      <AboutSection />

      <ServicesSection />
      {/* Our process */}
      <OurProcess />  
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ServiceGallerySection />
      <ContactSection />
    </main>
  );
}
