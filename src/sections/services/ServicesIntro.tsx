import React from 'react';
import { HOTEL_IMAGES } from '../../config/hotel';

export const ServicesIntro: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 border-2 border-[#151515] bg-white px-3 py-1.5 shadow-[2px_2px_0px_0px_#151515]">
            <span className="w-2.5 h-2.5 bg-[#1746A2]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#151515]">
              Séjour & Prestations
            </span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] leading-tight">
            Les services du Mondrian.
          </h1>

          <p className="text-base sm:text-lg text-[#151515]/80 leading-relaxed">
            Retrouvez les informations utiles pour préparer votre séjour au cœur de Saly Portudal. Notre équipe pourra vous renseigner sur les équipements, les services disponibles et les modalités d'accueil.
          </p>

          <div className="p-4 bg-white border-2 border-[#151515] border-l-4 border-l-[#D92727] text-xs text-[#151515]/80 space-y-1">
            <div className="font-bold uppercase tracking-wider text-[#151515]">
              Précision importante relative à la restauration :
            </div>
            <p>
              La résidence Le Mondrian ne dispose pas de restaurant interne. Chaque chambre est configurée pour le repos des voyageurs, certaines disposant d'un coin kitchenette privatif pour vos collations en toute autonomie.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border-4 border-[#151515] bg-white p-2 shadow-[8px_8px_0px_0px_#151515]">
            <div className="aspect-4/3 overflow-hidden bg-[#E7E5DF] border-2 border-[#151515]">
              <img
                src={HOTEL_IMAGES.poolDaySun}
                alt="Espace détente et bassin de baignade de la résidence"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#151515]">
              Bassin privatif & Espace extérieur
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
