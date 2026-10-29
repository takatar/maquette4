import React from 'react';
import { HOTEL_IMAGES } from '../config/hotel';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../components/Header';

interface AboutPreviewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-2 border-[#151515] bg-white p-6 sm:p-10 lg:p-14 shadow-[6px_6px_0px_0px_#151515]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#1746A2]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1746A2]">
                L'Établissement
              </span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515] leading-tight">
              Une adresse singulière au cœur de Saly.
            </h2>
            <p className="text-sm sm:text-base text-[#151515]/80 leading-relaxed">
              Pensé comme un lieu de séjour à l'identité affirmée, Le Mondrian associe une esthétique contemporaine à une approche simple et accueillante de l'hospitalité. Ses 17 chambres en font une résidence à taille humaine, située au cœur de l'une des destinations balnéaires les plus connues du Sénégal.
            </p>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('presentation')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#151515] text-[#F7F6F2] hover:bg-[#D92727] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 border-[#151515] bg-[#E7E5DF] overflow-hidden aspect-3/4">
              <img
                src={HOTEL_IMAGES.facadeMondrianTower}
                alt="Façade géométrique aux couleurs primaires Mondrian"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 flex flex-col justify-between">
              <div className="border-2 border-[#151515] bg-[#E7E5DF] overflow-hidden aspect-4/3">
                <img
                  src={HOTEL_IMAGES.poolDaySun}
                  alt="Bassin de baignade sous le soleil de Saly"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 border-2 border-[#151515] bg-[#F7F6F2] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D92727]">
                  Atmosphère Balnéaire & Épure
                </div>
                <p className="text-xs text-[#151515]/75 leading-relaxed">
                  Des lignes pures, des espaces lumineux et un bassin central propice au calme et à la détente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
