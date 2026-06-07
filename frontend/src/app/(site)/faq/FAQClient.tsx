"use client";

import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, AlertCircle, X } from 'lucide-react';
import { SITE } from '@/lib/site';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const CATEGORIES = [
  { id: 'all', label: 'All FAQs' },
  { id: 'general', label: 'General' },
  { id: 'root-canal', label: 'Root Canal' },
  { id: 'implants', label: 'Dental Implants' },
  { id: 'braces-aligners', label: 'Braces & Aligners' },
  { id: 'pediatric', label: 'Pediatric' },
  { id: 'cosmetic', label: 'Cosmetic & Whitening' },
  { id: 'oral-surgery', label: 'Oral Surgery & Rehab' },
  { id: 'gum-care', label: 'Laser & Gum Care' },
  { id: 'preventive', label: 'Preventive & Dentures' },
];

const faqData: FAQItem[] = [
  // General
  {
    category: 'general',
    question: 'Are your dental treatments really painless?',
    answer: 'Yes. We use advanced local anesthesia delivery, soft-tissue lasers, and minimally invasive techniques to ensure your procedures are virtually pain-free.',
  },
  {
    category: 'general',
    question: 'Do you accept dental insurance?',
    answer: 'We assist with dental insurance claims and provide all necessary clinical documentation and invoices. Cashless processing depends on your specific insurance provider network.',
  },
  {
    category: 'general',
    question: 'How often should I visit the dentist?',
    answer: 'We recommend a check-up and professional teeth cleaning every 6 months to maintain optimal oral health and detect potential issues early.',
  },
  {
    category: 'general',
    question: 'Do you offer EMI options for treatments?',
    answer: 'Yes, we offer 0% interest EMI options on major credit cards for treatments exceeding ₹15,000, helping make advanced care affordable.',
  },
  {
    category: 'general',
    question: 'What should I do in a dental emergency?',
    answer: 'Call us immediately. We prioritize dental emergencies such as knocked-out teeth, severe sudden toothaches, and jaw trauma during our working hours.',
  },
  {
    category: 'general',
    question: 'What are your clinic timings and locations?',
    answer: 'We are open Monday to Saturday from 10:00 AM to 8:30 PM, and Sunday from 10:00 AM to 1:30 PM. We have two fully equipped state-of-the-art clinics in Hyderabad: Pragathi Nagar and Bachupally.',
  },

  // Root Canal
  {
    category: 'root-canal',
    question: 'Is a root canal treatment painful?',
    answer: 'No. The procedure is performed under local anesthesia which completely numbs the area. Most patients report that it feels no different than getting a standard filling and brings immediate relief from toothache.',
  },
  {
    category: 'root-canal',
    question: 'How many visits does a root canal take?',
    answer: 'Typically, a root canal treatment can be completed in 1 to 2 visits. In cases of severe infection, an additional visit may be required to ensure the root is completely disinfected before sealing.',
  },
  {
    category: 'root-canal',
    question: 'Is a dental crown necessary after a Root Canal?',
    answer: 'Yes, a crown is highly recommended. After a root canal, the tooth loses its blood supply and becomes brittle over time. A crown covers and reinforces the tooth structure to prevent fractures under normal chewing forces.',
  },

  // Dental Implants
  {
    category: 'implants',
    question: 'Are dental implants safe?',
    answer: 'Yes, dental implants are extremely safe and are considered the gold standard for replacing missing teeth. They have a long-term clinical success rate of over 95% to 98% when performed by experienced specialists.',
  },
  {
    category: 'implants',
    question: 'How long do dental implants last?',
    answer: 'With proper oral hygiene, routine flossing, and regular dental checkups, dental implants can last a lifetime. The titanium post fuses permanently with your jawbone.',
  },
  {
    category: 'implants',
    question: 'What is the recovery time after dental implant surgery?',
    answer: 'Most patients experience minimal discomfort and can return to their normal daily activities or work within 1 to 2 days. The complete healing and fusing of the implant to the bone (osseointegration) takes 3 to 6 months.',
  },
  {
    category: 'implants',
    question: 'Can smokers get dental implants?',
    answer: 'Yes, but smoking increases the risk of implant failure by restricting blood flow and slowing down bone healing. We strongly advise patients to quit or significantly reduce smoking before and after the procedure.',
  },

  // Braces & Aligners
  {
    category: 'braces-aligners',
    question: 'Do braces hurt?',
    answer: 'You may feel some mild tightness or soreness for 2-3 days after braces are first placed or adjusted. This is normal and indicates teeth are moving. It can be easily managed with standard over-the-counter pain relievers.',
  },
  {
    category: 'braces-aligners',
    question: 'Can adults get braces or aligners?',
    answer: 'Absolutely! Orthodontic treatment is highly effective at any age. We offer aesthetic solutions like ceramic braces and clear aligners that are virtually invisible and popular among adults.',
  },
  {
    category: 'braces-aligners',
    question: 'How many hours a day must I wear Invisalign clear aligners?',
    answer: 'For the treatment to be successful and stay on track, clear aligners must be worn for 20 to 22 hours per day. You should only remove them to eat, drink hot liquids, brush, and floss.',
  },
  {
    category: 'braces-aligners',
    question: 'Are Invisalign aligners completely invisible?',
    answer: 'Yes, they are made from thin, medical-grade clear plastic (SmartTrack material) custom-fit to your teeth, making them virtually unnoticeable to others in daily conversation.',
  },
  {
    category: 'braces-aligners',
    question: 'Can I drink tea or coffee while wearing my clear aligners?',
    answer: 'No. You should remove your aligners before drinking hot beverages (which can warp the plastic) or colored drinks (which can stain the aligners and teeth). Rinsing before putting them back on is recommended.',
  },

  // Pediatric
  {
    category: 'pediatric',
    question: 'When should my child have their first dental visit?',
    answer: 'A child should visit the dentist within six months of their first tooth emerging, or by their first birthday at the latest. This helps monitor early development and build positive habits.',
  },
  {
    category: 'pediatric',
    question: 'How often should children have dental checkups?',
    answer: 'Like adults, children should see a pediatric dentist every 6 months. This allows us to monitor jaw growth, check for cavity development in primary teeth, and apply preventive sealants.',
  },
  {
    category: 'pediatric',
    question: 'How do you handle children who are afraid of dental chairs?',
    answer: 'Our pediatric specialists use child-friendly language, a warm and colorful environment, and the "tell-show-do" method. We introduce dental instruments in a fun, non-threatening way to keep children relaxed and cooperative.',
  },

  // Cosmetic & Smile Designing
  {
    category: 'cosmetic',
    question: 'Will my new smile look natural after smile designing?',
    answer: 'Yes, absolutely. We use Digital Smile Design (DSD) to analyze your facial proportions, gum line, and natural tooth shades. Your porcelain veneers or crowns are custom-fabricated to look translucent and blend naturally.',
  },
  {
    category: 'cosmetic',
    question: 'Does cosmetic smile designing take a long time?',
    answer: 'A complete smile makeover using porcelain veneers or cosmetic bonding is surprisingly fast. In most cases, it requires just 2 to 3 appointments over a span of 1 to 2 weeks.',
  },
  {
    category: 'cosmetic',
    question: 'What is teeth bonding and how does it work?',
    answer: 'Teeth bonding is a quick cosmetic treatment where tooth-colored composite resin is applied directly to a tooth to repair small chips, close gaps, or cover discoloration. It is shaped, hardened with a curing light, and polished in a single visit.',
  },
  {
    category: 'cosmetic',
    question: 'Does professional teeth whitening damage natural enamel?',
    answer: 'No. When performed under professional supervision, teeth whitening is completely safe. The whitening gel reacts only with deep stains inside the pores of the enamel without weakening the structure.',
  },
  {
    category: 'cosmetic',
    question: 'How long do professional teeth whitening results last?',
    answer: 'Teeth whitening results typically last 1 to 3 years. The longevity depends on your habits; reducing stain-causing foods (coffee, tea, wine) and avoiding tobacco will keep your smile bright for much longer.',
  },
  {
    category: 'cosmetic',
    question: 'Will teeth whitening cause post-treatment tooth sensitivity?',
    answer: 'Some patients experience mild sensitivity for 12-24 hours. We use advanced desensitizing gels and laser-activated systems designed to minimize sensitivity, and it resolves very quickly.',
  },

  // Oral Surgery & Rehab
  {
    category: 'oral-surgery',
    question: 'Is full mouth rehabilitation painful?',
    answer: 'No, because the treatments are spread out in planned phases and performed under local anesthesia. For anxious patients, we also offer conscious sedation options to ensure a relaxed experience.',
  },
  {
    category: 'oral-surgery',
    question: 'How long does a full mouth reconstruction take?',
    answer: 'It depends on the complexity and treatments needed (implants, bone grafts, crowns). It can range from a few weeks to several months, allowing adequate healing time for implants and bone tissues between phases.',
  },
  {
    category: 'oral-surgery',
    question: 'Is wisdom tooth extraction painful?',
    answer: 'The extraction itself is completely painless as we use local anesthesia to numb the entire area. After the numbness wears off, mild soreness and swelling are common for 2-4 days, which is easily managed with prescribed painkillers.',
  },
  {
    category: 'oral-surgery',
    question: 'Do I need braces if I am undergoing corrective jaw surgery?',
    answer: 'Yes. Orthognathic jaw surgery is almost always combined with orthodontic treatment (braces) before and after the surgery to align your teeth properly with your new corrected jaw structure.',
  },
  {
    category: 'oral-surgery',
    question: 'Will there be visible scars on my face after genioplasty (chin reshaping)?',
    answer: 'No. Genioplasty is performed entirely through surgical incisions made inside the mouth (under the lower lip). There are zero external facial incisions, leaving no visible scars.',
  },

  // Laser & Gum Care
  {
    category: 'gum-care',
    question: 'Is professional teeth cleaning (scaling) painful?',
    answer: 'No. Teeth scaling is a non-invasive procedure. You will feel mild vibrations and a cool water spray from the ultrasonic scaler. If you have extremely sensitive teeth, a numbing gel can be applied.',
  },
  {
    category: 'gum-care',
    question: 'Does scaling weaken or loosen teeth?',
    answer: 'No, this is a very common myth. Scaling only removes harmful plaque and hard tartar build-up. Removing this buildup actually protects your gums and bone, strengthening tooth support.',
  },
  {
    category: 'gum-care',
    question: 'What is periodontal flap surgery?',
    answer: 'It is a routine procedure to treat advanced gum disease. Gums are gently folded back to allow the dentist to clean deep-seated tartar on the roots and repair bone defects, promoting healthy reattachment.',
  },
  {
    category: 'gum-care',
    question: 'Are dental lasers safe?',
    answer: 'Yes, dental lasers are highly safe and FDA-approved. They are extremely precise, minimize bleeding, and sterilize target areas. Patients and staff wear protective goggles during laser operation.',
  },
  {
    category: 'gum-care',
    question: 'Is there a long recovery period after a laser frenectomy?',
    answer: 'No. Because lasers cauterize tissues as they cut, there is minimal bleeding and no stitches are required. Mild soreness lasts 1-2 days, and stretches are prescribed to ensure optimal healing.',
  },
  {
    category: 'gum-care',
    question: 'Does the laser touch the sore during mouth ulcer treatment?',
    answer: 'No. It is a completely non-contact treatment. The laser tip is held a few millimeters away, directing light energy to instantly numb the nerve ends and speed up natural healing.',
  },

  // Preventive & Dentures
  {
    category: 'preventive',
    question: 'How long do composite (tooth-colored) fillings last?',
    answer: 'Modern composite fillings are highly durable and typically last 5 to 10 years or more with good brushing, flossing, and avoidance of biting down on extremely hard foods.',
  },
  {
    category: 'preventive',
    question: 'What is a hybrid denture?',
    answer: 'A hybrid denture is a fixed full arch of teeth supported by 4 to 6 dental implants. It does not slide, click, or cover the palate, offering chewing power and comfort close to natural teeth.',
  },
  {
    category: 'preventive',
    question: 'Why do I suffer from bad breath even though I brush daily?',
    answer: 'Bad breath (halitosis) is often caused by bacteria hidden in hard-to-reach places: deep between teeth, in gum pockets, or on the back of the tongue. A professional cleaning and tongue scraping can resolve it.',
  },
  {
    category: 'preventive',
    question: 'What are dental sealants and are they necessary?',
    answer: 'Dental sealants are thin, protective coatings painted onto the chewing surfaces of back teeth (molars). They act as barriers to seal out food and bacteria, and are highly effective in preventing childhood cavities.',
  },
];

