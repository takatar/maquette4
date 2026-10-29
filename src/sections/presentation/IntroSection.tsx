import React from 'react';
import { HOTEL_IMAGES } from '../../config/hotel';

export const IntroSection: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 border-2 border-[#151515] bg-white px-3 py-1.5 shadow-[2px_2px_0px_0px_#151515]">
            <span className="w-2.5 h-2.5 bg-[#D92727]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#151515]">
              Présentation de la résidence
            </span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] leading-tight">
            Le Mondrian, une autre vision du séjour à Saly.
          </h1>

          <p className="text-base sm:text-lg text-[#151515]/80 leading-relaxed">
            Située au cœur de Saly Portudal, au Sénégal, la résidence hôtelière Le Mondrian propose un univers contemporain, marqué par l'équilibre des formes, la simplicité et une identité graphique distinctive.
          </p>

          <div className="p-4 bg-white border-2 border-[#151515] flex items-center gap-4 shadow-[3px_3px_0px_0px_#151515]">
            <div className="w-10 h-10 bg-[#1746A2] text-white flex items-center justify-center font-serif-title font-bold text-xl shrink-0">
              17
            </div>
            <p className="text-xs sm:text-sm text-[#151515]/80 leading-snug">
              Un ensemble intimiste de 17 hébergements articulés autour d'une cour privative avec piscine et compositions graphiques murales.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border-4 border-[#151515] bg-white p-2 shadow-[8px_8px_0px_0px_#151515]">
            <div className="aspect-3/4 overflow-hidden bg-[#E7E5DF] border-2 border-[#151515]">
              <img
                src={HOTEL_IMAGES.facadeMondrianTower}
                alt="La tour architecturale Mondrian de la résidence hôtelière à Saly"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 text-center text-xs font-bold uppercase tracking-wider text-[#151515]">
              Signature visuelle et géométrie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
