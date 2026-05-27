import React from 'react';
import Image from 'next/image';
import { Calendar, Droplets, Heart, ShieldCheck, Activity, Users, MapPin, Phone, ChevronRight } from 'lucide-react';

export default function PromotionalBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white flex flex-col font-sans relative">
      
      {/* Top Main Section */}
      <div className="flex flex-col lg:flex-row relative">
        
        {/* Left Content Area */}
        <div className="lg:w-[60%] p-8 lg:p-12 flex flex-col justify-center z-10 relative bg-white">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#d32f2f] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C8 2 6 5 6 9c0 1.5.5 3 1.5 4 .5.5 1 1 1 2v1c0 2 1.5 4 3.5 4s3.5-2 3.5-4v-1c0-1 .5-1.5 1-2 1-1 1.5-2.5 1.5-4 0-4-2-7-6-7z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">DENTAL WORLD</h2>
              <div className="flex items-center mt-1">
                <div className="h-[1px] w-8 bg-blue-900 mr-2"></div>
                <p className="text-blue-900 font-bold text-xs tracking-wider uppercase">Expert Periodontal Care</p>
                <div className="h-[1px] w-8 bg-blue-900 ml-2"></div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b1c3c] leading-[1.1] mb-6 tracking-tight">
            STOP <span className="text-[#d32f2f]">BLEEDING GUMS</span><br />
            <span className="text-2xl md:text-3xl tracking-normal text-[#0b1c3c]">BEFORE IT LEADS TO</span><br />
            <span className="text-[#d32f2f] text-5xl md:text-6xl lg:text-7xl">TOOTH LOSS!</span>
          </h1>

          {/* Subtitle Pill */}
          <div className="self-start bg-[#164e63] text-white px-5 py-2 rounded font-bold text-sm md:text-base tracking-wide mb-8 shadow-sm">
            HEALTHY GUMS. STRONGER SMILE. BETTER YOU.
          </div>

          {/* 4 Features Grid */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-wrap sm:flex-nowrap gap-4 justify-between shadow-sm mb-8">
            <div className="flex flex-col items-center text-center w-[45%] sm:w-1/4">
              <div className="w-12 h-12 rounded-full border-2 border-red-100 flex items-center justify-center mb-2">
                <Droplets className="w-6 h-6 text-[#d32f2f]" />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-800 leading-tight">STOP<br/><span className="text-slate-500 font-semibold">BLEEDING &<br/>INFECTION</span></p>
            </div>
            
            <div className="hidden sm:block w-[1px] bg-slate-200 self-stretch"></div>
            
            <div className="flex flex-col items-center text-center w-[45%] sm:w-1/4">
              <div className="w-12 h-12 rounded-full border-2 border-blue-100 flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-800 leading-tight">RESTORE<br/><span className="text-slate-500 font-semibold">GUM HEALTH &<br/>STRENGTH</span></p>
            </div>

            <div className="hidden sm:block w-[1px] bg-slate-200 self-stretch"></div>

            <div className="flex flex-col items-center text-center w-[45%] sm:w-1/4">
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center mb-2">
                <Activity className="w-6 h-6 text-slate-600" />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-slate-800 leading-tight">PAIN-FREE<br/><span className="text-slate-500 font-semibold">LASER GUM<br/>TREATMENT</span></p>
            </div>

            <div className="hidden sm:block w-[1px] bg-slate-200 self-stretch"></div>

            <div className="flex flex-col items-center text-center w-[45%] sm:w-1/4">
              <div className="w-12 h-12 rounded-full border-2 border-blue-800 flex items-center justify-center mb-2 bg-blue-900 text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-[10px] md:text-xs font-bold text-blue-900 leading-tight">PREVENT<br/><span className="text-slate-500 font-semibold">TOOTH LOSS &<br/>COMPLICATIONS</span></p>
            </div>
          </div>

          {/* CTA Area */}
          <div className="flex flex-col items-start gap-4">
            <a href="/book-appointment" className="bg-[#d32f2f] hover:bg-red-800 transition text-white rounded-2xl w-full sm:w-auto flex items-center shadow-lg group pr-2">
              <div className="p-4 bg-black/10 rounded-l-2xl border-r border-white/20">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex-grow text-center font-black text-lg md:text-xl tracking-wide px-6 whitespace-nowrap">
                BOOK YOUR GUM CONSULTATION
              </div>
              <div className="bg-white text-[#d32f2f] rounded-full flex items-center justify-center w-10 h-10 shadow-sm group-hover:translate-x-1 transition-transform shrink-0">
                <ChevronRight className="w-6 h-6 font-black" />
              </div>
            </a>
            
            <div className="flex items-center gap-2 text-sm font-bold text-[#0b1c3c] ml-2">
              <Phone className="w-4 h-4 text-[#d32f2f]" />
              <span className="text-[#d32f2f] ml-1">FAST RELIEF.</span> <span className="text-slate-500 mx-1">•</span>
              <span>EXPERT CARE.</span> <span className="text-slate-500 mx-1">•</span>
              <span>LASTING RESULTS.</span>
            </div>
          </div>

        </div>

        {/* Right Background Image & Circles Overlay */}
        <div className="lg:w-[40%] h-[400px] lg:h-auto relative overflow-hidden hidden md:block">
          {/* Gradient fade to blend image with white background on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-48 hidden lg:block"></div>
          
          <Image 
            src="/images/dentist_gum_treatment.png" 
            alt="Dentist treating patient" 
            fill 
            className="object-cover object-center z-0"
          />

          {/* Before & After Overlapping Circles */}
          <div className="absolute bottom-8 right-8 z-20 flex items-center drop-shadow-2xl">
            {/* Before Circle */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 aspect-square rounded-full border-[6px] border-white shadow-inner overflow-hidden z-10">
              <Image src="/images/gums_before.png" alt="Before treatment" fill className="object-cover" />
              <div className="absolute top-2 w-full text-center">
                <span className="bg-[#d32f2f] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">BEFORE</span>
              </div>
            </div>
            
            {/* Overlay Arrow */}
            <div className="relative z-30 -mx-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
              <ChevronRight className="w-5 h-5 text-slate-800" />
            </div>

            {/* After Circle */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 aspect-square rounded-full border-[6px] border-white shadow-inner overflow-hidden z-20">
              <Image src="/images/gums_after.png" alt="After treatment" fill className="object-cover" />
              <div className="absolute top-2 w-full text-center">
                <span className="bg-[#0b1c3c] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">AFTER</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Trust Bar (Dark Blue) */}
      <div className="bg-[#0b1c3c] text-white py-6 px-6 relative z-30 flex justify-end gap-6 pr-12 rounded-br-3xl hidden lg:flex mt-[-80px] self-end w-auto ml-auto whitespace-nowrap min-w-[50%]">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-200 opacity-80" />
          <div>
            <div className="font-bold text-xl text-white leading-none">1000+</div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold mt-1">Happy Patients</div>
          </div>
        </div>
        <div className="w-[1px] bg-white/20 self-stretch"></div>
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-blue-200 opacity-80" />
          <div>
            <div className="font-bold text-sm text-white leading-tight">ADVANCED</div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold mt-1">Laser Technology</div>
          </div>
        </div>
        <div className="w-[1px] bg-white/20 self-stretch"></div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-blue-200 opacity-80" />
          <div>
            <div className="font-bold text-sm text-white leading-tight">SAFE</div>
            <div className="text-[10px] text-blue-200 uppercase tracking-widest font-semibold mt-1">Expert Periodontal Care</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Strip (Navy) */}
      <div className="bg-[#0f172a] py-4 px-8 flex flex-col sm:flex-row justify-center items-center sm:gap-16 border-t-[6px] border-slate-800">
        <a href="tel:8247478663" className="flex items-center gap-3 group hover:opacity-80 transition cursor-pointer mb-2 sm:mb-0">
          <MapPin className="w-5 h-5 text-[#d32f2f]" />
          <div>
            <div className="text-white font-bold tracking-widest text-sm">PRAGATHI NAGAR</div>
            <div className="flex items-center text-white/90 text-xs mt-0.5 font-semibold">
              <Phone className="w-3 h-3 mr-1" /> 8247478663
            </div>
          </div>
        </a>
        
        <div className="hidden sm:block h-8 w-[1px] bg-white/20"></div>
        
        <a href="tel:9100061610" className="flex items-center gap-3 group hover:opacity-80 transition cursor-pointer">
          <MapPin className="w-5 h-5 text-[#d32f2f]" />
          <div>
            <div className="text-white font-bold tracking-widest text-sm">BACHUPALLY</div>
            <div className="flex items-center text-white/90 text-xs mt-0.5 font-semibold">
              <Phone className="w-3 h-3 mr-1" /> 9100061610
            </div>
          </div>
        </a>
      </div>

    </div>
  );
}
