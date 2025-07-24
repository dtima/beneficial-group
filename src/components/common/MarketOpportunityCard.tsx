import React from 'react';
import { IconComponents, type IconName } from './IconSystem';
import { MarketOpportunityItem } from '@/lib/projects';

interface MarketOpportunityCardProps {
  item: MarketOpportunityItem;
  bgColor: string;
  iconBgColor: string;
  iconColor?: string;
}

export const MarketOpportunityCard: React.FC<MarketOpportunityCardProps> = ({ 
  item, 
  bgColor, 
  iconBgColor, 
  iconColor = "text-white" 
}) => {
  // Look up the component from the IconComponents object using the icon name string
  const IconComponent = IconComponents[item.icon as IconName];

  if (!IconComponent) {
    console.warn(`Icon "${item.icon}" not found in IconComponents`);
    return null;
  }
  
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 ${iconBgColor} rounded-full flex items-center justify-center mr-3`}>
          <IconComponent size="sm" className={iconColor} />
        </div>
        <h4 className="font-semibold text-gray-900">{item.titleKey}</h4>
      </div>
      <p className="text-gray-700">{item.valueKey}</p>
    </div>
  );
}; 