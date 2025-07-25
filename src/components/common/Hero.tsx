'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { ButtonComponents } from './Button';

export default function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      ></div>

      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
            role="status"
            aria-live="polite"
          >
            <span
              className="mr-2 h-2 w-2 animate-pulse rounded-full bg-red-400"
              aria-hidden="true"
            ></span>
            {t('badge')}
          </div>

          {/* Main Heading */}
          <h1
            id="hero-title"
            className="mb-6 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl lg:text-7xl"
          >
            <span className="block text-white">{t('titleLine1')}</span>
            <span className="block text-red-300">{t('titleLine2')}</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-red-100 sm:text-lg md:text-xl lg:text-2xl">
            {t('subtitle')}
          </p>

          {/* Stats */}
          <div
            className="mx-auto mb-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4"
            role="region"
            aria-label="Company Statistics"
          >
            <div className="text-center">
              <div
                className="text-2xl font-bold text-red-300 md:text-3xl"
                aria-label="385 plus jobs created"
              >
                385+
              </div>
              <div className="text-xs text-red-200 md:text-sm">
                {t('stats.jobs')}
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl font-bold text-red-300 md:text-3xl"
                aria-label="4 sectors"
              >
                4
              </div>
              <div className="text-xs text-red-200 md:text-sm">
                {t('stats.sectors')}
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl font-bold text-red-300 md:text-3xl"
                aria-label="6 plus partners"
              >
                6+
              </div>
              <div className="text-xs text-red-200 md:text-sm">
                {t('stats.partners')}
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl font-bold text-red-300 md:text-3xl"
                aria-label="Founded in 2019"
              >
                2019
              </div>
              <div className="text-xs text-red-200 md:text-sm">
                {t('stats.founded')}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
            role="group"
            aria-label="Call to action buttons"
          >
            <ButtonComponents.CTA
              href={`/${locale}/services`}
              ariaLabel="Explore our sustainable services in mining, transport, forestry, and agriculture"
            >
              {t('cta.primary')}
            </ButtonComponents.CTA>

            <ButtonComponents.Outline
              href={`/${locale}/projects`}
              size="xl"
              icon="Eye"
              ariaLabel="View our ongoing projects and their impact on local communities"
              className="border-white text-white hover:bg-white hover:text-red-800"
            >
              {t('cta.secondary')}
            </ButtonComponents.Outline>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce"
        role="presentation"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
}
