// lib/projects.ts

// Define clear types for our data structures
export interface Stat {
  value: string;
  labelKey: string; // Key for next-intl
}

export interface ProjectGoal {
  icon: string;
  textKey: string;
}

export interface MarketOpportunityItem {
  icon: string;
  titleKey: string;
  valueKey: string;
}

export interface InvestmentDetail {
  icon: string;
  titleKey: string;
  valueKey: string;
  isHighlighted?: boolean;
}

export interface JobCreationItem {
  icon: string;
  titleKey: string;
  items: Array<{
    labelKey: string;
    value: string;
  }>;
}

export interface SustainabilityFeature {
  icon: string;
  textKey: string;
}

export interface ProjectTimelinePhase {
  number: number;
  textKey: string;
  status: 'completed' | 'ongoing' | 'pending';
}

export interface ProjectPartner {
  name: string;
  logo: string;
  role: string;
  description: string;
}

export interface Project {
  id: string;
  categoryKey: string;
  image: string;
  color: string;
  bgColor: string;
  stats: Stat[];
  details: {
    locationKey: string;
    scopeKey: string;
  };
  // Specific sections
  goals?: ProjectGoal[];
  marketOpportunity?: {
    titleKey: string;
    items: MarketOpportunityItem[];
  };
  investmentDetails?: {
    titleKey: string;
    items: InvestmentDetail[];
  };
  projectTimeline?: {
    titleKey: string;
    phases: ProjectTimelinePhase[];
  };
  jobCreation?: {
    titleKey: string;
    items: JobCreationItem[];
  };
  sustainabilityFeatures?: {
    titleKey: string;
    items: SustainabilityFeature[];
  };
  environmentalImpact?: {
    titleKey: string;
    items: SustainabilityFeature[];
  };
  partners?: {
    titleKey: string;
    items: ProjectPartner[];
  };
}

