"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`w-full sticky top-0 z-[60] transition-all duration-500 border-b border-slate-100/50 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md shadow-sm'}`}>
      {/* Main Navigation */}
      <nav className={`container mx-auto px-4 flex justify-between items-center relative max-w-7xl transition-all duration-500 ${scrolled ? 'py-1 md:py-2' : 'py-2 md:py-3'}`}>
        <Link href="/" className="flex items-center shrink-0" onClick={closeMobileMenu}>
          <Image 
            src="/dental_logo.png" 
            alt="Dental World Logo" 
            width={320} 
            height={120} 
            className={`w-auto object-contain transition-all duration-500 ease-in-out origin-left ${scrolled ? 'h-14 md:h-16 lg:h-20' : 'h-20 md:h-24 lg:h-28'}`}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-semibold text-slate-800 text-sm">
          <Link href="/" className="relative hover:text-brand transition-colors group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative hover:text-brand transition-colors group">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <div className="relative group">
            <Link href="/treatments" className="relative hover:text-brand transition-colors group flex items-center">
              Treatments <ChevronDown className="w-4 h-4 ml-1 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50 flex flex-col py-2">
              <Link href="/treatments/root-canal-treatment" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Root Canal Treatment</Link>
              <Link href="/treatments/braces" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Braces</Link>
              <Link href="/treatments/invisalign-treatment" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Invisalign Treatment</Link>
              <Link href="/treatments/pediatric-dentistry" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Pediatric Dentistry</Link>
              <Link href="/treatments/smile-designing" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Smile Designing</Link>
              <Link href="/treatments/full-mouth-rehabilitation" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Full Mouth Rehabilitation</Link>
            </div>
          </div>

          <div className="relative group">
            <Link href="/treatments/dental-implants" className="relative hover:text-brand transition-colors group flex items-center">
              Implants <ChevronDown className="w-4 h-4 ml-1 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50 flex flex-col py-2">
              <Link href="/treatments/dental-implants" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Single Tooth Implant</Link>
              <Link href="/treatments/dental-implants" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Multiple Tooth Implants</Link>
              <Link href="/treatments/dental-implants" className="px-4 py-2 hover:bg-brand/5 hover:text-brand transition-colors">Full Mouth Implants</Link>
            </div>
          </div>

          <Link href="/gallery" className="relative hover:text-brand transition-colors group">
            Before & After
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/blog" className="relative hover:text-brand transition-colors group">
            Blog
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative hover:text-brand transition-colors group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <a href="tel:+917997994646" className="hidden lg:flex items-center text-[#0b1c3c] font-bold hover:text-brand transition-colors group">
            <Phone className="w-4 h-4 mr-2 group-hover:-rotate-12 transition-transform duration-300" />
            <span className="text-sm">+91 799 799 4646</span>
          </a>
          
          <Link href="/book-appointment" className="hidden lg:flex bg-[#0b1c3c] hover:bg-[#16336b] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 items-center shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm">
            Book Appointment
          </Link>
          
          <button 
            className="lg:hidden p-2 text-slate-700 hover:text-brand transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-4 space-y-4 font-semibold text-slate-800 bg-white">
          <Link href="/" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>About Us</Link>
          
          <div className="flex flex-col space-y-2 border-l-2 border-slate-100 ml-2 pl-4 py-1">
            <Link href="/treatments" className="hover:text-brand transition" onClick={closeMobileMenu}>Treatments</Link>
            <Link href="/treatments/root-canal-treatment" className="text-sm text-slate-500 hover:text-brand transition" onClick={closeMobileMenu}>Root Canal Treatment</Link>
            <Link href="/treatments/braces" className="text-sm text-slate-500 hover:text-brand transition" onClick={closeMobileMenu}>Braces</Link>
            <Link href="/treatments/invisalign-treatment" className="text-sm text-slate-500 hover:text-brand transition" onClick={closeMobileMenu}>Invisalign Treatment</Link>
            <Link href="/treatments/smile-designing" className="text-sm text-slate-500 hover:text-brand transition" onClick={closeMobileMenu}>Smile Designing</Link>
          </div>

          <div className="flex flex-col space-y-2 border-l-2 border-slate-100 ml-2 pl-4 py-1">
            <Link href="/treatments/dental-implants" className="hover:text-brand transition" onClick={closeMobileMenu}>Implants</Link>
            <Link href="/treatments/dental-implants" className="text-sm text-slate-500 hover:text-brand transition" onClick={closeMobileMenu}>Single Tooth Implant</Link>
            <Link href="/treatments/dental-implants" className="text-sm text-slate-500 hover:text-brand transition" onClick={closeMobileMenu}>Multiple Tooth Implants</Link>
            <Link href="/treatments/dental-implants" className="text-sm text-slate-500 hover:text-brand transition" onClick={closeMobileMenu}>Full Mouth Implants</Link>
          </div>

          <Link href="/gallery" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Before & After</Link>
          <Link href="/blog" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Blog</Link>
          <Link href="/contact" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Contact</Link>
          
          <a href="tel:+917997994646" className="px-2 hover:text-brand transition flex items-center" onClick={closeMobileMenu}>
            <Phone className="w-4 h-4 mr-2" /> +91 799 799 4646
          </a>
          
          <Link href="/book-appointment" className="mt-4 bg-[#0b1c3c] text-white px-4 py-3 rounded-full font-semibold text-center shadow-md flex items-center justify-center" onClick={closeMobileMenu}>
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
