'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { IconComponents } from './IconSystem';

const ProjectsShowcase = () => {
  const t = useTranslations('ProjectsShowcase');
  const locale = useLocale();

  const projects = [
    {
      key: 'bamboo-cultivation',
      title: t('bamboo-cultivation.title'),
      category: t('bamboo-cultivation.category'),
      image: '/projects/bamboo.png',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      stats: {
        jobs: '385',
        location: t('bamboo-cultivation.location'),
        investment: t('bamboo-cultivation.investment'),
      },
    },
    {
      key: 'toothpick-production',
      title: t('toothpick-production.title'),
      category: t('toothpick-production.category'),
      image: '/projects/Toothpick.jpeg',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      stats: {
        scope: t('toothpick-production.scope'),
        automation: '100%',
        export: 'International',
      },
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 font-display text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.key}
              href={`/${locale}/projects/${project.key}`}
              className="group block"
            >
              <div
                className={`${project.bgColor} overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Image */}
                <div className="relative h-48 md:h-64 lg:h-80">
                  <Image
                    src={project.image}
                    alt={t(`${project.key}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0} // Priority loading for first project
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4 md:left-6 md:top-6">
                    <span
                      className={`bg-gradient-to-r ${project.color} flex items-center rounded-full px-3 py-1 text-xs font-medium text-white shadow-lg md:px-4 md:py-2 md:text-sm`}
                    >
                      <IconComponents.Folder size="sm" className="mr-2" />
                      {project.category}
                    </span>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="rounded-lg border border-white/20 bg-black/60 p-2 text-center backdrop-blur-sm md:p-3"
                        >
                          <div className="text-lg font-bold text-white md:text-2xl">
                            {value}
                          </div>
                          <div className="text-xs font-medium capitalize text-red-200 md:text-sm">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-gray-700 md:mb-4 md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-gray-600 md:mb-6 md:text-base">
                    {t(`${project.key}.description`)}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4 md:pt-6">
                    <span className="inline-flex items-center text-xs font-semibold text-red-700 transition-colors group-hover:text-red-800 md:text-sm">
                      {t('learnMore')}
                      <IconComponents.ArrowRight
                        size="sm"
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white md:h-8 md:w-8">
                      <IconComponents.ExternalLink size="xs" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center md:mt-16">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex transform items-center rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl md:px-8 md:py-4 md:text-lg"
          >
            <i className="fas fa-folder-open mr-2" aria-hidden="true"></i>
            {t('viewAllProjects')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
