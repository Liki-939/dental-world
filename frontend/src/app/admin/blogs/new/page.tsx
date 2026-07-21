import { isAuthenticatedAdmin } from '../../auth';
import { redirect } from 'next/navigation';
import BlogForm from '@/components/BlogForm';
import { createBlogPost } from '../../blog-actions';

export default async function NewBlogPage() {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect('/admin/login');
  }

  return <BlogForm action={createBlogPost} isEditing={false} />;
}
