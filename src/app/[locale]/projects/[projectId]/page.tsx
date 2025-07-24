import React from 'react';
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from 'next/image';
import { IconComponents } from "@/components/common/IconSystem";
import { ButtonComponents } from "@/components/common/Button";
import { getProjectById } from '@/lib/projects';
import { StatCard } from '@/components/common/StatCard';
import { InfoCard } from '@/components/common/InfoCard';
import { MarketOpportunityCard } from '@/components/common/MarketOpportunityCard';
import { InvestmentDetailCard } from '@/components/common/InvestmentDetailCard';
import { ProjectGoal, JobCreationItem, SustainabilityFeature, ProjectTimelinePhase, ProjectPartner } from '@/lib/projects';

// This is a Server Component
export default async function ProjectDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
  const t = await getTranslations("Projects");
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-red-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`${project.bgColor} py-20 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium mb-6 shadow-lg">
                <IconComponents.Rocket size="sm" className="mr-2 text-red-600" />
                {project.categoryKey}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-900 leading-tight">
                {t(`${project.id}.title`)}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {t(`${project.id}.description`)}
              </p>
              
              {/* Data-Driven Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {project.stats.map((stat, index) => (
                  <StatCard 
                    key={index} 
                    value={stat.value} 
                    label={t(stat.labelKey)} 
                  />
                ))}
              </div>

              <ButtonComponents.Back
                href="/projects"
                className="bg-gray-900 text-white hover:bg-gray-800"
              >
                Back to Projects
              </ButtonComponents.Back>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={project.image}
                  alt={t(`${project.id}.title`)}
                  width={600}
                  height={500}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Location and Scope */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <InfoCard
                icon="MapMarker"
                title="Location"
                description={t(project.details.locationKey)}
                bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
                iconBgColor="bg-blue-500"
              />
              
              <InfoCard
                icon="Industry"
                title="Scope"
                description={t(project.details.scopeKey)}
                bgColor="bg-gradient-to-br from-green-50 to-green-100"
                iconBgColor="bg-green-500"
              />
            </div>

            {/* Project Specific Content */}
            {project.goals && (
              <ProjectGoals goals={project.goals} t={t} projectId={project.id} />
            )}

            {project.marketOpportunity && (
              <MarketOpportunitySection 
                marketOpportunity={project.marketOpportunity} 
                t={t} 
                projectId={project.id}
              />
            )}

            {project.investmentDetails && (
              <InvestmentDetailsSection 
                investmentDetails={project.investmentDetails} 
                t={t} 
                projectId={project.id}
              />
            )}

                        {project.projectTimeline && (
              <ProjectTimelineSection 
                projectTimeline={project.projectTimeline} 
                t={t}
              />
            )}

                        {project.jobCreation && (
              <JobCreationSection 
                jobCreation={project.jobCreation} 
                t={t}
              />
            )}

                        {project.sustainabilityFeatures && (
              <SustainabilityFeaturesSection 
                sustainabilityFeatures={project.sustainabilityFeatures} 
                t={t}
              />
            )}

                        {project.environmentalImpact && (
              <EnvironmentalImpactSection 
                environmentalImpact={project.environmentalImpact} 
                t={t}
              />
            )}

                        {project.partners && (
              <ProjectPartnersSection 
                partners={project.partners} 
                t={t}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// Composed Components
const ProjectGoals = ({ goals, t, projectId }: { 
  goals: ProjectGoal[], 
  t: (key: string) => string, 
  projectId: string 
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(`${projectId}.goals.title`)}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {goals.map((goal, index) => (
        <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <IconComponents.Check size="sm" className="text-green-600" />
          </div>
          <p className="text-gray-700 leading-relaxed">{t(goal.textKey)}</p>
        </div>
      ))}
    </div>
  </div>
);

const MarketOpportunitySection = ({ marketOpportunity, t, projectId }: { 
  marketOpportunity: {
    titleKey: string;
    items: Array<{
      icon: string;
      titleKey: string;
      valueKey: string;
    }>;
  }, 
  t: (key: string) => string, 
  projectId: string 
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(marketOpportunity.titleKey)}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {marketOpportunity.items.map((item, index) => (
        <MarketOpportunityCard
          key={index}
          item={{
            ...item,
            titleKey: item.titleKey,
            valueKey: t(item.valueKey)
          }}
          bgColor={projectId === "bamboo-cultivation" ? "bg-gradient-to-br from-green-50 to-green-100" : "bg-gradient-to-br from-red-50 to-red-100"}
          iconBgColor={projectId === "bamboo-cultivation" ? "bg-green-500" : "bg-red-500"}
        />
      ))}
    </div>
  </div>
);

const InvestmentDetailsSection = ({ investmentDetails, t, projectId }: { 
  investmentDetails: {
    titleKey: string;
    items: Array<{
      icon: string;
      titleKey: string;
      valueKey: string;
      isHighlighted?: boolean;
    }>;
  }, 
  t: (key: string) => string, 
  projectId: string 
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(investmentDetails.titleKey)}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {investmentDetails.items.map((item, index) => (
        <InvestmentDetailCard
          key={index}
          item={{
            ...item,
            titleKey: item.titleKey,
            valueKey: t(item.valueKey)
          }}
          bgColor={projectId === "bamboo-cultivation" ? "bg-gradient-to-br from-green-50 to-green-100" : "bg-gradient-to-br from-red-50 to-red-100"}
          iconBgColor={projectId === "bamboo-cultivation" ? "bg-green-500" : "bg-red-500"}
          valueColor={item.isHighlighted ? (projectId === "bamboo-cultivation" ? "text-green-600" : "text-red-600") : "text-gray-700"}
        />
      ))}
    </div>
  </div>
);

const ProjectTimelineSection = ({ projectTimeline, t }: { 
  projectTimeline: {
    titleKey: string;
    phases: ProjectTimelinePhase[];
  }, 
  t: (key: string) => string
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(projectTimeline.titleKey)}
    </h2>
    <div className="space-y-6">
      {projectTimeline.phases.map((phase, index) => (
        <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 font-semibold text-sm">{phase.number}</span>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">{t(phase.textKey)}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const JobCreationSection = ({ jobCreation, t }: { 
  jobCreation: {
    titleKey: string;
    items: JobCreationItem[];
  }, 
  t: (key: string) => string
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(jobCreation.titleKey)}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {jobCreation.items.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              {(() => {
                const IconComponent = IconComponents[item.icon as keyof typeof IconComponents];
                return <IconComponent size="lg" className="text-red-600" />;
              })()}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{t(item.titleKey)}</h3>
          </div>
          <div className="space-y-3">
            {item.items.map((subItem, subIndex) => (
              <div key={subIndex} className="flex justify-between items-center">
                <span className="text-gray-600">{t(subItem.labelKey)}</span>
                <span className="font-semibold text-gray-900">{subItem.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SustainabilityFeaturesSection = ({ sustainabilityFeatures, t }: { 
  sustainabilityFeatures: {
    titleKey: string;
    items: SustainabilityFeature[];
  }, 
  t: (key: string) => string
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(sustainabilityFeatures.titleKey)}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sustainabilityFeatures.items.map((feature, index) => (
        <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            {(() => {
              const IconComponent = IconComponents[feature.icon as keyof typeof IconComponents];
              return <IconComponent size="sm" className="text-green-600" />;
            })()}
          </div>
          <p className="text-gray-700 leading-relaxed">{t(feature.textKey)}</p>
        </div>
      ))}
    </div>
  </div>
);

const EnvironmentalImpactSection = ({ environmentalImpact, t }: { 
  environmentalImpact: {
    titleKey: string;
    items: SustainabilityFeature[];
  }, 
  t: (key: string) => string
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(environmentalImpact.titleKey)}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {environmentalImpact.items.map((item, index) => (
        <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            {(() => {
              const IconComponent = IconComponents[item.icon as keyof typeof IconComponents];
              return <IconComponent size="sm" className="text-green-600" />;
            })()}
          </div>
          <p className="text-gray-700 leading-relaxed">{t(item.textKey)}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProjectPartnersSection = ({ partners, t }: { 
  partners: {
    titleKey: string;
    items: ProjectPartner[];
  }, 
  t: (key: string) => string
}) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold font-display mb-8 text-gray-900 text-center">
      {t(partners.titleKey)}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {partners.items.map((partner, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{partner.name}</h4>
              <p className="text-sm text-red-600 font-medium">{partner.role}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
        </div>
      ))}
    </div>
  </div>
); 