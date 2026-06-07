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
    image: "/home_page_png_updated/Root Canal Treatment.png",
  },
  {
    title: "Teeth Cleaning/Scaling",
    href: "/treatments/teeth-cleaning-scaling",
    image: "/home_page_png_updated/Teeth Scaling-cleaning.png",
  },
  {
    title: "Dental Implants / Full Mouth Implants",
    href: "/treatments/dental-implants",
    image: "/home_page_png_updated/Dental Implants.png",
  },
  {
    title: "Clear Aligners / invisible aligners",
    href: "/treatments/invisalign-treatment",
    image: "/home_page_png_updated/Clear Aligners.png",
  },
  {
    title: "Kids Dentistry/Pediatric Dentistry",
    href: "/treatments/pediatric-dentistry",
    image: "/home_page_png_updated/Kids Dentistry.png",
  },
  {
    title: "Wisdom Tooth Extraction",
    href: "/treatments/wisdom-tooth-extraction",
    image: "/home_page_png_updated/Wisdom tooth Extraction.png",
  },
  {
    title: "Periodontal Diseases & Flap / Advanced Gum Treatment",
    href: "/treatments/advanced-gum-treatment",
    image: "/home_page_png_updated/Periodontal Diseases & Flap Surgery.png",
  },
  {
    title: "Tooth Decay and dental fillings",
    href: "/treatments/tooth-decay-fillings",
    image: "/home_page_png_updated/Tooth Decay and Fillings.png",
  },
  {
    title: "Hybrid Denture/ Full mouth Dentures",
    href: "/treatments/hybrid-dentures",
    image: "/home_page_png_updated/Hybrid-Full Mouth Denture.png",
  },
  {
    title: "Smile Designing",
    href: "/treatments/smile-designing",
    image: "/home_page_png_updated/Smile Designing.png",
  },
  {
    title: "Dental Braces",
    href: "/treatments/braces",
    image: "/home_page_png_updated/Dental Braces.png",
  },
  {
    title: "Teeth Whitening",
    href: "/treatments/teeth-whitening",
    image: "/home_page_png_updated/Teeth Whitening.png",
  },
  {
    title: "Bad Breath and Halitosis",
    href: "/treatments/bad-breath-halitosis",
    image: "/home_page_png_updated/Bad Breath.png",
  },
  {
    title: "Dental Crown and Bridges",
    href: "/treatments/dental-crown-bridges",
    image: "/home_page_png_updated/Dental Crown & Bridge.png",
  },
  {
    title: "Frenectomy",
    href: "/treatments/frenectomy",
    image: "/home_page_png_updated/Frenectomy.png",
  },
  {
    title: "Cosmetic Dentistry",
    href: "/treatments/cosmetic-dentistry",
    image: "/home_page_png_updated/Cosmetic Dentistry.png",
  },
  {
    title: "Laser Dentistry",
    href: "/treatments/laser-dentistry",
    image: "/home_page_png_updated/Laser Dentistry.png",
  },
  {
    title: "Jaw Surgery",
    href: "/treatments/jaw-surgery",
    image: "/home_page_png_updated/Jaw Surgery.png",
  },
  {
    title: "Genioplasty",
    href: "/treatments/genioplasty",
    image: "/home_page_png_updated/Genoplasty.png",
  },
  {
    title: "Mouth Ulcers",
    href: "/treatments/mouth-ulcers",
    image: "/home_page_png_updated/Mouth Ulcers.png",
  },
  {
    title: "Preventive Dentistry",
    href: "/treatments/preventive-dentistry",
    image: "/home_page_png_updated/Preventive Dentistry.png",
  },
];

export default function HomeTreatmentsGrid() {
  const displayedTreatments = treatments.slice(0, 12);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-[1400px] mx-auto px-4 py-6">
      {displayedTreatments.map((treatment, idx) => (
        <Link
          key={`${treatment.title}-${idx}`}
          href={treatment.href}
          className="group flex flex-col items-center"
        >
          {/* Image Wrapper */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-premium group-hover:border-blue-200 group-hover:-translate-y-1.5 transition-all duration-300 bg-slate-50 relative">
            <Image
              src={treatment.image}
              alt={treatment.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={idx < 6}
            />
          </div>
          {/* Treatment Name Text */}
          <span className="mt-3 text-center text-xs md:text-sm font-bold text-slate-700 group-hover:text-brand transition-colors duration-300 leading-tight px-1">
            {treatment.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
