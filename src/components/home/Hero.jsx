import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Image } from '@/components/ui/image';
import SectionLabel from '@/components/site/SectionLabel';
import { images } from '@/data/images';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-heritage-charcoal">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Morning mist over paddy fields near Thanjavur with a Chola temple tower in the distance"
          className="h-full w-full animate-slow-zoom object-cover motion-reduce:animate-none"
          fittingType="fill"
          focalPointX={0.5}
          focalPointY={0.55}
        />
        <div className="absolute inset-0 veil-hero" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-40 text-center sm:px-8 sm:pb-24">
        <SectionLabel tone="light" className="justify-center text-center">
          Rooted in Tamil Heritage · Shared with Love
        </SectionLabel>

        <h1 className="mt-9 font-heading text-[clamp(2.5rem,7vw,6.2rem)] font-light leading-[0.98] tracking-[-0.015em] text-heritage-ivory">
          Come as a Traveller.
          <br />
          <span className="italic">Leave as One of Us.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-[1.02rem] leading-[1.75] text-heritage-ivory/80 sm:text-[1.1rem]">
          Walk through centuries of Chola heritage. Taste the flavours that shaped our homes. Share
          stories with the people who keep our traditions alive. Discover a Tamil Nadu that goes far
          beyond the guidebooks.
        </p>

        <div className="mt-11 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            to="/packages"
            className="inline-flex items-center justify-center bg-heritage-ivory px-9 py-4 text-[10.5px] uppercase tracking-[0.24em] text-heritage-charcoal transition-colors duration-300 hover:bg-heritage-bronze hover:text-heritage-ivory"
          >
            Experience Our Heritage
          </Link>
          <a
            href="#story"
            className="inline-flex items-center justify-center border border-heritage-ivory/45 px-9 py-4 text-[10.5px] uppercase tracking-[0.24em] text-heritage-ivory transition-colors duration-300 hover:bg-heritage-ivory/10"
          >
            Discover Our Story
          </a>
        </div>

        <a
          href="#story"
          className="group mt-16 hidden flex-col items-center gap-3 text-[9.5px] uppercase tracking-[0.32em] text-heritage-ivory/55 transition-colors hover:text-heritage-ivory sm:inline-flex"
        >
          <span>Your journey begins here.</span>
          <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" strokeWidth={1.25} />
        </a>
      </div>
    </section>
  );
}