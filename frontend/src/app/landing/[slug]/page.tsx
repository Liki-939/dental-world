import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookAppointmentForm from '@/components/BookAppointmentForm';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import TreatmentCostCards from '@/components/TreatmentCostCards';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import Script from 'next/script';
import {
  CheckCircle2, ShieldCheck, Award, Sparkles, Star,
  PhoneCall, Shield, Clock, Heart, Users, MapPin,
  Check, X, ArrowRight, MessageSquare, Phone, ChevronRight, Play
} from 'lucide-react';
import { treatmentsData } from '@/data/treatments';
import { LOCATIONS } from '@/lib/site';

// Helper to normalize the dynamic URL slug to treatmentsData key
const mapSlugToTreatmentKey = (slug: string): string => {
  if (slug === 'dental-implants' || slug === 'dental-implant-cost-hyderabad') {
    return 'dental-implants';
  }
  if (slug === 'root-canal-treatment') {
    return 'root-canal-treatment';
  }
  if (slug === 'braces' || slug === 'braces-and-aligners') {
    return 'braces';
  }
  if (slug === 'invisalign-treatment' || slug === 'invisalign-pragathi-nagar') {
    return 'invisalign-treatment';
  }
  return 'invisalign-treatment'; // Default fallback
};

interface LandingConfig {
  slug: string;
  title: string;
  breadcrumb: string;
  hero: {
    headline: string;
    subtitle: string;
    desc: string;
    bullets: string[];
    image: string;
    badge: {
      title: string;
      subtitle: string;
      bullets: string[];
    };
  };
  trustStrip: { label: string; desc: string }[];
  painPoints: {
    title: string;
    items: { label: string; desc: string }[];
    card: { title: string; desc: string; btnText: string };
  };
  process: {
    title: string;
    steps: { step: number; title: string; desc: string }[];
    summary: string;
  };
  cost: {
    starting: string;
    range: string;
    bullets: string[];
  };
  duration: {
    title: string;
    items: { label: string; duration: string }[];
    note: string;
  };
  comparison: {
    title: string;
    headers: string[];
    rows: { name: string; main: string; alt: string; alt2?: string }[];
  };
  tech: {
    title: string;
    items: { title: string; desc: string; icon: string }[];
  };
  who: {
    title: string;
    bullets: string[];
  };
  benefits: {
    title: string;
    items: { title: string; desc: string; icon: string }[];
  };
  specialist: {
    title: string;
    name: string;
    titleLabel: string;
    desc: string;
    image: string;
    bullets: string[];
    badgeTitle: string;
    badgeLabel: string;
    badgeBullets: string[];
  };
}

