import React from 'react';
import { PageId } from '../components/Header';
import { IntroSection } from '../sections/presentation/IntroSection';
import { ConceptSection } from '../sections/presentation/ConceptSection';
import { InspirationSection } from '../sections/presentation/InspirationSection';
import { CapacityAndConclusion } from '../sections/presentation/CapacityAndConclusion';

interface PresentationProps {
  onNavigate: (page: PageId) => void;
}

export const Presentation: React.FC<PresentationProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      <IntroSection />
      <ConceptSection />
      <InspirationSection />
      <CapacityAndConclusion onNavigate={onNavigate} />
    </div>
  );
};
