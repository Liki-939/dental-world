import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Dental World | Advanced Dental Care in Hyderabad",
  description: "High-quality, affordable dental care in Hyderabad. Book an appointment today for dental implants, root canals, invisalign, and smile makeovers.",
  keywords: [
    "dental clinic hyderabad",
    "best dentist near me",
    "root canal treatment",
    "dental implants cost",
    "teeth whitening",
    "invisalign clear aligners",
    "smile makeover",
    "advanced dental care",
  ],
  authors: [{ name: "Dental World Clinic" }],
  creator: "Dental World",
  publisher: "Dental World",
  openGraph: {
    title: "Dental World | Advanced Dental Care in Hyderabad",
    description: "High-quality, affordable dental care in Hyderabad. Book an appointment today for dental implants, root canals, invisalign, and smile makeovers.",
    url: "https://www.dentalworldhyd.com",
    siteName: "Dental World",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental World | Advanced Dental Care in Hyderabad",
    description: "High-quality, affordable dental care in Hyderabad. Book an appointment today for dental implants, root canals, invisalign, and smile makeovers.",
  },
  alternates: {
    canonical: "https://www.dentalworldhyd.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
