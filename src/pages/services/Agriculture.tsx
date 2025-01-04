import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Wheat, Leaf, Sun, Droplets } from "lucide-react";

const Agriculture = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Wheat className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Agricultural Services
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Specialized in cassava cultivation and processing, providing innovative agricultural solutions for modern farming practices.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Agricultural Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wheat className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cassava Cultivation</h3>
                    <p className="text-gray-600">Modern farming techniques for optimal cassava production.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Processing Solutions</h3>
                    <p className="text-gray-600">Advanced cassava processing and value addition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sustainable Farming</h3>
                    <p className="text-gray-600">Eco-friendly farming practices and resource management.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/67684acb-965f-4548-8f62-5c24c2600e09.png" 
                alt="Agricultural Operations"
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

export default Agriculture;