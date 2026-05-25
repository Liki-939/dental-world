import { Check } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function TreatmentCostCards({ plans }: { plans: PricingPlan[] }) {
  if (!plans || plans.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`relative bg-white rounded-3xl p-8 flex flex-col h-full border ${
            plan.isPopular 
              ? 'border-brand/50 shadow-glow scale-105 z-10' 
              : 'border-slate-100 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all'
          }`}
        >
          {plan.isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Most Popular
            </div>
          )}
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
            <div className="flex items-center justify-center text-slate-900">
              <span className="text-2xl font-medium mr-1">₹</span>
              <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
            </div>
            <p className="text-slate-500 text-sm mt-2">Starting from</p>
          </div>

          <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.isPopular ? 'text-brand' : 'text-slate-400'}`} />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button className={`w-full py-4 rounded-xl font-bold transition-all mt-auto ${
            plan.isPopular
              ? 'bg-brand hover:bg-brand-dark text-white shadow-lg hover:shadow-brand/20'
              : 'bg-brand-light hover:bg-brand text-brand hover:text-white'
          }`}>
            Get Exact Cost
          </button>
        </div>
      ))}
    </div>
  );
}
