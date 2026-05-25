import Image from 'next/image';

interface Case {
  beforeImg: string;
  afterImg: string;
  description: string;
}

export default function BeforeAfterSection({ cases }: { cases: Case[] }) {
  if (!cases || cases.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
      {cases.map((c, index) => (
        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
          <div className="relative h-64 sm:h-80 w-full flex">
            {/* Split Screen Image Effect */}
            <div className="w-1/2 relative bg-slate-200 border-r-2 border-white">
              <Image src={c.beforeImg} alt="Before" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-semibold backdrop-blur-sm">
                Before
              </div>
            </div>
            <div className="w-1/2 relative bg-brand-light">
              <Image src={c.afterImg} alt="After" fill className="object-cover" />
              <div className="absolute bottom-4 right-4 bg-brand text-white px-3 py-1 rounded text-sm font-semibold shadow-lg">
                After
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-slate-700 font-medium">{c.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
