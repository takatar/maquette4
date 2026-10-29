import React from 'react';
import { HOTEL_IMAGES } from '../../config/hotel';

export const InspirationSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-4 border-[#151515] bg-white p-6 sm:p-10 lg:p-14 shadow-[8px_8px_0px_0px_#151515]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#D92727]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D92727]">
                Art & Architecture
              </span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515] leading-tight">
              Quand l'art inspire l'hospitalité.
            </h2>

            <p className="text-sm sm:text-base text-[#151515]/80 leading-relaxed">
              Le nom Le Mondrian fait écho à Piet Mondrian et à sa recherche d'équilibre entre les lignes, les formes et les couleurs. Cette inspiration se retrouve dans notre identité visuelle : une composition claire, des contrastes affirmés et une attention particulière portée aux détails.
            </p>

            <div className="p-4 bg-[#F7F6F2] border-2 border-[#151515] text-xs text-[#151515]/75 leading-relaxed">
              <strong>Précision :</strong> Cette inspiration artistique guide notre démarche d'aménagement et notre identité graphique, dans le respect de l'histoire de l'art géométrique contemporain.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border-2 border-[#151515] bg-[#151515] p-2">
              <div className="aspect-16/9 overflow-hidden bg-[#E7E5DF] border border-[#151515]">
                <img
                  src={HOTEL_IMAGES.poolFrontMondrianWall}
                  alt="Fresque murale Mondrian bordant la piscine de la résidence"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-6 gap-1 mt-2 h-10">
                <div className="col-span-1 bg-[#D92727]"></div>
                <div className="col-span-2 bg-[#F7F6F2] border border-[#151515] flex items-center justify-center text-[10px] font-bold uppercase">Lignes</div>
                <div className="col-span-1 bg-[#F2C230]"></div>
                <div className="col-span-2 bg-[#1746A2]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