// Project data - externalized from component
const projectsData: Omit<Project, 'id'>[] = [
  {
    categoryKey: "Forestry & Sustainability",
    image: "/projects/bamboo.png",
    color: "from-green-500 to-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    stats: [
      { value: "385+", labelKey: "bamboo-cultivation.stats.jobs" },
      { value: "45M", labelKey: "bamboo-cultivation.stats.investment" },
      { value: "2025", labelKey: "bamboo-cultivation.stats.launch" },
    ],
    details: {
      locationKey: "bamboo-cultivation.location",
      scopeKey: "bamboo-cultivation.scope",
    },
    goals: [
      { icon: "Check", textKey: "bamboo-cultivation.goals.items.0" },
      { icon: "Check", textKey: "bamboo-cultivation.goals.items.1" },
      { icon: "Check", textKey: "bamboo-cultivation.goals.items.2" },
      { icon: "Check", textKey: "bamboo-cultivation.goals.items.3" },
      { icon: "Check", textKey: "bamboo-cultivation.goals.items.4" },
    ],
    marketOpportunity: {
      titleKey: "bamboo-cultivation.marketOpportunity.title",
      items: [
        { icon: "ChartPie", titleKey: "Market Size", valueKey: "bamboo-cultivation.marketOpportunity.marketSize" },
        { icon: "TrendingUp", titleKey: "Growth Projection", valueKey: "bamboo-cultivation.marketOpportunity.growthProjection" },
        { icon: "Industry", titleKey: "Production Capacity", valueKey: "bamboo-cultivation.marketOpportunity.productionCapacity" },
        { icon: "Globe", titleKey: "Target Markets", valueKey: "bamboo-cultivation.marketOpportunity.targetMarkets" },
      ],
    },
    investmentDetails: {
      titleKey: "bamboo-cultivation.investmentDetails.title",
      items: [
        { icon: "MoneyBill", titleKey: "Total Investment", valueKey: "bamboo-cultivation.investmentDetails.totalInvestment", isHighlighted: true },
        { icon: "Seedling", titleKey: "Plantation Development", valueKey: "bamboo-cultivation.investmentDetails.plantationDevelopment" },
      ],
    },
    jobCreation: {
      titleKey: "bamboo-cultivation.jobCreation.title",
      items: [
        {
          icon: "Users",
          titleKey: "Direct Jobs",
          items: [
            { labelKey: "Plantation Workers", value: "150" },
            { labelKey: "Processing Staff", value: "100" },
            { labelKey: "Management & Admin", value: "35" },
          ],
        },
        {
          icon: "Network",
          titleKey: "Indirect Jobs",
          items: [
            { labelKey: "Local Supplier Networks", value: "200+" },
          ],
        },
      ],
    },
    environmentalImpact: {
      titleKey: "bamboo-cultivation.environmentalImpact.title",
      items: [
        { icon: "Cloud", textKey: "bamboo-cultivation.environmentalImpact.items.0" },
        { icon: "Tree", textKey: "bamboo-cultivation.environmentalImpact.items.1" },
        { icon: "Recycle", textKey: "bamboo-cultivation.environmentalImpact.items.2" },
        { icon: "Seedling", textKey: "bamboo-cultivation.environmentalImpact.items.3" },
      ],
    },
    partners: {
      titleKey: "bamboo-cultivation.partners.title",
      items: [
        {
          name: "AcDiToPush",
          logo: "/partners/AcDiToPush.png",
          role: "Technical Partner",
          description: "Digital transformation and technology solutions"
        },
        {
          name: "MINPMEESA",
          logo: "/partners/MINPMEESA.png",
          role: "Government Partner",
          description: "Ministry of Small and Medium Enterprises"
        },
        {
          name: "APME",
          logo: "/partners/APME.png",
          role: "Investment Partner",
          description: "Agency for the Promotion of SMEs"
        }
      ]
    },
  },
  {
    categoryKey: "Manufacturing & Innovation",
    image: "/projects/Toothpick.jpeg",
    color: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    stats: [
      { value: "1.5M", labelKey: "toothpick-production.stats.dailyProduction" },
      { value: "268M", labelKey: "toothpick-production.stats.investment" },
      { value: "2026", labelKey: "toothpick-production.stats.launch" },
    ],
    details: {
      locationKey: "toothpick-production.location",
      scopeKey: "toothpick-production.scope",
    },
    marketOpportunity: {
      titleKey: "toothpick-production.marketOpportunity.title",
      items: [
        { icon: "ChartPie", titleKey: "Market Size", valueKey: "toothpick-production.marketOpportunity.marketSize" },
        { icon: "TrendingUp", titleKey: "Growth Projection", valueKey: "toothpick-production.marketOpportunity.growthProjection" },
        { icon: "Industry", titleKey: "Production Capacity", valueKey: "toothpick-production.marketOpportunity.productionCapacity" },
        { icon: "Globe", titleKey: "Target Markets", valueKey: "toothpick-production.marketOpportunity.targetMarkets" },
      ],
    },
    investmentDetails: {
      titleKey: "toothpick-production.investmentDetails.title",
      items: [
        { icon: "MoneyBill", titleKey: "Total Investment", valueKey: "toothpick-production.investmentDetails.totalInvestment", isHighlighted: true },
        { icon: "Building", titleKey: "Facility Construction", valueKey: "toothpick-production.investmentDetails.facilityConstruction" },
      ],
    },
    projectTimeline: {
      titleKey: "toothpick-production.projectTimeline.title",
      phases: [
        { number: 1, textKey: "toothpick-production.projectTimeline.phases.0", status: "completed" },
        { number: 2, textKey: "toothpick-production.projectTimeline.phases.1", status: "completed" },
        { number: 3, textKey: "toothpick-production.projectTimeline.phases.2", status: "ongoing" },
        { number: 4, textKey: "toothpick-production.projectTimeline.phases.3", status: "pending" },
        { number: 5, textKey: "toothpick-production.projectTimeline.phases.4", status: "pending" },
      ],
    },
    jobCreation: {
      titleKey: "toothpick-production.jobCreation.title",
      items: [
        {
          icon: "Users",
          titleKey: "Direct Jobs",
          items: [
            { labelKey: "Machine Operators", value: "50" },
            { labelKey: "Quality Control", value: "40" },
            { labelKey: "Management", value: "10" },
          ],
        },
        {
          icon: "Network",
          titleKey: "Indirect Jobs",
          items: [
            { labelKey: "Supply Chain", value: "1000+" },
          ],
        },
      ],
    },
    sustainabilityFeatures: {
      titleKey: "toothpick-production.sustainabilityFeatures.title",
      items: [
        { icon: "SolarPanel", textKey: "toothpick-production.sustainabilityFeatures.items.0" },
        { icon: "Seedling", textKey: "toothpick-production.sustainabilityFeatures.items.1" },
        { icon: "Recycle", textKey: "toothpick-production.sustainabilityFeatures.items.2" },
        { icon: "Ban", textKey: "toothpick-production.sustainabilityFeatures.items.3" },
        { icon: "Leaf", textKey: "toothpick-production.sustainabilityFeatures.items.4" },
      ],
    },
    partners: {
      titleKey: "toothpick-production.partners.title",
      items: [
        {
          name: "LA REGIONALE BANK",
          logo: "/partners/laregional.jpeg",
          role: "Financial Partner",
          description: "Trusted banking partner providing comprehensive financial services and support for our manufacturing and operational needs. Our partnership ensures secure financial management and growth capital for sustainable development projects."
        },
        {
          name: "AFRICA CORPORATION SARL",
          logo: "/partners/AFRICA CORPORATION SARL.png",
          role: "Strategic Partner",
          description: "Regional business development"
        },
        {
          name: "Tankoil",
          logo: "/partners/Tankoil.png",
          role: "Energy Partner",
          description: "Energy and infrastructure solutions"
        }
      ]
    },
  },
];

// Function to fetch project data (simulating an API/DB call)
export const getProjectById = (id: string): Project | undefined => {
  const projectData = projectsData.find((_, index) => {
    const projectIds = ["bamboo-cultivation", "toothpick-production"];
    return projectIds[index] === id;
  });
  
  if (!projectData) return undefined;

  return { id, ...projectData };
};

// Get all projects for listing
export const getAllProjects = (): Project[] => {
  const projectIds = ["bamboo-cultivation", "toothpick-production"];
  return projectIds.map(id => getProjectById(id)).filter(Boolean) as Project[];
}; 