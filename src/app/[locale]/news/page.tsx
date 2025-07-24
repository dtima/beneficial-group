"use client";

import { useTranslations } from "next-intl";
import Image from 'next/image';
import { IconComponents } from '@/components/common/IconSystem';

// Externalized data
const newsArticlesData = [
  {
    key: "kette-council",
    image: "/news/Kette Council Website Launch.png",
    altText: "Kette Council website launch event",
    category: "Government Partnership"
  },
  {
    key: "best-diplomat",
    image: "/news/Best Diplomat Event Representation.png",
    altText: "Best Diplomat event representation in Turkey",
    category: "International Representation"
  },
  {
    key: "cameroon-showcase",
    image: "/news/Project Presentation.png",
    altText: "Cameroon showcase at Best Diplomat Event",
    category: "Global Showcase"
  },
  {
    key: "domax-machinery-meeting",
    image: "/news/Machinery-Suppliers.jpeg",
    altText: "Meeting with Chinese partners from DOMAX Machinery",
    category: "International Partnership"
  }
];

const NewsPage = () => {
  const t = useTranslations("News");

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
              <IconComponents.News size="sm" className="mr-2" />
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

      {/* News Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticlesData.map((article, index) => (
              <article
                key={article.key}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.altText}
                    width={600}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                      <IconComponents.Tag size="xs" className="mr-1" />
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Date Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                      <div className="text-xs text-gray-500 font-medium">Date</div>
                      <div className="text-sm font-bold text-gray-900">
                        {t(`articles.${article.key}.date`)}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {t(`articles.${article.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`articles.${article.key}.description`)}
                  </p>
                  
                  {/* Read More Link */}
                  <a
                    href={`/news/${article.key}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
                  >
                    {t("readMore")}
                    <IconComponents.ArrowRight size="sm" className="ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-6">
                <IconComponents.Contact size="sm" className="mr-2" />
                {t("newsletterStayUpdated")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-gray-900">
                {t("newsletterNeverMissUpdates")}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {t("newsletterSubscribeDescription")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("newsletterEmailPlaceholder")}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                />
                <button className="inline-flex items-center bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <IconComponents.PaperPlane size="sm" className="mr-2" />
                  {t("newsletterSubscribeButton")}
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                {t("newsletterPrivacyDisclaimer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            {t("callToActionWantToStayConnected")}
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            {t("callToActionFollowUsDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <IconComponents.Phone size="sm" className="mr-2" />
              {t("callToActionGetInTouch")}
            </a>
            <a href="#projects" className="inline-flex items-center border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              <IconComponents.Projects size="sm" className="mr-2" />
              {t("callToActionViewOurProjects")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage; 