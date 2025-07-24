"use client";

import { useTranslations } from "next-intl";
import Image from 'next/image';
import { IconComponents } from '@/components/common/IconSystem';

// Externalized data
const teamMembersData = [
  {
    name: "Eben Ebot Flavius",
    role: "Founder & CEO",
    photo: "/team/eben-ebot-flavius.jpg",
    bio: "Visionary leader with 15+ years of experience in sales, management, and international business. Fluent in English, French, and Chinese, with expertise spanning agriculture, manufacturing, transport, and mining sectors."
  },
  {
    name: "Elad Patricia Efundu",
    role: "Operations Manager",
    photo: "/team/elad-patricia-efundu.jpg",
    bio: "Seasoned professional with 8+ years in teaching, management, and administration. Specializes in lesson planning, budget management, conflict resolution, and public speaking. Passionate about sustainable development and social responsibility."
  },
  {
    name: "Enombe Louis Sandah",
    role: "Business & Legal",
    photo: "/team/enombe-louis-sandah.jpg",
    bio: "Legal practitioner and researcher with extensive experience in criminal and civil actions, labor litigation, and corporate law. Member of the Cameroon Bar Association with expertise in microfinance institutions and administrative acts."
  },
  {
    name: "Eyong Ayuk Andreas",
    role: "Legal Advisor",
    photo: "/team/eyong-ayuk-andreas.jpg",
    bio: "Legal expert with master's degrees in International Trade and Investment Law in Africa, and Human Rights. Currently pursuing a Ph.D., specializing in navigating complex legal frameworks across multiple jurisdictions."
  },
  {
    name: "Albert E. Makia",
    role: "Board Member",
    photo: "/team/albert-e-makia.jpg",
    bio: "Experienced board member providing strategic guidance and oversight for business objectives and growth strategies."
  },
  {
    name: "Maureen M. Yankee",
    role: "HR Manager",
    photo: "/team/maureen-m-yankee.jpg",
    bio: "Human resources professional dedicated to building inclusive workplaces and developing talent across all organizational levels."
  }
];

const companyValuesData = [
  {
    key: "excellence",
    icon: "Building",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100",
    accentColor: "text-yellow-600"
  },
  {
    key: "diversity",
    icon: "Users",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    accentColor: "text-purple-600"
  },
  {
    key: "sustainability",
    icon: "Leaf",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    accentColor: "text-green-600"
  },
  {
    key: "responsibility",
    icon: "Shield",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    accentColor: "text-blue-600"
  }
];

const companyStatsData = [
  {
    icon: "Calendar",
    value: "2019",
    label: "Founded"
  },
  {
    icon: "Users",
    value: "20+",
    label: "Team Members"
  },
  {
    icon: "MapMarker",
    value: "4",
    label: "Business Sectors"
  },
  {
    icon: "Globe",
    value: "Multiple",
    label: "Regions"
  }
];

const AboutPage = () => {
  const t = useTranslations("About");

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
              <IconComponents.Building size="sm" className="mr-2" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight text-white">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              {t("subtitle")}
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {companyStatsData.map((stat, index) => {
                const IconComponent = IconComponents[stat.icon as keyof typeof IconComponents];
                return (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-red-300 mb-2" aria-label={`${stat.value} ${stat.label}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-red-200 flex items-center justify-center">
                      <IconComponent size="sm" className="mr-1" />
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
              {t("values.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("values.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValuesData.map((value, index) => {
              const IconComponent = IconComponents[value.icon as keyof typeof IconComponents];
              return (
                <div
                  key={value.key}
                  className={`bg-gradient-to-br ${value.bgColor} rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size="lg" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {t(`values.${value.key}.title`)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
              {t("team.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("team.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembersData.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                {/* Photo */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                
                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 