import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

export default function JourneyCard({ pkg, index, onEnquire }) {
  const reverse = index % 2 === 1;
  const inclusions = Array.isArray(pkg.inclusions) ? pkg.inclusions.filter(Boolean) : [];

  return (
    <article className="border-t border-heritage-charcoal/15 pt-12 first:border-t-0 first:pt-0">
      <div className="grid gap-9 lg:grid-cols-12 lg:gap-14">
        <div className={cn('lg:col-span-6', reverse ? 'lg:order-2' : 'lg:order-1')}>
          <figure className="overflow-hidden bg-heritage-sand">
            {pkg.image_url ? (
              <Image
                src={pkg.image_url}
                alt={pkg.title}
                className="aspect-[4/3] w-full object-cover"
                fittingType="fill"
              />
            ) : (
              <div className="aspect-[4/3] w-full bg-heritage-sand" />
            )}
          </figure>
        </div>

        <div className={cn('lg:col-span-6', reverse ? 'lg:order-1' : 'lg:order-2')}>
          {pkg.eyebrow && (
            <p className="text-[9.5px] uppercase tracking-[0.2em] text-heritage-bronze">{pkg.eyebrow}</p>
          )}
          <h3 className="mt-3 text-balance font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.12] text-heritage-charcoal">
            {pkg.title}
          </h3>
          <p className="mt-4 text-[0.96rem] leading-[1.85] text-heritage-earth/78">
            {pkg.description || pkg.summary}
          </p>

          <dl className="mt-7 grid grid-cols-1 gap-5 border-y border-heritage-charcoal/15 py-5 sm:grid-cols-2">
            <div>
              <dt className="text-[9px] uppercase tracking-[0.2em] text-heritage-earth/50">Duration</dt>
              <dd className="mt-1.5 font-heading text-[1.15rem] leading-snug text-heritage-charcoal">
                {pkg.duration_label || 'Planned with you'}
              </dd>
            </div>
            <div>
              <dt className="text-[9px] uppercase tracking-[0.2em] text-heritage-earth/50">Cost</dt>
              <dd className="mt-1.5 font-heading text-[1.15rem] leading-snug text-heritage-charcoal">
                {pkg.price_note || 'Shared personally on enquiry'}
              </dd>
            </div>
          </dl>

          {pkg.best_for && (
            <p className="mt-5 text-[0.88rem] italic leading-relaxed text-heritage-earth/65">
              Best for: {pkg.best_for}
            </p>
          )}

          {inclusions.length > 0 && (
            <div className="mt-6">
              <p className="text-[9px] uppercase tracking-[0.2em] text-heritage-earth/50">
                What the journey includes
              </p>
              <ul className="mt-4 space-y-2.5">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.9rem] leading-relaxed text-heritage-earth/80"
                  >
                    <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-heritage-bronze" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={() => onEnquire(pkg.title)}
            className="mt-8 inline-flex items-center gap-3 border border-heritage-maroon/40 px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] text-heritage-maroon transition-colors duration-300 hover:bg-heritage-maroon hover:text-heritage-ivory"
          >
            Enquire about this journey
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
}