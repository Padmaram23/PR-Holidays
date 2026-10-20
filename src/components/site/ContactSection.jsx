import React from 'react';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import Motif from '@/components/site/Motif';
import EnquiryForm from '@/components/enquiry/EnquiryForm';

export default function ContactSection({ experiences = [], source = 'website', defaultExperience = '' }) {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-heritage-charcoal/10 bg-background py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-7 text-balance font-heading text-[clamp(1.95rem,3.4vw,2.9rem)] font-light leading-[1.1] text-heritage-charcoal">
              Tell us what you are hoping to find.
            </h2>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-[1.85] text-heritage-earth/75">
              <p>
                Write to us the way you would write to a friend. A little about what draws you here is
                enough to begin — we will take it from there.
              </p>
              <p>
                Every journey is planned one conversation at a time. Nothing is booked or charged on this
                website; we write back personally, and only then do we talk dates, stays and costs.
              </p>
            </div>

            <Motif className="mt-10 h-4 w-32 text-heritage-bronze/60" />

            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-heritage-earth/55">
              Thanjavur · The Cauvery Delta · Tamil Nadu
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm
              experiences={experiences}
              source={source}
              defaultExperience={defaultExperience}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}