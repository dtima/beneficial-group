import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Beneficial Solutions - Innovating for a Better World</title>
        <meta name="description" content="Discover innovative solutions in agriculture, mining, forestry, and transport. Building a sustainable future in Cameroon and beyond." />
        <meta name="keywords" content="Beneficial Solutions, sustainable development, Cameroon, innovation" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <FlashNews />
        <Partners />
        <Footer />
      </div>
    </>
  );
};

export default Index;