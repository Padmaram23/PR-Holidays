import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import Motif from '@/components/site/Motif';
import { images } from '@/data/images';

const HIGHLIGHTS = [
  {
    image: images.thalaiyattiDoll,
    label: 'Traditional Dolls',
    name: 'Thalaiyatti Bommai',
    caption: 'Hand-painted terracotta, Thanjavur tradition',
  },
  {
    image: images.temple,
    label: 'Temple Paintings',
    name: 'Pragadeeswaran Temple',
    caption: 'Watercolour & Tanjore art on cotton paper',
  },
  {
    image: images.farewell,
    label: 'Heritage Crafts',
    name: 'Kanjivaram Silk Weave',
    caption: 'Handloom silk by master weavers',
  },
];

export default function ShopTeaser() {
  return (
    <section className="bg-heritage-sand/30 py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        {/* Heading row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <SectionLabel>Heritage Shop</SectionLabel>
            <h2 className="mt-7 text-balance font-heading text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.08] text-heritage-charcoal">
              Bring Tamil Heritage<br className="hidden sm:block" /> Into Your Home.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-[1rem] leading-[1.85] text-heritage-earth/75">
              Thalaiyatti Bommai nodding dolls, Pragadeeswaran temple paintings, Tanjore gold-leaf
              panels and more — every piece made by artisans whose craft spans generations.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 border border-heritage-maroon px-7 py-4 text-[10px] uppercase tracking-[0.24em] text-heritage-maroon transition-colors duration-300 hover:bg-heritage-maroon hover:text-heritage-ivory"
            >
              Browse the Shop
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        {/* Product highlights grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal key={item.name} delay={0.06 * index}>
              <Link to="/shop" className="group block overflow-hidden bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-heritage-charcoal/0 transition-colors duration-500 group-hover:bg-heritage-charcoal/10" />
                </div>
                <div className="px-5 py-5">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-heritage-bronze">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-heading text-[1.2rem] leading-snug text-heritage-charcoal transition-colors group-hover:text-heritage-maroon">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[11px] italic text-heritage-earth/55">{item.caption}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Motif + bottom CTA */}
        <Reveal delay={0.15} className="mt-16 flex flex-col items-center gap-5 text-center">
          <Motif className="h-4 w-32 text-heritage-bronze/50" />
          <p className="font-heading text-[1.15rem] italic text-heritage-earth/65">
            Every purchase supports the artisans who keep these traditions alive.
          </p>
          <Link
            to="/shop"
            className="mt-1 inline-flex items-center gap-2 border-b border-heritage-maroon/40 pb-0.5 text-[10px] uppercase tracking-[0.22em] text-heritage-maroon transition-colors hover:border-heritage-maroon"
          >
            View All Items
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

