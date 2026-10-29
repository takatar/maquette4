import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export interface RoomCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badgeAccent?: 'rouge' | 'bleu' | 'jaune';
}

export const RoomCard: React.FC<RoomCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  badgeAccent = 'rouge',
}) => {
  const accentClasses = {
    rouge: 'border-t-4 border-t-[#D92727]',
    bleu: 'border-t-4 border-t-[#1746A2]',
    jaune: 'border-t-4 border-t-[#F2C230]',
  }[badgeAccent];

  return (
    <article className={`flex flex-col bg-white border-2 border-[#151515] overflow-hidden ${accentClasses} shadow-[4px_4px_0px_0px_#151515] transition-transform duration-200 hover:-translate-y-1`}>
      {/* Conteneur Image avec proportions soignées */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E7E5DF] border-b-2 border-[#151515]">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#151515] text-[#F7F6F2] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-white">
          {subtitle}
        </div>
      </div>

      {/* Contenu textuel sobre et vérifié */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif-title text-xl font-bold text-[#151515] mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-[#151515]/75 leading-relaxed mb-5">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E7E5DF] flex items-center justify-between gap-3">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#151515]/60">
            Disponibilité sur demande
          </span>
          <WhatsAppButton
            label="Réserver"
            context={`la chambre « ${title} »`}
            variant="dark"
            size="sm"
          />
        </div>
      </div>
    </article>
  );
};
