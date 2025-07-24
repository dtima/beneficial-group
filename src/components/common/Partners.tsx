"use client";

import React from 'react';
import { useTranslations } from "next-intl";
import { IconComponents } from './IconSystem';

const Partners = () => {
  const t = useTranslations("Partners");

  const partners = [
    {
      name: "AcDiToPush",
      logo: "/partners/AcDiToPush.png", // We'll need to add this logo
      description: "Empowering Africa's Growth Through Business and Technology",
      category: "business",
      website: "#"
    },
    {
      name: "MINPMEESA",
      logo: "/partners/MINPMEESA.png",
      description: "Ministry of Small and Medium-Sized Enterprises, Social Economy and Handicrafts",
      category: "government",
      website: "#"
    },
    {
      name: "APME",
      logo: "/partners/APME.png",
      description: "Small and Medium-Sized Business Promotion Agency",
      category: "government",
      website: "#"
    },
    {
      name: "LA REGIONALE BANK",
      logo: "/partners/laregional.jpeg",
      description: "Trusted banking partner providing comprehensive financial services and support for sustainable development projects",
      category: "financial",
      website: "https://www.laregionalebank.com/"
    },
    {
      name: "AFRICA CORPORATION SARL",
      logo: "/partners/AFRICA CORPORATION SARL.png",
      description: "Spécialisé dans le transport logistique, location des engins miniers, Distribution des produits pétroliers et dérivées",
      category: "business",
      website: "#"
    },
    {
      name: "Tankoil",
      logo: "/partners/Tankoil.png",
      description: "Fournir des solutions énergétiques de qualité supérieure tout en mettant l'accent sur l'innovation, la durabilité et le service client",
      category: "business",
      website: "#"
    }
  ];

  const categories = {
    government: t("categories.government"),
    financial: t("categories.financial"),
    business: t("categories.business")
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'government':
        return <IconComponents.Landmark size="sm" className="mr-1" />;
      case 'financial':
        return <IconComponents.University size="sm" className="mr-1" />;
      case 'business':
        return <IconComponents.Building size="sm" className="mr-1" />;
      default:
        return <IconComponents.Handshake size="sm" className="mr-1" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
            <IconComponents.Handshake size="sm" className="mr-2" />
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
            >
              {/* Partner Logo */}
              <div className="flex items-center justify-center h-20 mb-6">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="hidden text-2xl font-bold text-gray-400 group-hover:text-red-600 transition-colors">
                  {partner.name}
                </div>
              </div>

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {partner.description}
                </p>
                
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                  {getCategoryIcon(partner.category)}
                  {categories[partner.category as keyof typeof categories]}
                </div>

                {/* Partnership Status */}
                <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                  <IconComponents.Check size="sm" className="mr-1" />
                  {t("partnershipStatus")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            {t("cta.text")}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t("cta.button")}
            <IconComponents.ArrowRight size="sm" className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners; 