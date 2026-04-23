import { Roboto } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "ServiceFlow | Professional Cleaning & Hospitality Services",
  description: "Expert cleaning and hospitality staff for homes, offices, and events. Reliable, certified professionals at your service.",
  keywords: ["cleaning services", "hospitality staff", "office cleaning", "event catering", "housekeeping"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ServiceFlow | Professional Cleaning & Hospitality",
    description: "Expert cleaning and hospitality staff for homes, offices, and events.",
    url: "https://serviceflow.com",
    siteName: "ServiceFlow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceFlow | Professional Cleaning & Hospitality",
    description: "Expert cleaning and hospitality staff for homes, offices, and events.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-center" reverseOrder={false} />
        <header>
          <TopBar />
          <Navbar />
        </header>
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
