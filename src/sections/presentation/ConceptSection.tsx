import React from 'react';
import { Palette, Home as HomeIcon, MapPin } from 'lucide-react';
import { MondrianPattern } from '../../components/MondrianPattern';

export const ConceptSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="flex justify-center">
          <MondrianPattern variant="compact" />
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515]">
          L'équilibre dans chaque détail.
        </h2>
        <p className="text-sm text-[#151515]/75">
          Trois valeurs fondamentales qui guident notre accueil au quotidien.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* L'esthétique */}
        <div className="bg-white border-2 border-[#151515] p-8 shadow-[5px_5px_0px_0px_#151515] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 border-2 border-[#151515] bg-[#D92727]/10 text-[#D92727] flex items-center justify-center">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#151515]">
              L'esthétique
            </h3>
            <p className="text-sm text-[#151515]/80 leading-relaxed">
              Un univers visuel inspiré des compositions géométriques de Piet Mondrian, apportant clarté et modernité à l'environnement balnéaire.
            </p>
          </div>
          <div className="pt-6 border-t border-[#E7E5DF] mt-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D92727]">
              Formes, Lignes & Couleurs
            </span>
          </div>
        </div>

        {/* Le confort */}
        <div className="bg-white border-2 border-[#151515] p-8 shadow-[5px_5px_0px_0px_#151515] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 border-2 border-[#151515] bg-[#F2C230]/20 text-[#151515] flex items-center justify-center">
              <HomeIcon className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#151515]">
              Le confort
            </h3>
            <p className="text-sm text-[#151515]/80 leading-relaxed">
              Une approche de l'hébergement centrée sur le séjour et les besoins des voyageurs, sans promettre de prestations non vérifiées.
            </p>
          </div>
          <div className="pt-6 border-t border-[#E7E5DF] mt-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#151515]">
              Calme, Climatisation & Espace
            </span>
          </div>
        </div>

        {/* La situation */}
        <div className="bg-white border-2 border-[#151515] p-8 shadow-[5px_5px_0px_0px_#151515] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 border-2 border-[#151515] bg-[#1746A2]/10 text-[#1746A2] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#151515]">
              La situation
            </h3>
            <p className="text-sm text-[#151515]/80 leading-relaxed">
              Une résidence située au cœur de Saly Portudal, une station balnéaire renommée de la Petite-Côte sénégalaise.
            </p>
          </div>
          <div className="pt-6 border-t border-[#E7E5DF] mt-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1746A2]">
              Saly Portudal • Sénégal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
