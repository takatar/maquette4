import React from 'react';
import { HOTEL_IMAGES } from '../config/hotel';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../components/Header';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-6 sm:pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Colonne gauche éditoriale */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 border-2 border-[#151515] bg-white px-3 py-1.5 shadow-[2px_2px_0px_0px_#151515]">
              <span className="w-2.5 h-2.5 bg-[#D92727]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#151515]">
                Résidence Hôtelière • 17 Chambres
              </span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151515] leading-[1.08] tracking-tight">
              L'art de séjourner <span className="text-[#1746A2]">à Saly.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#151515]/80 leading-relaxed max-w-xl">
              Au cœur de Saly Portudal, Le Mondrian vous accueille dans une résidence hôtelière de 17 chambres où l'élégance contemporaine rencontre l'esprit de la côte sénégalaise.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('presentation')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#151515] text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-[#151515] hover:bg-[#E7E5DF] transition-colors shadow-[3px_3px_0px_0px_#151515] cursor-pointer"
              >
                <span>Découvrir la résidence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <WhatsAppButton label="Réservation" variant="primary" size="md" />
            </div>

            <div className="pt-6 border-t border-[#151515]/15 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="font-serif-title text-2xl font-bold text-[#151515]">17</div>
                <div className="text-[11px] uppercase tracking-wider text-[#151515]/60">Chambres</div>
              </div>
              <div>
                <div className="font-serif-title text-2xl font-bold text-[#1746A2]">Piscine</div>
                <div className="text-[11px] uppercase tracking-wider text-[#151515]/60">Bassin privatif</div>
              </div>
              <div>
                <div className="font-serif-title text-2xl font-bold text-[#D92727]">Saly</div>
                <div className="text-[11px] uppercase tracking-wider text-[#151515]/60">Quartier central</div>
              </div>
            </div>
          </div>

          {/* Colonne droite : Photo Hero & Mondrian */}
          <div className="lg:col-span-6 relative">
            <div className="relative border-4 border-[#151515] bg-[#151515] p-2 shadow-[8px_8px_0px_0px_#151515]">
              <div className="relative aspect-4/3 overflow-hidden bg-[#E7E5DF] border-2 border-[#151515]">
                <img
                  src={HOTEL_IMAGES.poolFrontMondrianWall}
                  alt="Piscine de la résidence Le Mondrian avec la fresque murale géométrique"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#151515]/90 text-[#F7F6F2] p-2.5 border border-white text-xs max-w-xs">
                  <div className="font-bold uppercase tracking-wider text-[#F2C230]">Cadre Authentique</div>
                  <div className="text-[11px] text-[#F7F6F2]/80">Bassin et composition murale d'inspiration Mondrian</div>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-12 gap-1 h-8">
                <div className="col-span-3 bg-[#D92727] border border-[#151515]"></div>
                <div className="col-span-5 bg-[#F7F6F2] border border-[#151515] flex items-center justify-center text-[10px] font-bold tracking-widest uppercase text-[#151515]">
                  Saly Portudal
                </div>
                <div className="col-span-2 bg-[#F2C230] border border-[#151515]"></div>
                <div className="col-span-2 bg-[#1746A2] border border-[#151515]"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F2C230] -z-10 border-2 border-[#151515] hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
