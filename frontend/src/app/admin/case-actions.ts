'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isAuthenticatedAdmin } from './auth';

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

  await prisma.beforeAfterCase.delete({
    where: { id },
  });

  revalidatePath('/');
  revalidatePath('/gallery');
  revalidatePath('/admin/cases');
}
