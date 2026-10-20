import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HashScroller() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }, 140);

    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}