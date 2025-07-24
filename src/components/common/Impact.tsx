"use client";

import { useTranslations } from "next-intl";

const Impact = () => {
  const t = useTranslations("Impact");

  const metrics = [
    {
      value: "385+",
      label: t("metrics.jobs"),
      icon: "👥",
      color: "from-green-500 to-green-600"
    },
    {
      value: "5+",
      label: t("metrics.years"),
      icon: "📅",
      color: "from-blue-500 to-blue-600"
    },
    {
      value: "4",
      label: t("metrics.sectors"),
      icon: "🏭",
      color: "from-purple-500 to-purple-600"
    },
    {
      value: "1000m²",
      label: t("metrics.facility"),
      icon: "🏢",
      color: "from-orange-500 to-orange-600"
    },
    {
      value: "1.5M",
      label: t("metrics.production"),
      icon: "⚡",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            {t("title")}
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{metric.icon}</span>
              </div>
              
              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2 group-hover:text-white transition-colors">
                {metric.value}
              </div>
              
              {/* Label */}
              <div className="text-sm md:text-base text-green-200 group-hover:text-green-100 transition-colors leading-relaxed">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact; 