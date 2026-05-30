'use server';

import { prisma } from '../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateBookingStatus(id: string, newStatus: string) {
  try {
    await prisma.booking.update({
      where: { id },
      data: { status: newStatus },
    });
    
    // Revalidate the admin page to show updated data
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Failed to update booking status:', error);
    return { success: false, error: 'Failed to update status' };
  }
}
