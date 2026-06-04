'use client';

import Link from 'next/link';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-pb">
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        <a
          href={`tel:${SITE.phone.tel}`}
          className="flex flex-col items-center justify-center py-3 text-slate-700 hover:text-brand transition"
        >
          <Phone className="w-5 h-5 mb-1" aria-hidden />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={SITE.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-green-600 hover:text-green-700 transition"
        >
          <MessageCircle className="w-5 h-5 mb-1" aria-hidden />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link
          href="/book-appointment"
          className="flex flex-col items-center justify-center py-3 bg-brand text-white hover:bg-brand-dark transition"
        >
          <Calendar className="w-5 h-5 mb-1" aria-hidden />
          <span className="text-[11px] font-semibold">Book</span>
        </Link>
      </div>
    </div>
  );
}
