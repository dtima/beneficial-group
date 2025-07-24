"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from 'next/image';
import { IconComponents } from '@/components/common/IconSystem';

// Externalized services data
const servicesData = [
  {
    key: "mining",
    icon: "Gem",
    image: "/projects/Mining.png",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    accentColor: "text-blue-600",
    bgAccentColor: "bg-blue-100",
    borderColor: "border-blue-200"
  },
  {
    key: "transport",
    icon: "Truck",
    image: "/projects/Transport.png",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    accentColor: "text-orange-600",
    bgAccentColor: "bg-orange-100",
    borderColor: "border-orange-200"
  },
  {
    key: "forestry",
    icon: "Tree",
    image: "/projects/bamboo.png",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    accentColor: "text-green-600",
    bgAccentColor: "bg-green-100",
    borderColor: "border-green-200"
  },
  {
    key: "agriculture",
    icon: "Leaf",
    image: "/projects/Agriculture.png",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100",
    accentColor: "text-yellow-600",
    bgAccentColor: "bg-yellow-100",
    borderColor: "border-yellow-200"
  },
];

const ServicesPage = () => {
  const t = useTranslations("Services");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
              <IconComponents.Services size="sm" className="mr-2" />
              {t("badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight text-white">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = IconComponents[service.icon as keyof typeof IconComponents];
              return (
                <Link
                  key={service.key}
                  href={`/${locale}/services/${service.key}`}
                  className="group block"
                >
                  <div className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${service.borderColor} h-full`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.bgAccentColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size="lg" className={service.accentColor} />
                    </div>
                    
                    {/* Image */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={service.image}
                        alt={t(`${service.key}.title`)}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        priority={index < 2}
                        sizes="80px"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {t(`${service.key}.title`)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {t(`${service.key}.description`)}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <span className="inline-flex items-center text-sm font-semibold text-red-700 group-hover:text-red-800 transition-colors">
                        {t("learnMore")}
                        <IconComponents.ArrowRight size="sm" className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 