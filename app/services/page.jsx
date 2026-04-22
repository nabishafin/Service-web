import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Our Services | PlumbFlow — Professional Plumbing Solutions",
  description:
    "Explore PlumbFlow's full range of plumbing services — emergency repairs, pipe repair, drain cleaning, water heaters, leak detection, bathroom & kitchen plumbing, and more.",
  keywords: [
    "plumbing services",
    "emergency plumbing",
    "pipe repair",
    "drain cleaning",
    "leak detection",
    "water heater installation",
    "bathroom plumbing",
    "kitchen plumbing",
  ],
  openGraph: {
    title: "Our Services | PlumbFlow",
    description:
      "Fast, certified plumbing services for every need. Get a free quote today.",
    url: "https://plumbflow.com/services",
    siteName: "PlumbFlow",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesGridSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
