import React from 'react';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { MondrianPattern } from '../../components/MondrianPattern';

export const ServicesCta: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-4 border-[#151515] bg-[#151515] text-[#F7F6F2] p-8 sm:p-12 lg:p-14 text-center space-y-6 shadow-[8px_8px_0px_0px_#1746A2]">
        <div className="flex justify-center">
          <MondrianPattern variant="compact" />
        </div>

        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
          Parlons de votre séjour.
        </h2>

        <p className="text-base sm:text-lg text-[#F7F6F2]/85 max-w-2xl mx-auto leading-relaxed">
          Vous souhaitez connaître les équipements disponibles ou obtenir des précisions avant votre arrivée ? Notre équipe est joignable directement sur WhatsApp.
        </p>

        <div className="pt-2">
          <WhatsAppButton
            label="Réservation sur WhatsApp"
            variant="secondary"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};
