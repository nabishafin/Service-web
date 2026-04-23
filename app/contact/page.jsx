import { ContactPageContent } from "@/components/sections/ContactPageContent";
import { ForceScrollToTop } from "@/components/ui/ForceScrollToTop";

export const metadata = {
  title: "Contact Us | ServiceFlow — Professional Cleaning & Hospitality",
  description:
    "Get in touch with ServiceFlow for premium cleaning and hospitality services. Request a quote or book an appointment today.",
};

export default function ContactPage() {
  return (
    <main>
      <ForceScrollToTop />
      {/* Small top spacer since navbar is fixed */}
      <div className="h-[86px] w-full bg-[#08111d] lg:h-[128px]"></div>
      <ContactPageContent />
    </main>
  );
}
