import React from 'react';
import { Link } from 'react-router-dom';
import Motif from '@/components/site/Motif';

const explore = [
  { label: 'Our Story', to: '/#story' },
  { label: 'The Experience', to: '/#experience' },
  { label: 'Food & Culture', to: '/#food' },
  { label: 'Our Packages', to: '/packages' },
  { label: 'Contact', to: '/#contact' }
];

export default function SiteFooter() {
  return (
    <footer className="bg-heritage-charcoal text-heritage-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-heading text-[1.6rem] uppercase tracking-[0.22em] text-heritage-ivory">
              PR Holidays
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-heritage-bronze">
              Tamil Heritage Journeys
            </p>
            <p className="mt-7 max-w-sm font-heading text-[1.4rem] italic leading-snug text-heritage-ivory/85">
              We don’t sell trips. We open the doors to our culture.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[10px] uppercase tracking-label text-heritage-ivory/45">Explore</p>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[0.95rem] text-heritage-ivory/75 transition-colors hover:text-heritage-bronze"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-label text-heritage-ivory/45">Where we are</p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-heritage-ivory/75">
              Thanjavur, Tamil Nadu
              <br />
              The Cauvery delta
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-heritage-ivory/60">
              Every journey begins with a conversation.
            </p>
            <Link
              to="/#contact"
              className="mt-5 inline-block border-b border-heritage-bronze/50 pb-1 text-[10px] uppercase tracking-[0.22em] text-heritage-bronze transition-colors hover:border-heritage-ivory hover:text-heritage-ivory"
            >
              Begin an enquiry
            </Link>
          </div>
        </div>

        <Motif className="mt-14 h-4 w-36 text-heritage-ivory/25" />

        <div className="mt-8 flex flex-col gap-3 border-t border-heritage-ivory/10 pt-6 text-[11px] text-heritage-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PR Holidays. Rooted in Tamil heritage, shared with love.</p>
          <p>Photographs are illustrative of the Thanjavur region.</p>
        </div>
      </div>
    </footer>
  );
}