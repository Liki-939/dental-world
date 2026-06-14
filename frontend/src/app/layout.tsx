import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dentalworldhyd.in"),
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  title: {
    default: "Dental World | Advanced Dental Care in Hyderabad",
    template: "%s | Dental World",
  },
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
    url: "https://www.dentalworldhyd.in",
    siteName: "Dental World",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.dentalworldhyd.in/dental_cover.png",
        width: 1200,
        height: 630,
        alt: "Dental World Advanced Dental Care Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental World | Advanced Dental Care in Hyderabad",
    description: "High-quality, affordable dental care in Hyderabad. Book an appointment today for dental implants, root canals, invisalign, and smile makeovers.",
    images: ["https://www.dentalworldhyd.in/dental_cover.png"],
  },
  alternates: {
    canonical: "https://www.dentalworldhyd.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <LocalBusinessSchema />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
