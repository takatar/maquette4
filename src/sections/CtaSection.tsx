import React from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { MondrianPattern } from '../components/MondrianPattern';
import { PageId } from '../components/Header';

interface CtaSectionProps {
  onNavigate: (page: PageId) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-4 border-[#151515] bg-[#151515] text-[#F7F6F2] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[8px_8px_0px_0px_#D92727]">
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <MondrianPattern variant="compact" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Votre séjour à Saly commence ici.
          </h2>

          <p className="text-base sm:text-lg text-[#F7F6F2]/85 leading-relaxed">
            Une question sur nos chambres ou sur les disponibilités ? Contactez directement Le Mondrian sur WhatsApp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <WhatsAppButton
              label="Réservation sur WhatsApp"
              variant="secondary"
              size="lg"
            />
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-4 border-2 border-white text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#151515] transition-colors cursor-pointer"
            >
              Toutes nos coordonnées
            </button>
          </div>

          <p className="text-xs text-[#F7F6F2]/50 italic">
            Échange humain direct et personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
};
