import React from 'react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { images } from '@/data/images';

export default function StorySection() {
  return (
    <section id="story" className="scroll-mt-20 bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="lg:col-span-6 lg:pr-6">
          <Reveal>
            <SectionLabel>Why We Do This</SectionLabel>
            <h2 className="mt-7 max-w-xl text-balance font-heading text-[clamp(2.05rem,4.2vw,3.6rem)] font-light leading-[1.08] tracking-[-0.01em] text-heritage-charcoal">
              Our Heritage Was Never Meant to Be Just History.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-9 space-y-5 text-[1rem] leading-[1.85] text-heritage-earth/80 sm:text-[1.05rem]">
            <p>
              We grew up surrounded by stories, traditions, flavours, and ways of life that have been
              passed down through generations.
            </p>
            <p>
              The temples, the bronze artisans, the village kitchens, the festivals, the ancient wisdom,
              and the kindness of a stranger who welcomes you like family — these are not attractions to
              us. They are part of who we are.
            </p>
            <p>
              We believe the beauty of Tamil culture should be experienced, not merely photographed.
            </p>
            <p>
              We are not here simply to sell you a holiday. We are here to share the home we love, support
              the people who keep its traditions alive, and help you understand the soul behind everything
              you see.
            </p>
            <p className="font-heading text-[1.35rem] italic text-heritage-maroon">
              Come with curiosity. Leave with a connection.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <blockquote className="mt-11 border-l-2 border-heritage-maroon pl-6 sm:pl-8">
              <p className="text-pretty font-heading text-[clamp(1.35rem,2.2vw,1.8rem)] italic leading-snug text-heritage-maroon">
                We do this because our culture deserves to be experienced, understood, and carried
                forward — not just displayed.
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <figure className="overflow-hidden bg-heritage-charcoal/5">
              <Image
                src={images.artisan}
                alt="A bronze artisan's hands shaping a clay mould in Swamimalai"
                className="aspect-[4/5] w-full object-cover"
                fittingType="fill"
              />
            </figure>
            <figcaption className="mt-4 text-[11px] uppercase tracking-[0.16em] text-heritage-earth/50">
              Bronze casting, Swamimalai — work of the sthapathi families
            </figcaption>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 sm:ml-10">
            <figure className="overflow-hidden bg-heritage-charcoal/5">
              <Image
                src={images.veranda}
                alt="A traditional Thanjavur veranda at dusk with an oil lamp and red oxide floor"
                className="aspect-[4/3] w-full object-cover"
                fittingType="fill"
              />
            </figure>
            <figcaption className="mt-4 text-[11px] uppercase tracking-[0.16em] text-heritage-earth/50">
              The thinnai — where guests are received and stories are told
            </figcaption>
          </Reveal>

          <Reveal delay={0.14} className="mt-10 flex gap-4">
            <figure className="w-2/3 overflow-hidden bg-heritage-charcoal/5">
              <Image
                src={images.stoneDetail}
                alt="Weathered Chola temple stone carving with a brass lamp and jasmine flowers"
                className="aspect-square w-full object-cover"
                fittingType="fill"
              />
            </figure>
            <p className="w-1/3 self-end font-heading text-[1.15rem] italic leading-snug text-heritage-earth/70">
              Granite that has held a thousand years of footsteps.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}