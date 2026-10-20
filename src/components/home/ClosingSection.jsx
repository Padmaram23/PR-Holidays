import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { images } from '@/data/images';

export default function ClosingSection() {
  return (
    <section className="relative isolate overflow-hidden bg-heritage-charcoal">
      <div className="absolute inset-0">
        <Image
          src={images.closing}
          alt="Sunset over harvested paddy fields with a lone banyan tree and a temple tower on the horizon"
          className="h-full w-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 veil-warm" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:px-8 sm:py-36 lg:py-44">
        <SectionLabel tone="light" className="justify-center">
          A Closing Invitation
        </SectionLabel>
        <h2 className="mt-8 text-balance font-heading text-[clamp(2.1rem,5vw,3.9rem)] font-light leading-[1.06] text-heritage-ivory">
          Some Places You Visit.
          <br />
          <span className="italic">Some Places Become a Part of You.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-[1rem] leading-[1.85] text-heritage-ivory/80">
          Come discover the stories, flavours, traditions, and people of Tamil Nadu. Not as an outsider
          passing through, but as a traveller welcomed with an open heart.
        </p>

        <div className="mt-11 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            to="/packages"
            className="inline-flex items-center justify-center bg-heritage-ivory px-9 py-4 text-[10.5px] uppercase tracking-[0.24em] text-heritage-charcoal transition-colors duration-300 hover:bg-heritage-bronze hover:text-heritage-ivory"
          >
            Find Your Journey
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center justify-center border border-heritage-ivory/45 px-9 py-4 text-[10.5px] uppercase tracking-[0.24em] text-heritage-ivory transition-colors duration-300 hover:bg-heritage-ivory/10"
          >
            Explore All Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}