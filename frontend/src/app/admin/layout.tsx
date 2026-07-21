import { isAuthenticatedAdmin, logoutAdmin } from './auth';
import Link from 'next/link';
import { Calendar, FileText, ExternalLink, LogOut, ShieldCheck } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Dashboard | Dental World',
  robots: 'noindex, nofollow',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await isAuthenticatedAdmin();

  // If on login page (which resides under /admin/login), let children render directly
  // Note: if user is not authenticated, they will be redirected to /admin/login when accessing protected pages.
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {isAuth ? (
        <>
          {/* Admin Header Navbar */}
          <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg font-bold font-heading text-white tracking-tight">Dental World Admin</h1>
                  <p className="text-xs text-slate-400">Content & Management Portal</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link
                  href="/admin"
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center"
                >
                  <Calendar className="w-4 h-4 mr-2 text-teal-400" />
                  Appointments
                </Link>
                <Link
                  href="/admin/blogs"
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                  Blog Posts
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  View Site
                </Link>

                <form action={logoutAdmin}>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg text-xs font-semibold bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition flex items-center"
                  >
                    <LogOut className="w-3.5 h-3.5 mr-1.5" />
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </header>

          <main className="container mx-auto p-4 md:p-8 flex-grow">
            {children}
          </main>
        </>
      ) : (
        <div className="flex-grow">{children}</div>
      )}
    </div>
  );
}
