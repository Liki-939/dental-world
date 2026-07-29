import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'uploads';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Extract file extension and sanitize the base name
    const fileExtension = file.name.split('.').pop() || 'png';
    const baseName = file.name.replace(/\.[^/.]+$/, '');
    const sanitizedBase = baseName
      .replace(/[^a-zA-Z0-9]/g, '-')
      .toLowerCase();

    // Create a unique filepath under the specified bucket folder
    const uniqueFileName = `${folder}/${sanitizedBase}-${Date.now()}.${fileExtension}`;

    // Convert file object to ArrayBuffer for uploading
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload file buffer to Supabase 'dental-world' bucket
    const { data, error } = await supabase.storage
      .from('dental-world')
      .upload(uniqueFileName, buffer, {
        contentType: file.type,
        upsert: true,
      });

    if (error) {
      console.error('Supabase upload error:', error);
      return NextResponse.json({ error: `Upload failed: ${error.message}` }, { status: 500 });
    }

    // Get the public CDN URL of the newly uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('dental-world')
      .getPublicUrl(uniqueFileName);

    return NextResponse.json({ success: true, url: publicUrl, path: uniqueFileName });
  } catch (error) {
    console.error('Server error handling upload:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
