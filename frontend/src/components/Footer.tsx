import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b1c3c] text-[#93a3bd] py-16 text-sm relative border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center text-white shadow-sm shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2C8.69,2,6,4.69,6,8C6,11.31,8.31,13.62,8.31,16.5C8.31,18.84,7,21,7,22C8.5,22,10.5,21,12,19.25C13.5,21,15.5,22,17,22C17,21,15.69,18.84,15.69,16.5C15.69,13.62,18,11.31,18,8C18,4.69,15.31,2,12,2Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none font-heading">DENTAL WORLD</span>
                <span className="text-[8px] font-bold text-blue-400 tracking-wider uppercase leading-none mt-0.5">EXPERT DENTAL CARE</span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-[13.5px]">
              Advanced dental care with compassion and excellence. Your smile is our passion.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3.5">
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 hover:border-blue-500 hover:text-white transition flex items-center justify-center text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 hover:border-blue-500 hover:text-white transition flex items-center justify-center text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 hover:border-blue-500 hover:text-white transition flex items-center justify-center text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.097-2.098C19.544 3.545 12 3.545 12 3.545s-7.544 0-9.401.52c-1.023.272-1.825 1.076-2.097 2.098C0 8.02 0 12 0 12s0 3.98.502 5.837c.272 1.022 1.074 1.826 2.097 2.098 1.857.52 9.401.52 9.401.52s7.544 0 9.401-.52c1.023-.272 1.825-1.076 2.097-2.098C24 15.98 24 12 24 12s0-3.98-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 hover:border-blue-500 hover:text-white transition flex items-center justify-center text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:pl-6">
            <h3 className="text-white font-bold mb-5 text-[15px] tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3 text-[13.5px]">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition">Treatments</Link></li>
              <li><Link href="/treatments/smile-designing" className="hover:text-white transition">Smile Makeover</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Treatments */}
          <div>
            <h3 className="text-white font-bold mb-5 text-[15px] tracking-wide uppercase">Our Treatments</h3>
            <ul className="space-y-3 text-[13.5px]">
              <li><Link href="/treatments/dental-implants" className="hover:text-white transition">Dental Implants</Link></li>
              <li><Link href="/treatments/root-canal-treatment" className="hover:text-white transition">Root Canal Treatment</Link></li>
              <li><Link href="/treatments/invisalign-treatment" className="hover:text-white transition">Invisalign & Braces</Link></li>
              <li><Link href="/treatments/teeth-whitening" className="hover:text-white transition">Teeth Whitening</Link></li>
              <li><Link href="/treatments/smile-designing" className="hover:text-white transition">Smile Makeover</Link></li>
              <li><Link href="/treatments/full-mouth-rehabilitation" className="hover:text-white transition">Full Mouth Rehabilitation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-5 text-[15px] tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-3.5 text-[13.5px]">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-400 mr-2.5 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+918247478663" className="hover:text-white transition font-bold text-white">+91 82474 78663</a>
              </li>
              
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-400 mr-2.5 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@dentalworldhyd.com" className="hover:text-white transition">info@dentalworldhyd.com</a>
              </li>
              
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-tight text-slate-350">
                  <strong className="text-white font-semibold">Pragathi Nagar:</strong> #7-1-398, Srinivasa Colony, Pragathi Nagar, Hyderabad - 500090
                </span>
              </li>
              
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-tight text-slate-350">
                  <strong className="text-white font-semibold">Bachupally:</strong> Plot No. 2, Main Road, Bachupally, Hyderabad - 500090
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-[13px] text-slate-500 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Dental World Hyderabad. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
