"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles } from 'lucide-react';

const galleryCases = [
  {
    id: 1,
    title: 'Dental Implants',
    category: 'Implants',
    description: 'Complete restoration of missing teeth using advanced titanium implants.',
    beforeImg: '/images/cases/implants_before.png',
    afterImg: '/images/cases/implants_after.png'
  },
  {
    id: 2,
    title: 'Smile Designing',
    category: 'Cosmetic',
    description: 'A complete smile makeover for a flawless aesthetic.',
    beforeImg: '/images/cases/smile_design_before.png',
    afterImg: '/images/cases/smile_design_after.png'
  },
  {
    id: 3,
    title: 'Invisalign Treatment',
    category: 'Orthodontics',
    description: 'Perfect alignment achieved using clear, invisible aligners.',
    beforeImg: '/images/cases/invisalign_before.png',
    afterImg: '/images/cases/invisalign_after.png'
  },
  {
    id: 4,
    title: 'Full Mouth Rehabilitation',
    category: 'Restorative',
    description: 'Comprehensive reconstruction of all teeth in both jaws.',
    beforeImg: '/images/cases/fmr_before.png',
    afterImg: '/images/cases/fmr_after.png'
  },
  {
    id: 5,
    title: 'Traditional Braces',
    category: 'Orthodontics',
    description: 'Correction of severe crowding and bite misalignment.',
    beforeImg: '/images/cases/braces_before.png',
    afterImg: '/images/cases/braces_after.png'
  },
  {
    id: 6,
    title: 'Root Canal Treatment',
    category: 'Restorative',
    description: 'Pain relief and tooth salvation through expert endodontic care.',
    beforeImg: '/images/cases/root_canal_before.png',
    afterImg: '/images/cases/root_canal_after.png'
  },
  {
    id: 7,
    title: 'Pediatric Dentistry',
    category: 'Pediatric',
    description: 'Gentle, effective treatment restoring health to primary teeth.',
    beforeImg: '/images/cases/pediatric_before.png',
    afterImg: '/images/cases/pediatric_after.png'
  },
  {
    id: 8,
    title: 'Gum Treatment',
    category: 'Periodontics',
    description: 'Restoration of healthy gum tissue and treatment of periodontitis.',
    beforeImg: '/images/gums_before.png',
    afterImg: '/images/gums_after.png'
  }
];

const categories = ['All', 'Implants', 'Cosmetic', 'Orthodontics', 'Restorative', 'Pediatric', 'Periodontics'];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCases = activeCategory === 'All' 
    ? galleryCases 
    : galleryCases.filter(c => c.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-surface-muted">
      <Navbar />
      
      <main className="flex-grow">
        {/* Dynamic Hero Section */}
        <section className="bg-gradient-to-b from-brand-light/20 to-white py-24 text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand/20">
              <Sparkles className="w-4 h-4" />
              <span>Real Transformations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Life-Changing <span className="text-brand">Smiles</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Explore our gallery of successful treatments. See the dramatic differences our expert specialists create for our patients every single day.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-brand text-white shadow-md shadow-brand/30 scale-105' 
                      : 'bg-white text-slate-600 hover:bg-brand/10 hover:text-brand border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {filteredCases.map((caseItem) => (
                <div key={caseItem.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Image Split Container */}
                  <div className="flex w-full h-[250px] sm:h-[350px] relative bg-slate-50">
                    
                    {/* Before Image */}
                    <div className="w-1/2 relative h-full border-r-2 border-white">
                      <Image 
                        src={caseItem.beforeImg} 
                        alt={`${caseItem.title} Before`} 
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        Before
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="w-1/2 relative h-full">
                      <Image 
                        src={caseItem.afterImg} 
                        alt={`${caseItem.title} After`} 
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute top-4 right-4 bg-brand/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        After
                      </div>
                    </div>

                    {/* Center Divider styling */}
                    <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] transform -translate-x-1/2 z-10 hidden sm:block"></div>

                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-brand font-bold text-sm uppercase tracking-wider">{caseItem.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">{caseItem.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">More cases coming soon to this category!</p>
              </div>
            )}
            
            {/* Call to Action */}
            <div className="mt-24 bg-gradient-to-br from-slate-100 to-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6 relative z-10">Ready for your own transformation?</h3>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
                Schedule a consultation today. Our expert team will design a customized treatment plan tailored to your unique smile.
              </p>
              <Link href="/book-appointment" className="inline-flex items-center justify-center bg-[#0b1c3c] hover:bg-[#16336b] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative z-10">
                Book Your Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
