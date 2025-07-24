import React from 'react';
import { IconComponents, type IconName } from './IconSystem';

interface InfoCardProps {
  icon: IconName;
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
  iconColor?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ 
  icon, 
  title, 
  description, 
  bgColor, 
  iconBgColor, 
  iconColor = "text-white" 
}) => {
  // Look up the component from the IconComponents object using the icon name string
  const IconComponent = IconComponents[icon];

  if (!IconComponent) {
    // Return null or a placeholder if the icon name is invalid
    console.warn(`Icon "${icon}" not found in IconComponents`);
    return null; 
  }

  return (
    <div className={`${bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
          {/* Render the dynamically selected icon component */}
          <IconComponent size="lg" className={iconColor} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}; 