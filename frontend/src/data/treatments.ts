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
}

export const treatmentsData: Record<string, TreatmentData> = {
  'root-canal-treatment': {
    title: 'Root Canal Treatment',
    hero_headline: 'Advanced Root Canal Treatment in Hyderabad',
    hero_subheadline: 'Restore your smile and confidence with our world-class treatments.',
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};
