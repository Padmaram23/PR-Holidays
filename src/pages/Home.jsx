import React from 'react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import HashScroller from '@/components/site/HashScroller';
import ContactSection from '@/components/site/ContactSection';
import Hero from '@/components/home/Hero';
import StorySection from '@/components/home/StorySection';
import JourneySection from '@/components/home/JourneySection';
import DetailsSection from '@/components/home/DetailsSection';
import ExperiencesSection from '@/components/home/ExperiencesSection';
import ClosingSection from '@/components/home/ClosingSection';

const experiences = [
  'The Living Heritage Journey',
  'The Sacred Tamil Nadu Journey',
  'Not sure yet — I would like your guidance'
];

export default function Home() {
  return (
    <div className="bg-background">
      <HashScroller />
      <SiteHeader />
      <main>
        <Hero />
        <JourneySection />
        <DetailsSection />
        <ExperiencesSection />
        <ClosingSection />
        <StorySection />
        <ContactSection experiences={experiences} source="home" />
      </main>
      <SiteFooter />
    </div>
  );
}