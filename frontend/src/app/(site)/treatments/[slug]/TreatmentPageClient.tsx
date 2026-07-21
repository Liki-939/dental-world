"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { treatmentsData } from "@/data/treatments";
import {
  Star,
  Clock,
  Shield,
  Award,
  Calendar,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  XCircle,

  Lock,
  Stethoscope,
  Syringe,
  HeartPulse,
  Sparkles,
  Smile,
  HelpCircle,
  Check,
  X,
  AlertTriangle,
  Search
} from "lucide-react";

// Key Highlights SVG mapping
function FeatureIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg className="w-9 h-9 text-[#0056D2] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.31 5.62 2.31 8.5C8.31 18.84 7 21 7 22c1.5 0 3.5-1 5-2.75 1.5 1.75 3.5 2.75 5 2.75 0-1-1.31-3.16-1.31-5.5C15.69 13.62 18 11.31 18 8c0-3.31-2.69-6-6-6z" />
        <path d="M9 10h6" />
        <path d="M12 7v6" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg className="w-9 h-9 text-[#0056D2] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.31 5.62 2.31 8.5C8.31 18.84 7 21 7 22c1.5 0 3.5-1 5-2.75 1.5 1.75 3.5 2.75 5 2.75 0-1-1.31-3.16-1.31-5.5C15.69 13.62 18 11.31 18 8c0-3.31-2.69-6-6-6z" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg className="w-9 h-9 text-[#0056D2] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 16h2M2 20h2M12 4h4" />
        <circle cx="6" cy="10" r="2" />
        <circle cx="18" cy="14" r="2" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg className="w-9 h-9 text-[#0056D2] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </svg>
    );
  }
  return (
    <svg className="w-9 h-9 text-[#0056D2] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4" />
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

// Symptoms SVG mapping
function SymptomIcon({ name }: { name: string }) {
  if (name.toLowerCase() === "pain") {
    return (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.31 5.62 2.31 8.5C8.31 18.84 7 21 7 22c1.5 0 3-1 4.5-2 1.5 1 3 2 4.5 2 0-1-1.31-3.16-1.31-5.5C14.69 13.62 17 11.31 17 8c0-3.31-2.31-6-5.31-6z" />
        <path d="M12 5l-2 3h4l-2 3" strokeWidth="2.5" />
      </svg>
    );
  }
  if (name.toLowerCase() === "swelling") {
    return (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    );
  }
  if (name.toLowerCase() === "sensitivity") {
    return (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }
  if (name.toLowerCase() === "teeth discoloration" || name.toLowerCase() === "stained/yellow teeth") {
    return (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2C8 2 6 5 6 9c0 4 3 6.5 3 9.5v2.5h6v-2.5c0-3 3-5.5 3-9.5 0-4-2-7-6-7z" />
        <path d="M9 9h6" strokeDasharray="2 2" />
        <path d="M10 13h4" strokeDasharray="2 2" />
      </svg>
    );
  }
  if (name.toLowerCase() === "pimple on gums" || name.toLowerCase() === "early tooth loss") {
    return (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (name.toLowerCase() === "cracked tooth" || name.toLowerCase() === "chipped teeth" || name.toLowerCase() === "tooth decay") {
    return (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2.5 5.5 2.5 8.5 0 1-.5 2.5-1.5 3.5h10c-1-1-1.5-2.5-1.5-3.5 0-3 2.5-5 2.5-8.5 0-3.5-2.5-6-6-6z" />
        <path d="M12 4l-2 5h4l-2 4" />
      </svg>
    );
  }
  // Default fallback
  return <Smile className="w-8 h-8 text-current" />;
}

// Flow steps icon mapping
function StepIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "stethoscope":
      return <Stethoscope className="w-7 h-7 text-current" />;
    case "syringe":
      return <Syringe className="w-7 h-7 text-current" />;
    case "tooth":
      return (
        <svg className="w-7 h-7 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.31 5.62 2.31 8.5C8.31 18.84 7 21 7 22c1.5 0 3.5-1 5-2.75 1.5 1.75 3.5 2.75 5 2.75 0-1-1.31-3.16-1.31-5.5C15.69 13.62 18 11.31 18 8c0-3.5-2.5-6-6-6z" />
        </svg>
      );
    case "clean":
      return <Sparkles className="w-7 h-7 text-current" />;
    case "shield":
      return <Shield className="w-7 h-7 text-current" />;
    case "crown":
      return (
        <svg className="w-7 h-7 text-current" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
          <path d="M3 20h18v2H3z" />
        </svg>
      );
    default:
      return <Check className="w-7 h-7 text-current" />;
  }
}

// Global data definitions matching the target structure for all slugs
const treatmentsInfo: Record<string, {
  tagline: string;
  subtitle: string;
  techStat: string;
  heroImage: string;
  features: { title: string; desc: string }[];
  symptoms: string[];
  whatIsTitle: string;
  whatIsText1: string;
  whatIsText2: string;
  whatIsNote: string;
  howItWorksSteps: { step: number; title: string; desc: string; icon: string }[];
  howItWorksSummary: string;
  processSteps: { step: number; title: string; desc: string; icon?: string }[];
  types: { title: string; desc: string }[];
  startingCost: string;
  costPoints: string[];
  costDisclaimer: string;
  comparisonTitle: string;
  comparisonHeader: string[];
  comparisonRows: { feature: string; main: string; opt1: string; opt2: string }[];
  whyChooseCards: { title: string; desc: string }[];
  beforeAfterImage?: string;
  testimonialText: string;
  testimonialAuthor: string;
  faqs: { question: string; answer: string }[];
  bannerBelowHero?: string;
  footerImageBackground?: string;
  visualProcedures?: { title: string; image: string; desc: string; category?: string }[];
  detailedGallery?: { title: string; image: string; desc: string }[];
  costImage?: string;
}> = {
  'root-canal-treatment': {
    tagline: 'PAIN RELIEF. TOOTH SAVING CARE.',
    subtitle: 'Painless. Precise. Permanent.',
    techStat: 'Advanced Rotary RCT',
    heroImage: '/images/new images/Treatments Theme Images/Root Canal Treatment.png',
    features: [
      { title: 'Pain Relief', desc: 'Painless treatment with anesthesia' },
      { title: 'Save Natural Tooth', desc: 'Keep your original tooth for life' },
      { title: 'Advanced Technology', desc: 'Rotary tools & digital imaging' },
      { title: 'Expert Endodontists', desc: 'Specialists for accurate diagnosis' },
      { title: 'Long Lasting Results', desc: 'Durable & reliable treatment' }
    ],
    symptoms: ['Pain', 'Swelling', 'Sensitivity', 'Teeth Discoloration', 'Pimple on Gums', 'Cracked Tooth'],
    whatIsTitle: 'WHAT ARE ROOT CANAL TREATMENTS?',
    whatIsText1: "A root canal is needed when decay, injury, or infection reaches the tooth's inner pulp, causing pain, sensitivity, or swelling. The infected tissue is removed, the canals are thoroughly cleaned, disinfected, and sealed, and the tooth is later strengthened with a crown to restore full function.",
    whatIsText2: "Most treatments are completed in 1-2 sittings and are performed by Endodontists or certified dentists trained in advanced root canal techniques. This procedure saves your natural tooth, stops infection from spreading, relieves discomfort, and helps you chew comfortably again.",
    whatIsNote: "We use precision imaging and rotary endodontics to make your RCT painless, predictable, and long-lasting.",
    howItWorksSteps: [
      { step: 1, title: 'Diagnosis', desc: 'Digital X-rays to assess infection', icon: 'stethoscope' },
      { step: 2, title: 'Painless Anesthesia', desc: 'Numbing for comfortable treatment', icon: 'syringe' },
      { step: 3, title: 'Removal', desc: 'Infected pulp is removed carefully', icon: 'tooth' },
      { step: 4, title: 'Cleaning', desc: 'Canals are cleaned & disinfected', icon: 'clean' },
      { step: 5, title: 'Sealing', desc: 'Canals are sealed to stop bacteria', icon: 'shield' },
      { step: 6, title: 'Crown', desc: 'Tooth is restored with a strong crown', icon: 'crown' }
    ],
    howItWorksSummary: 'A root canal works by eliminating infection from inside the tooth and protecting it from recurring damage. Digital X-rays help determine the exact depth of the canals, while rotary endodontic tools ensure precise cleaning and shaping. Once disinfected, the canals are tightly sealed to block bacteria. Finally, a crown reinforces the tooth for durability, restoring natural function and appearance.',
    processSteps: [
      { step: 1, title: 'Examination & Digital X-ray', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Painless Local Anesthesia', desc: '', icon: 'syringe' },
      { step: 3, title: 'Infected Tissue Removal', desc: '', icon: 'tooth' },
      { step: 4, title: 'Cleaning & Shaping', desc: '', icon: 'clean' },
      { step: 5, title: 'Filling & Sealing the Canals', desc: '', icon: 'shield' },
      { step: 6, title: 'Crown Placement (if required)', desc: '', icon: 'crown' }
    ],
    types: [
      { title: 'Single-Visit RCT', desc: 'Completed in one sitting for cases with minimal infection using rotary tools.' },
      { title: 'Laser-Assisted RCT', desc: 'Laser disinfection for deeper cleaning, less pain, and faster healing.' },
      { title: 'Microscopic RCT', desc: 'Microscope-guided precision for complex canals and higher success rate.' }
    ],
    startingCost: '₹4,600*',
    costPoints: ['Affordable Pricing', 'No Hidden Costs', 'EMI Options Available', 'Customized Treatment Plan'],
    costDisclaimer: '*Treatment cost varies based on tooth condition and complexity.',
    comparisonTitle: 'ROOT CANAL vs OTHER OPTIONS',
    comparisonHeader: ['RCT', 'FILLING', 'EXTRACTION'],
    comparisonRows: [
      { feature: 'Saves Natural Tooth', main: 'check', opt1: 'check', opt2: 'cross' },
      { feature: 'Pain Relief', main: 'check', opt1: 'check', opt2: 'cross' },
      { feature: 'Long Term Solution', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Cost Effective', main: 'check', opt1: 'dash', opt2: 'cross' },
      { feature: 'Prevents Future Problems', main: 'check', opt1: 'dash', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Microscopic Dentistry', desc: 'Enhanced accuracy' },
      { title: 'Digital X-rays', desc: 'Precise diagnosis & safe treatment' },
      { title: 'Rotary Endodontics', desc: 'Faster & more effective' },
      { title: 'Sterilization Protocols', desc: '10x safety standards' },
      { title: 'Experienced Endodontists', desc: 'Specialist care' },
      { title: 'High Success Rate', desc: '98%+ success rate' }
    ],
    beforeAfterImage: '/images/new images/Root Canal Before & after.jpeg',
    testimonialText: 'I had severe tooth pain and was afraid of RCT. But the treatment at Dental World was completely painless. Excellent care!',
    testimonialAuthor: 'Ramesh, Pragathi Nagar',
    faqs: [
      { question: 'Is root canal treatment painful?', answer: 'No, we use advanced local anesthesia and rotary tools to make the procedure virtually painless and highly comfortable.' },
      { question: 'How many sittings are required for RCT?', answer: 'Most root canal treatments are completed in 1 to 2 sittings, depending on the severity of the infection.' },
      { question: 'How much does a root canal cost in Hyderabad?', answer: 'The starting cost is ₹4,600, which varies based on tooth type, location, and choice of crown.' },
      { question: 'Do I need a crown after root canal treatment?', answer: 'Yes, a crown is highly recommended after RCT to protect the treated tooth from cracking and restore its full chewing strength.' },
      { question: 'Can root canal treatment save my tooth permanently?', answer: 'Yes, with proper oral hygiene and a high-quality crown, a root-canal-treated tooth can last a lifetime.' },
      { question: 'What happens if I delay root canal treatment?', answer: 'Delaying RCT can lead to severe tooth decay, painful abscesses, jawbone infection, and eventually require tooth extraction.' }
    ]
  },
  'dental-implants': {
    tagline: 'PERMANENT TOOTH REPLACEMENT. NATURAL FEEL.',
    subtitle: 'Strong. Natural. Lifelong.',
    techStat: '3D Guided Implants',
    heroImage: '/images/new images/Treatments Theme Images/Dental Implants.png',
    features: [
      { title: '100% Biocompatible', desc: 'Medical-grade titanium fuses with bone' },
      { title: 'Restore Biting Force', desc: 'Chew your favorite foods easily' },
      { title: 'Prevent Bone Loss', desc: 'Maintains facial bone structure' },
      { title: 'No Impact on Adjacent Teeth', desc: 'Preserves nearby healthy teeth' },
      { title: 'Lifetime Durability', desc: 'A permanent solution for missing teeth' }
    ],
    symptoms: ['Missing Tooth', 'Loose Dentures', 'Difficulty Chewing', 'Bone Loss', 'Sinking Face Profile', 'Shifting Teeth'],
    whatIsTitle: 'WHAT ARE DENTAL IMPLANTS?',
    whatIsText1: 'Dental implants are the gold standard for replacing missing teeth. An implant consists of a titanium screw that is surgically placed into the jawbone, acting as a sturdy root. Once fused with the bone, a custom-designed crown is placed on top, looking and functioning exactly like a natural tooth.',
    whatIsText2: 'Whether you are missing a single tooth, multiple teeth, or require full mouth teeth replacement, implants offer a permanent, stable, and highly aesthetic solution compared to loose dentures or traditional bridges.',
    whatIsNote: 'We use 3D CBCT imaging and computer-guided surgery to place implants with maximum precision and minimal discomfort.',
    howItWorksSteps: [
      { step: 1, title: 'Diagnosis', desc: '3D CBCT scans assess bone volume', icon: 'stethoscope' },
      { step: 2, title: 'Guiding', desc: 'Computer-guided surgical planning', icon: 'clean' },
      { step: 3, title: 'Placement', desc: 'Implant post placed under local numbing', icon: 'tooth' },
      { step: 4, title: 'Healing', desc: 'Implant fuses with jawbone (3-6 months)', icon: 'shield' },
      { step: 5, title: 'Abutment', desc: 'Connector post is placed on implant', icon: 'clean' },
      { step: 6, title: 'Crown', desc: 'Custom zirconia crown is attached', icon: 'crown' }
    ],
    howItWorksSummary: 'Dental implants work by replacing both the root and crown of a missing tooth. The titanium implant fuses naturally with your jawbone in a process called osseointegration. This creates a secure anchor for the artificial crown, ensuring it never slips, clicks, or moves, allowing you to smile and chew with full confidence.',
    processSteps: [
      { step: 1, title: 'Consultation & 3D Scan', desc: '' },
      { step: 2, title: '3D Implant Planning', desc: '' },
      { step: 3, title: 'Implant Post Placement', desc: '' },
      { step: 4, title: 'Osseointegration (Healing)', desc: '' },
      { step: 5, title: 'Connector Abutment Fitting', desc: '' },
      { step: 6, title: 'Custom Crown Attachment', desc: '' }
    ],
    types: [
      { title: 'Single Tooth Implant', desc: 'Replaces a single missing tooth with one implant screw and one crown.' },
      { title: 'Multiple Teeth Implants', desc: 'Uses multiple implants to support a bridge for several consecutive missing teeth.' },
      { title: 'All-On-4 / All-On-6', desc: 'Full-arch rehabilitation using 4 or 6 implants to support a fixed set of teeth.' }
    ],
    startingCost: '₹28,000*',
    costPoints: ['Premium Brands (Straumann/Nobel)', 'Lifetime Warranty', '0% EMI Options', 'Complete Consultation'],
    costDisclaimer: '*Cost depends on the implant brand, bone grafting needs, and crown material.',
    comparisonTitle: 'DENTAL IMPLANTS vs OTHER OPTIONS',
    comparisonHeader: ['IMPLANTS', 'BRIDGE', 'DENTURES'],
    comparisonRows: [
      { feature: 'Bone Preservation', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Lifespan (20+ Years)', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Natural Look & Feel', main: 'check', opt1: 'check', opt2: 'cross' },
      { feature: 'Protects Neighboring Teeth', main: 'check', opt1: 'cross', opt2: 'check' },
      { feature: 'No Slipping or Clicking', main: 'check', opt1: 'check', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: '3D CBCT Technology', desc: 'Precise planning' },
      { title: 'Guided Implantology', desc: 'Virtually pain-free placement' },
      { title: 'Premium Material Brands', desc: 'Straumann & Nobel Biocare' },
      { title: 'Lifetime Support Warranty', desc: 'Confidence guaranteed' },
      { title: 'Experienced Implantologist', desc: 'Specialist care' },
      { title: 'High Success Rate', desc: '98%+ success rate' }
    ],
    beforeAfterImage: '/images/before and after/dental_implant_before_after.png',
    costImage: '/images/new images/Treatments Theme Images/Dental Implants.png',
    testimonialText: 'I replaced my missing front tooth with an implant at Dental World. The new tooth looks and feels exactly like my natural teeth!',
    testimonialAuthor: 'Sunitha Rao, Bachupally',
    faqs: [
      { question: 'Is dental implant surgery painful?', answer: 'No, the procedure is performed under local anesthesia and is completely painless. Post-operative discomfort is minimal and easily managed with medications.' },
      { question: 'How long does the dental implant process take?', answer: 'Typically, it takes 3 to 6 months for the implant to fuse with the bone before placing the final crown, though immediate implants are possible in some cases.' },
      { question: 'How long do dental implants last?', answer: 'With good oral hygiene and regular dental checkups, dental implants are designed to last a lifetime.' }
    ]
  },
  'braces': {
    tagline: 'SMILE ALIGNMENT. PERFECT BITE.',
    subtitle: 'Aligned. Healthy. Confident.',
    techStat: 'Orthodontic Specialist Care',
    heroImage: '/images/braces/braces_treatment_hero.png',
    features: [
      { title: 'Perfect Alignment', desc: 'Crooked / crowded teeth correction' },
      { title: 'Bite Correction', desc: 'Resolves overbites, underbites, & crossbites' },
      { title: 'Improve Oral Hygiene', desc: 'Straight teeth are easier to clean' },
      { title: 'Clear Options Available', desc: 'Ceramic brackets are virtually invisible' },
      { title: 'Predictable Outcomes', desc: 'Time-tested orthodontic solutions' }
    ],
    symptoms: ['Crooked Teeth', 'Tooth Gaps', 'Overbite / Underbite', 'Crowding', 'Difficulty Chewing', 'Speech Issues'],
    whatIsTitle: 'WHAT ARE BRACES?',
    whatIsText1: 'Braces are the classic, highly effective orthodontic treatment designed to align misaligned teeth and correct bite issues. They consist of brackets bonded to each tooth, connected by a flexible archwire that exerts gentle, continuous pressure to guide teeth into their correct positions.',
    whatIsText2: 'Modern braces are much smaller, more comfortable, and sleeker than older metal braces. For those seeking discretion, clear ceramic braces are available that blend in with your natural tooth color.',
    whatIsNote: 'We provide specialized pediatric and adult orthodontic care, ensuring a personalized treatment plan for patients of all ages.',
    howItWorksSteps: [
      { step: 1, title: 'Diagnosis', desc: 'Clinical evaluation & dental X-rays', icon: 'stethoscope' },
      { step: 2, title: 'Scanning', desc: 'Intraoral scans map tooth layout', icon: 'clean' },
      { step: 3, title: 'Bonding', desc: 'Brackets are bonded to each tooth', icon: 'tooth' },
      { step: 4, title: 'Archwire', desc: 'The archwire is inserted to guide teeth', icon: 'shield' },
      { step: 5, title: 'Adjustments', desc: 'Regular wire adjustments every 4 weeks', icon: 'clean' },
      { step: 6, title: 'Retainer', desc: 'Retainers protect your straight smile', icon: 'crown' }
    ],
    howItWorksSummary: 'Orthodontic braces work by applying continuous gentle pressure over time to slowly move teeth in a specific direction. As the teeth shift, the bone shape changes to secure the teeth in their new aligned positions. Regular adjustments ensure the teeth keep moving in the right direction.',
    processSteps: [
      { step: 1, title: 'Initial Consultation', desc: '' },
      { step: 2, title: 'Digital X-rays & Scans', desc: '' },
      { step: 3, title: 'Bracket Bonding Appointment', desc: '' },
      { step: 4, title: 'Wire Placement', desc: '' },
      { step: 5, title: 'Monthly Wire Adjustments', desc: '' },
      { step: 6, title: 'Braces Removal & Retainer Fitting', desc: '' }
    ],
    types: [
      { title: 'Metal Braces', desc: 'Traditional, highly durable brackets connected by metal wires.' },
      { title: 'Ceramic Braces', desc: 'Tooth-colored or clear brackets that blend in for a less noticeable look.' },
      { title: 'Self-Ligating Braces', desc: 'Advanced clips instead of elastics, allowing faster movement and fewer visits.' }
    ],
    startingCost: '₹30,000*',
    costPoints: ['High-Quality Materials', 'Flexible Installment Plans', 'Experienced Orthodontist', 'Discreet Options'],
    costDisclaimer: '*Cost varies depending on the type of braces chosen and case complexity.',
    comparisonTitle: 'BRACES vs ALIGNERS',
    comparisonHeader: ['BRACES', 'ALIGNERS', 'DENTURES'],
    comparisonRows: [
      { feature: 'Treats Severe Bite Cases', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Discreet Appearance', main: 'cross', opt1: 'check', opt2: 'cross' },
      { feature: 'Removable Device', main: 'cross', opt1: 'check', opt2: 'check' },
      { feature: 'No Diet Restrictions', main: 'cross', opt1: 'check', opt2: 'cross' },
      { feature: 'Fixed Connection', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Specialist Orthodontist', desc: 'Dedicated expert care' },
      { title: 'Modern Ceramic Brackets', desc: 'Virtually invisible look' },
      { title: 'Self-Ligating Systems', desc: 'Fewer visits, faster results' },
      { title: 'Predictable Planning', desc: 'Computerized simulations' },
      { title: 'Comfort-First Materials', desc: 'Minimal tissue irritation' },
      { title: 'Complete Retainer Guidance', desc: 'Locks in your perfect smile' }
    ],
    beforeAfterImage: '/images/before and after/Dental Braces before and after.jpeg',
    costImage: '/images/braces/icons (3).png',
    testimonialText: 'My teeth are perfectly aligned now! The team made the braces journey so easy and comfortable.',
    testimonialAuthor: 'Rahul M., Pragathi Nagar',
    faqs: [
      { question: 'Do braces hurt?', answer: 'You may feel some soreness or pressure for a few days after brackets are first placed or adjusted, which is temporary and easily managed.' },
      { question: 'How long do I need to wear braces?', answer: 'On average, braces are worn for 12 to 24 months, depending on how much alignment is needed.' },
      { question: 'Can adults get orthodontic braces?', answer: 'Yes! Orthodontic treatment is highly effective at any age. We offer clear ceramic braces that are perfect for adults.' }
    ],
    footerImageBackground: '/images/braces/Footer braces.jpeg',
    detailedGallery: [
      {
        title: 'Modern Ceramic Brackets',
        image: '/images/braces/Close-up_smiling_mouth_showing_modern_202606212033.jpeg',
        desc: 'Tooth-colored, ultra-aesthetic brackets that are highly discreet and resistant to staining.'
      },
      {
        title: 'Traditional Metal Braces',
        image: '/images/braces/Hyper-realistic_close-up_of_human_teeth_202606212034.jpeg',
        desc: 'High-grade stainless steel brackets offering maximum durability, control, and reliable alignment.'
      },
      {
        title: 'Invisalign Clear Aligners',
        image: '/images/braces/Premium_dental_aligner_case_opened_202606212033.jpeg',
        desc: 'Custom-made removable clear trays designed for comfortable, near-invisible alignment.'
      },
      {
        title: 'Orthodontic Attachment Systems',
        image: '/images/braces/Set_of_six_premium_orthodontic_202606212033.jpeg',
        desc: 'Advanced self-ligating clips and custom attachments designed for accelerated tooth movement.'
      },
      {
        title: 'Smart Alignment Technology',
        image: '/images/braces/icons (3).png',
        desc: 'Interactive mechanical mapping used to design precise force vectors and custom alignment steps.'
      }
    ]
  },
  'invisalign-treatment': {
    tagline: 'DISCREET ALIGNMENT. INVISIBLE BRACES.',
    subtitle: 'Clear. Removable. Comfortable.',
    techStat: 'Invisalign Certified Provider',
    heroImage: '/images/new images/Treatments Theme Images/Clear Aligners.png',
    features: [
      { title: 'Virtually Invisible', desc: 'Clear plastic aligners are unnoticeable' },
      { title: '100% Removable', desc: 'Take them out to eat, brush, and floss' },
      { title: 'No Food Restrictions', desc: 'Enjoy all your favorite meals' },
      { title: 'Custom SmartTrack', desc: 'Comfortable medical-grade plastic' },
      { title: 'Predictable 3D Planning', desc: 'See your final smile before starting' }
    ],
    symptoms: ['Crooked Teeth', 'Teeth Gaps', 'Crowding', 'Overbite / Underbite', 'Mild Crossbite', 'Uneven Smile'],
    whatIsTitle: 'WHAT IS INVISALIGN?',
    whatIsText1: 'Invisalign is the modern, highly popular alternative to traditional metal braces. Instead of brackets and wires, Invisalign uses a series of custom-made, clear, medical-grade plastic trays called aligners to gently move your teeth into the desired position.',
    whatIsText2: 'Because they are clear and removable, Invisalign aligners blend in with your lifestyle. You can take them out for meals, business meetings, and brushing, making them the most comfortable and discreet alignment option available.',
    whatIsNote: 'We are a certified Invisalign provider in Hyderabad, utilizing the latest iTero 3D scanners for precise treatment plans.',
    howItWorksSteps: [
      { step: 1, title: 'Consultation', desc: 'Certified provider evaluates your smile', icon: 'stethoscope' },
      { step: 2, title: '3D Scan', desc: 'iTero scanner creates a 3D model', icon: 'clean' },
      { step: 3, title: 'Simulation', desc: 'ClinCheck software plans tooth movement', icon: 'tooth' },
      { step: 4, title: 'Aligners', desc: 'Custom clear aligners are fabricated', icon: 'shield' },
      { step: 5, title: 'Progressing', desc: 'Switch to a new set every 1-2 weeks', icon: 'clean' },
      { step: 6, title: 'Smile', desc: 'Final retainers lock in the result', icon: 'crown' }
    ],
    howItWorksSummary: 'Invisalign works by using a custom sequence of clear aligners that apply targeted force to specific teeth to gradually guide them into place. You wear each set for about 22 hours a day, and transition to the next set in the series as your teeth move.',
    processSteps: [
      { step: 1, title: 'Certified Consultation', desc: '' },
      { step: 2, title: 'iTero 3D Dental Scanning', desc: '' },
      { step: 3, title: '3D Smile Simulation Preview', desc: '' },
      { step: 4, title: 'Aligner Set Delivery', desc: '' },
      { step: 5, title: 'Wearing Aligners 22 Hours/Day', desc: '' },
      { step: 6, title: 'Final Retainer Fitment', desc: '' }
    ],
    types: [
      { title: 'Invisalign Express', desc: 'A short-term treatment of up to 7 aligners for minor crowding or spacing.' },
      { title: 'Invisalign Lite', desc: 'For moderate alignment cases using up to 14 sets of clear aligners.' },
      { title: 'Invisalign Comprehensive', desc: 'Full orthodontic treatment with unlimited aligners for complex cases.' }
    ],
    startingCost: '₹99,999*',
    costPoints: ['Certified Invisalign Specialists', 'iTero 3D Scan Included', 'Custom 3D Simulation', 'Retainers Included'],
    costDisclaimer: '*Pricing depends on the complexity of teeth alignment and number of aligners needed.',
    comparisonTitle: 'INVISALIGN vs METAL BRACES',
    comparisonHeader: ['INVISALIGN', 'BRACES', 'DENTURES'],
    comparisonRows: [
      { feature: 'Virtually Invisible', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Removable for Eating/Brushing', main: 'check', opt1: 'cross', opt2: 'check' },
      { feature: 'No Soft Tissue Irritation', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'No Diet Restrictions', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Digital Treatment Simulation', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Certified Invisalign Doctor', desc: 'Expert provider' },
      { title: 'iTero 3D Scanning', desc: 'No gooey tray molds' },
      { title: 'SmartTrack Material', desc: 'Maximum comfort & control' },
      { title: 'Discreet and Invisible', desc: 'Smile with confidence' },
      { title: 'Fewer Dental Office Visits', desc: 'Fits your busy schedule' },
      { title: 'Predictable Outcomes', desc: 'See your final smile first' }
    ],
    beforeAfterImage: '/images/before and after/Invisalign Before-After.png',
    costImage: '/images/new images/Treatments Theme Images/Clear Aligners.png',
    testimonialText: 'Clear aligners were so comfortable and virtually invisible. Nobody even knew I was undergoing orthodontic treatment!',
    testimonialAuthor: 'Meghana P., Pragathi Nagar',
    faqs: [
      { question: 'How many hours a day must I wear Invisalign?', answer: 'You must wear the aligners for 20-22 hours a day, removing them only to eat, drink hot beverages, brush, and floss.' },
      { question: 'Are aligners completely invisible?', answer: 'Yes, they are made of medical-grade clear plastic and are virtually unnoticeable during daily conversations.' },
      { question: 'Is Invisalign suitable for all age groups?', answer: 'Yes, it is highly suitable for teens and adults who want a comfortable, aesthetic teeth alignment option.' }
    ]
  },
  'smile-designing': {
    tagline: 'SMILE TRANSFORMATIONS. BRAND NEW CONFIDENCE.',
    subtitle: 'Custom. Radiant. Beautiful.',
    techStat: 'Digital Smile Design',
    heroImage: '/images/new images/Treatments Theme Images/Smile Designing.png',
    features: [
      { title: 'Personalized Makeover', desc: 'Designed to fit your unique facial features' },
      { title: 'Correct Multi-Flaws', desc: 'Fixes gaps, chips, stains, and crooked teeth' },
      { title: 'Ultra-thin Veneers', desc: 'Stain-resistant porcelain E-max' },
      { title: 'Test Drive Your Smile', desc: 'Preview your look with mock-ups first' },
      { title: 'Boost Confidence', desc: 'A stunning, radiant smile you love' }
    ],
    symptoms: ['Stained/Yellow Teeth', 'Chipped Teeth', 'Tooth Gaps', 'Uneven Teeth', 'Gummy Smile', 'Misshapen Teeth'],
    whatIsTitle: 'WHAT IS SMILE DESIGNING?',
    whatIsText1: 'Smile Designing is a comprehensive cosmetic dental procedure aimed at improving the aesthetics of your smile. It combines art and science to analyze your facial structure, tooth color, size, and alignment to create a harmonious, beautiful smile tailored specifically for you.',
    whatIsText2: 'Using a combination of treatments like porcelain veneers, dental crowns, teeth whitening, and gum contouring, we can completely transform stained, chipped, or gapped teeth into a beautiful masterpiece.',
    whatIsNote: 'We utilize state-of-the-art Digital Smile Design software, allowing you to preview and approve your new smile before we begin.',
    howItWorksSteps: [
      { step: 1, title: 'Consultation', desc: 'Discussion of aesthetic smile goals', icon: 'stethoscope' },
      { step: 2, title: 'Photography', desc: 'Studio photos and 3D dental scans', icon: 'clean' },
      { step: 3, title: 'Design', desc: 'Digital smile design mapping', icon: 'tooth' },
      { step: 4, title: 'Mock-up', desc: 'Temporary trial smile fitted for review', icon: 'shield' },
      { step: 5, title: 'Prep', desc: 'Minor tooth shaping for veneers/crowns', icon: 'clean' },
      { step: 6, title: 'Bonding', desc: 'Final E-max veneers permanently bonded', icon: 'crown' }
    ],
    howItWorksSummary: 'Smile Designing works by carefully planning cosmetic modifications to your teeth. Porcelain veneers or crowns are custom fabricated in a dental lab to match the precise color, shape, and transparency of natural enamel. Once bonded, they are highly stain-resistant and durable.',
    processSteps: [
      { step: 1, title: 'Aesthetic Consultation', desc: '' },
      { step: 2, title: 'Studio Photos & Scans', desc: '' },
      { step: 3, title: 'Digital Smile Simulation', desc: '' },
      { step: 4, title: 'Mock-up Trial Smile Fitment', desc: '' },
      { step: 5, title: 'Tooth Preparation', desc: '' },
      { step: 6, title: 'Permanent Veneer Bonding', desc: '' }
    ],
    types: [
      { title: 'Composite Veneers', desc: 'Direct bonding done in a single visit for quick, minor aesthetic enhancements.' },
      { title: 'Porcelain Veneers (E-max)', desc: 'Ultra-thin, custom porcelain covers offering superior durability and realism.' },
      { title: 'Full Cosmetic Makeover', desc: 'Combines veneers, crowns, gum lifting, and whitening for a total transformation.' }
    ],
    startingCost: '₹40,000*',
    costPoints: ['Digital Smile Mock-up', 'Premium E-max Veneers', 'Stain-Resistant Materials', 'Custom Shade Selection'],
    costDisclaimer: '*Cost varies based on number of teeth involved and selection of composite vs porcelain.',
    comparisonTitle: 'PORCELAIN VENEERS vs COMPOSITE BONDING',
    comparisonHeader: ['PORCELAIN', 'COMPOSITE', 'WHITENING'],
    comparisonRows: [
      { feature: 'Lifespan (10-15+ Years)', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Resists Coffee & Tea Stains', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Requires Minor Prep', main: 'warn', opt1: 'check', opt2: 'check' },
      { feature: 'Superior Natural Realism', main: 'check', opt1: 'warn', opt2: 'check' },
      { feature: 'Single-Sitting Procedure', main: 'cross', opt1: 'check', opt2: 'check' }
    ],
    whyChooseCards: [
      { title: 'Digital Smile Design Suite', desc: 'Preview before you buy' },
      { title: 'Premium E-max Porcelain', desc: 'Stain-free & strong' },
      { title: 'Custom Color Matching', desc: 'Matches natural tooth enamel' },
      { title: 'Experienced Cosmetic Dentist', desc: 'Specialist care' },
      { title: 'Minimal Tooth Preparation', desc: 'Preserves natural enamel' },
      { title: 'High Success Rate', desc: '100% patient satisfaction' }
    ],
    beforeAfterImage: '/images/before and after/Smile Designing before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Smile Designing.png',
    testimonialText: 'I can\'t stop smiling! The veneers look incredibly natural and have given me so much confidence.',
    testimonialAuthor: 'Karan D., Bachupally',
    faqs: [
      { question: 'Will my smile makeover look natural?', answer: 'Yes, we custom-match the shade, texture, and shape of veneers and crowns to complement your facial structure, skin tone, and natural teeth.' },
      { question: 'How long do porcelain veneers last?', answer: 'Porcelain veneers are highly durable and, with good oral hygiene, can easily last 10 to 15 years or more.' },
      { question: 'Is the smile designing process painful?', answer: 'No, the procedure is minimally invasive. Local anesthesia is used during preparation to ensure a comfortable experience.' }
    ]
  },
  'pediatric-dentistry': {
    tagline: 'GENTLE CARE. HAPPY KIDS.',
    subtitle: 'Fun. Painless. Safe.',
    techStat: 'Pediatric Dental Specialist',
    heroImage: '/images/pediatric/Pediatric Treatment Hero.png',
    features: [
      { title: 'Child-Friendly Clinic', desc: 'A fun, welcoming environment' },
      { title: 'Painless Treatments', desc: 'Specialized techniques for child comfort' },
      { title: 'Preventive Care', desc: 'Fluoride and sealants protect cavities' },
      { title: 'Growth Monitoring', desc: 'Ensures correct jaw & tooth development' },
      { title: 'Positive Habits', desc: 'Builds positive dental associations early' }
    ],
    symptoms: ['Tooth Decay', 'Toothache', 'Early Tooth Loss', 'Thumbsucking Bite', 'Delayed Eruption', 'Sensitive Teeth'],
    whatIsTitle: 'WHAT IS PEDIATRIC DENTISTRY?',
    whatIsText1: 'Pediatric dentistry is dedicated to the oral health of children from infancy through their teenage years. Children have unique dental needs and behaviors, requiring specialized training and gentle care to make their dental visits pleasant.',
    whatIsText2: 'We offer specialized treatments like tooth sealants to prevent decay, fluoride therapy to strengthen enamel, and gentle baby-tooth root canals (pulpectomies) to relieve pain and preserve primary teeth.',
    whatIsNote: 'Our team uses "Tell-Show-Do" communication techniques to make children feel safe, engaged, and completely relaxed.',
    howItWorksSteps: [
      { step: 1, title: 'Meet & Greet', desc: 'Introduces child to the dental chair', icon: 'stethoscope' },
      { step: 2, title: 'Checkup', desc: 'Gentle exam of gums and growing teeth', icon: 'clean' },
      { step: 3, title: 'Cleaning', desc: 'Polishing teeth to remove plaque', icon: 'tooth' },
      { step: 4, title: 'Fluoride', desc: 'Protective mineral gel applied to teeth', icon: 'shield' },
      { step: 5, title: 'Sealants', desc: 'Bonds protective coating on back teeth', icon: 'clean' },
      { step: 6, title: 'Habits', desc: 'Fun brushing education and rewards', icon: 'crown' }
    ],
    howItWorksSummary: 'Pediatric dental care works by focusing on prevention and early intervention. Baby teeth hold space for permanent teeth, so keeping them healthy is crucial for proper jaw development and speech. Regular cleanings and protective sealants stop cavities before they start.',
    processSteps: [
      { step: 1, title: 'Friendly Meet & Greet', desc: '' },
      { step: 2, title: 'Gentle Oral Examination', desc: '' },
      { step: 3, title: 'Plaque Cleaning & Polishing', desc: '' },
      { step: 4, title: 'Cavity Shield Fluoride Gel', desc: '' },
      { step: 5, title: 'Molar Dental Sealants', desc: '' },
      { step: 6, title: 'Sticker Reward & Hygiene Advice', desc: '' }
    ],
    types: [
      { title: 'Preventive Visits', desc: 'Regular exams, cleanings, fluoride treatment, and sealants to prevent decay.' },
      { title: 'Pediatric Fillings', desc: 'Disinfection and tooth-colored composite fillings for early decay.' },
      { title: 'Pulpectomy (Baby RCT)', desc: 'Painless removal of infected pulp to save a primary tooth and stop pain.' }
    ],
    startingCost: '₹500*',
    costPoints: ['Kid-Friendly Environment', 'Specialized Pediatric Doctor', 'Cavity Shield Treatments', 'Fun Gift Rewards'],
    costDisclaimer: '*Prices start from ₹500 for a general consultation and vary by procedure.',
    comparisonTitle: 'PEDIATRIC SPECIALIST vs GENERAL DENTIST',
    comparisonHeader: ['SPECIALIST', 'GENERAL', 'DENTURES'],
    comparisonRows: [
      { feature: 'Child Behavior Management', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Specialized Child Equipment', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Focus on Growth & Eruption', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Interactive Playroom Clinic', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Sedation Options for Anxiety', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Specialist Pedodontist', desc: 'Child-care dental expert' },
      { title: 'Tell-Show-Do Method', desc: 'No-fear treatment approach' },
      { title: 'Protective Dental Sealants', desc: 'Cavity proof back teeth' },
      { title: 'Fun Play Area & Stickers', desc: 'Positive dental visits' },
      { title: 'Gentle Painless Numbing', desc: 'Totally comfortable care' },
      { title: 'Early Orthodontic Checks', desc: 'Monitors jaw alignment' }
    ],
    beforeAfterImage: '/images/before and after/pediatric_before_after.png',
    costImage: '/images/pediatric/cHILD EMERGENCY ICON.jpeg',
    testimonialText: 'The pediatric dentist was so patient and gentle. My son actually looks forward to going to the dentist now!',
    testimonialAuthor: 'Priya V. (Mother of Aarav), Pragathi Nagar',
    faqs: [
      { question: 'When should my child first visit the dentist?', answer: 'The first dental visit should happen when their first tooth erupts, or by their first birthday.' },
      { question: 'Why are primary (baby) teeth so important?', answer: 'Baby teeth are crucial for proper chewing, learning to speak clearly, and saving space for permanent adult teeth.' },
      { question: 'How can I prevent cavities in my child?', answer: 'Maintain twice-daily brushing, limit sugary snacks, and bring them for regular 6-month checks for sealants and fluoride.' }
    ],
    bannerBelowHero: '/images/pediatric/Pediatric Treatment Below hero.png',
    visualProcedures: [
      {
        title: 'Emergency Dental Care',
        image: '/images/pediatric/cHILD EMERGENCY ICON.jpeg',
        desc: 'Immediate clinical response for toothache, accidents, or knocked-out baby teeth.',
        category: 'Advanced Care & Screenings'
      },
      {
        title: 'Swollen Gums Evaluation',
        image: '/images/pediatric/Swollen Gums.jpeg',
        desc: 'Careful assessment of gum inflammation, teething discomfort, and pediatric gingivitis.',
        category: 'Advanced Care & Screenings'
      },
      {
        title: 'Friendly Checkups',
        image: '/images/pediatric/ChatGPT Image Jun 22, 2026, 02_44_24 AM.png',
        desc: 'Building comfortable and happy clinic associations for your little ones early.',
        category: 'Clinic Experience & Rewards'
      },
      {
        title: 'First Dental Visit',
        image: '/images/pediatric/ChatGPT Image Jun 22, 2026, 02_44_31 AM.png',
        desc: 'Gently introducing kids to the dental chair, instruments, and team members.',
        category: 'Clinic Experience & Rewards'
      },
      {
        title: 'Healthy Happy Kids\' Smiles',
        image: '/images/pediatric/ChatGPT Image Jun 22, 2026, 02_50_26 AM.png',
        desc: 'Proactive oral health routines that preserve healthy smiles into adulthood.',
        category: 'Clinic Experience & Rewards'
      },
      {
        title: 'Gentle Teeth Cleaning',
        image: '/images/pediatric/ChatGPT Image Jun 22, 2026, 02_50_34 AM.png',
        desc: 'Plaque and stain removal using gentle, child-sized polishing cups.',
        category: 'Clinic Experience & Rewards'
      },
      {
        title: 'Fun Brushing Education',
        image: '/images/pediatric/ChatGPT Image Jun 22, 2026, 03_03_39 AM.png',
        desc: 'Teaching correct brushing and flossing routines through interactive visual play.',
        category: 'Clinic Experience & Rewards'
      },
      {
        title: 'Sticker & Gift Rewards',
        image: '/images/pediatric/Individual_dental_icon_for_children__202606220313 (3).jpeg',
        desc: 'Positive reinforcement rewards after every successful session to make kids happy.',
        category: 'Clinic Experience & Rewards'
      },
      {
        title: 'Brushing Guidance',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220242.jpeg',
        desc: 'Twice daily brushing technique instructions tailored for growing children.',
        category: 'Preventive Enamel Shield'
      },
      {
        title: 'Professional Fluoride Shield',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220242 (1).jpeg',
        desc: 'Enamel-strengthening mineral varnish application to resist decay.',
        category: 'Preventive Enamel Shield'
      },
      {
        title: 'Healthy Nutrition Habits',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220242 (2).jpeg',
        desc: 'Guidance on choosing tooth-friendly snacks and reducing sticky sugar exposure.',
        category: 'Preventive Enamel Shield'
      },
      {
        title: 'Pit & Fissure Sealants',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220242 (3).jpeg',
        desc: 'Sealing deep grooves on back molars to prevent food packing and bacteria build-up.',
        category: 'Preventive Enamel Shield'
      },
      {
        title: 'Growth & Eruption Monitoring',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220243.jpeg',
        desc: 'Tracking dental development, baby tooth shedding, and adult tooth eruption cycles.',
        category: 'Preventive Enamel Shield'
      },
      {
        title: 'Early Flossing Routines',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220256.jpeg',
        desc: 'Cleaning tight spaces between teeth to stop interdental cavities from forming.',
        category: 'Preventive Enamel Shield'
      },
      {
        title: 'Early Cavity Detection',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220256 (1).jpeg',
        desc: 'High magnification screening of decay spots to allow micro-dentistry interventions.',
        category: 'Advanced Care & Screenings'
      },
      {
        title: 'Early Orthodontic Screenings',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220256 (2).jpeg',
        desc: 'Early jaw alignment screening to identify needs for interceptive growth appliances.',
        category: 'Advanced Care & Screenings'
      },
      {
        title: 'Fear-Free Dental Environment',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220256 (3).jpeg',
        desc: 'Playful consultation spaces designed to reduce dental anxiety and phobias.',
        category: 'Advanced Care & Screenings'
      },
      {
        title: 'Primary Tooth Protection',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon_202606220257.jpeg',
        desc: 'Preserving primary baby teeth as guide paths for underlying adult teeth.',
        category: 'Advanced Care & Screenings'
      },
      {
        title: 'Routine Screenings',
        image: '/images/pediatric/High-resolution_individual_dental_infographic_icon__202606220257.jpeg',
        desc: 'Preventive checkups every 6 months to ensure complete dental wellness.',
        category: 'Advanced Care & Screenings'
      },
      {
        title: 'Tell-Show-Do Method',
        image: '/images/pediatric/Individual_dental_icon_for_children__202606220313 (1).jpeg',
        desc: 'Playfully explaining and demonstrating tools before performing any procedure.',
        category: 'Advanced Care & Screenings'
      }
    ]
  },
  'full-mouth-rehabilitation': {
    tagline: 'COMPLETE RESTORATION. LIFE CHANGING CARE.',
    subtitle: 'Functional. Aesthetic. Complete.',
    techStat: 'Full-Arch Rehabilitation Specialist',
    heroImage: '/images/new images/Treatments Theme Images/Hybrid-Full Mouth Denture.png',
    features: [
      { title: 'Complete Smile Restoration', desc: 'Rebuilds all upper and lower teeth' },
      { title: 'Correct Bite Alignment', desc: 'Relieves chronic jaw and TMJ strain' },
      { title: 'Replace Missing Teeth', desc: 'Combines implants, crowns, and bridges' },
      { title: 'Youthful Face Structure', desc: 'Restores facial height and volume' },
      { title: 'Eat Anything Again', desc: 'Full chewing strength restored' }
    ],
    symptoms: ['Multiple Missing Teeth', 'Severely Worn Teeth', 'Chronic TMJ Pain', 'Loose/Failing Teeth', 'Inability to Chew', 'Saggy Face Profile'],
    whatIsTitle: 'WHAT IS FULL MOUTH REHABILITATION?',
    whatIsText1: 'Full Mouth Rehabilitation (FMR) is an advanced, comprehensive dental treatment designed to rebuild or simultaneously restore all teeth in both the upper and lower jaws. It is custom-planned for patients with severely damaged, worn down, or missing dentition.',
    whatIsText2: 'By integrating multiple dental services including dental implants, crowns, bridges, veneers, and bite correction, FMR completely restores oral health, normal chewing function, jaw alignment, and aesthetic beauty.',
    whatIsNote: 'We coordinate a team of experienced implantologists, prosthodontists, and endodontists to execute FMR with precision.',
    howItWorksSteps: [
      { step: 1, title: 'Consultation', desc: 'Bite analysis, scans, and joint check', icon: 'stethoscope' },
      { step: 2, title: 'Gum Health', desc: 'Periodontal therapy to prep gums', icon: 'clean' },
      { step: 3, title: 'Foundation', desc: 'Dental implants placed for missing teeth', icon: 'tooth' },
      { step: 4, title: 'Jaw Height', desc: 'Bite alignment and jaw tracking', icon: 'shield' },
      { step: 5, title: 'Fabrication', desc: 'Custom crowns and arches created', icon: 'clean' },
      { step: 6, title: 'Fitment', desc: 'Complete set of teeth bonded in place', icon: 'crown' }
    ],
    howItWorksSummary: 'Full Mouth Rehabilitation works by restoring the entire bite system. Severely worn teeth are reinforced with strong zirconia crowns, missing teeth are replaced with implants, and the jaw bite is aligned to relieve TMJ pain and prevent future wear.',
    processSteps: [
      { step: 1, title: 'Comprehensive Joint & Bite Diagnosis', desc: '' },
      { step: 2, title: '3D CBCT Facial Mapping', desc: '' },
      { step: 3, title: 'Gum and Bone Foundation Prep', desc: '' },
      { step: 4, title: 'Implant Placement & Restorations', desc: '' },
      { step: 5, title: 'Prosthetic Fabrication & Trial', desc: '' },
      { step: 6, title: 'Final Bonding & Joint Verification', desc: '' }
    ],
    types: [
      { title: 'Crowns and Bridges FMR', desc: 'Best for patients who have natural teeth that are heavily worn, broken, or decayed.' },
      { title: 'Implant-Supported FMR', desc: 'Utilizes All-on-4 or All-on-6 implants to support a completely fixed full-arch prosthesis.' },
      { title: 'Combined FMR', desc: 'A custom combination of natural teeth crowns, bridges, and implant-supported teeth.' }
    ],
    startingCost: 'Custom*',
    costPoints: ['Multi-Specialist Coordination', 'Zirconia / Metal-Free Materials', 'Bite Alignment Analysis', 'Lifetime Support'],
    costDisclaimer: '*FMR is highly customized; pricing is provided after a detailed 3D scan and clinical design.',
    comparisonTitle: 'FULL REHABILITATION vs LOOSE DENTURES',
    comparisonHeader: ['FMR', 'DENTURES', 'EXTRACTION'],
    comparisonRows: [
      { feature: '100% Fixed (Non-Removable)', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Restores Full Chewing Power', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Prevents Sinking Face Look', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'No Slipping or Sore Spots', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Protects Remaining Teeth', main: 'check', opt1: 'warn', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Multi-Specialist Team', desc: 'Implants & prosthetics team' },
      { title: '3D Facial CBCT Mapping', desc: 'Precise planning' },
      { title: 'Biocompatible Zirconia', desc: 'Natural looks and strength' },
      { title: 'Bite Correction T-Scan', desc: 'Ensures perfect joint comfort' },
      { title: 'Phased Gentle Treatment', desc: 'Allows complete comfort & healing' },
      { title: 'Lifetime Smile Support', desc: 'Peace of mind warranty' }
    ],
    beforeAfterImage: '/images/before and after/Dentures before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Hybrid-Full Mouth Denture.png',
    testimonialText: 'After years of suffering, I can finally eat normally and smile with confidence again. The team changed my life.',
    testimonialAuthor: 'Rajendra Reddy, Bachupally',
    faqs: [
      { question: 'Is full mouth rehabilitation painful?', answer: 'No, procedures are completed under local anesthesia, and sedation options are available for patients with dental anxiety. Healing is closely monitored.' },
      { question: 'How long does the rehabilitation take?', answer: 'Depending on whether implants and bone healing are needed, the entire process takes anywhere from 3 weeks to several months in planned phases.' },
      { question: 'Who is a candidate for Full Mouth Rehabilitation?', answer: 'Anyone with multiple missing teeth, severely worn teeth from grinding, failing dental work, or chronic jaw joint pain.' }
    ]
  },
  'teeth-whitening': {
    tagline: 'INSTANT SMILE BRIGHTENING. SHINE BRIGHT.',
    subtitle: 'Bright. Fast. Painless.',
    techStat: 'Advanced Laser Whitening',
    heroImage: '/images/new images/Treatments Theme Images/Teeth Whitening.png',
    features: [
      { title: 'Up to 8 Shades Brighter', desc: 'Instant results in just one sitting' },
      { title: 'Safe for Enamel', desc: 'Does not damage tooth structure' },
      { title: 'Long-Lasting Shine', desc: 'Keeps teeth white for years' },
      { title: 'Painless Laser Tech', desc: 'Prevents post-treatment sensitivity' },
      { title: 'Custom Trays Included', desc: 'Maintain your bright smile at home' }
    ],
    symptoms: ['Yellow/Stained Teeth', 'Coffee/Tea Stains', 'Tobacco Stains', 'Dull/Aging Teeth', 'Fluorosis Stains', 'Uneven Teeth Color'],
    whatIsTitle: 'WHAT IS TEETH WHITENING?',
    whatIsText1: 'Teeth Whitening is the quickest, most effective way to brighten your smile. Over time, consumption of coffee, tea, red wine, and smoking can stain the outer enamel. Professional whitening uses safe, hydrogen peroxide gels activated by a specialized laser light to break down deep stains.',
    whatIsText2: 'Unlike over-the-counter whitening kits, professional in-office whitening is supervised by a dentist, ensuring that your gums are protected and that the whitening is uniform, safe, and highly effective.',
    whatIsNote: 'We use premium, US-FDA approved whitening gels and gentle laser systems to achieve maximum brightness without sensitivity.',
    howItWorksSteps: [
      { step: 1, title: 'Consultation', desc: 'Shade check & teeth cleanliness check', icon: 'stethoscope' },
      { step: 2, title: 'Cleaning', desc: 'Teeth polished to remove surface debris', icon: 'clean' },
      { step: 3, title: 'Gum Guard', desc: 'Protective barrier applied to gums', icon: 'shield' },
      { step: 4, title: 'Whitening Gel', desc: 'Professional gel applied to teeth surface', icon: 'tooth' },
      { step: 5, title: 'Laser Light', desc: 'Laser light activates whitening molecules', icon: 'clean' },
      { step: 6, title: 'Rinse', desc: 'Gel rinsed off to reveal bright smile', icon: 'crown' }
    ],
    howItWorksSummary: 'Teeth whitening works by utilizing active whitening agents that penetrate the porous enamel structure to break apart stain molecules. The laser light accelerates this chemical process, allowing up to 8 shades of whitening in a single 45-minute appointment.',
    processSteps: [
      { step: 1, title: 'Initial Shade Assessment', desc: '' },
      { step: 2, title: 'Dental Cleaning & Polishing', desc: '' },
      { step: 3, title: 'Gum Shield Barrier Placement', desc: '' },
      { step: 4, title: 'Whitening Gel Application', desc: '' },
      { step: 5, title: 'Laser Activation (15-min cycles)', desc: '' },
      { step: 6, title: 'Fluoride Gel for Sensitivity Care', desc: '' }
    ],
    types: [
      { title: 'In-Office Zoom Whitening', desc: 'State-of-the-art laser whitening done in the clinic for maximum instant results.' },
      { title: 'Home Whitening Kits', desc: 'Customized dental trays with professional-grade gels for convenient home use.' },
      { title: 'Combined Whitening', desc: 'In-office session followed by a take-home kit for the longest lasting, brightest results.' }
    ],
    startingCost: '₹7,500*',
    costPoints: ['US-FDA Approved Gels', 'Instant 1-Sitting Results', 'Gum Protection Shield', 'Sensitivity-Free Tech'],
    costDisclaimer: '*Teeth whitening results can vary depending on the type and depth of tooth staining.',
    comparisonTitle: 'PROFESSIONAL vs OVER-THE-COUNTER KITS',
    comparisonHeader: ['CLINIC', 'OTC KITS', 'PASTES'],
    comparisonRows: [
      { feature: 'Whitens up to 8 Shades', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Safe for Gum Tissues', main: 'check', opt1: 'cross', opt2: 'warn' },
      { feature: 'Uniform, Non-Splotchy Result', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Takes Only 45 Minutes', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Prevents Enamel Erosion', main: 'check', opt1: 'warn', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'US-FDA Approved Gels', desc: 'Highest safety standards' },
      { title: 'Laser Whitening Tech', desc: 'Faster, brighter results' },
      { title: 'Gum Protective Barriers', desc: 'Zero gum irritation' },
      { title: 'Custom Take-Home Trays', desc: 'Maintain brightness easily' },
      { title: 'Certified Cosmetic Dentists', desc: 'Expert supervision' },
      { title: 'Sensitivity Relief Gel', desc: 'Painless post-treatment care' }
    ],
    beforeAfterImage: '/images/before and after/Teeth Whitening before after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Teeth Whitening.png',
    testimonialText: 'My teeth are so much brighter now! The Zoom whitening session took less than an hour and was completely painless.',
    testimonialAuthor: 'Karthik, Pragathi Nagar',
    faqs: [
      { question: 'Does teeth whitening damage natural enamel?', answer: 'No, professional whitening under dental supervision is completely safe and does not alter the natural structure of the enamel.' },
      { question: 'How long do whitening results last?', answer: 'Typically, results last 1 to 3 years depending on dietary habits. Reducing coffee, tea, and smoking helps maintain the bright white shade.' },
      { question: 'Will it cause tooth sensitivity?', answer: 'Some patients feel mild sensitivity for 24 hours, but we use sensitivity-free laser systems and apply protective fluoride gel to prevent it.' }
    ]
  },
  'teeth-cleaning-scaling': {
    tagline: 'CLEAN TEETH. HEALTHY GUMS.',
    subtitle: 'Fresh. Bright. Disease-Free.',
    techStat: 'Ultrasonic Scalers & Polishing',
    heroImage: '/images/new images/Treatments Theme Images/Teeth Scaling-cleaning.png',
    features: [
      { title: 'Plaque Removal', desc: 'Removes soft bacterial plaque' },
      { title: 'Calculus Cleansing', desc: 'Scales off hard tartar deposits' },
      { title: 'Polishing', desc: 'Polishes enamel for smooth finish' },
      { title: 'Gum Health Check', desc: 'Ensures gum pocket safety' },
      { title: 'Fresh Breath', desc: 'Reduces halitosis-causing bacteria' }
    ],
    symptoms: ['Bleeding Gums', 'Yellow Teeth', 'Bad Breath', 'Swollen Gums', 'Teeth Stains'],
    whatIsTitle: 'WHAT IS TEETH CLEANING & SCALING?',
    whatIsText1: "Professional scaling is a routine preventive procedure designed to clean plaque, tartar, and surface stains from your teeth. Over time, bacteria form plaque which hardens into calculus, which cannot be removed by normal brushing. Scaling removes this to prevent gum disease.",
    whatIsText2: "Scaling is performed using advanced ultrasonic instruments that vibrate gently to release deposits. The teeth are then polished to ensure a smooth, shiny finish that makes it harder for plaque to stick in the future.",
    whatIsNote: "Dentists recommend a scaling and polishing session every 6 months to maintain optimal oral health.",
    howItWorksSteps: [
      { step: 1, title: 'Exam', desc: 'Dentist checks for plaque & pockets', icon: 'stethoscope' },
      { step: 2, title: 'Scaling', desc: 'Ultrasonic scaler removes tartar', icon: 'tooth' },
      { step: 3, title: 'Polishing', desc: 'Polishing paste for a smooth shine', icon: 'clean' },
      { step: 4, title: 'Flossing', desc: 'Cleaning between tight spaces', icon: 'shield' }
    ],
    howItWorksSummary: 'Scaling uses high-frequency vibrations to break down tartar from the tooth surface, accompanied by a cool water spray. Once the teeth are free of deposits, a polishing brush and dental paste are applied to buff out micro-stains, giving you a smooth, clean feel.',
    processSteps: [
      { step: 1, title: 'Oral Examination', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Ultrasonic Scaling', desc: '', icon: 'tooth' },
      { step: 3, title: 'Interdental Flossing', desc: '', icon: 'clean' },
      { step: 4, title: 'Prophylaxis Polishing', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Standard Scaling', desc: 'Routine cleaning for healthy gums.' },
      { title: 'Deep Scaling (Root Planing)', desc: 'Cleans below the gumline to treat early periodontitis.' },
      { title: 'Laser Scaling', desc: 'Minimal vibration with laser gum disinfection.' }
    ],
    startingCost: '₹1,500*',
    costPoints: ['No Hidden Costs', 'Quick Single Sitting', 'Toothbrush Kit Included'],
    costDisclaimer: '*Cost may vary depending on plaque buildup and gum health.',
    comparisonTitle: 'SCALING vs HOME BRUSHING',
    comparisonHeader: ['CLINIC SCALING', 'BRUSHING', 'FLOSSING'],
    comparisonRows: [
      { feature: 'Removes Hard Tartar', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Cleans Below Gumline', main: 'check', opt1: 'cross', opt2: 'dash' },
      { feature: 'Prevents Periodontitis', main: 'check', opt1: 'dash', opt2: 'dash' }
    ],
    whyChooseCards: [
      { title: 'Advanced Ultrasonic Scalers', desc: 'Gently dislodges hard tartar' },
      { title: 'Expert Periodontists', desc: 'Specialized gum evaluation' },
      { title: 'Comfortable Setting', desc: 'Minimal discomfort or sensitivity' }
    ],
    beforeAfterImage: '/images/before and after/Teeth Scaling_Cleaning before after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Teeth Scaling-cleaning.png',
    testimonialText: 'My teeth feel incredibly clean and my bleeding gum issue resolved completely in a single sitting.',
    testimonialAuthor: 'Suresh P., Pragathi Nagar',
    faqs: [
      { question: 'Does scaling loosen teeth?', answer: 'No. Scaling removes the dirt (calculus) holding loose teeth, revealing the true state of gums. It helps gums heal and tighten around teeth.' },
      { question: 'How often should I get it done?', answer: 'Once every six months is highly recommended for everyone.' }
    ]
  },
  'wisdom-tooth-extraction': {
    tagline: 'PAINLESS EXTRACTION. JAW RELIEF.',
    subtitle: 'Gentle. Fast. Safe.',
    techStat: 'Oral Surgery Specialist',
    heroImage: '/images/new images/Treatments Theme Images/Wisdom tooth Extraction.png',
    features: [
      { title: 'Painless Procedure', desc: 'Effective local anesthesia' },
      { title: 'Prevent Crowding', desc: 'Stops teeth from shifting' },
      { title: 'Relieve Pain', desc: 'Eliminates back jaw ache' },
      { title: 'Expert Surgeon', desc: 'Safe surgical techniques' }
    ],
    symptoms: ['Jaw Pain', 'Swollen Gums', 'Difficulty Chewing', 'Stiff Jaw', 'Headaches'],
    whatIsTitle: 'WHAT IS WISDOM TOOTH EXTRACTION?',
    whatIsText1: "Wisdom teeth, or third molars, are the last to erupt and often get trapped (impacted) in the jawbone or grow at angles. This leads to infection, gum pain, cyst formation, or damage to adjacent molars.",
    whatIsText2: "Our specialist oral surgeons perform extraction using minimally invasive methods under local anesthesia. This relieves pressure, eliminates recurring infections, and protects your biting alignment.",
    whatIsNote: "Post-operative instructions are carefully provided to ensure quick, complication-free healing.",
    howItWorksSteps: [
      { step: 1, title: 'X-ray', desc: 'Assess root depth & bone structure', icon: 'stethoscope' },
      { step: 2, title: 'Anesthesia', desc: 'Numb the surgical zone', icon: 'syringe' },
      { step: 3, title: 'Extraction', desc: 'Gently release and lift the tooth', icon: 'tooth' },
      { step: 4, title: 'Sutures', desc: 'Dissolvable stitches if required', icon: 'shield' }
    ],
    howItWorksSummary: 'We use digital dental X-rays to map the wisdom tooth root relation to jaw nerves. Under anesthesia, the surgeon carefully makes a tiny opening in the gums if needed, releases the tooth in sections for maximum safety, cleans the socket, and places sutures to facilitate clean clotting.',
    processSteps: [
      { step: 1, title: '3D Scan & Diagnosis', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Local Anesthesia', desc: '', icon: 'syringe' },
      { step: 3, title: 'Sectioning & Extraction', desc: '', icon: 'tooth' },
      { step: 4, title: 'Socket Cleaning & Suturing', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Simple Extraction', desc: 'For fully erupted wisdom teeth.' },
      { title: 'Surgical Extraction', desc: 'For impacted or partially buried teeth requiring bone relief.' }
    ],
    startingCost: '₹3,000*',
    costPoints: ['Standardized Fees', 'Specialist Surgeon Charges Included', 'Post-Op Follow-up Included'],
    costDisclaimer: '*Surgical and bone impactions cost more than simple extractions.',
    comparisonTitle: 'SURGERY vs IGNORING IT',
    comparisonHeader: ['EXTRACTION', 'DELAYS', 'NO ACTION'],
    comparisonRows: [
      { feature: 'Relieves Infection', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Protects Neighbor Molars', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Avoids Chronic Pain', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Maxillofacial Surgeon Specialist', desc: 'High expertise' },
      { title: 'Advanced Anaesthetic Solutions', desc: 'Completely painless' },
      { title: 'Sterile Operating Environment', desc: 'Zero infection risk' }
    ],
    costImage: '/images/new images/Treatments Theme Images/Wisdom tooth Extraction.png',
    testimonialText: 'The extraction of my impacted tooth took only 20 minutes and I had very minimal post-op swelling.',
    testimonialAuthor: 'Naveen K., Pragathi Nagar',
    faqs: [
      { question: 'Will I feel pain during extraction?', answer: 'No. Local anesthesia ensures the entire area is completely numb. You will only feel slight pressure.' },
      { question: 'What can I eat after extraction?', answer: 'Stick to soft, cool foods like ice cream, smoothies, curd rice, and pudding for the first 24-48 hours.' }
    ]
  },
  'advanced-gum-treatment': {
    tagline: 'STOP GUM BLEEDING. SAVE YOUR BONES.',
    subtitle: 'Laser Flap. Safe Root Planing.',
    techStat: 'Laser Periodontal Care',
    heroImage: '/images/gum diseases/Gum disease hero 1.png',
    features: [
      { title: 'Bleeding Cessation', desc: 'Stops bleeding gums immediately' },
      { title: 'Pocket Reduction', desc: 'Treats deep bacterial pockets' },
      { title: 'Secure Loose Teeth', desc: 'Supports bone reattachment' },
      { title: 'Laser Disinfection', desc: 'Sterilizes deep root areas' }
    ],
    symptoms: ['Bleeding Gums', 'Receding Gums', 'Bad Breath', 'Loose Teeth', 'Red Swollen Gums'],
    whatIsTitle: 'WHAT IS ADVANCED GUM TREATMENT?',
    whatIsText1: "Periodontal disease starts as mild gum irritation but can escalate to bone destruction, causing teeth to become loose and fall out. Advanced gum treatment involves deep cleaning (scaling and root planing) to clean the root surface, or flap surgery to access deep infection.",
    whatIsText2: "By lifting the gums slightly, we clean out tartar and infection from the bone, then use dental lasers to sterilize the pockets. This allows the gum tissue to reattach firmly to the teeth, preserving your natural smile.",
    whatIsNote: "Laser-assisted gum surgery ensures faster healing, minimal bleeding, and highly comfortable recovery.",
    howItWorksSteps: [
      { step: 1, title: 'Gum Scan', desc: 'Probing pockets and bone loss', icon: 'stethoscope' },
      { step: 2, title: 'Planing', desc: 'Root surfaces are smoothed out', icon: 'tooth' },
      { step: 3, title: 'Laser Prep', desc: 'Laser light sterilizes tissue', icon: 'clean' },
      { step: 4, title: 'Reattachment', desc: 'Gums adapt back to the bone', icon: 'shield' }
    ],
    howItWorksSummary: 'Flap surgery cleans root surfaces by temporarily parting the gum margins. Under local anesthesia, the specialist removes subgingival calculus, sterilizes the area with soft-tissue lasers, and places fine sutures. This resolves deep-seated infections and prevents bone loss.',
    processSteps: [
      { step: 1, title: 'Periodontal Probing', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Root Planing & Debridement', desc: '', icon: 'tooth' },
      { step: 3, title: 'Laser Gum Sterilization', desc: '', icon: 'clean' },
      { step: 4, title: 'Flap Realignment & Suture', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Root Planing', desc: 'Non-surgical deep scaling below the gumline.' },
      { title: 'Gum Flap Surgery', desc: 'Micro-surgical cleaning of deep bone defects.' },
      { title: 'Laser Periodontitis Therapy', desc: 'Minimally invasive pocket disinfection.' }
    ],
    startingCost: '₹4,000*',
    costPoints: ['Pocket Laser Included', 'Bone Grafting Available', 'Instalment Options'],
    costDisclaimer: '*Costs depend on the number of quadrants requiring flap surgical access.',
    comparisonTitle: 'SURGERY vs LATE STAGE LOSS',
    comparisonHeader: ['FLAP SURGERY', 'SCALING ONLY', 'NO TREATMENT'],
    comparisonRows: [
      { feature: 'Eliminates Deep Infection', main: 'check', opt1: 'dash', opt2: 'cross' },
      { feature: 'Saves Loose Teeth', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Prevents Bone Destruction', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'In-house Periodontists', desc: 'Gum health specialists' },
      { title: 'Biolase Dental Laser', desc: 'Highly sterile treatment' },
      { title: 'High-magnification loupes', desc: 'Precise surgical execution' }
    ],
    beforeAfterImage: '/images/before and after/Bleeding Gums-Flap Surgery Laser before and after.jpeg',
    testimonialText: 'My gums stopped bleeding completely and my teeth feel solid now after my flap surgery.',
    testimonialAuthor: 'Venkatesh M., Pragathi Nagar',
    faqs: [
      { question: 'Is flap surgery painful?', answer: 'No. Local anesthesia is used. You will have mild soreness for 3-5 days after the surgery, easily controlled by medication.' },
      { question: 'Do gums grow back after recession?', answer: 'Gums do not grow back naturally, but gum graft surgeries or laser stimulation can help cover exposed roots.' }
    ],
    bannerBelowHero: '/images/gum diseases/Gum disease hero 2.png',
    costImage: '/images/gum diseases/Dental_icon_maintenance_aftercare_202606211648.jpeg',
    visualProcedures: [
      {
        title: 'Gum Disease Diagnosis Infographic',
        image: '/images/gum diseases/Gum_disease_diagnosis_infographic_202606211648.jpeg',
        desc: 'Infographic showing the progressive stages of gum disease from healthy tissue to gingivitis and advanced periodontitis.'
      },
      {
        title: 'Ultrasonic Scaling Process',
        image: '/images/gum diseases/Dental_scaler_removing_tartar_fr…_202606211648.jpeg',
        desc: 'Gently dislodging hard tartar deposits and plaque build-up from above and below the gumline.'
      },
      {
        title: 'Scaling & Root Planing',
        image: '/images/braces/Scaling & Root Planning.png',
        desc: 'Deep clinical cleaning to smooth out infected tooth root surfaces so gums can reattach.'
      },
      {
        title: 'Laser Gum Sterilization',
        image: '/images/gum diseases/Laser_gum_treatment_infographic_202606211648.jpeg',
        desc: 'FDA-approved dental lasers are used to sterilize infected gum pockets and eliminate bacteria.'
      },
      {
        title: 'Gum Flap Surgery Illustration',
        image: '/images/gum diseases/Tooth_with_gums_flap_surgery_202606211648.jpeg',
        desc: 'Accessing deep tooth root surfaces to scale off stubborn tartar deposits and repair bone structures.'
      },
      {
        title: 'Gum Grafting & Regeneration',
        image: '/images/gum diseases/Gum_grafting_and_regeneration_icon_202606211648.jpeg',
        desc: 'Reconstructing receded gum margins and promoting soft-tissue regeneration.'
      },
      {
        title: 'Periodontal Maintenance Care',
        image: '/images/gum diseases/Dental_icon_maintenance_aftercare_202606211648.jpeg',
        desc: 'Regular clinical cleanings and gum assessments to maintain results after active treatment.'
      }
    ]
  },
  'tooth-decay-fillings': {
    tagline: 'PREVENT CAVITIES. RESTORE STRENGTH.',
    subtitle: 'Tooth-Colored. Mercury-Free. Invisible.',
    techStat: 'Composite Restorations',
    heroImage: '/images/new images/Treatments Theme Images/Tooth Decay and Fillings.png',
    features: [
      { title: 'Natural Shade Match', desc: 'Blends with natural teeth' },
      { title: 'Mercury-Free Safety', desc: 'Safe composite resins' },
      { title: 'Prevents Deeper Decay', desc: 'Seals cavity from bacteria' },
      { title: 'Chewing Stability', desc: 'Strong bonding to enamel' }
    ],
    symptoms: ['Cavities', 'Black Spots', 'Sensitivity to Cold', 'Food Trap', 'Mild Tooth Pain'],
    whatIsTitle: 'WHAT IS TOOTH DECAY & FILLINGS?',
    whatIsText1: "Tooth decay starts when bacteria erode the outer enamel, creating small holes or cavities. If left untreated, decay travels deeper to the pulp, causing severe pain that requires a root canal. A filling stops this progression.",
    whatIsText2: "We use dental composite resins, which are biocompatible tooth-colored materials. The decay is removed, and the composite is layered, shaped, and cured with a specialized blue light, leaving your tooth strong and looking natural.",
    whatIsNote: "Composite fillings bond chemically to the tooth structure, restoring up to 90% of its original strength.",
    howItWorksSteps: [
      { step: 1, title: 'Clean Cavity', desc: 'Decay is carefully cleaned out', icon: 'stethoscope' },
      { step: 2, title: 'Conditioning', desc: 'Tooth is etched for bonding', icon: 'tooth' },
      { step: 3, title: 'Composite Placement', desc: 'Resin is layered and sculpted', icon: 'clean' },
      { step: 4, title: 'Blue Light Cure', desc: 'Resin is hardened in seconds', icon: 'shield' },
      { step: 5, title: 'Polishing', desc: 'Surface is smoothed to match bite', icon: 'crown' }
    ],
    howItWorksSummary: 'First, the dentist removes the decayed tissue. A mild etching gel is applied to prepare the enamel microscopic pores. The liquid bonding agent is applied, followed by composite paste matched to your tooth shade. Finally, the light cures it, and the dentist shapes it to match your bite.',
    processSteps: [
      { step: 1, title: 'Enamel Cavity Preparation', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Bonding Resin Application', desc: '', icon: 'tooth' },
      { step: 3, title: 'Composite Layer Sculpting', desc: '', icon: 'clean' },
      { step: 4, title: 'LED Blue Light Polymerization', desc: '', icon: 'shield' },
      { step: 5, title: 'Bite Adjustment & Polish', desc: '', icon: 'crown' }
    ],
    types: [
      { title: 'Composite Fillings', desc: 'Modern, aesthetic, tooth-colored resin.' },
      { title: 'Glass Ionomer Fillings (GIC)', desc: 'Fluoride-releasing material ideal for root caries and kids.' }
    ],
    startingCost: '₹1,500*',
    costPoints: ['Long Lifespan', 'Painless Prep', 'FDA-Approved Materials'],
    costDisclaimer: '*Cost depends on the number of surfaces involved in the tooth structure.',
    comparisonTitle: 'COMPOSITE vs OLD SILVER AMALGAM',
    comparisonHeader: ['COMPOSITE', 'SILVER AMALGAM', 'GIC'],
    comparisonRows: [
      { feature: 'Natural Appearance', main: 'check', opt1: 'cross', opt2: 'warn' },
      { feature: 'Mercury-Free', main: 'check', opt1: 'cross', opt2: 'check' },
      { feature: 'Enamel Preservation', main: 'check', opt1: 'cross', opt2: 'check' }
    ],
    whyChooseCards: [
      { title: 'Shade Matching Guide', desc: 'Blends with natural teeth' },
      { title: 'Japanese Dental Composites', desc: 'Highest wear-resistance' },
      { title: 'Painless Quick Prep', desc: 'Done in under 20 minutes' }
    ],
    costImage: '/images/new images/Treatments Theme Images/Tooth Decay and Fillings.png',
    testimonialText: 'The filling is completely invisible. I cannot even tell which tooth had the cavity!',
    testimonialAuthor: 'Swathi T., Pragathi Nagar',
    faqs: [
      { question: 'How long do composite fillings last?', answer: 'They generally last 5 to 10 years with good brushing and flossing habits.' },
      { question: 'Is composite safe?', answer: 'Yes. Modern composite fillings are bisphenol-free, non-toxic, and contain no mercury.' }
    ]
  },
  'hybrid-dentures': {
    tagline: 'RESTORE FULL CHEWING. NO SLIPPING.',
    subtitle: 'Fixed Implant Dentures. BPS Acrylic.',
    techStat: 'All-on-4 Implant Prosthetics',
    heroImage: '/images/new images/Treatments Theme Images/Hybrid-Full Mouth Denture.png',
    features: [
      { title: 'Secure Implant Fit', desc: 'Zero slipping or falling out' },
      { title: 'Youthful Smile Restored', desc: 'Fills facial hollows' },
      { title: 'Eat Hard Foods Again', desc: 'Chewing efficiency returns' },
      { title: 'Durable BPS Acrylic', desc: 'High break-resistant structure' }
    ],
    symptoms: ['Missing Teeth', 'Sunken Cheeks', 'Loose Dentures', 'Inability to Chew', 'Speech Slurring'],
    whatIsTitle: 'WHAT ARE HYBRID & FULL DENTURES?',
    whatIsText1: "Traditional dentures can slip, click, and make chewing hard. Hybrid dentures solve this by mounting a custom set of teeth onto 4 or 6 dental implants in the jawbone. This makes the denture completely fixed and highly stable.",
    whatIsText2: "For cases where implants are not suitable, we construct BPS Dentures (Bio-functional Prosthetic System). BPS dentures use premium materials and unique recording methods to guarantee a precise, snug fit.",
    whatIsNote: "Hybrid dentures do not cover the palate, preserving your natural ability to taste and feel food.",
    howItWorksSteps: [
      { step: 1, title: 'Impressions', desc: 'Create mold of jaws and gums', icon: 'stethoscope' },
      { step: 2, title: 'Jaw Recording', desc: 'Record exact bite relationship', icon: 'tooth' },
      { step: 3, title: 'Wax Trial', desc: 'Test aesthetic shape and teeth color', icon: 'clean' },
      { step: 4, title: 'Processing', desc: 'BPS polymerization for high strength', icon: 'shield' },
      { step: 5, title: 'Placement', desc: 'Secure fit and final adjustments', icon: 'crown' }
    ],
    howItWorksSummary: 'Hybrid dentures are customized to your chewing pattern. We capture dynamic jaw relations, design the tooth setup in wax, verify the fit, and process the final denture in BPS acrylic. For fixed hybrids, the teeth are securely screwed onto implants.',
    processSteps: [
      { step: 1, title: 'Bite Scanning & Impressions', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Bite Jaw Relation Recording', desc: '', icon: 'tooth' },
      { step: 3, title: 'Wax Aesthetic Tooth Trial', desc: '', icon: 'clean' },
      { step: 4, title: 'Lab Processing & Denture Delivery', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'BPS Complete Dentures', desc: 'High quality premium removable dentures.' },
      { title: 'Implant Overdentures', desc: 'Removable dentures that snap onto implants for stability.' },
      { title: 'Fixed Hybrid Dentures', desc: 'Completely fixed screw-retained implant prosthesis.' }
    ],
    startingCost: '₹35,000*',
    costPoints: ['BPS Quality Certification', 'Natural Look', '0% EMI Options'],
    costDisclaimer: '*Implant-supported options cost more due to surgical components.',
    comparisonTitle: 'HYBRID vs TRADITIONAL DENTURES',
    comparisonHeader: ['HYBRID DENTURE', 'OVERDENTURE', 'BASIC DENTURE'],
    comparisonRows: [
      { feature: 'Completely Fixed', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Chewing Power', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'No Palate Cover', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Certified BPS Lab Partners', desc: 'Premium materials' },
      { title: 'Implantologist Team', desc: 'Expert surgical placement' },
      { title: 'Custom Facial Contouring', desc: 'Restores youthfulness' }
    ],
    beforeAfterImage: '/images/before and after/Dentures before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Hybrid-Full Mouth Denture.png',
    testimonialText: 'I can eat nuts and apples again without worrying about my teeth moving. Truly life changing!',
    testimonialAuthor: 'Ramarao Y., Pragathi Nagar',
    faqs: [
      { question: 'Do hybrid dentures need to be removed at night?', answer: 'Fixed hybrid dentures do not need to be removed; you brush them in your mouth like natural teeth. Removable overdentures should be taken out and cleaned.' },
      { question: 'How long do implants take to heal?', answer: 'Implant integration usually takes 3 to 4 months before the final fixed hybrid denture is attached.' }
    ]
  },
  'bad-breath-halitosis': {
    tagline: 'FRESH BREATH. MORE CONFIDENCE.',
    subtitle: 'Bacteria elimination. Salivary Care.',
    techStat: 'Oral Microbiome Cleanse',
    heroImage: '/images/new images/Treatments Theme Images/Bad Breath.png',
    features: [
      { title: 'Deep Gum Sanitization', desc: 'Removes deep bacteria pockets' },
      { title: 'Salivary Flow Check', desc: 'Addresses dry mouth issues' },
      { title: 'Tongue Coating Treatment', desc: 'Cleans sulfur-producing areas' },
      { title: 'Home Maintenance Guide', desc: 'Custom mouthwash protocols' }
    ],
    symptoms: ['Persistent Bad Breath', 'Sour Taste', 'White Tongue Coating', 'Dry Mouth', 'Bleeding Gums'],
    whatIsTitle: 'WHAT IS BAD BREATH & HALITOSIS?',
    whatIsText1: "Bad breath is primarily caused by anaerobic bacteria on the back of the tongue or in deep gum pockets. These bacteria break down proteins and release Volatile Sulfur Compounds (VSCs), resulting in a foul odor that brushing alone cannot cure.",
    whatIsText2: "Our clinical bad breath therapy diagnoses root causes—which may include plaque buildup, dry mouth, or decaying teeth—and eliminates them using targeted scaling, tongue therapy, and medical-grade antibacterial rinses.",
    whatIsNote: "90% of bad breath cases originate inside the mouth and can be resolved with proper dental hygiene.",
    howItWorksSteps: [
      { step: 1, title: 'Analysis', desc: 'Locating bacteria & plaque source', icon: 'stethoscope' },
      { step: 2, title: 'Deep Cleaning', desc: 'Scale teeth & gum pockets', icon: 'tooth' },
      { step: 3, title: 'Tongue Scrub', desc: 'Scrape back tongue bacteria', icon: 'clean' },
      { step: 4, title: 'Antisepsis', desc: 'Apply specialized antimicrobial gels', icon: 'shield' }
    ],
    howItWorksSummary: 'We identify bacterial accumulation zones. Using ultrasonic scaling and targeted mechanical scraping of the tongue, we strip away the bacterial biofilm, followed by ozone or laser disinfection to leave oral tissues sterile and clean.',
    processSteps: [
      { step: 1, title: 'Oral Odor Source Evaluation', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Ultrasonic Gum Scaling', desc: '', icon: 'tooth' },
      { step: 3, title: 'Tongue Biofilm Debridement', desc: '', icon: 'clean' },
      { step: 4, title: 'Antibacterial Disinfection', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Dental Halitosis Cure', desc: 'Resolves gum and plaque causes.' },
      { title: 'Xerostomia Therapy', desc: 'Treats dry mouth to restore natural saliva wash.' }
    ],
    startingCost: '₹2,000*',
    costPoints: ['Includes Antibacterial Rinse', 'Tongue Scraper Included', 'Follow-up Consultation'],
    costDisclaimer: '*Additional costs apply if gum flap surgery or decay fillings are required.',
    comparisonTitle: 'THERAPY vs COSMETIC SPRAYS',
    comparisonHeader: ['CLINIC THERAPY', 'MOUTH SPRAYS', 'MINTS'],
    comparisonRows: [
      { feature: 'Kills Sulfur Bacteria', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Cleans Deep Pockets', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Long Term Cure', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Targeted Bacterial Cleansing', desc: 'Highly effective results' },
      { title: 'Periodontist Evaluation', desc: 'Check for hidden gum pockets' },
      { title: 'Custom Home-care Regimen', desc: 'Keeps breath fresh daily' }
    ],
    costImage: '/images/new images/Treatments Theme Images/Bad Breath.png',
    testimonialText: 'The treatment solved my chronic bad breath issue. Brushing and mouthwash never did the trick.',
    testimonialAuthor: 'Prasad G., Pragathi Nagar',
    faqs: [
      { question: 'Why does bad breath persist?', answer: 'Standard brushing only cleans 60% of tooth surfaces. Bacteria in deep gum pockets and tongue folds can only be removed professionally.' },
      { question: 'Is bad breath related to stomach issues?', answer: 'Only in 5-10% of cases. Most causes are local to the mouth and resolved by dentist scaling.' }
    ]
  },
  'dental-crown-bridges': {
    tagline: 'REBUILD SHAPE. FILL THE GAPS.',
    subtitle: 'High Strength Zirconia. Premium E-max.',
    techStat: 'CAD/CAM Digital Milling',
    heroImage: '/images/new images/Treatments Theme Images/Dental Crown & Bridge.png',
    features: [
      { title: 'Tooth Protection', desc: 'Strengthens weak or cracked teeth' },
      { title: 'Restore Chew Function', desc: 'Replaces missing teeth' },
      { title: 'CAD/CAM Precision', desc: 'Perfect margins and fit' },
      { title: 'Natural Translucency', desc: 'Matches natural tooth enamel' }
    ],
    symptoms: ['Broken Tooth', 'Missing Teeth', 'Post-RCT Tooth', 'Difficulty Chewing', 'Unsightly Gaps'],
    whatIsTitle: 'WHAT ARE DENTAL CROWNS & BRIDGES?',
    whatIsText1: "A dental crown is a custom cap that fits over a weak, cracked, or root-canal-treated tooth, protecting it from fractures. A dental bridge uses crowns on adjacent teeth to support a false tooth in the middle, bridging the gap of missing teeth.",
    whatIsText2: "We use metal-free Zirconia and E-max porcelain. These materials are milled using advanced digital CAD/CAM technology to guarantee an exact fit and a beautiful, natural appearance that will not show dark metal lines at the gums.",
    whatIsNote: "Modern ceramic restorations are highly biocompatible and can last 10-15+ years.",
    howItWorksSteps: [
      { step: 1, title: 'Prep', desc: 'Tooth is reshaped slightly', icon: 'stethoscope' },
      { step: 2, title: 'Scan', desc: 'Digital impression of teeth', icon: 'tooth' },
      { step: 3, title: 'Temp Crown', desc: 'Protected with temporary cap', icon: 'clean' },
      { step: 4, title: 'Milling', desc: 'Zirconia milled in dental laboratory', icon: 'shield' },
      { step: 5, title: 'Cementation', desc: 'Permanent placement & bite check', icon: 'crown' }
    ],
    howItWorksSummary: 'The tooth is prepared under local anesthesia to make room for the crown. A digital intraoral scanner captures the exact shape. In a couple of days, the milled zirconia crown arrives and is permanently bonded to the tooth structure.',
    processSteps: [
      { step: 1, title: 'Tooth Preparation', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Intraoral Digital Impression', desc: '', icon: 'tooth' },
      { step: 3, title: 'Temporary Crown Insertion', desc: '', icon: 'clean' },
      { step: 4, title: 'Permanent Crown Cementation', desc: '', icon: 'crown' }
    ],
    types: [
      { title: 'PFM Crowns', desc: 'Porcelain fused to metal; strong but has a metal base.' },
      { title: 'Zirconia Crowns', desc: 'Ultra-strong, metal-free, highly aesthetic.' },
      { title: 'E-max Crowns', desc: 'Lithium disilicate glass-ceramic; ultimate aesthetics for front teeth.' }
    ],
    startingCost: '₹5,000*',
    costPoints: ['Up to 15-Year Warranty', 'CAD/CAM Milled', 'Perfect Metal-Free Margin'],
    costDisclaimer: '*Price depends on material selected (PFM, Zirconia, E-max).',
    comparisonTitle: 'ZIRCONIA vs BASIC METAL CROWNS',
    comparisonHeader: ['ZIRCONIA', 'PFM CROWNS', 'METAL CROWNS'],
    comparisonRows: [
      { feature: 'Metal-Free Aesthetics', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Strength & Durability', main: 'check', opt1: 'check', opt2: 'check' },
      { feature: 'No Dark Gum Linings', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'CAD/CAM Digital Scans', desc: 'Zero messy tray impressions' },
      { title: 'High Aesthetics Ceramics', desc: 'Perfect color blending' },
      { title: 'Long-term Warranties', desc: 'Up to 15 years on Zirconia' }
    ],
    beforeAfterImage: '/images/before and after/Dental Crown  before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Dental Crown & Bridge.png',
    testimonialText: 'The crown matches my adjacent teeth so perfectly that no one can tell it is artificial.',
    testimonialAuthor: 'Madhavi L., Pragathi Nagar',
    faqs: [
      { question: 'Is a crown necessary after a Root Canal?', answer: 'Yes. A root-canal-treated tooth loses its blood supply and becomes brittle, making it highly prone to cracking without a crown.' },
      { question: 'How do I care for my dental bridge?', answer: 'Brush normally, and use a specialized superfloss or water flosser to clean under the suspended bridge tooth.' }
    ]
  },
  'frenectomy': {
    tagline: 'LASER REVISION. PAINLESS RELEASE.',
    subtitle: 'Suture-free. Bloodless. Safe.',
    techStat: 'WaterLase Soft-Tissue Laser',
    heroImage: '/images/new images/Treatments Theme Images/Frenectomy.png',
    features: [
      { title: 'Painless Laser Cut', desc: 'No surgical scalpels used' },
      { title: 'Suture-free Healing', desc: 'No stitches to remove' },
      { title: 'Speech Improvement', desc: 'Releases tight tongue-tie' },
      { title: 'Close Dental Gaps', desc: 'Aids orthodontic closing' }
    ],
    symptoms: ['Speech Impediment', 'Tongue Tie', 'Nursing Difficulty', 'Wide Gap in Front Teeth', 'Receding Gums'],
    whatIsTitle: 'WHAT IS A FRENECTOMY?',
    whatIsText1: "A frenectomy is the surgical release of a muscular band of tissue (frenum) under the tongue or lip. If this tissue is too thick or short, it causes tongue-tie (limiting speech and feeding) or lip-tie (causing gum pull and dental gaps).",
    whatIsText2: "We perform frenectomies using advanced dental lasers. The laser vaporizes the tight tissue band in seconds, sealing blood vessels and nerves simultaneously. This means there is no bleeding, no stitches, and minimal soreness.",
    whatIsNote: "Excellent option for toddlers and children due to speed and lack of needles or sutures.",
    howItWorksSteps: [
      { step: 1, title: 'Evaluation', desc: 'Check tongue mobility and latch', icon: 'stethoscope' },
      { step: 2, title: 'Numbing Gel', desc: 'Topical anesthetic for comfort', icon: 'syringe' },
      { step: 3, title: 'Laser Release', desc: 'Vaporize tissue band in 2 mins', icon: 'tooth' },
      { step: 4, title: 'Stretches', desc: 'Exercise to prevent reattachment', icon: 'shield' }
    ],
    howItWorksSummary: 'Laser frenectomy releases restrictive tissue without surgical cutting. The laser energy precisely dissolves the fibers of the frenum. The procedure is complete in 5 minutes with zero bleeding, and healing is rapid.',
    processSteps: [
      { step: 1, title: 'Mobility Evaluation', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Topical Numbing Gel', desc: '', icon: 'syringe' },
      { step: 3, title: 'Laser Tissue Release', desc: '', icon: 'tooth' },
      { step: 4, title: 'Post-op Range Stretching', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Lingual Frenectomy', desc: 'Releases tongue-tie to restore speech and nursing.' },
      { title: 'Labial Frenectomy', desc: 'Releases lip-tie to close midline front gaps.' }
    ],
    startingCost: '₹5,000*',
    costPoints: ['Laser Precision', 'No Sutures Needed', 'Post-op Stretching Check Included'],
    costDisclaimer: '*Procedure price includes specialist surgeon and laser fees.',
    comparisonTitle: 'LASER vs SCALPEL FRENECTOMY',
    comparisonHeader: ['LASER METHOD', 'SCALPEL METHOD', 'NO SURGERY'],
    comparisonRows: [
      { feature: 'Zero Bleeding', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'No Stitches Required', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Minimal Soreness', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'WaterLase iPlus Laser', desc: 'Painless soft tissue revision' },
      { title: 'Pediatric Dental Experts', desc: 'Gentle handling of kids' },
      { title: 'Instant Mobilty', desc: 'Immediate movement results' }
    ],
    beforeAfterImage: '/images/before and after/Freenectomy before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Frenectomy.png',
    testimonialText: 'My son had tongue-tie and couldn\'t speak clearly. The laser treatment took 5 minutes and his speech improved immediately!',
    testimonialAuthor: 'Sujatha (Mother of Hemanth), Pragathi Nagar',
    faqs: [
      { question: 'Will my child need general anesthesia?', answer: 'No, laser frenectomy is done in the dental chair using a topical numbing gel or minor local anesthesia.' },
      { question: 'What is the aftercare?', answer: 'We will show you simple tongue stretching exercises to perform for 2-3 weeks to prevent the tissue from healing back.' }
    ]
  },
  'cosmetic-dentistry': {
    tagline: 'BEAUTIFY YOUR SMILE. PERFECT SHAPES.',
    subtitle: 'Composite Veneers. Gum Depigmentation. Contouring.',
    techStat: 'Aesthetic Dental Artistry',
    heroImage: '/images/new images/Treatments Theme Images/Cosmetic Dentistry.png',
    features: [
      { title: 'Close Front Gaps', desc: 'Painless diastema closure' },
      { title: 'Reshape Uneven Teeth', desc: 'Cosmetic contouring & bonding' },
      { title: 'Laser Pink Gums', desc: 'Removes dark gum pigmentation' },
      { title: 'Instant Enhancements', desc: 'Completed in a single visit' }
    ],
    symptoms: ['Chipped Tooth', 'Gap in Front Teeth', 'Dark Gums', 'Uneven Teeth Shapes', 'Gummy Smile'],
    whatIsTitle: 'WHAT IS COSMETIC DENTISTRY?',
    whatIsText1: "Cosmetic dentistry is focused on improving the visual harmony of your teeth and gums. This includes teeth bonding (applying resin to repair chips or close gaps), enamel shaping (contouring jagged edges), and laser gum depigmentation.",
    whatIsText2: "Using advanced cosmetic resins and soft-tissue lasers, we can transform a gummy, dark, or uneven smile into a bright, symmetrical, and confident Hollywood look. Most treatments are non-invasive and done in a single sitting.",
    whatIsNote: "Cosmetic bonding matches your enamel translucency perfectly, making restorations completely invisible.",
    howItWorksSteps: [
      { step: 1, title: 'Design', desc: 'Map out symmetrical tooth lines', icon: 'stethoscope' },
      { step: 2, title: 'Bonding', desc: 'Apply resin and build shape', icon: 'tooth' },
      { step: 3, title: 'Laser Lift', desc: 'Contour gums or remove dark spots', icon: 'clean' },
      { step: 4, title: 'Polish', desc: 'Polish surfaces to high shine', icon: 'shield' }
    ],
    howItWorksSummary: 'We analyze your facial proportions. For gaps or chips, we bond layer after layer of composite resin, curing and sculpting it manually. For dark gums, a gentle dental laser peels away melanin pigments to reveal natural pink gums.',
    processSteps: [
      { step: 1, title: 'Cosmetic Smile Analysis', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Enamel Conditioning & Bonding', desc: '', icon: 'tooth' },
      { step: 3, title: 'Laser Gum Depigmentation', desc: '', icon: 'clean' },
      { step: 4, title: 'High-Gloss Polishing & Finishing', desc: '', icon: 'crown' }
    ],
    types: [
      { title: 'Composite Bonding', desc: 'Quick tooth-colored additions to close gaps.' },
      { title: 'Laser Gum Depigmentation', desc: 'Peeling dark gum layers for healthy pink gums.' },
      { title: 'Enamel Contouring', desc: 'Reshaping jagged edges.' }
    ],
    startingCost: '₹2,500*',
    costPoints: ['Single Sitting Results', 'No Injection Bonding', 'Custom Shade Match'],
    costDisclaimer: '*Gum depigmentation and porcelain veneers cost more than composite bonding.',
    comparisonTitle: 'BONDING vs PORCELAIN VENEERS',
    comparisonHeader: ['COMPOSITE BONDING', 'PORCELAIN VENEERS', 'CROWNS'],
    comparisonRows: [
      { feature: 'Single Sitting Done', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Zero Tooth Cutting', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Stain Resistance', main: 'warn', opt1: 'check', opt2: 'check' }
    ],
    whyChooseCards: [
      { title: 'Ultra-thin Layering Resin', desc: 'High light-translucency' },
      { title: 'Advanced Gum Lasers', desc: 'Quick pink gum whitening' },
      { title: 'Cosmetic Dental Masters', desc: 'Artistic smile modifications' }
    ],
    beforeAfterImage: '/images/before and after/Smile Designing before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Cosmetic Dentistry.png',
    testimonialText: 'The gap between my front teeth is gone! The composite bonding is absolutely invisible.',
    testimonialAuthor: 'Ria S., Pragathi Nagar',
    faqs: [
      { question: 'How long does composite bonding last?', answer: 'Typically 3 to 7 years. You must avoid biting hard foods directly on bonded teeth.' },
      { question: 'Does gum depigmentation recur?', answer: 'Generally, results last 10+ years, but smoking or sun exposure can cause minor pigment return.' }
    ]
  },
  'laser-dentistry': {
    tagline: 'NO DRILL. NO SCALPEL. PAINLESS CLINIC.',
    subtitle: 'Minimally Invasive. Bloodless Healing.',
    techStat: 'FDA-Approved Hard & Soft Tissue Lasers',
    heroImage: '/images/new images/Treatments Theme Images/Laser Dentistry.png',
    features: [
      { title: 'No Drilling Vibration', desc: 'More comfortable cavity prep' },
      { title: 'Reduced Needle Needs', desc: 'Lesser local anesthesia needed' },
      { title: 'Rapid Laser Healing', desc: 'Promotes cellular recovery' },
      { title: 'Sterile Tooth Treatment', desc: 'Kills 99.9% of bacteria' }
    ],
    symptoms: ['Dental Anxiety', 'Sensitive Teeth', 'Gummy Smile', 'Canker Sores', 'Deep Decay'],
    whatIsTitle: 'WHAT IS LASER DENTISTRY?',
    whatIsText1: "Laser dentistry uses concentrated light energy to perform a variety of dental procedures. Hard-tissue lasers can prepare teeth for fillings without the heat, vibration, and noise of traditional drills. Soft-tissue lasers shape gums and remove lesions with zero bleeding.",
    whatIsText2: "By eliminating mechanical friction, lasers reduce post-operative pain, require less anesthesia, and seal incisions instantly, drastically lowering the risk of bacterial infections.",
    whatIsNote: "Perfect for patients with dental phobias or children who dread the sound of the drill.",
    howItWorksSteps: [
      { step: 1, title: 'Calibrate Laser', desc: 'Set wave settings for tissue', icon: 'stethoscope' },
      { step: 2, title: 'Laser Clean', desc: 'Dissolve decay or shape gum', icon: 'tooth' },
      { step: 3, title: 'Disinfect', desc: 'Sterilize canals and pockets', icon: 'clean' },
      { step: 4, title: 'Fill/Heal', desc: 'Complete restoration or seal', icon: 'shield' }
    ],
    howItWorksSummary: 'Dental lasers emit a wavelength absorbed by water and enamel minerals. The laser beam vaporizes decayed structure and sterilizes soft tissue without contacting the tooth directly. The process is clean, quiet, and extremely fast.',
    processSteps: [
      { step: 1, title: 'Laser Safety Check & Goggles', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Wavelength Calibration', desc: '', icon: 'tooth' },
      { step: 3, title: 'Precise Laser Ablation', desc: '', icon: 'clean' },
      { step: 4, title: 'Restoration & Light Curing', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Soft-Tissue Laser', desc: 'For gum surgeries, frenectomies, and ulcer cures.' },
      { title: 'Hard-Tissue Laser', desc: 'For painless cavity preparation and etching.' }
    ],
    startingCost: '₹2,000*',
    costPoints: ['Painless Technology', 'Quick Recovery', 'FDA-Approved Lasers'],
    costDisclaimer: '*Laser treatment is an add-on cost depending on the baseline dental procedure.',
    comparisonTitle: 'LASER vs CONVENTIONAL DRILL',
    comparisonHeader: ['DENTAL LASER', 'ROTARY DRILL', 'SCALPEL'],
    comparisonRows: [
      { feature: 'No Heat/Vibration', main: 'check', opt1: 'cross', opt2: 'check' },
      { feature: 'Zero Bleeding', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Minimal Anesthesia Needed', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'BIOLASE Epic & Waterlase', desc: 'World leaders in dental lasers' },
      { title: 'Certified Laser Specialists', desc: 'Precision wave safety' },
      { title: 'Ultra-Comfortable Rooms', desc: 'Relaxing environment' }
    ],
    costImage: '/images/new images/Treatments Theme Images/Laser Dentistry.png',
    testimonialText: 'I felt no vibration and heard no drill sound! Laser fillings are a game changer.',
    testimonialAuthor: 'Abhinav D., Pragathi Nagar',
    faqs: [
      { question: 'Is laser dentistry safe for pregnant patients?', answer: 'Yes, it is completely safe as there is no radiation. Protective glasses are worn by everyone in the room.' },
      { question: 'Can all cavities be filled with lasers?', answer: 'Lasers are excellent for small to medium cavities, but very large decay or metal removal still requires traditional drills.' }
    ]
  },
  'jaw-surgery': {
    tagline: 'CORRECT SKELETAL BITE. FACIAL BALANCE.',
    subtitle: 'Orthognathic Surgery. 3D Surgical Guide.',
    techStat: 'Maxillofacial Skeletal Alignment',
    heroImage: '/images/new images/Treatments Theme Images/Jaw Surgery.png',
    features: [
      { title: 'Align Jaw Asymmetry', desc: 'Creates balanced facial lines' },
      { title: 'Resolve Severe Bite Issues', desc: 'Corrects underbites and overbites' },
      { title: 'Cures TMJ Joint Pain', desc: 'Relieves joint stress points' },
      { title: 'Improves Speech & Sleep', desc: 'Opens airway blockages' }
    ],
    symptoms: ['Severe Underbite', 'Gummy Smile', 'Facial Asymmetry', 'Difficulty Swallowing', 'Sleep Apnea'],
    whatIsTitle: 'WHAT IS CORRECTIVE JAW SURGERY?',
    whatIsText1: "Corrective jaw surgery (orthognathic surgery) is a specialized procedure that repositions misaligned jaws. When teeth cannot be aligned by braces alone because the underlying jawbones are mismatched, surgery is needed to align the skeletal structure.",
    whatIsText2: "Using advanced 3D virtual surgical planning, the maxillofacial surgeon repositions the upper and lower jaws into their ideal functional and aesthetic positions, securing them with bio-compatible plates.",
    whatIsNote: "This surgery is coordinates with orthodontic braces to ensure teeth fit together perfectly post-alignment.",
    howItWorksSteps: [
      { step: 1, title: '3D Plan', desc: 'CT scans and bite planning', icon: 'stethoscope' },
      { step: 2, title: 'Braces', desc: 'Align teeth before surgical date', icon: 'tooth' },
      { step: 3, title: 'Surgical Shift', desc: 'Reposition upper/lower jaw bone', icon: 'clean' },
      { step: 4, title: 'Fixation', desc: 'Secure bone with titanium plates', icon: 'shield' }
    ],
    howItWorksSummary: 'Jaw surgery is performed under general anesthesia. The surgeon makes incisions entirely inside the mouth, relocates the jawbones using 3D printed guides, and secures them in place. Dental braces then complete final teeth alignment.',
    processSteps: [
      { step: 1, title: '3D Virtual Surgical Setup', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Pre-Surgical Orthodontic Braces', desc: '', icon: 'tooth' },
      { step: 3, title: 'Corrective Osteotomy Shift', desc: '', icon: 'clean' },
      { step: 4, title: 'Skeletal Rigid Fixation', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Maxillary Osteotomy', desc: 'Repositioning the upper jaw for gummy smiles or open bites.' },
      { title: 'Mandibular Osteotomy', desc: 'Repositioning the lower jaw for severe underbites or retrognathia.' },
      { title: 'Bimaxillary Surgery', desc: 'Repositioning both upper and lower jaws.' }
    ],
    startingCost: 'Custom*',
    costPoints: ['Maxillofacial Surgeon Specialist', '3D CT Planning Included', 'Full Hospital Integration'],
    costDisclaimer: '*Cost is customized depending on hospital stay and single/double jaw correction requirements.',
    comparisonTitle: 'SURGERY vs BRACES ALONE',
    comparisonHeader: ['JAW SURGERY', 'BRACES ALONE', 'NO CURE'],
    comparisonRows: [
      { feature: 'Corrects Skeletal Deformity', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Improves Facial Profile', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Resolves Severe Joint Strain', main: 'check', opt1: 'warn', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Senior Maxillofacial Surgeons', desc: 'Top jaw surgery experts' },
      { title: '3D Virtual Surgical Planning', desc: 'Simulate results before surgery' },
      { title: 'Integrated Ortho-Surgical Care', desc: 'Seamless coordination' }
    ],
    beforeAfterImage: '/images/before and after/Genioplasty before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Jaw Surgery.png',
    testimonialText: 'The surgery completely aligned my jaw profile and cured my chronic TMJ joint headaches.',
    testimonialAuthor: 'Deepak R., Pragathi Nagar',
    faqs: [
      { question: 'How long is the jaw surgery recovery?', answer: 'Initial healing takes 6 weeks, while complete bone integration takes 3 to 6 months.' },
      { question: 'Will I have scars on my face?', answer: 'No. The surgical cuts are made entirely inside your mouth, so no facial scars are left.' }
    ]
  },
  'genioplasty': {
    tagline: 'REFINE CHIN PROFILE. RESTORE SYMMETRY.',
    subtitle: 'Surgical Chin Correction. No External Scars.',
    techStat: 'Precision Chin Osteotomy',
    heroImage: '/images/new images/Treatments Theme Images/Genoplasty.png',
    features: [
      { title: 'Correct Weak Chin', desc: 'Advancement to define jawline' },
      { title: 'Reduce Protruding Chin', desc: 'Recession to soften profile' },
      { title: 'Chin Asymmetry Repair', desc: 'Aligns chin point with face center' },
      { title: 'Zero Facial Scarring', desc: 'Incision is completely inside lip' }
    ],
    symptoms: ['Receding Chin', 'Protruding Chin', 'Asymmetric Chin Point', 'Weak Jawline Profile', 'Sunken Lower Face'],
    whatIsTitle: 'WHAT IS A GENIOPLASTY?',
    whatIsText1: "Genioplasty is a surgical cosmetic procedure to reshape the chin bone. Unlike temporary chin fillers or implants that can shift, genioplasty shifts the chin bone itself to achieve permanent facial symmetry.",
    whatIsText2: "A maxillofacial surgeon performs this procedure through an incision inside the mouth. The bone is cut, advanced or reduced, and secured with bio-compatible plates, balancing your chin with your nose and lips.",
    whatIsNote: "Provides immediate, lifelong jawline definition and neck contour enhancements.",
    howItWorksSteps: [
      { step: 1, title: 'CT Scan', desc: 'Assess facial bone proportions', icon: 'stethoscope' },
      { step: 2, title: 'Incision', desc: 'Cut made inside the lower lip', icon: 'tooth' },
      { step: 3, title: 'Osteotomy', desc: 'Precisely slide the chin bone', icon: 'clean' },
      { step: 4, title: 'Fixation', desc: 'Secure with titanium miniplates', icon: 'shield' }
    ],
    howItWorksSummary: 'Under general anesthesia, the chin bone is exposed through the inside of the lower lip. The bone is cut, repositioned to the planned advancement or reduction guidelines, fixed with plate screws, and sutured shut.',
    processSteps: [
      { step: 1, title: 'Facial Profile CT Scan', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Intraoral Lip Access', desc: '', icon: 'tooth' },
      { step: 3, title: 'Precision Chin Osteotomy', desc: '', icon: 'clean' },
      { step: 4, title: 'Plate Fixation & Suture Close', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Advancement Genioplasty', desc: 'Shifting chin forward to correct retrognathic weak profiles.' },
      { title: 'Reduction Genioplasty', desc: 'Shifting chin back to soften protruding profiles.' }
    ],
    startingCost: 'Custom*',
    costPoints: ['Lifelong Permanent Results', 'No Chin Implant Rejection Risk', 'No External Scars'],
    costDisclaimer: '*Exact cost is determined after CT evaluation and orthodontic planning.',
    comparisonTitle: 'GENIOPLASTY vs CHIN IMPLANTS',
    comparisonHeader: ['GENIOPLASTY BONE SHIFT', 'SILICONE IMPLANTS', 'FILLERS'],
    comparisonRows: [
      { feature: 'Zero Infection/Dislocation Risk', main: 'check', opt1: 'cross', opt2: 'check' },
      { feature: 'Corrects Asymmetry', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Permanent Result', main: 'check', opt1: 'check', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: '3D Simulation Software', desc: 'Visualize your profile change' },
      { title: 'Maxillofacial Elite Specialists', desc: 'Expert bone carvers' },
      { title: 'Complete Post-op Comfort Care', desc: 'Smooth recovery guides' }
    ],
    beforeAfterImage: '/images/before and after/Genioplasty before and after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Genoplasty.png',
    testimonialText: 'My profile looks incredibly balanced now. The weak chin was corrected permanently.',
    testimonialAuthor: 'Sanjana P., Pragathi Nagar',
    faqs: [
      { question: 'Will my lips feel numb after surgery?', answer: 'Temporary lower lip numbness is common due to nerve stretching but resolves fully in a few weeks.' },
      { question: 'How long do stitches take to dissolve?', answer: 'The dissolvable stitches inside the mouth typically fall out in 10 to 14 days.' }
    ]
  },
  'mouth-ulcers': {
    tagline: 'INSTANT ULCER PAIN RELIEF.',
    subtitle: 'Laser Photobiomodulation. Fast Sore Healing.',
    techStat: 'Low-Level Laser Cauterization',
    heroImage: '/images/new images/Treatments Theme Images/Mouth Ulcers.png',
    features: [
      { title: 'Instant Pain Block', desc: 'Numbs ulcer nerves in 60 seconds' },
      { title: 'Cuts Healing Time', desc: 'Accelerates sore tissue closure' },
      { title: 'Painless Non-contact Laser', desc: 'Laser tip never touches the sore' },
      { title: 'Prevents Sore Recurrence', desc: 'Sterilizes local sore boundaries' }
    ],
    symptoms: ['Painful Canker Sores', 'Difficulty Swallowing', 'Red Cheek Sores', 'Burning Gums', 'Sharp Tooth Rubbing'],
    whatIsTitle: 'WHAT IS LASER MOUTH ULCER TREATMENT?',
    whatIsText1: "Mouth ulcers (aphthous ulcers) are painful spots that make talking, eating, and drinking hot liquids unbearable. While topical gels take 10-14 days to heal them, low-level laser therapy provides relief in seconds.",
    whatIsText2: "The dental laser delivers light energy directly to the ulcer. This stimulates cellular healing, destroys bacteria, and temporarily de-sensitizes local nerve endings, allowing you to eat comfortably immediately after the treatment.",
    whatIsNote: "The procedure is completely non-contact, quiet, and requires zero injections.",
    howItWorksSteps: [
      { step: 1, title: 'Clean', desc: 'Sore is gently isolated', icon: 'stethoscope' },
      { step: 2, title: 'Laser Hover', desc: 'Laser beam points at the ulcer', icon: 'tooth' },
      { step: 3, title: 'De-sensitize', desc: 'Nerve endings are neutralized', icon: 'clean' },
      { step: 4, title: 'Heal', desc: 'Tissue regeneration starts', icon: 'shield' }
    ],
    howItWorksSummary: 'Laser energy de-sensitizes localized nerve endings around the canker sore. In a single session, the low-power laser tip is scanned over the ulcer for 90 seconds. Healing factors are activated, sealing the sore for quick recovery.',
    processSteps: [
      { step: 1, title: 'Ulcer Isolation & Cleanse', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Goggles Protection Placement', desc: '', icon: 'tooth' },
      { step: 3, title: 'Laser Cauterization Scanning', desc: '', icon: 'clean' },
      { step: 4, title: 'Soothing Topical Gel Finish', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Laser Aphthous Therapy', desc: 'Direct treatment of painful sores.' },
      { title: 'Sharp Tooth Contouring', desc: 'Smooves sharp tooth margins causing recurring cheek sores.' }
    ],
    startingCost: '₹1,000*',
    costPoints: ['Instant Relief Guaranteed', 'Takes Under 5 Minutes', 'Anti-inflammatory Care Included'],
    costDisclaimer: '*Price covers laser cauterization and post-op healing gels.',
    comparisonTitle: 'LASER vs SALTS/CREAMS',
    comparisonHeader: ['LASER SCAN', 'OVER THE COUNTER GELS', 'SALT WATER'],
    comparisonRows: [
      { feature: 'Instant Pain Block', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Heals in 24-48 Hours', main: 'check', opt1: 'cross', opt2: 'cross' },
      { feature: 'Zero Burning Sensation', main: 'check', opt1: 'cross', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Diode Low-Energy Laser', desc: 'Non-burning light therapy' },
      { title: 'Instant Comfort Check', desc: 'Walk out pain-free' },
      { title: 'Ulcer Preventive Evaluation', desc: 'Addresses systemic vitamins' }
    ],
    costImage: '/images/new images/Treatments Theme Images/Mouth Ulcers.png',
    testimonialText: 'I couldn\'t speak due to a huge ulcer. The laser took 1 minute and the pain vanished completely!',
    testimonialAuthor: 'Divya K., Pragathi Nagar',
    faqs: [
      { question: 'Does the laser burn my cheek?', answer: 'No. The laser uses cold-pulse biostimulation. You will only feel a warm, comforting sensation.' },
      { question: 'Why do I get recurring ulcers?', answer: 'Recurring ulcers can be triggered by stress, vitamin B12 deficiencies, sharp tooth margins, or acidic foods.' }
    ]
  },
  'preventive-dentistry': {
    tagline: 'SHIELD YOUR ENAMEL. BLOCK CAVITIES.',
    subtitle: 'Pit & Fissure Sealants. Fluoride Varnish.',
    techStat: 'Proactive Enamel Protection',
    heroImage: '/images/new images/Treatments Theme Images/Preventive Dentistry.png',
    features: [
      { title: 'Fluoride Enamel Shield', desc: 'Re-mineralizes weak enamel spots' },
      { title: 'Pit & Fissure Sealants', desc: 'Coats deep molar grooves' },
      { title: 'Custom Nightguards', desc: 'Stops teeth grinding wear' },
      { title: 'Child Decay Defense', desc: 'Keeps kids teeth cavity-free' }
    ],
    symptoms: ['Acid Sensitivity', 'Deep Molar Grooves', 'Teeth Grinding (Bruxism)', 'Chipped Enamel Edges', 'Plaque Buildup'],
    whatIsTitle: 'WHAT IS PREVENTIVE DENTISTRY?',
    whatIsText1: "Preventive dentistry aims to stop dental issues before they start. Key treatments include dental sealants (painting thin coatings over molar crevices to keep food out) and fluoride varnishes (strengthening enamel against bacterial acid).",
    whatIsText2: "We also fabricate custom Nightguards for patients who grind their teeth (bruxism), protecting the teeth from fractures, flattening, and TMJ jaw joint pain.",
    whatIsNote: "Investing in preventive treatments saves you from expensive root canals or extractions later.",
    howItWorksSteps: [
      { step: 1, title: 'Clean', desc: 'Polish tooth crevices thoroughly', icon: 'stethoscope' },
      { step: 2, title: 'Sealant Paint', desc: 'Flowable composite in grooves', icon: 'tooth' },
      { step: 3, title: 'Curing', desc: 'LED light hardens the sealant', icon: 'clean' },
      { step: 4, title: 'Fluoride gel', desc: 'Apply protective enamel varnish', icon: 'shield' }
    ],
    howItWorksSummary: 'Dental sealants are flowable resins applied to deep grooves of permanent molars. Once light-cured, they act as a physical shield against food packing. Fluoride therapy infuses essential minerals back into early decay pores to reverse minor lesions.',
    processSteps: [
      { step: 1, title: 'Plaque Cleaning & Polishing', desc: '', icon: 'stethoscope' },
      { step: 2, title: 'Pit Resin Sealant Application', desc: '', icon: 'tooth' },
      { step: 3, title: 'Blue light Polymerization', desc: '', icon: 'clean' },
      { step: 4, title: 'Concentrated Fluoride Application', desc: '', icon: 'shield' }
    ],
    types: [
      { title: 'Dental Sealants', desc: 'Protective coatings for chewing surfaces of back teeth.' },
      { title: 'Fluoride Therapy', desc: 'Professional strength varnish to strengthen enamel.' },
      { title: 'Bruxism Nightguards', desc: 'Custom mouthguards to prevent teeth grinding wear.' }
    ],
    startingCost: '₹1,200*',
    costPoints: ['Quick Painless Procedure', 'No Tooth Cutting', 'Highly Cost Effective'],
    costDisclaimer: '*Fluoride and Nightguards have different pricing based on arch size.',
    comparisonTitle: 'SEALANTS vs CAVITY REPAIR',
    comparisonHeader: ['PREVENTIVE SEALANTS', 'FILLINGS', 'ROOT CANAL'],
    comparisonRows: [
      { feature: 'Saves Natural Enamel', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Zero Pain/Discomfort', main: 'check', opt1: 'warn', opt2: 'cross' },
      { feature: 'Highly Affordable', main: 'check', opt1: 'dash', opt2: 'cross' }
    ],
    whyChooseCards: [
      { title: 'Clinically Proven Sealants', desc: 'Up to 90% cavity reduction' },
      { title: 'FDA Fluoride Varnishes', desc: 'Deep enamel re-mineralization' },
      { title: 'Custom Nightguards Milling', desc: 'Ideal jaw joint fits' }
    ],
    beforeAfterImage: '/images/before and after/Teeth Scaling_Cleaning before after.jpeg',
    costImage: '/images/new images/Treatments Theme Images/Preventive Dentistry.png',
    testimonialText: 'My daughter got sealants done for her back teeth. It has kept them cavity-free for years!',
    testimonialAuthor: 'Arjun S. (Father of Ria), Pragathi Nagar',
    faqs: [
      { question: 'Are dental sealants permanent?', answer: 'Sealants can last 5 to 10 years, but need to be checked during regular dental visits to ensure they haven\'t worn down.' },
      { question: 'Do nightguards cure teeth grinding?', answer: 'Nightguards do not stop the grinding habit (which is often stress-related), but they absorb chewing forces to protect your teeth and joints from wearing down.' }
    ]
  }
};

const doctorDetails: Record<string, {
  name: string;
  title: string;
  experience: string;
  qualifications: string[];
  certifications: string[];
  expertise: string[];
  description: string;
  image: string;
}> = {
  'root-canal-treatment': {
    name: 'Dr. Abdul Wahed',
    title: 'MDS Endodontics',
    experience: '12+ Years Experience (15,050+ Painless Root Canals)',
    qualifications: ['BDS', 'MDS Endodontics'],
    certifications: [
      'Rotary Endodontics Certification',
      'Smile Design Certification',
      'Advanced Microscopic Dentistry Training'
    ],
    expertise: ['Single sitting RCT', 'Re-RCT', 'Painless root canal treatment', 'Dental crown restorations'],
    description: 'Dr. Abdul Wahed is a premier Endodontist with 12+ years of expertise in painless root canal treatment, rotary endodontics, and microscopic dentistry. Specializing in advanced, single-visit root canals, retreatment, and microscopic surgery, he has successfully completed over 15,050+ painless root canals.',
    image: '/dr.abdul.jpg'
  },
  'dental-implants': {
    name: 'Dr. Anurag',
    title: 'MDS Prosthodontics & Implantology',
    experience: '15+ Years Experience',
    qualifications: ['BDS', 'MDS Prosthodontics & Implantology'],
    certifications: [
      'Fellow of International Congress of Oral Implantologists (ICOI)',
      'Advanced Implant Prosthetics Training',
      'Professor at Balaji Dental College'
    ],
    expertise: ['Single/Multiple Implants', 'All-on-4 / All-on-6 fixed dentures', 'Zirconia & E-max restorations', 'Bone grafting'],
    description: 'Dr. Anurag is a chief smile designer and professor at Balaji Dental College. With over 15+ years of clinical excellence in complex dental implants, fixed prosthetics, and full-mouth rehabilitations.',
    image: '/anurag.jpg'
  },
  'braces': {
    name: 'Dr. Nithin Bharat',
    title: 'MDS Dentofacial Orthodontics',
    experience: '14+ Years Experience',
    qualifications: ['BDS', 'MDS Orthodontics & Dentofacial Orthodontics'],
    certifications: [
      'Invisalign Gold Certified Provider',
      'Advanced Self-Ligating Braces Training',
      'Clear Aligners Specialist'
    ],
    expertise: ['Pediatric orthodontics', 'Adult braces', 'Self-ligating braces systems', 'Invisalign & clear aligners'],
    description: 'Dr. Nithin Bharat is a premier orthodontist and certified Invisalign consultant specializing in correcting complex misalignments, bite corrections, and aesthetic braces for patients of all ages.',
    image: '/nithin.jpg'
  },
  'invisalign-treatment': {
    name: 'Dr. Nithin Bharat',
    title: 'MDS Dentofacial Orthodontics',
    experience: '14+ Years Experience',
    qualifications: ['BDS', 'MDS Orthodontics & Dentofacial Orthodontics'],
    certifications: [
      'Invisalign Gold Certified Provider',
      'Advanced Self-Ligating Braces Training',
      'Clear Aligners Specialist'
    ],
    expertise: ['Pediatric orthodontics', 'Adult braces', 'Self-ligating braces systems', 'Invisalign & clear aligners'],
    description: 'Dr. Nithin Bharat is a premier orthodontist and certified Invisalign consultant specializing in correcting complex misalignments, bite corrections, and aesthetic braces for patients of all ages.',
    image: '/nithin.jpg'
  }
};

const defaultDoctorDetails = {
  name: 'Dr. Sneha',
  title: 'Founder & Chief Dentist',
  experience: '15+ Years Experience',
  qualifications: ['BDS', 'Fellow in Aesthetic Dentistry'],
  certifications: [
    'Cosmetic Dentistry Certification',
    'Advanced General Practice Training'
  ],
  expertise: ['Aesthetic Smile Designing', 'General Dentistry', 'Preventive care', 'Crowns & Veneers'],
  description: 'Dr. Sneha is the founder of Dental World Clinic and has a wealth of experience in providing comprehensive dental care, focusing on patient comfort and advanced treatment modalities.',
  image: '/sneha.jpg'
};

const internalLinksMapping: Record<string, { text: string; href: string }[]> = {
  'root-canal-treatment': [
    { text: 'Dental crowns treatment', href: '/treatments/dental-crown-bridges' },
    { text: 'Tooth pain treatment', href: '/treatments/tooth-decay-fillings' },
    { text: 'Wisdom tooth extraction', href: '/treatments/wisdom-tooth-extraction' },
    { text: 'Dental fillings', href: '/treatments/tooth-decay-fillings' },
    { text: 'Cosmetic dentistry', href: '/treatments/cosmetic-dentistry' },
    { text: 'Smile makeover', href: '/treatments/smile-designing' },
    { text: 'Emergency dental care', href: '/book-appointment' },
    { text: 'Painless dentistry', href: '/treatments/laser-dentistry' }
  ],
  'dental-implants': [
    { text: 'Root canal treatment', href: '/treatments/root-canal-treatment' },
    { text: 'Smile designing', href: '/treatments/smile-designing' },
    { text: 'Full mouth rehabilitation', href: '/treatments/full-mouth-rehabilitation' },
    { text: 'Dental crown & bridges', href: '/treatments/dental-crown-bridges' }
  ]
};

const defaultInternalLinks = [
  { text: 'Root canal treatment', href: '/treatments/root-canal-treatment' },
  { text: 'Dental implants', href: '/treatments/dental-implants' },
  { text: 'Dental braces', href: '/treatments/braces' },
  { text: 'Smile designing', href: '/treatments/smile-designing' },
  { text: 'Cosmetic dentistry', href: '/treatments/cosmetic-dentistry' }
];

export default function TreatmentPageClient({ slug, displayTitle }: { slug: string, displayTitle: string }) {
  // Grab info. Fallback to Root Canal if it's missing or unmapped
  const info = treatmentsInfo[slug] || treatmentsInfo['root-canal-treatment'];
  const data = treatmentsData[slug] || treatmentsData['root-canal-treatment'];
  const doctor = doctorDetails[slug] || defaultDoctorDetails;
  const internalLinks = internalLinksMapping[slug] || defaultInternalLinks;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    treatment: displayTitle,
    clinic: "Pragathi Nagar"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [activeCategory, setActiveCategory] = useState("All Guides");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.mobile.trim()) {
      setErrorMsg("Please fill in your name and mobile number.");
      return;
    }

    // Success
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col flex-grow bg-slate-50/50 font-sans">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
          <div className="flex items-center space-x-2 text-xs md:text-[13px] text-slate-500 py-3.5">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/treatments" className="hover:text-blue-600 transition">Treatments</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#0056D2] font-semibold">{displayTitle} in Hyderabad</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#eaf4ff] via-[#f5f9ff] to-white pt-10 pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] relative z-10">
          <div className="bg-white border border-slate-200/60 shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

            {/* Left side - Hero Text */}
            <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-6 z-20 relative bg-white text-left">
              <span className="inline-block bg-blue-100/50 text-[#0056D2] text-[11px] md:text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-blue-200/50 self-start">
                {info.tagline}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0a1d37] font-heading leading-tight">
                {displayTitle} <br className="hidden md:inline" />in Hyderabad
              </h1>

              <p className="text-lg md:text-xl font-extrabold text-[#0056D2] leading-tight">
                {info.subtitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-lg">
                {displayTitle.toLowerCase().startsWith('advanced') ? displayTitle : `Advanced ${displayTitle.toLowerCase()}`} using digital imaging, precision tools and pain-free anesthesia.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link href="/book-appointment" className="bg-[#0056D2] hover:bg-blue-700 text-white px-5 py-2.5 rounded-[5px] font-bold transition flex items-center text-sm shadow-sm">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Book Consultation
                </Link>

                <a href={SITE.whatsapp.url} target="_blank" rel="noopener noreferrer" className="border border-green-500 hover:bg-green-50 text-green-600 px-5 py-2.5 rounded-lg font-bold transition flex items-center text-sm bg-white">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={16} height={16} className="mr-1.5" />
                  WhatsApp Us
                </a>

                <a href={`tel:${SITE.phone.tel}`} className="btn-secondary text-sm !py-2.5 !px-5">
                  <Phone className="w-4 h-4 mr-1.5" />
                  Call Now
                </a>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#0a1d37] leading-none">15+</div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">Years Exp.</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#0a1d37] leading-none">85,000+</div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">Happy Patients</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#0a1d37] leading-none">Advanced</div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">{info.techStat}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#0a1d37] leading-none">2</div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase mt-0.5">Locations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Doctor Image */}
            <div className="lg:col-span-4 relative min-h-[350px] md:min-h-[480px] lg:min-h-full overflow-hidden w-full z-10 bg-slate-200">
              <Image
                src={info.heroImage}
                alt="Doctor treating patient smiling"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Left edge seamless gradient blend for desktop */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              {/* Right edge seamless gradient blend for desktop */}
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50/50 to-transparent z-10 pointer-events-none"></div>
              {/* Top soft blend for mobile when items stack */}
              <div className="lg:hidden absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
              {/* Bottom soft blend for mobile when items stack */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50/50 to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Right side - Consultation Form */}
            <div className="lg:col-span-3 p-6 md:p-8 bg-slate-50/50 border-l border-slate-200/60 z-20 relative flex flex-col justify-center text-left">
              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">Thank You!</h3>
                  <p className="text-sm text-slate-600 max-w-sm">
                    Your consultation request for <strong>{formData.treatment}</strong> has been received successfully. Our coordinator will contact you at <strong>{formData.mobile}</strong> within 15 minutes.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); }}
                    className="mt-4 border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-xs px-4 py-2 rounded"
                  >
                    Book Another Consultation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">Book Your Consultation</h3>
                    <p className="text-xs text-slate-450 mt-1">Fill the form and our team will get in touch</p>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 text-xs px-3 py-2 rounded border border-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 transition outline-none text-slate-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter 10 digit mobile number"
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 transition outline-none text-slate-900 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">Treatment</label>
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 transition outline-none text-slate-900 font-semibold"
                      >
                        <option value="General Consultation">General Consultation</option>
                        <option value="Second Opinion">Second Opinion</option>
                        <option value="Root Canal Treatment">Root Canal Treatment</option>
                        <option value="Teeth Cleaning/Scaling">Teeth Cleaning/Scaling</option>
                        <option value="Dental Implants">Dental Implants & Full Mouth Implants</option>
                        <option value="Invisalign & Braces">Clear Aligners & Invisible Aligners</option>
                        <option value="Braces">Dental Braces</option>
                        <option value="Kids Dentistry">Kids & Pediatric Dentistry</option>
                        <option value="Wisdom Tooth Extraction">Wisdom Tooth Extraction</option>
                        <option value="Advanced Gum Treatment">Advanced Gum Treatment & Flap</option>
                        <option value="Tooth Decay & Fillings">Tooth Decay & Fillings</option>
                        <option value="Hybrid & Full Mouth Dentures">Hybrid & Full Mouth Dentures</option>
                        <option value="Smile Makeover">Smile Designing</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Bad Breath & Halitosis">Bad Breath & Halitosis</option>
                        <option value="Dental Crown & Bridges">Dental Crown & Bridges</option>
                        <option value="Frenectomy">Frenectomy</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                        <option value="Laser Dentistry">Laser Dentistry</option>
                        <option value="Jaw Surgery">Jaw Surgery</option>
                        <option value="Genioplasty">Genioplasty</option>
                        <option value="Mouth Ulcers">Mouth Ulcers</option>
                        <option value="Preventive Dentistry">Preventive Dentistry</option>
                        <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">Preferred Clinic</label>
                      <select
                        name="clinic"
                        value={formData.clinic}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 transition outline-none text-slate-900 font-semibold"
                      >
                        <option value="Pragathi Nagar">Pragathi Nagar</option>
                        <option value="Bachupally">Bachupally</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0056D2] hover:bg-blue-700 text-white font-bold py-3.5 rounded-[5px] transition text-sm shadow-sm flex items-center justify-center mt-6"
                  >
                    Submit
                  </button>

                  <div className="flex items-center justify-center text-[11px] text-slate-450 gap-1.5 mt-2">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your information is safe and secure.</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURES ROW */}
      <section className="bg-white border-y border-slate-200/60 py-6">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-4 overflow-x-auto">
            {info.features.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-left min-w-[200px] md:min-w-0 md:flex-1">
                <FeatureIcon index={idx} />
                <div>
                  <h4 className="font-extrabold text-[#0a1d37] text-xs md:text-sm leading-tight">{feat.title}</h4>
                  <p className="text-[10px] md:text-xs text-slate-450 font-bold mt-0.5 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY WELCOME BANNER */}
      {info.bannerBelowHero && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/6]">
              <Image
                src={info.bannerBelowHero}
                alt={`${displayTitle} Special Care`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
          </div>
        </section>
      )}

      {/* SYMPTOMS SECTION */}
      <section className="py-12 bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] text-center">
          <span className="inline-block text-[#0056D2] text-xs md:text-sm font-black tracking-widest uppercase mb-8">
            SYMPTOMS THAT MAY REQUIRE {displayTitle.toUpperCase()} EVALUATION
          </span>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {info.symptoms.map((sym, idx) => (
              <div key={idx} className="bg-white px-5 py-3.5 rounded-full border border-slate-200/60 flex items-center justify-center space-x-3.5 shadow-sm hover:scale-105 hover:shadow-md transition duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50/50 flex items-center justify-center shrink-0 text-[#0056D2]">
                  <SymptomIcon name={sym} />
                </div>
                <span className="text-xs md:text-sm font-black text-[#0a1d37] leading-tight tracking-tight text-left">{sym}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS / HOW DOES IT WORK SPLIT ROW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Column - What is */}
            <div className="w-full lg:w-[45%] space-y-6 text-left flex flex-col justify-between">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading leading-tight">
                  {info.whatIsTitle}
                </h2>

                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                  {info.whatIsText1}
                </p>

                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                  {info.whatIsText2}
                </p>
              </div>

              {/* Blue note card */}
              <div className="bg-[#f0f7ff] border-l-4 border-[#0056D2] p-4.5 rounded-r-2xl mt-6">
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  <strong className="text-blue-950 font-extrabold">Note: </strong>
                  {info.whatIsNote.startsWith("Note:") || info.whatIsNote.startsWith("Note: ") ? info.whatIsNote.replace(/^Note:\s*/i, "") : info.whatIsNote}
                </p>
              </div>
            </div>

            {/* Right Column - How it works steps */}
            <div className="w-full lg:w-[55%] space-y-6 text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading leading-tight">
                HOW DOES {displayTitle.toUpperCase()} WORK?
              </h2>

              {/* Horizontal flow steps with arrows */}
              <div className="flex flex-nowrap items-stretch justify-between gap-1 overflow-x-auto pb-4 pt-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
                {info.howItWorksSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center flex-1 min-w-[110px] md:min-w-0">
                    <div className="flex flex-col items-center text-center flex-grow">
                      {/* Icon Box */}
                      <div className="w-[72px] h-[72px] bg-white rounded-2xl border border-blue-100 shadow-md flex items-center justify-center mb-3 shrink-0">
                        <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <StepIcon icon={step.icon} />
                        </div>
                      </div>
                      <h4 className="font-extrabold text-[#0a1d37] text-xs md:text-sm leading-snug mb-1.5">
                        {step.step}. {step.title}
                      </h4>
                      <p className="text-[10.5px] md:text-xs text-slate-500 font-semibold leading-tight max-w-[125px] min-h-[44px] px-1">
                        {step.desc}
                      </p>
                    </div>
                    {idx < info.howItWorksSteps.length - 1 && (
                      <div className="text-blue-300 font-bold text-sm md:text-base px-1 md:px-2 select-none self-center mb-12 shrink-0">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed pt-2 border-t border-slate-100">
                {info.howItWorksSummary}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VISUAL PROCEDURES / CLINICAL GUIDE SECTION */}
      {info.visualProcedures && (
        <section className="py-16 bg-slate-50/50 border-t border-slate-200/40">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] text-center">
            <span className="inline-block text-[#0056D2] text-xs md:text-sm font-black tracking-widest uppercase mb-3">
              CLINICAL GUIDE
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1d37] font-heading mb-4">
              Visual Guide & Clinical Procedures
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto mb-10 font-medium">
              {slug === 'pediatric-dentistry'
                ? 'Explore step-by-step illustrations of our dental care protocols and child-friendly clinic experience.'
                : 'Explore step-by-step illustrations of our dental care protocols and clinical procedures.'
              }
            </p>

            {/* Render Category Tabs if categories exist in visualProcedures (like in pediatric) */}
            {info.visualProcedures.some(proc => proc.category) && (
              <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
                {["All Guides", "Clinic Experience & Rewards", "Preventive Enamel Shield", "Advanced Care & Screenings"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-xs font-black tracking-tight border transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-[#0056D2] text-white border-[#0056D2] shadow-md scale-105"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Grid of Procedures */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
              {info.visualProcedures
                .filter(proc => activeCategory === "All Guides" || proc.category === activeCategory)
                .map((proc, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group text-left">
                    <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden shrink-0">
                      <Image
                        src={proc.image}
                        alt={proc.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      {proc.category && (
                        <span className="absolute top-3 left-3 bg-[#0056D2]/90 text-white font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm shadow-sm">
                          {proc.category}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm md:text-base mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">
                          {proc.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                          {proc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* DETAILED MATERIAL/TECH GALLERY SECTION */}
      {info.detailedGallery && (
        <section className="py-16 bg-white border-t border-slate-200/40">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] text-center">
            <span className="inline-block text-[#0056D2] text-xs md:text-sm font-black tracking-widest uppercase mb-3">
              TECHNOLOGY & OPTIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1d37] font-heading mb-4">
              Orthodontic Treatment Options & Material Tech
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto mb-10 font-medium">
              We offer advanced orthodontic choices tailored to your aesthetic preferences and bite correction needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {info.detailedGallery.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 flex flex-col group text-left">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-extrabold text-[#0a1d37] text-base mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STEP-BY-STEP PROCESS TIMELINE (Horizontal circles connected by dotted lines) */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading mb-14 uppercase tracking-wider">
            STEP-BY-STEP {displayTitle.toUpperCase()} PROCESS
          </h2>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 max-w-5xl mx-auto">
            {/* Horizontal Line background (Desktop only) */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-slate-200 border-t border-dashed border-slate-300 pointer-events-none hidden md:block"></div>

            {info.processSteps.map((step, idx) => {
              const stepIcons = ["stethoscope", "syringe", "tooth", "clean", "shield", "crown"];
              const iconName = (step as any).icon || stepIcons[idx] || "check";

              return (
                <div key={idx} className="relative z-10 flex flex-col items-center w-full md:w-1/6 group">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-200 text-blue-600 font-bold text-lg flex items-center justify-center shadow-md transition-all duration-350 group-hover:bg-[#0056D2] group-hover:text-white group-hover:border-[#0056D2] group-hover:scale-110 shrink-0">
                    <StepIcon icon={iconName} />
                  </div>
                  {/* Step Label */}
                  <span className="text-[10px] font-extrabold text-[#0056D2] mt-3.5 uppercase tracking-widest">
                    Step {step.step}
                  </span>
                  <span className="font-extrabold text-[12px] md:text-[13px] text-[#0a1d37] mt-1 max-w-[130px] leading-tight text-center">
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THREE COLUMN SECTION (Types / Cost / Comparison) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">

            {/* Column 1: Types */}
            <div className="w-full lg:w-[33%] bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-200/60 text-left flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-[#0056D2] uppercase tracking-wider mb-6 pb-2 border-b border-slate-200">
                  TYPES OF {displayTitle.toUpperCase()}
                </h3>
                <div className="space-y-6">
                  {info.types.map((type, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5">
                      <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/80 shadow-sm">
                        {idx === 0 && <Clock className="w-4.5 h-4.5" />}
                        {idx === 1 && <Sparkles className="w-4.5 h-4.5" />}
                        {idx === 2 && <Search className="w-4.5 h-4.5" />}
                        {idx > 2 && <Check className="w-4.5 h-4.5" />}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm leading-snug">
                          {type.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">{type.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Cost */}
            <div className="w-full lg:w-[33%] bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 text-center flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold text-[#0056D2] uppercase tracking-wider mb-2">
                  COST IN HYDERABAD
                </h3>
                <p className="text-xs text-slate-450 font-bold">Transparent pricing. No hidden charges.</p>

                {/* Tooth Cost badge */}
                <div className="relative w-full aspect-square max-w-[145px] mx-auto my-1 flex items-center justify-center">
                  <Image
                    src={info.costImage || "/images/cases/tooth_cross_section.png"}
                    alt="Tooth cross section diagram"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>

                <div className="text-center mt-2 mb-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Starting From</span>
                  <span className="text-3xl font-black text-[#0056D2] mt-0.5 block">{info.startingCost}</span>
                </div>

                <div className="space-y-2 max-w-[240px] mx-auto pt-3 text-left">
                  {info.costPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center text-xs font-bold text-slate-700">
                      <Check className="w-4.5 h-4.5 text-blue-600 mr-2 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <span className="text-[10px] text-slate-400 font-bold block mt-6">{info.costDisclaimer}</span>
            </div>

            {/* Column 3: Comparison Table */}
            <div className="w-full lg:w-[34%] bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-200/60 text-left flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-[#0056D2] uppercase tracking-wider mb-6 pb-2 border-b border-slate-200">
                  {info.comparisonTitle}
                </h3>

                <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200/80">
                        <th className="py-2.5 px-3 font-extrabold text-slate-700 uppercase">Feature</th>
                        <th className="py-2.5 px-2 font-extrabold text-blue-600 bg-blue-50/30 text-center">{info.comparisonHeader[0]}</th>
                        <th className="py-2.5 px-2 font-extrabold text-slate-500 text-center">{info.comparisonHeader[1]}</th>
                        <th className="py-2.5 px-2 font-extrabold text-slate-500 text-center">{info.comparisonHeader[2]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {info.comparisonRows.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/20 transition">
                          <td className="py-3 px-3 font-bold text-slate-700 leading-tight">{row.feature}</td>

                          {/* Main */}
                          <td className="py-3 px-2 text-center bg-blue-50/20">
                            {row.main === 'check' ? <Check className="w-4.5 h-4.5 text-green-500 mx-auto" /> : <X className="w-4.5 h-4.5 text-red-500 mx-auto" />}
                          </td>

                          {/* Opt 1 */}
                          <td className="py-3 px-2 text-center">
                            {row.opt1 === 'check' && <Check className="w-4.5 h-4.5 text-green-500 mx-auto" />}
                            {row.opt1 === 'cross' && <X className="w-4.5 h-4.5 text-red-500 mx-auto" />}
                            {row.opt1 === 'warn' && <AlertTriangle className="w-4.5 h-4.5 text-amber-500 mx-auto" />}
                            {row.opt1 === 'dash' && <span className="text-slate-300 font-bold mx-auto">—</span>}
                          </td>

                          {/* Opt 2 */}
                          <td className="py-3 px-2 text-center">
                            {row.opt2 === 'check' && <Check className="w-4.5 h-4.5 text-green-500 mx-auto" />}
                            {row.opt2 === 'cross' && <X className="w-4.5 h-4.5 text-red-500 mx-auto" />}
                            {row.opt2 === 'warn' && <AlertTriangle className="w-4.5 h-4.5 text-amber-500 mx-auto" />}
                            {row.opt2 === 'dash' && <span className="text-slate-300 font-bold mx-auto">—</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE DENTAL WORLD (6 Grid Cards) */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-200/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading mb-14">
            WHY CHOOSE DENTAL WORLD?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {info.whyChooseCards.map((card, idx) => (
              <div key={idx} className="flex items-start bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-4 mt-0.5 shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-[#0a1d37] mb-1.5 text-sm">{card.title}</h4>
                  <p className="text-xs text-slate-450 font-bold leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS AND TESTIMONIAL ROW (Before/After + Testimonial) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
          <div className={`grid grid-cols-1 ${
            info.beforeAfterImage ? 'lg:grid-cols-3' : 'max-w-2xl mx-auto'
          } gap-8 items-stretch`}>

            {/* Box 1: Before/After Case Showcase */}
            {info.beforeAfterImage && (
              <div className="bg-[#f8faff] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between lg:col-span-2">
                <h3 className="text-sm font-extrabold text-[#0056D2] uppercase tracking-wider mb-4">
                  Clinical Results (Before & After)
                </h3>

                <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100/50 flex items-center justify-center py-4 border border-slate-200/40 h-full min-h-[300px]">
                  <img
                    src={info.beforeAfterImage}
                    alt="Clinical Results Before and After Showcase"
                    className="max-h-[400px] object-contain rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            )}

            {/* Box 2: Testimonial Box */}
            <div className={`bg-[#f8faff] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between text-left ${
              info.beforeAfterImage ? 'lg:col-span-1' : 'w-full'
            }`}>
              <div>
                <h3 className="text-sm font-extrabold text-[#0056D2] uppercase tracking-wider mb-4">
                  What Our Patients Say
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 bg-white/60 px-3 py-1.5 rounded-full border border-white w-fit">
                  <span className="text-sm font-black text-[#0056D2]">4.9</span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[10px] text-slate-450 font-bold uppercase border-l border-slate-200 pl-2">1200+ Reviews</span>
                </div>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-bold italic">
                  "{info.testimonialText}"
                </p>
              </div>

              <span className="text-xs font-black text-[#0a1d37] block mt-4">— {info.testimonialAuthor}</span>
            </div>

          </div>
        </div>
      </section>

      {/* CLINICAL SEO & SPECIALIST GUIDE SECTION */}
      <section className="py-20 bg-white border-t border-slate-200/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Extensive Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10 text-left">
              {/* Main heading */}
              <div>
                <h2 className="text-3xl font-extrabold text-[#0a1d37] font-heading mb-4">
                  {slug === 'root-canal-treatment' 
                    ? 'Root Canal Treatment in Hyderabad'
                    : `${displayTitle} in Hyderabad`}
                </h2>
                <div className="text-sm text-slate-650 leading-relaxed font-semibold space-y-4">
                  {slug === 'root-canal-treatment' ? (
                    <>
                      <p>
                        If you are experiencing severe tooth pain, sensitivity, swelling, or infection, root canal treatment can save your natural tooth and eliminate pain effectively. At Dental World Clinic, we provide painless and advanced root canal treatment in Bachupally using modern rotary endodontics and digital diagnostics.
                      </p>
                      <p>
                        Whether you searched: <strong>what is root canal treatment</strong>, <strong>does root canal treatment hurt</strong>, <strong>how long does root canal treatment take</strong>, or <strong>how much root canal treatment cost</strong>, this complete guide answers everything patients need to know before getting treatment.
                      </p>
                    </>
                  ) : (
                    <p>
                      If you are considering {displayTitle.toLowerCase()} in Hyderabad, Dental World Clinic provides advanced, painless, and professional care using modern digital dentistry and sterile protocols near Bachupally, Nizampet, and Pragathi Nagar.
                    </p>
                  )}
                </div>
              </div>

              {/* Section 1: What is it */}
              <div className="border-l-4 border-[#0056D2] pl-4 space-y-3">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'What is Root Canal Treatment?'
                    : `What is ${displayTitle}?`}
                </h3>
                <div className="text-sm text-slate-600 leading-relaxed space-y-3">
                  {slug === 'root-canal-treatment' ? (
                    <>
                      <p>
                        Root canal treatment is a dental procedure used to remove infected or damaged pulp from inside a tooth. The inner canals are cleaned, disinfected, and sealed to save the natural tooth and prevent extraction.
                      </p>
                      <p>
                        Patients often search: <em>what is root canal treatment</em>, <em>what is root canal treatment of teeth</em>, or <em>what is done in root canal treatment</em>. Root canal treatment helps preserve the tooth structure while eliminating infection and pain.
                      </p>
                    </>
                  ) : (
                    <p>{info.whatIsText1}</p>
                  )}
                </div>
              </div>

              {/* Section 2: What happens (Procedure steps) */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'What Happens in Root Canal Treatment?'
                    : `What Happens in ${displayTitle}?`}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {slug === 'root-canal-treatment' ? (
                    "Many patients ask: what happens in root canal treatment, how is root canal treatment done, or how to do root canal treatment. The procedure generally includes:"
                  ) : (
                    `Here is a step-by-step overview of how the ${displayTitle.toLowerCase()} procedure is typically performed:`
                  )}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {slug === 'root-canal-treatment' ? (
                    <>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Step 1</span>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm mb-1">Diagnosis & X-Ray</h4>
                        <p className="text-xs text-slate-550 leading-relaxed">The dentist evaluates the infected tooth using digital X-rays.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Step 2</span>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm mb-1">Local Anesthesia</h4>
                        <p className="text-xs text-slate-550 leading-relaxed">The area is numbed to ensure painless treatment.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Step 3</span>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm mb-1">Removing Infected Pulp</h4>
                        <p className="text-xs text-slate-550 leading-relaxed">The infected nerve tissue and bacteria are removed from inside the tooth.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Step 4</span>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm mb-1">Cleaning & Shaping</h4>
                        <p className="text-xs text-slate-550 leading-relaxed">The canals are disinfected and shaped using rotary instruments.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Step 5</span>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm mb-1">Filling the Root Canal</h4>
                        <p className="text-xs text-slate-550 leading-relaxed">The canals are sealed with a special biocompatible material.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Step 6</span>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm mb-1">Dental Crown Placement</h4>
                        <p className="text-xs text-slate-550 leading-relaxed">A crown may be recommended to strengthen and protect the treated tooth.</p>
                      </div>
                    </>
                  ) : (
                    info.processSteps.map((step, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Step {step.step}</span>
                        <h4 className="font-extrabold text-[#0a1d37] text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-slate-550 leading-relaxed">{step.desc || `Important stage in your ${displayTitle.toLowerCase()} process.`}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Section 3: Does it hurt */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'Does Root Canal Treatment Hurt?'
                    : `Does ${displayTitle} Hurt?`}
                </h3>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {slug === 'root-canal-treatment' ? (
                    <>
                      <p>
                        One of the most common questions is: <strong>does root canal treatment hurt</strong>. Modern root canal treatment is generally painless because:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 mt-2.5 pl-2 font-semibold">
                        <li>Local anesthesia numbs the area completely before we begin</li>
                        <li>Rotary instruments reduce discomfort and treatment time</li>
                        <li>Advanced digital diagnostics ensure millimeter precision</li>
                        <li>Infection-related pain reduces almost immediately post-treatment</li>
                      </ul>
                      <p className="mt-2.5">
                        Most patients compare the procedure to getting a regular dental filling.
                      </p>
                    </>
                  ) : (
                    <p>
                      Modern {displayTitle.toLowerCase()} is mostly painless due to advanced local anesthesia and minimally invasive techniques.
                    </p>
                  )}
                </div>
              </div>

              {/* Section 4: Duration / Sittings */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'How Long Does Root Canal Treatment Take?'
                    : `How Long Does ${displayTitle} Take?`}
                </h3>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {slug === 'root-canal-treatment' ? (
                    <>
                      <p>
                        Patients frequently ask: <em>how long does root canal treatment take</em> or <em>how many days root canal treatment takes</em>. The duration depends on:
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-2 pl-2 font-semibold">
                        <li>Severity of pulp infection</li>
                        <li>Number of canals (molars have more canals than front teeth)</li>
                        <li>Presence of swelling or abscess needing healing time</li>
                      </ul>
                      <p className="mt-3">
                        <strong>Typical Timeline:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2 font-semibold">
                        <li>Single sitting RCT: 45–90 minutes</li>
                        <li>Multiple sitting RCT: 2–3 visits over several days</li>
                      </ul>
                    </>
                  ) : (
                    <p>{data.duration}</p>
                  )}
                </div>

                {slug === 'root-canal-treatment' && (
                  <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl space-y-3">
                    <h4 className="font-extrabold text-[#0056D2] text-[15px]">
                      How Many Sittings Required for Root Canal Treatment?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-extrabold text-slate-900 text-xs uppercase mb-1">Single Sitting Root Canal</h5>
                        <p className="text-xs text-slate-550 leading-relaxed">Suitable for mild infections, front teeth, and cases with minimal decay.</p>
                      </div>
                      <div>
                        <h5 className="font-extrabold text-slate-900 text-xs uppercase mb-1">Multiple Sitting Root Canal</h5>
                        <p className="text-xs text-slate-550 leading-relaxed">Needed for severe infections, swelling or pus, and complex molar teeth. Your dentist decides the safest approach after examination.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 5: What happens after */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'What Happens After Root Canal Treatment?'
                    : `What Happens After ${displayTitle}?`}
                </h3>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {slug === 'root-canal-treatment' ? (
                    <>
                      <p>
                        Patients often wonder: <em>what happens after root canal treatment</em>. After treatment:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 mt-2.5 pl-2 font-semibold">
                        <li>Mild soreness for 1–3 days is normal and manageable with medication.</li>
                        <li>Avoid chewing hard foods temporarily on the treated side until the crown is fitted.</li>
                        <li>Maintain strict oral hygiene (regular brushing and flossing).</li>
                        <li>Crown placement is strongly recommended to protect and seal the tooth.</li>
                        <li>Follow-up visits ensure proper healing and long-term health.</li>
                      </ul>
                    </>
                  ) : (
                    <p>
                      After receiving {displayTitle.toLowerCase()}, maintaining good oral hygiene, avoiding hard foods for a few days, and attending recommended follow-ups will ensure optimal recovery.
                    </p>
                  )}
                </div>
              </div>

              {/* Section 6: Cost */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'How Much Root Canal Treatment Cost in Hyderabad?'
                    : `How Much ${displayTitle} Cost in Hyderabad?`}
                </h3>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {slug === 'root-canal-treatment' ? (
                    <>
                      <p>
                        A highly searched query is: <strong>how much root canal treatment cost</strong>. Root canal treatment cost depends on:
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 mt-2.5 pl-2 font-semibold">
                        <li>Tooth type (front tooth, premolar, molar)</li>
                        <li>Number of canals to be filled</li>
                        <li>Infection severity or retreatment necessity</li>
                        <li>Crown material (PFM, Zirconia, E-max)</li>
                        <li>Single vs multiple sitting treatment</li>
                      </ul>
                      <p className="mt-2.5">
                        Dental World Clinic provides affordable and transparent treatment pricing with flexible payment options and 0% interest EMI options.
                      </p>
                    </>
                  ) : (
                    <p>
                      The cost of {displayTitle.toLowerCase()} depends on the complexity of the case, the materials used, and whether additional procedures are needed. We offer transparent pricing and 0% EMI options.
                    </p>
                  )}
                </div>
              </div>

              {/* Section 7: Signs / Symptoms */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'Signs You May Need Root Canal Treatment'
                    : `Signs You May Need ${displayTitle}`}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(slug === 'root-canal-treatment' 
                    ? ['Severe tooth pain', 'Sensitivity to hot & cold', 'Swollen gums', 'Tooth discoloration', 'Pain while chewing', 'Dental abscess or pus']
                    : info.symptoms
                  ).map((symptom, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-xs text-slate-700 font-semibold">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8: Benefits */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment' 
                    ? 'Benefits of Root Canal Treatment'
                    : `Benefits of ${displayTitle}`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {(slug === 'root-canal-treatment'
                    ? ['Saves natural tooth', 'Eliminates infection', 'Stops severe pain', 'Prevents tooth extraction', 'Restores chewing function', 'Maintains smile aesthetics']
                    : data.benefits
                  ).map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-blue-50/20 p-3 rounded-xl border border-blue-100/50">
                      <Sparkles className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-bold leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 9: Why Choose Dental World */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#0a1d37]">
                  {slug === 'root-canal-treatment'
                    ? 'Why Choose Dental World Clinic for Root Canal Treatment in Bachupally?'
                    : `Why Choose Dental World Clinic for ${displayTitle} in Bachupally?`}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(slug === 'root-canal-treatment' ? [
                    'Experienced endodontists (Dr. Abdul Wahed, MDS)',
                    'Painless root canal treatment protocols',
                    'Advanced rotary endodontic technology',
                    'Digital X-rays & apex locators',
                    '100% sterile treatment protocols',
                    'Affordable treatment plans & 0% EMI',
                    'Convenient location near Nizampet, Pragathi Nagar & Miyapur'
                  ] : info.whyChooseCards.map(c => c.title)).map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-slate-600 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 9.5: Advanced Technology & Quality (EEAT Clinical Standards) */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50 space-y-4 text-left">
                <h4 className="font-extrabold text-[#0a1d37] text-sm uppercase tracking-wider">
                  Advanced Technology & Quality
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(slug === 'root-canal-treatment' ? [
                    { title: 'Rotary Endodontics', desc: 'Flexible nickel-titanium tools for precise and fast cleaning.' },
                    { title: 'Digital RVG X-rays', desc: 'Low-radiation high-resolution sensors for accurate diagnosis.' },
                    { title: 'Apex Locators', desc: 'Electronic length determination to ensure full root disinfection.' },
                    { title: '100% Sterile Protocol', desc: 'Class B autoclaves and vacuum pouches for zero infection risk.' }
                  ] : data.technology && data.technology.length > 0 ? data.technology.slice(0, 4).map(t => ({
                    title: t.title,
                    desc: `Advanced ${t.title.toLowerCase()} used for precise, comfortable ${displayTitle.toLowerCase()}.`
                  })) : [
                    ...info.whyChooseCards.slice(0, 3),
                    { title: '100% Sterile Protocol', desc: 'Class B autoclaves and vacuum pouches for zero infection risk.' }
                  ]).map((tech, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-[#0a1d37]">{tech.title}</h5>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 10: Areas We Serve */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50 space-y-3">
                <h4 className="font-extrabold text-[#0a1d37] text-[15px]">Areas We Serve</h4>
                <p className="text-xs text-slate-550 leading-relaxed">
                  We serve patients across Hyderabad seeking dental treatments near Bachupally, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Bachupally', 'Nizampet', 'Pragathi Nagar', 'Miyapur', 'Kukatpally', 'Hafeezpet', 'Bowrampet'].map((area, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-450 italic mt-2">
                  Conveniently located near major landmarks including SLG Hospital, BVRIT College, and Miyapur Metro Station.
                </p>
              </div>

              {/* Section 11: Related / Internal Links */}
              <div className="pt-4 border-t border-slate-200/50 space-y-3">
                <h4 className="font-extrabold text-[#0a1d37] text-sm uppercase tracking-wider">Related Dental Treatments</h4>
                <div className="flex flex-wrap gap-2">
                  {internalLinks.map((link, idx) => (
                    <Link key={idx} href={link.href} className="bg-blue-50/50 hover:bg-blue-100 border border-blue-100 text-[#0056D2] font-bold text-xs px-3.5 py-2 rounded-lg transition-colors">
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: EEAT Specialist (4 cols) */}
            <div className="lg:col-span-4">
              {/* Doctor Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden text-center lg:sticky lg:top-24">
                <div className="relative h-56 w-full bg-slate-100">
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill 
                    className="object-cover object-top" 
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-[10px] bg-blue-100 text-[#0056D2] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                      Lead Specialist
                    </span>
                    <h3 className="text-lg font-extrabold text-[#0a1d37] mt-2">{doctor.name}</h3>
                    <p className="text-xs text-[#0056D2] font-black">{doctor.title}</p>
                  </div>

                  <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                    {doctor.description}
                  </p>

                  <div className="text-left bg-slate-50 p-3.5 rounded-xl space-y-1.5 border border-slate-100">
                    <span className="text-[10px] text-slate-450 font-bold uppercase tracking-wider block mb-1">
                      Credentials & Expertise
                    </span>
                    <ul className="text-xs text-slate-650 font-bold space-y-1.5">
                      {doctor.qualifications.map((q, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{q}</span>
                        </li>
                      ))}
                      {doctor.certifications.map((c, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/book-appointment" className="w-full bg-[#0056D2] hover:bg-blue-750 text-white font-bold py-3 rounded-[5px] transition text-sm shadow-sm flex items-center justify-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION SECTION */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            {info.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm space-y-2">
                <h4 className="font-extrabold text-[#0a1d37] text-sm flex items-start">
                  <HelpCircle className="w-5 h-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/faq" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-750 transition">
              View All FAQs
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER (Tooth Illustration + Action Button) */}
      <section className="bg-[#0b1c3c] text-white py-14 relative overflow-hidden">
        {info.footerImageBackground && (
          <>
            <Image
              src={info.footerImageBackground}
              alt="Bottom banner background"
              fill
              className="object-cover opacity-20 pointer-events-none"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c3c]/95 via-[#0b1c3c]/80 to-[#0b1c3c]/70 pointer-events-none z-0"></div>
          </>
        )}
        <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          <div>
            <h2 className="text-xl md:text-2xl font-black font-heading leading-tight text-white !text-white">
              Don't Ignore Tooth Pain. Consult an Expert Today.
            </h2>
            <p className="text-xs text-blue-200 font-bold mt-1 uppercase tracking-wider">
              Relieve pain, save your natural tooth and smile with confidence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 shrink-0">
            <Link href="/book-appointment" className="bg-white hover:bg-slate-100 text-[#0056D2] font-bold px-6 py-3.5 rounded-[5px] transition text-sm shadow-sm flex items-center border border-slate-200">
              <Calendar className="w-4.5 h-4.5 mr-2 text-[#0056D2]" />
              Book Consultation
            </Link>
            <a href="https://wa.me/917997994646" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-100 text-[#0b1c3c] font-bold px-6 py-3.5 rounded-[5px] transition text-sm shadow-sm flex items-center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={18} height={18} className="mr-2" />
              WhatsApp Us
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
