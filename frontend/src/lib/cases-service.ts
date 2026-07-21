import { prisma } from '@/db/prisma';

export interface BeforeAfterCaseItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  isFeatured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const DEFAULT_CASES = [
  {
    title: 'Dental Implants Restoration',
    category: 'Dental Implants',
    beforeImage: '/images/cases/implants_before.png',
    afterImage: '/images/cases/implants_after.png',
    isFeatured: true,
    order: 1,
  },
  {
    title: 'Digital Smile Makeover',
    category: 'Smile Makeover',
    beforeImage: '/images/cases/smile_design_before.png',
    afterImage: '/images/cases/smile_design_after.png',
    isFeatured: true,
    order: 2,
  },
  {
    title: 'Invisalign Teeth Realignment',
    category: 'Invisalign',
    beforeImage: '/images/cases/invisalign_before.png',
    afterImage: '/images/cases/invisalign_after.png',
    isFeatured: true,
    order: 3,
  },
  {
    title: 'Laser Gum Disease Treatment',
    category: 'Gum Treatment',
    beforeImage: '/images/gums_before.png',
    afterImage: '/images/gums_after.png',
    isFeatured: true,
    order: 4,
  },
];

/**
 * Seed initial default Before & After cases if database table is empty.
 */
export async function seedInitialCasesIfEmpty() {
  try {
    const count = await prisma.beforeAfterCase.count();
    if (count === 0) {
      for (const item of DEFAULT_CASES) {
        await prisma.beforeAfterCase.create({
          data: item,
        });
      }
    }
  } catch (error) {
    console.error('Error seeding initial cases:', error);
  }
}

/**
 * Get all Before & After cases ordered by display order and creation date.
 */
export async function getAllBeforeAfterCases(): Promise<BeforeAfterCaseItem[]> {
  try {
    await seedInitialCasesIfEmpty();
    return await prisma.beforeAfterCase.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
  } catch (error) {
    console.error('Error fetching before/after cases:', error);
    return [];
  }
}

/**
 * Get featured Before & After cases for homepage.
 */
export async function getFeaturedBeforeAfterCases(): Promise<BeforeAfterCaseItem[]> {
  try {
    await seedInitialCasesIfEmpty();
    return await prisma.beforeAfterCase.findMany({
      where: { isFeatured: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
  } catch (error) {
    console.error('Error fetching featured cases:', error);
    return [];
  }
}

/**
 * Get single Before & After case by ID.
 */
export async function getBeforeAfterCaseById(id: string): Promise<BeforeAfterCaseItem | null> {
  try {
    return await prisma.beforeAfterCase.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Error fetching case ${id}:`, error);
    return null;
  }
}
