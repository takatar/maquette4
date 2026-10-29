import React from 'react';
import { Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515]">
          L'expérience Le Mondrian
        </h2>
        <p className="text-sm text-[#151515]/75">
          Trois piliers pour définir notre vision de l'accueil à Saly Portudal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-[#151515] p-8 shadow-[5px_5px_0px_0px_#151515] relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#D92727]"></div>
          <div>
            <div className="w-10 h-10 border-2 border-[#151515] bg-[#D92727]/10 flex items-center justify-center mb-6 text-[#D92727]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#151515] mb-3">
              Une identité singulière
            </h3>
            <p className="text-sm text-[#151515]/80 leading-relaxed">
              « Un univers visuel inspiré de l'équilibre des formes et des lignes. »
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-[#E7E5DF] flex items-center gap-1.5">
            <span className="w-3 h-3 bg-[#D92727]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#151515]/60">Design & Rigueur</span>
          </div>
        </div>

        <div className="bg-white border-2 border-[#151515] p-8 shadow-[5px_5px_0px_0px_#151515] relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#F2C230]"></div>
          <div>
            <div className="w-10 h-10 border-2 border-[#151515] bg-[#F2C230]/20 flex items-center justify-center mb-6 text-[#151515]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#151515] mb-3">
              Une résidence à taille humaine
            </h3>
            <p className="text-sm text-[#151515]/80 leading-relaxed">
              « 17 chambres pour accueillir les voyageurs dans un cadre contemporain. »
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-[#E7E5DF] flex items-center gap-1.5">
            <span className="w-3 h-3 bg-[#F2C230]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#151515]/60">Écoute & Calme</span>
          </div>
        </div>

        <div className="bg-white border-2 border-[#151515] p-8 shadow-[5px_5px_0px_0px_#151515] relative flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#1746A2]"></div>
          <div>
            <div className="w-10 h-10 border-2 border-[#151515] bg-[#1746A2]/10 flex items-center justify-center mb-6 text-[#1746A2]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#151515] mb-3">
              Une adresse à Saly Portudal
            </h3>
            <p className="text-sm text-[#151515]/80 leading-relaxed">
              « Une situation au cœur de la station balnéaire pour profiter de votre séjour au Sénégal. »
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-[#E7E5DF] flex items-center gap-1.5">
            <span className="w-3 h-3 bg-[#1746A2]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#151515]/60">Saly Portudal</span>
          </div>
        </div>
      </div>
    </section>
  );
};
