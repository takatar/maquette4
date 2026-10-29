import React from 'react';
import { HOTEL_IMAGES } from '../config/hotel';
import { RoomCard } from '../components/RoomCard';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PageId } from '../components/Header';

interface RoomsPreviewProps {
  onNavigate: (page: PageId) => void;
}

export const RoomsPreview: React.FC<RoomsPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b-2 border-[#151515] pb-6">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#D92727]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92727]">
              Hébergement
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515]">
            17 chambres pour vivre votre séjour à votre rythme.
          </h2>
          <p className="text-sm sm:text-base text-[#151515]/75 leading-relaxed">
            Découvrez l'univers du Mondrian et contactez-nous pour connaître les caractéristiques de nos chambres ainsi que les disponibilités correspondant à vos dates.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="px-4 py-2.5 bg-white text-[#151515] text-xs font-bold uppercase tracking-wider border-2 border-[#151515] hover:bg-[#E7E5DF] transition-colors cursor-pointer"
          >
            Découvrir les services
          </button>
          <WhatsAppButton label="Réservation" variant="primary" size="sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard
          title="Suite Contemporaine & Salon"
          subtitle="Confort & Espace"
          description="Chambre lumineuse avec grand lit, climatisation, espace détente et mobilier soigné dans les tonalités chaleureuses de la résidence."
          imageSrc={HOTEL_IMAGES.roomMasterSuite}
          imageAlt="Chambre avec grand lit terracotta, télévision et climatisation"
          badgeAccent="rouge"
        />

        <RoomCard
          title="Chambre avec Kitchenette Privative"
          subtitle="Autonomie & Séjour"
          description="Hébergement fonctionnel doté d'un coin cuisine privatif rouge Mondrian équipé (plaque, réfrigérateur, vaisselle) pour votre autonomie."
          imageSrc={HOTEL_IMAGES.roomKitchenetteWide}
          imageAlt="Chambre avec espace cuisine rouge Mondrian équipée et table à manger"
          badgeAccent="jaune"
        />

        <RoomCard
          title="Chambre Confort Lits Jumeaux"
          subtitle="Climatisation & Bureau"
          description="Chambre contemporaine avec literie adaptée, penderie, espace bureau de travail et écran TV au calme de la résidence."
          imageSrc={HOTEL_IMAGES.roomTwinBedroom}
          imageAlt="Chambre contemporaine avec lits jumeaux, armoire et écran plat"
          badgeAccent="bleu"
        />

        <RoomCard
          title="Logement avec Escalier Intérieur"
          subtitle="Volume & Confort"
          description="Chambre spacieuse avec escalier intérieur marbré, grand dressing de rangement, bureau de travail et vue sur cour."
          imageSrc={HOTEL_IMAGES.roomDuplexMezzanine}
          imageAlt="Chambre avec escalier marbré, bureau et armoire"
          badgeAccent="rouge"
        />

        <RoomCard
          title="Espace Séjour avec Baie Vitrée"
          subtitle="Lumière & Terrasse"
          description="Espace repas et séjour ouvrant largement par de grandes baies vitrées sur la cour extérieure et les touches graphiques de l'édifice."
          imageSrc={HOTEL_IMAGES.roomTerracePoolView}
          imageAlt="Coin repas baigné de lumière ouvrant sur la cour et le mur Mondrian"
          badgeAccent="jaune"
        />

        <RoomCard
          title="Salle de Bain Privative Contemporaine"
          subtitle="Douche Italienne & Lignes Pures"
          description="Salle d'eau moderne avec douche à l'italienne, vasque design contemporaine et finitions soignées pour chaque hébergement."
          imageSrc={HOTEL_IMAGES.bathroomModern}
          imageAlt="Salle de bain avec douche italienne moderne, miroir led et meuble vasque"
          badgeAccent="bleu"
        />
      </div>
    </section>
  );
};
