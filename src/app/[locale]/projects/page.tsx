"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { IconComponents } from '@/components/common/IconSystem';

const ProjectsPage = () => {
  const t = useTranslations("Projects");
  const locale = useLocale();

  const projects = [
    {
      key: "bamboo-cultivation",
      image: "/projects/bamboo.png",
    },
    {
      key: "toothpick-production",
      image: "/projects/Toothpick.jpeg",
      reverse: true,
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl mt-2 max-w-3xl mx-auto text-gray-300">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {projects.map((project) => (
            <div
              key={project.key}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                project.reverse ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`rounded-lg overflow-hidden shadow-2xl ${
                  project.reverse ? "md:col-start-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={t(`${project.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`${project.reverse ? "md:col-start-1" : ""}`}
              >
                <h3 className="text-3xl font-bold font-display mb-4">
                  {t(`${project.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">{t('details.location')}:</span> {t(`${project.key}.location`)}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">{t('details.scope')}:</span> {t(`${project.key}.scope`)}
                </p>
                <p className="text-gray-600 mb-6">
                  {t(`${project.key}.description`)}
                </p>
                <Link
                  href={`/${locale}/projects/${project.key}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
                >
                  {t("learnMore")} <IconComponents.ArrowRight size="sm" className="text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 