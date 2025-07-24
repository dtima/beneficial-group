import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/common/Hero';
import ValueProposition from '@/components/common/ValueProposition';
import FeaturedServices from '@/components/common/FeaturedServices';

// Lazy load non-critical components
const Impact = dynamic(() => import('@/components/common/Impact'), {
  loading: () => <ImpactSkeleton />,
  ssr: true
});

const ProjectsShowcase = dynamic(() => import('@/components/common/ProjectsShowcase'), {
  loading: () => <ProjectsSkeleton />,
  ssr: true
});

const NewsPreview = dynamic(() => import('@/components/common/NewsPreview'), {
  loading: () => <NewsSkeleton />,
  ssr: true
});

const Partners = dynamic(() => import('@/components/common/Partners'), {
  loading: () => <PartnersSkeleton />,
  ssr: true
});

// Loading skeletons
const ImpactSkeleton = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-6 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
            <div className="h-16 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSkeleton = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-6 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="h-64 md:h-80 bg-gray-200 animate-pulse"></div>
            <div className="p-6 md:p-8">
              <div className="h-8 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NewsSkeleton = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-6 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PartnersSkeleton = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-6 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-6 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-lg flex items-center justify-center">
            <div className="h-16 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ValueProposition />
      <FeaturedServices />
      <Suspense fallback={<ImpactSkeleton />}>
        <Impact />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsShowcase />
      </Suspense>
      <Suspense fallback={<NewsSkeleton />}>
        <NewsPreview />
      </Suspense>
      <Suspense fallback={<PartnersSkeleton />}>
        <Partners />
      </Suspense>
    </div>
  );
};

export default HomePage;
