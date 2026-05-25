"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
          >
            <h4 className="font-semibold text-slate-900 pr-8">{faq.question}</h4>
            <div className="flex-shrink-0 text-brand bg-brand-light p-1 rounded-full">
              {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
