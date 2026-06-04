import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Health Blog',
  description: 'Read the latest articles, dental hygiene tips, and clinic news from the experts at Dental World.',
};

const blogs = [
  {
    id: 'how-to-prevent-cavities',
    title: '5 Daily Habits to Prevent Cavities Forever',
    excerpt: 'Discover the simple daily routines that can protect your teeth from decay and save you trips to the dentist.',
    date: 'Oct 24, 2024',
    author: 'Dr. Ramesh Kumar',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'benefits-of-invisalign',
    title: 'Why Invisalign is Better Than Traditional Braces',
    excerpt: 'Thinking about straightening your teeth? Here is everything you need to know about clear aligners.',
    date: 'Oct 15, 2024',
    author: 'Dr. Sunitha Rao',
    image: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dental-implant-myths',
    title: 'Busting 3 Common Myths About Dental Implants',
    excerpt: 'Are dental implants really painful? Do they look fake? We debunk the biggest misconceptions.',
    date: 'Sep 28, 2024',
    author: 'Dr. Ramesh Kumar',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  }
];

export default function BlogPage() {
  return (
    <main className="flex-grow bg-surface-muted">
      <PageHero
        title="Dental Health"
        highlight="Blog"
        description="Expert advice, oral hygiene tips, and news from our specialists."
      />

      <section className="py-20">
        <div className="section-container max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-slate-500 text-xs font-medium mb-4 space-x-4">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {blog.date}</span>
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {blog.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">{blog.excerpt}</p>
                    <Link href={`/blog/${blog.id}`} className="text-brand font-semibold hover:text-brand-dark flex items-center">
                      Read Article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </main>
  );
}
