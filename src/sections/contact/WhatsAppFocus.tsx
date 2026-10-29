import React from 'react';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { MondrianPattern } from '../../components/MondrianPattern';
import { MessageCircle, CheckCircle } from 'lucide-react';

export const WhatsAppFocus: React.FC = () => {
  return (
    <section className="border-4 border-[#151515] bg-[#151515] text-[#F7F6F2] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#D92727] relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
          <MessageCircle className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C230]">
          Canal Prioritaire
        </span>
      </div>

      <div className="space-y-4 max-w-2xl">
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
          Le plus simple ? Écrivez-nous.
        </h2>

        <p className="text-sm sm:text-base text-[#F7F6F2]/85 leading-relaxed">
          Pour obtenir des renseignements sur les chambres, les disponibilités ou les modalités de séjour, contactez directement Le Mondrian sur WhatsApp.
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-[#F7F6F2]/75 py-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Réponse directe par un membre de l'équipe</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Précision personnalisée des dates et des tarifs</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Assistance à l'organisation de votre arrivée à Saly</span>
          </li>
        </ul>

        <div className="pt-2">
          <WhatsAppButton
            label="Réservation sur WhatsApp"
            variant="secondary"
            size="lg"
          />
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
        <MondrianPattern variant="compact" />
        <span className="text-[11px] text-[#F7F6F2]/50 italic">
          Message prérempli pour faciliter votre demande
        </span>
      </div>
    </section>
  );
};
