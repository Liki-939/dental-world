import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import { Calendar, User, FileText } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog-service';

export const metadata: Metadata = {
  title: 'Dental Health Blog | Dental World Clinic',
  description: 'Read the latest articles, dental hygiene tips, and clinic news from the experts at Dental World.',
};

export const revalidate = 60; // revalidate every minute

export default async function BlogPage() {
  const blogs = await getAllBlogPosts();

  return (
    <main className="flex-grow bg-surface-muted">
      <PageHero
        title="Dental Health"
        highlight="Blog"
        description="Expert advice, oral hygiene tips, and news from our specialists."
      />

      <section className="py-20">
        <div className="section-container max-w-6xl">
          {blogs.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl text-center max-w-xl mx-auto shadow-sm border border-slate-100">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">No articles available yet</h3>
              <p className="text-slate-500">Check back soon for oral health tips and updates from our dental team.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-slate-500 text-xs font-medium mb-4 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-brand shrink-0" />
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center truncate">
                        <User className="w-4 h-4 mr-1 text-brand shrink-0" />
                        {blog.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors line-clamp-2">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{blog.excerpt}</p>
                    <Link href={`/blog/${blog.slug}`} className="text-brand font-semibold hover:text-brand-dark flex items-center">
                      Read Article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
