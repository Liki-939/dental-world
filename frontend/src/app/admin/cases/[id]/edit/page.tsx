import { getBeforeAfterCaseById } from '@/lib/cases-service';
import CaseForm from '@/components/CaseForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function EditCasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseItem = await getBeforeAfterCaseById(id);

  if (!caseItem) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-3">
        <Link
          href="/admin/cases"
          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-800">Edit Before & After Case</h2>
          <p className="text-xs text-slate-500">Update photos, title, or category for this case.</p>
        </div>
      </div>

      <CaseForm initialData={caseItem} />
    </div>
  );
}
