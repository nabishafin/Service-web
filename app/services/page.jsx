import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Our Services | ServiceFlow — Professional Cleaning & Hospitality",
  description:
    "Explore ServiceFlow's full range of professional services — from house and office cleaning to premium hospitality and event staffing.",
  keywords: [
    "cleaning services",
    "hospitality",
    "housekeeping",
    "catering",
    "chef services",
    "waiter service",
  ],
  openGraph: {
    title: "Our Services | ServiceFlow",
    description:
      "Expert cleaning and hospitality services for every need. Get a free quote today.",
    url: "https://serviceflow.com/services",
    siteName: "ServiceFlow",
    locale: "en_US",
    type: "website",
  },
};

import { ForceScrollToTop } from "@/components/ui/ForceScrollToTop";

export default function ServicesPage() {
  return (
    <main>
      <ForceScrollToTop />
      <ServicesHeroSection />
      <ServicesGridSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
