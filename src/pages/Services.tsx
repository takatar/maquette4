import React from 'react';
import { ServicesIntro } from '../sections/services/ServicesIntro';
import { ServicesGrid } from '../sections/services/ServicesGrid';
import { StayInfo } from '../sections/services/StayInfo';
import { ServicesCta } from '../sections/services/ServicesCta';

export const Services: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      <ServicesIntro />
      <ServicesGrid />
      <StayInfo />
      <ServicesCta />
    </div>
  );
};
