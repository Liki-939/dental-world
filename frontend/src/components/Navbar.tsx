"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Calendar, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="hidden md:block">Advanced dental care with compassion, technology and transparency.</p>
          <div className="flex space-x-6 items-center w-full md:w-auto justify-end">
            <a href="tel:+918247478663" className="flex items-center hover:text-brand-light transition">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 824 747 8663</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <div className="bg-brand text-white p-2 rounded-lg">
            {/* Simple Logo Placeholder */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.69 2 6 4.69 6 8c0 1.5.5 2.89 1.35 4.04L12 22l4.65-9.96C17.5 10.89 18 9.5 18 8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4 0 1.05-.41 2.02-1.08 2.76L12 17.56l-2.92-6.8A3.99 3.99 0 018 8c0-2.21 1.79-4 4-4z" />
            </svg>
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl text-brand-dark leading-tight">DENTAL WORLD</h1>
            <p className="text-[0.65rem] text-slate-500 uppercase tracking-widest leading-tight">Smiles for Life</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-slate-700">
          <Link href="/" className="hover:text-brand transition">Home</Link>
          <Link href="/about" className="hover:text-brand transition">About Us</Link>
          <Link href="/doctors" className="hover:text-brand transition">Our Doctors</Link>
          <div className="relative group">
            <Link href="/treatments" className="hover:text-brand transition flex items-center">
              Treatments <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50 flex flex-col py-2">
              <Link href="/treatments/root-canal-treatment" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition">Root Canal Treatment</Link>
              <Link href="/treatments/dental-implants" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition">Dental Implants</Link>
              <Link href="/treatments/braces" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition">Braces</Link>
              <Link href="/treatments/invisalign-treatment" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition">Invisalign Treatment</Link>
              <Link href="/treatments/pediatric-dentistry" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition">Pediatric Dentistry</Link>
              <Link href="/treatments/smile-designing" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition">Smile Designing</Link>
              <Link href="/treatments/full-mouth-rehabilitation" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition">Full Mouth Rehabilitation</Link>
            </div>
          </div>
          <Link href="/gallery" className="hover:text-brand transition">Before & After</Link>
          <Link href="/blog" className="hover:text-brand transition">Blog</Link>
          <Link href="/contact" className="hover:text-brand transition">Contact</Link>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link href="/book-appointment" className="hidden md:flex bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 items-center shadow-md hover:shadow-glow hover:-translate-y-0.5">
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
          </Link>
          
          <button 
            className="md:hidden p-2 text-slate-700 hover:text-brand transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-4 space-y-4 font-medium text-slate-700 bg-white">
          <Link href="/" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>About Us</Link>
          <Link href="/doctors" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Our Doctors</Link>
          
          <div className="flex flex-col space-y-2 border-l-2 border-slate-100 ml-2 pl-4 py-1">
            <div className="font-semibold text-slate-900 mb-1">Treatments</div>
            <Link href="/treatments/root-canal-treatment" className="text-sm hover:text-brand transition" onClick={closeMobileMenu}>Root Canal Treatment</Link>
            <Link href="/treatments/dental-implants" className="text-sm hover:text-brand transition" onClick={closeMobileMenu}>Dental Implants</Link>
            <Link href="/treatments/braces" className="text-sm hover:text-brand transition" onClick={closeMobileMenu}>Braces</Link>
            <Link href="/treatments/invisalign-treatment" className="text-sm hover:text-brand transition" onClick={closeMobileMenu}>Invisalign Treatment</Link>
            <Link href="/treatments/smile-designing" className="text-sm hover:text-brand transition" onClick={closeMobileMenu}>Smile Designing</Link>
            <Link href="/treatments" className="text-sm font-semibold text-brand transition mt-2" onClick={closeMobileMenu}>View All Treatments →</Link>
          </div>

          <Link href="/gallery" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Before & After</Link>
          <Link href="/blog" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Blog</Link>
          <Link href="/contact" className="px-2 hover:text-brand transition" onClick={closeMobileMenu}>Contact</Link>
          
          <Link href="/book-appointment" className="mt-4 bg-brand text-white px-4 py-3 rounded-xl font-semibold text-center shadow-md flex items-center justify-center" onClick={closeMobileMenu}>
            <Calendar className="w-5 h-5 mr-2" /> Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
