import { prisma } from '@/db/prisma';

export interface SiteMediaItem {
  id?: string;
  key: string;
  label: string;
  category: 'Main Pages' | 'Treatments' | 'Graphics & Banners' | 'Custom';
  imageUrl: string;
  defaultUrl: string;
  updatedAt?: Date;
}

export const DEFAULT_SITE_MEDIA: {
  key: string;
  label: string;
  category: 'Main Pages' | 'Treatments' | 'Graphics & Banners' | 'Custom';
  imageUrl: string;
}[] = [
  // BRANDING & LOGOS
  {
    key: 'site_logo',
    label: 'Main Header Logo',
    category: 'Main Pages',
    imageUrl: '/images/logo.jpeg',
  },
  {
    key: 'footer_logo',
    label: 'Footer Logo',
    category: 'Main Pages',
    imageUrl: '/images/logo.jpeg',
  },

  // DOCTOR PROFILES
  {
    key: 'doctor_sravan',
    label: 'Dr. Ch. Sravan Kumar Profile Photo',
    category: 'Main Pages',
    imageUrl: '/dr.ch.sravan.jpg',
  },
  {
    key: 'doctor_abdul',
    label: 'Dr. Abdul Wahed Profile Photo',
    category: 'Main Pages',
    imageUrl: '/dr.abdul.jpg',
  },
  {
    key: 'doctor_sneha',
    label: 'Dr. Sneha Profile Photo',
    category: 'Main Pages',
    imageUrl: '/sneha.jpg',
  },
  {
    key: 'doctor_anurag',
    label: 'Dr. Anurag Profile Photo',
    category: 'Main Pages',
    imageUrl: '/anurag.jpg',
  },
  {
    key: 'doctor_nithin',
    label: 'Dr. Nithin Bharat Profile Photo',
    category: 'Main Pages',
    imageUrl: '/nithin.jpg',
  },
  {
    key: 'doctor_supraja',
    label: 'Dr. AN Supraja Profile Photo',
    category: 'Main Pages',
    imageUrl: '/sneha.jpg',
  },
  {
    key: 'doctor_yousuf',
    label: 'Dr. Yousuf Qureshi Profile Photo',
    category: 'Main Pages',
    imageUrl: '/dr.abdul.jpg',
  },
  {
    key: 'about_team_photo',
    label: 'About Us Clinical Team Photo',
    category: 'Main Pages',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },

  // HOMEPAGE TREATMENT GRID ICONS
  {
    key: 'grid_root_canal',
    label: 'Homepage Grid: Root Canal Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Root Canal Treatment.png',
  },
  {
    key: 'grid_teeth_cleaning',
    label: 'Homepage Grid: Teeth Cleaning Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Teeth Scaling-cleaning.png',
  },
  {
    key: 'grid_implants',
    label: 'Homepage Grid: Dental Implants Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Dental Implants.png',
  },
  {
    key: 'grid_invisalign',
    label: 'Homepage Grid: Clear Aligners Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Clear Aligners.png',
  },
  {
    key: 'grid_pediatric',
    label: 'Homepage Grid: Kids Dentistry Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Kids Dentistry.png',
  },
  {
    key: 'grid_wisdom_tooth',
    label: 'Homepage Grid: Wisdom Tooth Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Wisdom tooth Extraction.png',
  },
  {
    key: 'grid_periodontal',
    label: 'Homepage Grid: Advanced Gum Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Periodontal Diseases & Flap Surgery.png',
  },
  {
    key: 'grid_tooth_decay',
    label: 'Homepage Grid: Tooth Decay Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Tooth Decay and Fillings.png',
  },
  {
    key: 'grid_dentures',
    label: 'Homepage Grid: Hybrid Dentures Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Hybrid-Full Mouth Denture.png',
  },
  {
    key: 'grid_smile_designing',
    label: 'Homepage Grid: Smile Designing Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Smile Designing.png',
  },
  {
    key: 'grid_braces',
    label: 'Homepage Grid: Dental Braces Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Dental Braces.png',
  },
  {
    key: 'grid_teeth_whitening',
    label: 'Homepage Grid: Teeth Whitening Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Teeth Whitening.png',
  },
  {
    key: 'grid_bad_breath',
    label: 'Homepage Grid: Bad Breath Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Bad Breath.png',
  },
  {
    key: 'grid_crowns',
    label: 'Homepage Grid: Dental Crowns Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Dental Crown & Bridge.png',
  },
  {
    key: 'grid_frenectomy',
    label: 'Homepage Grid: Frenectomy Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Frenectomy.png',
  },
  {
    key: 'grid_cosmetic',
    label: 'Homepage Grid: Cosmetic Dentistry Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Cosmetic Dentistry.png',
  },
  {
    key: 'grid_laser',
    label: 'Homepage Grid: Laser Dentistry Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Laser Dentistry.png',
  },
  {
    key: 'grid_jaw_surgery',
    label: 'Homepage Grid: Jaw Surgery Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Jaw Surgery.png',
  },
  {
    key: 'grid_genioplasty',
    label: 'Homepage Grid: Genioplasty Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Genoplasty.png',
  },
  {
    key: 'grid_mouth_ulcers',
    label: 'Homepage Grid: Mouth Ulcers Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Mouth Ulcers.png',
  },
  {
    key: 'grid_preventive',
    label: 'Homepage Grid: Preventive Dentistry Icon',
    category: 'Graphics & Banners',
    imageUrl: '/home_page_png_updated/Preventive Dentistry.png',
  },

  // TREATMENT INFOGRAPHICS & BANNERS
  {
    key: 'infographic_root_canal',
    label: 'Infographic: Root Canal Banner',
    category: 'Graphics & Banners',
    imageUrl: '/root_canal_banner.png',
  },
  {
    key: 'infographic_implants',
    label: 'Infographic: Dental Implants Banner',
    category: 'Graphics & Banners',
    imageUrl: '/dental_implant_banner.png',
  },
  {
    key: 'infographic_braces',
    label: 'Infographic: Braces Banner',
    category: 'Graphics & Banners',
    imageUrl: '/braces_banner.png',
  },
  {
    key: 'infographic_invisalign',
    label: 'Infographic: Invisalign Banner',
    category: 'Graphics & Banners',
    imageUrl: '/invisalign_banner.png',
  },
  {
    key: 'infographic_pediatric',
    label: 'Infographic: Pediatric Banner',
    category: 'Graphics & Banners',
    imageUrl: '/pediatric_banner.png',
  },
  {
    key: 'infographic_smile_design',
    label: 'Infographic: Smile Designing Banner',
    category: 'Graphics & Banners',
    imageUrl: '/smile_banner.png',
  },
  {
    key: 'infographic_full_mouth',
    label: 'Infographic: Full Mouth Banner',
    category: 'Graphics & Banners',
    imageUrl: '/full_banner.png',
  },

  // PROMOTIONAL SLIDER IMAGES
  {
    key: 'promo_gum_before',
    label: 'Promo Banner: Gum Disease Before',
    category: 'Graphics & Banners',
    imageUrl: '/images/gums_before.png',
  },
  {
    key: 'promo_gum_after',
    label: 'Promo Banner: Gum Disease After',
    category: 'Graphics & Banners',
    imageUrl: '/images/gums_after.png',
  },
  {
    key: 'promo_invisalign_before',
    label: 'Promo Banner: Invisalign Before',
    category: 'Graphics & Banners',
    imageUrl: '/images/cases/invisalign_before.png',
  },
  {
    key: 'promo_invisalign_after',
    label: 'Promo Banner: Invisalign After',
    category: 'Graphics & Banners',
    imageUrl: '/images/cases/invisalign_after.png',
  },

  // MAIN PAGES
  {
    key: 'hero_home',
    label: 'Homepage Hero Main Photo',
    category: 'Main Pages',
    imageUrl: '/doc_pat.png',
  },
  {
    key: 'hero_about',
    label: 'About Us Page Hero Photo',
    category: 'Main Pages',
    imageUrl: '/doc_pat.png',
  },
  {
    key: 'hero_doctors',
    label: 'Our Doctors Page Hero Photo',
    category: 'Main Pages',
    imageUrl: '/sneha.jpg',
  },
  {
    key: 'hero_contact',
    label: 'Contact Us Page Hero Photo',
    category: 'Main Pages',
    imageUrl: '/images/clinic_outer.png',
  },
  {
    key: 'hero_gallery',
    label: 'Smile Gallery Hero Photo',
    category: 'Main Pages',
    imageUrl: '/images/cases/smile_design_after.png',
  },
  {
    key: 'hero_faq',
    label: 'FAQ Page Hero Photo',
    category: 'Main Pages',
    imageUrl: '/images/new images/Treatments Theme Images/Smile Designing.png',
  },
  {
    key: 'clinic_outer_pragathi',
    label: 'Pragathi Nagar Branch Clinic Photo',
    category: 'Main Pages',
    imageUrl: '/images/clinic_outer.png',
  },
  {
    key: 'clinic_outer_bachupally',
    label: 'Bachupally Branch Clinic Photo',
    category: 'Main Pages',
    imageUrl: '/images/clinic_outer_bachupally.png',
  },

  // TREATMENTS
  {
    key: 'hero_root_canal',
    label: 'Root Canal Treatment Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Root Canal Treatment.png',
  },
  {
    key: 'hero_implants',
    label: 'Dental Implants Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Dental Implants.png',
  },
  {
    key: 'hero_braces',
    label: 'Dental Braces Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/braces/braces_treatment_hero.png',
  },
  {
    key: 'hero_invisalign',
    label: 'Invisalign Clear Aligners Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Clear Aligners.png',
  },
  {
    key: 'hero_smile_design',
    label: 'Smile Designing Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Smile Designing.png',
  },
  {
    key: 'hero_pediatric',
    label: 'Pediatric Dentistry Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/pediatric/Pediatric Treatment Hero.png',
  },
  {
    key: 'hero_full_mouth',
    label: 'Full Mouth Rehabilitation Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Full Mouth Rehabilitation.png',
  },
  {
    key: 'hero_dentures',
    label: 'Hybrid Dentures Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Hybrid Dentures.png',
  },
  {
    key: 'hero_crowns',
    label: 'Dental Crown & Bridges Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Dental Crown.png',
  },
  {
    key: 'hero_teeth_whitening',
    label: 'Teeth Whitening Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Teeth Whitening.png',
  },
  {
    key: 'hero_wisdom_tooth',
    label: 'Wisdom Tooth Extraction Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Wisdom Tooth Extraction.png',
  },
  {
    key: 'hero_gum_care',
    label: 'Advanced Gum Care Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Advanced Gum Care.png',
  },
  {
    key: 'hero_cosmetic',
    label: 'Cosmetic Dentistry Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Cosmetic Dentistry.png',
  },
  {
    key: 'hero_laser',
    label: 'Laser Dentistry Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Laser Dentistry.png',
  },
  {
    key: 'hero_mouth_ulcers',
    label: 'Mouth Ulcers Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Mouth Ulcers.png',
  },
  {
    key: 'hero_teeth_cleaning',
    label: 'Teeth Cleaning & Scaling Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Advanced Gum Care.png',
  },
  {
    key: 'hero_tooth_decay',
    label: 'Tooth Decay & Fillings Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Root Canal Treatment.png',
  },
  {
    key: 'hero_bad_breath',
    label: 'Bad Breath & Halitosis Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Advanced Gum Care.png',
  },
  {
    key: 'hero_frenectomy',
    label: 'Frenectomy Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/pediatric/Pediatric Treatment Hero.png',
  },
  {
    key: 'hero_jaw_surgery',
    label: 'Jaw Surgery Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Dental Implants.png',
  },
  {
    key: 'hero_genioplasty',
    label: 'Genioplasty Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Smile Designing.png',
  },
  {
    key: 'hero_preventive',
    label: 'Preventive Dentistry Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Teeth Whitening.png',
  },
  {
    key: 'hero_general_dentistry',
    label: 'General Dentistry Hero Photo',
    category: 'Treatments',
    imageUrl: '/images/new images/Treatments Theme Images/Smile Designing.png',
  },

  // GRAPHICS & BANNERS
  {
    key: 'banner_home_cta',
    label: 'Homepage Blue CTA Banner Graphic',
    category: 'Graphics & Banners',
    imageUrl: '/images/dental-implant-glow.png',
  },
  {
    key: 'promo_gum_treatment',
    label: 'Promotional Banner Gum Treatment Photo',
    category: 'Graphics & Banners',
    imageUrl: '/images/dentist_gum_treatment.png',
  },
  {
    key: 'promo_invisalign',
    label: 'Promotional Banner Invisalign Couple Photo',
    category: 'Graphics & Banners',
    imageUrl: '/couple.png',
  },
];

