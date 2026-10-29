import React from 'react';
import { ServiceCard } from '../../components/ServiceCard';
import { Wifi, Wind, Tv, Bath, Sparkles, BedDouble, Car, Clock, ShieldCheck } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 border-b-2 border-[#151515] pb-4">
        <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#151515]">
          Équipements et prestations des chambres
        </h2>
        <p className="text-xs sm:text-sm text-[#151515]/70 mt-1">
          Prestations vérifiées ou configurables selon le type de chambre attribué. Pour toute confirmation spécifique, demandez conseil sur WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={Wind}
          title="Climatisation individuelle"
          description="Chambres climatisées avec réglage autonome pour un confort optimal en toute saison à Saly."
          statusText="Équipement vérifié"
          accent="bleu"
        />

        <ServiceCard
          icon={Wifi}
          title="Accès Wi-Fi"
          description="Connexion Internet sans fil disponible pour vos besoins personnels ou professionnels."
          statusText="Disponible"
          accent="rouge"
        />

        <ServiceCard
          icon={Tv}
          title="Télévision écran plat"
          description="Téléviseurs muraux installés dans les chambres pour votre divertissement lors de vos temps de repos."
          statusText="Équipement vérifié"
          accent="jaune"
        />

        <ServiceCard
          icon={Bath}
          title="Salle de bain privative"
          description="Chaque hébergement comprend sa salle d'eau privative avec douche italienne, vasque et sanitaires contemporains."
          statusText="Équipement vérifié"
          accent="bleu"
        />

        <ServiceCard
          icon={BedDouble}
          title="Linge de lit et de toilette"
          description="Literie soignée, draps et serviettes fournis et préparés avant chaque arrivée."
          statusText="Prestation incluse"
          accent="rouge"
        />

        <ServiceCard
          icon={Sparkles}
          title="Entretien des chambres"
          description="Service de ménage et entretien régulier assurant la propreté irréprochable de vos espaces."
          statusText="Prestation incluse"
          accent="jaune"
        />

        <ServiceCard
          icon={Car}
          title="Stationnement & Accès"
          description="Possibilités de stationnement à proximité immédiate de la résidence dans la rue calme de Saly."
          statusText="Modalités sur demande"
          accent="bleu"
        />

        <ServiceCard
          icon={Clock}
          title="Modalités d'accueil"
          description="Accueil personnalisé et flexibilité horaire selon vos heures de vol ou de transport."
          statusText="À coordonner"
          accent="rouge"
        />

        <ServiceCard
          icon={ShieldCheck}
          title="Cadre paisible et sécurisé"
          description="Établissement intimiste de 17 chambres avec accès préservé et tranquillité garantie."
          statusText="Cadre vérifié"
          accent="jaune"
        />
      </div>
    </section>
  );
};
