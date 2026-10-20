import React from 'react';
import { Landmark, UtensilsCrossed, HeartHandshake, Wheat, BedDouble, HandHeart } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';

const details = [
  {
    icon: Landmark,
    title: 'Living Heritage',
    body: 'Explore Tamil traditions beyond monuments and museums.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Food with a Story',
    body: 'Discover everyday regional food, ingredients, and culinary traditions.'
  },
  {
    icon: HeartHandshake,
    title: 'Genuine Hospitality',
    body: 'Be welcomed by local hosts with warmth and respect.'
  },
  {
    icon: Wheat,
    title: 'Village Life',
    body: 'Experience the region at a slower, more personal pace.'
  },
  {
    icon: BedDouble,
    title: 'Thoughtful Comfort',
    body: 'Enjoy clean, hygienic accommodation and considered travel arrangements.'
  },
  {
    icon: HandHeart,
    title: 'Travel with Purpose',
    body: 'Help create meaningful opportunities for local hosts, artisans, and cultural practitioners.'
  }
];

export default function DetailsSection() {
  return (
    <section className="bg-heritage-sand/70 py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        <Reveal className="max-w-2xl">
          <SectionLabel>The Difference Is in the Details</SectionLabel>
          <h2 className="mt-7 text-balance font-heading text-[clamp(2.05rem,4vw,3.4rem)] font-light leading-[1.1] text-heritage-charcoal">
            Beyond Sightseeing. Beyond the Expected.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="border-t border-heritage-charcoal/20 py-8 lg:py-10">
                  <Icon className="h-5 w-5 text-heritage-bronze" strokeWidth={1.25} aria-hidden="true" />
                  <h3 className="mt-6 font-heading text-[1.55rem] leading-tight text-heritage-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[0.94rem] leading-relaxed text-heritage-earth/75">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}