/**
 * Seed initial default site media items if empty.
 */
export async function seedInitialSiteMediaIfEmpty() {
  try {
    const count = await prisma.siteMedia.count();
    if (count === 0) {
      for (const item of DEFAULT_SITE_MEDIA) {
        await prisma.siteMedia.create({
          data: {
            key: item.key,
            label: item.label,
            imageUrl: item.imageUrl,
          },
        });
      }
    }
  } catch (error) {
    console.error('Error seeding initial site media:', error);
  }
}

/**
 * Get map of all site media key -> imageUrl.
 */
export async function getSiteMediaMap(): Promise<Record<string, string>> {
  try {
    await seedInitialSiteMediaIfEmpty();
    const dbItems = await prisma.siteMedia.findMany();
    const map: Record<string, string> = {};

    // First populate default values
    for (const item of DEFAULT_SITE_MEDIA) {
      map[item.key] = item.imageUrl;
    }

    // Override with custom user-saved values from database
    for (const item of dbItems) {
      if (item.imageUrl) {
        map[item.key] = item.imageUrl;
      }
    }
    return map;
  } catch (error) {
    console.error('Error fetching site media map:', error);
    const fallbackMap: Record<string, string> = {};
    for (const item of DEFAULT_SITE_MEDIA) {
      fallbackMap[item.key] = item.imageUrl;
    }
    return fallbackMap;
  }
}

