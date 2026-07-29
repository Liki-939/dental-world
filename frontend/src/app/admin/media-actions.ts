'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';
import { isAuthenticatedAdmin } from './auth';
import { deleteFromSupabase } from '@/lib/supabase-cleanup';

export async function updateSiteMedia(key: string, imageUrl: string, label?: string) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    throw new Error('Unauthorized');
  }

  if (!key || !imageUrl) {
    throw new Error('Key and Image URL are required.');
  }

  try {
    // Fetch the existing media to see if the image changed
    const existingMedia = await prisma.siteMedia.findUnique({
      where: { key },
      select: { imageUrl: true },
    });

    if (existingMedia && existingMedia.imageUrl !== imageUrl) {
      await deleteFromSupabase(existingMedia.imageUrl);
    }
  } catch (error) {
    console.warn('Error checking existing media for deletion:', error);
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
    const existingMedia = await prisma.siteMedia.findUnique({
      where: { key },
      select: { imageUrl: true },
    });

    if (existingMedia) {
      await deleteFromSupabase(existingMedia.imageUrl);
    }

    await prisma.siteMedia.delete({
      where: { key },
    });
  } catch (error) {
    console.error('Failed to delete media key:', error);
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

  try {
    const existingMedia = await prisma.siteMedia.findUnique({
      where: { key: cleanKey },
      select: { imageUrl: true },
    });

    if (existingMedia && existingMedia.imageUrl !== imageUrl) {
      await deleteFromSupabase(existingMedia.imageUrl);
    }
  } catch (error) {
    console.warn('Error checking custom media for deletion:', error);
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
