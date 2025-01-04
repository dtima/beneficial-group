import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FlashNews } from "@/components/FlashNews";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FlashNews />
      <Services />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;