/**
 * Get all site media records for Admin Portal (merges DB items with defaults).
 */
export async function getAllSiteMediaRecords(): Promise<SiteMediaItem[]> {
  try {
    await seedInitialSiteMediaIfEmpty();
    const dbItems = await prisma.siteMedia.findMany();
    const dbMap = new Map(dbItems.map((item) => [item.key, item]));

    const result: SiteMediaItem[] = [];

    // Include all default media items
    for (const def of DEFAULT_SITE_MEDIA) {
      const dbRecord = dbMap.get(def.key);
      result.push({
        id: dbRecord?.id,
        key: def.key,
        label: def.label,
        category: def.category,
        imageUrl: dbRecord?.imageUrl || def.imageUrl,
        defaultUrl: def.imageUrl,
        updatedAt: dbRecord?.updatedAt,
      });
      dbMap.delete(def.key);
    }

    // Include any custom user-added keys
    for (const [key, record] of dbMap.entries()) {
      result.push({
        id: record.id,
        key: record.key,
        label: record.label || key,
        category: 'Custom',
        imageUrl: record.imageUrl,
        defaultUrl: record.imageUrl,
        updatedAt: record.updatedAt,
      });
    }

    return result;
  } catch (error) {
    console.error('Error fetching site media records:', error);
    return DEFAULT_SITE_MEDIA.map((def) => ({
      key: def.key,
      label: def.label,
      category: def.category,
      imageUrl: def.imageUrl,
      defaultUrl: def.imageUrl,
    }));
  }
}
