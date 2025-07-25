'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { IconComponents } from '@/components/common/IconSystem';

// Externalized services data
const servicesData = [
  {
    key: 'mining',
    icon: 'Gem',
    image: '/projects/Mining.png',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    accentColor: 'text-blue-600',
    bgAccentColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
  },
  {
    key: 'transport',
    icon: 'Truck',
    image: '/projects/Transport.png',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    accentColor: 'text-orange-600',
    bgAccentColor: 'bg-orange-100',
    borderColor: 'border-orange-200',
  },
  {
    key: 'forestry',
    icon: 'Tree',
    image: '/projects/bamboo.png',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    accentColor: 'text-green-600',
    bgAccentColor: 'bg-green-100',
    borderColor: 'border-green-200',
  },
  {
    key: 'agriculture',
    icon: 'Leaf',
    image: '/projects/Agriculture.png',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'from-yellow-50 to-yellow-100',
    accentColor: 'text-yellow-600',
    bgAccentColor: 'bg-yellow-100',
    borderColor: 'border-yellow-200',
  },
];

const ServicesPage = () => {
  const t = useTranslations('Services');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 py-20 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <IconComponents.Services size="sm" className="mr-2" />
              {t('badge')}
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              {t('title')}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white md:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, index) => {
              const IconComponent =
                IconComponents[service.icon as keyof typeof IconComponents];
              return (
                <Link
                  key={service.key}
                  href={`/${locale}/services/${service.key}`}
                  className="group block"
                >
                  <div
                    className={`bg-gradient-to-br ${service.bgColor} rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.borderColor} h-full`}
                  >
                    {/* Icon */}
                    <div
                      className={`h-16 w-16 ${service.bgAccentColor} mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent
                        size="lg"
                        className={service.accentColor}
                      />
                    </div>

                    {/* Image */}
                    <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={service.image}
                        alt={t(`${service.key}.title`)}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                        priority={index === 0}
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
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
