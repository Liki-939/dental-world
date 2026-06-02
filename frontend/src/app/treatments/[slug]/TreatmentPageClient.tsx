"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  return <Smile className="w-8 h-8 text-blue-600" />;
}

// Flow steps icon mapping
function StepIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "stethoscope":
      return <Stethoscope className="w-6 h-6 text-blue-600" />;
    case "syringe":
      return <Syringe className="w-6 h-6 text-blue-600" />;
    case "tooth":
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.31 5.62 2.31 8.5C8.31 18.84 7 21 7 22c1.5 0 3.5-1 5-2.75 1.5 1.75 3.5 2.75 5 2.75 0-1-1.31-3.16-1.31-5.5C15.69 13.62 18 11.31 18 8c0-3.5-2.5-6-6-6z" />
        </svg>
      );
    case "clean":
      return <Sparkles className="w-6 h-6 text-blue-600" />;
    case "shield":
      return <Shield className="w-6 h-6 text-blue-600" />;
    case "crown":
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
          <path d="M3 20h18v2H3z" />
        </svg>
      );
    default:
      return <Check className="w-6 h-6 text-blue-600" />;
  }
}

// Global data definitions matching the target structure for all slugs
const treatmentsInfo: Record<string, {
  tagline: string;
  subtitle: string;
  techStat: string;
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
  beforeXray: { before: string; after: string };
  beforeSmile: { before: string; after: string };
  testimonialText: string;
  testimonialAuthor: string;
  faqs: { question: string; answer: string }[];
}> = {
  'root-canal-treatment': {
    tagline: 'PAIN RELIEF. TOOTH SAVING CARE.',
    subtitle: 'Painless. Precise. Permanent.',
    techStat: 'Advanced Rotary RCT',
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
      { feature: 'Saves Natural Tooth', main: 'check', opt1: 'cross', opt2: 'cross' },
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
    beforeXray: { before: '/images/cases/rct_xray_before.png', after: '/images/cases/rct_xray_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
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
    beforeXray: { before: '/images/cases/implants_before.png', after: '/images/cases/implants_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
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
    features: [
      { title: 'Perfect Alignment', desc: 'Corrects crooked or crowded teeth' },
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
    beforeXray: { before: '/images/cases/braces_before.png', after: '/images/cases/braces_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
    testimonialText: 'My teeth are perfectly aligned now! The team made the braces journey so easy and comfortable.',
    testimonialAuthor: 'Rahul M., Pragathi Nagar',
    faqs: [
      { question: 'Do braces hurt?', answer: 'You may feel some soreness or pressure for a few days after brackets are first placed or adjusted, which is temporary and easily managed.' },
      { question: 'How long do I need to wear braces?', answer: 'On average, braces are worn for 12 to 24 months, depending on how much alignment is needed.' },
      { question: 'Can adults get orthodontic braces?', answer: 'Yes! Orthodontic treatment is highly effective at any age. We offer clear ceramic braces that are perfect for adults.' }
    ]
  },
  'invisalign-treatment': {
    tagline: 'DISCREET ALIGNMENT. INVISIBLE BRACES.',
    subtitle: 'Clear. Removable. Comfortable.',
    techStat: 'Invisalign Certified Provider',
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
    startingCost: '₹1,50,000*',
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
    beforeXray: { before: '/images/cases/invisalign_before.png', after: '/images/cases/invisalign_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
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
    beforeXray: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
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
    beforeXray: { before: '/images/cases/pediatric_before.png', after: '/images/cases/pediatric_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
    testimonialText: 'The pediatric dentist was so patient and gentle. My son actually looks forward to going to the dentist now!',
    testimonialAuthor: 'Priya V. (Mother of Aarav), Pragathi Nagar',
    faqs: [
      { question: 'When should my child first visit the dentist?', answer: 'The first dental visit should happen when their first tooth erupts, or by their first birthday.' },
      { question: 'Why are primary (baby) teeth so important?', answer: 'Baby teeth are crucial for proper chewing, learning to speak clearly, and saving space for permanent adult teeth.' },
      { question: 'How can I prevent cavities in my child?', answer: 'Maintain twice-daily brushing, limit sugary snacks, and bring them for regular 6-month checks for sealants and fluoride.' }
    ]
  },
  'full-mouth-rehabilitation': {
    tagline: 'COMPLETE RESTORATION. LIFE CHANGING CARE.',
    subtitle: 'Functional. Aesthetic. Complete.',
    techStat: 'Full-Arch Rehabilitation Specialist',
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
    beforeXray: { before: '/images/cases/fmr_before.png', after: '/images/cases/fmr_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
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
    beforeXray: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
    beforeSmile: { before: '/images/cases/smile_design_before.png', after: '/images/cases/smile_design_after.png' },
    testimonialText: 'My teeth are so much brighter now! The Zoom whitening session took less than an hour and was completely painless.',
    testimonialAuthor: 'Karthik, Pragathi Nagar',
    faqs: [
      { question: 'Does teeth whitening damage natural enamel?', answer: 'No, professional whitening under dental supervision is completely safe and does not alter the natural structure of the enamel.' },
      { question: 'How long do whitening results last?', answer: 'Typically, results last 1 to 3 years depending on dietary habits. Reducing coffee, tea, and smoking helps maintain the bright white shade.' },
      { question: 'Will it cause tooth sensitivity?', answer: 'Some patients feel mild sensitivity for 24 hours, but we use sensitivity-free laser systems and apply protective fluoride gel to prevent it.' }
    ]
  }
};

export default function TreatmentPageClient({ slug, displayTitle }: { slug: string, displayTitle: string }) {
  // Grab info. Fallback to Root Canal if it's missing or unmapped
  const info = treatmentsInfo[slug] || treatmentsInfo['root-canal-treatment'];

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    treatment: displayTitle,
    clinic: "Pragathi Nagar"
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
    <div className="flex flex-col min-h-screen bg-slate-50/50 pb-20 md:pb-0 font-sans">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
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
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left side - Hero Text */}
            <div className="w-full lg:w-[42%] space-y-5 text-left">
              <span className="inline-block bg-blue-100/50 text-[#0056D2] text-[11px] md:text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-blue-200/50">
                {info.tagline}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0a1d37] font-heading leading-tight">
                {displayTitle} <br className="hidden md:inline"/>in Hyderabad
              </h1>
              
              <p className="text-lg md:text-xl font-extrabold text-[#0056D2] leading-tight">
                {info.subtitle}
              </p>
              
              <p className="text-sm text-slate-650 leading-relaxed font-medium max-w-lg">
                Advanced {displayTitle.toLowerCase()} using digital imaging, precision tools and pain-free anesthesia.
              </p>
              
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link href="/book-appointment" className="bg-[#0056D2] hover:bg-blue-700 text-white px-5 py-2.5 rounded-[5px] font-bold transition flex items-center text-sm shadow-sm">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Book Consultation
                </Link>
                
                <a href="https://wa.me/917997994646" target="_blank" rel="noopener noreferrer" className="border border-green-500 hover:bg-green-50 text-green-600 px-5 py-2.5 rounded-[5px] font-bold transition flex items-center text-sm bg-white">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={16} height={16} className="mr-1.5" />
                  WhatsApp Us
                </a>
                
                <a href="tel:+918247478663" className="border border-[#0056D2] hover:bg-blue-50 text-[#0056D2] px-5 py-2.5 rounded-[5px] font-bold transition flex items-center text-sm bg-white">
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
                    <div className="font-extrabold text-sm text-[#0a1d37] leading-none">5000+</div>
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
            <div className="w-full lg:w-[28%]">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                  alt="Doctor treating patient smiling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - Consultation Form */}
            <div className="w-full lg:w-[30%]">
              {/* Consultation Form Box */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-premium text-left relative overflow-hidden">
                {isSubmitted ? (
                  <div className="py-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">Thank You!</h3>
                    <p className="text-sm text-slate-650 max-w-sm">
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
                          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 focus:bg-white transition outline-none text-slate-900 font-medium" 
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
                          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 focus:bg-white transition outline-none text-slate-900 font-medium" 
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">Treatment</label>
                        <select 
                          name="treatment" 
                          value={formData.treatment}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 focus:bg-white transition outline-none text-slate-900 font-semibold"
                        >
                          <option value="Root Canal Treatment">Root Canal Treatment</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Invisalign & Braces">Invisalign & Braces</option>
                          <option value="Smile Makeover">Smile Makeover</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                          <option value="Kids Dentistry">Kids Dentistry</option>
                          <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">Preferred Clinic</label>
                        <select 
                          name="clinic" 
                          value={formData.clinic}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded focus:ring-1 focus:ring-blue-500 focus:bg-white transition outline-none text-slate-900 font-semibold"
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
        </div>
      </section>

      {/* KEY FEATURES ROW */}
      <section className="bg-white border-y border-slate-200/60 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
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

      {/* SYMPTOMS SECTION */}
      <section className="py-12 bg-slate-50/50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <span className="inline-block text-[#0056D2] text-[11px] md:text-xs font-bold tracking-widest uppercase mb-6">
            SYMPTOMS THAT MAY REQUIRE {displayTitle.toUpperCase()} EVALUATION
          </span>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {info.symptoms.map((sym, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/50 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="mb-3.5 w-12 h-12 bg-blue-50/50 rounded-full flex items-center justify-center shrink-0">
                  <SymptomIcon name={sym} />
                </div>
                <span className="text-xs font-bold text-[#0a1d37] leading-tight tracking-tight">{sym}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS / HOW DOES IT WORK SPLIT ROW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - What is */}
            <div className="w-full lg:w-[45%] space-y-6 text-left flex flex-col justify-between">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading leading-tight">
                  {info.whatIsTitle}
                </h2>
                
                <p className="text-sm md:text-base text-slate-650 font-medium leading-relaxed">
                  {info.whatIsText1}
                </p>

                <p className="text-sm md:text-base text-slate-650 font-medium leading-relaxed">
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
                      <div className="w-14 h-14 bg-white rounded-xl border border-blue-100 shadow-sm flex items-center justify-center mb-3 shrink-0">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <StepIcon icon={step.icon} />
                        </div>
                      </div>
                      <h4 className="font-extrabold text-[#0a1d37] text-[11px] md:text-xs leading-snug mb-1">
                        {step.step}. {step.title}
                      </h4>
                      <p className="text-[9px] md:text-[10px] text-slate-405 font-bold leading-tight max-w-[100px] h-8 overflow-hidden">
                        {step.desc}
                      </p>
                    </div>
                    {idx < info.howItWorksSteps.length - 1 && (
                      <div className="text-blue-300 font-bold text-sm md:text-base px-1 md:px-2 select-none self-center mb-10 shrink-0">
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

      {/* STEP-BY-STEP PROCESS TIMELINE (Horizontal circles connected by dotted lines) */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading mb-14 uppercase tracking-wider">
            STEP-BY-STEP {displayTitle.toUpperCase()} PROCESS
          </h2>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 max-w-5xl mx-auto">
            {/* Horizontal Line background (Desktop only) */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-slate-200 border-t border-dashed border-slate-350 pointer-events-none hidden md:block"></div>

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
        <div className="container mx-auto px-4 max-w-7xl">
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
                    src="/images/cases/tooth_cross_section.png"
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
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0056D2] font-heading mb-14">
            WHY CHOOSE DENTAL WORLD?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {info.whyChooseCards.map((card, idx) => (
              <div key={idx} className="flex items-start bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-4 mt-0.5 shadow-sm">
                  <Check className="w-5.5 h-5.5 stroke-[2.5]" />
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
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Box 1: Before/After Case 1 (X-Ray / Close-up) */}
            <div className="bg-[#f8faff] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between">
              <h3 className="text-sm font-extrabold text-[#0056D2] uppercase tracking-wider mb-4">
                X-Ray Before & After
              </h3>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 flex w-full">
                {/* Before */}
                <div className="w-1/2 relative h-full">
                  <Image 
                    src={info.beforeXray.before} 
                    alt="X-ray Before" 
                    fill 
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded">Before</span>
                </div>
                {/* After */}
                <div className="w-1/2 relative h-full border-l-2 border-white">
                  <Image 
                    src={info.beforeXray.after} 
                    alt="X-ray After" 
                    fill 
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 right-3 bg-[#0056D2] text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded">After</span>
                </div>
              </div>
            </div>

            {/* Box 2: Before/After Case 2 (Smile Transformations) */}
            <div className="bg-[#f8faff] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between">
              <h3 className="text-sm font-extrabold text-[#0056D2] uppercase tracking-wider mb-4">
                Smile Transformations
              </h3>
              
              <div className="flex flex-col gap-2 h-full justify-center">
                <div className="relative h-20 rounded-xl overflow-hidden bg-slate-250">
                  <Image 
                    src={info.beforeSmile.before} 
                    alt="Smile Before" 
                    fill 
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white font-bold text-[9px] uppercase px-1.5 py-0.5 rounded">Before</span>
                </div>
                <div className="relative h-20 rounded-xl overflow-hidden bg-slate-250">
                  <Image 
                    src={info.beforeSmile.after} 
                    alt="Smile After" 
                    fill 
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#0056D2] text-white font-bold text-[9px] uppercase px-1.5 py-0.5 rounded">After</span>
                </div>
              </div>
            </div>

            {/* Box 3: Testimonial Box */}
            <div className="bg-[#f8faff] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between text-left">
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
        <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="flex items-center gap-4.5">
            {/* White Tooth Outline */}
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.31 5.62 2.31 8.5C8.31 18.84 7 21 7 22c1.5 0 3.5-1 5-2.75 1.5 1.75 3.5 2.75 5 2.75 0-1-1.31-3.16-1.31-5.5C15.69 13.62 18 11.31 18 8c0-3.31-2.69-6-6-6z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black font-heading leading-tight text-white !text-white">
                Don't Ignore Tooth Pain. Consult an Expert Today.
              </h2>
              <p className="text-xs text-blue-200 font-bold mt-1 uppercase tracking-wider">
                Relieve pain, save your natural tooth and smile with confidence.
              </p>
            </div>
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

      {/* Sticky Call/Book Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-50 p-3.5 flex gap-3 border-t border-slate-100">
        <a href="tel:+918247478663" className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-lg flex items-center justify-center text-sm transition">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Us
        </a>
        <Link href="/book-appointment" className="flex-1 bg-[#0056D2] hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center text-sm transition text-center shadow-sm">
          Book Appointment
        </Link>
      </div>

      {/* Floating Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/917997994646" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center group animate-bounce"
        aria-label="Contact us on WhatsApp"
        style={{ animationDuration: '3s' }}
      >
        <svg className="w-6.5 h-6.5 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
}
