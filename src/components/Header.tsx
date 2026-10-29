import React, { useState } from 'react';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';
import { MondrianPattern } from './MondrianPattern';
import { Menu, X } from 'lucide-react';

export type PageId = 'home' | 'presentation' | 'services' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; path: string }[] = [
    { id: 'home', label: 'Accueil', path: '/' },
    { id: 'presentation', label: 'Présentation', path: '/presentation' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (id: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F6F2]/95 backdrop-blur-sm border-b-2 border-[#151515]">
      {/* Ruban architectural supérieur Mondrian */}
      <div className="h-1.5 w-full flex">
        <div className="w-1/4 bg-[#D92727]"></div>
        <div className="w-1/4 bg-[#151515]"></div>
        <div className="w-1/4 bg-[#F2C230]"></div>
        <div className="w-1/4 bg-[#1746A2]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick('home', e)}
            className="group flex items-center focus:outline-none focus:ring-2 focus:ring-[#151515] p-1"
            aria-label="Le Mondrian — Retour à l'accueil"
          >
            <Logo withTagline={true} size="md" />
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.id, e)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'text-[#151515] font-bold'
                      : 'text-[#151515]/75 hover:text-[#151515]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#D92727]" 
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action principale Desktop : Réservation WhatsApp */}
          <div className="hidden md:flex items-center space-x-4">
            <WhatsAppButton
              label="Réservation"
              variant="primary"
              size="sm"
            />
          </div>

          {/* Bouton Mobile Burger */}
          <div className="flex items-center md:hidden space-x-2">
            <WhatsAppButton
              label="Réserver"
              variant="primary"
              size="sm"
              className="py-1.5 px-2.5 text-[11px]"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#151515] bg-[#F7F6F2] text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#151515]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#151515] bg-[#F7F6F2] transition-all">
          <nav className="px-4 pt-3 pb-6 space-y-2" aria-label="Menu mobile">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`flex items-center justify-between px-3 py-3 border border-[#151515] text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#151515] text-[#F7F6F2]'
                      : 'bg-white text-[#151515] hover:bg-[#E7E5DF]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 bg-[#D92727]"></span>
                  ) : (
                    <span className="w-2.5 h-2.5 border border-[#151515] bg-[#F2C230]"></span>
                  )}
                </a>
              );
            })}
            <div className="pt-2">
              <WhatsAppButton
                label="Réservation sur WhatsApp"
                variant="primary"
                size="md"
                fullWidth={true}
              />
            </div>
          </nav>
          <MondrianPattern variant="banner" />
        </div>
      )}
    </header>
  );
};
