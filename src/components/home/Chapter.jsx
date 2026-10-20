import React from 'react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { cn } from '@/lib/utils';

export default function Chapter({ chapter, index }) {
  const reverse = index % 2 === 1;

  return (
    <article id={chapter.id} className="scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className={cn('lg:col-span-6', reverse ? 'lg:order-2' : 'lg:order-1')}>
          <Reveal>
            <figure className="overflow-hidden bg-heritage-charcoal/5">
              <Image
                src={chapter.image}
                alt={chapter.imageAlt}
                className={cn(
                  'w-full object-cover transition-transform [transition-duration:1400ms] ease-out hover:scale-[1.02]',
                  chapter.number === '02' ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[4/3]'
                )}
                fittingType="fill"
              />
            </figure>
          </Reveal>

          {chapter.gallery && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {chapter.gallery.map((item) => (
                <Reveal key={item.src} delay={0.08}>
                  <figure className="overflow-hidden bg-heritage-charcoal/5">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="aspect-square w-full object-cover"
                      fittingType="fill"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <div className={cn('lg:col-span-5', reverse ? 'lg:order-1' : 'lg:order-2 lg:col-start-8')}>
          <Reveal>
            <div className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 right-0 select-none font-heading text-[5rem] leading-none text-heritage-bronze/20 sm:text-[6.5rem]"
              >
                {chapter.number}
              </span>
              <SectionLabel>{chapter.eyebrow}</SectionLabel>
            </div>
            <p className="mt-5 font-heading text-[1.15rem] uppercase tracking-[0.18em] text-heritage-bronze">
              {chapter.title}
            </p>
            <h3 className="mt-3 text-balance font-heading text-[clamp(1.7rem,2.9vw,2.5rem)] font-light leading-[1.14] text-heritage-charcoal">
              {chapter.headline}
            </h3>
            <div className="mt-7 space-y-5 text-[0.98rem] leading-[1.85] text-heritage-earth/80 sm:text-[1rem]">
              {chapter.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            {chapter.note && (
              <p className="mt-8 border-l border-heritage-bronze/50 pl-5 text-[0.86rem] italic leading-relaxed text-heritage-earth/65">
                {chapter.note}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </article>
  );
}
