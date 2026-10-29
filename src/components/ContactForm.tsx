// start
import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border-2 border-[#151515] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#151515]">
      <div className="border-b-2 border-[#151515] pb-4 mb-6">
        <h3 className="font-serif-title text-2xl font-bold text-[#151515]">
          Formulaire de demande générale
        </h3>
        <p className="text-xs text-[#151515]/70 mt-1">
          Réservé aux questions générales. Pour une réservation, privilégiez WhatsApp.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-[#F7F6F2] border-2 border-[#151515] text-center space-y-4">
          <CheckCircle2 className="w-10 h-10 text-[#25D366] mx-auto" />
          <h4 className="font-serif-title text-xl font-bold text-[#151515]">
            Demande enregistrée
          </h4>
          <p className="text-sm text-[#151515]/75 max-w-md mx-auto">
            Merci pour votre message. Pour un traitement immédiat, contactez directement notre équipe via WhatsApp.
          </p>
          <div className="pt-2">
            <WhatsAppButton label="Ouvrir WhatsApp pour confirmer" variant="primary" size="sm" />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                Nom & Prénom *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border-2 border-[#151515] focus:ring-2 focus:ring-[#D92727] outline-none"
                placeholder="Ex. Jean Dupont"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                Adresse e-mail *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border-2 border-[#151515] focus:ring-2 focus:ring-[#1746A2] outline-none"
                placeholder="jean@exemple.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                Téléphone (facultatif)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border-2 border-[#151515] focus:ring-2 focus:ring-[#F2C230] outline-none"
                placeholder="+221 ..."
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                Objet de la demande *
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border-2 border-[#151515] focus:ring-2 focus:ring-[#151515] outline-none"
                placeholder="Renseignement séjour..."
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
              Votre message *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F7F6F2] border-2 border-[#151515] focus:ring-2 focus:ring-[#151515] outline-none"
              placeholder="Précisez votre demande..."
            />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 h-4 w-4 border-2 border-[#151515]"
            />
            <label htmlFor="consent" className="text-xs text-[#151515]/75">
              J'accepte que ces données soient traitées pour répondre à ma demande de contact.
            </label>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#151515] text-white text-xs font-bold uppercase tracking-wider border-2 border-[#151515] hover:bg-[#D92727] transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer mon message</span>
            </button>
            <div className="flex items-center gap-2 text-xs text-[#151515]/60">
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Plus rapide : réservation sur WhatsApp</span>
            </div>
          </div>

        </form>
      )}
    </div>
  );
};

