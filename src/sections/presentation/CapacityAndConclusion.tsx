import React from 'react';
import { HOTEL_IMAGES } from '../../config/hotel';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { PageId } from '../../components/Header';

interface CapacityAndConclusionProps {
  onNavigate: (page: PageId) => void;
}

export const CapacityAndConclusion: React.FC<CapacityAndConclusionProps> = ({ onNavigate }) => {
  return (
    <>
      {/* SECTION 4 — UNE RÉSIDENCE DE 17 CHAMBRES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-[#151515] bg-[#E7E5DF] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_0px_#151515]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#1746A2]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1746A2]">
                  Échelle & Atmosphère
                </span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515]">
                Un format à taille humaine.
              </h2>

              <p className="text-sm sm:text-base text-[#151515]/80 leading-relaxed">
                Le Mondrian compte 17 chambres et accueille les voyageurs dans une résidence hôtelière au cœur de Saly Portudal. Pour connaître les caractéristiques des chambres et les possibilités de séjour, contactez directement notre équipe.
              </p>

              <div>
                <WhatsAppButton label="Réservation" variant="primary" size="md" />
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="border-2 border-[#151515] bg-white overflow-hidden aspect-square">
                <img
                  src={HOTEL_IMAGES.roomMasterSuite}
                  alt="Chambre contemporaine Le Mondrian"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-2 border-[#151515] bg-white overflow-hidden aspect-square">
                <img
                  src={HOTEL_IMAGES.courtyardOverview}
                  alt="Cour intérieure et escalier central"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONCLUSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-[#151515] bg-[#151515] text-[#F7F6F2] p-8 sm:p-12 text-center space-y-6 shadow-[8px_8px_0px_0px_#F2C230]">
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
            Bienvenue dans l'univers du Mondrian.
          </h2>

          <p className="text-base sm:text-lg text-[#F7F6F2]/85 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre résidence et préparez votre prochain séjour à Saly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-white text-[#151515] hover:bg-[#F2C230] text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Nous contacter
            </button>
            <WhatsAppButton label="Réservation sur WhatsApp" variant="secondary" size="md" />
          </div>
        </div>
      </section>
    </>
  );
};