const landingConfigs: Record<string, LandingConfig> = {
  'invisalign-treatment': {
    slug: 'invisalign-treatment',
    title: 'Invisalign Treatment',
    breadcrumb: 'Invisalign Treatment',
    hero: {
      headline: 'Invisalign Treatment in Hyderabad',
      subtitle: 'Straighten Your Teeth Without Braces',
      desc: 'Transform your smile with Invisalign clear aligners from Gold Certified Invisalign Provider Dr. Nitin Bharat, MDS Orthodontics with 14+ years experience.',
      bullets: [
        "Virtually Invisible Clear Aligners",
        "Comfortable & Removable Trays",
        "Faster Results in 6-18 Months",
        "Custom 3D Treatment Planning",
        "Fewer Clinic Visits Required",
        "Flexible 0% EMI Options Available"
      ],
      image: '/invisalign_banner.png',
      badge: {
        title: 'invisalign',
        subtitle: 'GOLD CERTIFIED PROVIDER',
        bullets: [
          "Gold Certified Invisalign Provider",
          "14+ Years of Expert Orthodontics",
          "Advanced iTero 3D Digital Scans",
          "Digital Smile Design Experts"
        ]
      }
    },
    trustStrip: [
      { label: "14+ Years", desc: "Expert Orthodontics" },
      { label: "5000+", desc: "Happy Smiles Created" },
      { label: "Gold", desc: "Invisalign Provider" },
      { label: "4.9★ Rating", desc: "1,200+ Google Reviews" },
      { label: "Two Locations", desc: "Bachupally & Pragathi Nagar" }
    ],
    painPoints: {
      title: 'ARE YOU STRUGGLING WITH?',
      items: [
        { label: "Crooked Teeth", desc: "Misaligned teeth make it hard to smile with confidence." },
        { label: "Teeth Gaps", desc: "Spacings trap food and affect your smile symmetry." },
        { label: "Crowded Teeth", desc: "Overlapping teeth are difficult to brush and clean." },
        { label: "Overbite / Underbite", desc: "Bite issues lead to jaw strain and wearing of teeth." },
        { label: "Chewing Difficulty", desc: "Improper tooth alignment affects chewing and digestion." },
        { label: "Self-Conscious Smile", desc: "Hiding your smile in photos and public conversations." }
      ],
      card: {
        title: "Invisalign Clear Aligners",
        desc: "Can discreetly straighten your teeth and give you the perfect smile you deserve!",
        btnText: "Start Invisalign Scan"
      }
    },
    process: {
      title: 'How Invisalign Works',
      steps: [
        { step: 1, title: "1. 3D Digital Scan", desc: "No gooey molds. We take a quick 3D digital scan of your teeth using the iTero scanner." },
        { step: 2, title: "2. Smile Simulation", desc: "See your final straight smile on screen before your treatment even begins." },
        { step: 3, title: "3. Custom Aligners", desc: "A series of custom-made, clear, medical-grade plastic aligners are created for you." },
        { step: 4, title: "4. Aligner Changes", desc: "Wear each set of aligners for 20-22 hours a day, changing them every 1-2 weeks." },
        { step: 5, title: "5. Quick Checkups", desc: "Visit our clinic only once every 6-8 weeks to monitor progress and collect new sets." },
        { step: 6, title: "6. Smile Completion", desc: "Wear clear Vivera retainers to protect and maintain your beautiful new aligned smile." }
      ],
      summary: 'Treatment is comfortable, predictable and designed around your lifestyle.'
    },
    cost: {
      starting: '₹1,20,000',
      range: '₹1,20,000 - ₹3,50,000*',
      bullets: [
        "All aligner sets included",
        "iTero 3D digital scan included",
        "Custom smile simulation preview",
        "Retainers included in package"
      ]
    },
    duration: {
      title: 'How Long Does Invisalign Take?',
      items: [
        { label: "Mild Alignment Cases", duration: "6 - 8 Months" },
        { label: "Moderate Crowding/Spacing", duration: "12 - 18 Months" },
        { label: "Complex Bite Correction", duration: "18 - 24 Months" }
      ],
      note: 'Results depend on crowding, bite issues and patient compliance.'
    },
    comparison: {
      title: 'Invisalign vs Braces',
      headers: ["Feature", "Invisalign Aligners", "Traditional Braces"],
      rows: [
        { name: "Appearance", main: "Virtually Invisible", alt: "Visible Metal Brackets" },
        { name: "Removable", main: "Yes (For Eating & Brushing)", alt: "No (Fixed to Teeth)" },
        { name: "Comfort", main: "High (Smooth Plastic)", alt: "Moderate (Wire Pricks)" },
        { name: "Food Restrictions", main: "None (Remove to Eat)", alt: "Many (No Sticky/Hard Foods)" },
        { name: "Oral Hygiene", main: "Easier (Brush & Floss Normally)", alt: "Difficult (Food Traps)" },
        { name: "Clinic Visits", main: "Fewer (Every 6-8 Weeks)", alt: "More (Every 4 Weeks)" },
        { name: "Overall Experience", main: "Premium & Discreet", alt: "Standard Orthodontic" }
      ]
    },
    tech: {
      title: 'Advanced Invisalign Technology',
      items: [
        { title: "iTero 3D Scanner", desc: "Captures highly accurate 3D digital dental scans in minutes without messy molds.", icon: "ScanLine" },
        { title: "ClinCheck Software", desc: "3D smile simulation program mapping out the exact movement and end result of your teeth.", icon: "Smile" },
        { title: "SmartTrack Material", desc: "Proprietary multilayer plastic designed specifically for Invisalign, providing gentle, constant force.", icon: "Award" },
        { title: "Strict Sterilization", desc: "Class-B autoclaves and completely sterile diagnostic tips for every single scan.", icon: "Shield" }
      ]
    },
    who: {
      title: 'Who Can Get Invisalign?',
      bullets: [
        "Adults & working professionals seeking a discreet treatment",
        "Teenagers wanting to eat their favorite foods and play sports",
        "Patients with teeth crowding or wide spaces between teeth",
        "People with bite issues (overbite, underbite, crossbite)",
        "Anyone wanting a comfortable, metal-free alignment option"
      ]
    },
    benefits: {
      title: 'Benefits of Invisalign',
      items: [
        { title: "Virtually Invisible", desc: "Clear plastic aligners are virtually unnoticeable to others during daily interactions.", icon: "Smile" },
        { title: "Removable Convenience", desc: "Easily take them out to eat meals, brush your teeth, or attend special events.", icon: "CheckCircle2" },
        { title: "Comfortable & Safe", desc: "No metal brackets or wires to scrape or irritate your cheeks and gums.", icon: "ShieldCheck" },
        { title: "Better Oral Hygiene", desc: "Brush and floss your teeth normally without having to navigate around fixed metal wires.", icon: "Sparkles" },
        { title: "Fewer Clinic Visits", desc: "Pre-fabricated aligner series means you only need quick progress checks every 6-8 weeks.", icon: "Clock" }
      ]
    },
    specialist: {
      title: 'Meet Your Invisalign Specialist',
      name: 'Dr. Nitin Bharat',
      titleLabel: 'MDS Dentofacial Orthodontics',
      desc: 'Dr. Nitin Bharat is a gold-certified Invisalign consultant and premier orthodontist. He holds an MDS in Dentofacial Orthodontics with over 14+ years of clinical excellence, specializing in complex teeth alignment, bite corrections, and clear aligner therapies.',
      image: '/nithin.jpg',
      bullets: [
        "14+ Years of Expert Orthodontics",
        "Gold Certified Invisalign Consultant",
        "Specialist in Pediatric & Adult Braces",
        "MDS Dentofacial Orthodontics Degree",
        "Thousands of Smiles Transformed"
      ],
      badgeTitle: 'invisalign',
      badgeLabel: 'GOLD PROVIDER',
      badgeBullets: [
        "Gold Certified Invisalign Provider",
        "iTero 3D Scanning Center",
        "Custom Smile Simulation",
        "Expert Aligner Care"
      ]
    }
  },
  'dental-implants': {
    slug: 'dental-implants',
    title: 'Dental Implants',
    breadcrumb: 'Dental Implants',
    hero: {
      headline: 'Best Dental Implant Clinic at Bachupally',
      subtitle: 'Permanent Teeth. Natural Smile. Eat Confidently Again.',
      desc: 'Restore missing teeth with painless, long-lasting dental implants from expert implantologists with 14+ years of experience.',
      bullets: [
        "10,000+ Implants Placed Successfully",
        "US-FDA Approved Titanium Implants",
        "Painless Computer-Guided Surgery",
        "Lifetime Warranty on Premium Brands",
        "0% EMI Financing Options Available",
        "Same-Day Temporary Teeth Available"
      ],
      image: '/dental_cover.png',
      badge: {
        title: '15+ Years Trust',
        subtitle: 'EXPERT IMPLANTOLOGIST',
        bullets: [
          "Led by Dr. Anurag Lahoti, MDS",
          "15+ Years of Trust & Excellence",
          "US-FDA Approved Implant Systems",
          "Premium Zirconia Crowns"
        ]
      }
    },
    trustStrip: [
      { label: "15+ Years", desc: "Clinical Experience" },
      { label: "10,000+", desc: "Implants Placed" },
      { label: "5-Star", desc: "Google Rated Clinic" },
      { label: "US-FDA", desc: "Approved Implant Materials" },
      { label: "0% EMI", desc: "Financing Plans" }
    ],
    painPoints: {
      title: 'ARE YOU STRUGGLING WITH?',
      items: [
        { label: "Missing Teeth", desc: "Gaps in your mouth that make you feel self-conscious when smiling." },
        { label: "Loose Dentures", desc: "Dentures that slip, click, or cause painful sores on your gums." },
        { label: "Difficulty Chewing", desc: "Inability to eat hard foods, leading to poor nutrition and digestion." },
        { label: "Bone Loss", desc: "Missing tooth roots cause the jawbone to shrink over time." },
        { label: "Facial Sagging", desc: "Loss of bone volume leads to premature aging and a sunken face." },
        { label: "Shifting Teeth", desc: "Adjacent teeth tilting and drifting into empty spaces, ruining your bite." }
      ],
      card: {
        title: "Dental Implants",
        desc: "Can permanently restore your biting force, preserve your bone structure, and give you back a natural-looking smile!",
        btnText: "Get Expert Implant Consultation"
      }
    },
    process: {
      title: 'Our Dental Implant Process',
      steps: [
        { step: 1, title: "1. Consultation & Scan", desc: "We take a high-definition 3D CBCT scan to check jawbone density and locate nerves." },
        { step: 2, title: "2. Implant Planning", desc: "Using computer-guided software, we virtually plan the exact placement of your implant." },
        { step: 3, title: "3. Implant Placement", desc: "The titanium implant is placed in a quick, painless, sterile surgical procedure under local numbing." },
        { step: 4, title: "4. Osseointegration", desc: "Over 3-6 months, the medical-grade titanium screw fuses naturally with the surrounding jawbone." },
        { step: 5, title: "5. Abutment Placement", desc: "A tiny metal connector called an abutment is attached to the implant to support the crown." },
        { step: 6, title: "6. Crown Attachment", desc: "A custom-made, life-like zirconia crown is securely placed, completing your new tooth." }
      ],
      summary: 'Our dental implants look, feel, and function exactly like your natural teeth.'
    },
    cost: {
      starting: '25,000',
      range: 'Starting from ₹25,000*',
      bullets: [
        "Consultation & 3D CBCT Scan included",
        "Medical-grade titanium implant device",
        "Custom fabrication and crown",
        "0% interest EMI installment options"
      ]
    },
    duration: {
      title: 'How Long Does an Implant Take?',
      items: [
        { label: "Initial Implant Surgery", duration: "30 - 45 Mins" },
        { label: "Osseointegration (Healing)", duration: "3 - 6 Months" },
        { label: "Crown Fitting Appointment", duration: "5 - 7 Days" }
      ],
      note: 'Same-day implants are available for eligible candidates with adequate bone density.'
    },
    comparison: {
      title: 'Dental Implants vs Bridges vs Dentures',
      headers: ["Feature", "Dental Implants", "Dental Bridge", "Loose Dentures"],
      rows: [
        { name: "Bone Preservation", main: "Yes (Stimulates bone)", alt: "No (Bone decays underneath)", alt2: "No" },
        { name: "Saves Adjacent Teeth", main: "Yes (No grinding needed)", alt: "No (Grinds nearby teeth)", alt2: "Yes" },
        { name: "Lifespan", main: "Lifetime (With hygiene)", alt: "5-10 Years", alt2: "5 Years" },
        { name: "Chewing Power", main: "100% (Like natural)", alt: "70%", alt2: "20-30%" },
        { name: "No Slipping/Clicking", main: "Yes (Fixed to jaw)", alt: "Yes", alt2: "No (Slippery)" }
      ]
    },
    tech: {
      title: 'Advanced Implant Technology',
      items: [
        { title: "3D CBCT Scan", desc: "Advanced dental CT scan showing bone density, nerves, and sinus structures in 3D.", icon: "ScanLine" },
        { title: "Guided Implant Surgery", desc: "Virtual computer-guided planning templates ensuring sub-millimeter surgical accuracy.", icon: "Smile" },
        { title: "Premium Implant Brands", desc: "Authorized provider of world-class implants like Straumann and Nobel Biocare.", icon: "Award" },
        { title: "Strict Sterilization", desc: "Class-B autoclave sterilization keeping medical tools 100% sterile.", icon: "Shield" }
      ]
    },
    who: {
      title: 'Who Can Get Dental Implants?',
      bullets: [
        "Anyone with one or more missing teeth due to decay or injury",
        "Patients seeking a permanent alternative to loose, uncomfortable dentures",
        "Individuals with healthy gums and sufficient jawbone density for implants",
        "Adults of any age (implants are safe once jaw growth is complete)",
        "People looking to preserve their remaining teeth and facial structures"
      ]
    },
    benefits: {
      title: 'Benefits of Dental Implants',
      items: [
        { title: "Natural Look & Feel", desc: "Implants blend in seamlessly with your natural teeth, looking and feeling completely normal.", icon: "Smile" },
        { title: "Restore Chewing Power", desc: "Eat all your favorite hard, crunchy, or chewy foods with ease and without pain.", icon: "CheckCircle2" },
        { title: "Preserve Jawbone", desc: "Stimulates bone growth, preventing facial sagging and premature aging.", icon: "ShieldCheck" },
        { title: "Protects Healthy Teeth", desc: "Does not require grinding down neighboring teeth for support, preserving them.", icon: "Sparkles" },
        { title: "Lifetime Solution", desc: "Surgically fused titanium implants can last a lifetime with regular dental hygiene.", icon: "Clock" }
      ]
    },
    specialist: {
      title: 'Meet Our Implant Expert',
      name: 'Dr. Anurag',
      titleLabel: 'MDS Prosthodontics & Implantology',
      desc: 'Dr. Anurag is a chief smile designer and professor at Balaji Dental College. With an MDS in Prosthodontics & Implantology, he is a fellow of the International Congress of Oral Implantologists (ICOI) with over 15+ years of clinical excellence in complex dental implants, fixed prosthetics, and full-mouth rehabilitations.',
      image: '/anurag.jpg',
      bullets: [
        "15+ Years of Specialist Experience",
        "MDS Prosthodontics & Implantology",
        "Fellow of International Congress of Oral Implantologists (ICOI)",
        "Professor of Advanced Dentistry at Balaji Dental College",
        "Expert in Computer-Guided Painless Implant Surgery"
      ],
      badgeTitle: 'Nobel Biocare',
      badgeLabel: 'CERTIFIED CENTER',
      badgeBullets: [
        "US-FDA Approved Implants",
        "Computer Guided Surgery",
        "Zirconia Fixed Crowns",
        "Lifetime Global Warranty"
      ]
    }
  },
  'root-canal-treatment': {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    breadcrumb: 'Root Canal Treatment',
    hero: {
      headline: 'Pain-Free Root Canal Treatment in Hyderabad',
      subtitle: 'Painless. Precise. Permanent.',
      desc: 'Save your infected natural tooth with painless laser-assisted root canal therapy from expert MDS Endodontists.',
      bullets: [
        "100% Painless Procedures with Advanced Numbing",
        "Treated by MDS Endodontists Only",
        "Save Your Infected Natural Tooth for Life",
        "Microscopic Rotary Endodontics for Precision",
        "Single-Visit RCT Options Available",
        "0% EMI Payment Options Available"
      ],
      image: '/root_canal_banner.png',
      badge: {
        title: 'Microscopic RCT',
        subtitle: 'PAIN-FREE CARE',
        bullets: [
          "Led by MDS Endodontists",
          "Microscopic RCT Precision",
          "Painless Advanced Numbing",
          "100% Sterile Protocol"
        ]
      }
    },
    trustStrip: [
      { label: "10+ Years", desc: "MDS Specialist Care" },
      { label: "15,000+", desc: "Successful RCTs" },
      { label: "98%+", desc: "Treatment Success Rate" },
      { label: "Single-Visit", desc: "RCT Options Available" },
      { label: "0% EMI", desc: "Interest-Free Plans" }
    ],
    painPoints: {
      title: 'ARE YOU STRUGGLING WITH?',
      items: [
        { label: "Severe Toothache", desc: "Sharp, throbbing, or constant pain when biting down or resting." },
        { label: "Hot & Cold Sensitivity", desc: "Linger pain in the tooth after drinking hot tea or ice-cold water." },
        { label: "Swollen Gums", desc: "Tenderness, redness, or swelling in the gums near the painful tooth." },
        { label: "Pimple on Gums", desc: "A small bump on the gums leaking pus, indicating an abscess infection." },
        { label: "Tooth Discoloration", desc: "The tooth turning dark or grey, indicating the nerve inside has died." },
        { label: "Cracked Tooth", desc: "Deep decay or cracks exposing the inner nerve to painful bacteria." }
      ],
      card: {
        title: "Root Canal Treatment",
        desc: "Can eliminate tooth infection, provide immediate pain relief, and save your natural tooth from extraction!",
        btnText: "Request Pain-Free RCT"
      }
    },
    process: {
      title: 'How Root Canal Works',
      steps: [
        { step: 1, title: "1. Digital X-ray", desc: "We take digital X-rays to assess the exact shape of root canals and infection depth." },
        { step: 2, title: "2. Precision Numbing", desc: "Advanced local anesthesia is applied to ensure the tooth is completely numb." },
        { step: 3, title: "3. Pulp Removal", desc: "A tiny opening is created, and the infected nerve and pulp tissue are removed." },
        { step: 4, title: "4. Laser Disinfection", desc: "Advanced lasers and sanitizing agents sterilize the root canals completely." },
        { step: 5, title: "5. Hermetic Sealing", desc: "The clean canals are filled and hermetically sealed to prevent future bacterial entry." },
        { step: 6, title: "6. Tooth Restoration", desc: "A permanent crown is placed to restore the tooth's chewing strength and natural look." }
      ],
      summary: 'We use advanced rotary endodontics to make your root canal fast, painless, and highly comfortable.'
    },
    cost: {
      starting: '4,600',
      range: 'Starting from ₹4,600*',
      bullets: [
        "Consultation & digital X-rays included",
        "Advanced rotary cleaning and shaping",
        "Hermetic canal sealing filling",
        "Interest-free EMI options on credit cards"
      ]
    },
    duration: {
      title: 'How Long Does a Root Canal Take?',
      items: [
        { label: "Single-Sitting RCT", duration: "45 - 60 Mins" },
        { label: "Multi-Sitting RCT (Severe)", duration: "2 - 3 Visits" },
        { label: "Crown Fitting Appointment", duration: "30 Mins" }
      ],
      note: 'The number of sittings depends on the severity of the infection and tooth structure.'
    },
    comparison: {
      title: 'Root Canal vs Extraction',
      headers: ["Feature", "Root Canal Treatment", "Tooth Extraction"],
      rows: [
        { name: "Saves Natural Tooth", main: "Yes (Tooth remains in mouth)", alt: "No (Tooth is pulled out)" },
        { name: "Immediate Pain Relief", main: "Yes (Nerve is removed)", alt: "Yes (But causes bone soreness)" },
        { name: "No Shift in Bite", main: "Yes (Maintains alignment)", alt: "No (Nearby teeth tilt)" },
        { name: "Cost Effective Long-Term", main: "Yes (Simple crown needed)", alt: "No (Requires bridge/implant)" },
        { name: "No Risk of Abscess", main: "Yes (Infection sterilized)", alt: "Yes" }
      ]
    },
    tech: {
      title: 'Advanced Root Canal Technology',
      items: [
        { title: "Rotary Endodontics", desc: "Electrically driven rotary tools that clean and shape root canals much faster and smoother.", icon: "Activity" },
        { title: "Digital Apex Locators", desc: "Measures length of root canals to verify thorough disinfection to the exact canal tip.", icon: "ScanLine" },
        { title: "Laser Disinfection", desc: "Advanced dental lasers sterilizing hard-to-reach areas of the canal, achieving 99.9% sterility.", icon: "Sparkles" },
        { title: "Strict Sterilization", desc: "100% sterile tools utilizing Class-B autoclave sterilizers.", icon: "Shield" }
      ]
    },
    who: {
      title: 'Who Needs Root Canal Treatment?',
      bullets: [
        "Patients experiencing throbbing or severe toothache when lying down",
        "People with tooth pain or sensitivity that lingers after eating hot or cold food",
        "Individuals with swollen gums or a gum pimple leaking pus near a tooth",
        "Patients with teeth containing deep cavities that have reached the nerve",
        "Those who have suffered trauma or cracks in teeth exposing the inner pulp"
      ]
    },
    benefits: {
      title: 'Benefits of Root Canal',
      items: [
        { title: "Instant Pain Relief", desc: "By removing the infected, inflamed nerve tissue, RCT brings immediate relief from toothache.", icon: "Smile" },
        { title: "Saves Your Natural Tooth", desc: "Avoids tooth extraction, keeping your natural bite, chewing power, and facial smile intact.", icon: "CheckCircle2" },
        { title: "Stops Infection Spread", desc: "Sterilizes the infection inside the tooth, preventing it from spreading to jawbone or other teeth.", icon: "ShieldCheck" },
        { title: "Chew Comfortably Again", desc: "Restores normal biting forces, letting you chew your favorite foods without sensitivity.", icon: "Sparkles" },
        { title: "Prevents Bone Loss", desc: "Keeping the natural tooth root in place prevents the surrounding jawbone from shrinking.", icon: "Clock" }
      ]
    },
    specialist: {
      title: 'Meet Our Root Canal Specialist',
      name: 'Dr. Abdul Wahed',
      titleLabel: 'MDS Endodontics & Root Canal Specialist',
      desc: 'Dr. Abdul Wahed is a premier Endodontist with an MDS in Endodontics and a Masters Fellowship in Microscopic Endodontics (MFM). Specializing in advanced, single-visit root canals, retreatment, and microscopic surgery, he has successfully completed over 15,050+ painless root canals.',
      image: '/dr.abdul.jpg',
      bullets: [
        "10+ Years of Specialist Experience",
        "MDS Endodontics Degree",
        "Fellowship in Microscopic Endodontics (MFM)",
        "Expert in Painless Single-Visit Root Canals",
        "Completed 15,000+ Painless RCT Procedures"
      ],
      badgeTitle: 'Micro Endodontics',
      badgeLabel: 'MDS SPECIALIST',
      badgeBullets: [
        "Microscope Assisted Precision",
        "Painless Laser Disinfection",
        "Single-Visit RCT Expertise",
        "FDA-Approved Sealants"
      ]
    }
  },
  'braces': {
    slug: 'braces',
    title: 'Braces & Aligners',
    breadcrumb: 'Braces & Aligners',
    hero: {
      headline: 'Orthodontic Braces & Aligners in Hyderabad',
      subtitle: 'Get Perfectly Aligned Teeth. Smile Confidently.',
      desc: 'Straighten your teeth and correct bite issues with personalized braces or clear aligners from expert MDS Orthodontists.',
      bullets: [
        "Metal, Ceramic, Self-Ligating Braces & Clear Aligners",
        "Treated by MDS Orthodontist Dr. Nitin Bharat",
        "Personalized 3D Treatment Design & Scanning",
        "Aligned Teeth & Perfect Bite Correction",
        "Affordable pricing with low monthly installments",
        "Fewer appointments with self-ligating systems"
      ],
      image: '/braces_banner.png',
      badge: {
        title: 'Orthodontic Care',
        subtitle: 'MDS ORTHODONTIST',
        bullets: [
          "Led by Dr. Nitin Bharat, MDS",
          "Specialist in Pediatric & Adult Braces",
          "3D Intraoral Scanning Center",
          "Aesthetic Clear Ceramic Braces"
        ]
      }
    },
    trustStrip: [
      { label: "14+ Years", desc: "Expert Orthodontics" },
      { label: "5000+", desc: "Perfect Smiles Created" },
      { label: "Metal/Ceramic", desc: "Options Available" },
      { label: "0% EMI", desc: "Interest-Free Installments" },
      { label: "Two Clinics", desc: "Convenient Locations" }
    ],
    painPoints: {
      title: 'ARE YOU STRUGGLING WITH?',
      items: [
        { label: "Crooked Teeth", desc: "Teeth that are twisted or rotated, making you self-conscious." },
        { label: "Tooth Gaps", desc: "Noticeable gaps between teeth that trap food and affect speech." },
        { label: "Teeth Crowding", desc: "Overlapping teeth that are hard to clean, leading to cavities." },
        { label: "Overbite / Underbite", desc: "Upper or lower teeth protruding too far forward, stressing the jaw." },
        { label: "Chewing Strain", desc: "Misaligned teeth make it difficult to chew comfortably." },
        { label: "Speech Difficulties", desc: "Misaligned teeth causing speech impediments or lisping." }
      ],
      card: {
        title: "Orthodontic Braces",
        desc: "Can straighten your teeth, correct your bite, improve chewing efficiency, and give you a beautiful aligned smile!",
        btnText: "Request Braces Consultation"
      }
    },
    process: {
      title: 'Our Orthodontic Process',
      steps: [
        { step: 1, title: "1. Diagnosis & Scans", desc: "We take digital X-rays and 3D intraoral scans to plan precise tooth movement." },
        { step: 2, title: "2. Custom Planning", desc: "Our specialist orthodontist designs a customized bracket or aligner sequence." },
        { step: 3, title: "3. Brackets Bonding", desc: "For braces, high-precision brackets are securely bonded to each tooth." },
        { step: 4, title: "4. Archwire Fitting", desc: "A memory-alloy wire is inserted into the brackets to apply gentle guiding force." },
        { step: 5, title: "5. Wire Adjustments", desc: "Visit our clinic every 4-6 weeks to have the wires adjusted and tightened." },
        { step: 6, title: "6. Retainers Phase", desc: "After braces removal, retainers are fitted to ensure teeth stay straight for life." }
      ],
      summary: 'We offer metallic, ceramic (clear), self-ligating brackets, and clear aligners to fit your preferences.'
    },
    cost: {
      starting: '30,000',
      range: '₹30,000 - ₹90,000*',
      bullets: [
        "Detailed 3D scans and x-rays included",
        "All bracket adjustments and appointments",
        "Metallic or aesthetic clear ceramic options",
        "Easy monthly installments starting from ₹2,000"
      ]
    },
    duration: {
      title: 'How Long Does Braces Take?',
      items: [
        { label: "Mild Alignment Cases", duration: "10 - 12 Months" },
        { label: "Moderate Crowding/Spacing", duration: "12 - 18 Months" },
        { label: "Complex Bite Correction", duration: "18 - 24 Months" }
      ],
      note: 'Self-ligating braces can reduce treatment time by 4 to 6 months.'
    },
    comparison: {
      title: 'Braces vs Aligners',
      headers: ["Feature", "Traditional Braces", "Invisalign Aligners"],
      rows: [
        { name: "Appearance", main: "Visible Metal/Ceramic", alt: "Virtually Invisible (Clear)" },
        { name: "Removable", main: "No (Fixed to teeth)", alt: "Yes (Remove to eat & brush)" },
        { name: "Treatment Range", main: "Treats all severe complex cases", alt: "Best for mild to moderate cases" },
        { name: "Food Restrictions", main: "Many (No hard/sticky)", alt: "None (Aligners removed)" },
        { name: "Visits Frequency", main: "Every 4 Weeks", alt: "Every 6-8 Weeks" },
        { name: "Comfort", main: "Moderate", alt: "High (No wire pricks)" }
      ]
    },
    tech: {
      title: 'Advanced Orthodontic Tech',
      items: [
        { title: "3D Intraoral Scanning", desc: "Replaces uncomfortable gooey molds with a clean, fast 3D digital scan of your mouth.", icon: "ScanLine" },
        { title: "Aesthetic Ceramic Braces", desc: "Polycrystalline brackets that blend in perfectly with your natural tooth color.", icon: "Smile" },
        { title: "Self-Ligating Brackets", desc: "Uses special sliding doors to hold wires, reducing friction and speed up teeth movement.", icon: "Activity" },
        { title: "Strict Sterilization", desc: "100% sterile tools and handpieces ensuring safety for all child and adult patients.", icon: "Shield" }
      ]
    },
    who: {
      title: 'Who Needs Braces & Aligners?',
      bullets: [
        "Children and teenagers with growing jaws and crooked teeth",
        "Adults looking to improve their smile alignment and biting comfort",
        "Patients with tooth spacing (gaps) or teeth overlapping (crowding)",
        "People suffering from jaw joint strain due to misaligned teeth or bite issues",
        "Anyone seeking a permanent, beautiful, and straight smile"
      ]
    },
    benefits: {
      title: 'Benefits of Braces & Aligners',
      items: [
        { title: "Perfect Smile Symmetry", desc: "Straightens crooked, rotated, or overlapping teeth for a beautifully balanced smile.", icon: "Smile" },
        { title: "Healthy Bite Correction", desc: "Aligns your bite, improving chewing efficiency, speech, and reducing jaw joint TMJ strain.", icon: "CheckCircle2" },
        { title: "Easier Tooth Cleaning", desc: "Straight teeth make brushing and flossing simpler, reducing the risk of cavities and gum disease.", icon: "ShieldCheck" },
        { title: "Prevents Uneven Wear", desc: "Distributes biting forces evenly, preventing premature wear and chipping of enamel.", icon: "Sparkles" },
        { title: "Boosted Self-Esteem", desc: "Improves confidence in photos, jobs, and social interactions with a stunning smile.", icon: "Clock" }
      ]
    },
    specialist: {
      title: 'Meet Our Orthodontist',
      name: 'Dr. Nitin Bharat',
      titleLabel: 'MDS Dentofacial Orthodontics',
      desc: 'Dr. Nitin Bharat is a premier orthodontist and certified Invisalign consultant. Holding an MDS in Dentofacial Orthodontics with over 14+ years of clinical experience, he specializes in pediatric orthodontics, adult braces, self-ligating systems, and invisible clear aligner treatments.',
      image: '/nithin.jpg',
      bullets: [
        "14+ Years of Expert Orthodontics",
        "MDS Dentofacial Orthodontics",
        "Certified Invisalign Consultant",
        "Specialist in Self-Ligating & Ceramic Braces",
        "Monitors and treats pediatric jaw development"
      ],
      badgeTitle: 'Braces Center',
      badgeLabel: 'MDS ORTHODONTICS',
      badgeBullets: [
        "Metal & Ceramic Braces",
        "Self-Ligating Fast Systems",
        "3D Scanning Diagnostic Center",
        "Custom Orthodontic Retainers"
      ]
    }
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const key = mapSlugToTreatmentKey(slug);
  const config = landingConfigs[key];
  return {
    title: `${config.hero.headline} | Dental World`,
    description: config.hero.desc,
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'dental-implants' },
    { slug: 'dental-implant-cost-hyderabad' },
    { slug: 'root-canal-treatment' },
    { slug: 'braces' },
    { slug: 'braces-and-aligners' },
    { slug: 'invisalign-treatment' },
    { slug: 'invisalign-pragathi-nagar' }
  ];
}

