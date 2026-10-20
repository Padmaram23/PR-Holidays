import React from 'react';
import { cn } from '@/lib/utils';

export default function SectionLabel({ children, tone = 'dark', className = '' }) {
  const isLight = tone === 'light';

  return (
    <p
      className={cn(
        'flex items-center gap-4 text-[10px] uppercase tracking-label sm:text-[11px]',
        isLight ? 'text-heritage-ivory/75' : 'text-heritage-maroon',
        className
      )}
    >
      <span className={cn('h-px w-8 sm:w-12', isLight ? 'bg-heritage-ivory/40' : 'bg-heritage-bronze/60')} />
      {children}
    </p>
  );
}