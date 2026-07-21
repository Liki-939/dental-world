import { getAllBlogPosts } from '@/lib/blog-service';
import { isAuthenticatedAdmin } from '../auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Edit, Calendar, User, ExternalLink, FileText } from 'lucide-react';
import DeleteBlogButton from '@/components/DeleteBlogButton';

export const dynamic = 'force-dynamic';

export default async function AdminBlogsPage() {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect('/admin/login');
  }

  const blogs = await getAllBlogPosts();

  return (
    <div>
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 font-heading">Manage Blog Posts</h2>
          <p className="text-slate-500 mt-1">Create, edit, or delete articles shown on the Dental World website.</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-md transition-all shrink-0"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Article
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No blog posts found</h3>
          <p className="text-slate-500 mb-6">Start by writing and publishing your first dental health article.</p>
          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition"
          >
            <Plus className="w-4 h-4 mr-2" /> Create First Article
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6">Article</th>
                  <th className="py-4 px-6">Author</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 line-clamp-1">{blog.title}</div>
                          <div className="text-xs text-slate-400 font-mono mt-0.5">/blog/{blog.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <span className="flex items-center text-slate-600">
                        <User className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {blog.author}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <span className="flex items-center text-slate-500 text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition"
                          title="View on Live Site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/blogs/${blog.id}/edit`}
                          className="p-2 text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition"
                          title="Edit Post"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <DeleteBlogButton id={blog.id} title={blog.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
