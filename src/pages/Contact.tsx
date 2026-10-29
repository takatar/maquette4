import React from 'react';
import { WhatsAppFocus } from '../sections/contact/WhatsAppFocus';
import { ContactInfo } from '../sections/contact/ContactInfo';
import { ContactForm } from '../components/ContactForm';
import { MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-20 pb-16">
      {/* SECTION 1 — INTRODUCTION */}
      <section className="pt-6 sm:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 border-2 border-[#151515] bg-white px-3 py-1.5 shadow-[2px_2px_0px_0px_#151515]">
            <span className="w-2.5 h-2.5 bg-[#D92727]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#151515]">
              Contact & Réservation
            </span>
          </div>

          <h1 className="font-serif-title text-4xl sm:text-5xl font-extrabold text-[#151515] leading-tight">
            Contactez Le Mondrian.
          </h1>

          <p className="text-base sm:text-lg text-[#151515]/80 leading-relaxed">
            Une question, une demande d'information ou un projet de séjour à Saly Portudal ? Contactez notre équipe et préparez votre venue au Mondrian.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3 — CANAL WHATSAPP ET COORDONNÉES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bloc WhatsApp prioritaire */}
          <div className="lg:col-span-7">
            <WhatsAppFocus />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Coordonnées détaillées & Photo */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* SECTION 5 — LOCALISATION GÉNÉRALE SALY PORTUDAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-[#151515] bg-[#E7E5DF] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#151515]">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#D92727]" />
            <h2 className="font-serif-title text-2xl font-bold text-[#151515]">
              Localisation à Saly Portudal, Sénégal
            </h2>
          </div>
          <p className="text-sm text-[#151515]/80 leading-relaxed max-w-3xl">
            Le Mondrian bénéficie d'un emplacement privilégié au cœur de la station de Saly Portudal, sur la Petite-Côte sénégalaise, à proximité des commodités, des commerces et du bord de mer. Les indications détaillées d'accès et d'itinéraire vous seront communiquées directement lors de votre échange sur WhatsApp.
          </p>
        </div>
      </section>
    </div>
  );
};
