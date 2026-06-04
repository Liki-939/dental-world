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
import { 
  CheckCircle2, ShieldCheck, Award, Sparkles, Star, 
  PhoneCall, Shield, Clock, Heart, Users, MapPin, 
  Check, X, ArrowRight, MessageSquare, Phone, ChevronRight 
} from 'lucide-react';
import { treatmentsData } from '@/data/treatments';

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
      image: '/dental_implant_banner.png',
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
        btnText: "Get Free Implant Consultation"
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
      starting: '₹25,000',
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
      starting: '₹4,600',
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
      desc: 'Dr. Abdul Wahed is a premier Endodontist with an MDS in Endodontics and a Masters Fellowship in Microscopic Endodontics (MFM). Specializing in advanced, single-visit root canals, retreatment, and microscopic surgery, he has successfully completed over 15,000+ painless root canals.',
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
      starting: '₹30,000',
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
function RenderIcon({ name, className = "w-6 h-6 text-blue-600 shrink-0" }: { name: string; className?: string }) {
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

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30 text-slate-800 antialiased font-sans pb-16 md:pb-0">
      {/* Top Banner Bar */}
      <div className="bg-[#0a1c3c] text-white text-[11px] md:text-xs py-2 text-center font-medium border-b border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
          <span>🕒 Open Daily: 10:00 AM – 9:00 PM</span>
          <span className="hidden md:inline">|</span>
          <span>📍 Pragathi Nagar & Bachupally, Hyderabad</span>
          <span className="hidden md:inline">|</span>
          <span className="font-bold">📞 Call Helpline: +91 91000 61610</span>
        </div>
      </div>

      <Navbar />

      {/* 1. HERO SECTION - 3-column Layout */}
      <section className="relative bg-gradient-to-br from-[#f0f7ff] via-white to-[#f0f7ff] pt-12 pb-16 md:py-20 border-b border-slate-100 overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-200 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-200 blur-[130px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-500 font-medium">Treatments</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-600 font-semibold">{config.breadcrumb}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Column 1: Copy and Primary CTAs */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100/50 border border-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Hyderabad&apos;s Premium MDS Dental Clinic</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
                {config.hero.headline}
              </h1>

              <p className="text-lg font-semibold text-blue-600">
                {config.hero.subtitle}
              </p>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {config.hero.desc}
              </p>

              {/* Checkmark List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {config.hero.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-slate-700">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href="#book-now" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl text-center text-sm transition shadow-md hover:shadow-lg active:scale-98"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="https://wa.me/919100061610" 
                  target="_blank"
                  className="border-2 border-emerald-500 hover:bg-emerald-50 text-emerald-700 font-bold px-6 py-3 rounded-xl text-center text-sm transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  WhatsApp Us
                </a>
                <a 
                  href="tel:+919100061610" 
                  className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-xl text-center text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-slate-500" />
                  +91 91000 61610
                </a>
              </div>
            </div>

            {/* Column 2: Patient/Specialist Hero Image */}
            <div className="lg:col-span-4 relative flex justify-center items-center">
              <div className="relative w-full aspect-square md:aspect-[4/5] max-w-[340px] rounded-3xl overflow-hidden shadow-premium border-4 border-white bg-slate-100">
                <Image 
                  src={config.hero.image} 
                  alt={config.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Column 3: Specialization Badge Card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-premium p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10"></div>
                
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full uppercase tracking-wider block w-max mb-4">
                  {config.hero.badge.subtitle}
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                  {config.hero.badge.title}
                </h3>

                <ul className="space-y-3">
                  {config.hero.badge.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600 font-medium">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGE STRIP - Dark Blue strip below Hero */}
      <section className="bg-[#0a1c3c] text-white py-6 shadow-md relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {config.trustStrip.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-center p-2 ${idx >= 4 ? 'col-span-2 md:col-span-1 pt-6 md:pt-2' : ''} ${idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-2' : ''}`}
              >
                <span className="font-extrabold text-lg md:text-xl text-blue-400 tracking-tight mb-0.5">{item.label}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-slate-300 font-semibold">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PATIENT PAIN POINTS ("Are You Struggling With?") */}
      <section className="py-16 bg-white border-b border-slate-150">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block mb-2">Identify Your Concern</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
              {config.painPoints.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: 6 Circles Pain Points */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.painPoints.items.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 mb-4 font-bold text-lg border border-blue-100">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">{item.label}</h4>
                  <p className="text-xs text-slate-550 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Hook Resolution Card */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                <div className="space-y-6">
                  <Sparkles className="w-10 h-10 text-blue-200" />
                  <h3 className="text-2xl font-bold font-heading leading-tight">
                    {config.painPoints.card.title}
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed font-medium">
                    {config.painPoints.card.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <a 
                    href="#book-now" 
                    className="w-full inline-block bg-white hover:bg-slate-100 text-blue-800 font-extrabold py-3.5 px-6 rounded-xl text-center text-sm transition shadow-md active:scale-98"
                  >
                    {config.painPoints.card.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS FLOW TIMELINE ("How it Works") */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block mb-2">Step-by-Step Pathway</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
              {config.process.title}
            </h2>
          </div>

          {/* Horizontal Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {config.process.steps.map((step, idx) => (
              <div key={idx} className="relative group bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all duration-300">
                <div className="absolute top-[-15px] left-5 w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                  {step.step}
                </div>
                <h4 className="font-bold text-slate-950 mb-2 mt-2 text-sm md:text-base">{step.title.split('. ')[1]}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-100/50 border border-blue-200 text-blue-900 font-bold px-6 py-3 rounded-full text-xs md:text-sm shadow-sm">
              ✨ {config.process.summary}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING, DURATION & COMPARISON GRID */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block mb-2">Compare & Choose</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
              Cost, Timeline & Alternatives
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Cost Card */}
            <div className="bg-[#f8faff] border border-slate-200/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-blue-650">TRANSPARENT COST</span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">Starting Price</h3>
                </div>

                <div className="py-4 border-y border-slate-200/60">
                  <span className="text-3xl md:text-4xl font-black text-slate-900">{config.cost.range}</span>
                  <p className="text-[10px] text-slate-400 mt-2 italic">*All pricing is subject to diagnostic scans & clinical evaluation.</p>
                </div>

                <ul className="space-y-3 font-semibold text-slate-700 text-xs md:text-sm">
                  {config.cost.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Finance Badges */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="font-extrabold text-xs text-blue-650 block">0%</span>
                  <span className="text-[8px] uppercase tracking-wider font-bold text-slate-450">No Cost EMI</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="font-extrabold text-xs text-blue-650 block">Flexible</span>
                  <span className="text-[8px] uppercase tracking-wider font-bold text-slate-450">Pay Plans</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="font-extrabold text-xs text-blue-650 block">Insurance</span>
                  <span className="text-[8px] uppercase tracking-wider font-bold text-slate-450">Assistance</span>
                </div>
              </div>
            </div>

            {/* Duration Card */}
            <div className="bg-[#f8faff] border border-slate-200/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-blue-650">TREATMENT TIMELINE</span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">{config.duration.title}</h3>
                </div>

                <div className="space-y-4 py-4 border-y border-slate-200/60">
                  {config.duration.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <span className="font-bold text-slate-700 text-xs md:text-sm">{item.label}</span>
                      <span className="font-extrabold text-xs md:text-sm text-blue-650 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">{item.duration}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 italic font-medium">
                  💡 {config.duration.note}
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="#book-now" 
                  className="w-full inline-block bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl text-center text-sm transition shadow-sm"
                >
                  Get Individual Timeline
                </a>
              </div>
            </div>

            {/* Alternatives Comparison Table */}
            <div className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-blue-650">DIRECT COMPARISON</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{config.comparison.title}</h3>
                </div>

                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-450 border-b border-slate-100">
                      <tr>
                        {config.comparison.headers.map((h, idx) => (
                          <th key={idx} className="px-3 py-2 text-center first:text-left">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-semibold">
                      {config.comparison.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition">
                          <td className="px-3 py-2 text-slate-800 text-[11px] leading-tight">{row.name}</td>
                          <td className="px-3 py-2 text-center text-blue-700 font-extrabold bg-blue-50/20">{row.main}</td>
                          <td className="px-3 py-2 text-center text-slate-500">{row.alt}</td>
                          {row.alt2 && <td className="px-3 py-2 text-center text-slate-500">{row.alt2}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[10px] text-center text-slate-400">Choose the best standard of care for your lifestyle & health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLINICAL LOCATIONS ("In Your Area") */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block mb-2">Our Locations</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
              Treatment Available Near You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bachupally */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition duration-300">
              <div className="relative h-48 w-full bg-slate-200">
                <Image 
                  src="/couple.png" 
                  alt="Bachupally Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Bachupally Branch</h3>
                  <p className="text-xs text-slate-200">Opposite Pragathi Nagar Main Road</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" /> Advanced digital diagnostics & x-rays</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" /> Free parking & comfortable spacious waiting lounge</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" /> Expert board-certified endodontists & implantologists</li>
                </ul>
                <div className="pt-2">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank"
                    className="w-full inline-block bg-blue-650 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-bold text-xs transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Pragathi Nagar */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition duration-300">
              <div className="relative h-48 w-full bg-slate-200">
                <Image 
                  src="/doc_pat.png" 
                  alt="Pragathi Nagar Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Pragathi Nagar Branch</h3>
                  <p className="text-xs text-slate-200">Main Road, Near Hanuman Temple</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" /> iTero 3D intraoral scanner facility</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" /> Easy road accessibility & local transit links</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" /> Painless laser dentistry technologies</li>
                </ul>
                <div className="pt-2">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank"
                    className="w-full inline-block bg-blue-650 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-bold text-xs transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ADVANCED TECH & BEFORE/AFTER SHOWCASE */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Technology */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block">Technology & Accuracy</span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
                {config.tech.title}
              </h2>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                We believe that modern technology achieves predictable dental results. Our diagnostics reduce procedure times, eliminate pain, and guarantee higher safety.
              </p>

              <div className="space-y-4 pt-2">
                {config.tech.items.map((techItem, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <RenderIcon name={techItem.icon} className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs md:text-sm">{techItem.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{techItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Before & After Cases */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-8 border border-slate-150 shadow-sm text-center">
                <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block mb-2">Visible Transformations</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Clinical Outcomes</h3>
                
                <BeforeAfterShowcase customCases={mappedCases} />
                
                <p className="text-[11px] text-slate-400 mt-6 italic">Unretouched clinic cases of actual patient smile makeovers completed at Dental World.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHO, BENEFITS & CALLBACK FORM */}
      <section className="py-16 bg-slate-50 border-b border-slate-100" id="book-now">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Who Can Get? */}
            <div className="lg:col-span-4 bg-white border border-slate-200/50 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">{config.who.title}</h3>
                <ul className="space-y-4 text-xs md:text-sm font-semibold text-slate-750">
                  {config.who.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Candidate Check</span>
              </div>
            </div>

            {/* Middle: Benefits */}
            <div className="lg:col-span-4 bg-white border border-slate-200/50 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">{config.benefits.title}</h3>
                <div className="space-y-4">
                  {config.benefits.items.map((b, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <RenderIcon name={b.icon} className="w-4.5 h-4.5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs md:text-sm">{b.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proven Advantages</span>
              </div>
            </div>

            {/* Right: Callback Form Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#0a1c3c] text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-900/40 to-transparent rounded-bl-full -z-10"></div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block mb-1">Instant Registration</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Get a Call Back</h3>
                  <p className="text-xs text-slate-350 mt-1">Book your free estimate and appointment slot below.</p>
                </div>

                <div className="text-slate-900 flex-grow mt-2">
                  <BookAppointmentForm minimal defaultTreatment={config.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MEET THE SPECIALIST */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block mb-2">MDS Clinicians</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
              {config.specialist.title}
            </h2>
          </div>

          <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 border border-slate-150 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Specialist Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-200">
                  <Image 
                    src={config.specialist.image} 
                    alt={config.specialist.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bio details */}
              <div className="lg:col-span-5 text-left space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-950">{config.specialist.name}</h3>
                  <span className="text-xs md:text-sm font-semibold text-blue-650 tracking-wide mt-1 block">{config.specialist.titleLabel}</span>
                </div>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {config.specialist.desc}
                </p>
                <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-2">
                  {config.specialist.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accreditation Badge */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-center space-y-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Affiliation</span>
                  <div className="py-2 border-y border-slate-100">
                    <span className="text-lg font-black text-slate-800 tracking-tight uppercase block">{config.specialist.badgeTitle}</span>
                    <span className="text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded uppercase tracking-wider inline-block mt-1">{config.specialist.badgeLabel}</span>
                  </div>
                  <ul className="text-left space-y-2 text-[11px] text-slate-500 font-medium">
                    {config.specialist.badgeBullets.map((b, idx) => (
                      <li key={idx} className="flex items-center"><Check className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0" /> {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQS ACCORDION */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-extrabold uppercase tracking-wider text-xs block mb-2">Common Patient Questions</span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion faqs={baseData.faqs || []} />
        </div>
      </section>

      {/* 11. FOOTER BRAND CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0c1d3b] via-[#050f24] to-[#0c1d3b] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
          <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] rounded-full bg-blue-500 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500 blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-3xl relative z-10 space-y-6">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-xs block">Immediate Call Booking</span>
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold leading-tight">
            Your Dream Smile is Just a Consultation Away!
          </h2>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Restore your dental health and confidence under the care of Hyderabad&apos;s premier MDS specialists. Book your consultation in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="#book-now" 
              className="bg-white hover:bg-slate-100 text-blue-900 font-extrabold py-3.5 px-8 rounded-full text-sm transition shadow-lg hover:shadow-xl active:scale-98"
            >
              Get Free Estimate
            </a>
            <a 
              href="tel:+919100061610" 
              className="border-2 border-white hover:bg-white/10 text-white font-extrabold py-3 px-8 rounded-full text-sm transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Call Helpline
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* 11. FLOATING BOTTOM STICKY CTA BAR - High-converting bar tracking scroll */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a1c3c] text-white py-3 px-4 md:px-8 border-t border-slate-800 shadow-2xl z-50 flex items-center justify-between md:hidden">
        <div className="text-left">
          <span className="text-[10px] text-slate-350 block leading-none font-bold uppercase">Free Consultation</span>
          <span className="text-xs font-bold leading-tight mt-1 block">Book Your Visit Today</span>
        </div>
        <div className="flex gap-2">
          <a 
            href="tel:+919100061610" 
            className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white"
            aria-label="Call clinic"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/919100061610" 
            target="_blank"
            className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white"
            aria-label="WhatsApp clinic"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-white text-white" />
          </a>
          <a 
            href="#book-now" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 text-xs rounded-xl flex items-center justify-center transition"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-[#0a1c3c] text-white py-3.5 px-6 border border-slate-800 shadow-premium rounded-2xl z-50 hidden md:flex items-center gap-4 transition-all duration-300">
        <div className="text-left pr-2 border-r border-slate-800">
          <span className="text-[9px] text-blue-400 block leading-none font-extrabold uppercase">Free consultation</span>
          <span className="text-xs font-extrabold leading-tight mt-1 block">📞 +91 91000 61610</span>
        </div>
        <div className="flex gap-2.5">
          <a 
            href="https://wa.me/919100061610" 
            target="_blank"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
            WhatsApp
          </a>
          <a 
            href="#book-now" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl text-xs transition"
          >
            Request Call
          </a>
        </div>
      </div>
    </div>
  );
}
