"use client";

import Link from "next/link";
import Image from "next/image";

interface TreatmentItem {
  title: string;
  href: string;
  image: string;
}

const treatments: TreatmentItem[] = [
  {
    title: "Root Canal Treatment",
    href: "/treatments/root-canal-treatment",
    image: "/home_page_png/root_canal_treatment.png",
  },
  {
    title: "Teeth Cleaning/Scaling",
    href: "/book-appointment?treatment=Teeth%20Cleaning%20and%20Scaling",
    image: "/home_page_png/teeth_cleaning.png",
  },
  {
    title: "Dental Implants / Full Mouth Implants",
    href: "/treatments/dental-implants",
    image: "/home_page_png/dental_implants.png",
  },
  {
    title: "Clear Aligners / invisible aligners",
    href: "/treatments/invisalign-treatment",
    image: "/home_page_png/aligners.png",
  },
  {
    title: "Kids Dentistry/Pediatric Dentistry",
    href: "/treatments/pediatric-dentistry",
    image: "/home_page_png/kids.png",
  },
  {
    title: "Wisdom Tooth Extraction",
    href: "/book-appointment?treatment=Wisdom%20Tooth%20Extraction",
    image: "/home_page_png/wisdom_tooth_extraction.png",
  },
  {
    title: "Periodontal Diseases & Flap / Advanced Gum Treatment",
    href: "/book-appointment?treatment=Gum%20Treatment",
    image: "/home_page_png/gum_treatment.png",
  },
  {
    title: "Tooth Decay and dental fillings",
    href: "/book-appointment?treatment=Tooth%20Filling",
    image: "/home_page_png/tooth_filling.png",
  },
  {
    title: "Hybrid Denture/ Full mouth Dentures",
    href: "/book-appointment?treatment=Dentures",
    image: "/home_page_png/dentures.png",
  },
  {
    title: "Smile Designing",
    href: "/treatments/smile-designing",
    image: "/home_page_png/smile_designing.png",
  },
  {
    title: "Dental Braces",
    href: "/treatments/braces",
    image: "/home_page_png/braces.png",
  },
  {
    title: "Teeth Whitening",
    href: "/treatments/teeth-whitening",
    image: "/home_page_png/teeth_whitening.png",
  },
];

export default function HomeTreatmentsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto px-4 py-2">
      {treatments.map((treatment, idx) => (
        <Link
          key={`${treatment.title}-${idx}`}
          href={treatment.href}
          className="group block relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-premium hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 bg-slate-50"
        >
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={idx < 6}
          />
        </Link>
      ))}
    </div>
  );
}
