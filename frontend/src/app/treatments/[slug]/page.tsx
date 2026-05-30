import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'), { ssr: true });
const TreatmentCostCards = dynamic(() => import('@/components/TreatmentCostCards'), { ssr: true });

import { 
  Calendar, Phone, Shield, Star, CheckCircle2, Award, Stethoscope,
  Activity, UserCheck, ShieldCheck, HeartPulse, ScanLine, Hospital, MapPin, Smile, ChevronRight
} from 'lucide-react';
import { treatmentsData } from '@/data/treatments';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = treatmentsData[slug];
  
  if (!data) return { title: 'Treatment Not Found' };

  return {
    title: `${data.title} in Hyderabad | Dental World`,
    description: data.hero_subheadline,
  };
}

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((slug) => ({
    slug,
  }));
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentsData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="bg-[#EEF2FF] pt-12 pb-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[120%] bg-blue-100/50 rounded-full blur-3xl rounded-l-full mix-blend-multiply opacity-50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="flex gap-2 text-sm font-semibold text-brand mb-4">
                <span className="bg-brand-light px-3 py-1 rounded-full">Affordable</span>
                <span className="text-slate-300">•</span>
                <span className="bg-brand-light px-3 py-1 rounded-full">Advanced</span>
                <span className="text-slate-300">•</span>
                <span className="bg-brand-light px-3 py-1 rounded-full">Trusted</span>
              </div>
              
              <h1 className="text-3xl sm:text-[2.1rem] md:text-5xl lg:text-[54px] leading-[1.15] sm:leading-[1.1] font-heading font-extrabold text-slate-900 mb-4">
                {data.title} Cost <br/>in <span className="text-brand">Hyderabad</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 mb-8 font-medium max-w-lg">
                Transparent Pricing. Advanced Technology. <br className="hidden md:block"/>Beautiful, Permanent Smiles.
              </p>

              {/* Trust Indicators in Hero */}
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/60 px-2 sm:px-4 py-2 rounded-xl border border-white">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-tight text-slate-900">15+</div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/60 px-2 sm:px-4 py-2 rounded-xl border border-white">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-tight text-slate-900">5000+</div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Happy Patients</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/60 px-2 sm:px-4 py-2 rounded-xl border border-white">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-tight text-slate-900">Advanced</div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Technology</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/60 px-2 sm:px-4 py-2 rounded-xl border border-white">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm leading-tight text-slate-900">EMI</div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Options Available</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/book-appointment" className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-bold text-base transition shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" /> Get Personalized Cost Estimate
                </Link>
                <a href="https://wa.me/918247478663" className="w-full sm:w-auto bg-white hover:bg-green-50 text-green-600 px-8 py-3.5 rounded-full font-bold text-base transition shadow-sm border border-slate-200 flex items-center justify-center">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={20} height={20} className="mr-2" /> WhatsApp Us Now
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative flex justify-center lg:justify-end">

              <div className="relative w-full max-w-[500px] aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white/50 shadow-2xl">
                <Image 
                  src={data.infographic || '/smilemakeover.png'} 
                  alt={`${data.title} Patient`} 
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700 py-5">
            <div className="flex items-center justify-center gap-3 px-2">
              <Smile className="w-8 h-8 text-brand-light" />
              <div>
                <div className="font-bold text-lg md:text-xl leading-none">5000+</div>
                <div className="text-xs text-slate-300">Smiles Restored</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-2">
              <Award className="w-8 h-8 text-brand-light" />
              <div>
                <div className="font-bold text-lg md:text-xl leading-none">15+</div>
                <div className="text-xs text-slate-300">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-2">
              <ScanLine className="w-8 h-8 text-brand-light" />
              <div>
                <div className="font-bold text-lg md:text-xl leading-none">Advanced</div>
                <div className="text-xs text-slate-300">Digital Technology</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-2">
              <ShieldCheck className="w-8 h-8 text-brand-light" />
              <div>
                <div className="font-bold text-lg md:text-xl leading-none">100%</div>
                <div className="text-xs text-slate-300">Sterile & Safe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* 3. Why Cost Varies */}
          <div className="lg:w-[35%] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8 leading-tight">Why Does {data.title.replace('Treatment', '').trim()} Cost Vary?</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-2" />
                <span className="text-xs font-semibold text-slate-700">Material Brand</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-pink-50 border border-pink-100">
                <HeartPulse className="w-8 h-8 text-pink-500 mb-2" />
                <span className="text-xs font-semibold text-slate-700">Patient Condition</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-orange-50 border border-orange-100">
                <Activity className="w-8 h-8 text-orange-500 mb-2" />
                <span className="text-xs font-semibold text-slate-700">Complexity</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-green-50 border border-green-100">
                <ScanLine className="w-8 h-8 text-green-500 mb-2" />
                <span className="text-xs font-semibold text-slate-700">Technology Used</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <Stethoscope className="w-8 h-8 text-purple-500 mb-2" />
                <span className="text-xs font-semibold text-slate-700">Doctor&apos;s Expertise</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                <Hospital className="w-8 h-8 text-indigo-500 mb-2" />
                <span className="text-xs font-semibold text-slate-700">Clinic Location</span>
              </div>
            </div>

            <p className="text-sm text-slate-600">Every smile is unique. We customize the best treatment plan for you after a detailed consultation & scan.</p>
          </div>

          {/* 4. Cost Cards Area */}
          <div className="lg:w-[65%] w-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-slate-900 inline-block relative pb-2 border-b border-slate-300">
                {data.title.replace('Treatment', '').trim()} Cost in Hyderabad
              </h2>
            </div>
            
            <TreatmentCostCards plans={data.pricing} />
            
            <div className="mt-8 bg-slate-50 rounded-2xl flex flex-wrap items-center justify-center gap-6 py-4 px-6 border border-slate-200">
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand mr-2" /> No Hidden Costs
              </div>
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand mr-2" /> Transparent Pricing
              </div>
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand mr-2" /> International Standard Systems
              </div>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-3">*Conditions Apply | Exact cost after consultation & scan</p>
          </div>
        </div>
      </div>

      {/* 5. EMI & Why Choose Us */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* EMI Banner */}
            <div className="lg:w-[45%] bg-[#EEF2FF] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-center min-h-[280px]">
              <div className="relative z-10 w-[60%] sm:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">Easy on Pocket with <br/>EMI Options</h2>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                  <li className="flex items-start sm:items-center text-xs sm:text-sm font-bold text-slate-800"><CheckCircle2 className="w-4 h-4 text-brand mr-2 mt-0.5 sm:mt-0 shrink-0" /> 0% Interest EMI Available</li>
                  <li className="flex items-start sm:items-center text-xs sm:text-sm font-bold text-slate-800"><CheckCircle2 className="w-4 h-4 text-brand mr-2 mt-0.5 sm:mt-0 shrink-0" /> Flexible Monthly Payments</li>
                  <li className="flex items-start sm:items-center text-xs sm:text-sm font-bold text-slate-800"><CheckCircle2 className="w-4 h-4 text-brand mr-2 mt-0.5 sm:mt-0 shrink-0" /> All Major Cards Accepted</li>
                  <li className="flex items-start sm:items-center text-xs sm:text-sm font-bold text-slate-800"><CheckCircle2 className="w-4 h-4 text-brand mr-2 mt-0.5 sm:mt-0 shrink-0" /> Insurance Guidance Available</li>
                </ul>
              </div>
              <div className="absolute right-0 bottom-0 h-[80%] sm:h-[110%] w-[45%] sm:w-[50%]">
                <Image src="/couple.png" alt="Happy Couple" fill className="object-cover object-bottom" />
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="lg:w-[55%] bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8 text-center">Why Choose Dental World for {data.title.replace('Treatment', '').trim()}?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mr-4 shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">Expert Specialists</div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mr-4 shrink-0">
                    <ScanLine className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">3D Digital Scanning & Planning</div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">International Quality Systems</div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mr-4 shrink-0">
                    <Smile className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">Minimally Invasive & Painless</div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mr-4 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">High Success Rate & Long Lasting</div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mr-4 shrink-0">
                    <Hospital className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">Complete Care Under One Roof</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Real Transformations & Testimonials */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-10 text-center">Real Transformations. Real Smiles.</h2>
          
          {data.cases && data.cases.length > 0 && (
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              <div className="flex-1 flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {data.cases.map((caseItem, idx) => (
                  <div key={idx} className="min-w-[300px] bg-white p-2 rounded-3xl shadow-sm border border-slate-100 relative group flex gap-1">
                    <div className="w-1/2 relative h-[180px]">
                      <Image src={caseItem.beforeImg} alt="Before" fill className="object-cover rounded-l-2xl rounded-r-sm" />
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">Before</div>
                    </div>
                    <div className="w-1/2 relative h-[180px]">
                      <Image src={caseItem.afterImg} alt="After" fill className="object-cover rounded-r-2xl rounded-l-sm" />
                      <div className="absolute bottom-2 right-2 bg-brand/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">After</div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Happy Patients Love Us Box */}
              <div className="lg:w-[280px] bg-slate-900 rounded-3xl p-6 text-center text-white flex flex-col justify-center items-center shadow-lg shrink-0">
                <h3 className="text-xl font-bold mb-6">Happy Patients Love Us!</h3>
                <div className="bg-white rounded-2xl p-4 w-full">
                  <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-blue-600">G</span>
                    <span className="text-xl font-bold text-slate-900">4.9/5</span>
                  </div>
                  <div className="text-slate-900 font-bold text-lg mb-1">5000+</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Google Reviews</div>
                </div>
              </div>
            </div>
          )}

          {/* Testimonials Inline */}
          {data.testimonials && data.testimonials.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.testimonials.slice(0,3).map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative">
                  <div className="text-brand text-4xl font-serif absolute top-4 left-4 opacity-20">&quot;</div>
                  <p className="text-slate-700 text-sm font-medium italic mb-4 relative z-10 pt-4">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center mt-auto pt-4 border-t border-slate-50">
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand font-bold mr-3">
                      {testimonial.patient_name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{testimonial.patient_name}</div>
                      <div className="flex gap-0.5 text-yellow-400">
                        <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. Advanced Technology */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8">Advanced {data.title.replace('Treatment', '').trim()} Technology</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.technology && data.technology.map((tech, idx) => {
              const bgColors = ['bg-brand/5', 'bg-blue-500/5', 'bg-green-500/5', 'bg-purple-500/5'];
              const textColors = ['text-brand', 'text-blue-500', 'text-green-500', 'text-purple-500'];
              
              const IconComponent = {
                ScanLine: <ScanLine className={`w-12 h-12 ${textColors[idx % textColors.length]} opacity-50`} />,
                Smile: <Smile className={`w-12 h-12 ${textColors[idx % textColors.length]} opacity-50`} />,
                Activity: <Activity className={`w-12 h-12 ${textColors[idx % textColors.length]} opacity-50`} />,
                Award: <Award className={`w-12 h-12 ${textColors[idx % textColors.length]} opacity-50`} />,
                ShieldCheck: <ShieldCheck className={`w-12 h-12 ${textColors[idx % textColors.length]} opacity-50`} />,
                MapPin: <MapPin className={`w-12 h-12 ${textColors[idx % textColors.length]} opacity-50`} />
              }[tech.icon] || <ScanLine className={`w-12 h-12 ${textColors[idx % textColors.length]} opacity-50`} />;

              return (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center text-center border border-slate-100 group">
                  <div className="h-32 w-full bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
                    <div className={`absolute inset-0 ${bgColors[idx % bgColors.length]} flex items-center justify-center`}>
                      {IconComponent}
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-slate-800">{tech.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FAQ & Exact Cost CTA */}
      <section className="py-16 bg-[#F8FAFC] pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* FAQ */}
            <div className="lg:w-[60%]">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              {data.faqs.length > 0 && <FAQAccordion faqs={data.faqs} />}
              <div className="mt-4 text-center lg:text-left">
                <Link href="/faq" className="text-sm font-bold text-brand hover:underline flex items-center justify-center lg:justify-start">
                  View All FAQs <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* CTA Card */}
            <div className="lg:w-[40%]">
              <div className="bg-brand rounded-3xl p-8 text-white shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4 text-center">Know Your Exact <br/>{data.title.replace('Treatment', '').trim()} Cost</h3>
                <p className="text-brand-light text-sm text-center mb-8">Book a FREE Consultation with our Expert Specialist</p>
                
                <div className="space-y-4">
                  <Link href="/book-appointment" className="w-full bg-white hover:bg-slate-50 text-brand py-4 rounded-xl font-bold flex items-center justify-center transition shadow-md">
                    <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                  </Link>
                  <a href="https://wa.me/918247478663" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center transition shadow-md">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={20} height={20} className="mr-2 brightness-0 invert" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)] z-50 p-2 lg:p-4 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl flex gap-2 sm:gap-3 lg:gap-6 items-center justify-between">
          <a href="tel:+918247478663" className="flex-1 lg:flex-none lg:w-1/3 bg-slate-900 text-white font-bold py-3 lg:py-4 rounded-xl lg:rounded-full flex items-center justify-center text-sm lg:text-base hover:bg-slate-800 transition">
            <Phone className="w-4 h-4 lg:w-5 lg:h-5 sm:mr-2" />
            <span className="hidden lg:inline">Call Now : +91 8247478663</span>
            <span className="hidden sm:inline lg:hidden text-xs">Call Now</span>
          </a>
          <a href="https://wa.me/918247478663" className="flex-1 lg:flex-none lg:w-1/3 bg-green-500 text-white font-bold py-3 lg:py-4 rounded-xl lg:rounded-full flex items-center justify-center text-sm lg:text-base hover:bg-green-600 transition">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={20} height={20} className="sm:mr-2 brightness-0 invert lg:w-5 lg:h-5 w-4 h-4" />
            <span className="hidden lg:inline">WhatsApp Us (Instant Reply)</span>
            <span className="hidden sm:inline lg:hidden text-xs">WhatsApp</span>
          </a>
          <Link href="/book-appointment" className="flex-1 lg:flex-none lg:w-1/3 bg-brand text-white font-bold py-3 lg:py-4 rounded-xl lg:rounded-full flex items-center justify-center text-sm lg:text-base hover:bg-brand-dark transition shadow-lg shadow-brand/30">
            <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2 hidden sm:block" />
            <span className="hidden lg:inline">Book Appointment (Free Consultation)</span>
            <span className="lg:hidden text-[11px] sm:text-xs">Book Appt</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
