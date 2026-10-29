import React from 'react';

interface MondrianPatternProps {
  className?: string;
  variant?: 'compact' | 'banner' | 'card' | 'corner' | 'square';
}

export const MondrianPattern: React.FC<MondrianPatternProps> = ({
  className = '',
  variant = 'compact'
}) => {
  if (variant === 'square') {
    return (
      <div className={`relative border-2 border-[#151515] bg-[#F7F6F2] overflow-hidden ${className}`}>
        <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
          <div className="bg-[#D92727] border-r-2 border-b-2 border-[#151515]"></div>
          <div className="col-span-2 bg-[#F7F6F2] border-b-2 border-[#151515]"></div>
          <div className="row-span-2 bg-[#F7F6F2] border-r-2 border-[#151515]"></div>
          <div className="bg-[#151515]"></div>
          <div className="bg-[#F2C230] border-l-2 border-[#151515]"></div>
          <div className="bg-[#1746A2] border-t-2 border-[#151515]"></div>
          <div className="bg-[#F7F6F2] border-t-2 border-l-2 border-[#151515]"></div>
        </div>
      </div>
    );
  }

  if (variant === 'corner') {
    return (
      <div className={`relative w-20 h-20 border-2 border-[#151515] overflow-hidden ${className}`} aria-hidden="true">
        <div className="absolute top-0 left-0 w-8 h-8 bg-[#D92727] border-r-2 border-b-2 border-[#151515]"></div>
        <div className="absolute top-0 right-0 w-12 h-12 bg-[#F7F6F2] border-b-2 border-[#151515]"></div>
        <div className="absolute bottom-0 right-0 w-12 h-8 bg-[#F2C230] border-l-2 border-[#151515]"></div>
        <div className="absolute bottom-0 left-0 w-8 h-12 bg-[#1746A2] border-t-2 border-r-2 border-[#151515]"></div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`h-3 w-full flex border-y border-[#151515] overflow-hidden ${className}`} aria-hidden="true">
        <div className="w-16 bg-[#D92727] border-r-2 border-[#151515]"></div>
        <div className="w-4 bg-[#151515] border-r-2 border-[#151515]"></div>
        <div className="flex-1 bg-[#F7F6F2]"></div>
        <div className="w-24 bg-[#F2C230] border-l-2 border-r-2 border-[#151515]"></div>
        <div className="w-12 bg-[#1746A2]"></div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`flex h-2.5 w-full border-b border-[#151515] overflow-hidden ${className}`} aria-hidden="true">
        <div className="w-8 bg-[#D92727] border-r border-[#151515]"></div>
        <div className="flex-1 bg-[#F7F6F2]"></div>
        <div className="w-12 bg-[#F2C230] border-l border-r border-[#151515]"></div>
        <div className="w-6 bg-[#1746A2]"></div>
      </div>
    );
  }

  // Default compact badge/motif
  return (
    <div className={`inline-flex items-center gap-1.5 p-1 border border-[#151515] bg-[#F7F6F2] ${className}`} aria-hidden="true">
      <span className="w-3 h-3 bg-[#D92727] border border-[#151515]"></span>
      <span className="w-3 h-3 bg-[#1746A2] border border-[#151515]"></span>
      <span className="w-3 h-3 bg-[#F2C230] border border-[#151515]"></span>
    </div>
  );
};
