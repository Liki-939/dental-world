import CaseForm from '@/components/CaseForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function NewCasePage() {
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
          <h2 className="text-2xl font-bold font-heading text-slate-800">Add New Before & After Case</h2>
          <p className="text-xs text-slate-500">Upload clinical transformation photos for the site gallery and homepage.</p>
        </div>
      </div>

      <CaseForm />
    </div>
  );
}
