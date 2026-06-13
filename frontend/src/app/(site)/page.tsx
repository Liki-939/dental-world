import Image from "next/image";
import Link from "next/link";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import { SITE, LOCATIONS } from "@/lib/site";
import HomeTreatmentsGrid from "@/components/HomeTreatmentsGrid";
import {
  Star,
  Clock,
  Shield,
  Award,
  Calendar,
  Phone,
  MapPin,
  Users,
  Layers
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dental Clinic in Hyderabad | Dental World",
  description: "Dental World is Hyderabad's most trusted MDS dental clinic located in Pragathi Nagar & Bachupally. Expert treatment for Dental Implants, Invisalign Clear Aligners, Root Canal, Braces, and Laser Dentistry.",
  keywords: [
    "dental clinic Hyderabad",
    "best dentist in Hyderabad",
    "dental clinic Pragathi Nagar",
    "dental clinic Bachupally",
    "dental implants cost Hyderabad",
    "best dentist near me",
    "invisalign clear aligners Hyderabad",
    "root canal treatment Hyderabad",
    "braces cost Hyderabad"
  ],
  alternates: {
    canonical: "https://www.dentalworldhyd.in",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-grow bg-slate-50/50 font-sans relative">
      {/* Floating Action Bar (Desktop only, right side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col bg-white shadow-premium rounded-2xl border border-slate-100 py-5 px-3 space-y-5 text-center items-center w-24">
        <a href={`tel:${SITE.phone.tel}`} className="flex flex-col items-center group">
          <div className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-slate-800 mt-1.5 transition-colors group-hover:text-blue-600">Call Us</span>
        </a>

        <div className="w-full h-[1px] bg-slate-100"></div>

        <a href={SITE.whatsapp.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
          <div className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-slate-800 mt-1.5 transition-colors group-hover:text-green-500">WhatsApp</span>
        </a>

        <div className="w-full h-[1px] bg-slate-100"></div>

        <a href="#our-clinics" className="flex flex-col items-center group">
          <div className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-slate-800 mt-1.5 transition-colors group-hover:text-red-500">Visit Us</span>
        </a>
      </div>

      <main className="flex-grow">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-slate-50 to-white py-8 md:py-12 lg:py-16 border-b border-slate-100">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] relative z-10">
            <div className="bg-white border border-slate-200/60 shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

              {/* Left Column */}
              <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center space-y-6 z-20 relative bg-white">
                <span className="inline-block bg-blue-50 text-blue-600 text-[11px] md:text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-blue-100 self-start">
                  HYDERABAD'S MOST TRUSTED DENTAL CARE
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0a1d37] font-heading leading-[1.1]">
                  Advanced Care.<br />
                  Beautiful Smiles.<br />
                  <span className="text-blue-600">For Life.</span>
                </h1>

                <p className="text-base md:text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
                  Expert dentists. Advanced technology. Personalized care for you and your family.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <Link href="/book-appointment" className="w-full sm:w-auto btn-primary text-base !py-3.5">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book Consultation
                  </Link>

                  <a href={SITE.whatsapp.url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-green-500 hover:bg-green-50 text-green-600 px-7 py-3 rounded-lg font-bold transition flex items-center justify-center text-base bg-white">
                    <svg className="w-5 h-5 mr-2 fill-green-600" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>

                {/* Sub features list */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[13.5px] font-bold text-slate-800 pt-6 border-t border-slate-200">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Experienced Dentists
                  </div>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Advanced Technology
                  </div>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    Painless Treatments
                  </div>
                </div>
              </div>

              {/* Right Column (Blended image) */}
              <div className="lg:col-span-5 relative min-h-[350px] md:min-h-[480px] lg:min-h-full overflow-hidden w-full flex flex-col justify-end z-10">
                <Image
                  src="/doc_pat.png"
                  alt="Patient smiling during dental consultation at Dental World"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Left edge seamless gradient blend for desktop */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                {/* Top soft blend for mobile when items stack */}
                <div className="lg:hidden absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
              </div>

            </div>
          </div>
        </section>

        {/* TREATMENTS GRID */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl text-center">

            {/* 24 Treatment Cards Grid */}
            <HomeTreatmentsGrid />

            <div className="mt-10">
              <Link href="/treatments" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-750 transition text-base">
                View All Treatments
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </section>

        {/* STATISTICS BANNER */}
        <section className="bg-[#0b1c3c] text-white py-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">

              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center border-slate-800 md:border-r last:border-0 px-4">
                <Users className="w-8 h-8 text-blue-400 mb-2" />
                <span className="text-3xl font-extrabold font-heading">15+</span>
                <span className="text-xs text-slate-300 font-bold uppercase mt-1 tracking-wider">Years of Experience</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center border-slate-800 md:border-r last:border-0 px-4">
                <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeWidth="2.5" stroke="currentColor" />
                </svg>
                <span className="text-3xl font-extrabold font-heading">5000+</span>
                <span className="text-xs text-slate-300 font-bold uppercase mt-1 tracking-wider">Happy Patients</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center border-slate-800 md:border-r last:border-0 px-4">
                <Layers className="w-8 h-8 text-blue-400 mb-2" />
                <span className="text-3xl font-extrabold font-heading">3D</span>
                <span className="text-xs text-slate-300 font-bold uppercase mt-1 tracking-wider">Advanced Technology</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center border-slate-800 last:border-0 px-4">
                <MapPin className="w-8 h-8 text-blue-400 mb-2" />
                <span className="text-3xl font-extrabold font-heading">2</span>
                <span className="text-xs text-slate-300 font-bold uppercase mt-1 tracking-wider">Clinic Locations</span>
              </div>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE DENTAL WORLD? */}
        <section className="py-20 bg-slate-50/70">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* Left text column */}
              <div className="w-full lg:w-[45%] space-y-5">
                <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest">
                  WHY CHOOSE DENTAL WORLD?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1d37] font-heading leading-tight">
                  Care That Makes<br />
                  <span className="text-blue-600">The Difference</span>
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed max-w-lg">
                  We combine advanced technology with gentle care to deliver the best dental experience.
                </p>
                <div className="pt-2">
                  <Link href="/about" className="inline-flex items-center whitespace-nowrap w-fit border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-[5px] transition text-[15px]">
                    Know More About Us
                    <svg className="w-5 h-5 ml-2 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right grid column */}
              <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Feature 1 */}
                <div className="flex items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M19 8l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0a1d37] mb-1.5 text-base">Expert Dentists</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Highly skilled & experienced dental specialists</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 11l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0a1d37] mb-1.5 text-base">Painless & Comfortable</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Advanced techniques for a pain-free experience</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0a1d37] mb-1.5 text-base">Advanced Technology</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">3D imaging, digital smile design & modern equipment</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0a1d37] mb-1.5 text-base">Patient First Approach</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Personalized care with your comfort as our priority</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* BEFORE & AFTER SHOWCASE */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">

            {/* Header */}
            <div className="flex flex-row justify-between items-end mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0a1d37] font-heading leading-tight">
                Real Transformations.<br className="hidden md:inline" /> Real Smiles.
              </h2>

              <Link href="/gallery" className="inline-flex items-center text-blue-600 hover:text-blue-750 font-bold transition text-[15px] shrink-0">
                View More Results
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <BeforeAfterShowcase />

          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 max-w-7xl text-center">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0a1d37] font-heading mb-12">
              Loved by Our Patients
            </h2>

            {/* Testimonials grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Review 1 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm text-left flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Google and Stars */}
                  <div className="flex items-center justify-between">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    <div className="flex text-amber-400 space-x-0.5">
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed text-[14.5px]">
                    "I got my dental implants done at Dental World. The experience was excellent and totally painless. Highly recommended!"
                  </p>
                </div>
                <span className="font-extrabold text-slate-800 text-sm mt-3 inline-block">- Ramesh, Pragathi Nagar</span>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm text-left flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Google and Stars */}
                  <div className="flex items-center justify-between">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    <div className="flex text-amber-400 space-x-0.5">
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed text-[14.5px]">
                    "Very professional team and advanced technology. My smile makeover has given me so much confidence!"
                  </p>
                </div>
                <span className="font-extrabold text-slate-800 text-sm mt-3 inline-block">- Sunitha, Bachupally</span>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm text-left flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Google and Stars */}
                  <div className="flex items-center justify-between">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    <div className="flex text-amber-400 space-x-0.5">
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                      <Star className="w-[18px] h-[18px] fill-current" />
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed text-[14.5px]">
                    "Best dental clinic in Hyderabad! Friendly staff, clean clinic and amazing results."
                  </p>
                </div>
                <span className="font-extrabold text-slate-800 text-sm mt-3 inline-block">- Karthik, Pragathi Nagar</span>
              </div>

            </div>

            {/* Indicators */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            </div>

          </div>
        </section>

        {/* CLINIC LOCATIONS */}
        <section className="py-20 bg-white" id="our-clinics">
          <div className="container mx-auto px-4 max-w-6xl text-center">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0a1d37] font-heading mb-12">
              Our Clinics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Clinic 1: Pragathi Nagar */}
              <div className="bg-[#f8faff] rounded-3xl p-6 border border-slate-100 flex flex-col sm:flex-row gap-6 text-left shadow-sm hover:shadow-md transition">
                <div className="w-full sm:w-[45%] relative aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                    alt="Dental World Pragathi Nagar clinic reception"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-lg text-blue-600 tracking-tight flex items-center">
                      <MapPin className="w-5 h-5 mr-1.5 shrink-0" />
                      Pragathi Nagar
                    </h3>
                    <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed">
                      {LOCATIONS[0].address}
                    </p>
                  </div>
                  <Link href="/locations/pragathi-nagar" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-750 transition mt-2">
                    View on Map
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Clinic 2: Bachupally */}
              <div className="bg-[#f8faff] rounded-3xl p-6 border border-slate-100 flex flex-col sm:flex-row gap-6 text-left shadow-sm hover:shadow-md transition">
                <div className="w-full sm:w-[45%] relative aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                    alt="Dental World Bachupally clinic reception"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-lg text-blue-600 tracking-tight flex items-center">
                      <MapPin className="w-5 h-5 mr-1.5 shrink-0" />
                      Bachupally
                    </h3>
                    <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed">
                      {LOCATIONS[1].address}
                    </p>
                  </div>
                  <Link href="/locations/bachupally" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-750 transition mt-2">
                    View on Map
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FROM OUR BLOG */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">

              {/* Blog list column (Left) */}
              <div className="w-full lg:w-[48%] flex flex-col justify-between space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition duration-300">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1d37] font-heading mb-8 pb-3 border-b border-slate-100 flex items-center justify-between">
                    <span>From Our Blog</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                  </h2>
                  <div className="space-y-6">
                    {/* Blog item 1 */}
                    <Link href="/blog" className="group block space-y-2">
                      <span className="inline-block bg-blue-50 text-blue-600 text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md">
                        Dental Implants
                      </span>
                      <h3 className="text-slate-800 group-hover:text-blue-600 font-bold transition leading-snug text-lg">
                        How Long Do Dental Implants Last?
                      </h3>
                      <p className="text-slate-400 text-xs font-semibold">June 2026 • 5 min read</p>
                    </Link>
                    
                    {/* Blog item 2 */}
                    <Link href="/blog" className="group block space-y-2">
                      <span className="inline-block bg-indigo-50 text-indigo-600 text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md">
                        Root Canal
                      </span>
                      <h3 className="text-slate-800 group-hover:text-blue-600 font-bold transition leading-snug text-lg">
                        Root Canal Treatment: Myths vs Facts
                      </h3>
                      <p className="text-slate-400 text-xs font-semibold">May 2026 • 4 min read</p>
                    </Link>

                    {/* Blog item 3 */}
                    <Link href="/blog" className="group block space-y-2">
                      <span className="inline-block bg-emerald-50 text-emerald-600 text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md">
                        Cost Guide
                      </span>
                      <h3 className="text-slate-800 group-hover:text-blue-600 font-bold transition leading-snug text-lg">
                        Cost of Dental Implants in Hyderabad
                      </h3>
                      <p className="text-slate-400 text-xs font-semibold">May 2026 • 6 min read</p>
                    </Link>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-750 font-bold transition text-base group">
                    View All Blogs
                    <svg className="w-5 h-5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Blue CTA Card (Right) */}
              <div className="w-full lg:w-[48%] bg-gradient-to-br from-[#0c2340] via-[#0b1c3c] to-[#071329] text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-xl border border-blue-950/20 hover:shadow-2xl transition duration-300">
                <div className="space-y-6 relative z-10">
                  <span className="inline-block bg-blue-500/10 text-blue-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-blue-500/20">
                    Get in Touch
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold font-heading leading-tight !text-white" style={{ color: '#ffffff' }}>
                    Ready for Your Best Smile?
                  </h2>
                  <p className="text-sm font-medium leading-relaxed max-w-md !text-slate-350" style={{ color: '#cbd5e1' }}>
                    Let our experts help you take the first step towards a healthier, confident smile. Book an appointment today for a consultation.
                  </p>
                </div>

                {/* Implants graphics vector shape on the right edge */}
                <div className="absolute right-0 bottom-4 w-40 h-40 opacity-10 pointer-events-none select-none">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
                    <path d="M50 10C42 10 35 15 35 25c0 8 5 12 5 18c0 3-.5 6-1.5 8c2.5.5 5-1 5-3v-4c1.5-1.5 2.5-3.5 2.5-6c0-6.5-6-10-6-10z" />
                    <rect x="47" y="55" width="6" height="30" rx="2" />
                    <line x1="43" y1="62" x2="57" y2="62" stroke="currentColor" strokeWidth="2" />
                    <line x1="43" y1="70" x2="57" y2="70" stroke="currentColor" strokeWidth="2" />
                    <line x1="43" y1="78" x2="57" y2="78" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>

                <div className="mt-8 relative z-10">
                  <Link href="/book-appointment" className="inline-flex bg-white hover:bg-blue-50 text-[#0b1c3c] hover:text-blue-800 font-extrabold px-8 py-4 rounded-xl transition duration-300 items-center text-base shadow-md hover:shadow-lg group hover:scale-[1.02] transform border border-blue-100/10">
                    <svg className="w-5 h-5 mr-2.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book Consultation
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
