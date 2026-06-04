"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown, Menu, X, MapPin, Calendar } from 'lucide-react';
import { LOCATIONS, NAV_LINKS, SITE, TREATMENT_NAV_LINKS } from '@/lib/site';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinkClass = (active: boolean) =>
    `hover:text-brand transition-colors py-1 relative ${active ? 'text-brand' : 'text-slate-700'}`;

  return (
    <header
      className={`w-full sticky top-0 z-[60] transition-all duration-300 border-b ${
        scrolled ? 'bg-white shadow-md border-slate-100' : 'bg-white/95 backdrop-blur-md shadow-sm border-slate-100'
      }`}
    >
      <div className="hidden lg:block bg-nav text-white text-xs py-2.5 border-b border-nav-border">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-6 font-semibold">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center text-slate-200 hover:text-white transition"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-light mr-1.5 shrink-0" aria-hidden />
                {loc.shortName}
              </Link>
            ))}
          </div>
          <a
            href={`tel:${SITE.phone.tel}`}
            className="flex items-center text-slate-200 hover:text-white transition font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-brand-light mr-1.5 shrink-0" aria-hidden />
            {SITE.phone.display}
          </a>
        </div>
      </div>

      <nav className="section-container flex justify-between items-center py-3" aria-label="Main">
        <Link href="/" className="flex items-center shrink-0" onClick={closeMobileMenu}>
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 relative rounded-full overflow-hidden bg-white shrink-0 shadow-sm border border-slate-100">
              <Image src="/logo.jpeg" alt="" width={44} height={44} className="object-contain p-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-ink leading-none font-heading">
                {SITE.name.toUpperCase()}
              </span>
              <span className="text-[8px] md:text-[9px] font-bold text-brand tracking-wider uppercase leading-none mt-0.5">
                {SITE.tagline}
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-5 xl:gap-6 font-semibold text-sm">
          {NAV_LINKS.map((link) => {
            const active = link.match(pathname);
            if (link.href === '/treatments') {
              return (
                <div key={link.href} className="relative group">
                  <Link href={link.href} className={`${navLinkClass(active)} flex items-center gap-0.5`}>
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" aria-hidden />
                    {active && <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand rounded-full" />}
                  </Link>
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                    {TREATMENT_NAV_LINKS.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors text-sm"
                      >
                        {t.label}
                      </Link>
                    ))}
                    <Link
                      href="/treatments"
                      className="block px-4 py-2 text-brand font-semibold border-t border-slate-100 mt-1 text-sm"
                    >
                      View all treatments →
                    </Link>
                  </div>
                </div>
              );
            }
            return (
              <Link key={link.href} href={link.href} className={navLinkClass(active)}>
                {link.label}
                {active && <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand rounded-full" />}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/book-appointment" className="hidden lg:inline-flex btn-primary text-sm !py-2.5 !px-5 !rounded-lg">
            <Calendar className="w-4 h-4 mr-2" aria-hidden />
            Book Consultation
          </Link>
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700 hover:text-brand transition-colors"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-y-auto max-h-[calc(100dvh-4rem)] ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'max-h-0 opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-4 px-4 gap-1 font-semibold text-slate-800">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-2 rounded-lg ${link.match(pathname) ? 'text-brand bg-brand-light/50' : 'hover:text-brand'}`}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-l-2 border-slate-100 ml-2 pl-4 py-2 space-y-1 text-sm text-slate-600">
            {TREATMENT_NAV_LINKS.map((t) => (
              <Link key={t.href} href={t.href} className="block hover:text-brand" onClick={closeMobileMenu}>
                {t.label}
              </Link>
            ))}
          </div>
          <Link href="/book-appointment" className="btn-primary mt-3 text-center" onClick={closeMobileMenu}>
            Book Consultation
          </Link>
          <a href={`tel:${SITE.phone.tel}`} className="text-center text-brand py-2 text-sm">
            {SITE.phone.display}
          </a>
        </div>
      </div>
    </header>
  );
}
