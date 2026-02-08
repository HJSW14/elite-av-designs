import { company } from "@/data/company";
import type { Brand } from "@/data/brands";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eliteavdesigns.com/#business",
    name: company.name,
    legalName: company.legalName,
    description: company.description,
    url: "https://eliteavdesigns.com",
    telephone: company.phone,
    email: company.email,
    image: "https://eliteavdesigns.com/og-image.jpg",
    logo: "https://eliteavdesigns.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.5086,
      longitude: -104.7614,
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      "@id": `https://en.wikipedia.org/wiki/${area.replace(/\s/g, "_")},_Colorado`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    foundingDate: "2018",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    priceRange: "$$$",
    paymentAccepted: "Cash, Credit Card, Check",
    currenciesAccepted: "USD",
    sameAs: [
      company.socials.instagram !== "#" ? company.socials.instagram : undefined,
      company.socials.facebook !== "#" ? company.socials.facebook : undefined,
      company.socials.google !== "#" ? company.socials.google : undefined,
    ].filter(Boolean),
    knowsAbout: [
      "Home Theater Installation",
      "Smart Home Automation",
      "Control4 Programming",
      "Lutron Lighting and Shading",
      "Sonos Audio Systems",
      "Motorized Window Coverings",
      "Surveillance Camera Installation",
      "Dolby Atmos Audio",
      "4K Projection Systems",
      "Whole Home Audio",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Technology Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Theater Installation",
            url: "https://eliteavdesigns.com/services/home-theater",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Home Automation",
            url: "https://eliteavdesigns.com/services/home-automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Motorized Window Coverings",
            url: "https://eliteavdesigns.com/services/window-coverings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Surveillance Systems",
            url: "https://eliteavdesigns.com/services/surveillance",
          },
        },
      ],
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: `https://eliteavdesigns.com/services/${service.slug}`,
    serviceType: service.name,
  };
}

export function serviceFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Alias for generic FAQ pages
export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return serviceFaqSchema(faqs);
}

export function blogPostSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  author: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://eliteavdesigns.com",
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: "https://eliteavdesigns.com",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eliteavdesigns.com/blog/${post.slug}`,
    },
    url: `https://eliteavdesigns.com/blog/${post.slug}`,
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: "https://eliteavdesigns.com",
    description: company.description,
    publisher: {
      "@type": "Organization",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
    },
    inLanguage: "en-US",
  };
}

export function serviceCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Home Theater & Smart Home Services",
    description:
      "Custom home theater installation, Control4 smart home automation, motorized shades, and surveillance systems in Denver, CO.",
    url: "https://eliteavdesigns.com/services",
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home Theater Installation",
          url: "https://eliteavdesigns.com/services/home-theater",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Smart Home Automation",
          url: "https://eliteavdesigns.com/services/home-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Motorized Window Coverings",
          url: "https://eliteavdesigns.com/services/window-coverings",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Surveillance Systems",
          url: "https://eliteavdesigns.com/services/surveillance",
        },
      ],
    },
  };
}

// Generic collection page schema
export function collectionPageSchema(options: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.name,
    description: options.description,
    url: options.url,
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
    },
  };
}

export function projectCollectionSchema(
  projects: { title: string; slug: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Projects - Home Theater & AV Installations",
    description:
      "Portfolio of custom home theater builds, smart home installations, and AV projects across Denver, CO.",
    url: "https://eliteavdesigns.com/projects",
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `https://eliteavdesigns.com/projects/${p.slug}`,
      })),
    },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${company.name}`,
    description: company.description,
    url: "https://eliteavdesigns.com/about",
    mainEntity: {
      "@type": "Organization",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
      foundingDate: "2018",
      description: company.description,
      telephone: company.phone,
      email: company.email,
      areaServed: company.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${company.name}`,
    description: `Schedule a free consultation for home theater, smart home automation, and AV installation in Denver, CO.`,
    url: "https://eliteavdesigns.com/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
      telephone: company.phone,
      email: company.email,
    },
  };
}

export function blogCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${company.name} Blog`,
    description:
      "Home theater tips, smart home guides, and AV installation insights from Denver's premier integrator.",
    url: "https://eliteavdesigns.com/blog",
    publisher: {
      "@type": "Organization",
      name: company.name,
      "@id": "https://eliteavdesigns.com/#business",
    },
    inLanguage: "en-US",
  };
}

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eliteavdesigns.com/#business",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://eliteavdesigns.com/#organization",
    name: company.name,
    legalName: company.legalName,
    url: "https://eliteavdesigns.com",
    logo: "https://eliteavdesigns.com/logo.png",
    foundingDate: "2018",
    description: company.description,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zip,
      addressCountry: "US",
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    award: [
      "Control4 Certified Dealer",
      "Lutron Certified Installer",
      "150+ Projects Completed",
    ],
  };
}

export function brandPageSchema(brand: Brand) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: brand.name,
    description: brand.description,
    brand: {
      "@type": "Brand",
      name: brand.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: company.name,
        telephone: company.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: company.city,
          addressRegion: company.state,
          postalCode: company.zip,
          addressCountry: "US",
        },
      },
    },
    aggregateRating: brand.certified
      ? {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "50",
        }
      : undefined,
  };
}
