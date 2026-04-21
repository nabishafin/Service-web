import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
  title: "PlumbFlow | Professional Plumbing Services & Emergency Repairs",
  description: "Certified plumbing experts for emergency repairs, leak detection, and installations. 24/7 support for all your home and commercial plumbing needs.",
  keywords: ["plumbing", "emergency plumber", "leak detection", "pipe repair", "drain cleaning"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PlumbFlow | Expert Plumbing Solutions",
    description: "Reliable, fast, and professional plumbing services available 24/7.",
    url: "https://plumbflow.com",
    siteName: "PlumbFlow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlumbFlow | Expert Plumbing Solutions",
    description: "Fast and reliable plumbing experts at your service.",
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
      </body>
    </html>
  );
}