// Icon mapper for general icons
function RenderIcon({ name, className = "w-6 h-6 text-blue-650 shrink-0" }: { name: string; className?: string }) {
  if (name === "ScanLine") return <CheckCircle2 className={className} />; // Fallbacks to standard icons
  if (name === "Smile") return <Sparkles className={className} />;
  if (name === "Award") return <Award className={className} />;
  if (name === "Shield") return <Shield className={className} />;
  if (name === "Clock") return <Clock className={className} />;
  if (name === "CheckCircle2") return <CheckCircle2 className={className} />;
  if (name === "ShieldCheck") return <ShieldCheck className={className} />;
  if (name === "Sparkles") return <Sparkles className={className} />;
  if (name === "Activity") return <Sparkles className={className} />;
  return <CheckCircle2 className={className} />;
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = mapSlugToTreatmentKey(slug);
  const config = landingConfigs[key];

  // Fetch the dynamic cases and testimonials from standard data
  const baseData = treatmentsData[key] || treatmentsData['root-canal-treatment'];

  const mappedCases = baseData.cases?.map(c => ({
    before: c.beforeImg,
    after: c.afterImg,
    title: c.description
  })) || [];

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": config.title,
    "description": config.hero.desc,
    "bodyLocation": "Mouth",
    "outcome": "Improves oral health and aesthetics",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "priceRange": config.cost.range
    }
  };

  const faqSchema = baseData.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": baseData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  let locationName = "Bachupally";
  if (slug.includes("pragathi-nagar")) {
    locationName = "Pragathi Nagar";
  } else if (slug.includes("bachupally")) {
    locationName = "Bachupally";
  }
  const branch = LOCATIONS.find(l => l.slug === (locationName === "Pragathi Nagar" ? "pragathi-nagar" : "bachupally")) || LOCATIONS[0];

  const iconBullets = key === 'dental-implants' ? [
    { icon: Shield, line1: "10,000+ Implant Cases", line2: "", line3: "" },
    { icon: Star, line1: "4.9 Google Rating", line2: "", line3: "" },
    { icon: Sparkles, line1: "Advanced Implant", line2: "Technology", line3: "" },
    { icon: Heart, line1: "Painless Procedure", line2: "", line3: "" }
  ] : key === 'invisalign-treatment' ? [
    { icon: Shield, line1: "Gold Provider", line2: "Invisalign Certified Care", line3: "" },
    { icon: Star, line1: "4.9 Google Rating", line2: "", line3: "" },
    { icon: Sparkles, line1: "iTero 3D Digital", line2: "Smile Simulations", line3: "" },
    { icon: Heart, line1: "Virtually Invisible", line2: "& Removable Aligners", line3: "" }
  ] : key === 'root-canal-treatment' ? [
    { icon: Shield, line1: "MDS Specialist", line2: "10+ Years Trust", line3: "" },
    { icon: Star, line1: "4.9 Google Rating", line2: "", line3: "" },
    { icon: Sparkles, line1: "Laser Microscopic", line2: "Rotary Precision", line3: "" },
    { icon: Heart, line1: "100% Painless RCT", line2: "", line3: "" }
  ] : [ // braces
    { icon: Shield, line1: "MDS Specialist", line2: "14+ Years Orthodontics", line3: "" },
    { icon: Star, line1: "4.9 Google Rating", line2: "", line3: "" },
    { icon: Sparkles, line1: "3D Scanning", line2: "Custom Bracket Setup", line3: "" },
    { icon: Heart, line1: "Metal & Ceramic Braces", line2: "", line3: "" }
  ];

  const overlayCard = key === 'dental-implants' ? {
    circle: "15+",
    title: "YEARS OF TRUST",
    sub: "Led by Expert Implantologist",
    name: "Dr. Anurag Lahoti"
  } : key === 'invisalign-treatment' ? {
    circle: "14+",
    title: "YEARS OF TRUST",
    sub: "Gold Invisalign Provider",
    name: "Dr. Nitin Bharat"
  } : key === 'root-canal-treatment' ? {
    circle: "10+",
    title: "YEARS OF TRUST",
    sub: "Microscope Endodontics",
    name: "Dr. Abdul Wahed"
  } : { // braces
    circle: "14+",
    title: "YEARS OF TRUST",
    sub: "MDS Orthodontics Expert",
    name: "Dr. Nitin Bharat"
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8faff] text-slate-800 antialiased font-sans pb-20 md:pb-24">
      <Script
        id={`landing-procedure-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      {faqSchema && (
        <Script
          id={`landing-faq-schema-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0f7ff] via-slate-50 to-white py-8 md:py-12 lg:py-16 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px] relative z-10">
          <div className="bg-white border border-slate-200/60 shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Copy Column */}
            <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center space-y-6 z-20 relative bg-white/90 lg:bg-white backdrop-blur-[3px] lg:backdrop-blur-none">
              <div className="inline-flex items-center space-x-2 border border-blue-200 text-[#003B8F] px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 self-start">
                <span className="text-amber-500 font-bold">★</span>
                <span>5-Star Rated Dental Clinic in Your City</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#002D72] leading-tight tracking-tight uppercase">
                Best {config.title} Clinic <br />
                <span className="text-[#FF8A00]">At {locationName}</span>
              </h1>

              <div className="bg-[#003B8F] text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-lg tracking-wider uppercase inline-block shadow-sm self-start">
                PERMANENT TEETH. NATURAL SMILE. EAT CONFIDENTLY AGAIN
              </div>

              <p className="text-[#0F172A] text-sm md:text-base leading-relaxed max-w-xl font-medium">
                {config.hero.desc}
              </p>

              {/* Symmetrical 2-column grid layout with larger readable text */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 pt-2">
                {iconBullets.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <item.icon className="w-5 h-5 text-[#003B8F] mt-0.5 shrink-0" />
                    <div className="text-xs md:text-sm font-bold text-slate-800 leading-snug">
                      <span className="block text-[#0F172A] font-black">{item.line1}</span>
                      {item.line2 && <span className="block text-slate-500 font-semibold mt-0.5">{item.line2}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* 2-line CTA Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-row lg:flex-wrap xl:flex-nowrap gap-4 pt-4">
                <a
                  href="#book-now"
                  className="bg-[#FF8A00] hover:bg-[#e07b00] text-white px-6 py-4 rounded-xl transition font-black text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg min-w-[280px] h-[52px]"
                >
                  📅 BOOK {config.title.split(' ')[0].toUpperCase()} CONSULTATION
                </a>
                <a
                  href="https://wa.me/917997994646"
                  target="_blank"
                  className="bg-[#25D366] hover:bg-[#20bd58] text-white px-6 py-4 rounded-xl transition font-black text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg min-w-[220px] h-[52px]"
                >
                  💬 WHATSAPP US
                </a>
              </div>

              <div className="text-xs text-slate-500 font-bold flex items-center gap-2 pt-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Limited Same-Day Consultation Slots Available – Book Now!</span>
              </div>
            </div>

            {/* Right Patient/Specialist Hero Image with Overlay Card (Blending into Left Copy Column) */}
            <div className="lg:col-span-7 absolute inset-0 lg:relative min-h-full lg:min-h-full overflow-hidden w-full flex flex-col justify-end z-10">
              <Image
                src={config.hero.image}
                alt={config.hero.headline}
                fill
                className="object-cover opacity-20 lg:opacity-100"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Left edge seamless gradient blend for desktop */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              {/* Gradient mask for mobile backdrop */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95 z-10 pointer-events-none"></div>

              {/* Styled trust card: Absolutely positioned over the bottom right of the blended image (Desktop only) */}
              <div className="hidden lg:block absolute bottom-4 left-4 right-4 lg:left-auto lg:right-6 lg:bottom-6 bg-[#002D72]/95 backdrop-blur-sm text-white p-4 md:p-5 rounded-2xl shadow-2xl border border-slate-800/85 lg:max-w-[270px] z-20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#003B8F] flex items-center justify-center font-black text-xs text-white shrink-0">
                    {overlayCard.circle}
                  </div>
                  <div>
                    <h4 className="font-black text-[9px] md:text-[10px] tracking-wider uppercase text-blue-300 leading-none">{overlayCard.title}</h4>
                    <p className="text-[8.5px] md:text-[9px] text-slate-300 font-bold mt-1 leading-none">{overlayCard.sub}</p>
                  </div>
                </div>
                {/* Dental implant illustration on card */}
                {key === 'dental-implants' && (
                  <div className="my-2.5 py-1.5 border-t border-b border-slate-800/60 flex items-center gap-2">
                    <svg className="w-5 h-8 text-blue-400 shrink-0" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 40C20 20 30 10 50 10C70 10 80 20 80 40C80 60 70 70 50 70C30 70 20 60 20 40Z" fill="#93c5fd" />
                      <rect x="42" y="70" width="16" height="50" rx="3" fill="#3b82f6" />
                      <path d="M40 80H60M40 90H60M40 100H60" stroke="#1d4ed8" strokeWidth="2" />
                    </svg>
                    <span className="text-[9.5px] font-bold text-slate-300 leading-tight">Advanced Titanium Implant Root System</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs md:text-sm font-black text-white block leading-tight">{overlayCard.name}</span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase mt-0.5 tracking-wider block">Chief Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Strip */}
      <section className="bg-[#002D72] text-white py-6 shadow-md relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {[
              { label: "15+ Years", desc: "Experience" },
              { label: slug.includes('implants') ? "10,000+" : "15,000+", desc: slug.includes('implants') ? "Successful Implants" : "Happy Smiles Created" },
              { label: "5-Star", desc: "Rated on Google" },
              { label: "Painless", desc: "& Comfortable" },
              { label: "EMI Options", desc: "Available" }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center p-2 ${idx >= 4 ? 'col-span-2 md:col-span-1 pt-6 md:pt-2' : ''} ${idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-2' : ''}`}
              >
                <span className="font-black text-lg md:text-xl text-blue-400 tracking-tight mb-0.5">{item.label}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struggling With Section */}
      <section className="py-12 bg-[#F7F9FC] border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Box: Struggles (White background, Rounded card) */}
            <div className="lg:col-span-9 bg-white border border-slate-200/60 shadow-xl rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-black text-[#002D72] tracking-tight uppercase">
                  ARE YOU STRUGGLING WITH?
                </h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { label: "Missing Teeth", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=150&q=80" },
                  { label: "Loose Dentures", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=150&q=80" },
                  { label: "Difficulty Chewing", img: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&w=150&q=80" },
                  { label: "Embarrassment While Smiling", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
                  { label: "Bone Loss", img: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=150&q=80" },
                  { label: "Facial Sagging", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-2 hover:scale-105 transition duration-350">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-slate-100 shadow-sm bg-slate-200 mb-4 shrink-0">
                      <Image
                        src={item.img}
                        alt={item.label}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <h4 className="font-black text-slate-800 text-xs md:text-sm leading-tight tracking-tight mt-auto">{item.label}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Solution (Dark blue background, Rounded card) */}
            <div className="lg:col-span-3 bg-[#002D72] text-white border border-slate-800/80 shadow-xl rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
              <div className="space-y-4 text-center mt-2">
                <h3 className="text-xl md:text-2xl font-black font-heading leading-tight uppercase tracking-wide text-white">
                  {config.title.toUpperCase()}
                </h3>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-bold">
                  Can Permanently Restore Your Smile & Confidence!
                </p>
              </div>
              {/* Glowing Implant Render Graphic */}
              <div className="relative w-full h-36 flex items-center justify-center mt-4">
                <div className="absolute w-24 h-24 bg-blue-500/20 rounded-full blur-2xl bottom-0"></div>

                {/* Glowing 3D Implant SVG */}
                <svg className="w-16 h-28 text-blue-400 drop-shadow-[0_0_12px_rgba(93,173,226,0.6)]" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Crown */}
                  <path d="M20 40C20 20 30 10 50 10C70 10 80 20 80 40C80 60 70 70 50 70C30 70 20 60 20 40Z" fill="url(#crownGrad)" stroke="#60a5fa" strokeWidth="2" />
                  {/* Abutment */}
                  <path d="M40 70H60L55 90H45L40 70Z" fill="#93c5fd" />
                  {/* Implant Screw */}
                  <rect x="42" y="90" width="16" height="50" rx="3" fill="url(#screwGrad)" stroke="#3b82f6" strokeWidth="1.5" />
                  {/* Threads */}
                  <path d="M40 100H60M40 110H60M40 120H60M40 130H60" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="crownGrad" x1="50" y1="10" x2="50" y2="70" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                    <linearGradient id="screwGrad" x1="50" y1="90" x2="50" y2="140" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Middle Row: Cost, Why Choose Us, Callback Booking */}
      <section className="py-16 bg-[#F7F9FC] border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Col 1: Cost details (Blue gradient card) */}
            <div className="bg-gradient-to-br from-[#003B8F] to-[#002D72] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md border border-slate-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">{config.title} Cost in {locationName}</h3>
                  <p className="text-blue-200 text-xs font-semibold mt-1">STARTING FROM</p>
                </div>

                <div className="py-4 border-y border-blue-800">
                  <span className="text-4xl font-black text-white">₹{config.cost.starting}*</span>
                  <p className="text-[9.5px] text-blue-200 mt-2 font-semibold">*All inclusive: consultation, scan, implant, and custom crown.</p>
                </div>

                <ul className="space-y-3 font-bold text-blue-100 text-xs">
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-450 mr-2.5 shrink-0" /> Consultation included</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-450 mr-2.5 shrink-0" /> Custom implant setup</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-450 mr-2.5 shrink-0" /> CBCT 3D Scan & diagnostics</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-450 mr-2.5 shrink-0" /> High precision surgical procedures</li>
                </ul>
              </div>

              {/* Finance Badges */}
              <div className="mt-8 pt-6 border-t border-blue-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-blue-900/50 rounded-xl border border-blue-800">
                  <span className="font-black text-xs text-white block">0%</span>
                  <span className="text-[8px] uppercase font-bold text-blue-300">No Cost EMI</span>
                </div>
                <div className="p-2 bg-blue-900/50 rounded-xl border border-blue-800">
                  <span className="font-black text-xs text-white block">Flexible</span>
                  <span className="text-[8px] uppercase font-bold text-blue-300">Pay Plans</span>
                </div>
                <div className="p-2 bg-blue-900/50 rounded-xl border border-blue-800">
                  <span className="font-black text-xs text-white block">Insurance</span>
                  <span className="text-[8px] uppercase font-bold text-blue-300">Assistance</span>
                </div>
              </div>
            </div>

            {/* Col 2: Why Choose Us (8 centered features) */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-black text-[#002D72] uppercase tracking-tight text-center">Why Patients Choose Dental World</h3>

                {/* 8 item centered layout */}
                <div className="grid grid-cols-4 gap-x-2 gap-y-6 pt-2 text-center justify-items-center">
                  {[
                    {
                      title: "Specialized", desc: "Implantologists",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.957 11.957 0 01-9.618 5.04c-.334.814-.543 1.704-.595 2.632A11.955 11.955 0 0012 21.368a11.957 11.957 0 009.618-8.752c-.052-.928-.261-1.818-.595-2.632z" />
                        </svg>
                      )
                    },
                    {
                      title: "Advanced", desc: "Guided Surgery",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      )
                    },
                    {
                      title: "Painless", desc: "Procedures",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )
                    },
                    {
                      title: "3D CBCT", desc: "Planning",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )
                    },
                    {
                      title: "Sterile", desc: "Protocols",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    },
                    {
                      title: "Long-lasting", desc: "Implants",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )
                    },
                    {
                      title: "Personalized", desc: "Restoration",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    },
                    {
                      title: "Expert", desc: "Care",
                      icon: (
                        <svg className="w-7 h-7 text-[#003B8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center w-full max-w-[120px]">
                      <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm shrink-0 mb-2">
                        {item.icon}
                      </div>
                      <span className="text-xs md:text-sm font-black text-slate-800 leading-tight block">{item.title}</span>
                      <span className="text-[10px] md:text-xs font-semibold text-slate-500 leading-none mt-0.5 block">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/50 rounded-xl p-3 border border-slate-100 flex flex-col items-center gap-2">
                <p className="text-[10px] text-slate-500 font-semibold italic text-center leading-relaxed">
                  All implants are placed using world-class technology & international quality implant systems for long-term success.
                </p>
                <Link
                  href={`/treatments/${key}`}
                  className="text-xs text-[#003B8F] hover:underline font-extrabold uppercase tracking-wider flex items-center gap-1"
                >
                  View Full {config.title} Guide <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Col 3: Callback Booking Form card (Green CTA Card) */}
            <div className="bg-[#25D366] text-white rounded-3xl p-6 md:p-8 shadow-md border border-emerald-600 flex flex-col justify-between h-full relative overflow-hidden" id="book-now">
              <div className="space-y-5">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-100 block mb-1">Instant Booking</span>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">
                    BOOK YOUR CONSULTATION TODAY
                  </h3>
                </div>

                <ul className="space-y-3 font-bold text-white text-xs">
                  <li className="flex items-center"><Check className="w-4 h-4 text-white mr-2.5 shrink-0" /> Get Expert Evaluation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-white mr-2.5 shrink-0" /> Know Your Implant Options</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-white mr-2.5 shrink-0" /> Cost Estimate</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-white mr-2.5 shrink-0" /> No Obligation</li>
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${branch.phone.tel}`}
                  className="w-full bg-white hover:bg-slate-100 text-[#002D72] font-black py-4 px-6 rounded-xl text-center text-xs tracking-wider uppercase transition shadow-md flex items-center justify-center gap-2 h-[52px]"
                >
                  <Phone className="w-4 h-4 fill-[#002D72] text-[#002D72]" />
                  CALL NOW
                </a>

                <div className="flex items-center justify-center">
                  <span className="text-[10px] uppercase font-bold text-emerald-100 bg-emerald-700/30 px-3 py-1 rounded-full border border-emerald-500/30">or</span>
                </div>

                <a
                  href="https://wa.me/917997994646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-white text-white hover:bg-white/10 font-black py-4 px-6 rounded-xl text-center text-xs tracking-wider uppercase transition shadow-sm flex items-center justify-center gap-2 h-[52px]"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-current" />
                  WHATSAPP US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Showcase */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left title */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-2xl md:text-4xl font-heading font-black text-[#002D72] leading-tight uppercase tracking-tight">
                REAL PATIENTS.<br />REAL RESULTS.<br />REAL CONFIDENCE.
              </h2>
              <p className="text-slate-500 text-xs md:text-sm font-semibold leading-relaxed">
                See the life-changing transformations with dental implants. Browse actual photos of patient teeth restoration completed at Dental World.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center text-[#003B8F] hover:text-blue-800 font-extrabold text-sm border-b-2 border-[#003B8F] pb-0.5 transition"
              >
                VIEW MORE CASES <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Right: 8 case thumbnails */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Transformation 1", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" },
                  { title: "Transformation 2", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" },
                  { title: "Transformation 3", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" },
                  { title: "Transformation 4", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" },
                  { title: "Transformation 5", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" },
                  { title: "Transformation 6", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" },
                  { title: "Transformation 7", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" },
                  { title: "Transformation 8", before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300&q=80" }
                ].map((item, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 group hover:scale-102 transition duration-300">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={item.after}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                      />
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#003B8F] shadow-md">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white text-center">
                      <span className="text-[10px] font-black text-slate-800 uppercase">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table, Specialist Bio, Implant Types */}
      <section className="py-16 bg-[#F7F9FC] border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Col 1: Comparison table */}
            <div className="lg:col-span-4 bg-white border border-slate-200/60 shadow-md rounded-3xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-heading font-black text-[#002D72] uppercase tracking-tight">WHY {config.title.toUpperCase()} ARE BETTER THAN DENTURES</h3>
                <div className="border border-slate-100 rounded-2xl overflow-hidden mt-4">
                  <table className="w-full text-left text-xs font-semibold">
                    <thead className="bg-slate-50 text-xs md:text-sm uppercase font-bold text-slate-500 border-b border-slate-100">
                      <tr>
                        <th className="px-3.5 py-3">FEATURE</th>
                        <th className="px-3.5 py-3 text-center text-[#003B8F] bg-blue-50/30">IMPLANTS</th>
                        <th className="px-3.5 py-3 text-center">DENTURES</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {[
                        { f: "Looks & Feels Natural", i: true, d: false },
                        { f: "Fixed & Non-Removable", i: true, d: false },
                        { f: "Eat Hard Foods Easily", i: true, d: false },
                        { f: "No Slipping/Clicking", i: true, d: false },
                        { f: "Preserves Jawbone Density", i: true, d: false },
                        { f: "Long-Lasting (Lifetime)", i: true, d: false }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition">
                          <td className="px-3.5 py-3 text-xs md:text-sm font-black text-slate-800 leading-tight">{row.f}</td>
                          <td className="px-3.5 py-3 text-center bg-blue-50/20 text-[#25D366]">
                            {row.i ? <Check className="w-5 h-5 mx-auto font-black" /> : <X className="w-5 h-5 mx-auto text-red-500" />}
                          </td>
                          <td className="px-3.5 py-3 text-center text-red-500">
                            {row.d ? <Check className="w-5 h-5 mx-auto text-[#25D366]" /> : <X className="w-5 h-5 mx-auto" />}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Col 2: Specialist Bio Card */}
            <div className="lg:col-span-5 bg-[#002D72] text-white rounded-3xl overflow-hidden shadow-md border border-slate-800 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-full items-stretch">
                {/* Left side: Doctor portrait photo filling the full card height */}
                <div className="col-span-12 md:col-span-5 relative min-h-[300px] md:min-h-full">
                  <Image
                    src={config.specialist.image}
                    alt={config.specialist.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>

                {/* Right side: Specialist details */}
                <div className="col-span-12 md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3.5">
                    <div>
                      <span className="text-[11px] md:text-xs font-black text-blue-300 uppercase tracking-widest block">Meet Our Implant Expert</span>
                      <h3 className="text-2xl lg:text-3xl font-black text-white uppercase leading-tight tracking-tight mt-0.5">DR. ANURAG LAHOTI</h3>
                      <p className="text-xs md:text-sm font-semibold text-slate-300 mt-0.5">Prosthodontist / Implantologist / 14+ Years Experience</p>
                    </div>

                    <div className="inline-block">
                      <span className="text-[11px] md:text-xs font-black text-white bg-[#003B8F] px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-blue-700">
                        14+ Years Experience
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs md:text-sm font-black text-slate-100 leading-relaxed pt-1">
                      <p className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>Specialist in Prosthodontics & Implant Dentistry</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>Expert in Full Mouth Rehabilitation</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>Advanced Implant Surgeries Specialist</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>Thousands of Successful Cases Placed</span>
                      </p>
                      <p className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>Committed to Painless Clinical Excellence</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-slate-800 flex items-center justify-between text-[11px] md:text-xs font-black text-slate-400 tracking-wider">
                    <span>ICOI MEMBER</span>
                    <span>•</span>
                    <span>ISOI MEMBER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3: Implant Types We Offer */}
            <div className="lg:col-span-3 bg-white border border-slate-200/60 shadow-md rounded-3xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-heading font-black text-[#002D72] uppercase tracking-tight">Implant Types We Offer</h3>
                <div className="space-y-3.5 text-sm font-bold text-slate-700">
                  {[
                    { title: "Single Tooth Implant", desc: "Replace one missing tooth root" },
                    { title: "Multiple Teeth Implant", desc: "Bridge gaps of multiple teeth" },
                    { title: "Full Mouth Implants", desc: "All-on-4 / All-on-6 setups" },
                    { title: "Implant Supported Dentures", desc: "Superior stability & bone lock" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center space-x-3 hover:border-blue-200 transition duration-350">
                      <div className="w-6 h-6 rounded-full bg-[#003B8F] flex items-center justify-center text-white text-xs font-black shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-black leading-tight">{item.title}</h4>
                        <p className="text-[11px] md:text-xs text-slate-500 font-semibold mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`/treatments/${key}`}
                  className="w-full inline-block bg-[#003B8F] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-xl text-center text-sm tracking-wider uppercase transition shadow-sm h-[52px] flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Treatment Process */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-black text-[#002D72] uppercase tracking-tight">
              OUR DENTAL IMPLANT TREATMENT PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Timeline Steps */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              {[
                { title: "1. Consultation & 3D Scan", desc: "Detailed evaluation & digital scan parameters" },
                { title: "2. Implant Planning", desc: "Personalized virtual implant planning models" },
                { title: "3. Implant Placement", desc: "Virtually painless implant surgical placement" },
                { title: "4. Osseointegration", desc: "Implant fuses securely with your jawbone over months" },
                { title: "5. Abutment Placement", desc: "Custom metal connector placed on top of implant" },
                { title: "6. Crown Placement", desc: "Permanent dental crown for a natural aesthetic smile" }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm hover:border-blue-200 transition duration-300 relative">
                  <div className="w-8 h-8 rounded-full bg-[#003B8F] text-white flex items-center justify-center font-black text-xs mb-3">
                    {idx + 1}
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xs md:text-sm">{step.title}</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="lg:col-span-4">
              <div className="bg-[#002D72] text-white rounded-3xl p-8 shadow-xl border border-slate-800 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <h3 className="text-xl font-black uppercase tracking-wide text-white">
                    Take the First Step Towards a New You!
                  </h3>
                  <p className="text-xs text-slate-350 font-semibold leading-relaxed">
                    Book your appointment today and secure a professional implantologist consultation.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="#book-now"
                    className="w-full inline-block bg-white hover:bg-slate-100 text-[#002D72] font-black py-4 px-6 rounded-xl text-center text-xs tracking-wider uppercase transition shadow-md animate-pulse"
                  >
                    BOOK NOW →
                  </a>
                  <span className="text-[9px] text-blue-200 mt-2 block text-center uppercase tracking-widest font-bold">
                    Get Expert Implant Consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-[#F7F9FC] border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            {/* Left title */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl md:text-4xl font-heading font-black text-[#002D72] uppercase tracking-tight">
                WHAT OUR PATIENTS SAY
              </h2>
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs font-black text-slate-700">4.9/5 Based on 500+ Reviews</span>
              </div>
              <Link
                href="/testimonials"
                className="inline-block bg-[#003B8F] hover:bg-blue-800 text-white font-black px-6 py-2.5 rounded-full text-xs transition shadow-sm"
              >
                READ MORE REVIEWS
              </Link>
            </div>

            {/* Right: 4 video thumbnails */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Full Mouth Implant Transformation", duration: "1:25", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80" },
                  { title: "Patient Testimonial Real Stories", duration: "1:02", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80" },
                  { title: "Dr. Anurag Explaining Implants", duration: "1:18", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80" },
                  { title: "Implant Procedure Step by Step", duration: "1:05", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80" }
                ].map((vid, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group hover:scale-102 transition duration-300">
                    <div className="relative aspect-video w-full bg-slate-200">
                      <Image
                        src={vid.img}
                        alt={vid.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 15vw"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-blue-700 shadow-md">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                        {vid.duration}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-extrabold text-slate-800 text-[11px] leading-tight line-clamp-2">{vid.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ, Servicing Area, Map */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Col 1: FAQ Accordion */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-black text-[#002D72] uppercase tracking-tight mb-4">FREQUENTLY ASKED QUESTIONS</h3>
              <FAQAccordion faqs={baseData.faqs || []} />
            </div>

            {/* Col 2: Servicing Neighborhoods */}
            <div className="lg:col-span-3 bg-[#F7F9FC] border border-slate-150 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-black text-[#002D72] uppercase tracking-tight">PROUDLY SERVING FROM 2 LOCATIONS</h3>
                <div className="flex flex-col gap-3 text-xs font-bold text-slate-600 pt-2">
                  <div className="flex items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <MapPin className="w-4 h-4 text-[#003B8F] mr-2.5 shrink-0" />
                    <span>Bachupally Clinic</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <MapPin className="w-4 h-4 text-[#003B8F] mr-2.5 shrink-0" />
                    <span>Pragathi Nagar Clinic</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3: Map location */}
            <div className="lg:col-span-4 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">DENTAL WORLD - {branch.name.toUpperCase()}</h4>
                    <p className="text-[10px] text-slate-550 font-semibold mt-1">{branch.address}</p>
                  </div>
                  <div className="flex items-center space-x-1 shrink-0 text-amber-500 font-black text-xs bg-amber-50 border border-amber-100 px-2 py-0.5 rounded">
                    <span>★</span>
                    <span>4.9</span>
                  </div>
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-100">
                  <iframe
                    src={branch.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title={`Dental World ${branch.name} Location Map`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed Bottom Sticky CTA Bar (Desktop & Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#002D72] text-white py-3.5 px-4 md:px-8 border-t border-slate-800 shadow-2xl z-50 flex items-center justify-between">
        <div className="hidden sm:block text-left">
          <span className="text-[10px] text-blue-300 block font-black uppercase tracking-wider">Expert Consultation</span>
          <span className="text-xs md:text-sm font-extrabold leading-tight mt-0.5 block">🏥 Dental World {locationName}</span>
        </div>
        <div className="flex gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
          <a
            href={`tel:${branch.phone.tel}`}
            className="flex-1 sm:flex-initial bg-[#003B8F] hover:bg-blue-800 text-white font-black px-2 md:px-6 py-3 rounded-xl text-[10px] md:text-sm transition flex items-center justify-center gap-1.5 md:gap-2 uppercase tracking-wide h-[52px]"
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 fill-white text-white shrink-0" />
            <span className="hidden md:inline">Call: {branch.phone.display}</span>
            <span className="md:hidden">Call Us</span>
          </a>
          <a
            href="https://wa.me/917997994646"
            target="_blank"
            className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-emerald-600 text-white font-black px-2 md:px-6 py-3 rounded-xl text-[10px] md:text-sm transition flex items-center justify-center gap-1.5 md:gap-2 uppercase tracking-wide h-[52px]"
          >
            <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4 fill-white text-white shrink-0" />
            <span>WhatsApp</span>
          </a>
          <a
            href="#book-now"
            className="flex-1 sm:flex-initial bg-[#FF8A00] hover:bg-orange-650 text-white font-black px-2 md:px-6 py-3 rounded-xl text-[10px] md:text-sm transition flex items-center justify-center uppercase tracking-wide shadow-md h-[52px]"
          >
            <span className="hidden md:inline">Book Appointment</span>
            <span className="md:hidden">Book Appt</span>
          </a>
        </div>
      </div>
    </div>
  );
}
