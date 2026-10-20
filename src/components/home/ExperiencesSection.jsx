import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import SectionLabel from '@/components/site/SectionLabel';
import { images } from '@/data/images';

const experiences = [
  {
    eyebrow: 'Experience A · The Complete Heritage Experience',
    title: 'The Living Heritage Journey',
    description:
      'An immersive journey through the heritage, food, hospitality, and village life of the Thanjavur region. Discover ancient architecture, taste traditional foods, connect with local people, and experience the region beyond the usual tourist trail.',
    highlights: [
      'Airport pickup and drop-off',
      'Guided heritage and cultural experiences',
      'Regional food discoveries',
      'An overnight village stay',
      'Thoughtfully selected, hygienic accommodation',
      'A locally rooted experience with time for genuine connection'
    ],
    image: images.heritagePanel,
    alt: 'A Chola temple tower above paddy fields with a bullock cart in the foreground',
    cta: 'Explore the Full Experience'
  },
  {
    eyebrow: 'Experience B · The Spiritual Journey',
    title: 'The Sacred Tamil Nadu Journey',
    description:
      'For travellers drawn to the spiritual heart of Tamil Nadu, discover sacred architecture, temple histories, local traditions, and the cultural stories that surround centuries-old places of worship.',
    highlights: [
      'Temple and heritage visits',
      'Historical and cultural context',
      'Thoughtfully planned travel between destinations',
      'Local food and regional experiences',
      'Optional accommodation and transfers according to the selected package'
    ],
    image: images.sacredPanel,
    alt: 'A dark temple corridor with carved pillars and rows of lit brass lamps',
    cta: 'Explore Spiritual Packages'
  }
];

export default function ExperiencesSection() {
  return (
    <section id="ways-to-journey" className="scroll-mt-20 bg-background py-24 md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">Ways to Journey</SectionLabel>
          <h2 className="mt-7 text-balance font-heading text-[clamp(2.05rem,4.2vw,3.6rem)] font-light leading-[1.08] text-heritage-charcoal">
            One Land. Many Ways to Experience Its Soul.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-[1rem] leading-[1.85] text-heritage-earth/75">
            Begin with an idea of what draws you. We shape the rest together, around your pace, your
            interests and the season you travel in.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col bg-heritage-ivory ring-1 ring-heritage-charcoal/10">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform [transition-duration:1600ms] ease-out group-hover:scale-[1.04] sm:aspect-[5/4]"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-charcoal/55 via-transparent to-transparent" />
                  <p className="absolute left-6 top-6 right-6 text-[9.5px] uppercase leading-relaxed tracking-[0.18em] text-heritage-ivory/85">
                    {item.eyebrow}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-10">
                  <h3 className="font-heading text-[clamp(1.7rem,2.4vw,2.1rem)] leading-tight text-heritage-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-heritage-earth/75">
                    {item.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[0.9rem] leading-relaxed text-heritage-earth/80"
                      >
                        <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-heritage-bronze" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/packages"
                    className="mt-9 inline-flex items-center gap-3 self-start border-b border-heritage-maroon/30 pb-2 text-[10.5px] uppercase tracking-[0.22em] text-heritage-maroon transition-colors hover:border-heritage-maroon"
                  >
                    {item.cta}
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Link
            to="/packages"
            className="inline-flex items-center gap-3 font-heading text-[1.25rem] italic text-heritage-earth/70 transition-colors hover:text-heritage-maroon"
          >
            Looking for something different? Discover all our experiences
            <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}