import React from 'react';
import { WHATSAPP_RESERVATION_URL, getCustomWhatsAppUrl } from '../config/hotel';

// Icône SVG WhatsApp officielle vectorielle
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="0" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.079-1.849-.42-1.428-.588-2.345-2.032-2.416-2.127-.071-.095-.572-.76-.572-1.449 0-.689.362-1.028.49-1.171.128-.144.281-.179.375-.179.094 0 .188.001.27.006.086.005.201-.033.314.24.116.282.4 1.002.435 1.077.036.075.059.163.009.262-.05.1-.075.163-.15.251-.075.088-.158.196-.226.263-.075.074-.153.155-.066.305.087.15.388.641.833 1.037.574.511 1.058.669 1.208.744.15.075.239.066.327-.037.089-.102.381-.444.482-.596.101-.152.202-.127.34-.076.138.051.879.414 1.03.49.151.075.252.113.289.177.037.063.037.369-.107.774zm-3.392-12.416c-5.514 0-10 4.486-10 10 0 1.764.459 3.486 1.332 5.006l-1.417 5.176 5.305-1.392c1.474.807 3.136 1.233 4.78 1.233 5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18.232c-1.521 0-3.013-.414-4.316-1.197l-.31-.186-3.208.841.856-3.131-.203-.324c-.856-1.365-1.309-2.951-1.309-4.577 0-4.542 3.696-8.238 8.24-8.238 4.543 0 8.24 3.696 8.24 8.238 0 4.543-3.697 8.238-8.24 8.238z" />
  </svg>
);

interface WhatsAppButtonProps {
  label?: string;
  context?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'floating';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = "Réservation sur WhatsApp",
  context,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
}) => {
  const url = context ? getCustomWhatsAppUrl(context) : WHATSAPP_RESERVATION_URL;

  // Floating variant
  if (variant === 'floating') {
    return (
      <aside aria-label="Réservation rapide WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter Le Mondrian pour une réservation sur WhatsApp"
          className="group flex items-center gap-3 bg-[#151515] text-[#F7F6F2] hover:bg-[#D92727] active:bg-[#151515] px-4 py-3 border-2 border-[#151515] shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#F2C230]"
        >
          <div className="relative">
            <span className="flex h-3 w-3 absolute -top-1 -right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2C230] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F2C230]"></span>
            </span>
            <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
              <WhatsAppIcon className="w-5 h-5 fill-white" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-[#F7F6F2]">Réservation</span>
            <span className="text-[10px] text-[#F7F6F2]/80">WhatsApp direct</span>
          </div>
        </a>
      </aside>
    );
  }

  // Styles de boutons
  const baseStyles = "inline-flex items-center justify-center gap-2.5 font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer border-2 border-[#151515] focus:outline-none focus:ring-4 focus:ring-[#F2C230]";
  
  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-3 text-xs md:text-sm tracking-wider",
    lg: "px-7 py-4 text-sm md:text-base tracking-widest font-semibold",
  }[size];

  const variantStyles = {
    primary: "bg-[#D92727] text-white hover:bg-[#151515] hover:text-[#F7F6F2] active:bg-[#D92727] shadow-[3px_3px_0px_0px_#151515] hover:shadow-[1px_1px_0px_0px_#151515] hover:translate-x-[2px] hover:translate-y-[2px]",
    secondary: "bg-[#F2C230] text-[#151515] hover:bg-[#151515] hover:text-[#F7F6F2] shadow-[3px_3px_0px_0px_#151515] hover:shadow-[1px_1px_0px_0px_#151515] hover:translate-x-[2px] hover:translate-y-[2px]",
    dark: "bg-[#151515] text-[#F7F6F2] hover:bg-[#1746A2] hover:text-white shadow-[3px_3px_0px_0px_#D92727] hover:shadow-[1px_1px_0px_0px_#D92727] hover:translate-x-[2px] hover:translate-y-[2px]",
    outline: "bg-transparent text-[#151515] hover:bg-[#151515] hover:text-[#F7F6F2]",
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} via WhatsApp`}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
};
