import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FOOTER_TREATMENT_LINKS, LOCATIONS, NAV_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  const quickLinks = NAV_LINKS.filter((l) => l.href !== '/');

  return (
    <footer className="bg-nav text-slate-400 py-14 text-sm border-t border-nav-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 relative rounded-full overflow-hidden border border-slate-600 shrink-0">
                <Image src="/logo.jpeg" alt="" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white leading-none font-heading">
                  {SITE.name.toUpperCase()}
                </span>
                <span className="text-[8px] font-bold text-brand-light tracking-wider uppercase mt-0.5">
                  {SITE.tagline}
                </span>
              </div>
            </div>
            <p className="leading-relaxed text-slate-400">
              Advanced dental care with compassion and excellence. Your smile is our passion.
            </p>
            <div className="flex gap-3">
              {[
                { href: SITE.social.facebook, label: 'Facebook' },
                { href: SITE.social.instagram, label: 'Instagram' },
                { href: SITE.social.youtube, label: 'YouTube' },
                { href: SITE.social.linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-slate-600 hover:border-brand hover:text-white transition flex items-center justify-center"
                >
                  <span className="text-xs font-bold">{s.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book-appointment" className="hover:text-white transition font-semibold text-brand-light">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Treatments</h3>
            <ul className="space-y-2.5">
              {FOOTER_TREATMENT_LINKS.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="hover:text-white transition">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-light mt-0.5 shrink-0" aria-hidden />
                <a href={`tel:${SITE.phone.tel}`} className="hover:text-white font-semibold text-white transition">
                  {SITE.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-light mt-0.5 shrink-0" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition">
                  {SITE.email}
                </a>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.slug} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-light mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <Link href={`/locations/${loc.slug}`} className="text-white font-semibold hover:text-brand-light">
                      {loc.name}
                    </Link>
                    <p className="text-slate-400 mt-0.5 leading-snug">{loc.address}</p>
                    <a href={`tel:${loc.phone.tel}`} className="text-brand-light hover:text-white text-xs mt-1 inline-block">
                      {loc.phone.display}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; {new Date().getFullYear()} {SITE.name} Hyderabad. All rights reserved.</p>
          <p className="text-xs">
            {SITE.hours.weekdays} · {SITE.hours.sunday}
          </p>
        </div>
      </div>
    </footer>
  );
}
