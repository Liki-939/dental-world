"use client";

import Link from "next/link";
import Image from "next/image";

interface TreatmentItem {
  key: string;
  title: string;
  href: string;
  image: string;
}

const treatments: TreatmentItem[] = [
  {
    key: "grid_root_canal",
    title: "Root Canal Treatment",
    href: "/treatments/root-canal-treatment",
    image: "/home_page_png_updated/Root Canal Treatment.png",
  },
  {
    key: "grid_teeth_cleaning",
    title: "Teeth Cleaning/Scaling",
    href: "/treatments/teeth-cleaning-scaling",
    image: "/home_page_png_updated/Teeth Scaling-cleaning.png",
  },
  {
    key: "grid_implants",
    title: "Dental Implants / Full Mouth Implants",
    href: "/treatments/dental-implants",
    image: "/home_page_png_updated/Dental Implants.png",
  },
  {
    key: "grid_invisalign",
    title: "Clear Aligners / invisible aligners",
    href: "/treatments/invisalign-treatment",
    image: "/home_page_png_updated/Clear Aligners.png",
  },
  {
    key: "grid_pediatric",
    title: "Kids Dentistry/Pediatric Dentistry",
    href: "/treatments/pediatric-dentistry",
    image: "/home_page_png_updated/Kids Dentistry.png",
  },
  {
    key: "grid_wisdom_tooth",
    title: "Wisdom Tooth Extraction",
    href: "/treatments/wisdom-tooth-extraction",
    image: "/home_page_png_updated/Wisdom tooth Extraction.png",
  },
  {
    key: "grid_periodontal",
    title: "Periodontal Diseases & Flap / Advanced Gum Treatment",
    href: "/treatments/advanced-gum-treatment",
    image: "/home_page_png_updated/Periodontal Diseases & Flap Surgery.png",
  },
  {
    key: "grid_tooth_decay",
    title: "Tooth Decay and dental fillings",
    href: "/treatments/tooth-decay-fillings",
    image: "/home_page_png_updated/Tooth Decay and Fillings.png",
  },
  {
    key: "grid_dentures",
    title: "Hybrid Denture/ Full mouth Dentures",
    href: "/treatments/hybrid-dentures",
    image: "/home_page_png_updated/Hybrid-Full Mouth Denture.png",
  },
  {
    key: "grid_smile_designing",
    title: "Smile Designing",
    href: "/treatments/smile-designing",
    image: "/home_page_png_updated/Smile Designing.png",
  },
  {
    key: "grid_braces",
    title: "Dental Braces",
    href: "/treatments/braces",
    image: "/home_page_png_updated/Dental Braces.png",
  },
  {
    key: "grid_teeth_whitening",
    title: "Teeth Whitening",
    href: "/treatments/teeth-whitening",
    image: "/home_page_png_updated/Teeth Whitening.png",
  },
  {
    key: "grid_bad_breath",
    title: "Bad Breath and Halitosis",
    href: "/treatments/bad-breath-halitosis",
    image: "/home_page_png_updated/Bad Breath.png",
  },
  {
    key: "grid_crowns",
    title: "Dental Crown and Bridges",
    href: "/treatments/dental-crown-bridges",
    image: "/home_page_png_updated/Dental Crown & Bridge.png",
  },
  {
    key: "grid_frenectomy",
    title: "Frenectomy",
    href: "/treatments/frenectomy",
    image: "/home_page_png_updated/Frenectomy.png",
  },
  {
    key: "grid_cosmetic",
    title: "Cosmetic Dentistry",
    href: "/treatments/cosmetic-dentistry",
    image: "/home_page_png_updated/Cosmetic Dentistry.png",
  },
  {
    key: "grid_laser",
    title: "Laser Dentistry",
    href: "/treatments/laser-dentistry",
    image: "/home_page_png_updated/Laser Dentistry.png",
  },
  {
    key: "grid_jaw_surgery",
    title: "Jaw Surgery",
    href: "/treatments/jaw-surgery",
    image: "/home_page_png_updated/Jaw Surgery.png",
  },
  {
    key: "grid_genioplasty",
    title: "Genioplasty",
    href: "/treatments/genioplasty",
    image: "/home_page_png_updated/Genoplasty.png",
  },
  {
    key: "grid_mouth_ulcers",
    title: "Mouth Ulcers",
    href: "/treatments/mouth-ulcers",
    image: "/home_page_png_updated/Mouth Ulcers.png",
  },
  {
    key: "grid_preventive",
    title: "Preventive Dentistry",
    href: "/treatments/preventive-dentistry",
    image: "/home_page_png_updated/Preventive Dentistry.png",
  },
];

export default function HomeTreatmentsGrid({ mediaMap }: { mediaMap?: Record<string, string> }) {
  const displayedTreatments = treatments.slice(0, 12);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-[1400px] mx-auto px-4 py-6">
      {displayedTreatments.map((treatment, idx) => {
        const imgSrc = (mediaMap && mediaMap[treatment.key]) || treatment.image;
        return (
          <Link
            key={`${treatment.title}-${idx}`}
            href={treatment.href}
            className="group flex flex-col items-center"
          >
            {/* Image Wrapper */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-premium group-hover:border-blue-200 group-hover:-translate-y-1.5 transition-all duration-300 bg-slate-50 relative">
              <Image
                src={imgSrc}
                alt={treatment.title}
                fill
                unoptimized={typeof imgSrc === 'string' && imgSrc.startsWith('data:')}
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
        );
      })}
    </div>
  );
}
