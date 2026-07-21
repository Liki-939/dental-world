import Link from 'next/link';
import Image from 'next/image';
import type { SVGProps } from 'react';
import { Mail, MapPin, Phone, BookOpen } from 'lucide-react';
import { FOOTER_TREATMENT_LINKS, LANDING_GUIDE_LINKS, LOCATIONS, NAV_LINKS, SITE } from '@/lib/site';

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.4 3.6-6.4 3.6Z" />
    </svg>
  );
}
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Footer({ mediaMap }: { mediaMap?: Record<string, string> }) {
  const quickLinks = NAV_LINKS.filter((l) => l.href !== '/');
  const logoUrl = mediaMap?.footer_logo || mediaMap?.site_logo || '/images/logo.jpeg';

  return (
    <footer className="bg-nav text-slate-300 py-14 text-sm border-t border-nav-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 relative rounded-full overflow-hidden border border-slate-600 shrink-0">
                <Image
                  src={logoUrl}
                  alt="Dental World logo"
                  width={40}
                  height={40}
                  unoptimized={typeof logoUrl === 'string' && logoUrl.startsWith('data:')}
                  className="object-contain"
                />
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
            <p className="leading-relaxed text-slate-300">
              Advanced dental care with compassion and excellence. Your smile is our passion.
            </p>
            <div className="flex gap-3">
              {[
                { href: SITE.social.facebook, label: 'Facebook', Icon: FacebookIcon },
                { href: SITE.social.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: SITE.social.youtube, label: 'YouTube', Icon: YoutubeIcon },
                { href: SITE.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full border border-slate-600 hover:border-brand hover:bg-brand hover:text-white transition flex items-center justify-center"
                >
                  <s.Icon className="w-5 h-5" />
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
                    <p className="text-slate-300 mt-0.5 leading-snug">{loc.address}</p>
                    <a href={`tel:${loc.phone.tel}`} className="text-brand-light hover:text-white text-xs mt-1 inline-block">
                      {loc.phone.display}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specialized Clinical Guides & Landing Pages Row */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-brand-light" />
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Specialized Patient Guides & Clinical Landing Pages</h4>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {LANDING_GUIDE_LINKS.map((guide) => (
              <Link 
                key={guide.href} 
                href={guide.href} 
                className="bg-slate-800/80 hover:bg-brand text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg text-xs font-medium border border-slate-700 transition"
              >
                {guide.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
          <p>&copy; {new Date().getFullYear()} {SITE.name} Hyderabad. All rights reserved.</p>
          <p className="text-xs">
            {SITE.hours.weekdays} · {SITE.hours.sunday}
          </p>
        </div>
      </div>
    </footer>
  );
}
