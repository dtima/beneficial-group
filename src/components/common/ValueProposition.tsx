"use client";

import { useTranslations } from "next-intl";

const ValueProposition = () => {
  const t = useTranslations("ValueProposition");

  const valuePoints = [
    {
      key: "trackRecord",
      icon: "📈",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      key: "localExpertise",
      icon: "🏠",
      color: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      key: "environmentalCommitment",
      icon: "🌱",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200"
    },
    {
      key: "communityImpact",
      icon: "🤝",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      key: "governmentPartnership",
      icon: "🏛️",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
            {t("title")}
          </h2>
        </div>

        {/* Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {valuePoints.map((point, index) => (
            <div
              key={point.key}
              className={`${point.bgColor} ${point.borderColor} border-2 p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{point.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                {t(`points.${point.key}.title`)}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t(`points.${point.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 