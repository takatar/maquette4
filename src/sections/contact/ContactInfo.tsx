import React from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../../config/hotel';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border-2 border-[#151515] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#151515] space-y-6">
        <div className="border-b-2 border-[#151515] pb-3">
          <h2 className="font-serif-title text-2xl font-bold text-[#151515]">
            Coordonnées de l'établissement
          </h2>
          <p className="text-xs text-[#151515]/60 mt-1">
            Coordonnées de démonstration pour la maquette du site
          </p>
        </div>

        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-[#D92727]/10 border border-[#D92727] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#D92727]" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-[#151515]/60">Adresse</div>
              <div className="font-semibold text-[#151515]">{HOTEL_INFO.fullAddress}</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-[#F2C230]/20 border border-[#F2C230] flex items-center justify-center shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-[#151515]" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-[#151515]/60">Téléphone de contact</div>
              <div className="font-semibold text-[#151515]">{HOTEL_INFO.phoneFormatted}</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-[#1746A2]/10 border border-[#1746A2] flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-[#1746A2]" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-[#151515]/60">Courrier électronique</div>
              <div className="font-semibold text-[#151515] text-xs sm:text-sm">{HOTEL_INFO.emailDemo}</div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-[#151515]/10 border border-[#151515] flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-[#151515]" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-[#151515]/60">Disponibilité de l'équipe</div>
              <div className="text-xs text-[#151515]/80">Échanges et réponses rapides toute la semaine sur WhatsApp.</div>
            </div>
          </li>
        </ul>

        <div className="p-3 bg-[#F7F6F2] border border-[#151515] text-[11px] text-[#151515]/65 leading-relaxed">
          <strong>Note de configuration :</strong> Les coordonnées indiquées correspondent à la version de démonstration et sont centralisées pour être remplacées aisément avant le déploiement public.
        </div>
      </div>

      {/* Photo de localisation sur rue */}
      <div className="border-2 border-[#151515] bg-white p-2 shadow-[4px_4px_0px_0px_#151515]">
        <div className="aspect-4/3 overflow-hidden bg-[#E7E5DF]">
          <img
            src={HOTEL_IMAGES.streetEntrance1}
            alt="Entrée de la résidence Le Mondrian sur la rue à Saly Portudal"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 text-center text-xs text-[#151515]/70 font-medium">
          Accès sur rue de la résidence à Saly Portudal
        </div>
      </div>
    </div>
  );
};
