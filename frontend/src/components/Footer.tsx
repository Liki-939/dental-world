import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-white text-brand p-2 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.69 2 6 4.69 6 8c0 1.5.5 2.89 1.35 4.04L12 22l4.65-9.96C17.5 10.89 18 9.5 18 8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4 0 1.05-.41 2.02-1.08 2.76L12 17.56l-2.92-6.8A3.99 3.99 0 018 8c0-2.21 1.79-4 4-4z" />
              </svg>
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl text-white leading-tight">DENTAL WORLD</h2>
              <p className="text-[0.65rem] text-slate-400 uppercase tracking-widest leading-tight">Smiles for Life</p>
            </div>
          </div>
          <p className="text-sm">Advanced dental care with compassion, technology, and transparency. Restoring smiles and confidence across Hyderabad.</p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/treatments" className="hover:text-white transition">Treatments</Link></li>
            <li><Link href="/doctors" className="hover:text-white transition">Our Doctors</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Smile Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Our Treatments</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/treatments/dental-implants" className="hover:text-white transition">Dental Implants</Link></li>
            <li><Link href="/treatments/root-canal-treatment" className="hover:text-white transition">Root Canal Treatment</Link></li>
            <li><Link href="/treatments/invisalign-treatment" className="hover:text-white transition">Invisalign</Link></li>
            <li><Link href="/treatments/smile-designing" className="hover:text-white transition">Smile Makeover</Link></li>
            <li><Link href="/treatments" className="hover:text-white transition">All Treatments</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              <span>Pragathi Nagar & Bachupally, Hyderabad</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📞</span>
              <div className="flex flex-col">
                <a href="tel:+918247478663" className="hover:text-white transition">+91 824 747 8663</a>
                <a href="tel:+919100061610" className="hover:text-white transition mt-1">+91 910 006 1610</a>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✉️</span>
              <a href="mailto:dentalworldmail@gmail.com" className="hover:text-white transition">dentalworldmail@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Dental World Hyderabad. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
