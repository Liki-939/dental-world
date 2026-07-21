import { isAuthenticatedAdmin } from '../../../auth';
import { redirect, notFound } from 'next/navigation';
import BlogForm from '@/components/BlogForm';
import { updateBlogPost } from '../../../blog-actions';
import { getBlogPostById } from '@/lib/blog-service';

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const blog = await getBlogPostById(id);

  if (!blog) {
    notFound();
  }

  const updateAction = updateBlogPost.bind(null, id);

  return <BlogForm initialData={blog} action={updateAction} isEditing={true} />;
}
