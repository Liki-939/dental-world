import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Script from 'next/script';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-service';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogPostBySlug(slug);
  if (!blog) {
    return { title: 'Article Not Found | Dental World' };
  }

  return {
    title: `${blog.title} | Dental World Clinic`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogPosts();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export const revalidate = 60; // revalidate every minute

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": blog.image,
    "datePublished": new Date(blog.createdAt).toISOString(),
    "dateModified": new Date(blog.updatedAt).toISOString(),
    "author": {
      "@type": "Person",
      "name": blog.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dental World Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dentalworldhyd.in/images/logo.jpeg"
      }
    },
    "description": blog.excerpt,
  };

  // Render paragraphs, headings, quotes cleanly
  const paragraphs = blog.content.split('\n\n');
  
  return (
    <>
      <Script
        id={`blog-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <main className="flex-grow py-12 bg-surface-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-brand font-semibold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>
          
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div className="relative h-[300px] md:h-[450px] w-full">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center text-slate-500 text-sm font-medium mb-6 gap-6">
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-brand shrink-0" />
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-brand shrink-0" />
                  {blog.author}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-8 leading-tight">
                {blog.title}
              </h1>

              {/* Excerpt Lead */}
              {blog.excerpt && (
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 pb-8 border-b border-slate-100 italic">
                  "{blog.excerpt}"
                </p>
              )}
              
              <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
                {paragraphs.map((para, idx) => {
                  const trimmed = para.trim();
                  if (trimmed.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                        {trimmed.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (trimmed.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="text-3xl font-bold text-slate-900 mt-10 mb-4">
                        {trimmed.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith('> ')) {
                    return (
                      <div key={idx} className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand my-8">
                        <p className="font-medium text-brand-dark mb-0 italic">
                          {trimmed.replace('> ', '')}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-slate-700 leading-relaxed text-lg">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
