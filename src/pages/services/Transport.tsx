import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Truck, Package, Clock, Shield } from "lucide-react";

const Transport = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Truck className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Transport Services
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Professional transportation solutions specializing in oil and gas logistics for local project supply chains across Cameroon.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Transport Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Oil & Gas Logistics</h3>
                    <p className="text-gray-600">Specialized transportation for oil and gas industry supply chains.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Supply</h3>
                    <p className="text-gray-600">Reliable transportation solutions for local project requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Secure Transport</h3>
                    <p className="text-gray-600">Enhanced security measures for valuable cargo.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/6cf4d678-27a8-42e7-8bff-5619ebe7608f.png" 
                alt="Transport Operations"
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

export default Transport;