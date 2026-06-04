import type { ReactNode } from 'react';

type PageHeroProps = {
  title: ReactNode;
  description?: string;
  highlight?: string;
};

export default function PageHero({ title, description, highlight }: PageHeroProps) {
  return (
    <section className="bg-nav text-white text-center">
      <div className="section-container py-16 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-5 text-balance">
          {title}
          {highlight ? (
            <>
              {' '}
              <span className="text-brand-light">{highlight}</span>
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
