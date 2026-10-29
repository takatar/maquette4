import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  statusText?: string;
  accent?: 'rouge' | 'bleu' | 'jaune';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  statusText = "Sur confirmation de l'équipe",
  accent = 'bleu',
}) => {
  const accentBorder = {
    rouge: 'hover:border-[#D92727]',
    bleu: 'hover:border-[#1746A2]',
    jaune: 'hover:border-[#F2C230]',
  }[accent];

  const iconColor = {
    rouge: 'text-[#D92727] bg-[#D92727]/10',
    bleu: 'text-[#1746A2] bg-[#1746A2]/10',
    jaune: 'text-[#F2C230] bg-[#F2C230]/20',
  }[accent];

  return (
    <div className={`p-6 bg-white border-2 border-[#151515] transition-all duration-200 shadow-[3px_3px_0px_0px_#151515] ${accentBorder}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 flex items-center justify-center border-2 border-[#151515] shrink-0 ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif-title text-lg font-bold text-[#151515]">
            {title}
          </h3>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#151515]/50">
            {statusText}
          </span>
        </div>
      </div>
      <p className="text-sm text-[#151515]/75 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
