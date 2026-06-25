export interface TreatmentData {
  title: string;
  hero_headline: string;
  hero_subheadline: string;
  aboutText: string;
  whenRequired: string;
  benefits: string[];
  duration: string;
  procedure: string;
  pricing: { title: string; price: string; features: string[]; isPopular?: boolean }[];
  faqs: { question: string; answer: string }[];
  testimonials: { id: number; patient_name: string; text: string; rating: number; treatment_name: string }[];
  cases: { beforeImg: string; afterImg: string; description: string }[];
  technology?: { title: string; icon: string }[];
  infographic?: string;
  infographicData?: {
    beforeImage?: string;
    afterImage?: string;
    title: string;
    description: string;
    benefits: { text: string; icon: string }[];
    howItWorks: { step: number; title: string; description: string }[];
    keyDetails: { title: string; text: string; icon: string }[];
    aftercare: { text: string; icon: string }[];
  };
  seoTitle?: string;
  seoDescription?: string;
}

export const treatmentsData: Record<string, TreatmentData> = {
  'root-canal-treatment': {
    title: 'Root Canal Treatment',
    hero_headline: 'Advanced Root Canal Treatment in Hyderabad',
    hero_subheadline: 'Restore your smile and confidence with our world-class treatments.',
    seoTitle: 'Root Canal Treatment in Bachupally | Painless RCT Near Nizampet & Miyapur',
    seoDescription: 'Looking for painless root canal treatment in Bachupally? Dental World Clinic offers advanced RCT, single sitting root canal treatment, and affordable tooth-saving procedures near Nizampet, Pragathi Nagar, and Miyapur.',
    aboutText: 'Root Canal Treatment is a sophisticated procedure designed to save a tooth with a damaged or infected pulp. The pulp, containing nerves and blood vessels, is carefully removed, and the interior of the tooth is cleaned and sealed. This meticulous process not only relieves pain but also prevents the spread of infection, allowing you to maintain a healthy and functional smile.',
    whenRequired: 'Root Canal Treatment becomes necessary when the pulp inside a tooth becomes inflamed or infected due to deep decay, repeated dental procedures, or trauma. If you experience persistent toothache, sensitivity to hot or cold, or swelling, it’s crucial to seek professional evaluation for potential root canal therapy.',
    benefits: [
      'Pain Relief: Alleviates toothache and discomfort.',
      'Preserves Natural Teeth: Avoids extraction and maintains your natural smile.',
      'Prevents Infection Spread: Stops the spread of infection to surrounding tissues.',
      'Improves Oral Health: Contributes to the overall health of your teeth and gums.',
      'Enhances Chewing Efficiency: Restores normal biting and chewing functions.',
      'Aesthetic Restoration: Keeps your smile intact, promoting both health and aesthetics.'
    ],
    duration: 'Typically, a Root Canal Treatment can be completed in one to three appointments, depending on the complexity of the case. Our skilled dental professionals ensure a thorough and efficient procedure, prioritizing both your comfort and the quality of care.',
    procedure: 'The process begins with a comprehensive examination and X-rays to assess the extent of damage. After administering local anesthesia, the dentist removes the infected pulp, cleans the interior, and seals the tooth. In some cases, a crown may be recommended to strengthen and protect the treated tooth.',
    pricing: [
      { title: "Standard", price: "22,000", features: ["Consultation", "Basic Procedure", "Standard Materials"] },
      { title: "Premium", price: "35,000", features: ["3D Scan", "Advanced Procedure", "Premium Materials", "Extended Warranty"], isPopular: true },
      { title: "Full Mouth", price: "1,20,000", features: ["Comprehensive Planning", "Full Restoration", "Highest Quality", "Lifetime Support"] }
    ],
    faqs: [
      { question: "Is the procedure painful?", answer: "No, we use advanced local anesthesia and minimally invasive techniques to ensure you are completely comfortable." },
      { question: "How long does it take?", answer: "The duration depends on the complexity, but most initial procedures take 1-2 hours." },
      { question: "Are EMI options available?", answer: "Yes, we offer 0% interest EMI options on all major credit cards." }
    ],
    testimonials: [
      { id: 1, patient_name: "Ramesh Kumar", text: "Got my treatment done here. The doctors are very professional and the clinic is extremely hygienic. Highly recommended!", rating: 5, treatment_name: "Root Canal" }
    ],
    cases: [
      { beforeImg: "/images/cases/root_canal_before.png", afterImg: "/images/cases/root_canal_after.png", description: "Severe decay treated with root canal and porcelain crown." }
    ],

    technology: [
      { title: "Digital X-Rays", icon: "ScanLine" },
      { title: "Rotary Endodontics", icon: "Activity" },
      { title: "Apex Locators", icon: "MapPin" },
      { title: "Laser Disinfection", icon: "ShieldCheck" }
    ],
    infographic: '/root_canal_banner.png',

    infographicData: {
      title: "ROOT CANAL TREATMENT",
      description: "Root canal therapy saves a severely infected or decayed tooth by removing the damaged nerve and pulp, cleaning the inside, and sealing it to prevent further infection.",
      benefits: [
        { text: "Provides immediate pain relief", icon: "Smile" },
        { text: "Preserves your natural tooth", icon: "ShieldCheck" },
        { text: "Prevents infection from spreading", icon: "Shield" },
        { text: "Restores normal chewing function", icon: "Activity" }
      ],
      howItWorks: [
        { step: 1, title: "DIAGNOSIS & ANESTHESIA", description: "X-rays are taken to assess the infection. Local anesthesia is applied to ensure a painless experience." },
        { step: 2, title: "CLEANING & SHAPING", description: "The infected pulp is removed, and the root canals are thoroughly cleaned and disinfected." },
        { step: 3, title: "SEALING & RESTORATION", description: "The canals are filled with a rubber-like material, and a crown is usually placed to protect the tooth." }
      ],
      keyDetails: [
        { title: "Treatment Time", text: "1-2 visits (approx. 60 mins each)", icon: "Clock" },
        { title: "Material", text: "Biocompatible gutta-percha filling", icon: "Package" },
        { title: "Restoration", text: "Requires a dental crown afterward", icon: "Shield" },
        { title: "Anesthesia", text: "Local anesthesia (completely painless)", icon: "Bed" },
        { title: "Success Rate", text: "Over 95% with proper crown placement", icon: "Sparkles" },
        { title: "Lifespan", text: "Can last a lifetime with good oral hygiene", icon: "Droplet" }
      ],
      aftercare: [
        { text: "Brush and floss normally", icon: "Activity" },
        { text: "Avoid chewing on hard foods initially", icon: "Apple" },
        { text: "Take prescribed medications if any", icon: "Syringe" },
        { text: "Attend follow-up for crown placement", icon: "Wrench" },
        { text: "Maintain regular check-ups", icon: "Smile" }
      ]
    }
  },
  'dental-implants': {
    title: 'Dental Implants',
    hero_headline: 'State-of-the-art Dental Implants in Hyderabad',
    hero_subheadline: 'Restore your smile and enhance your oral health with personalized implant dentistry.',
    aboutText: 'Dental implants are innovative, titanium posts surgically placed into the jawbone to replace missing teeth. These implants serve as sturdy foundations for custom-made artificial teeth, mimicking the look and function of natural teeth. The result is a durable, long-lasting solution that blends seamlessly with your existing smile.',
    whenRequired: 'Dental implants are an ideal solution for individuals with missing teeth due to injury, decay, or other oral health issues. They provide a reliable option for those seeking a permanent and aesthetic replacement, improving both function and appearance.',
    benefits: [
      'Natural Appearance: Implants closely resemble natural teeth, enhancing your smile\'s aesthetics.',
      'Improved Function: Enjoy the ability to eat, speak, and chew with confidence and ease.',
      'Bone Preservation: Implants stimulate jawbone growth, preventing bone loss associated with missing teeth.',
      'Durability: With proper care, dental implants can last a lifetime.',
      'Enhanced Comfort: Implants eliminate discomfort often associated with removable dentures.',
      'Preservation of Adjacent Teeth: Unlike traditional bridges, implants do not require adjacent teeth for support, preserving their integrity.'
    ],
    duration: 'The duration of dental implant treatment varies based on individual cases. It typically involves multiple stages, including the initial consultation, implant placement surgery, healing period, and the attachment of prosthetic teeth. Our experienced team ensures a comprehensive and efficient process tailored to your needs.',
    procedure: 'The process begins with a thorough examination and consultation to determine candidacy. During the implant placement, a small incision is made in the gum to insert the titanium implant into the jawbone. Following a healing period, an abutment is attached, and custom-made prosthetic teeth are secured to the implants.',
    pricing: [
      { title: "Standard Implant", price: "28,000", features: ["Consultation", "Standard Implant Placement", "Crown"] },
      { title: "Premium Implant", price: "45,000", features: ["3D CBCT Scan", "Premium Implant (Nobel Biocare/Straumann)", "Zirconia Crown", "Lifetime Warranty"], isPopular: true },
      { title: "All-on-4 (Full Arch)", price: "2,50,000", features: ["Comprehensive Planning", "4 Implants", "Fixed Prosthesis", "Lifetime Support"] }
    ],
    faqs: [
      { question: "Are implants safe?", answer: "Yes, dental implants have a success rate of over 95% and are considered the standard of care for missing teeth." },
      { question: "How long do implants last?", answer: "With proper care and good oral hygiene, dental implants can last a lifetime." }
    ],
    testimonials: [
      { id: 1, patient_name: "Sunitha Rao", text: "Painless experience and great care. Worth every penny for the confidence it gave me back.", rating: 5, treatment_name: "Implants" },
      { id: 2, patient_name: "Vikram S.", text: "The team made the implant process so smooth. My new tooth feels completely natural.", rating: 5, treatment_name: "Implants" }
    ],
    cases: [
      { beforeImg: "/images/cases/implants_before.png", afterImg: "/images/cases/implants_after.png", description: "Missing tooth replaced perfectly with a dental implant." }
    ],

    technology: [
      { title: "3D CBCT Scan", icon: "ScanLine" },
      { title: "Digital Smile Planning", icon: "Smile" },
      { title: "Computer Guided Surgery", icon: "Activity" },
      { title: "High Quality Implants", icon: "Award" }
    ],
    infographic: '/dental_implant_banner.png',
    infographicData: {
      title: "FULL MOUTH DENTAL IMPLANTS",
      description: "Full mouth dental implants replace all missing or failing teeth in the upper and/or lower jaw using strategically placed dental implants and a fixed set of prosthetic teeth.",
      benefits: [
        { text: "Restores full function and aesthetics", icon: "Smile" },
        { text: "Improves chewing and speech", icon: "MessageSquare" },
        { text: "Prevents bone loss", icon: "Shield" },
        { text: "Long-lasting, durable solution", icon: "ShieldCheck" }
      ],
      howItWorks: [
        { step: 1, title: "IMPLANT PLACEMENT", description: "Titanium implants are surgically placed into the jawbone. Typically 4-6 implants per arch." },
        { step: 2, title: "HEALING & OSSEOINTEGRATION", description: "Implants fuse with the bone over 3-6 months, creating a strong and stable foundation." },
        { step: 3, title: "FINAL RESTORATION", description: "A custom-made, fixed set of teeth is securely attached to the implants." }
      ],
      keyDetails: [
        { title: "Treatment Time", text: "3-9 months total (varies per patient)", icon: "Clock" },
        { title: "Implant Material", text: "Medical-grade titanium", icon: "Syringe" },
        { title: "Restoration", text: "Fixed full-arch implant bridge (non-removable)", icon: "Package" },
        { title: "Anesthesia", text: "Local anesthesia with sedation options", icon: "Bed" },
        { title: "Success Rate", text: "95-98%+ with proper care", icon: "Sparkles" },
        { title: "Lifespan", text: "20+ years with good oral hygiene and regular check-ups", icon: "Droplet" }
      ],
      aftercare: [
        { text: "Brush and floss daily around implants", icon: "Activity" },
        { text: "Use an antimicrobial mouthwash", icon: "Beaker" },
        { text: "Attend regular dental check-ups", icon: "Wrench" },
        { text: "Avoid smoking and excessive alcohol", icon: "CigaretteOff" },
        { text: "Maintain a healthy diet", icon: "Apple" }
      ]
    }
  },
  'braces': {
    title: 'Braces',
    hero_headline: 'Discover a Beautifully Aligned Smile in Hyderabad',
    hero_subheadline: 'Personalized orthodontic treatment plans for enhanced appearance and oral health.',
    aboutText: 'Braces are orthodontic devices designed to correct misaligned teeth and jaws. Consisting of brackets, wires, and sometimes rubber bands, braces gently exert pressure on teeth, guiding them into proper alignment over time. This proven method addresses various orthodontic issues, from crowded teeth to bite irregularities, providing a foundation for a healthier, more confident smile.',
    whenRequired: 'Braces are recommended for individuals with crooked teeth, crowded teeth, gaps, or bite irregularities such as overbites, underbites, and crossbites. Early intervention in adolescent years often yields optimal results, but braces can be effective at any age.',
    benefits: [
      'Improved Aesthetics: Achieve a straighter, more attractive smile.',
      'Enhanced Oral Health: Properly aligned teeth are easier to clean, reducing the risk of cavities and gum disease.',
      'Functional Improvement: Correcting bite issues enhances chewing efficiency and minimizes jaw strain.',
      'Boosted Confidence: A straight, beautiful smile contributes to a positive self-image.',
      'Prevention of Future Problems: Orthodontic treatment can prevent potential issues like speech difficulties and excessive wear on misaligned teeth.',
      'Customized Solutions: Modern braces come in various materials, including less noticeable options, catering to diverse preferences.'
    ],
    duration: 'The duration of braces treatment varies depending on the complexity of the case. On average, treatment can last from one to three years. Our experienced orthodontists carefully monitor progress throughout, ensuring the best possible outcome.',
    procedure: 'After an initial consultation and assessment, braces are custom-fitted to your teeth. Regular adjustments are scheduled to gradually shift teeth into their desired positions. Our team provides ongoing support, guidance, and personalized care throughout the entire process.',
    pricing: [
      { title: "Metal Braces", price: "30,000", features: ["Consultation", "Standard Metal Brackets", "Monthly Adjustments"] },
      { title: "Ceramic Braces", price: "50,000", features: ["Clear/Tooth-colored Brackets", "Less Noticeable", "Monthly Adjustments"], isPopular: true },
      { title: "Self-Ligating", price: "70,000", features: ["Advanced Technology", "Faster Results", "Fewer Appointments"] }
    ],
    faqs: [
      { question: "Do braces hurt?", answer: "You may experience mild discomfort for a few days after adjustments, but it is manageable and temporary." },
      { question: "Can adults get braces?", answer: "Absolutely! We offer various aesthetic options like ceramic braces that are perfect for adults." }
    ],
    testimonials: [
      { id: 1, patient_name: "Rahul M", text: "Dr. Nithin is amazing. My teeth are perfectly straight now!", rating: 5, treatment_name: "Braces" },
      { id: 2, patient_name: "Anjali K.", text: "I opted for ceramic braces and nobody even noticed I had them on most of the time.", rating: 5, treatment_name: "Braces" }
    ],
    cases: [
      { beforeImg: "/images/cases/braces_before.png", afterImg: "/images/cases/braces_after.png", description: "Crowding corrected and teeth perfectly aligned." }
    ],

    technology: [
      { title: "3D Intraoral Scanning", icon: "ScanLine" },
      { title: "Digital Treatment Planning", icon: "Smile" },
      { title: "Self-Ligating Brackets", icon: "Activity" },
      { title: "Memory Wire Tech", icon: "Award" }
    ],
    infographic: "/braces_banner.png",
    infographicData: {
      title: "ORTHODONTIC BRACES",
      description: "Traditional and ceramic braces are a proven, effective way to straighten teeth, correct bite issues, and create a perfectly aligned, healthy smile.",
      benefits: [
        { text: "Corrects complex bite issues", icon: "ShieldCheck" },
        { text: "Aligns crowded or crooked teeth", icon: "Smile" },
        { text: "Improves overall oral hygiene", icon: "Activity" },
        { text: "Provides a permanent, straight smile", icon: "Sparkles" }
      ],
      howItWorks: [
        { step: 1, title: "CONSULTATION & SCANS", description: "Digital scans and X-rays are taken to create a personalized, precise orthodontic treatment plan." },
        { step: 2, title: "BRACKET PLACEMENT", description: "Brackets are bonded to the teeth and connected with a wire that gently pulls them into place." },
        { step: 3, title: "REGULAR ADJUSTMENTS", description: "You visit the clinic every 4-6 weeks to have the wires tightened and adjusted as teeth move." }
      ],
      keyDetails: [
        { title: "Treatment Time", text: "12-24 months on average", icon: "Clock" },
        { title: "Options", text: "Metal, Ceramic (Clear), or Self-Ligating", icon: "Package" },
        { title: "Discomfort", text: "Mild pressure for 2-3 days after adjustments", icon: "Bed" },
        { title: "Maintenance", text: "Requires special brushing techniques", icon: "Syringe" },
        { title: "Success Rate", text: "Extremely high and predictable", icon: "Sparkles" },
        { title: "Retention", text: "Requires retainers after removal", icon: "Shield" }
      ],
      aftercare: [
        { text: "Brush after every single meal", icon: "Activity" },
        { text: "Use orthodontic floss or water flosser", icon: "Beaker" },
        { text: "Avoid sticky or very hard foods", icon: "Apple" },
        { text: "Attend all scheduled adjustments", icon: "Wrench" },
        { text: "Wear rubber bands as instructed", icon: "Smile" }
      ]
    }
  },
  'invisalign-treatment': {
    title: 'Invisalign Treatment',
    hero_headline: 'Clear Aligner Treatment in Hyderabad',
    hero_subheadline: 'Get a straight smile discreetly with Invisalign clear aligners.',
    aboutText: 'Invisalign treatment uses a series of custom-made, virtually invisible clear aligners to gradually shift your teeth into the desired position. It is a modern, aesthetic alternative to traditional metal braces, allowing you to achieve a beautiful smile without anyone knowing you are undergoing orthodontic treatment.',
    whenRequired: 'Invisalign is suitable for correcting mild to moderate crowding, spacing, and bite issues in teens and adults who prefer a discreet, removable option over traditional fixed braces.',
    benefits: [
      'Invisible: Clear aligners are virtually unnoticeable.',
      'Removable: Take them out to eat, drink, brush, and floss normally.',
      'Comfortable: Smooth plastic material avoids irritation to cheeks and gums.',
      'Predictable Results: Advanced 3D imaging allows you to see your final smile before starting.'
    ],
    duration: 'Treatment time averages 12 to 18 months, but can vary based on individual needs. You will wear each set of aligners for about 1-2 weeks before moving to the next set in the series.',
    procedure: 'We start with a 3D digital scan of your teeth. A custom treatment plan is created mapping out the exact movements. You receive your aligners and wear them for 20-22 hours a day, coming in for check-ups every 6-8 weeks.',
    pricing: [
      { title: "Basic", price: "1,50,000", features: ["Digital Scan", "Up to 14 Aligners", "Retainers included"] },
      { title: "Comprehensive", price: "2,50,000", features: ["Unlimited Aligners", "Complex bite correction", "Refinements included"], isPopular: true }
    ],
    faqs: [
      { question: "How many hours a day do I need to wear aligners?", answer: "For optimal results, aligners should be worn for 20-22 hours a day, removing them only for eating and cleaning." },
      { question: "Are they really invisible?", answer: "Yes, the aligners are made of clear, medical-grade plastic and are virtually invisible to others." }
    ],
    testimonials: [
      { id: 1, patient_name: "Meghana P.", text: "Invisalign was the best decision! It was so convenient and discreet.", rating: 5, treatment_name: "Invisalign" }
    ],
    cases: [
      { beforeImg: "/images/cases/invisalign_before.png", afterImg: "/images/cases/invisalign_after.png", description: "Mild crowding resolved completely with clear aligners." }
    ],

    technology: [
      { title: "iTero 3D Scanner", icon: "ScanLine" },
      { title: "ClinCheck Software", icon: "Smile" },
      { title: "SmartTrack Material", icon: "Award" },
      { title: "Vivera Retainers", icon: "ShieldCheck" }
    ],
    infographic: '/invisalign_banner.png',
    infographicData: {
      title: "INVISALIGN CLEAR ALIGNERS",
      description: "Invisalign uses a series of custom-made, virtually invisible clear plastic aligners to gently and gradually shift your teeth into perfect alignment.",
      benefits: [
        { text: "Virtually invisible to others", icon: "Smile" },
        { text: "Completely removable for eating", icon: "Apple" },
        { text: "Easier brushing and flossing", icon: "Activity" },
        { text: "More comfortable than metal braces", icon: "ShieldCheck" }
      ],
      howItWorks: [
        { step: 1, title: "3D DIGITAL SCAN", description: "A highly accurate 3D model of your teeth is created using an advanced intraoral scanner." },
        { step: 2, title: "CUSTOM ALIGNERS", description: "A series of custom clear aligners are manufactured based on your specific treatment plan." },
        { step: 3, title: "PROGRESSIVE SHIFTING", description: "You wear a new set of aligners every 1-2 weeks, gradually moving your teeth into place." }
      ],
      keyDetails: [
        { title: "Treatment Time", text: "6-18 months typically", icon: "Clock" },
        { title: "Material", text: "SmartTrack® clear medical-grade plastic", icon: "Package" },
        { title: "Wear Time", text: "Must wear 20-22 hours per day", icon: "Bed" },
        { title: "Diet Restrictions", text: "None! Just remove them to eat", icon: "Apple" },
        { title: "Success Rate", text: "Highly effective for mild to moderate cases", icon: "Sparkles" },
        { title: "Retention", text: "Vivera retainers required afterward", icon: "Shield" }
      ],
      aftercare: [
        { text: "Wear aligners 22 hours a day", icon: "Clock" },
        { text: "Remove aligners before eating or drinking", icon: "Apple" },
        { text: "Brush teeth before putting aligners back", icon: "Activity" },
        { text: "Clean aligners daily with soft brush", icon: "Beaker" },
        { text: "Keep them in the case when not worn", icon: "Package" }
      ]
    }
  },
  'pediatric-dentistry': {
    title: 'Pediatric Dentistry',
    hero_headline: 'Expert Pediatric Dentistry in Hyderabad',
    hero_subheadline: 'Gentle, fun, and specialized dental care for children of all ages.',
    aboutText: 'Pediatric dentistry focuses on the oral health of children from infancy through the teen years. Our kid-friendly environment and specialized pediatric dentists ensure that your child\'s dental visits are positive, building a foundation for a lifetime of healthy smiles.',
    whenRequired: 'Children should have their first dental visit by their first birthday or when their first tooth erupts. Regular check-ups are essential for preventing cavities, monitoring growth and development, and providing fluoride treatments and sealants.',
    benefits: [
      'Specialized Care: Dentists trained specifically in child behavior and dental development.',
      'Preventive Focus: Emphasis on sealants, fluoride, and education to prevent decay.',
      'Comfortable Environment: Kid-friendly clinic design to reduce anxiety.',
      'Early Intervention: Identifying and correcting orthodontic or developmental issues early.'
    ],
    duration: 'Routine check-ups take about 30-45 minutes. The duration of other treatments like fillings or pulpectomies varies based on the procedure.',
    procedure: 'A typical visit includes a gentle exam, teeth cleaning, fluoride application, and educating the child and parent on proper brushing and diet. We use kid-friendly terminology and tell-show-do techniques.',
    pricing: [
      { title: "Consultation", price: "500", features: ["Check-up", "Brushing Guidance"] },
      { title: "Preventive", price: "2,500", features: ["Cleaning", "Fluoride Application", "Dental Sealants"], isPopular: true }
    ],
    faqs: [
      { question: "When should my child first visit the dentist?", answer: "The first dental visit should be when the first tooth appears, or no later than their first birthday." },
      { question: "How often should kids have dental checkups?", answer: "We recommend regular checkups every 6 months to monitor growth and prevent cavities." }
    ],
    testimonials: [
      { id: 1, patient_name: "Priya V. (Mother of Aarav)", text: "The doctors are so gentle. My son actually looks forward to his dental visits now!", rating: 5, treatment_name: "Pediatric Dentistry" }
    ],
    cases: [
      { beforeImg: "/images/cases/pediatric_before.png", afterImg: "/images/cases/pediatric_after.png", description: "Childhood cavity painlessly cleaned and filled." }
    ],

    technology: [
      { title: "Low-Radiation X-Rays", icon: "ScanLine" },
      { title: "Painless Anesthesia", icon: "Smile" },
      { title: "Laser Dentistry", icon: "Activity" },
      { title: "Nitrous Oxide", icon: "ShieldCheck" }
    ],
    infographic: "/pediatric_banner.png",
    infographicData: {
      title: "PEDIATRIC DENTAL CARE",
      description: "Specialized, gentle dental care designed exclusively for children, focusing on prevention, education, and creating a positive, fear-free experience.",
      benefits: [
        { text: "Builds positive dental habits early", icon: "Smile" },
        { text: "Prevents cavities and tooth decay", icon: "Shield" },
        { text: "Monitors proper jaw development", icon: "Activity" },
        { text: "Fear-free, comfortable environment", icon: "Bed" }
      ],
      howItWorks: [
        { step: 1, title: "GENTLE INTRODUCTION", description: "We use 'tell-show-do' techniques to introduce dental tools in a fun, non-threatening way." },
        { step: 2, title: "PREVENTIVE CARE", description: "Thorough cleaning, fluoride applications, and protective sealants are applied to teeth." },
        { step: 3, title: "PARENT EDUCATION", description: "We educate both parent and child on proper brushing techniques and tooth-friendly diets." }
      ],
      keyDetails: [
        { title: "First Visit", text: "By age 1 or when first tooth appears", icon: "Clock" },
        { title: "Focus", text: "Prevention and education", icon: "Package" },
        { title: "Environment", text: "Child-friendly, colorful, and engaging", icon: "Smile" },
        { title: "Anesthesia", text: "Nitrous oxide (laughing gas) available", icon: "Bed" },
        { title: "Success Rate", text: "Highly effective cavity prevention", icon: "Sparkles" },
        { title: "Check-ups", text: "Recommended every 6 months", icon: "Activity" }
      ],
      aftercare: [
        { text: "Supervise brushing until age 7-8", icon: "Activity" },
        { text: "Use a pea-sized amount of fluoride toothpaste", icon: "Beaker" },
        { text: "Limit sugary snacks and drinks", icon: "Apple" },
        { text: "Maintain regular 6-month visits", icon: "Wrench" },
        { text: "Encourage drinking plenty of water", icon: "Droplet" }
      ]
    }
  },
  'smile-designing': {
    title: 'Smile Designing',
    hero_headline: 'Custom Smile Designing in Hyderabad',
    hero_subheadline: 'Transform your look with personalized cosmetic dentistry solutions.',
    aboutText: 'Smile Designing is a comprehensive cosmetic dental procedure aimed at improving the aesthetics of your smile. It combines art and science to analyze your facial structure, tooth color, size, and alignment to create a harmonious, beautiful smile tailored specifically for you.',
    whenRequired: 'This treatment is ideal for individuals unhappy with the appearance of their smile due to stained, chipped, misaligned, gapped, or uneven teeth. It is a highly personalized approach to achieving the perfect smile.',
    benefits: [
      'Customized Aesthetics: A smile designed to complement your unique facial features.',
      'Boosted Confidence: Feel proud to show off your new, flawless smile.',
      'Comprehensive Solution: Combines multiple treatments (veneers, whitening, crowns) for optimal results.',
      'Long-Lasting: High-quality materials ensure your new smile stays beautiful for years.'
    ],
    duration: 'The duration depends on the specific treatments involved in your smile design plan. It can range from a single visit for whitening to several weeks for custom veneers or crowns.',
    procedure: 'We begin with a detailed consultation, taking photographs and digital impressions. Using specialized software, we design your ideal smile. We can even provide a mock-up for you to "test drive" before proceeding with treatments like veneers, crowns, or teeth whitening.',
    pricing: [
      { title: "Basic Makeover", price: "40,000", features: ["Teeth Whitening", "Minor Contouring", "Basic Veneers"] },
      { title: "Hollywood Smile", price: "1,50,000", features: ["Digital Smile Design", "Premium E-max Veneers", "Gum Contouring"], isPopular: true }
    ],
    faqs: [
      { question: "Will my new smile look natural?", answer: "Yes, we customize the color, shape, and size to perfectly complement your facial features for a natural look." },
      { question: "Does it take a long time?", answer: "Depending on the complexity, a full smile makeover can often be completed in just 2-3 visits." }
    ],
    testimonials: [
      { id: 1, patient_name: "Karan D.", text: "I can't stop smiling! The veneers look incredibly natural. Best investment in myself.", rating: 5, treatment_name: "Smile Designing" }
    ],
    cases: [
      { beforeImg: "/images/cases/smile_design_before.png", afterImg: "/images/cases/smile_design_after.png", description: "Complete smile transformation with premium porcelain veneers." }
    ],

    technology: [
      { title: "Digital Smile Design", icon: "Smile" },
      { title: "3D Face Scanning", icon: "ScanLine" },
      { title: "Mock-up Trial", icon: "Activity" },
      { title: "Premium E-max", icon: "Award" }
    ],
    infographic: '/smile_banner.png',
    infographicData: {
      title: "DIGITAL SMILE DESIGN",
      description: "A comprehensive cosmetic makeover that utilizes advanced digital imaging and porcelain veneers to completely transform the shape, color, and alignment of your smile.",
      benefits: [
        { text: "Creates a perfectly symmetrical smile", icon: "Sparkles" },
        { text: "Corrects stains, chips, and gaps", icon: "ShieldCheck" },
        { text: "Boosts self-confidence immensely", icon: "Smile" },
        { text: "Highly durable and stain-resistant", icon: "Shield" }
      ],
      howItWorks: [
        { step: 1, title: "DIGITAL ANALYSIS", description: "Photos and 3D scans are taken. We digitally design your new smile to match your facial features." },
        { step: 2, title: "TRIAL SMILE (MOCK-UP)", description: "A temporary mock-up is placed over your teeth so you can 'test drive' your new smile before committing." },
        { step: 3, title: "FINAL VENEERS", description: "Custom ultra-thin porcelain veneers are permanently bonded to your natural teeth." }
      ],
      keyDetails: [
        { title: "Treatment Time", text: "2-3 visits over a few weeks", icon: "Clock" },
        { title: "Material", text: "Premium E-max Porcelain Veneers", icon: "Package" },
        { title: "Customization", text: "100% personalized shape and shade", icon: "Smile" },
        { title: "Anesthesia", text: "Local anesthesia for preparation phase", icon: "Bed" },
        { title: "Success Rate", text: "Extremely high patient satisfaction", icon: "Sparkles" },
        { title: "Lifespan", text: "10-15+ years with proper care", icon: "Droplet" }
      ],
      aftercare: [
        { text: "Brush and floss daily", icon: "Activity" },
        { text: "Use a non-abrasive toothpaste", icon: "Beaker" },
        { text: "Avoid biting very hard objects (e.g., ice, pens)", icon: "Apple" },
        { text: "Wear a nightguard if you grind your teeth", icon: "Bed" },
        { text: "Attend regular cleanings", icon: "Wrench" }
      ]
    }
  },
  'full-mouth-rehabilitation': {
    title: 'Full Mouth Rehabilitation',
    hero_headline: 'Complete Full Mouth Rehabilitation in Hyderabad',
    hero_subheadline: 'Restore function, health, and beauty to heavily damaged teeth.',
    aboutText: 'Full Mouth Rehabilitation (or reconstruction) is an extensive treatment plan designed to rebuild or simultaneously restore all of the teeth in both the upper and lower jaws. It addresses complex dental issues involving missing teeth, severe wear, bite problems, and jaw joint disorders.',
    whenRequired: 'This is necessary for patients with multiple missing teeth, large fillings that are failing, teeth exhibiting severe wear from grinding (bruxism), or those suffering from chronic jaw pain or TMJ disorders.',
    benefits: [
      'Restored Function: Ability to chew and speak properly again.',
      'Pain Relief: Alleviates chronic jaw pain and headaches associated with bite issues.',
      'Complete Aesthetics: A brand new, healthy, and beautiful smile.',
      'Improved Overall Health: Eliminates oral infections and improves nutrition through better chewing.'
    ],
    duration: 'Because it involves multiple complex procedures, full mouth rehabilitation can take several months to complete. The timeline is carefully planned to allow for healing between phases.',
    procedure: 'The process involves comprehensive diagnostics, including 3D scans and bite analysis. The treatment plan is executed in phases, which may include periodontal care, implants, crowns, bridges, and sometimes orthodontics, all coordinated to rebuild your oral health completely.',
    pricing: [
      { title: "Consultation", price: "2,000", features: ["3D Scan", "Detailed Treatment Plan", "Specialist Consultation"] },
      { title: "Rehabilitation", price: "Custom", features: ["Implants", "Crowns/Bridges", "Bite Correction", "Lifetime Support"], isPopular: true }
    ],
    faqs: [
      { question: "Is full mouth rehabilitation painful?", answer: "We ensure you are completely comfortable throughout the process using advanced anesthesia and sedation options if necessary." },
      { question: "How long does the whole process take?", answer: "Because it is comprehensive, it is done in phases over several weeks or months to ensure proper healing and perfect results." }
    ],
    testimonials: [
      { id: 1, patient_name: "Rajendra Reddy", text: "After years of suffering, I can finally eat normally and smile with confidence again. The team changed my life.", rating: 5, treatment_name: "Full Mouth Rehab" }
    ],
    cases: [
      { beforeImg: "/images/cases/fmr_before.png", afterImg: "/images/cases/fmr_after.png", description: "Severe wear and missing teeth restored entirely." }
    ],

    technology: [
      { title: "3D CBCT Imaging", icon: "ScanLine" },
      { title: "T-Scan Bite Analysis", icon: "Activity" },
      { title: "CAD/CAM Restorations", icon: "Award" },
      { title: "Guided Implantology", icon: "ShieldCheck" }
    ],
    infographic: "/full_banner.png",
    infographicData: {
      title: "FULL MOUTH REHABILITATION",
      description: "An extensive, phased treatment plan that completely rebuilds and restores all teeth in the mouth, combining implants, crowns, and bite correction.",
      benefits: [
        { text: "Completely restores chewing ability", icon: "Apple" },
        { text: "Relieves chronic jaw and TMJ pain", icon: "Smile" },
        { text: "Rebuilds worn down or broken teeth", icon: "ShieldCheck" },
        { text: "Delivers a stunning aesthetic makeover", icon: "Sparkles" }
      ],
      howItWorks: [
        { step: 1, title: "COMPREHENSIVE DIAGNOSIS", description: "Extensive 3D imaging, bite analysis, and joint health assessments to create a master blueprint." },
        { step: 2, title: "FOUNDATION PHASE", description: "Addressing gum health, extracting hopeless teeth, and placing implants where necessary." },
        { step: 3, title: "FINAL RECONSTRUCTION", description: "Placing custom crowns, bridges, and implant prosthetics to restore the bite and aesthetics." }
      ],
      keyDetails: [
        { title: "Treatment Time", text: "Several months to a year (phased)", icon: "Clock" },
        { title: "Materials", text: "Zirconia, Titanium Implants, E-max", icon: "Package" },
        { title: "Scope", text: "Involves every tooth in the mouth", icon: "Syringe" },
        { title: "Anesthesia", text: "Local, conscious sedation, or general", icon: "Bed" },
        { title: "Success Rate", text: "Life-changing functional improvement", icon: "Sparkles" },
        { title: "Lifespan", text: "Long-term solution (20+ years)", icon: "Shield" }
      ],
      aftercare: [
        { text: "Strict daily oral hygiene routine", icon: "Activity" },
        { text: "Use a water flosser around implants", icon: "Beaker" },
        { text: "Wear a protective nightguard", icon: "Bed" },
        { text: "Attend frequent maintenance visits", icon: "Wrench" },
        { text: "Avoid extremely hard or sticky foods", icon: "Apple" }
      ]
    }
  },
  'teeth-cleaning-scaling': {
    title: 'Teeth Cleaning & Scaling',
    hero_headline: 'Professional Teeth Cleaning & Scaling in Hyderabad',
    hero_subheadline: 'Restore the natural shine of your teeth and maintain optimal gum health.',
    aboutText: 'Professional teeth cleaning, scaling, and polishing is a fundamental preventive procedure that removes accumulated plaque and tartar (calculus) from your teeth, especially in hard-to-reach areas. This helps prevent gum disease, cavities, and bad breath.',
    whenRequired: 'It is recommended to get a professional dental cleaning every 6 months to maintain healthy gums and prevent periodontal diseases.',
    benefits: [
      'Removes Plaque and Tartar: Prevents cavities and gum infections.',
      'Fresh Breath: Eliminates bacteria that cause bad breath (halitosis).',
      'Removes Surface Stains: Clears tea, coffee, and tobacco stains.',
      'Prevents Gum Disease: Stops bleeding gums and bone loss.'
    ],
    duration: 'Typically completed in a single 30-45 minute session.',
    procedure: 'Using advanced ultrasonic scalers, the dentist gently removes tartar and plaque from the teeth and gum line, followed by polishing to smooth the enamel surface.',
    pricing: [
      { title: "Standard Scaling", price: "1,500", features: ["Full Mouth Scaling", "Polishing", "Consultation"] }
    ],
    faqs: [
      { question: "Is scaling painful?", answer: "No, it is a non-invasive procedure. You may feel mild vibration and water spray, but no pain." },
      { question: "Does scaling weaken teeth?", answer: "No, this is a myth. Scaling only removes harmful deposits, protecting your teeth and gums." }
    ],
    testimonials: [
      { id: 1, patient_name: "Suresh P.", text: "Quick and professional scaling. My teeth feel incredibly clean!", rating: 5, treatment_name: "Teeth Cleaning" }
    ],
    cases: [
      { beforeImg: "/images/gums_before.png", afterImg: "/images/gums_after.png", description: "Plaque and tartar removed, revealing healthy gums." }
    ]
  },
  'wisdom-tooth-extraction': {
    title: 'Wisdom Tooth Extraction',
    hero_headline: 'Painless Wisdom Tooth Extraction in Hyderabad',
    hero_subheadline: 'Relieve pain and prevent alignment issues with gentle, specialized wisdom teeth removal.',
    aboutText: 'Wisdom tooth extraction is a common surgical procedure to remove one or more of the third molars (wisdom teeth) located at the back corners of your mouth. Extraction is often needed when these teeth are impacted, causing pain, infection, or crowding.',
    whenRequired: 'Required when wisdom teeth fail to emerge properly (impaction), grow at an incorrect angle, cause pain, swelling, cyst formation, or damage adjacent teeth.',
    benefits: [
      'Relieves Pain: Alleviates chronic pressure and jaw ache.',
      'Prevents Infection: Eliminates pockets where food and bacteria collect.',
      'Protects Neighboring Teeth: Prevents decay and root damage to adjacent molars.',
      'Avoids Crowding: Prevents alignment issues in the rest of the teeth.'
    ],
    duration: 'Takes about 30 to 60 minutes depending on case complexity.',
    procedure: 'Conducted under local anesthesia. The dentist or oral surgeon gently exposes the bone and tooth, extracts the tooth, cleans the site, and places sutures if needed.',
    pricing: [
      { title: "Simple Extraction", price: "3,000", features: ["Local Anesthesia", "Extraction", "Post-op Check"] },
      { title: "Surgical Extraction", price: "6,000", features: ["Impacted Tooth Removal", "Suturing", "Specialist Oral Surgeon"], isPopular: true }
    ],
    faqs: [
      { question: "Is wisdom tooth extraction painful?", answer: "The procedure is completely painless as it is done under local anesthesia. Some post-op soreness is expected and managed with pain relievers." }
    ],
    testimonials: [
      { id: 1, patient_name: "Naveen K.", text: "I was scared of the extraction, but the oral surgeon was so quick and painless!", rating: 5, treatment_name: "Wisdom Tooth" }
    ],
    cases: [
      { beforeImg: "/images/cases/rct_xray_before.png", afterImg: "/images/cases/rct_xray_after.png", description: "Impacted wisdom tooth extracted successfully." }
    ]
  },
  'advanced-gum-treatment': {
    title: 'Advanced Gum Treatment',
    hero_headline: 'Periodontal Therapy & Flap Surgery in Hyderabad',
    hero_subheadline: 'Treat gum infections, stop bleeding, and secure loose teeth with advanced periodontal care.',
    aboutText: 'Advanced gum treatment (periodontics) focuses on treating infections of the gums and supporting bone structures. When gum disease progresses to periodontitis, deep cleaning (root planing) or surgical interventions like flap surgery are required to clean infected root surfaces and reduce pockets.',
    whenRequired: 'Indicated for bleeding gums, chronic bad breath, receding gum lines, deep gum pockets, or loose teeth due to bone loss.',
    benefits: [
      'Stops Gum Bleeding: Restores healthy pink gums.',
      'Saves Loose Teeth: Strengthens the bone support around your teeth.',
      'Freshens Breath: Eliminates deep pockets of bacteria.',
      'Protects Overall Health: Reduces the risk of systemic inflammation linked to heart disease.'
    ],
    duration: 'Usually completed in 2 to 4 sessions depending on the severity.',
    procedure: 'Deep cleaning (scaling & root planing) is performed, and in advanced cases, gum flap surgery is done to access and clean deep root areas, often utilizing lasers for sterile healing.',
    pricing: [
      { title: "Deep Root Planing", price: "4,000", features: ["Deep Scaling", "Root Planing", "Laser Sterilization"] },
      { title: "Flap Surgery (per quadrant)", price: "8,000", features: ["Flap Access", "Debridement", "Bone Grafting if needed"], isPopular: true }
    ],
    faqs: [
      { question: "What is flap surgery?", answer: "It is a routine procedure where gums are gently lifted back to clean deep tartar deposits on the roots, then sutured back in place for healthy reattachment." }
    ],
    testimonials: [
      { id: 1, patient_name: "Venkatesh M.", text: "My bleeding gums have completely healed. The treatment saved my teeth!", rating: 5, treatment_name: "Gum Treatment" }
    ],
    cases: [
      { beforeImg: "/images/gums_before.png", afterImg: "/images/gums_after.png", description: "Gums restored to healthy status after periodontal flap surgery." }
    ]
  },
  'tooth-decay-fillings': {
    title: 'Tooth Decay & Fillings',
    hero_headline: 'Composite Tooth Fillings in Hyderabad',
    hero_subheadline: 'Repair cavities and restore tooth strength with natural-looking, mercury-free composite fillings.',
    aboutText: 'Tooth fillings are used to treat cavities caused by decay, restoring the damaged tooth structure back to its normal shape and function. We use advanced, tooth-colored composite resins that blend seamlessly with your natural teeth and provide strong durability.',
    whenRequired: 'Required when you have cavities, black spots on teeth, food lodging, or mild sensitivity due to enamel erosion.',
    benefits: [
      'Natural Appearance: Tooth-colored composite matches your enamel.',
      'Prevents Further Decay: Seals the cavity to stop bacteria.',
      'Restores Strength: Strengthens the tooth structure for chewing.',
      'Mercury-Free: Safe, modern materials.'
    ],
    duration: 'Takes 20 to 30 minutes per tooth.',
    procedure: 'The decayed portion of the tooth is gently cleaned out, and the cavity is filled with composite resin, which is then cured with a special blue light and polished.',
    pricing: [
      { title: "Composite Filling", price: "1,500", features: ["Laser Prep Option", "High-Quality Resin", "Polishing"] }
    ],
    faqs: [
      { question: "How long do composite fillings last?", answer: "With good oral hygiene, modern composite fillings typically last 5 to 10 years or more." }
    ],
    testimonials: [
      { id: 1, patient_name: "Swathi T.", text: "The filling matches my tooth color perfectly. I can't even see where the cavity was!", rating: 5, treatment_name: "Fillings" }
    ],
    cases: [
      { beforeImg: "/images/cases/root_canal_before.png", afterImg: "/images/cases/root_canal_after.png", description: "Cavity restored with invisible composite filling." }
    ]
  },
  'hybrid-dentures': {
    title: 'Hybrid & Full Mouth Dentures',
    hero_headline: 'Premium Full Mouth Dentures in Hyderabad',
    hero_subheadline: 'Regain your smile, chewing power, and confidence with fixed or BPS dentures.',
    aboutText: 'Full dentures and hybrid dentures are custom-made prosthetics designed to replace all missing teeth in the upper or lower jaw. Hybrid dentures are secured by dental implants, providing a completely fixed, non-slip solution that behaves exactly like natural teeth.',
    whenRequired: 'Indicated for complete tooth loss in one or both jaws, or when remaining teeth are failing and need extraction.',
    benefits: [
      'Restores Chewing Ability: Eat your favorite foods with confidence.',
      'No Slipping or Clicking: Fixed implant-supported dentures stay secure.',
      'Natural Aesthetics: Restores youthful facial structure and look.',
      'Durable and Comfortable: Custom-fit using premium materials.'
    ],
    duration: 'Takes 2 to 4 weeks depending on customizations and healing.',
    procedure: 'Impressions or digital scans of the jaws are taken to design the base and teeth position. The final denture is fabricated, tried in, and adjusted for a perfect fit.',
    pricing: [
      { title: "BPS Dentures (Single Arch)", price: "35,000", features: ["BPS High-Strength Acrylic", "Precise Fit", "Natural Look"] },
      { title: "Implant Overdenture", price: "1,20,000", features: ["2-4 Implants", "Locators/Semi-Fixed", "Enhanced Stability"], isPopular: true }
    ],
    faqs: [
      { question: "What is a hybrid denture?", answer: "A hybrid denture is a fixed set of teeth supported by 4 to 6 dental implants. It is bolted in place and can only be removed by a dentist, offering ultimate stability." }
    ],
    testimonials: [
      { id: 1, patient_name: "Ramarao Y.", text: "The implant-supported dentures are amazing. They don't slip at all when I eat!", rating: 5, treatment_name: "Dentures" }
    ],
    cases: [
      { beforeImg: "/images/cases/fmr_before.png", afterImg: "/images/cases/fmr_after.png", description: "Complete smile rebuilt with implant-supported dentures." }
    ]
  },
  'bad-breath-halitosis': {
    title: 'Bad Breath & Halitosis',
    hero_headline: 'Effective Bad Breath & Halitosis Treatment',
    hero_subheadline: 'Eliminate chronic bad breath and restore your oral confidence with targeted antibacterial care.',
    aboutText: 'Halitosis, or chronic bad breath, is often caused by sulfur-producing bacteria accumulating on the tongue, gums, and between teeth. Our targeted bad breath treatment identifies the root cause—such as gum disease, dry mouth, or plaque—and eliminates it using advanced clinical hygiene methods.',
    whenRequired: 'Recommended if you suffer from persistent bad breath that does not go away with brushing, a constant bad taste in the mouth, or chronic dry mouth.',
    benefits: [
      'Fresh, Clean Breath: Eliminates sulfur-producing bacteria.',
      'Boosts Confidence: Smile and speak closely without worry.',
      'Improved Gum Health: Removes underlying plaque and tartar.',
      'Detailed Diagnostics: Finds the exact cause of halitosis.'
    ],
    duration: 'Usually resolved in 1 to 2 visits.',
    procedure: 'A clinical evaluation is conducted, followed by deep scaling, tongue cleaning, and the application of specialized antibacterial washes.',
    pricing: [
      { title: "Halitosis Package", price: "2,000", features: ["Detailed Assessment", "Full Scaling & Tongue Clean", "Antibacterial Kit"] }
    ],
    faqs: [
      { question: "Why do I have bad breath despite brushing?", answer: "Plaque and bacteria can hide deep between teeth, on the back of the tongue, or in gum pockets where normal brushing cannot reach." }
    ],
    testimonials: [
      { id: 1, patient_name: "Prasad G.", text: "The bad breath treatment was highly effective. I feel much more confident now!", rating: 5, treatment_name: "Bad Breath" }
    ],
    cases: [
      { beforeImg: "/images/gums_before.png", afterImg: "/images/gums_after.png", description: "Plaque-free teeth and tongue resolving halitosis." }
    ]
  },
  'dental-crown-bridges': {
    title: 'Dental Crown & Bridges',
    hero_headline: 'Premium Zirconia Crowns & Bridges in Hyderabad',
    hero_subheadline: 'Protect damaged teeth and fill gaps with natural-looking CAD/CAM restorations.',
    aboutText: 'Dental crowns are protective caps placed over damaged or weak teeth to restore their strength and shape. A dental bridge replaces one or more missing teeth by anchoring to neighboring healthy teeth. We use premium metal-free Zirconia and E-max ceramics for high strength and natural translucency.',
    whenRequired: 'Indicated for fractured teeth, root-canal-treated teeth, large fillings, or to replace missing teeth.',
    benefits: [
      'Durable and Strong: Protects weak teeth from fracturing.',
      'Metal-Free Options: Zirconia and E-max look exactly like natural enamel.',
      'Restores Chewing: Fill gaps to chew comfortably on both sides.',
      'CAD/CAM Precision: Perfect fit using digital dental technology.'
    ],
    duration: 'Takes 2 visits over 3 to 5 days.',
    procedure: 'The tooth is prepared and shaped. A digital or physical impression is taken to fabricate the custom crown in a lab, which is permanently cemented on the second visit.',
    pricing: [
      { title: "Standard Crown", price: "5,000", features: ["Metal-Ceramic (PFM)", "5-Year Warranty"] },
      { title: "Premium Zirconia", price: "12,000", features: ["CAD/CAM Zirconia", "15-Year Warranty", "High Aesthetics"], isPopular: true }
    ],
    faqs: [
      { question: "Is a crown necessary after a Root Canal?", answer: "Yes, teeth become brittle after root canals. A crown covers and protects the tooth from cracking under chewing forces." }
    ],
    testimonials: [
      { id: 1, patient_name: "Madhavi L.", text: "The zirconia bridge looks identical to my natural teeth. Perfect shade matching!", rating: 5, treatment_name: "Crowns" }
    ],
    cases: [
      { beforeImg: "/images/cases/root_canal_before.png", afterImg: "/images/cases/root_canal_after.png", description: "Cracked tooth restored with premium Zirconia crown." }
    ]
  },
  'frenectomy': {
    title: 'Frenectomy',
    hero_headline: 'Laser Frenectomy Treatment in Hyderabad',
    hero_subheadline: 'Painless laser correction for tongue-tie and lip-tie with immediate relief.',
    aboutText: 'A frenectomy is a simple procedure that removes or releases a small fold of tissue (frenum) under the tongue or upper lip. When this tissue is too tight, it causes tongue-tie or lip-tie, impacting speech, eating, or causing gap teeth. We perform this painlessly using advanced soft-tissue lasers with zero bleeding.',
    whenRequired: 'Required for infants with latching issues, children with speech impediments (tongue-tie), or orthodontic patients with a wide gap between front teeth.',
    benefits: [
      'Painless Laser Procedure: No scalpel, no stitches, and minimal discomfort.',
      'Immediate Relief: Improved tongue movement or lip latching.',
      'Quick Healing: Laser sterilizes the area for rapid recovery.',
      'Zero Bleeding: Safe for infants and children.'
    ],
    duration: 'Takes only 10 to 15 minutes.',
    procedure: 'A local anesthetic gel is applied, and a precise dental laser is used to gently release the tissue band in seconds.',
    pricing: [
      { title: "Laser Frenectomy", price: "5,000", features: ["Laser Technology", "Consultation", "Zero Sutures"] }
    ],
    faqs: [
      { question: "Is there a healing period?", answer: "Healing is very fast with lasers. Mild soreness lasts 1-2 days, and stretches are recommended to prevent reattachment." }
    ],
    testimonials: [
      { id: 1, patient_name: "Sujatha (Mother of Hemanth)", text: "My baby had tongue-tie and couldn't feed. The laser procedure took 5 minutes and solved it completely!", rating: 5, treatment_name: "Frenectomy" }
    ],
    cases: [
      { beforeImg: "/images/cases/pediatric_before.png", afterImg: "/images/cases/pediatric_after.png", description: "Tight labial frenum released, allowing closing of front gap." }
    ]
  },
  'cosmetic-dentistry': {
    title: 'Cosmetic Dentistry',
    hero_headline: 'Advanced Cosmetic Dentistry in Hyderabad',
    hero_subheadline: 'Create your perfect smile with custom aesthetic bonding, contouring, and gum lifting.',
    aboutText: 'Cosmetic dentistry encompasses procedures designed to enhance the visual appeal of your smile. This includes composite bonding to repair chips, diastema closure to fill gaps, gum depigmentation, and teeth contouring for symmetrical, beautiful teeth.',
    whenRequired: 'For individuals seeking to correct cosmetic flaws like chipped teeth, gaps between teeth, dark gums, or uneven tooth shapes.',
    benefits: [
      'Flawless Smile: Corrects chips, gaps, and shape issues.',
      'Instant Enhancements: Composite bonding is completed in a single visit.',
      'Symmetrical Gum Line: Gum contouring shapes a gummy smile.',
      'Stain-Resistant Materials: High-quality cosmetic resins.'
    ],
    duration: 'Varies from 30 minutes (bonding) to 2 visits (veneers).',
    procedure: 'Minimal tooth preparation is done, followed by custom sculpting of cosmetic composite or placement of custom veneers to match your aesthetic goals.',
    pricing: [
      { title: "Cosmetic Bonding (per tooth)", price: "2,500", features: ["Composite Sculpting", "Polishing", "Shade Match"] },
      { title: "Gum Depigmentation", price: "10,000", features: ["Laser Gum Bleaching", "Pink Gums", "Symmetrical Line"], isPopular: true }
    ],
    faqs: [
      { question: "What is teeth bonding?", answer: "It is a procedure where tooth-colored composite resin is applied and shaped on your tooth to fix chips or close gaps, completing in just one visit." }
    ],
    testimonials: [
      { id: 1, patient_name: "Ria S.", text: "They closed the gap between my front teeth in just 30 minutes! It looks so natural.", rating: 5, treatment_name: "Cosmetic Dentistry" }
    ],
    cases: [
      { beforeImg: "/images/cases/smile_design_before.png", afterImg: "/images/cases/smile_design_after.png", description: "Tooth gaps closed with cosmetic composite bonding." }
    ]
  },
  'laser-dentistry': {
    title: 'Laser Dentistry',
    hero_headline: 'Minimally Invasive Laser Dentistry in Hyderabad',
    hero_subheadline: 'Experience suture-free, drill-free, and pain-free dental care with advanced laser tech.',
    aboutText: 'Laser dentistry uses highly focused light beams to perform various dental procedures. Lasers can be used for cavity preparation, gum shaping, sterilization of root canals, and lesion removal, eliminating the need for loud drills and invasive scalpels.',
    whenRequired: 'Ideal for patients seeking a more comfortable, quiet, and painless treatment option, especially those with dental anxiety.',
    benefits: [
      'Painless and Comfortable: Often requires little or no anesthesia.',
      'No Loud Drills: Reduces anxiety during cavity treatments.',
      'Faster Recovery: Promotes blood clotting and tissue regeneration.',
      'Sterile Procedures: Minimizes risk of post-treatment infections.'
    ],
    duration: 'Varies based on the procedure; generally faster than traditional methods.',
    procedure: 'A specialized dental laser is calibrated and used by a certified laser dentist to precisely treat soft or hard tissues.',
    pricing: [
      { title: "Laser Procedure Add-on", price: "2,000", features: ["Laser Sterilization", "Reduced Sensitivity", "Painless Tech"] }
    ],
    faqs: [
      { question: "Are dental lasers safe?", answer: "Yes, dental lasers are highly safe and approved by the FDA. Specialized safety goggles are worn during the procedure." }
    ],
    testimonials: [
      { id: 1, patient_name: "Abhinav D.", text: "No injection and no drill for my cavity filling! Laser dentistry is amazing.", rating: 5, treatment_name: "Laser Dentistry" }
    ],
    cases: [
      { beforeImg: "/images/cases/root_canal_before.png", afterImg: "/images/cases/root_canal_after.png", description: "Decay cleaned precisely using hard-tissue dental laser." }
    ]
  },
  'jaw-surgery': {
    title: 'Jaw Surgery',
    hero_headline: 'Orthognathic Jaw Surgery in Hyderabad',
    hero_subheadline: 'Correct severe bite issues, jaw misalignment, and facial asymmetry with expert surgery.',
    aboutText: 'Orthognathic surgery, or corrective jaw surgery, is performed by oral and maxillofacial surgeons to correct skeletal irregularities of the upper and lower jaws. This procedure improves chewing, speaking, and breathing, while dramatically enhancing facial aesthetics.',
    whenRequired: 'Indicated for severe overbites, underbites, open bites, facial asymmetry, or sleep apnea that cannot be treated with braces alone.',
    benefits: [
      'Corrects Skeletal Bite: Aligns upper and lower jaws perfectly.',
      'Improves Chewing and Speech: Restores normal oral functions.',
      'Enhances Facial Balance: Creates a harmonious jawline profile.',
      'Relieves TMJ & Sleep Apnea: Opens airways and relieves joint strain.'
    ],
    duration: 'Surgical phase takes 2 to 4 hours; full recovery takes several weeks.',
    procedure: 'Performed in a hospital setting under general anesthesia. The surgeon repositions the jawbones using virtual 3D planning guides, securing them with miniature plates and screws.',
    pricing: [
      { title: "Surgical Planning", price: "10,000", features: ["3D Face Scan", "Surgical Guides", "Consultation"] },
      { title: "Jaw Correction Surgery", price: "Custom", features: ["Maxillofacial Surgeon", "Hospitalization", "Follow-up Care"], isPopular: true }
    ],
    faqs: [
      { question: "Do I need braces with jaw surgery?", answer: "Yes, orthognathic surgery is usually combined with orthodontic treatment (braces) before and after surgery to align the teeth with the new jaw positions." }
    ],
    testimonials: [
      { id: 1, patient_name: "Deepak R.", text: "Corrected my severe underbite. The surgery completely changed my profile and chewing!", rating: 5, treatment_name: "Jaw Surgery" }
    ],
    cases: [
      { beforeImg: "/images/cases/implants_before.png", afterImg: "/images/cases/implants_after.png", description: "Severe bite misalignment corrected surgically." }
    ]
  },
  'genioplasty': {
    title: 'Genioplasty',
    hero_headline: 'Cosmetic Chin Reshaping in Hyderabad',
    hero_subheadline: 'Enhance your jawline and facial symmetry with custom surgical chin correction.',
    aboutText: 'Genioplasty is a surgical cosmetic procedure that reshapes the chin to improve facial harmony and profile balance. The chin can be advanced (moved forward), receded (moved back), or lengthened/shortened to complement your nose, lips, and jaw structure.',
    whenRequired: 'For patients with a receding chin (weak chin), excessively protruding chin, or chin asymmetry.',
    benefits: [
      'Improves Facial Profile: Restores balance between the chin, nose, and lips.',
      'Surgical Precision: Custom bony movements for a natural, permanent look.',
      'Improves Jawline Definition: Tightens the neck and jawline tissue.',
      'Permanent Results: No need for temporary dermal fillers.'
    ],
    duration: 'Takes 1 to 2 hours under general anesthesia.',
    procedure: 'An incision is made inside the mouth (no external scars). The chin bone is cut, shifted to the planned position, and secured with a tiny titanium plate.',
    pricing: [
      { title: "Genioplasty Surgery", price: "Custom", features: ["Virtual 3D Simulation", "Maxillofacial Surgeon", "No External Scars"] }
    ],
    faqs: [
      { question: "Will there be scars on my face?", answer: "No, the entire procedure is performed from inside the lower lip, so there are absolutely no visible scars on your face." }
    ],
    testimonials: [
      { id: 1, patient_name: "Sanjana P.", text: "Reshaped my receding chin. My jawline looks so much more defined now!", rating: 5, treatment_name: "Genioplasty" }
    ],
    cases: [
      { beforeImg: "/images/cases/smile_design_before.png", afterImg: "/images/cases/smile_design_after.png", description: "Profile projection restored with chin advancement genioplasty." }
    ]
  },
  'mouth-ulcers': {
    title: 'Mouth Ulcers',
    hero_headline: 'Laser Mouth Ulcer Treatment in Hyderabad',
    hero_subheadline: 'Get instant pain relief and accelerate healing of painful mouth sores with laser therapy.',
    aboutText: 'Mouth ulcers or canker sores are painful lesions in the mouth that make eating and speaking difficult. We offer advanced low-level laser therapy (photobiomodulation) that instantly numbs the ulcer pain and cuts healing time in half, completed in a 2-minute clinical sitting.',
    whenRequired: 'Recommended if you have painful ulcers, recurring canker sores, or sores from sharp teeth/braces irritation.',
    benefits: [
      'Instant Pain Relief: Laser blocks nerve pain pathways immediately.',
      'Accelerated Healing: Promotes tissue healing and cell regeneration.',
      '2-Minute Treatment: Extremely fast, non-contact laser application.',
      'Prevents Recurrence: Sterilizes the ulcer site.'
    ],
    duration: 'Takes less than 5 minutes in the clinic.',
    procedure: 'A gentle, low-energy dental laser is pointed at the ulcer for 60-90 seconds. The patient feels a mild warm sensation and immediate relief.',
    pricing: [
      { title: "Laser Ulcer Treatment", price: "1,000", features: ["Instant Relief", "Laser Therapy", "Home Gel Included"] }
    ],
    faqs: [
      { question: "Does the laser touch the ulcer?", answer: "No, the laser tip is held a few millimeters away. It is a completely non-contact, painless treatment." }
    ],
    testimonials: [
      { id: 1, patient_name: "Divya K.", text: "I had a huge ulcer and couldn't eat. The laser therapy removed the pain instantly!", rating: 5, treatment_name: "Mouth Ulcers" }
    ],
    cases: [
      { beforeImg: "/images/gums_before.png", afterImg: "/images/gums_after.png", description: "Severe mouth ulcer healed within 24 hours of laser treatment." }
    ]
  },
  'preventive-dentistry': {
    title: 'Preventive Dentistry',
    hero_headline: 'Comprehensive Preventive Dentistry in Hyderabad',
    hero_subheadline: 'Shield your teeth from cavities and maintain healthy gums with proactive dental care.',
    aboutText: 'Preventive dentistry focuses on maintaining oral health to prevent cavities, gum disease, and enamel wear. Key treatments include dental sealants to protect chewing surfaces, fluoride therapy to strengthen enamel, and custom nightguards to prevent teeth grinding.',
    whenRequired: 'Ideal for patients of all ages who want to avoid dental problems, especially children with growing permanent molars.',
    benefits: [
      'Prevents Cavities: Pit and fissure sealants block food packing.',
      'Strengthens Enamel: Fluoride varnishes re-mineralize weak spots.',
      'Saves Treatment Costs: Proactive care avoids expensive root canals or extractions.',
      'Protects Teeth from Wear: Custom nightguards prevent damage from grinding.'
    ],
    duration: 'Typically completed in a 30-minute appointment.',
    procedure: 'Teeth are cleaned, and thin protective resins (sealants) are cured on chewing surfaces, or a highly concentrated fluoride varnish is applied.',
    pricing: [
      { title: "Dental Sealant (per tooth)", price: "1,200", features: ["Cavity Protection", "Pit & Fissure Sealing", "Quick Fit"] },
      { title: "Fluoride Therapy (Full Mouth)", price: "2,500", features: ["Enamel Remineralization", "Sensitivity Protection"], isPopular: true }
    ],
    faqs: [
      { question: "What are dental sealants?", answer: "They are thin, protective plastic coatings painted on the chewing surfaces of back teeth (molars) to prevent decay by sealing out food and plaque." }
    ],
    testimonials: [
      { id: 1, patient_name: "Arjun S.", text: "Got sealants done for my daughter. It is a great way to keep her teeth cavity-free!", rating: 5, treatment_name: "Preventive Care" }
    ],
    cases: [
      { beforeImg: "/images/cases/pediatric_before.png", afterImg: "/images/cases/pediatric_after.png", description: "Dental sealants applied to molars, blocking decay." }
    ]
  },
  'teeth-whitening': {
    title: 'Teeth Whitening',
    hero_headline: 'Advanced Laser Teeth Whitening in Hyderabad',
    hero_subheadline: 'Brighten your smile by up to 8 shades in a single comfortable visit.',
    aboutText: 'Teeth Whitening is the quickest, most effective way to brighten your smile. Over time, consumption of coffee, tea, red wine, and smoking can stain the outer enamel. Professional whitening uses safe, hydrogen peroxide gels activated by a specialized laser light to break down deep stains.',
    whenRequired: 'Teeth whitening is recommended for individuals with stained, yellowed, or dull teeth due to aging, dietary habits (like drinking coffee or tea), or tobacco use, who want to restore the natural shine and brightness of their smile.',
    benefits: [
      'Up to 8 Shades Brighter: Instant results in just one sitting.',
      'Safe for Enamel: Does not damage tooth structure.',
      'Long-Lasting Shine: Keeps teeth white for years.',
      'Painless Laser Tech: Prevents post-treatment sensitivity.',
      'Custom Trays Included: Maintain your bright smile at home.'
    ],
    duration: 'A professional in-office teeth whitening session typically takes 45 to 60 minutes.',
    procedure: 'First, the teeth are cleaned and polished. A protective barrier is applied to the gums, followed by the professional whitening gel on the teeth. A specialized laser light is then directed at the teeth to activate the whitening molecules. Finally, the gel is rinsed off, and a sensitivity relief gel is applied.',
    pricing: [
      { title: "Standard Zoom", price: "7,500", features: ["In-Office Session", "US-FDA Approved Gels", "Gum Protection"] },
      { title: "Premium Package", price: "12,000", features: ["Laser Activation", "Custom Home-Care Kit", "Desensitizing Gel", "1-Year Touch-Up Warranty"], isPopular: true }
    ],
    faqs: [
      { question: "Does teeth whitening damage natural enamel?", answer: "No, professional whitening under dental supervision is completely safe and does not alter the natural structure of the enamel." },
      { question: "How long do whitening results last?", answer: "Typically, results last 1 to 3 years depending on dietary habits. Reducing coffee, tea, and smoking helps maintain the bright white shade." },
      { question: "Will it cause tooth sensitivity?", answer: "Some patients feel mild sensitivity for 24 hours, but we use sensitivity-free laser systems and apply protective fluoride gel to prevent it." }
    ],
    testimonials: [
      { id: 1, patient_name: "Karthik", text: "My teeth are so much brighter now! The Zoom whitening session took less than an hour and was completely painless.", rating: 5, treatment_name: "Teeth Whitening" }
    ],
    cases: [
      { beforeImg: "/images/cases/whitening_smile_before.png", afterImg: "/images/cases/whitening_smile_after.png", description: "Dull, stained teeth brightened significantly in one session." }
    ]
  }
};
