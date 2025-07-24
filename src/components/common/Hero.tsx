"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ButtonComponents } from "./Button";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-30" aria-hidden="true"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} aria-hidden="true"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20" role="status" aria-live="polite">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
            {t("badge")}
          </div>
          
          {/* Main Heading */}
          <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="block text-white">{t("titleLine1")}</span>
            <span className="block text-red-300">{t("titleLine2")}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-red-100 leading-relaxed max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto" role="region" aria-label="Company Statistics">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-300" aria-label="385 plus jobs created">385+</div>
              <div className="text-xs md:text-sm text-red-200">{t("stats.jobs")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-300" aria-label="4 sectors">4</div>
              <div className="text-xs md:text-sm text-red-200">{t("stats.sectors")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-300" aria-label="6 plus partners">6+</div>
              <div className="text-xs md:text-sm text-red-200">{t("stats.partners")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-300" aria-label="Founded in 2019">2019</div>
              <div className="text-xs md:text-sm text-red-200">{t("stats.founded")}</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" role="group" aria-label="Call to action buttons">
            <ButtonComponents.CTA
              href={`/${locale}/services`}
              ariaLabel="Explore our sustainable services in mining, transport, forestry, and agriculture"
            >
              {t("cta.primary")}
            </ButtonComponents.CTA>
            
            <ButtonComponents.Outline
              href={`/${locale}/projects`}
              size="xl"
              icon="Eye"
              ariaLabel="View our ongoing projects and their impact on local communities"
              className="border-white text-white hover:bg-white hover:text-red-800"
            >
              {t("cta.secondary")}
            </ButtonComponents.Outline>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" role="presentation" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 