'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';
import { isAuthenticatedAdmin } from './auth';

export async function updateSiteMedia(key: string, imageUrl: string, label?: string) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    throw new Error('Unauthorized');
  }

  if (!key || !imageUrl) {
    throw new Error('Key and Image URL are required.');
  }

  const generatedLabel = label || key.replace('hero_', 'Hero ').replace(/_/g, ' ').toUpperCase();

  await prisma.siteMedia.upsert({
    where: { key },
    update: { imageUrl, label: generatedLabel },
    create: {
      key,
      label: generatedLabel,
      imageUrl,
    },
  });

  revalidatePath('/');
  revalidatePath('/treatments', 'layout');
  revalidatePath('/landing', 'layout');
  revalidatePath('/admin/media');

  return { success: true };
}

export async function deleteSiteMedia(key: string) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    throw new Error('Unauthorized');
  }

  try {
    await prisma.siteMedia.delete({
      where: { key },
    });
  } catch (error) {
    // Ignore if missing
  }

  revalidatePath('/');
  revalidatePath('/treatments', 'layout');
  revalidatePath('/landing', 'layout');
  revalidatePath('/admin/media');

  return { success: true };
}

export async function createCustomSiteMedia(key: string, label: string, imageUrl: string) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    throw new Error('Unauthorized');
  }

  const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
  if (!cleanKey || !imageUrl) {
    throw new Error('Valid Key and Image URL are required.');
  }

  await prisma.siteMedia.upsert({
    where: { key: cleanKey },
    update: { imageUrl, label },
    create: {
      key: cleanKey,
      label,
      imageUrl,
    },
  });

  revalidatePath('/');
  revalidatePath('/treatments', 'layout');
  revalidatePath('/landing', 'layout');
  revalidatePath('/admin/media');

  return { success: true };
}
