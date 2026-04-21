import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { QuickBookingSection } from "@/components/sections/QuickBookingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { OurProcess } from "@/components/sections/OurProcess";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ServiceGallerySection } from "@/components/sections/ServiceGallerySection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
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
      <BlogSection />
    </main>
  );
}
