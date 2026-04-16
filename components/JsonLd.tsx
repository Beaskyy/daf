import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Deaf Access Foundation",
    "alternateName": "DAF",
    "url": "https://deafaccessfoundation.com",
    "logo": "https://deafaccessfoundation.com/logo.png",
    "description": "Advancing access, awareness, and opportunities for Deaf and hard-of-hearing communities in Nigeria through education, advocacy, and technology.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG",
      "addressLocality": "Ibadan",
      "addressRegion": "Oyo State"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "info@deafaccessfoundation.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.instagram.com/deafaccessfoundation/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
