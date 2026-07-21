import { getAllBeforeAfterCases } from '@/lib/cases-service';
import Link from 'next/link';
import { Plus, Sparkles, Edit, Layers } from 'lucide-react';
import DeleteCaseButton from '@/components/DeleteCaseButton';

export const dynamic = 'force-dynamic';

export default async function AdminCasesPage() {
  const cases = await getAllBeforeAfterCases();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center">
            <Sparkles className="w-6 h-6 text-amber-500 mr-2" />
            Before & After Clinical Cases
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage live patient transformation photos shown across the website.
          </p>
        </div>

        <Link
          href="/admin/cases/new"
          className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl transition shadow flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Case</span>
        </Link>
      </div>

      {cases.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-700">No Cases Found</h3>
          <p className="text-sm text-slate-400 mt-1 mb-4">Click below to add your first clinical transformation case.</p>
          <Link
            href="/admin/cases/new"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold inline-block hover:bg-teal-700 transition"
          >
            Add Case
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                {/* Side by side image preview */}
                <div className="flex w-full bg-slate-900 border-b border-slate-100 relative">
                  <div className="w-1/2 aspect-[4/3] relative border-r border-white/20 overflow-hidden">
                    <img src={c.beforeImage} alt="Before" className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-600/90 text-white text-[10px] font-bold rounded">
                      BEFORE
                    </span>
                  </div>
                  <div className="w-1/2 aspect-[4/3] relative overflow-hidden">
                    <img src={c.afterImage} alt="After" className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-green-600/90 text-white text-[10px] font-bold rounded">
                      AFTER
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">
                      {c.category}
                    </span>
                    {c.isFeatured && (
                      <span className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" /> Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-800 text-base line-clamp-1">{c.title}</h3>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Order Priority: #{c.order}</span>
                <div className="flex items-center space-x-1">
                  <Link
                    href={`/admin/cases/${c.id}/edit`}
                    className="p-2 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition"
                    title="Edit Case"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <DeleteCaseButton id={c.id} title={c.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
