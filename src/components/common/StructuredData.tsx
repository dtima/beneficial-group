'use client';

import React from 'react';

interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees: string;
  industry: string;
  serviceArea: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
}

interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  inLanguage: string[];
  potentialAction: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
}

interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
  };
  areaServed: {
    "@type": "Country";
    name: string;
  };
  serviceType: string;
}

interface ProjectSchema {
  "@context": "https://schema.org";
  "@type": "Project";
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    "@type": "Place";
    name: string;
    address: {
      "@type": "PostalAddress";
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
  };
  funder: {
    "@type": "Organization";
    name: string;
  };
  participant: {
    "@type": "Organization";
    name: string;
  }[];
}

interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'project' | 'breadcrumb';
  data: OrganizationSchema | WebSiteSchema | ServiceSchema | ProjectSchema | BreadcrumbSchema;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

// Predefined schemas for common use cases
export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beneficial Solutions LLC",
  url: "https://beneficialsolutions.com",
  logo: "https://beneficialsolutions.com/logo.png",
  description: "Leading sustainable solutions provider in Cameroon. Mining, transport, forestry, and agriculture services driving economic growth and environmental protection.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kumba",
    addressRegion: "South West Region",
    addressCountry: "CM"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+237-695-184-738",
    contactType: "customer service",
    email: "ebenebot1978@gmail.com"
  },
  sameAs: [
    "https://www.linkedin.com/company/beneficial-solutions-llc",
    "https://www.facebook.com/beneficialsolutions",
    "https://twitter.com/beneficialsolutions"
  ],
  foundingDate: "2019",
  numberOfEmployees: "385+",
  industry: "Sustainable Development",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 4.6363,
      longitude: 9.4463
    },
    geoRadius: "500000"
  }
};

export const websiteSchema: WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Beneficial Solutions LLC",
  url: "https://beneficialsolutions.com",
  description: "Official website of Beneficial Solutions LLC - Sustainable solutions for Cameroon and beyond",
  inLanguage: ["en", "fr"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://beneficialsolutions.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const createServiceSchema = (serviceName: string, description: string): ServiceSchema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "Organization",
    name: "Beneficial Solutions LLC"
  },
  areaServed: {
    "@type": "Country",
    name: "Cameroon"
  },
  serviceType: "Sustainable Development"
});

export const createProjectSchema = (
  name: string,
  description: string,
  location: string,
  startDate: string,
  endDate?: string
): ProjectSchema => ({
  "@context": "https://schema.org",
  "@type": "Project",
  name: name,
  description: description,
  startDate: startDate,
  endDate: endDate,
  location: {
    "@type": "Place",
    name: location,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kumba",
      addressRegion: "South West Region",
      addressCountry: "CM"
    }
  },
  funder: {
    "@type": "Organization",
    name: "Beneficial Solutions LLC"
  },
  participant: [
    {
      "@type": "Organization",
      name: "AcDiToPush"
    },
    {
      "@type": "Organization",
      name: "MINPMEESA"
    }
  ]
});

export const createBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]): BreadcrumbSchema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.name,
    item: breadcrumb.url
  }))
});

export default StructuredData; 