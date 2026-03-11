import { company } from "@/data/company";

const SITE_URL = "https://nextleveltow.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TowingService",
    "@id": `${SITE_URL}/#business`,
    name: company.name,
    legalName: company.legalName,
    description: company.description,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    image: `${SITE_URL}/NLTow_Logo.png`,
    logo: `${SITE_URL}/NLTow_Logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.coords.lat,
      longitude: company.coords.lng,
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      "@id": `https://en.wikipedia.org/wiki/${area.replace(/\s/g, "_")},_California`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    foundingDate: String(company.foundedYear),
    priceRange: company.priceRange,
    paymentAccepted: company.paymentMethods.join(", "),
    currenciesAccepted: "USD",
    hasMap: `https://www.google.com/maps?q=${company.coords.lat},${company.coords.lng}`,
    ...(() => {
      const urls = Object.values(company.socials).filter(
        (v) => typeof v === "string" && v.startsWith("http")
      ) as string[];
      return urls.length > 0 ? { sameAs: urls } : {};
    })(),
    knowsAbout: [
      "Flatbed Towing",
      "Roadside Assistance",
      "Vehicle Recovery",
      "Long Distance Vehicle Transport",
      "Jump Start Service",
      "Tire Change Service",
      "Fuel Delivery",
      "Vehicle Lockout Service",
      "AWD Vehicle Towing",
      "Luxury Vehicle Towing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Towing and Roadside Assistance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flatbed Towing",
            url: `${SITE_URL}/services/flatbed-towing`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roadside Assistance",
            url: `${SITE_URL}/services/roadside-assistance`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Recovery",
            url: `${SITE_URL}/services/vehicle-recovery`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Long Distance Transport",
            url: `${SITE_URL}/services/long-distance-transport`,
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
      "@type": "TowingService",
      name: company.name,
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: `${SITE_URL}/services/${service.slug}`,
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
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: SITE_URL,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
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
    url: SITE_URL,
    description: company.description,
    publisher: {
      "@type": "Organization",
      name: company.name,
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: "en-US",
  };
}

export function serviceCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Towing and Roadside Assistance Services",
    description:
      "Flatbed towing, roadside assistance, vehicle recovery, and long-distance transport in Sacramento, CA.",
    url: `${SITE_URL}/services`,
    provider: {
      "@type": "TowingService",
      name: company.name,
      "@id": `${SITE_URL}/#business`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Flatbed Towing",
          url: `${SITE_URL}/services/flatbed-towing`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Roadside Assistance",
          url: `${SITE_URL}/services/roadside-assistance`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vehicle Recovery",
          url: `${SITE_URL}/services/vehicle-recovery`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Long Distance Transport",
          url: `${SITE_URL}/services/long-distance-transport`,
        },
      ],
    },
  };
}

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
      "@type": "TowingService",
      name: company.name,
      "@id": `${SITE_URL}/#business`,
    },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${company.name}`,
    description: company.description,
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: company.name,
      "@id": `${SITE_URL}/#business`,
      foundingDate: String(company.foundedYear),
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
    description: `24/7 towing and roadside assistance dispatch in Sacramento, CA. Call ${company.phone} for immediate help.`,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "TowingService",
      name: company.name,
      "@id": `${SITE_URL}/#business`,
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
      "Towing tips, roadside safety guides, and vehicle transport advice from Sacramento's 24/7 towing service.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: company.name,
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: "en-US",
  };
}

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TowingService",
    "@id": `${SITE_URL}/#business`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(company.rating),
      reviewCount: String(company.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function reviewsPageSchema() {
  const count = Number(company.reviewCount);
  if (count < 1) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Customer Reviews | ${company.name}`,
    description: `See what Sacramento-area customers say about ${company.name}. ${company.rating}-star rated. Real feedback from real people.`,
    url: `${SITE_URL}/reviews`,
    mainEntity: {
      "@type": "TowingService",
      "@id": `${SITE_URL}/#business`,
      name: company.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(company.rating),
        reviewCount: String(company.reviewCount),
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/NLTow_Logo.png`,
    foundingDate: String(company.foundedYear),
    description: company.description,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zip,
      addressCountry: "US",
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}
