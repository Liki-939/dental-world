import { getAllSiteMediaRecords } from '@/lib/media-service';
import SiteMediaManager from '@/components/SiteMediaManager';
import { Image as ImageIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminMediaPage() {
  const records = await getAllSiteMediaRecords();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center">
            <ImageIcon className="w-6 h-6 text-indigo-500 mr-2" />
            Website Cover Photos & Hero Media
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Directly upload and swap hero section photos and cover banners across the website.
          </p>
        </div>
      </div>

      <SiteMediaManager initialRecords={records} />
    </div>
  );
}
