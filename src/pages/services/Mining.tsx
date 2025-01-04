import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, Pickaxe, HardHat, Scale } from "lucide-react";

const Mining = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Building2 className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Mining Services
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Specialized in artisanal mining operations with a focus on sustainable practices and environmental responsibility in Cameroon.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Mining Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Pickaxe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Artisanal Mining</h3>
                    <p className="text-gray-600">Sustainable artisanal mining practices with environmental consideration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <HardHat className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Safety Standards</h3>
                    <p className="text-gray-600">Implementing rigorous safety protocols and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Resource Management</h3>
                    <p className="text-gray-600">Efficient resource utilization and environmental protection measures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/41da5394-6c34-477b-b186-84cc8a5e200a.png" 
                alt="Mining Operations"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mining;