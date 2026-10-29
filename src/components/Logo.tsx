import React from 'react';

interface LogoProps {
  className?: string;
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  withTagline = false,
  size = 'md'
}) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Insigne géométrique Mondrian */}
      <div 
        className={`relative border-2 border-[#151515] bg-[#F7F6F2] overflow-hidden shrink-0 ${
          isSmall ? 'w-8 h-8' : isLarge ? 'w-12 h-12' : 'w-10 h-10'
        }`}
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#D92727] border-r-2 border-b-2 border-[#151515]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-[#F7F6F2] border-b-2 border-[#151515]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-[#F2C230] border-l-2 border-[#151515]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1746A2] border-t-2 border-r-2 border-[#151515]"></div>
      </div>

      {/* Typographie de marque */}
      <div className="flex flex-col">
        <span 
          className={`font-serif-title font-bold tracking-widest text-[#151515] uppercase leading-none ${
            isSmall ? 'text-lg' : isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}
        >
          Le Mondrian
        </span>
        {withTagline && (
          <span className="text-[10px] md:text-xs tracking-[0.25em] text-[#151515]/75 uppercase font-medium mt-1">
            Résidence Hôtelière • Saly
          </span>
        )}
      </div>
    </div>
  );
};
