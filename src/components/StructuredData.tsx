import { useEffect } from 'react';
import { stores } from '../data/stores';

const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://miyakosoba.example.com';

const restaurants = stores.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: s.name,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: s.prefecture,
    streetAddress: s.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: s.position.lat,
    longitude: s.position.lng,
  },
  servesCuisine: 'Soba',
  priceRange: '¥',
  url: `${SITE_URL}/locations/${s.id}`,
}));

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '都そば',
  alternateName: 'Miyako Soba',
  foundingDate: '1962',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  areaServed: ['大阪府', '京都府', '兵庫県'],
  sameAs: [],
};

const data = [organization, ...restaurants];

/**
 * Inject LocalBusiness / Organization JSON-LD into <head>.
 * Helps Google understand this is a Kansai chain with N stores.
 */
export default function StructuredData() {
  useEffect(() => {
    const existing = document.getElementById('site-jsonld');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'site-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
