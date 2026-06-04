import { MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-4 z-40 bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg transition hover:scale-105 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" aria-hidden />
    </a>
  );
}
