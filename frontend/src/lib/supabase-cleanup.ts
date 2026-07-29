import { getSupabaseAdmin } from './supabase';

/**
 * Parses the file path from a Supabase storage URL and deletes it from the 'dental-world' bucket.
 * Example URL: https://xyz.supabase.co/storage/v1/object/public/dental-world/blogs/168923-abc.webp
 */
export async function deleteFromSupabase(publicUrl: string | null | undefined): Promise<boolean> {
  if (!publicUrl) return false;

  // Verify it is a Supabase public storage URL pointing to our bucket
  const bucketIdentifier = '/storage/v1/object/public/dental-world/';
  if (!publicUrl.includes(bucketIdentifier)) {
    return false;
  }

  try {
    const supabase = getSupabaseAdmin();
    
    // Extract the file path after the bucket identifier
    const urlParts = publicUrl.split(bucketIdentifier);
    if (urlParts.length < 2) {
      console.warn(`Could not parse Supabase file path from URL: ${publicUrl}`);
      return false;
    }
    
    const filePath = decodeURIComponent(urlParts[1]);
    console.log(`Attempting to delete file from Supabase storage: ${filePath}`);

    const { data, error } = await supabase.storage
      .from('dental-world')
      .remove([filePath]);

    if (error) {
      console.error(`Error deleting file from Supabase: ${error.message}`);
      return false;
    }

    if (data && data.length > 0) {
      console.log(`Successfully deleted file from Supabase: ${filePath}`);
      return true;
    } else {
      console.warn(`File might not exist or wasn't deleted in Supabase: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Failed to execute Supabase cleanup for ${publicUrl}:`, error);
    return false;
  }
}
