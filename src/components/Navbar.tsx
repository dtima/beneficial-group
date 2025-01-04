import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              Beneficial
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              {t("nav.home")}
            </a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">
              {t("nav.about")}
            </a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">
              {t("nav.services")}
            </a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
            
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};