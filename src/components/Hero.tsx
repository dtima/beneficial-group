import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {t("hero.subtitle")}
        </p>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <img
          src="/lovable-uploads/1e8ca0f9-8fa9-420a-9a2f-565bb69010aa.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};