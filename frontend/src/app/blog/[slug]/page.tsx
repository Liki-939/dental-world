import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | Dental World Blog`,
    description: `Read our comprehensive guide on ${title}.`,
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'how-to-prevent-cavities' },
    { slug: 'benefits-of-invisalign' },
    { slug: 'dental-implant-myths' }
  ];
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2024-10-24T09:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": "Dr. Ramesh Kumar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dental World Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dentalworldhyd.com/logo.png"
      }
    },
    "description": `Read our comprehensive guide on ${title}.`
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <Script
        id={`blog-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-brand font-medium hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>
          
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80" 
                alt={title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center text-slate-500 text-sm font-medium mb-6 space-x-6">
                <span className="flex items-center"><Calendar className="w-5 h-5 mr-2" /> Oct 24, 2024</span>
                <span className="flex items-center"><User className="w-5 h-5 mr-2" /> Dr. Ramesh Kumar</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-8 leading-tight">
                {title}
              </h1>
              
              <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                <p>
                  Maintaining good oral hygiene is crucial for your overall health. Many people don&apos;t realize that standard brushing isn&apos;t enough to keep cavities at bay. In this article, we&apos;ll dive deep into the daily habits you need to adopt.
                </p>
                <h3>1. Flossing is Non-Negotiable</h3>
                <p>
                  Your toothbrush can only reach 60% of your tooth surfaces. The remaining 40% between your teeth is a breeding ground for bacteria if left uncleaned. Flossing daily is the only way to remove plaque from these tight spaces.
                </p>
                <h3>2. Limit Sugary Snacks</h3>
                <p>
                  Sugar fuels the bacteria in your mouth to produce acids that erode tooth enamel. Try to limit sugary snacks and always rinse your mouth with water after eating sweets.
                </p>
                <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand my-8">
                  <p className="font-medium text-brand-dark mb-0 italic">
                    &quot;Prevention is always better, and cheaper, than cure when it comes to dental health.&quot; - Dr. Ramesh Kumar
                  </p>
                </div>
                <p>
                  By following these simple steps and visiting Dental World for your bi-annual check-ups, you can ensure a lifetime of healthy smiles.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
