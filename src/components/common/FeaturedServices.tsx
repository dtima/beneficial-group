"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from 'next/image';
import { IconComponents } from './IconSystem';

const FeaturedServices = () => {
  const t = useTranslations("FeaturedServices");
  const locale = useLocale();

  const services = [
    {
      key: "mining",
      image: "/projects/Mining.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      key: "transport",
      image: "/projects/Transport.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      key: "forestry",
      image: "/projects/bamboo.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
    {
      key: "agriculture",
      image: "/projects/Agriculture.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-red-200",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.key}
              href={`/${locale}/services/${service.key}`}
              className="group block"
            >
              <div className={`${service.bgColor} ${service.borderColor} border-2 p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group-hover:border-opacity-100`}>
                {/* Image */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.image}
                    alt={t(`${service.key}.title`)}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority={index < 2} // Priority loading for first 2 services
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center bg-red-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
            {t("viewAllServices")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices; 