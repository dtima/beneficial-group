import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TreePine, Leaf, Sprout, Recycle } from "lucide-react";

const Forestry = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <TreePine className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Forestry Services
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Sustainable forestry management and eco-conscious solutions for a greener future.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Forestry Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TreePine className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Forest Management</h3>
                    <p className="text-gray-600">Sustainable forest management and conservation practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Biodiversity Conservation</h3>
                    <p className="text-gray-600">Protection and preservation of forest ecosystems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sprout className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Reforestation</h3>
                    <p className="text-gray-600">Tree planting and forest restoration programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sustainable Harvesting</h3>
                    <p className="text-gray-600">Responsible timber harvesting and processing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/forestry-operations.jpg" 
                alt="Forestry Operations"
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

export default Forestry;