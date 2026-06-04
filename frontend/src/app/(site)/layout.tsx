import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/layout/MobileActionBar';
import WhatsAppFab from '@/components/layout/WhatsAppFab';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <div id="main-content" className="flex flex-col flex-grow pb-16 lg:pb-0">
        {children}
      </div>
      <Footer />
      <MobileActionBar />
      <WhatsAppFab />
    </div>
  );
}
