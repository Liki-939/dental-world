import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Phone, Mail, Check, Plus, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import BookAppointmentForm from '@/components/BookAppointmentForm';

export const NAVY = '#002D72';
export const NAVY_LIGHT = '#003B8F';
export const RED = '#E53935';

// ---------- Small atoms ----------

export function TopTrustBar({ items }: { items: string[] }) {
  return (
    <div className="text-white text-[10px] md:text-xs font-semibold" style={{ backgroundColor: NAVY_LIGHT }}>
      <div className="max-w-[1400px] mx-auto px-4 py-2 flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-1">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-current shrink-0" />
              {item}
            </span>
          ))}
        </div>
        <span className="hidden md:flex items-center gap-1.5 shrink-0">
          Open 7 Days a Week
        </span>
      </div>
    </div>
  );
}

export function StickyBottomBar({
  clinicLabel,
  phoneDisplay,
  phoneTel,
  whatsappUrl,
}: {
  clinicLabel: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappUrl: string;
}) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 text-white py-3 px-4 md:px-8 border-t border-slate-800 shadow-2xl z-50 flex items-center justify-between gap-3"
      style={{ backgroundColor: NAVY }}
    >
      <div className="hidden sm:flex items-center gap-3 min-w-0">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-blue-800">
          <Image src="/images/pediatric/ChatGPT Image Jun 22, 2026, 02_44_24 AM.png" alt="" fill className="object-cover scale-125" sizes="44px" />
        </div>
        <div className="min-w-0">
          <span className="text-[10px] text-blue-300 block font-black uppercase tracking-wider truncate">
            {clinicLabel}
          </span>
          <span className="text-xs font-bold leading-tight block">Don&apos;t wait &mdash; book today</span>
        </div>
      </div>
      <div className="flex gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
        <a
          href={`tel:${phoneTel}`}
          className="flex-1 sm:flex-initial text-white font-black px-3 md:px-6 py-3 rounded-xl text-[11px] md:text-sm transition flex items-center justify-center gap-1.5 md:gap-2 uppercase tracking-wide h-[48px]"
          style={{ backgroundColor: NAVY_LIGHT }}
        >
          <Phone className="w-4 h-4 fill-white text-white shrink-0" />
          <span className="hidden md:inline">Call: {phoneDisplay}</span>
          <span className="md:hidden">Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex flex-1 sm:flex-initial bg-[#25D366] hover:bg-emerald-600 text-white font-black px-3 md:px-6 py-3 rounded-xl text-[11px] md:text-sm transition items-center justify-center gap-1.5 md:gap-2 uppercase tracking-wide h-[48px]"
        >
          <span>WhatsApp</span>
        </a>
        <a
          href="#book-now"
          className="flex-1 sm:flex-initial bg-white text-[#002D72] font-black px-3 md:px-6 py-3 rounded-xl text-[11px] md:text-sm transition flex items-center justify-center uppercase tracking-wide shadow-md h-[48px]"
        >
          <span className="hidden md:inline">Book Appointment</span>
          <span className="md:hidden">Book</span>
        </a>
      </div>
    </div>
  );
}

// ---------- Hero ----------

export interface HeroCompareBadge {
  leftLabel: string;
  rightLabel: string;
  image?: string;
}

