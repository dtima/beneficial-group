import { useLanguage } from "@/contexts/LanguageContext";

export const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    {
      id: 1,
      name: "AcDiToPush",
      logo: "/lovable-uploads/6a605125-acf9-4244-a4bb-faeffc5fc018.png",
      description: "Empowering Africa's Growth Through Business and Technology",
    },
    {
      id: 2,
      name: "MINPMEESA",
      logo: "/lovable-uploads/b9100e32-0948-449e-8f67-70cd3b837012.png",
      description: "Ministry of Small and Medium-Sized Enterprises, Social Economy and Handicrafts",
    },
    {
      id: 3,
      name: "APME",
      logo: "/lovable-uploads/b4f4aa58-16d5-471d-8d9e-a5d6d706aba4.png",
      description: "Small and Medium-Sized Business Promotion Agency",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Our Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center mb-4 p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm max-w-md">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};