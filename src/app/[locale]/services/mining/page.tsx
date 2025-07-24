"use client";

import { useTranslations } from "next-intl";
import { IconComponents } from '@/components/common/IconSystem';

// Externalized data
const offeringsData = [
  {
    key: "artisanal-mining",
    icon: "Users",
  },
  {
    key: "safety-standards",
    icon: "Shield",
  },
  {
    key: "resource-management",
    icon: "Network",
  },
];

const MiningServicePage = () => {
  const t = useTranslations("Services.mining");

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <IconComponents.Gem size="xl" className="text-red-400 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl mt-2 max-w-3xl mx-auto text-gray-300">
            {t("serviceOverview")}
          </p>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-gray-900">
              {t("offerings.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("offerings.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offeringsData.map((offering, index) => {
              const IconComponent = IconComponents[offering.icon as keyof typeof IconComponents];
              return (
                <div
                  key={offering.key}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <IconComponent size="lg" className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {t(`offerings.${offering.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`offerings.${offering.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <IconComponents.Phone size="sm" className="mr-2" />
            {t("cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default MiningServicePage; 