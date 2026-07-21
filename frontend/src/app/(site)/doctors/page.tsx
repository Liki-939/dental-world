import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors',
  description: 'Meet our team of board-certified dentists, orthodontists, endodontists, and oral surgeons at Dental World. Committed to advanced, painless treatments.',
};

const doctors = [
  {
    name: 'Dr. Sneha',
    title: 'Founder & Chief Dentist',
    specialties: ['General Dentistry', 'Cosmetic Dentistry'],
    image: '/sneha.jpg',
    description: 'Our founder and chief dentist, Dr. Sneha brings a wealth of experience in providing comprehensive dental care, focusing on patient comfort and advanced treatment modalities.',
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
    description: 'Completed placing 5000+ successful implants across all age groups of patients, with expertise in full mouth rehabilitation. Professor at Balaji Dental College and Chief Smile Designer, dedicated to restoring smiles with state-of-the-art implants and prosthetics.',
  },
  {
    name: 'Dr. Nithin Bharat',
    title: 'MDS Dentofacial Orthodontics',
    specialties: ['Orthodontics', 'Invisalign'],
    image: '/nithin.jpg',
    description: 'Platinum Invisalign Provider specializing in correcting dental misalignments and providing aesthetic orthodontic solutions for all ages.',
  },
  {
    name: 'Dr. Ch Sravan Kumar',
    title: 'MDS Periodontics',
    specialties: ['Periodontics', 'Laser Gum Treatment'],
    image: null,
    description: '15+ years of experience in laser gum treatment and periodontal care. Expert in advanced gum disease therapy and minimally invasive procedures, specializing in complex cases with a patient-focused approach for long-lasting results.',
  },
  {
    name: 'Dr. AN Supraja',
    title: 'MDS Pedodontist',
    specialties: ['Pediatric Dentistry', 'Painless Treatment'],
    image: null,
    description: '15+ years of experience in pediatric dental care. Specializes in gentle, fear-free treatment for children, with a child-friendly approach committed to building healthy smiles from an early age.',
  },
  {
    name: 'Dr. Yousuf Qureshi',
    title: 'MDS Oral & Maxillofacial Surgery',
    specialties: ['Oral Surgery', 'Wisdom Tooth Extraction'],
    image: null,
    description: '19+ years of surgical experience specializing in wisdom tooth removal, complex oral & maxillofacial surgeries, and advanced training in implant and facial trauma care.',
  },
];

export default function DoctorsPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="Meet Our"
        highlight="Doctors"
        description="Highly experienced dental surgeons and specialists dedicated to painless, advanced care."
      />

      <section className="py-24 bg-slate-50">
        <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100 flex flex-col"
                >
                  <div className="relative h-72 w-full bg-slate-200">
                    {doctor.image ? (
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand to-brand-dark">
                        <span className="text-5xl font-black text-white/90">
                          {doctor.name.replace('Dr. ', '').split(' ').map(w => w[0]).slice(0, 2).join('')}
                        </span>
                      </div>
                    )}
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

      <section className="py-20 bg-brand text-white text-center">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to transform your smile?</h2>
          <p className="text-lg text-brand-light mb-8">
            Book a consultation with our expert doctors today.
          </p>
          <Link href="/book-appointment" className="inline-block bg-white text-brand px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition shadow-lg">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
