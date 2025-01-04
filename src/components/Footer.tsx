import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Share2, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();
  
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out Beneficial Group!";
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beneficial Group</h3>
            <p className="text-gray-300">
              {t("about.description")}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("services.title")}</h3>
            <ul className="space-y-2">
              <li><a href="/services/mining" className="hover:text-primary transition-colors">{t("services.mining")}</a></li>
              <li><a href="/services/transport" className="hover:text-primary transition-colors">{t("services.transport")}</a></li>
              <li><a href="/services/forestry" className="hover:text-primary transition-colors">{t("services.forestry")}</a></li>
              <li><a href="/services/agriculture" className="hover:text-primary transition-colors">{t("services.agriculture")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("nav.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+237 695 184 738</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ebenebot1978@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kumba 1, MEME Division<br />South West Region</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.follow")}</h3>
            <div className="flex space-x-4">
              <button onClick={() => handleShare('facebook')} className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </button>
              <button onClick={() => handleShare('twitter')} className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </button>
              <button onClick={() => handleShare('linkedin')} className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </button>
              <button onClick={() => handleShare('whatsapp')} className="hover:text-primary transition-colors">
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Beneficial Group. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};