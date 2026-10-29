import React from 'react';
import { Calendar, AlertCircle, CreditCard, Clock, FileText, Sparkles } from 'lucide-react';

export const StayInfo: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-2 border-[#151515] bg-[#E7E5DF] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_0px_#151515]">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-[#D92727]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92727]">
              Informations pratiques
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#151515]">
            Les informations dont vous avez besoin.
          </h2>
          <p className="text-sm text-[#151515]/75 mt-1">
            Les modalités principales pour organiser votre arrivée et votre hébergement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-[#151515] p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#1746A2] font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Arrivée & Départ</span>
            </div>
            <p className="text-xs text-[#151515]/80 leading-relaxed">
              Arrivée à partir de 15h00 • Départ jusqu'à 11h00. Horaires ajustables selon vos contraintes de vol.
            </p>
          </div>

          <div className="bg-white border-2 border-[#151515] p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#D92727] font-bold text-xs uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Réservation WhatsApp</span>
            </div>
            <p className="text-xs text-[#151515]/80 leading-relaxed">
              Réservation directe et exclusive sur WhatsApp. Précisez vos dates pour une réponse personnalisée.
            </p>
          </div>

          <div className="bg-white border-2 border-[#151515] p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#151515] font-bold text-xs uppercase tracking-wider">
              <CreditCard className="w-4 h-4 text-[#151515]" />
              <span>Paiement</span>
            </div>
            <p className="text-xs text-[#151515]/80 leading-relaxed">
              Modalités de règlement convenues directement avec la réception lors de la confirmation WhatsApp.
            </p>
          </div>

          <div className="bg-white border-2 border-[#151515] p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#151515] font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-[#D92727]" />
              <span>Annulation</span>
            </div>
            <p className="text-xs text-[#151515]/80 leading-relaxed">
              Conditions souples précisées lors de votre échange WhatsApp selon la saison.
            </p>
          </div>

          <div className="bg-white border-2 border-[#151515] p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#1746A2] font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Tranquillité des lieux</span>
            </div>
            <p className="text-xs text-[#151515]/80 leading-relaxed">
              Résidence calme de 17 chambres. Respect du repos de chacun, notamment autour du bassin.
            </p>
          </div>

          <div className="bg-white border-2 border-[#151515] p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#D92727] font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Restauration extérieure</span>
            </div>
            <p className="text-xs text-[#151515]/80 leading-relaxed">
              Pas de restaurant interne. Nombreux restaurants et paillotes accessibles à pied dans Saly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
