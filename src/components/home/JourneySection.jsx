import React from 'react';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import Motif from '@/components/site/Motif';
import Chapter from '@/components/home/Chapter';
import { chapters } from '@/data/chapters';

export default function JourneySection() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-heritage-charcoal/10 bg-heritage-ivory py-24 md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">The Experience</SectionLabel>
          <h2 className="mt-7 text-balance font-heading text-[clamp(2.05rem,4.2vw,3.6rem)] font-light leading-[1.08] tracking-[-0.01em] text-heritage-charcoal">
            Not a Tour. A Story You Get to Live.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-[1rem] leading-[1.85] text-heritage-earth/75">
            This is how a journey with us unfolds — not a checklist of sights, but six chapters lived in
            order, at the pace of the delta.
          </p>
          <Motif className="mx-auto mt-9 h-4 w-36 text-heritage-bronze/60" />
        </Reveal>

        <div className="mt-20 space-y-24 md:mt-24 md:space-y-32">
          {chapters.map((chapter, index) => (
            <Chapter key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}