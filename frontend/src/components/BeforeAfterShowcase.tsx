"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const defaultCases = [
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

export interface ShowcaseCase {
  title?: string;
  before: string;
  after: string;
  category?: string;
}

export default function BeforeAfterShowcase({ customCases }: { customCases?: ShowcaseCase[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const displayCases = customCases && customCases.length > 0
    ? customCases.map((c, i) => ({
        title: c.title || c.category || `Case ${i + 1}`,
        before: c.before,
        after: c.after
      }))
    : defaultCases;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? displayCases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === displayCases.length - 1 ? 0 : prev + 1));
  };

  if (displayCases.length === 0) return null;

  return (
    <div className="relative">
      {/* Mobile Navigation Arrows */}
      {displayCases.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 active:scale-95 transition"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          <button
            onClick={handleNext}
            className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 active:scale-95 transition"
            aria-label="Next transformation"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </>
      )}
      
      {/* Grid for desktop / Card list */}
      <div className={`hidden md:grid ${
        displayCases.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
        displayCases.length === 2 ? 'grid-cols-2 max-w-3xl mx-auto' :
        'grid-cols-3'
      } gap-6`}>
        {displayCases.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
            <div className="flex w-full">
              {/* Before Image */}
              <div className="relative w-1/2 aspect-[4/5] bg-slate-100 overflow-hidden">
                <img
                  src={item.before}
                  alt={`${item.title} Before`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-600/90 text-white font-extrabold text-[10px] rounded shadow-sm">
                  BEFORE
                </span>
              </div>
              {/* After Image */}
              <div className="relative w-1/2 aspect-[4/5] bg-slate-100 border-l border-white overflow-hidden">
                <img
                  src={item.after}
                  alt={`${item.title} After`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-green-600/90 text-white font-extrabold text-[10px] rounded shadow-sm">
                  AFTER
                </span>
              </div>
            </div>
            <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-center">
              <span className="font-extrabold text-xs text-slate-700 tracking-tight">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card Slider View */}
      <div className="md:hidden block">
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300">
          <div className="flex w-full">
            {/* Before Image */}
            <div className="relative w-1/2 aspect-[4/5] bg-slate-100 overflow-hidden">
              <img
                src={displayCases[activeIdx]?.before}
                alt={`${displayCases[activeIdx]?.title} Before`}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-600/90 text-white font-extrabold text-[10px] rounded shadow-sm">
                BEFORE
              </span>
            </div>
            {/* After Image */}
            <div className="relative w-1/2 aspect-[4/5] bg-slate-100 border-l border-white overflow-hidden">
              <img
                src={displayCases[activeIdx]?.after}
                alt={`${displayCases[activeIdx]?.title} After`}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-green-600/90 text-white font-extrabold text-[10px] rounded shadow-sm">
                AFTER
              </span>
            </div>
          </div>
          <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
            <span className="font-extrabold text-xs text-slate-700">{displayCases[activeIdx]?.title}</span>
          </div>
        </div>

        {/* Dots indicators */}
        {displayCases.length > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-4">
            {displayCases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? 'bg-blue-600 w-4' : 'bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
