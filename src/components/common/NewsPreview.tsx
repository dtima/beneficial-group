"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
import { IconComponents } from './IconSystem';

const NewsPreview = () => {
  const t = useTranslations("NewsPreview");
  const locale = useLocale();

  const newsArticles = [
    {
      id: "kette-council",
      title: t("articles.kette-council.title"),
      excerpt: t("articles.kette-council.description"),
      date: t("articles.kette-council.date"),
      image: "/news/Kette Council Website Launch.png",
      category: "Government Partnership",
    },
    {
      id: "best-diplomat",
      title: t("articles.best-diplomat.title"),
      excerpt: t("articles.best-diplomat.description"),
      date: t("articles.best-diplomat.date"),
      image: "/news/Best Diplomat Event Representation.png",
      category: "International Representation",
    },
    {
      id: "domax-machinery-meeting",
      title: t("articles.domax-machinery-meeting.title"),
      excerpt: t("articles.domax-machinery-meeting.description"),
      date: t("articles.domax-machinery-meeting.date"),
      image: "/news/Machinery-Suppliers.jpeg",
      category: "International Partnership",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
            <IconComponents.News size="sm" className="mr-2" />
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                      <IconComponents.Calendar size="xs" className="mr-2" />
                      {article.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                {/* Category */}
                <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                  {article.category}
                </div>

                {/* Read More Link */}
                <Link
                  href={`/${locale}/news`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
                >
                  {t("readMore")}
                  <IconComponents.ArrowRight size="sm" className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <IconComponents.News size="sm" className="mr-2" />
            {t("viewAllNews")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview; 