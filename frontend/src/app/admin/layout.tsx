export const metadata = {
  title: 'Admin Dashboard | Dental World',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-brand-dark text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold font-heading">Dental World Admin</h1>
          <a href="/" className="text-brand-light hover:text-white transition">View Site</a>
        </div>
      </nav>
      <main className="container mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
