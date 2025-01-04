import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Truck, TreePine, Wheat } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t("services.mining"),
      description: "ETS Beneficial Mining specializes in artisanal mining and specialized transportation.",
    },
    {
      icon: Truck,
      title: t("services.transport"),
      description: "Professional transportation solutions for various industries.",
    },
    {
      icon: TreePine,
      title: t("services.forestry"),
      description: "Sustainable forestry management and eco-conscious solutions.",
    },
    {
      icon: Wheat,
      title: t("services.agriculture"),
      description: "Innovative agricultural solutions for modern farming.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("services.title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};