export default function FAQClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first item initially

  const filteredFaqs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setOpenIndex(0); // open first item in the new list
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Search and Category Filter Section */}
      <div className="max-w-4xl mx-auto mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search questions or keywords (e.g. root canal, pain, price)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(0);
            }}
            className="w-full pl-11 pr-10 py-4 border border-slate-200 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-slate-800 text-sm md:text-base placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Categories Horizontal Scroll Bar */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex space-x-2.5 min-w-max px-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-sm border ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white border-blue-600 scale-[1.03]'
                    : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-200 shadow-md ring-1 ring-blue-50'
                    : 'border-slate-150 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        isOpen ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'
                      }`}
                    />
                    <h4
                      className={`font-bold transition-colors text-sm md:text-base ${
                        isOpen ? 'text-blue-900' : 'text-slate-800 group-hover:text-blue-600'
                      }`}
                    >
                      {faq.question}
                    </h4>
                  </div>
                  <div
                    className={`flex-shrink-0 p-1.5 rounded-full transition-all duration-300 ${
                      isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600'
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 py-5 text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8 max-w-md mx-auto shadow-sm flex flex-col items-center">
            <AlertCircle className="w-12 h-12 text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No FAQs found</h3>
            <p className="text-xs text-slate-500 font-semibold mb-6">
              We couldn't find any questions matching "{searchQuery}". Try modifying your search or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition shadow-sm"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>

      {/* Structured SEO Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
