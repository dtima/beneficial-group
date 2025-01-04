import React, { createContext, useContext, useState } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "Groupe Beneficial",
    "hero.subtitle": "Solutions innovantes pour un avenir durable",
    "services.title": "Nos Services",
    "services.mining": "Exploitation minière",
    "services.transport": "Transport",
    "services.forestry": "Foresterie",
    "services.agriculture": "Agriculture",
    "about.title": "À propos de nous",
    "about.description": "Le Groupe Beneficial est un conglomérat diversifié offrant des solutions innovantes dans les secteurs miniers, du transport, de la foresterie et de l'agriculture.",
    "contact.title": "Contactez-nous",
    "contact.button": "Envoyer un message",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "Beneficial Group",
    "hero.subtitle": "Innovative Solutions for a Sustainable Future",
    "services.title": "Our Services",
    "services.mining": "Mining",
    "services.transport": "Transport",
    "services.forestry": "Forestry",
    "services.agriculture": "Agriculture",
    "about.title": "About Us",
    "about.description": "Beneficial Group is a diversified conglomerate providing innovative solutions in mining, transport, forestry, and agriculture sectors.",
    "contact.title": "Contact Us",
    "contact.button": "Send Message",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};