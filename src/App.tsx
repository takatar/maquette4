import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Presentation } from './pages/Presentation';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  // Navigation simple par hash ou state pour fonctionnement direct en preview / statique
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'presentation' || hash === 'services' || hash === 'contact') {
      return hash as PageId;
    }
    const path = window.location.pathname;
    if (path.includes('presentation')) return 'presentation';
    if (path.includes('services')) return 'services';
    if (path.includes('contact')) return 'contact';
    return 'home';
  });

  // Mise à jour du titre et du hash de l'historique selon les spécifications SEO
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Le Mondrian | Résidence hôtelière à Saly Portudal',
      presentation: 'Notre résidence | Le Mondrian à Saly',
      services: 'Services et informations pratiques | Le Mondrian',
      contact: 'Contact et réservation WhatsApp | Le Mondrian',
    };
    document.title = titles[currentPage] || titles.home;

    // Synchronisation douce avec le hash pour permettre le bookmark / refresh
    window.location.hash = currentPage === 'home' ? '' : currentPage;
  }, [currentPage]);

  // Écoute des changements de hash (boutons précédent / suivant du navigateur)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'presentation' || hash === 'services' || hash === 'contact') {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#151515] relative font-sans">
      {/* Header fixe / sticky */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Contenu principal de la page active */}
      <main className="flex-1" id="main-content">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'presentation' && <Presentation onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Bouton WhatsApp flottant permanent en bas à droite */}
      <WhatsAppButton variant="floating" />

      {/* Pied de page */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
