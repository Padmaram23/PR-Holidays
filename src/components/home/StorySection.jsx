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
              More Than a Journey. A Feeling That Stays With You.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-9 space-y-5 text-[1rem] leading-[1.85] text-heritage-earth/80 sm:text-[1.05rem]">
            <p>
              Tamil Nadu is more than its ancient temples, timeless traditions, and rich heritage. It
              lives in the warmth of its people, the flavours of its kitchens, the hands of its artisans,
              and the heartfelt hospitality that makes a stranger feel like family.
            </p>
            <p>
              Through authentic, meaningful experiences, we take you beyond the ordinary to discover the
              real Tamil Nadu — its people, its stories, and its way of life.
            </p>
            <p>
              For us, this is more than business. It is a passion to share our home, honour our heritage,
              and create connections that go beyond money.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <blockquote className="mt-11 border-l-2 border-heritage-maroon pl-6 sm:pl-8">
              <p className="text-pretty font-heading text-[clamp(1.35rem,2.2vw,1.8rem)] italic leading-snug text-heritage-maroon">
                We believe our culture is not just meant to be seen, but experienced, understood, and
                felt by the soul.
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <figure className="overflow-hidden bg-heritage-charcoal/5">
              <Image
                src={images.logo}
                alt="An artisan's hands painting the details on a pair of traditional Thanjavur thalaiyatti bommai dolls"
                className="aspect-[4/5] w-full object-cover"
                fittingType="fill"
              />
            </figure>
            {/* <figcaption className="mt-4 text-[11px] uppercase tracking-[0.16em] text-heritage-earth/50">
              The making of the Thanjavur thalaiyatti bommai — the doll that never stops dancing
            </figcaption> */}
          </Reveal>

          {/* <Reveal delay={0.1} className="mt-10 sm:ml-10">
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
          </Reveal> */}

          {/* <Reveal delay={0.14} className="mt-10 flex gap-4">
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
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}