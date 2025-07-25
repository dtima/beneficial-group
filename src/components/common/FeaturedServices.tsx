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
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={service.key}
              href={`/${locale}/services/${service.key}`}
              className="group block"
            >
              <div
                className={`${service.bgColor} ${service.borderColor} rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group-hover:border-opacity-100 md:p-8`}
              >
                {/* Image */}
                <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={t(`${service.key}.title`)}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    priority={index === 0} // Priority loading for first service
                    sizes="80px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-700 md:text-2xl">
                  {t(`${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-gray-600">
                  {t(`${service.key}.description`)}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <span className="inline-flex items-center text-sm font-semibold text-red-700 transition-colors group-hover:text-red-800">
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
        <div className="mt-16 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex transform items-center rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
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
