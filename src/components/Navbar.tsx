import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

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

  const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </a>
  );

  const DropdownSection = ({ trigger, items }: { trigger: string; items: { href: string; label: string }[] }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-secondary hover:text-primary transition-colors">
        {trigger}
        <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item.href}>
            <a href={item.href} className="w-full">{item.label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-primary">
            Beneficial
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-secondary hover:text-primary transition-colors">
              {t("nav.home")}
            </a>
            
            <DropdownSection 
              trigger={t("nav.about")}
              items={[
                { href: "/about/ceo", label: "Meet the CEO" },
                { href: "/about/team", label: "Our Team" }
              ]}
            />
            
            <DropdownSection 
              trigger={t("nav.services")}
              items={[
                { href: "/services/mining", label: "Mining" },
                { href: "/services/transport", label: "Transport" },
                { href: "/services/forestry", label: "Forestry" },
                { href: "/services/agriculture", label: "Agriculture" }
              ]}
            />

            <a href="/projects" className="text-secondary hover:text-primary transition-colors">
              Projects
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

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-secondary hover:text-primary transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <MenuItem href="/">{t("nav.home")}</MenuItem>
                
                <div className="px-4 py-2">
                  <p className="text-sm font-medium mb-2">{t("nav.about")}</p>
                  <div className="ml-4 space-y-2">
                    <MenuItem href="/about/ceo">Meet the CEO</MenuItem>
                    <MenuItem href="/about/team">Our Team</MenuItem>
                  </div>
                </div>

                <div className="px-4 py-2">
                  <p className="text-sm font-medium mb-2">{t("nav.services")}</p>
                  <div className="ml-4 space-y-2">
                    <MenuItem href="/services/mining">Mining</MenuItem>
                    <MenuItem href="/services/transport">Transport</MenuItem>
                    <MenuItem href="/services/forestry">Forestry</MenuItem>
                    <MenuItem href="/services/agriculture">Agriculture</MenuItem>
                  </div>
                </div>

                <MenuItem href="/projects">Projects</MenuItem>
                <MenuItem href="#contact">{t("nav.contact")}</MenuItem>

                <div className="px-4 py-2">
                  <button
                    onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                    className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language.toUpperCase()}</span>
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};