import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Truck, TreePine, Wheat } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  imagePath 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  imagePath: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <img 
      src={imagePath} 
      alt={title} 
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
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
      description: "Specialized in artisanal mining operations with a focus on sustainable practices and environmental responsibility in Cameroon.",
      imagePath: "/lovable-uploads/41da5394-6c34-477b-b186-84cc8a5e200a.png"
    },
    {
      icon: Truck,
      title: t("services.transport"),
      description: "Professional transportation solutions specializing in oil and gas logistics for local project supply chains across Cameroon.",
      imagePath: "/lovable-uploads/6cf4d678-27a8-42e7-8bff-5619ebe7608f.png"
    },
    {
      icon: TreePine,
      title: t("services.forestry"),
      description: "Sustainable bamboo plantation management and transformation into eco-conscious products including toothpicks, furniture, and home apparel.",
      imagePath: "/lovable-uploads/5da88ad1-c554-4fd5-8e04-fde1f0000327.png"
    },
    {
      icon: Wheat,
      title: t("services.agriculture"),
      description: "Specialized in cassava cultivation and processing, providing innovative agricultural solutions for modern farming practices.",
      imagePath: "/lovable-uploads/67684acb-965f-4548-8f62-5c24c2600e09.png"
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