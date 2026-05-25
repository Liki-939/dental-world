import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Dental World | Advanced Dental Care",
  description: "High-quality, affordable dental care. Book an appointment today.",
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
