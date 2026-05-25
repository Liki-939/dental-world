"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  patient_name: string;
  text: string;
  rating: number;
  treatment_name?: string;
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-12">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-100 relative hover:shadow-premium transition-shadow duration-300">
        <Quote className="absolute top-6 left-6 w-16 h-16 text-brand-light opacity-40 transform -rotate-12" />
        
        <div className="flex justify-center mb-6">
          {[...Array(current.rating || 5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-slate-700 text-center italic mb-8 relative z-10 leading-relaxed font-serif">
          &quot;{current.text}&quot;
        </p>
        
        <div className="text-center">
          <h4 className="font-bold text-slate-900 text-lg">{current.patient_name}</h4>
          {current.treatment_name && (
            <p className="text-brand font-medium text-sm mt-1">{current.treatment_name} Patient</p>
          )}
        </div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-brand hover:scale-110 transition-all border border-slate-100"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-brand hover:scale-110 transition-all border border-slate-100"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? 'bg-brand w-8' : 'bg-slate-300'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
