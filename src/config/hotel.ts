/**
 * Configuration centralisée de la résidence hôtelière Le Mondrian
 * Conforme aux règles impératives du projet :
 * - Aucune restauration interne
 * - Toutes les réservations via WhatsApp
 * - Numéro fictif de démonstration facilement modifiable
 */

export const HOTEL_INFO = {
  name: "Le Mondrian",
  fullName: "Le Mondrian — Résidence Hôtelière",
  tagline: "L'art de séjourner à Saly.",
  roomsCount: 17,
  location: "Saly Portudal, Sénégal",
  fullAddress: "Route de Saly, quartier central, Saly Portudal, Mbour, Sénégal",
  phoneFormatted: "+221 77 123 45 67",
  emailDemo: "contact@lemondrian-saly.example",
  whatsappNumber: "221771234567",
};

/**
 * Message par défaut pour les demandes de réservation et renseignements
 */
export const RESERVATION_MESSAGE =
  "Bonjour Le Mondrian, je souhaite obtenir des informations sur les disponibilités et les modalités de réservation de votre résidence à Saly Portudal. Pourriez-vous m'aider à préparer mon séjour ?";

/**
 * URL directe WhatsApp générée et centralisée
 */
export const WHATSAPP_RESERVATION_URL = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
  RESERVATION_MESSAGE
)}`;

/**
 * Générateur de lien WhatsApp contextuel (ex: pour une chambre ou un service précis)
 */
export function getCustomWhatsAppUrl(customContext?: string): string {
  if (!customContext) return WHATSAPP_RESERVATION_URL;
  const msg = `Bonjour Le Mondrian, je vous contacte concernant ${customContext}. Pourriez-vous m'informer sur les disponibilités et modalités de réservation ?`;
  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

/**
 * Inventaire vérifié des photographies authentiques présentes dans le dossier images
 * Aucune image externe, aucune image d'IA, aucun faux chemin.
 */
export const HOTEL_IMAGES = {
  // Extérieur, architecture Mondrian et Piscine
  poolDaySun: "/images/20261028_175133.png", // Piscine vue plongeante ensoleillée
  poolFrontMondrianWall: "/images/20261028_174951.png", // Piscine et fresque Mondrian murale
  poolAndTower: "/images/20261028_175009.png", // Piscine avec bâtiment moderne et escalier
  facadeMondrianTower: "/images/20261028_175045.png", // Tour façade aux lignes et carreaux Mondrian
  facadeMainCourtyard: "/images/20261028_175016.png", // Cour intérieure et aile principale
  courtyardOverview: "/images/20261028_175156.png", // Vue d'ensemble avec escalier central
  courtyardSunny: "/images/20261028_175214.png", // Vue d'ensemble cour et piscine
  monumentalStaircase: "/images/20261028_175240.png", // Escalier avec claustra ajouré
  streetEntrance1: "/images/20261028_182516.png", // Entrée sur rue avec signature Mondrian
  streetEntrance2: "/images/20261028_182525-2.png", // Entrée façade latérale
  streetEntrance3: "/images/20261028_182525.png", // Entrée perspective

  // Chambres & Suites
  roomMasterSuite: "/images/20261028_180846.png", // Suite lumineuse lit terracotta, climatisation, salon
  roomKitchenetteWide: "/images/20261028_180937.png", // Chambre avec kitchenette rouge Mondrian
  roomTwinBedroom: "/images/20261028_180730.png", // Chambre double lits jumeaux avec TV & penderie
  roomDeskWardrobe: "/images/20261028_181001.png", // Espace bureau, TV écran plat et grand dressing
  roomDuplexMezzanine: "/images/20261028_181051.png", // Logement spacieux avec escalier intérieur
  roomTerraceView: "/images/20261028_181115.png", // Espace séjour avec baie vitrée sur extérieur
  roomTerracePoolView: "/images/20261028_181126.png", // Salle à manger face à la piscine et fresque
  kitchenetteRedClose: "/images/20261028_180613.png", // Kitchenette rouge Mondrian équipée
  bathroomModern: "/images/20261028_180644.png", // Salle de bain privative moderne douche italienne
};
