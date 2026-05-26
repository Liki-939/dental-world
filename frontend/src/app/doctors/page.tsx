import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors | Dental World',
  description: 'Meet the expert team of dentists and specialists at Dental World.',
};

const doctors = [
  {
    name: 'Dr. Sneha',
    title: 'Founder & Chief Dentist',
    specialties: ['General Dentistry', 'Cosmetic Dentistry'],
    image: '/sneha.jpg',
    description: 'Dr. Sneha brings a wealth of experience in providing comprehensive dental care, focusing on patient comfort and advanced treatment modalities.',
  },
  {
    name: 'Dr. Abdul Wahed',
    title: 'MDS Endodontics',
    specialties: ['Microscopic Endodontics', 'Root Canal Specialists'],
    image: '/dr.abdul.jpg',
    description: 'MFM Masters Fellowship in Microscopic Endodontics. Specializes in advanced root canal treatments ensuring painless and precise procedures.',
  },
  {
    name: 'Dr. Anurag',
    title: 'MDS Prosthodontics & Implantology',
    specialties: ['Implantology', 'Smile Designing'],
    image: '/anurag.jpg',
    description: 'Professor at Balaji Dental College. Chief Smile Designer, dedicated to restoring smiles with state-of-the-art implants and prosthetics.',
  },
  {
    name: 'Dr. Nithin Bharat',
    title: 'MDS Dentofacial Orthodontics',
    specialties: ['Orthodontics', 'Invisalign'],
    image: '/nithin.jpg',
    description: 'Invisalign Consultant specializing in correcting dental misalignments and providing aesthetic orthodontic solutions for all ages.',
  },
];

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-brand-dark py-20 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand opacity-90 z-0"></div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">Meet Our <span className="text-brand-light">Doctors</span></h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light">
              Our team of highly experienced dental surgeons and specialists are dedicated to providing you with the best painless dental treatments.
            </p>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100 flex flex-col"
                >
                  <div className="relative h-72 w-full bg-slate-200">
                    <Image 
                      src={doctor.image} 
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{doctor.name}</h3>
                      <p className="text-brand-light font-medium text-sm">{doctor.title}</p>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doctor.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {doctor.description}
                    </p>
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                      <div className="flex text-amber-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specialist</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-brand text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to transform your smile?</h2>
            <p className="text-lg text-brand-light mb-8">
              Book a consultation with our expert doctors today and take the first step towards perfect oral health.
            </p>
            <a href="/book-appointment" className="inline-block bg-white text-brand px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Your Appointment Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
