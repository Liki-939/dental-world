"use client";

import Link from "next/link";

interface TreatmentItem {
  title: string;
  href: string;
  icon: (className?: string) => React.ReactNode;
}

const treatments: TreatmentItem[] = [
  {
    title: "Root Canal Treatment",
    href: "/treatments/root-canal-treatment",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="pulpGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="fileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>
        {/* Tooth Crown and Roots */}
        <path d="M25 35 C25 22, 35 15, 50 15 C65 15, 75 22, 75 35 C75 48, 70 55, 68 65 C66 75, 62 88, 58 88 C54 88, 53 78, 50 72 C47 78, 46 88, 42 88 C38 88, 34 75, 32 65 C30 55, 25 48, 25 35 Z" fill="url(#toothGrad)" stroke="#475569" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Inner root canal pulp chamber (red/pink indicating treatment area) */}
        <path d="M48 35 C48 30, 52 30, 52 35 C52 45, 55 52, 58 65 C60 72, 60 78, 58 82 C57 82, 56 75, 53 68 C50 62, 50 55, 48 35 Z" fill="url(#pulpGrad)" opacity="0.8" />
        <path d="M48 35 C48 45, 45 52, 42 65 C40 72, 40 78, 42 82 C43 82, 44 75, 47 68 C50 62, 48 55, 48 35 Z" fill="url(#pulpGrad)" opacity="0.8" />
        {/* Endodontic file inserted */}
        <path d="M48 10 L50 70" stroke="url(#fileGrad)" strokeWidth="2" strokeDasharray="3 1.5" />
        {/* File handle */}
        <rect x="44" y="2" width="8" height="10" rx="1" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
        <circle cx="48" cy="2" r="1.5" fill="#1d4ed8" />
      </svg>
    ),
  },
  {
    title: "Teeth Cleaning/Scaling",
    href: "/book-appointment?treatment=Teeth%20Cleaning%20and%20Scaling",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="toothClean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        {/* Clean Tooth */}
        <path d="M30 40 C30 25, 40 20, 50 20 C60 20, 70 25, 70 40 C70 55, 65 62, 63 70 C61 78, 58 85, 55 85 C52 85, 51 78, 50 74 C49 78, 48 85, 45 85 C42 85, 39 78, 37 70 C35 62, 30 55, 30 40 Z" fill="url(#toothClean)" stroke="#3b82f6" strokeWidth="2.5" />
        {/* Scaling Instrument (curved scaler) */}
        <path d="M15 80 C25 80, 28 65, 35 55 C37 52, 40 50, 43 51 C40 47, 36 48, 33 52 C27 60, 24 70, 15 70 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        {/* Dental Mirror */}
        <path d="M85 80 L68 57" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="68" cy="57" r="10" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
        <circle cx="68" cy="57" r="8" fill="#93c5fd" opacity="0.6" />
        {/* Sparkles */}
        <path d="M52 10 L54 15 L59 17 L54 19 L52 24 L50 19 L45 17 L50 15 Z" fill="#fbbf24" />
        <path d="M78 30 L79 33 L82 34 L79 35 L78 38 L77 35 L74 34 L77 33 Z" fill="#fbbf24" />
      </svg>
    ),
  },
  {
    title: "Dental Implants / Full Mouth Implants",
    href: "/treatments/dental-implants",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="metalImplant" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Crown (Top) */}
        <path d="M30 30 C30 18, 40 12, 50 12 C60 12, 70 18, 70 30 C70 42, 65 48, 62 52 C58 52, 54 48, 50 48 C46 48, 42 52, 38 52 C35 48, 30 42, 30 30 Z" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
        {/* Abutment (Middle connection) */}
        <path d="M42 52 L58 52 L56 62 L44 62 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
        {/* Implant Screw (Bottom) */}
        <path d="M45 62 L55 62 L53 88 C53 90, 47 90, 47 88 Z" fill="url(#metalImplant)" stroke="#334155" strokeWidth="2.5" />
        {/* Screw threads */}
        <line x1="43" y1="67" x2="57" y2="67" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <line x1="44" y1="73" x2="56" y2="73" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <line x1="45" y1="79" x2="55" y2="79" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <line x1="46" y1="84" x2="54" y2="84" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Clear Aligners / Aligners / Invisalign Aligners",
    href: "/treatments/invisalign-treatment",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="alignerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* U-Shaped Aligners Tray showing teeth-caps */}
        <path d="M15 65 C15 35, 30 18, 50 18 C70 18, 85 35, 85 65" stroke="url(#alignerGrad)" strokeWidth="12" strokeLinecap="round" />
        {/* Individual teeth lines inside aligner */}
        <path d="M22 55 L26 53 M32 40 L36 39 M44 28 L47 28 M56 28 L59 28 M68 40 L72 39 M78 55 L82 53" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        {/* Outer shine highlights */}
        <path d="M19 60 C19 38, 32 23, 50 23 C68 23, 81 38, 81 60" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Kids Dentistry / Pediatric Dentistry",
    href: "/treatments/pediatric-dentistry",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heroCape" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        {/* Superhero Cape */}
        <path d="M25 45 C15 45, 10 70, 20 80 C30 85, 35 60, 42 50 Z" fill="url(#heroCape)" />
        {/* Baby Tooth */}
        <path d="M30 40 C30 28, 40 22, 50 22 C60 22, 70 28, 70 40 C70 52, 66 58, 64 65 C62 72, 60 78, 56 78 C53 78, 52 72, 50 69 C48 72, 47 78, 44 78 C40 78, 38 72, 36 65 C34 58, 30 52, 30 40 Z" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
        {/* Cute Eyes */}
        <circle cx="43" cy="40" r="3" fill="#1e293b" />
        <circle cx="57" cy="40" r="3" fill="#1e293b" />
        <circle cx="44" cy="39" r="1" fill="#ffffff" />
        <circle cx="58" cy="39" r="1" fill="#ffffff" />
        {/* Happy Smile */}
        <path d="M46 48 C46 52, 54 52, 54 48" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        {/* Rosy Cheeks */}
        <circle cx="38" cy="45" r="2.5" fill="#fca5a5" opacity="0.6" />
        <circle cx="62" cy="45" r="2.5" fill="#fca5a5" opacity="0.6" />
        {/* Shield with checkmark */}
        <path d="M72 50 C72 50, 72 62, 80 66 C88 62, 88 50, 88 50 C88 50, 80 48, 80 48 C80 48, 72 50, 72 50 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <path d="M77 57 L79 59 L84 54" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Wisdom Tooth Extraction",
    href: "/book-appointment?treatment=Wisdom%20Tooth%20Extraction",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tooth (slightly tilted as if being pulled) */}
        <g transform="translate(42, 45) rotate(15) translate(-42, -45)">
          <path d="M28 35 C28 22, 38 18, 48 18 C58 18, 68 22, 68 35 C68 48, 63 55, 61 62 C59 70, 56 78, 52 78 C49 78, 48 72, 47 68 C45 72, 44 78, 41 78 C37 78, 35 70, 33 62 C31 55, 28 48, 28 35 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        </g>
        {/* Dental Extraction Forceps */}
        <path d="M22 15 C28 15, 34 25, 34 38 C34 44, 38 46, 42 46 C46 46, 50 44, 50 38 C50 25, 56 15, 62 15" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M20 15 C10 15, 8 40, 8 60 C8 85, 22 85, 22 65" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        <path d="M64 15 C74 15, 76 40, 76 60 C76 85, 62 85, 62 65" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        {/* Joint/Pivot screw */}
        <circle cx="42" cy="46" r="4.5" fill="#475569" stroke="#334155" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Periodontal Diseases & Flap / Advanced Gum Treatment",
    href: "/book-appointment?treatment=Gum%20Treatment",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="inflamedGums" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
        {/* Tooth */}
        <path d="M30 35 C30 20, 40 15, 50 15 C60 15, 70 20, 70 35 C70 50, 65 60, 63 68 C61 75, 58 85, 55 85 C52 85, 51 76, 50 72 C49 76, 48 85, 45 85 C42 85, 39 75, 37 68 C35 60, 30 50, 30 35 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
        {/* Red, inflamed Gums line (lower part covers the roots) */}
        <path d="M20 55 C30 50, 38 60, 50 60 C62 60, 70 50, 80 55 L80 88 C80 88, 50 92, 20 88 Z" fill="url(#inflamedGums)" stroke="#b91c1c" strokeWidth="1.5" />
        {/* Bleeding drops */}
        <path d="M35 68 C35 70, 33 73, 33 73 C33 73, 31 70, 31 68 C31 66, 33 65, 35 68 Z" fill="#ef4444" />
        {/* Periodontal Probe (measuring pocket depth) */}
        <path d="M75 30 L55 58" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        {/* Probe markings */}
        <line x1="57.5" y1="54.5" x2="61" y2="52" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="61" y1="49.5" x2="64.5" y2="47" stroke="#1e293b" strokeWidth="1.5" />
        <line x1="64.5" y1="44.5" x2="68" y2="42" stroke="#1e293b" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Tooth Filling / Dental Fillings",
    href: "/book-appointment?treatment=Tooth%20Filling",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tooth */}
        <path d="M30 38 C30 23, 40 18, 50 18 C60 18, 70 23, 70 38 C70 53, 65 60, 63 68 C61 75, 58 85, 55 85 C52 85, 51 76, 50 72 C49 76, 48 85, 45 85 C42 85, 39 75, 37 68 C35 60, 30 53, 30 38 Z" fill="#ffffff" stroke="#475569" strokeWidth="2.5" />
        {/* Filling Area (cavity preparation filled with silver/blue composite) */}
        <path d="M42 22 C42 22, 45 32, 50 32 C55 32, 58 22, 58 22 C58 22, 52 26, 50 26 C48 26, 42 22, 42 22 Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
        {/* Filling Instrument */}
        <path d="M82 18 L55 35" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <path d="M57 33 L50 38 L53 31 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Hybrid Denture/ Full mouth Dentures",
    href: "/book-appointment?treatment=Dentures",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dentureGum" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#f87171" />
          </linearGradient>
        </defs>
        {/* Pink Denture Base (Upper and Lower arches) */}
        <path d="M20 30 C20 45, 80 45, 80 30 C80 20, 68 18, 50 18 C32 18, 20 20, 20 30 Z" fill="url(#dentureGum)" stroke="#ef4444" strokeWidth="2" />
        {/* Upper teeth row */}
        <path d="M28 30 C28 35, 35 38, 50 38 C65 38, 72 35, 72 30" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        {/* Individual teeth lines */}
        <line x1="35" y1="30" x2="36" y2="34" stroke="#475569" strokeWidth="2" />
        <line x1="42" y1="30" x2="43" y2="37" stroke="#475569" strokeWidth="2" />
        <line x1="50" y1="30" x2="50" y2="38" stroke="#475569" strokeWidth="2" />
        <line x1="58" y1="30" x2="57" y2="37" stroke="#475569" strokeWidth="2" />
        <line x1="65" y1="30" x2="64" y2="34" stroke="#475569" strokeWidth="2" />
        {/* Lower denture base */}
        <path d="M20 70 C20 55, 80 55, 80 70 C80 80, 68 82, 50 82 C32 82, 20 80, 20 70 Z" fill="url(#dentureGum)" stroke="#ef4444" strokeWidth="2" />
        {/* Lower teeth row */}
        <path d="M28 70 C28 65, 35 62, 50 62 C65 62, 72 65, 72 70" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="35" y1="70" x2="36" y2="66" stroke="#475569" strokeWidth="2" />
        <line x1="42" y1="70" x2="43" y2="63" stroke="#475569" strokeWidth="2" />
        <line x1="50" y1="70" x2="50" y2="62" stroke="#475569" strokeWidth="2" />
        <line x1="58" y1="70" x2="57" y2="63" stroke="#475569" strokeWidth="2" />
        <line x1="65" y1="70" x2="64" y2="66" stroke="#475569" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Smile Designing",
    href: "/treatments/smile-designing",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lipsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        {/* Beautiful Smiling Lips (Blue theme as in reference image) */}
        <path d="M15 50 C25 65, 75 65, 85 50 C70 75, 30 75, 15 50 Z" fill="url(#lipsGrad)" stroke="#1d4ed8" strokeWidth="2.5" />
        <path d="M15 50 C30 40, 50 48, 50 48 C50 48, 70 40, 85 50 C75 48, 65 42, 50 45 C35 42, 25 48, 15 50 Z" fill="url(#lipsGrad)" stroke="#1d4ed8" strokeWidth="2.5" />
        {/* White Teeth showing in smile */}
        <path d="M22 51 C30 57, 70 57, 78 51 C72 53, 62 55, 50 55 C38 55, 28 53, 22 51 Z" fill="#ffffff" />
        <line x1="36" y1="51" x2="37" y2="54" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="43" y1="51" x2="44" y2="55" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="50" y1="51" x2="50" y2="55" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="57" y1="51" x2="56" y2="55" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="64" y1="51" x2="63" y2="54" stroke="#e2e8f0" strokeWidth="1.5" />
        {/* Sparkles */}
        <path d="M78 28 L80 32 L84 33 L80 34 L78 38 L76 34 L72 33 L76 32 Z" fill="#60a5fa" />
        <path d="M20 35 L21 38 L24 39 L21 40 L20 43 L19 40 L16 39 L19 38 Z" fill="#60a5fa" />
      </svg>
    ),
  },
  {
    title: "Dental Braces",
    href: "/treatments/braces",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Teeth row background */}
        <path d="M10 45 C20 40, 80 40, 90 45 L90 55 C80 50, 20 50, 10 55 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <line x1="30" y1="41" x2="30" y2="53" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="50" y1="40" x2="50" y2="54" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="70" y1="41" x2="70" y2="53" stroke="#cbd5e1" strokeWidth="2" />
        {/* Brackets (Square braces) */}
        <rect x="25" y="44" width="10" height="7" rx="1.5" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        <rect x="45" y="43" width="10" height="8" rx="1.5" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        <rect x="65" y="44" width="10" height="7" rx="1.5" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        {/* Bracket details */}
        <line x1="30" y1="44" x2="30" y2="51" stroke="#334155" strokeWidth="1.5" />
        <line x1="50" y1="43" x2="50" y2="51" stroke="#334155" strokeWidth="1.5" />
        <line x1="70" y1="44" x2="70" y2="51" stroke="#334155" strokeWidth="1.5" />
        {/* Archwire */}
        <path d="M8 48 C20 45, 80 45, 92 48" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        {/* Elastic bands (colors) */}
        <circle cx="30" cy="47.5" r="4.5" stroke="#ef4444" strokeWidth="1" />
        <circle cx="50" cy="47" r="5" stroke="#10b981" strokeWidth="1" />
        <circle cx="70" cy="47.5" r="4.5" stroke="#ef4444" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Teeth Whitening",
    href: "/treatments/teeth-whitening",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="whitenedTooth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="whiteningRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        {/* Bright Tooth */}
        <path d="M30 40 C30 25, 40 20, 50 20 C60 20, 70 25, 70 40 C70 55, 65 62, 63 70 C61 78, 58 85, 55 85 C52 85, 51 78, 50 74 C49 78, 48 85, 45 85 C42 85, 39 78, 37 70 C35 62, 30 55, 30 40 Z" fill="url(#whitenedTooth)" stroke="#3b82f6" strokeWidth="2.5" />
        {/* Back part of orbital ring */}
        <path d="M18 52 C25 45, 75 35, 82 48" stroke="url(#whiteningRing)" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        {/* Front part of orbital ring */}
        <path d="M82 48 C75 60, 25 58, 18 52" stroke="url(#whiteningRing)" strokeWidth="4.5" strokeLinecap="round" />
        {/* Sparkles */}
        <path d="M50 8 L52 13 L57 15 L52 17 L50 22 L48 17 L43 15 L48 13 Z" fill="#f59e0b" />
        <path d="M78 68 L79 71 L82 72 L79 73 L78 76 L77 73 L74 72 L77 71 Z" fill="#60a5fa" />
        <path d="M22 28 L23 31 L26 32 L23 33 L22 36 L21 33 L18 32 L21 31 Z" fill="#60a5fa" />
      </svg>
    ),
  },
  {
    title: "Tooth Decay / Dental Cavities",
    href: "/book-appointment?treatment=Cavity%20Treatment",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Decayed Tooth */}
        <path d="M30 40 C30 25, 40 20, 50 20 C60 20, 70 25, 70 40 C70 55, 65 62, 63 70 C61 78, 58 85, 55 85 C52 85, 51 78, 50 74 C49 78, 48 85, 45 85 C42 85, 39 78, 37 70 C35 62, 30 55, 30 40 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="2.5" />
        {/* Cavity Spot (jagged and dark colored) */}
        <path d="M44 26 C41 27, 40 31, 42 34 C44 37, 47 38, 50 38 C54 38, 58 35, 58 31 C58 27, 52 25, 44 26 Z" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
        {/* Cracks spreading from cavity */}
        <path d="M42 34 L38 38 M50 38 L52 44 M56 31 L61 33" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Bad Breath and Halitosis",
    href: "/book-appointment?treatment=Halitosis%20Treatment",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="breathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        {/* Profile Silhouette */}
        <path d="M20 85 C20 70, 25 60, 25 50 C25 40, 20 35, 20 25 C20 12, 35 8, 48 8 C60 8, 68 18, 68 30 C68 38, 64 42, 60 45 C58 46, 52 46, 52 50 C52 53, 55 54, 53 58 C51 60, 44 60, 44 65 L48 85 Z" fill="url(#headGrad)" opacity="0.95" />
        {/* Mouth emitting breath */}
        <path d="M12 50 C8 48, 5 53, 12 55" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        {/* Green Odor Waves (Bad Breath) */}
        <path d="M10 50 C-2 42, -5 32, -15 35" stroke="url(#breathGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M8 52 C-5 52, -10 48, -20 55" stroke="url(#breathGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M10 55 C-2 62, -5 72, -15 68" stroke="url(#breathGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: "Dental Crown",
    href: "/book-appointment?treatment=Dental%20Crown",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
        {/* Prepared Tooth Base (bottom) */}
        <path d="M38 65 C38 58, 42 54, 50 54 C58 54, 62 58, 62 65 C62 70, 60 78, 58 78 C56 78, 54 74, 50 74 C46 74, 44 78, 42 78 C40 78, 38 70, 38 65 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
        {/* Dental Crown Cap (Hovering / lowering down) */}
        <g transform="translate(0, -10)">
          <path d="M30 38 C30 25, 40 20, 50 20 C60 20, 70 25, 70 38 C70 45, 66 48, 64 52 C58 52, 55 48, 50 48 C45 48, 42 52, 36 52 C34 48, 30 45, 30 38 Z" fill="url(#crownGold)" stroke="#d97706" strokeWidth="2.5" />
          {/* Highlight shine */}
          <path d="M35 32 C38 27, 44 25, 50 25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Alignment Guidance Arrows */}
        <path d="M34 38 L34 44 M66 38 L66 44" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 42 L34 45 L37 42 M63 42 L66 45 L69 42" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Frenectomy",
    href: "/book-appointment?treatment=Frenectomy",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lipsGum" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#f87171" />
          </linearGradient>
        </defs>
        {/* Open lips/gums exposing frenulum */}
        <path d="M15 25 C15 25, 30 15, 50 15 C70 15, 85 25, 85 25 C85 25, 70 38, 50 38 C30 38, 15 25, 15 25 Z" fill="url(#lipsGum)" stroke="#ef4444" strokeWidth="2" />
        {/* Teeth Row */}
        <rect x="25" y="44" width="50" height="12" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="35" y1="44" x2="35" y2="56" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="45" y1="44" x2="45" y2="56" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="55" y1="44" x2="55" y2="56" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="65" y1="44" x2="65" y2="56" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* Frenulum tissue band connecting lip to gum */}
        <path d="M50 18 L50 44" stroke="#b91c1c" strokeWidth="4.5" strokeLinecap="round" />
        {/* Scalpel targeting it */}
        <path d="M82 62 L60 48" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <path d="M62 49 L52 43 L55 52 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    href: "/book-appointment?treatment=Cosmetic%20Dentistry",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cosmeticTooth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
        </defs>
        {/* Flawless White Tooth */}
        <path d="M30 40 C30 25, 40 20, 50 20 C60 20, 70 25, 70 40 C70 55, 65 62, 63 70 C61 78, 58 85, 55 85 C52 85, 51 78, 50 74 C49 78, 48 85, 45 85 C42 85, 39 78, 37 70 C35 62, 30 55, 30 40 Z" fill="url(#cosmeticTooth)" stroke="#3b82f6" strokeWidth="2.5" />
        {/* Highlights and Sparkles (cosmetic sheen) */}
        <path d="M35 32 C38 27, 44 25, 50 25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        {/* Large Sparkle */}
        <path d="M72 18 L74 24 L80 26 L74 28 L72 34 L70 28 L64 26 L70 24 Z" fill="#fbbf24" />
        {/* Small Sparkle */}
        <path d="M22 62 L23 65 L26 66 L23 67 L22 70 L21 67 L18 66 L21 65 Z" fill="#fbbf24" />
        <path d="M76 52 L77 54 L80 55 L77 56 L76 58 L75 56 L72 55 L75 54 Z" fill="#60a5fa" />
      </svg>
    ),
  },
  {
    title: "Dental Lasers / Laser Dentistry",
    href: "/book-appointment?treatment=Laser%20Dentistry",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tooth */}
        <path d="M25 45 C25 32, 35 27, 48 27 C60 27, 70 32, 70 45 C70 58, 65 65, 63 72 C61 78, 58 85, 55 85 C52 85, 51 78, 50 74 C49 78, 48 85, 45 85 C42 85, 39 78, 37 72 C35 65, 25 58, 25 45 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        {/* Laser Handpiece (Pen shape) */}
        <path d="M85 15 L55 35" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        <rect x="70" y="18" width="6" height="12" rx="1" transform="rotate(-33 70 18)" fill="#ef4444" />
        {/* Red Laser Beam targeting tooth */}
        <line x1="55" y1="35" x2="38" y2="47" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
        {/* Laser Spark burst */}
        <path d="M38 47 L35 43 L32 46 L36 49 L33 53 L38 50 L42 53 L40 48 Z" fill="#f59e0b" />
      </svg>
    ),
  },
  {
    title: "Jaw Surgery",
    href: "/book-appointment?treatment=Jaw%20Surgery",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Skull silhouette profile */}
        <path d="M45 8 C30 8, 20 20, 20 35 C20 45, 25 50, 25 55 C25 60, 28 62, 28 66 L34 66 C34 70, 32 75, 40 78 C48 81, 52 75, 52 72 L55 72 C58 72, 60 70, 60 66 C60 62, 58 60, 58 55 C65 52, 70 42, 70 35 C70 20, 60 8, 45 8 Z" fill="url(#skullGrad)" opacity="0.4" />
        {/* Surgical highlighted mandible/jawbone (Blue) */}
        <path d="M28 66 C28 66, 32 82, 45 82 C55 82, 60 74, 60 66 C60 58, 55 58, 52 62 C50 64, 46 64, 44 62 C40 58, 34 58, 34 66 H28 Z" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
        {/* Surgical plates / alignment screws */}
        <circle cx="38" cy="74" r="2" fill="#ef4444" />
        <circle cx="48" cy="74" r="2" fill="#ef4444" />
        <line x1="38" y1="74" x2="48" y2="74" stroke="#ef4444" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Genioplasty",
    href: "/book-appointment?treatment=Genioplasty",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="profileSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>
        {/* Profile Silhouette showing Nose, Lips, Chin, Neck */}
        <path d="M45 10 C35 10, 28 20, 28 30 C28 35, 34 38, 34 42 C34 45, 30 46, 30 50 C30 54, 34 56, 34 60 C34 65, 28 68, 32 78 C35 84, 45 88, 55 88 C65 88, 70 80, 70 70 C70 50, 60 10, 45 10 Z" fill="url(#profileSkin)" stroke="#ea580c" strokeWidth="1.5" />
        {/* Target alignment / correction lines around the chin area */}
        <path d="M26 68 C22 70, 22 76, 26 78" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
        {/* Double-headed arrow showing advancement/reduction */}
        <path d="M16 73 L26 73" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 70 L16 73 L19 76 M23 70 L26 73 L23 76" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Periodontal Diseases & Flap / Advanced Gum Treatment",
    href: "/book-appointment?treatment=Gum%20Treatment",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="diseasedGums" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        {/* Tooth with exposed root structure (gum recession) */}
        <path d="M30 30 C30 18, 40 12, 50 12 C60 12, 70 18, 70 30 C70 42, 65 48, 63 60 C61 70, 58 88, 55 88 C52 88, 51 76, 50 72 C49 76, 48 88, 45 88 C42 88, 39 70, 37 60 C35 48, 30 42, 30 30 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
        {/* Receded diseased gums (Lower line exposes roots more than item 7) */}
        <path d="M18 64 C28 58, 38 72, 50 72 C62 72, 70 58, 82 64 L82 92 C82 92, 50 94, 18 92 Z" fill="url(#diseasedGums)" stroke="#b91c1c" strokeWidth="2" />
        {/* Bone loss marker line */}
        <path d="M22 78 C35 78, 65 78, 78 78" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: "Dental Bridges",
    href: "/book-appointment?treatment=Dental%20Bridges",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Three unit bridge */}
        {/* Left Abutment Tooth */}
        <path d="M15 45 C15 35, 22 30, 30 30 C38 30, 42 35, 42 45 L42 75 L15 75 Z" fill="#ffffff" stroke="#475569" strokeWidth="2" />
        {/* Right Abutment Tooth */}
        <path d="M58 45 C58 35, 62 30, 70 30 C78 30, 85 35, 85 45 L85 75 L58 75 Z" fill="#ffffff" stroke="#475569" strokeWidth="2" />
        {/* Pontic (middle suspended tooth) */}
        <path d="M36 40 C36 30, 42 25, 50 25 C58 25, 64 30, 64 40 C64 50, 58 55, 50 55 C42 55, 36 40, 36 40 Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5" />
        {/* Joint Connectors */}
        <rect x="38" y="38" width="6" height="8" rx="1" fill="#3b82f6" />
        <rect x="56" y="38" width="6" height="8" rx="1" fill="#3b82f6" />
        {/* Missing tooth gap indication under pontic */}
        <path d="M40 70 Q50 64 60 70" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Mouth Ulcers",
    href: "/book-appointment?treatment=Mouth%20Ulcers%20Treatment",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lipsInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#fca5a5" />
          </linearGradient>
        </defs>
        {/* Opened mouth/lips details */}
        <path d="M20 50 C20 20, 80 20, 80 50 C80 80, 20 80, 20 50 Z" fill="url(#lipsInner)" stroke="#f87171" strokeWidth="3" />
        {/* Teeth row */}
        <rect x="32" y="35" width="36" height="8" rx="1" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
        <rect x="32" y="57" width="36" height="8" rx="1" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
        {/* Tongue */}
        <path d="M35 60 C35 50, 65 50, 65 60 Z" fill="#ef4444" opacity="0.8" />
        {/* Ulcer Sore (red ring with white/yellow center) */}
        <circle cx="50" cy="68" r="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5" />
        <circle cx="50" cy="68" r="4.5" fill="#fef08a" />
      </svg>
    ),
  },
  {
    title: "Preventive Dentistry",
    href: "/book-appointment?treatment=Preventive%20Dentistry",
    icon: (className) => (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shieldBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path d="M25 22 C25 22, 50 12, 50 12 C50 12, 75 22, 75 22 C75 22, 80 55, 50 78 C20 55, 25 22, 25 22 Z" fill="url(#shieldBlue)" stroke="#1d4ed8" strokeWidth="3" />
        {/* Protected Tooth Inside */}
        <path d="M40 38 C40 30, 45 28, 50 28 C55 28, 60 30, 60 38 C60 45, 57 48, 56 52 C55 55, 54 58, 52 58 C50 58, 50 55, 49 53 C48 55, 48 58, 46 58 C44 58, 43 55, 42 52 C41 48, 40 45, 40 38 Z" fill="#ffffff" />
        {/* Checkmark overlay on bottom right of shield */}
        <circle cx="68" cy="68" r="14" fill="#10b981" stroke="#ffffff" strokeWidth="2.5" />
        <path d="M62 68 L66 72 L74 64" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HomeTreatmentsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4 lg:gap-5">
      {treatments.map((treatment, idx) => (
        <Link
          key={`${treatment.title}-${idx}`}
          href={treatment.href}
          className="group bg-white p-3.5 md:p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-premium hover:border-blue-300 transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[155px] md:min-h-[175px]"
        >
          <div className="w-12 h-12 md:w-14 h-14 text-blue-600 mb-3 flex items-center justify-center bg-blue-50/50 rounded-xl group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300 p-2">
            {treatment.icon("w-full h-full object-contain")}
          </div>
          <span className="font-bold text-[#0a1d37] text-[12px] md:text-[13px] leading-tight tracking-tight mt-auto group-hover:text-blue-600 transition-colors duration-300">
            {treatment.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
