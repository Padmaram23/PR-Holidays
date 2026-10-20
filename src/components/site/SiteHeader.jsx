import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Motif from '@/components/site/Motif';

const links = [
  { label: 'Our Story', to: '/#story' },
  { label: 'The Experience', to: '/#experience' },
  { label: 'Food & Culture', to: '/#food' },
  { label: 'Our Packages', to: '/packages' },
  { label: 'Contact', to: '/#contact' }
];

function scrollToHash(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleAnchor = (event, to) => {
    if (!to.startsWith('/#')) return;
    const id = to.slice(2);
    if (!document.getElementById(id)) return;
    event.preventDefault();
    scrollToHash(id);
    setOpen(false);
  };

  const solid = scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          solid
            ? 'border-b border-heritage-charcoal/10 bg-heritage-ivory/95 text-heritage-charcoal backdrop-blur-md'
            : 'border-b border-transparent bg-transparent text-heritage-ivory'
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Link to="/" className="group flex flex-col leading-none" aria-label="PR Holidays — home">
            <span
              className={cn(
                'font-heading text-[1.35rem] uppercase tracking-[0.22em] transition-colors',
                solid ? 'text-heritage-charcoal' : 'text-heritage-ivory'
              )}
            >
              PR Holidays
            </span>
            <span
              className={cn(
                'mt-1 text-[8.5px] uppercase tracking-[0.3em] transition-colors',
                solid ? 'text-heritage-bronze' : 'text-heritage-ivory/65'
              )}
            >
              Tamil Heritage Journeys
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(event) => handleAnchor(event, link.to)}
                className={cn(
                  'text-[10.5px] uppercase tracking-[0.2em] transition-colors',
                  solid
                    ? 'text-heritage-charcoal/75 hover:text-heritage-maroon'
                    : 'text-heritage-ivory/80 hover:text-heritage-ivory'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/packages"
              className={cn(
                'hidden items-center gap-2 border px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 sm:inline-flex',
                solid
                  ? 'border-heritage-maroon/40 text-heritage-maroon hover:bg-heritage-maroon hover:text-heritage-ivory'
                  : 'border-heritage-ivory/45 text-heritage-ivory hover:bg-heritage-ivory hover:text-heritage-charcoal'
              )}
            >
              Plan Your Journey
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden',
                solid ? 'border-heritage-charcoal/20' : 'border-heritage-ivory/35'
              )}
            >
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-heritage-maroon text-heritage-ivory lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
              <span className="font-heading text-[1.35rem] uppercase tracking-[0.22em]">PR Holidays</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-heritage-ivory/35"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-7" aria-label="Mobile">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * index }}
                >
                  <Link
                    to={link.to}
                    onClick={(event) => handleAnchor(event, link.to)}
                    className="flex items-baseline gap-4 border-b border-heritage-ivory/15 py-4 font-heading text-[1.85rem] leading-tight"
                  >
                    <span className="text-[9px] uppercase tracking-[0.3em] text-heritage-ivory/50">
                      0{index + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-7 pb-10">
              <Link
                to="/packages"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 border border-heritage-ivory/40 px-6 py-4 text-[10px] uppercase tracking-[0.24em]"
              >
                Plan Your Journey
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
              <Motif className="mt-8 h-4 w-32 text-heritage-ivory/40" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}