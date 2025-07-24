import React from 'react';

export interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ariaLabel?: string;
}

const iconSizeClasses = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const iconMap: Record<string, string> = {
  // Navigation
  home: 'fa-solid fa-home',
  about: 'fa-solid fa-info-circle',
  services: 'fa-solid fa-cogs',
  projects: 'fa-solid fa-project-diagram',
  news: 'fa-solid fa-newspaper',
  contact: 'fa-solid fa-envelope',
  
  // Actions
  arrowRight: 'fa-solid fa-arrow-right',
  arrowLeft: 'fa-solid fa-arrow-left',
  externalLink: 'fa-solid fa-external-link-alt',
  folder: 'fa-solid fa-folder-open',
  rocket: 'fa-solid fa-rocket',
  eye: 'fa-solid fa-eye',
  
  // Business
  handshake: 'fa-solid fa-handshake',
  building: 'fa-solid fa-building',
  university: 'fa-solid fa-university',
  landmark: 'fa-solid fa-landmark',
  check: 'fa-solid fa-check',
  
  // Services
  gem: 'fa-solid fa-gem',
  truck: 'fa-solid fa-truck-fast',
  tree: 'fa-solid fa-tree',
  leaf: 'fa-solid fa-leaf',
  gasPump: 'fa-solid fa-gas-pump',
  shield: 'fa-solid fa-shield-halved',
  box: 'fa-solid fa-box-open',
  recycle: 'fa-solid fa-recycle',
  seedling: 'fa-solid fa-seedling',
  blender: 'fa-solid fa-blender',
  tractor: 'fa-solid fa-tractor',
  
  // UI Elements
  calendar: 'fa-solid fa-calendar-alt',
  tag: 'fa-solid fa-tag',
  share: 'fa-solid fa-share-alt',
  paperPlane: 'fa-solid fa-paper-plane',
  phone: 'fa-solid fa-phone',
  mapMarker: 'fa-solid fa-map-marker-alt',
  
  // Charts & Data
  chartPie: 'fa-solid fa-chart-pie',
  trendingUp: 'fa-solid fa-trending-up',
  industry: 'fa-solid fa-industry',
  globe: 'fa-solid fa-globe',
  moneyBill: 'fa-solid fa-money-bill-wave',
  
  // Users & Network
  users: 'fa-solid fa-users',
  network: 'fa-solid fa-network-wired',
  
  // Sustainability
  cloud: 'fa-solid fa-cloud',
  solarPanel: 'fa-solid fa-solar-panel',
  ban: 'fa-solid fa-ban',
  
  // Social
  whatsapp: 'fab fa-whatsapp',
  facebook: 'fab fa-facebook',
  twitter: 'fab fa-twitter',
  linkedin: 'fab fa-linkedin',
  instagram: 'fab fa-instagram',
};

export default function Icon({ 
  name, 
  size = 'md', 
  className = '', 
  ariaLabel 
}: IconProps) {
  const iconClass = iconMap[name];
  
  if (!iconClass) {
    console.warn(`Icon "${name}" not found in icon system`);
    return (
      <div 
        className={`${iconSizeClasses[size]} ${className} bg-gray-300 rounded animate-pulse`}
        aria-label={ariaLabel || `Missing icon: ${name}`}
        role="img"
      />
    );
  }

  return (
    <i 
      className={`${iconClass} ${iconSizeClasses[size]} ${className}`}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      style={{ display: 'inline-block' }}
    />
  );
}

// Create individual icon components for better type safety
const createIconComponent = (name: string) => {
  return function IconComponent(props: Omit<IconProps, 'name'>) {
    return <Icon name={name} {...props} />;
  };
};

// Export all icon components
export const IconComponents = {
  // Navigation
  Home: createIconComponent('home'),
  About: createIconComponent('about'),
  Services: createIconComponent('services'),
  Projects: createIconComponent('projects'),
  News: createIconComponent('news'),
  Contact: createIconComponent('contact'),
  
  // Actions
  ArrowRight: createIconComponent('arrowRight'),
  ArrowLeft: createIconComponent('arrowLeft'),
  ExternalLink: createIconComponent('externalLink'),
  Folder: createIconComponent('folder'),
  Rocket: createIconComponent('rocket'),
  Eye: createIconComponent('eye'),
  
  // Business
  Handshake: createIconComponent('handshake'),
  Building: createIconComponent('building'),
  University: createIconComponent('university'),
  Landmark: createIconComponent('landmark'),
  Check: createIconComponent('check'),
  
  // Services
  Gem: createIconComponent('gem'),
  Truck: createIconComponent('truck'),
  Tree: createIconComponent('tree'),
  Leaf: createIconComponent('leaf'),
  GasPump: createIconComponent('gasPump'),
  Shield: createIconComponent('shield'),
  Box: createIconComponent('box'),
  Recycle: createIconComponent('recycle'),
  Seedling: createIconComponent('seedling'),
  Blender: createIconComponent('blender'),
  Tractor: createIconComponent('tractor'),
  
  // UI Elements
  Calendar: createIconComponent('calendar'),
  Tag: createIconComponent('tag'),
  Share: createIconComponent('share'),
  PaperPlane: createIconComponent('paperPlane'),
  Phone: createIconComponent('phone'),
  MapMarker: createIconComponent('mapMarker'),
  
  // Charts & Data
  ChartPie: createIconComponent('chartPie'),
  TrendingUp: createIconComponent('trendingUp'),
  Industry: createIconComponent('industry'),
  Globe: createIconComponent('globe'),
  MoneyBill: createIconComponent('moneyBill'),
  
  // Users & Network
  Users: createIconComponent('users'),
  Network: createIconComponent('network'),
  
  // Sustainability
  Cloud: createIconComponent('cloud'),
  SolarPanel: createIconComponent('solarPanel'),
  Ban: createIconComponent('ban'),
  
  // Social
  WhatsApp: createIconComponent('whatsapp'),
  Facebook: createIconComponent('facebook'),
  Twitter: createIconComponent('twitter'),
  LinkedIn: createIconComponent('linkedin'),
  Instagram: createIconComponent('instagram'),
} as const;

// ✅ Create and export a type representing all possible icon names
export type IconName = keyof typeof IconComponents; 