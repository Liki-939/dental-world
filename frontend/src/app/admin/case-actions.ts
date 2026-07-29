'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isAuthenticatedAdmin } from './auth';
import { deleteFromSupabase } from '@/lib/supabase-cleanup';

export async function createBeforeAfterCase(formData: FormData) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect('/admin/login');
  }

  const title = (formData.get('title') as string) || 'New Transformation Case';
  const category = (formData.get('category') as string) || 'General';
  const beforeImage = formData.get('beforeImage') as string;
  const afterImage = formData.get('afterImage') as string;
  const isFeatured = formData.get('isFeatured') === 'true';
  const order = parseInt((formData.get('order') as string) || '0', 10);

  if (!beforeImage || !afterImage) {
    throw new Error('Both Before and After images are required.');
  }

  await prisma.beforeAfterCase.create({
    data: {
      title,
      category,
      beforeImage,
      afterImage,
      isFeatured,
      order,
    },
  });

  revalidatePath('/');
  revalidatePath('/gallery');
  revalidatePath('/admin/cases');
  redirect('/admin/cases');
}

export async function updateBeforeAfterCase(id: string, formData: FormData) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect('/admin/login');
  }

  const title = (formData.get('title') as string) || 'Transformation Case';
  const category = (formData.get('category') as string) || 'General';
  const beforeImage = formData.get('beforeImage') as string;
  const afterImage = formData.get('afterImage') as string;
  const isFeatured = formData.get('isFeatured') === 'true';
  const order = parseInt((formData.get('order') as string) || '0', 10);

  if (!beforeImage || !afterImage) {
    throw new Error('Both Before and After images are required.');
  }

  try {
    // Fetch the existing case to see if images changed
    const existingCase = await prisma.beforeAfterCase.findUnique({
      where: { id },
      select: { beforeImage: true, afterImage: true },
    });

    if (existingCase) {
      if (existingCase.beforeImage !== beforeImage) {
        await deleteFromSupabase(existingCase.beforeImage);
      }
      if (existingCase.afterImage !== afterImage) {
        await deleteFromSupabase(existingCase.afterImage);
      }
    }

    await prisma.beforeAfterCase.update({
      where: { id },
      data: {
        title,
        category,
        beforeImage,
        afterImage,
        isFeatured,
        order,
      },
    });
  } catch (error) {
    console.error('Failed to update case:', error);
    throw error;
  }

  revalidatePath('/');
  revalidatePath('/gallery');
  revalidatePath('/admin/cases');
  redirect('/admin/cases');
}

export async function deleteBeforeAfterCase(id: string) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    redirect('/admin/login');
  }

  try {
    // Fetch the existing case first to delete images from Supabase
    const existingCase = await prisma.beforeAfterCase.findUnique({
      where: { id },
      select: { beforeImage: true, afterImage: true },
    });

    if (existingCase) {
      await deleteFromSupabase(existingCase.beforeImage);
      await deleteFromSupabase(existingCase.afterImage);
    }

    await prisma.beforeAfterCase.delete({
      where: { id },
    });
  } catch (error) {
    console.error('Failed to delete case:', error);
    throw error;
  }

  revalidatePath('/');
  revalidatePath('/gallery');
  revalidatePath('/admin/cases');
}
