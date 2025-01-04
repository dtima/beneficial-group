import { useLanguage } from "@/contexts/LanguageContext";
import { AlertCircle } from "lucide-react";

export const FlashNews = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      title: "New Mining Project Launched",
      date: "2024-02-20",
      description: "Beneficial Group launches new sustainable mining initiative in the South West Region.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 2,
      title: "Transport Fleet Expansion",
      date: "2024-02-15",
      description: "Our transport division adds 10 new vehicles to better serve our clients.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 3,
      title: "Environmental Achievement",
      date: "2024-02-10",
      description: "Beneficial Group receives award for sustainable forestry practices.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
    },
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <AlertCircle className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Flash Info</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};