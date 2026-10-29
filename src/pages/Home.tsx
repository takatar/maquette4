import React from 'react';
import { PageId } from '../components/Header';
import { HeroSection } from '../sections/HeroSection';
import { AboutPreview } from '../sections/AboutPreview';
import { RoomsPreview } from '../sections/RoomsPreview';
import { ExperienceSection } from '../sections/ExperienceSection';
import { LocationSection } from '../sections/LocationSection';
import { CtaSection } from '../sections/CtaSection';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      <HeroSection onNavigate={onNavigate} />
      <AboutPreview onNavigate={onNavigate} />
      <RoomsPreview onNavigate={onNavigate} />
      <ExperienceSection />
      <LocationSection />
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
};