export function LandingHero({
  eyebrow,
  headlineLead,
  headlineMain,
  subtitle,
  desc,
  bullets,
  image,
  imageAlt,
  badgeTop,
  bookLabel,
  phoneDisplay,
  phoneTel,
  sideCard,
  beforeAfter,
  imageFit = 'cover',
}: {
  eyebrow?: string;
  headlineLead?: string;
  headlineMain: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  badgeTop?: string;
  bookLabel: string;
  phoneDisplay: string;
  phoneTel: string;
  sideCard?: ReactNode;
  beforeAfter?: { before: string; after: string };
  imageFit?: 'cover' | 'contain';
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#eef4ff] via-slate-50 to-white py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50" style={{ color: NAVY_LIGHT }}>
                <MapPin className="w-3.5 h-3.5" />
                {eyebrow}
              </div>
            )}

            <h1 className="font-heading font-black leading-[1.08] tracking-tight text-3xl md:text-4xl lg:text-[2.75rem]">
              {headlineLead && <span className="block text-slate-900">{headlineLead}</span>}
              <span className="block" style={{ color: NAVY_LIGHT }}>{headlineMain}</span>
            </h1>

            <p className="text-slate-700 font-bold text-sm md:text-base">{subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">{desc}</p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-700">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href="#book-now"
                className="text-white px-6 py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition"
                style={{ backgroundColor: NAVY }}
              >
                <Plus className="w-4 h-4" />
                {bookLabel}
              </a>
              <a
                href={`tel:${phoneTel}`}
                className="border-2 px-6 py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 bg-white hover:bg-slate-50 transition"
                style={{ borderColor: NAVY_LIGHT, color: NAVY_LIGHT }}
              >
                <Phone className="w-4 h-4" />
                Call Now {phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3.1] rounded-[2rem] overflow-hidden bg-white shadow-xl">
              <Image src={image} alt={imageAlt} fill className={imageFit === 'contain' ? 'object-contain' : 'object-cover'} priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>

            {badgeTop && (
              <div className="absolute top-3 right-3 md:top-5 md:right-5 bg-white rounded-2xl shadow-lg px-4 py-2.5 text-center border border-slate-100">
                <span className="block text-lg md:text-xl font-black" style={{ color: NAVY }}>{badgeTop.split(' ')[0]}</span>
                <span className="block text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                  {badgeTop.split(' ').slice(1).join(' ')}
                </span>
              </div>
            )}

            {sideCard}

            {beforeAfter && (
              <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 flex items-center gap-1.5 md:gap-2">
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden border-[3px] border-white shadow-lg">
                  <Image src={beforeAfter.before} alt="Before" fill className="object-cover" sizes="112px" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-slate-800/85 text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded">Before</span>
                </div>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: NAVY_LIGHT }} />
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden border-[3px] border-white shadow-lg">
                  <Image src={beforeAfter.after} alt="After" fill className="object-cover" sizes="112px" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: NAVY_LIGHT }}>After</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HealthyVsIssueBadge({ image }: { image: string }) {
  return (
    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white">
      <Image src={image} alt="Comparison" fill className="object-cover" sizes="144px" />
    </div>
  );
}

// ---------- Stats bar ----------

export interface StatItem { icon: ReactNode; label: string; sub: string }

