import { useLanguage } from "@/contexts/LanguageContext";
import { AlertCircle } from "lucide-react";

export const FlashNews = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      title: "Kette Council Website Launch",
      date: "2024-02-20",
      description: "Beneficial Solutions LLC participating in the Kette Council official website launch, providing technical support and expertise.",
      image: "/lovable-uploads/f09b28bf-bbef-46e5-a665-503f74fff3e7.png"
    },
    {
      id: 2,
      title: "Best Diplomat Event Representation",
      date: "2024-02-15",
      description: "Beneficial Solutions LLC proudly representing Cameroon at the prestigious Best Diplomat event in Turkey.",
      image: "/lovable-uploads/d88778e8-224a-445d-9046-022923d676a9.png"
    },
    {
      id: 3,
      title: "Cameroon Showcase in Turkey",
      date: "2024-02-10",
      description: "Beneficial Solutions LLC showcasing Cameroon's potential and opportunities to participants at the Best Diplomat Event in Turkey.",
      image: "/lovable-uploads/d60c33fc-7873-4076-941f-38781d2b5564.png"
    },
    {
      id: 4,
      title: "APME Investment Presentation",
      date: "2024-02-05",
      description: "Beneficial Solutions LLC presenting toothpicks production project and investment opportunities at APME Yaounde, Cameroon.",
      image: "/lovable-uploads/f447b304-2360-435c-a533-d5e368089f7a.png"
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <AlertCircle className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Flash Info</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};