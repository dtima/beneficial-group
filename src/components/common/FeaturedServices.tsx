'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { IconComponents } from './IconSystem';

const FeaturedServices = () => {
  const t = useTranslations('FeaturedServices');
  const locale = useLocale();

  const services = [
    {
      key: 'mining',
      image: '/projects/Mining.png',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      borderColor: 'border-red-200',
    },
    {
      key: 'transport',
      image: '/projects/Transport.png',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      borderColor: 'border-red-200',
    },
    {
      key: 'forestry',
      image: '/projects/bamboo.png',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      borderColor: 'border-red-200',
    },
    {
      key: 'agriculture',
      image: '/projects/Agriculture.png',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      borderColor: 'border-red-200',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 font-display text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={service.key}
              href={`/${locale}/services/${service.key}`}
              className="group block"
            >
              <div
                className={`${service.bgColor} ${service.borderColor} rounded-2xl border-2 p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group-hover:border-opacity-100 md:p-6 lg:p-8`}
              >
                {/* Image */}
                <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 md:mb-6 md:h-20 md:w-20">
                  <Image
                    src={service.image}
                    alt={t(`${service.key}.title`)}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    priority={index === 0} // Priority loading for first service
                    sizes="(max-width: 768px) 64px, 80px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-gray-700 md:mb-4 md:text-xl lg:text-2xl">
                  {t(`${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-gray-600 md:mb-6 md:text-base">
                  {t(`${service.key}.description`)}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 md:pt-6">
                  <span className="inline-flex items-center text-xs font-semibold text-red-700 transition-colors group-hover:text-red-800 md:text-sm">
                    {t('learnMore')}
                    <IconComponents.ArrowRight
                      size="sm"
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center md:mt-16">
          <Link
            href={`/${locale}/services`}
            className="inline-flex transform items-center rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl md:px-8 md:py-4 md:text-lg"
          >
            <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
            {t('viewAllServices')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
