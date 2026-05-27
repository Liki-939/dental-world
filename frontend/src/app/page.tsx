import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Star, Clock, Shield, Award, Calendar, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-24 md:pb-0">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-brand-light/30 to-brand-light overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in-up">
              <div className="inline-block bg-white/80 backdrop-blur-sm text-brand-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-brand/20">
                ⭐ 4.9/5 Based on 500+ Google Reviews
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 mb-6 leading-tight text-balance">
                Advanced Dental Care for a <span className="text-brand bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-dark">Beautiful Smile</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
                Experience world-class dentistry with transparent pricing, advanced technology, and a patient-first approach in Hyderabad.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Link href="/book-appointment" className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
                <a href="https://wa.me/917997994646" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm font-medium text-slate-700">
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand mr-2" /> EMI Available</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-brand mr-2" /> Advanced Tech</div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative animate-fade-in-up-delay-1">
              <div className="absolute inset-0 bg-brand/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4 animate-pulse duration-1000"></div>
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border-[12px] border-white/50 backdrop-blur-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80" 
                  alt="Dentist treating patient" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-premium flex items-center space-x-4 border border-white animate-float">
                <div className="bg-gradient-to-br from-brand-light to-white p-3 rounded-xl text-brand shadow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">15+ Years</p>
                  <p className="text-xs text-brand font-bold uppercase tracking-wider">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-brand mb-3 bg-brand-light p-4 rounded-2xl"><Star className="w-8 h-8" /></div>
                <h3 className="font-bold text-xl text-slate-900">5000+</h3>
                <p className="text-sm text-slate-500">Happy Patients</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-brand mb-3 bg-brand-light p-4 rounded-2xl"><Shield className="w-8 h-8" /></div>
                <h3 className="font-bold text-xl text-slate-900">100%</h3>
                <p className="text-sm text-slate-500">Sterile & Safe</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-brand mb-3 bg-brand-light p-4 rounded-2xl"><Award className="w-8 h-8" /></div>
                <h3 className="font-bold text-xl text-slate-900">Advanced</h3>
                <p className="text-sm text-slate-500">Digital Technology</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-brand mb-3 bg-brand-light p-4 rounded-2xl"><Clock className="w-8 h-8" /></div>
                <h3 className="font-bold text-xl text-slate-900">0% EMI</h3>
                <p className="text-sm text-slate-500">Easy Payment Options</p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-20 bg-surface-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Our Specialised Treatments</h2>
              <p className="text-slate-600 text-lg">Comprehensive dental care tailored to your unique needs using state-of-the-art technology.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Treatment Card 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 group border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-light to-white text-brand rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">Dental Implants</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">Permanent, natural-looking tooth replacements that restore your smile and confidence.</p>
                <Link href="/treatments/dental-implants" className="text-brand font-semibold flex items-center group-hover:text-brand-dark">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Treatment Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 group border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-light to-white text-brand rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">Invisalign</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">Clear, comfortable, and discreet aligners for a perfectly straight smile without braces.</p>
                <Link href="/treatments/invisalign-treatment" className="text-brand font-semibold flex items-center group-hover:text-brand-dark">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Treatment Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 group border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-light to-white text-brand rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">Smile Makeover</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">Comprehensive cosmetic treatments including veneers and whitening for a flawless smile.</p>
                <Link href="/treatments/smile-designing" className="text-brand font-semibold flex items-center group-hover:text-brand-dark">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/treatments" className="inline-flex items-center text-slate-600 hover:text-brand font-semibold border-b-2 border-transparent hover:border-brand transition">
                View all treatments
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-50 p-4 flex gap-3 border-t border-white/50">
        <a href="tel:+917997994646" className="flex-1 bg-brand-light/80 text-brand font-bold py-3.5 rounded-xl flex items-center justify-center text-sm shadow-sm">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </a>
        <Link href="/book-appointment" className="flex-1 bg-gradient-to-r from-brand to-brand-dark text-white font-bold py-3.5 rounded-xl flex items-center justify-center text-sm shadow-md">
          Book Appt
        </Link>
      </div>

      <Footer />
    </div>
  );
}
