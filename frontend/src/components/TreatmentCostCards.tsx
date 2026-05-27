import { CheckCircle2, ShieldCheck, Smile } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const themeColors = [
  {
    bg: 'bg-[#EEF2FF]',
    text: 'text-blue-700',
    border: 'border-blue-100',
    iconBg: 'bg-blue-500',
    icon: <Smile className="w-8 h-8 text-white" />
  },
  {
    bg: 'bg-[#F0FDF4]',
    text: 'text-green-700',
    border: 'border-green-100',
    iconBg: 'bg-green-500',
    icon: <ShieldCheck className="w-8 h-8 text-white" />
  },
  {
    bg: 'bg-[#FDF2F8]',
    text: 'text-pink-700',
    border: 'border-pink-100',
    iconBg: 'bg-pink-500',
    icon: <CheckCircle2 className="w-8 h-8 text-white" />
  }
];

export default function TreatmentCostCards({ plans }: { plans: PricingPlan[] }) {
  if (!plans || plans.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, index) => {
        const theme = themeColors[index % themeColors.length];
        
        return (
          <div 
            key={index} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all"
          >
            {/* Top Colored Section */}
            <div className={`${theme.bg} p-6 flex flex-col items-center text-center relative border-b ${theme.border}`}>
              <div className={`w-16 h-16 ${theme.iconBg} rounded-full flex items-center justify-center mb-4 shadow-md`}>
                {theme.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{plan.title}</h3>
            </div>
            
            {/* Pricing Section */}
            <div className="pt-6 pb-4 px-6 text-center border-b border-slate-100">
              <p className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Starting from</p>
              <div className="flex items-center justify-center text-slate-900 mb-1">
                <span className="text-xl font-bold mr-1">₹</span>
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}*</span>
              </div>
              <p className="text-slate-500 text-xs">{plan.title.includes('Full') ? '(Customized Treatment Plan)' : plan.title.includes('Multiple') ? '(Per Implant)' : '(Implant + Abutment + Crown)'}</p>
            </div>

            {/* Features */}
            <div className="p-6 bg-white flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 text-slate-300`} />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
