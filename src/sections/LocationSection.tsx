import React from 'react';
import { HOTEL_IMAGES, HOTEL_INFO } from '../config/hotel';
import { MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-2 border-[#151515] bg-[#E7E5DF] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_0px_#151515]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#151515] text-[#F7F6F2] px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#D92727]" />
              Situation Géographique
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515]">
              Séjournez au cœur de Saly Portudal.
            </h2>
            <p className="text-sm sm:text-base text-[#151515]/80 leading-relaxed">
              Découvrez Le Mondrian, une résidence hôtelière située au cœur de la station balnéaire de Saly Portudal, au Sénégal.
            </p>
            <div className="p-4 bg-white border border-[#151515] text-xs space-y-2">
              <div className="font-bold uppercase text-[#151515]">Adresse de la résidence :</div>
              <div className="text-[#151515]/75">{HOTEL_INFO.fullAddress}</div>
              <div className="text-[11px] text-[#151515]/50 italic">
                Précisions d'itinéraire fournies directement sur WhatsApp lors de votre confirmation.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border-2 border-[#151515] bg-white p-2 shadow-[4px_4px_0px_0px_#151515]">
              <div className="aspect-4/3 overflow-hidden bg-[#E7E5DF]">
                <img
                  src={HOTEL_IMAGES.streetEntrance1}
                  alt="Entrée de la résidence Le Mondrian sur rue à Saly"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2.5 text-center text-xs text-[#151515]/70 font-medium">
                Entrée principale de la résidence Le Mondrian à Saly Portudal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
