'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isAuthenticatedAdmin } from './auth';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Server action to create a new blog post
 */
export async function createBlogPost(formData: FormData) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return { success: false, error: 'Unauthorized' };
  }

  const title = formData.get('title')?.toString().trim();
  let slug = formData.get('slug')?.toString().trim();
  const author = formData.get('author')?.toString().trim() || 'Dr. Ramesh Kumar';
  const image = formData.get('image')?.toString().trim();
  const excerpt = formData.get('excerpt')?.toString().trim();
  const content = formData.get('content')?.toString().trim();

  if (!title || !image || !excerpt || !content) {
    return { success: false, error: 'Please fill in all required fields (title, image, excerpt, content).' };
  }

  if (!slug) {
    slug = slugify(title);
  } else {
    slug = slugify(slug);
  }

  // Ensure unique slug
  const existing = await prisma.blogPost.findUnique({ where: { slug } });
  if (existing) {
    slug = `${slug}-${Date.now().toString().slice(-4)}`;
  }

  try {
    await prisma.blogPost.create({
      data: {
        title,
        slug,
        author,
        image,
        excerpt,
        content,
      },
    });

    revalidatePath('/blog');
    revalidatePath('/admin/blogs');
  } catch (error) {
    console.error('Failed to create blog post:', error);
    return { success: false, error: 'Database error creating blog post' };
  }

  redirect('/admin/blogs');
}

/**
 * Server action to update an existing blog post
 */
export async function updateBlogPost(id: string, formData: FormData) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return { success: false, error: 'Unauthorized' };
  }

  const title = formData.get('title')?.toString().trim();
  let slug = formData.get('slug')?.toString().trim();
  const author = formData.get('author')?.toString().trim() || 'Dr. Ramesh Kumar';
  const image = formData.get('image')?.toString().trim();
  const excerpt = formData.get('excerpt')?.toString().trim();
  const content = formData.get('content')?.toString().trim();

  if (!title || !image || !excerpt || !content) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  if (!slug) {
    slug = slugify(title);
  } else {
    slug = slugify(slug);
  }

  try {
    await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        slug,
        author,
        image,
        excerpt,
        content,
      },
    });

    revalidatePath('/blog');
    revalidatePath(`/blog/${slug}`);
    revalidatePath('/admin/blogs');
  } catch (error) {
    console.error('Failed to update blog post:', error);
    return { success: false, error: 'Database error updating blog post' };
  }

  redirect('/admin/blogs');
}

/**
 * Server action to delete a blog post
 */
export async function deleteBlogPost(id: string) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    await prisma.blogPost.delete({
      where: { id },
    });

    revalidatePath('/blog');
    revalidatePath('/admin/blogs');
    return { success: true };
  } catch (error) {
    console.error('Failed to delete blog post:', error);
    return { success: false, error: 'Failed to delete blog post' };
  }
}
