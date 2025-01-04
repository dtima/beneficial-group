import { useLanguage } from "@/contexts/LanguageContext";

export const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    {
      id: 1,
      name: "Mining Corp International",
      logo: "/partner-1.png",
      description: "Global mining solutions partner",
    },
    {
      id: 2,
      name: "EcoForest Solutions",
      logo: "/partner-2.png",
      description: "Sustainable forestry partner",
    },
    {
      id: 3,
      name: "AgriTech Innovations",
      logo: "/partner-3.png",
      description: "Agricultural technology partner",
    },
    {
      id: 4,
      name: "TransGlobal Logistics",
      logo: "/partner-4.png",
      description: "Transportation and logistics partner",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Our Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};