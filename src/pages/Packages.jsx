import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { base44 } from '@/api/base44Client';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import HashScroller from '@/components/site/HashScroller';
import ContactSection from '@/components/site/ContactSection';
import SectionLabel from '@/components/site/SectionLabel';
import Motif from '@/components/site/Motif';
import JourneyCard from '@/components/packages/JourneyCard';
import { images } from '@/data/images';

function scrollToContact() {
  const el = document.getElementById('contact');
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const page = await base44.entities.Package.filter(
          { active: true },
          { sort: 'display_order', limit: 50 }
        );
        if (!active) return;
        setPackages(page?.items ?? []);
      } catch (err) {
        if (!active) return;
        setError('Our journeys could not be loaded just now.');
      } finally {
        if (active) setLoading(false);
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  const experienceOptions = useMemo(() => {
    const titles = packages.map((item) => item.title).filter(Boolean);
    return [...titles, 'Not sure yet — I would like your guidance'];
  }, [packages]);

  const handleEnquire = (title) => {
    setSelected(title);
    window.setTimeout(scrollToContact, 60);
  };

  return (
    <div className="bg-background">
      <HashScroller />
      <SiteHeader />

      <main>
        <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-heritage-charcoal">
          <div className="absolute inset-0">
            <Image
              src={images.packagesHero}
              alt="The Cauvery river at dawn with ancient stone steps and a temple tower"
              className="h-full w-full object-cover"
              fittingType="fill"
              focalPointY={0.45}
            />
            <div className="absolute inset-0 veil-hero" />
          </div>
          <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-16 pt-36 sm:px-8 sm:pb-20">
            <SectionLabel tone="light">Our Journeys</SectionLabel>
            <h1 className="mt-7 max-w-3xl text-balance font-heading text-[clamp(2.3rem,6vw,4.8rem)] font-light leading-[1.02] text-heritage-ivory">
              One Land. Many Ways to Experience Its Soul.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-[1rem] leading-[1.8] text-heritage-ivory/80">
              These are the journeys we offer today. Each one is shaped personally, in conversation, around
              the season you travel in and the things you hope to understand.
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
            <div className="flex flex-col gap-6 border-b border-heritage-charcoal/15 pb-10 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <SectionLabel>The Experiences</SectionLabel>
                <h2 className="mt-6 text-balance font-heading text-[clamp(1.85rem,3.4vw,2.9rem)] font-light leading-[1.12] text-heritage-charcoal">
                  Every journey begins with a conversation.
                </h2>
              </div>
              <p className="max-w-sm text-[0.9rem] leading-relaxed text-heritage-earth/65">
                Nothing on this page is booked or paid for online. Durations, inclusions and costs are
                confirmed personally once we understand what you are looking for.
              </p>
            </div>

            <div className="mt-14 space-y-16 md:space-y-20">
              {loading && (
                <div className="space-y-14" aria-hidden="true">
                  {[0, 1].map((key) => (
                    <div key={key} className="grid animate-pulse gap-9 lg:grid-cols-12">
                      <div className="aspect-[4/3] bg-heritage-sand lg:col-span-6" />
                      <div className="space-y-4 lg:col-span-6">
                        <div className="h-3 w-24 bg-heritage-sand" />
                        <div className="h-8 w-3/4 bg-heritage-sand" />
                        <div className="h-3 w-full bg-heritage-sand" />
                        <div className="h-3 w-5/6 bg-heritage-sand" />
                        <div className="h-24 w-full bg-heritage-sand" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && error && (
                <div role="alert" className="border-l-2 border-heritage-maroon pl-5">
                  <p className="font-heading text-xl text-heritage-charcoal">{error}</p>
                  <p className="mt-2 text-[0.92rem] text-heritage-earth/70">
                    Please write to us below and we will share the journeys personally.
                  </p>
                </div>
              )}

              {!loading && !error && packages.length === 0 && (
                <div className="border-t border-heritage-charcoal/15 pt-10">
                  <p className="font-heading text-2xl text-heritage-charcoal">
                    Our journeys are being prepared.
                  </p>
                  <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-heritage-earth/70">
                    In the meantime, write to us below — we are always glad to plan a journey personally.
                  </p>
                </div>
              )}

              {!loading &&
                !error &&
                packages.map((pkg, index) => (
                  <JourneyCard key={pkg.id} pkg={pkg} index={index} onEnquire={handleEnquire} />
                ))}
            </div>

            <div className="mt-20 text-center">
              <Motif className="mx-auto h-4 w-36 text-heritage-bronze/60" />
              <p className="mx-auto mt-8 max-w-md font-heading text-[1.4rem] italic leading-snug text-heritage-earth/70">
                Looking for something different? Tell us, and we will shape it with you.
              </p>
              <Link
                to="/#experience"
                className="mt-6 inline-block border-b border-heritage-maroon/40 pb-1 text-[10px] uppercase tracking-[0.22em] text-heritage-maroon transition-colors hover:border-heritage-maroon"
              >
                Read the story of the journey
              </Link>
            </div>
          </div>
        </section>

        <ContactSection
          experiences={experienceOptions}
          source="packages"
          defaultExperience={selected}
        />
      </main>

      <SiteFooter />
    </div>
  );
}