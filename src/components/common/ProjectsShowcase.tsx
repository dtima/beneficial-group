"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from 'next/image';
import { IconComponents } from './IconSystem';

const ProjectsShowcase = () => {
  const t = useTranslations("ProjectsShowcase");
  const locale = useLocale();

  const projects = [
    {
      key: "bamboo-cultivation",
      title: t("bamboo-cultivation.title"),
      category: t("bamboo-cultivation.category"),
      image: "/projects/bamboo.png",
      color: "from-red-500 to-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      stats: {
        jobs: "385",
        location: t("bamboo-cultivation.location"),
        investment: t("bamboo-cultivation.investment"),
      },
    },
    {
      key: "toothpick-production",
      title: t("toothpick-production.title"),
      category: t("toothpick-production.category"),
      image: "/projects/Toothpick.jpeg",
      color: "from-red-500 to-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      stats: {
        scope: t("toothpick-production.scope"),
        automation: "100%",
        export: "International",
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Link
              key={project.key}
              href={`/${locale}/projects/${project.key}`}
              className="group block"
            >
              <div className={`${project.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                {/* Image */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={project.image}
                    alt={t(`${project.key}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index === 0} // Priority loading for first project
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center`}>
                      <IconComponents.Folder size="sm" className="mr-2" />
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-sm text-red-200 font-medium capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`${project.key}.description`)}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="inline-flex items-center text-sm font-semibold text-red-700 group-hover:text-red-800 transition-colors">
                      {t("learnMore")}
                      <IconComponents.ArrowRight size="sm" className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      <IconComponents.ExternalLink size="xs" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center bg-red-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="fas fa-folder-open mr-2" aria-hidden="true"></i>
            {t("viewAllProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase; 