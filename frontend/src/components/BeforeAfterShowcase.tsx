"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    title: "Dental Implants",
    before: "/images/cases/implants_before.png",
    after: "/images/cases/implants_after.png"
  },
  {
    title: "Smile Makeover",
    before: "/images/cases/smile_design_before.png",
    after: "/images/cases/smile_design_after.png"
  },
  {
    title: "Teeth Realignment",
    before: "/images/cases/invisalign_before.png",
    after: "/images/cases/invisalign_after.png"
  }
];

export default function BeforeAfterShowcase({ customCases }: { customCases?: { before: string; after: string; title?: string }[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  
  const displayCases = customCases && customCases.length > 0 
    ? customCases.map((c, i) => ({ title: c.title || `Case ${i + 1}`, before: c.before, after: c.after }))
    : cases;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? displayCases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === displayCases.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Mobile Navigation Arrows (Visible only on mobile) */}
      <button 
        onClick={handlePrev}
        className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 flex items-center justify-center text-slate-650 hover:text-blue-600 active:scale-95 transition"
        aria-label="Previous transformation"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
      </button>
      
      <button 
        onClick={handleNext}
        className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 flex items-center justify-center text-slate-650 hover:text-blue-600 active:scale-95 transition"
        aria-label="Next transformation"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
      </button>
      
      {/* Grid for desktop / Single item view on mobile */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {displayCases.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex w-full">
              {/* Before Image */}
              <div className="relative w-1/2 aspect-[4/5] bg-slate-100">
                <Image 
                  src={item.before}
                  alt={`${item.title} Before`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              {/* After Image */}
              <div className="relative w-1/2 aspect-[4/5] bg-slate-100 border-l border-white">
                <Image 
                  src={item.after}
                  alt={`${item.title} After`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card Slider View */}
      <div className="md:hidden block">
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300">
          <div className="flex w-full">
            {/* Before Image */}
            <div className="relative w-1/2 aspect-[4/5] bg-slate-100">
              <Image 
                src={displayCases[activeIdx].before}
                alt={`${displayCases[activeIdx].title} Before`}
                fill
                className="object-cover animate-fade-in-up"
                style={{ animationDuration: '0.4s' }}
                sizes="50vw"
              />
            </div>
            {/* After Image */}
            <div className="relative w-1/2 aspect-[4/5] bg-slate-100 border-l border-white">
              <Image 
                src={displayCases[activeIdx].after}
                alt={`${displayCases[activeIdx].title} After`}
                fill
                className="object-cover animate-fade-in-up"
                style={{ animationDuration: '0.4s' }}
                sizes="50vw"
              />
            </div>
          </div>
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {displayCases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-350 ${
                activeIdx === idx ? 'bg-blue-600 w-4' : 'bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
