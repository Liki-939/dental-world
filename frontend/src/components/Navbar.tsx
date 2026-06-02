"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown, Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    <header className={`w-full sticky top-0 z-[60] transition-all duration-500 border-b border-slate-100 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md shadow-sm'}`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0a1c3c] text-white text-[11.5px] py-2.5 border-b border-[#1e2d42]">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          {/* Left Locations */}
          <div className="flex items-center space-x-6 font-bold">
            <span className="flex items-center text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-blue-400 mr-1.5 shrink-0" />
              Pragathi Nagar
            </span>
            <span className="flex items-center text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-blue-400 mr-1.5 shrink-0" />
              Bachupally
            </span>
          </div>
          {/* Right Phone & Button */}
          <div className="flex items-center space-x-5 font-bold">
            <a href="tel:+9182474785663" className="flex items-center text-slate-200 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-blue-400 mr-1.5 shrink-0" />
              +91 82474 785663
            </a>
            <Link href="/book-appointment" className="bg-[#0056D2] hover:bg-blue-600 text-white px-3.5 py-1.5 rounded-[4px] font-extrabold text-[10px] uppercase tracking-wider transition">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 flex justify-between items-center relative max-w-7xl py-3.5">
        <Link href="/" className="flex items-center shrink-0" onClick={closeMobileMenu}>
          <div className="flex items-center space-x-2.5">
            <div className="w-11 h-11 rounded-full bg-[#ef4444] flex items-center justify-center text-white shadow-sm shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C8.69,2,6,4.69,6,8C6,11.31,8.31,13.62,8.31,16.5C8.31,18.84,7,21,7,22C8.5,22,10.5,21,12,19.25C13.5,21,15.5,22,17,22C17,21,15.69,18.84,15.69,16.5C15.69,13.62,18,11.31,18,8C18,4.69,15.31,2,12,2Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#0a1d37] leading-none font-heading">DENTAL WORLD</span>
              <span className="text-[8px] md:text-[9px] font-bold text-blue-600 tracking-wider uppercase leading-none mt-0.5">EXPERT DENTAL CARE</span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-bold text-slate-800 text-[14px]">
          <Link href="/" className={`hover:text-blue-600 transition-colors py-1 flex flex-col items-center relative ${pathname === '/' ? 'text-blue-600' : 'text-slate-850'}`}>
            Home
            {pathname === '/' && <span className="absolute -bottom-[15px] w-6 h-[2px] bg-blue-600 rounded"></span>}
          </Link>
          
          <Link href="/about" className={`hover:text-blue-600 transition-colors py-1 flex flex-col items-center relative ${pathname === '/about' ? 'text-blue-600' : 'text-slate-850'}`}>
            About Us
            {pathname === '/about' && <span className="absolute -bottom-[15px] w-6 h-[2px] bg-blue-600 rounded"></span>}
          </Link>
          
          <div className="relative group flex flex-col items-center">
            <Link href="/treatments" className={`hover:text-blue-600 transition-colors py-1 flex items-center relative ${pathname.startsWith('/treatments') ? 'text-blue-600' : 'text-slate-850'}`}>
              Treatments <ChevronDown className="w-3.5 h-3.5 ml-1 text-slate-500" />
              {pathname.startsWith('/treatments') && <span className="absolute -bottom-[15px] w-6 h-[2px] bg-blue-600 rounded"></span>}
            </Link>
            <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col py-2 font-semibold">
              <Link href="/treatments/dental-implants" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Dental Implants</Link>
              <Link href="/treatments/root-canal-treatment" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Root Canal Treatment</Link>
              <Link href="/treatments/invisalign-treatment" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Invisalign & Braces</Link>
              <Link href="/treatments/smile-designing" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Smile Makeover</Link>
              <Link href="/treatments/teeth-whitening" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Teeth Whitening</Link>
              <Link href="/treatments/pediatric-dentistry" className="px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Kids Dentistry</Link>
            </div>
          </div>

          <Link href="/gallery" className={`hover:text-blue-600 transition-colors py-1 flex flex-col items-center relative ${pathname === '/gallery' ? 'text-blue-600' : 'text-slate-850'}`}>
            Gallery
            {pathname === '/gallery' && <span className="absolute -bottom-[15px] w-6 h-[2px] bg-blue-600 rounded"></span>}
          </Link>
          
          <Link href="/blog" className={`hover:text-blue-600 transition-colors py-1 flex flex-col items-center relative ${pathname.startsWith('/blog') ? 'text-blue-600' : 'text-slate-850'}`}>
            Blog
            {pathname.startsWith('/blog') && <span className="absolute -bottom-[15px] w-6 h-[2px] bg-blue-600 rounded"></span>}
          </Link>
          
          <Link href="/contact" className={`hover:text-blue-600 transition-colors py-1 flex flex-col items-center relative ${pathname === '/contact' ? 'text-blue-600' : 'text-slate-850'}`}>
            Contact
            {pathname === '/contact' && <span className="absolute -bottom-[15px] w-6 h-[2px] bg-blue-600 rounded"></span>}
          </Link>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link href="/book-appointment" className="hidden lg:flex bg-[#0056D2] hover:bg-blue-700 text-white px-5 py-2.5 rounded-[5px] font-bold transition-all duration-300 items-center text-sm shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Consultation
          </Link>
          
          <button 
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
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
          <Link href="/" className={`px-2 transition ${pathname === '/' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`} onClick={closeMobileMenu}>Home</Link>
          <Link href="/about" className={`px-2 transition ${pathname === '/about' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`} onClick={closeMobileMenu}>About Us</Link>
          
          <div className="flex flex-col space-y-2 border-l-2 border-slate-100 ml-2 pl-4 py-1">
            <Link href="/treatments" className={`transition font-bold ${pathname.startsWith('/treatments') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`} onClick={closeMobileMenu}>Treatments</Link>
            <Link href="/treatments/dental-implants" className="text-sm text-slate-500 hover:text-blue-600 transition" onClick={closeMobileMenu}>Dental Implants</Link>
            <Link href="/treatments/root-canal-treatment" className="text-sm text-slate-500 hover:text-blue-600 transition" onClick={closeMobileMenu}>Root Canal Treatment</Link>
            <Link href="/treatments/invisalign-treatment" className="text-sm text-slate-500 hover:text-blue-600 transition" onClick={closeMobileMenu}>Invisalign & Braces</Link>
            <Link href="/treatments/smile-designing" className="text-sm text-slate-500 hover:text-blue-600 transition" onClick={closeMobileMenu}>Smile Makeover</Link>
            <Link href="/treatments/teeth-whitening" className="text-sm text-slate-500 hover:text-blue-600 transition" onClick={closeMobileMenu}>Teeth Whitening</Link>
            <Link href="/treatments/pediatric-dentistry" className="text-sm text-slate-500 hover:text-blue-600 transition" onClick={closeMobileMenu}>Kids Dentistry</Link>
          </div>

          <Link href="/gallery" className={`px-2 transition ${pathname === '/gallery' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`} onClick={closeMobileMenu}>Gallery</Link>
          <Link href="/blog" className={`px-2 transition ${pathname.startsWith('/blog') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`} onClick={closeMobileMenu}>Blog</Link>
          <Link href="/contact" className={`px-2 transition ${pathname === '/contact' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`} onClick={closeMobileMenu}>Contact</Link>
          
          <Link href="/book-appointment" className="mt-4 bg-[#0056D2] text-white px-4 py-3 rounded-[5px] font-bold text-center shadow-md flex items-center justify-center" onClick={closeMobileMenu}>
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