export function StatsBar({ items }: { items: StatItem[] }) {
  return (
    <section className="py-5" style={{ backgroundColor: NAVY_LIGHT }}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center text-white">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 justify-center lg:justify-start">
              <div className="shrink-0">{item.icon}</div>
              <div className="leading-tight">
                <span className="block font-black text-sm md:text-base">{item.label}</span>
                <span className="block text-[9px] md:text-[10px] uppercase tracking-wide text-blue-200 font-bold">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Services / treatment grid (image-card style) ----------

export interface ServiceCard { image: string; title: string; desc: string }

export function ServiceImageGrid({ title, subtitle, items, cols = 6, showCaption = true, fit = 'cover' }: { title: string; subtitle?: string; items: ServiceCard[]; cols?: number; showCaption?: boolean; fit?: 'cover' | 'contain' }) {
  const colClass = cols >= 6 ? 'lg:grid-cols-6' : cols === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 space-y-1.5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-black" style={{ color: NAVY }}>{title}</h2>
          {subtitle && <p className="text-slate-500 text-xs md:text-sm font-semibold">{subtitle}</p>}
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-3 ${colClass} gap-4 md:gap-5`}>
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-square w-full bg-white">
                <Image src={item.image} alt={item.title} fill className={fit === 'contain' ? 'object-contain p-2' : 'object-cover'} sizes="(max-width: 640px) 50vw, 200px" />
              </div>
              {showCaption && (
                <div className="p-3 text-center">
                  <h4 className="font-extrabold text-xs md:text-sm leading-tight" style={{ color: NAVY }}>{item.title}</h4>
                  {item.desc && <p className="text-[10px] md:text-[11px] text-slate-500 font-semibold mt-1 leading-snug">{item.desc}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface ServiceIconCard { icon: ReactNode; title: string; desc?: string }

export function ServiceIconGrid({ title, subtitle, items, cols = 6 }: { title: string; subtitle?: string; items: ServiceIconCard[]; cols?: number }) {
  const colClass = cols >= 6 ? 'lg:grid-cols-6' : cols === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 space-y-1.5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-black" style={{ color: NAVY }}>{title}</h2>
          {subtitle && <p className="text-slate-500 text-xs md:text-sm font-semibold">{subtitle}</p>}
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-3 ${colClass} gap-4 md:gap-5`}>
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-150 rounded-2xl p-5 flex flex-col items-center text-center gap-2.5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0" style={{ color: NAVY_LIGHT }}>
                {item.icon}
              </div>
              <h4 className="font-extrabold text-xs md:text-sm leading-tight" style={{ color: NAVY }}>{item.title}</h4>
              {item.desc && <p className="text-[10px] md:text-[11px] text-slate-500 font-semibold leading-snug">{item.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- How it works (icon step flow) ----------

export interface StepItem { icon: ReactNode; title: string; desc?: string }

export function HowItWorksFlow({ title, steps }: { title: string; steps: StepItem[] }) {
  return (
    <section className="py-14 bg-[#F7F9FC]">
      <div className="max-w-[1300px] mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-heading font-black mb-10" style={{ color: NAVY }}>{title}</h2>
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-x-2 gap-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="flex flex-col items-center text-center w-24 md:w-28">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-2.5 shrink-0" style={{ color: NAVY_LIGHT }}>
                    {step.icon}
                  </div>
                  <span className="text-xs md:text-sm font-black text-slate-800 leading-tight">{step.title}</span>
                  {step.desc && <span className="text-[10px] text-slate-500 font-semibold mt-1 leading-snug">{step.desc}</span>}
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-blue-300 mx-2 md:mx-3 shrink-0 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Symptoms + Emergency ----------

export interface SymptomItem { icon: ReactNode; label: string }

export function SymptomsEmergency({
  title,
  symptoms,
  emergencyTitle,
  emergencyItems,
  ctaLabel,
  phoneDisplay,
  phoneTel,
}: {
  title: string;
  symptoms: SymptomItem[];
  emergencyTitle: string;
  emergencyItems: string[];
  ctaLabel: string;
  phoneDisplay: string;
  phoneTel: string;
}) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-heading font-black mb-8 flex items-center gap-2" style={{ color: NAVY }}>
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {symptoms.map((s, idx) => (
              <div key={idx} className="border border-slate-150 rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:shadow-md transition">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0" style={{ color: NAVY_LIGHT }}>
                  {s.icon}
                </div>
                <span className="text-[11px] md:text-xs font-bold text-slate-700 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 text-white rounded-3xl p-6 flex flex-col justify-between shadow-lg" style={{ backgroundColor: RED }}>
            <div className="space-y-3">
              <h3 className="text-lg font-black">{emergencyTitle}</h3>
              <p className="text-xs font-semibold text-red-100">Early treatment can prevent</p>
              <ul className="space-y-1.5">
                {emergencyItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold">
                    <Check className="w-4 h-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`tel:${phoneTel}`}
              className="mt-5 bg-white font-black text-xs px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 transition"
              style={{ color: RED }}
            >
              <Phone className="w-4 h-4" />
              {ctaLabel}: {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Real results / before-after row ----------

export interface ResultItem { label: string; before: string; after: string }

const RESULTS_COLS: Record<number, string> = {
  2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4', 5: 'md:grid-cols-5',
};

export function RealResultsRow({ title, items }: { title: string; items: ResultItem[] }) {
  return (
    <section className="py-14 bg-[#F7F9FC]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-lg md:text-xl font-heading font-black mb-8 tracking-wide" style={{ color: NAVY_LIGHT }}>
          {title}
        </h2>
        <div className={`grid grid-cols-2 ${RESULTS_COLS[Math.min(items.length, 5)] || 'md:grid-cols-5'} gap-4`}>
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-150 shadow-sm">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image src={item.before} alt={`${item.label} before`} fill className="object-cover" sizes="150px" />
                </div>
                <div className="relative aspect-square">
                  <Image src={item.after} alt={`${item.label} after`} fill className="object-cover" sizes="150px" />
                </div>
              </div>
              <div className="flex text-[9px] font-bold text-center">
                <span className="w-1/2 py-1 bg-slate-700 text-white">Before</span>
                <span className="w-1/2 py-1" style={{ backgroundColor: NAVY_LIGHT, color: 'white' }}>After</span>
              </div>
              <p className="text-center text-xs font-extrabold py-2 text-slate-800">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Doctor profile card ----------

export function DoctorProfileCard({
  name,
  title,
  image,
  experienceBadge,
  bullets,
  eyebrow = 'Meet Our Specialist',
}: {
  name: string;
  title: string;
  image?: string | null;
  experienceBadge: string;
  bullets: string[];
  eyebrow?: string;
}) {
  const initials = name.replace(/^Dr\.?\s+/i, '').split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <div className="bg-[#F7F9FC] border border-slate-150 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
      <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-blue-800 to-blue-950 flex items-center justify-center border-4 border-white shadow-md">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover object-top" sizes="144px" />
        ) : (
          <span className="text-3xl font-black text-white/90">{initials}</span>
        )}
      </div>
      <div className="space-y-2.5 text-center sm:text-left">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: NAVY_LIGHT }}>{eyebrow}</span>
        <h3 className="text-xl md:text-2xl font-black" style={{ color: NAVY }}>{name}</h3>
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <span className="inline-block text-white text-xs font-bold px-3.5 py-1.5 rounded-lg" style={{ backgroundColor: NAVY_LIGHT }}>
          {experienceBadge}
        </span>
        <ul className="space-y-1.5 pt-1">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm font-semibold text-slate-700 justify-center sm:justify-start">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function QuoteCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-white border border-slate-150 rounded-3xl p-6 md:p-8 flex flex-col justify-center h-full">
      <span className="text-4xl font-black leading-none mb-2" style={{ color: NAVY_LIGHT }}>&ldquo;</span>
      <p className="text-slate-700 font-bold leading-relaxed text-sm md:text-base">{quote}</p>
      <span className="mt-4 text-sm font-black" style={{ color: NAVY }}>&mdash; {author}</span>
    </div>
  );
}

// ---------- Why choose row ----------

export interface WhyChooseItem { icon: ReactNode; title: string; desc?: string }

export function WhyChooseRow({ title, items }: { title: string; items: WhyChooseItem[] }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-lg md:text-xl font-heading font-black mb-8" style={{ color: NAVY }}>{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0" style={{ color: NAVY_LIGHT }}>
                {item.icon}
              </div>
              <span className="text-xs md:text-sm font-black text-slate-800 leading-tight">{item.title}</span>
              {item.desc && <span className="text-[10px] text-slate-500 font-semibold leading-tight">{item.desc}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Keyword checklist (Dentures / Wisdom tooth style) ----------

const CHECKLIST_COLS: Record<number, string> = {
  1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4',
};

export function KeywordChecklist({ title, columns }: { title: string; columns: string[][] }) {
  return (
    <div className="bg-white border border-slate-150 rounded-3xl p-6 md:p-8 shadow-sm">
      <h3 className="text-lg md:text-xl font-heading font-black mb-4" style={{ color: NAVY }}>{title}</h3>
      <div className={`grid grid-cols-1 ${CHECKLIST_COLS[columns.length] || 'sm:grid-cols-2'} gap-x-6 gap-y-2`}>
        {columns.map((col, cIdx) => (
          <div key={cIdx} className="space-y-2">
            {col.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs md:text-sm font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- SEO pills ----------

export function SeoPillsRow({ title, pills }: { title: string; pills: string[] }) {
  return (
    <section className="py-10 bg-[#F7F9FC]">
      <div className="max-w-[1300px] mx-auto px-4 text-center">
        <h2 className="text-lg md:text-xl font-heading font-black mb-5" style={{ color: NAVY_LIGHT }}>{title}</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {pills.map((pill, idx) => (
            <span key={idx} className="bg-white border border-blue-100 text-[11px] md:text-xs font-bold px-4 py-2 rounded-full" style={{ color: NAVY_LIGHT }}>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Mini FAQ accordion (compact style matching mockups) ----------

export function MiniFAQList({ faqs }: { faqs: { question: string; answer?: string }[] }) {
  return (
    <div className="space-y-2.5">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white border border-slate-150 rounded-xl px-4 py-3.5 flex items-center justify-between gap-3 shadow-sm">
          <span className="text-xs md:text-sm font-bold text-slate-800">{faq.question}</span>
          <Plus className="w-4 h-4 shrink-0" style={{ color: NAVY_LIGHT }} />
        </div>
      ))}
    </div>
  );
}

// ---------- FAQ + Reviews + Final CTA three-col row ----------

export interface ReviewSnippet { name: string; text: string; rating?: number }

export function FaqReviewsCta({
  faqs,
  reviews,
  ctaTitle,
  ctaDesc,
  ctaChecks,
  bookLabel,
  phoneDisplay,
  phoneTel,
}: {
  faqs: { question: string }[];
  reviews: ReviewSnippet[];
  ctaTitle: string;
  ctaDesc: string;
  ctaChecks: string[];
  bookLabel: string;
  phoneDisplay: string;
  phoneTel: string;
}) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div>
            <h3 className="text-lg font-heading font-black mb-4" style={{ color: NAVY }}>Frequently Asked Questions</h3>
            <MiniFAQList faqs={faqs} />
            <Link href="/faq" className="inline-block mt-4 text-white text-xs font-black px-5 py-2.5 rounded-lg" style={{ backgroundColor: NAVY }}>
              View All FAQs
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-heading font-black mb-1" style={{ color: NAVY }}>What Our Patients Say</h3>
            {reviews.map((r, idx) => (
              <div key={idx} className="bg-[#F7F9FC] border border-slate-150 rounded-2xl p-4">
                <div className="flex text-amber-400 mb-1.5">
                  {[...Array(r.rating || 5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-xs text-slate-600 font-semibold italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <span className="text-xs font-black text-slate-800 mt-1.5 block">&mdash; {r.name}</span>
              </div>
            ))}
          </div>

          <div className="text-white rounded-3xl p-6 md:p-7 flex flex-col justify-between shadow-lg" style={{ backgroundColor: RED }}>
            <div className="space-y-3">
              <h3 className="text-xl font-black">{ctaTitle}</h3>
              <p className="text-sm text-red-100 font-semibold leading-relaxed">{ctaDesc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                {ctaChecks.map((c, idx) => (
                  <span key={idx} className="flex items-center gap-1 text-xs font-bold">
                    <Check className="w-3.5 h-3.5" /> {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-2.5">
              <a href="#book-now" className="block bg-white font-black text-sm px-4 py-3 rounded-xl text-center hover:bg-red-50 transition" style={{ color: RED }}>
                {bookLabel}
              </a>
              <a href={`tel:${phoneTel}`} className="block text-center text-xs font-bold text-white/90">
                or Call Now {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Locations ----------

export interface LocationInfo {
  name: string;
  address: string;
  phoneDisplay: string;
  phoneTel: string;
  image: string;
}

const LOCATIONS_COLS: Record<number, string> = {
  2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4',
};

export function LocationsSection({ locations, email }: { locations: LocationInfo[]; email: string }) {
  return (
    <section className="py-14 bg-[#F7F9FC]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-lg md:text-xl font-heading font-black mb-8 flex items-center justify-center gap-2" style={{ color: NAVY }}>
          <MapPin className="w-5 h-5" /> Our Locations
        </h2>
        <div className={`grid grid-cols-1 ${LOCATIONS_COLS[locations.length + 1] || 'md:grid-cols-3'} gap-5`}>
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-150 shadow-sm overflow-hidden flex gap-4 p-4">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                <Image src={loc.image} alt={loc.name} fill className="object-cover" sizes="96px" />
              </div>
              <div className="min-w-0">
                <h4 className="font-black text-sm uppercase tracking-tight" style={{ color: NAVY_LIGHT }}>{loc.name}</h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1 leading-snug line-clamp-3">{loc.address}</p>
                <a href={`tel:${loc.phoneTel}`} className="text-[11px] font-bold mt-1 inline-block" style={{ color: NAVY }}>{loc.phoneDisplay}</a>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-2xl border border-slate-150 shadow-sm p-4 flex flex-col items-center justify-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center" style={{ color: NAVY_LIGHT }}>
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-black text-xs uppercase tracking-wide" style={{ color: NAVY }}>Email Us</span>
            <a href={`mailto:${email}`} className="text-[11px] font-semibold text-slate-500 break-all">{email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Comparison table ----------

export interface ComparisonRow { feature: string; main: string; alt: string; alt2?: string }

export function ComparisonTable({ title, headers, rows }: { title: string; headers: string[]; rows: ComparisonRow[] }) {
  return (
    <div className="bg-white border border-slate-150 rounded-3xl p-6 shadow-sm">
      <h3 className="text-lg md:text-xl font-heading font-black mb-4" style={{ color: NAVY }}>{title}</h3>
      <div className="border border-slate-100 rounded-2xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 uppercase font-bold text-slate-500 border-b border-slate-100">
            <tr>
              {headers.map((h, idx) => (
                <th key={idx} className={`px-3.5 py-3 whitespace-nowrap ${idx === 1 ? 'text-center bg-blue-50/40' : idx > 1 ? 'text-center' : ''}`} style={idx === 1 ? { color: NAVY_LIGHT } : undefined}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="px-3.5 py-3 font-black text-slate-800">{row.feature}</td>
                <td className="px-3.5 py-3 text-center font-extrabold bg-blue-50/20" style={{ color: NAVY_LIGHT }}>{row.main}</td>
                <td className="px-3.5 py-3 text-center font-semibold text-slate-500">{row.alt}</td>
                {row.alt2 && <td className="px-3.5 py-3 text-center font-semibold text-slate-500">{row.alt2}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---------- Cost card ----------

export function CostHighlightCard({
  title,
  price,
  disclaimer,
  bullets,
  image,
}: {
  title: string;
  price: string;
  disclaimer: string;
  bullets: string[];
  image?: string;
}) {
  return (
    <div className="bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
      {image && (
        <div className="relative min-h-[220px] md:min-h-full">
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
        </div>
      )}
      <div className="p-6 md:p-7 space-y-4">
        <h3 className="text-lg font-heading font-black" style={{ color: NAVY }}>{title}</h3>
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Starting From</span>
          <div className="text-3xl font-black" style={{ color: NAVY }}>{price}</div>
          <p className="text-[11px] text-slate-400 font-semibold mt-1">{disclaimer}</p>
        </div>
        <ul className="space-y-1.5">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" /> {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------- Final glow CTA banner (Smile Designing style) ----------

export function GlowCtaBanner({
  title,
  desc,
  bookLabel,
  phoneDisplay,
  phoneTel,
  chips,
}: {
  title: string;
  desc: string;
  bookLabel: string;
  phoneDisplay: string;
  phoneTel: string;
  chips?: string[];
}) {
  return (
    <section className="py-8 px-4">
      <div className="max-w-[1400px] mx-auto rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 justify-between" style={{ backgroundColor: NAVY }}>
        <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ backgroundColor: NAVY_LIGHT }} />
        <div className="text-white space-y-1.5 relative z-10 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-heading font-black leading-tight">{title}</h3>
          <p className="text-blue-100 text-sm font-semibold max-w-lg">{desc}</p>
          {chips && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 justify-center md:justify-start">
              {chips.map((c, idx) => <span key={idx} className="text-[11px] font-bold text-blue-200">✓ {c}</span>)}
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
          <a href="#book-now" className="bg-white font-black text-sm px-6 py-3.5 rounded-xl text-center hover:bg-slate-100 transition" style={{ color: NAVY }}>
            {bookLabel}
          </a>
          <a href={`tel:${phoneTel}`} className="border-2 border-white text-white font-black text-sm px-6 py-3.5 rounded-xl text-center hover:bg-white/10 transition">
            Call Now: {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Booking form section wrapper ----------

export function BookingFormSection({ title, treatment }: { title: string; treatment: string }) {
  return (
    <section id="book-now" className="py-14 bg-[#F7F9FC]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white border border-slate-150 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg md:text-xl font-heading font-black mb-1 text-center" style={{ color: NAVY }}>{title}</h3>
          <p className="text-center text-xs text-slate-500 font-semibold mb-6">Our team will contact you within minutes to confirm your slot.</p>
          <BookAppointmentForm defaultTreatment={treatment} />
        </div>
      </div>
    </section>
  );
}
