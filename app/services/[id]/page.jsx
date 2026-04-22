import { notFound } from "next/navigation";
import { serviceItems } from "@/lib/services-data";
import { ServiceDetailHero } from "@/components/sections/ServiceDetailHero";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";
import { ContactSection } from "@/components/sections/ContactSection";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
 
  const service = serviceItems.find(s => s.id === id);
 
  if (!service) {
    return {
      title: "Service Not Found"
    }
  }

  return {
    title: `${service.title} | PlumbFlow Services`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return serviceItems.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = serviceItems.find(s => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ContactSection />
    </main>
  );
}
