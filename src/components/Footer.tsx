import React from 'react';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';
import { MondrianPattern } from './MondrianPattern';
import { HOTEL_INFO } from '../config/hotel';
import { PageId } from './Header';
import { MapPin, Phone, Mail } from 'lucide-react';


interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (id: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-[#F7F6F2] border-t-4 border-[#151515] relative overflow-hidden">
      {/* Ruban graphique Mondrian au sommet */}
      <div className="h-2 w-full flex">
        <div className="w-1/3 bg-[#D92727]"></div>
        <div className="w-1/6 bg-[#F2C230]"></div>
        <div className="w-1/6 bg-[#F7F6F2]"></div>
        <div className="w-1/3 bg-[#1746A2]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1 : Identité */}
          <div className="space-y-4">
            <div className="bg-[#F7F6F2] p-3 inline-block border-2 border-[#151515]">
              <Logo size="md" />
            </div>
            <p className="text-sm text-[#F7F6F2]/75 leading-relaxed">
              Résidence hôtelière contemporaine de 17 chambres avec piscine au cœur de Saly Portudal, Sénégal. L'équilibre géométrique au service du confort et de l'accueil.
            </p>
            <div className="pt-1">
              <MondrianPattern variant="compact" />
            </div>
          </div>

          {/* Colonne 2 : Liens */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C230] mb-4 border-b border-[#F7F6F2]/20 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" onClick={(e) => handleNavClick('home', e)} className="hover:text-[#D92727] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/presentation" onClick={(e) => handleNavClick('presentation', e)} className="hover:text-[#F2C230] transition-colors">
                  Présentation
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleNavClick('services', e)} className="hover:text-[#1746A2] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleNavClick('contact', e)} className="hover:text-[#F7F6F2] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Coordonnées */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D92727] mb-4 border-b border-[#F7F6F2]/20 pb-2">
              Coordonnées
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F7F6F2]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D92727] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F2C230] shrink-0" />
                <span>{HOTEL_INFO.phoneFormatted}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1746A2] shrink-0" />
                <span className="text-xs">{HOTEL_INFO.emailDemo}</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Réservation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1746A2] mb-4 border-b border-[#F7F6F2]/20 pb-2">
              Réservation Directe
            </h3>
            <p className="text-xs text-[#F7F6F2]/75 mb-4 leading-relaxed">
              Pour vérifier les disponibilités de nos 17 chambres, échangez directement avec notre équipe sur WhatsApp.
            </p>
            <WhatsAppButton
              label="Réserver via WhatsApp"
              variant="secondary"
              size="sm"
              fullWidth={true}
            />
          </div>
        </div>

        {/* Ligne copyright */}
        <div className="mt-12 pt-6 border-t border-[#F7F6F2]/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#F7F6F2]/50 gap-4">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.fullName}. Tous droits réservés.</p>
          <p className="text-[11px] text-[#F7F6F2]/40">Réservations traitées exclusivement via WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
};
