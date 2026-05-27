import React from 'react';
import Image from 'next/image';
import { 
  Smile, MessageSquare, Shield, ShieldCheck, Clock, Syringe, Package, Bed, Sparkles, Droplet, 
  Activity, Beaker, Wrench, CigaretteOff, Apple, Check
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smile, MessageSquare, Shield, ShieldCheck, Clock, Syringe, Package, Bed, Sparkles, Droplet,
  Activity, Beaker, Wrench, CigaretteOff, Apple, Check
};

interface InfographicData {
  beforeImage?: string;
  afterImage?: string;
  title: string;
  description: string;
  benefits: { text: string; icon: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  keyDetails: { title: string; text: string; icon: string }[];
  aftercare: { text: string; icon: string }[];
}

export default function TreatmentInfographic({ data }: { data: InfographicData }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 font-sans text-left">
      
      {/* 1. Top Section: Before & After Images */}
      {(data.beforeImage || data.afterImage) && (
        <div className="flex flex-col md:flex-row w-full h-[300px] md:h-[400px]">
          {data.beforeImage && (
            <div className="relative w-full md:w-1/2 h-full">
              <Image src={data.beforeImage} alt="Before Treatment" fill className="object-cover" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white font-bold tracking-wider px-6 py-2 rounded-full text-sm shadow-lg">
                BEFORE
              </div>
            </div>
          )}
          {data.afterImage && (
            <div className="relative w-full md:w-1/2 h-full border-t md:border-t-0 md:border-l border-white">
              <Image src={data.afterImage} alt="After Treatment" fill className="object-cover" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-white font-bold tracking-wider px-6 py-2 rounded-full text-sm shadow-lg">
                AFTER
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. Middle Section: 3 Columns */}
      <div className="flex flex-col lg:flex-row p-8 lg:p-12 gap-10">
        
        {/* Left Column: Treatment Overview */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-heading font-extrabold text-brand-dark mb-4 uppercase tracking-wide">
            Treatment: {data.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {data.description}
          </p>
          <ul className="space-y-4">
            {data.benefits.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || ShieldCheck;
              return (
                <li key={idx} className="flex items-start text-sm text-slate-700">
                  <div className="mr-3 mt-0.5 text-brand bg-brand-light/50 p-1.5 rounded-full border border-brand/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">{benefit.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Center Column: How It Works */}
        <div className="w-full lg:w-2/4 border-y lg:border-y-0 lg:border-x border-slate-200 py-8 lg:py-0 lg:px-10">
          <h3 className="text-xl font-heading font-extrabold text-brand-dark mb-8 text-center uppercase tracking-wide">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.howItWorks.map((step, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-b from-brand-light/40 to-brand-light/10 border border-brand/20 rounded-2xl flex items-center justify-center mb-4 relative shadow-sm">
                  <span className="absolute -top-3 -left-3 bg-brand text-white w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-md">
                    {step.step}
                  </span>
                  <Activity className="w-10 h-10 text-brand opacity-60" /> {/* Placeholder Icon */}
                </div>
                <h4 className="font-bold text-brand-dark text-sm mb-2 h-10 flex items-center justify-center leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Details */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-heading font-extrabold text-brand-dark mb-6 uppercase tracking-wide">
            Key Details
          </h3>
          <ul className="space-y-5">
            {data.keyDetails.map((detail, idx) => {
              const Icon = iconMap[detail.icon] || Check;
              return (
                <li key={idx} className="flex items-start text-sm">
                  <div className="mr-3 text-slate-400 mt-0.5 shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <p className="text-slate-600 leading-snug">
                    <strong className="text-slate-800 mr-1">{detail.title}:</strong>
                    {detail.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 3. Bottom Section: Aftercare */}
      <div className="bg-slate-50 border-t border-slate-200 p-6 flex flex-col md:flex-row items-center">
        <div className="flex items-center mb-6 md:mb-0 md:mr-8 shrink-0">
          <div className="w-12 h-12 bg-brand-dark text-white rounded-xl flex items-center justify-center shadow-md mr-4">
            <Activity className="w-6 h-6" /> {/* Tooth icon substitute */}
          </div>
          <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
            Aftercare &<br />Maintenance
          </h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full">
          {data.aftercare.map((item, idx) => {
            const Icon = iconMap[item.icon] || Check;
            return (
              <div key={idx} className="flex items-start text-xs text-slate-600">
                <Icon className="w-4 h-4 text-slate-400 mr-2 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-tight">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
