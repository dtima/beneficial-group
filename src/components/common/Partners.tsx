'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { IconComponents } from './IconSystem';

const Partners = () => {
  const t = useTranslations('Partners');

  const partners = [
    {
      name: 'AcDiToPush',
      logo: '/partners/AcDiToPush.png', // We'll need to add this logo
      description: "Empowering Africa's Growth Through Business and Technology",
      category: 'business',
      website: '#',
    },
    {
      name: 'MINPMEESA',
      logo: '/partners/MINPMEESA.png',
      description:
        'Ministry of Small and Medium-Sized Enterprises, Social Economy and Handicrafts',
      category: 'government',
      website: '#',
    },
    {
      name: 'APME',
      logo: '/partners/APME.png',
      description: 'Small and Medium-Sized Business Promotion Agency',
      category: 'government',
      website: '#',
    },
    {
      name: 'LA REGIONALE BANK',
      logo: '/partners/laregional.jpeg',
      description:
        'Trusted banking partner providing comprehensive financial services and support for sustainable development projects',
      category: 'financial',
      website: 'https://www.laregionalebank.com/',
    },
    {
      name: 'AFRICA CORPORATION SARL',
      logo: '/partners/AFRICA CORPORATION SARL.png',
      description:
        'Spécialisé dans le transport logistique, location des engins miniers, Distribution des produits pétroliers et dérivées',
      category: 'business',
      website: '#',
    },
    {
      name: 'Tankoil',
      logo: '/partners/Tankoil.png',
      description:
        "Fournir des solutions énergétiques de qualité supérieure tout en mettant l'accent sur l'innovation, la durabilité et le service client",
      category: 'business',
      website: '#',
    },
  ];

  const categories = {
    government: t('categories.government'),
    financial: t('categories.financial'),
    business: t('categories.business'),
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
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            <IconComponents.Handshake size="sm" className="mr-2" />
            {t('badge')}
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold text-gray-900 md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Partner Logo */}
              <div className="mb-6 flex h-20 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={80}
                  className="max-h-full max-w-full object-contain grayscale filter transition-all duration-300 group-hover:grayscale-0"
                  priority={index === 0} // Only preload the first partner image
                  sizes="120px"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="hidden text-2xl font-bold text-gray-400 transition-colors group-hover:text-red-600">
                  {partner.name}
                </div>
              </div>

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-700">
                  {partner.name}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600">
                  {partner.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  {getCategoryIcon(partner.category)}
                  {categories[partner.category as keyof typeof categories]}
                </div>

                {/* Partnership Status */}
                <div className="flex items-center justify-center text-sm font-medium text-green-600">
                  <IconComponents.Check size="sm" className="mr-1" />
                  {t('partnershipStatus')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="mb-8 text-lg text-gray-600">{t('cta.text')}</p>
          <Link
            href="/contact"
            className="inline-flex transform items-center rounded-full bg-red-600 px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
          >
            {t('cta.button')}
            <IconComponents.ArrowRight size="sm" className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
