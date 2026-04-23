import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
