import { useMemo, useEffect } from 'react';
import { stores } from '../data/stores';

const configuredSiteUrl = import.meta.env.VITE_SITE_URL as string | undefined;

/**
 * Inject LocalBusiness / Organization JSON-LD into <head>.
 * Helps Google understand this is a Kansai chain with N stores.
 */
export default function StructuredData() {
  const data = useMemo(() => {
    const siteUrl = (configuredSiteUrl ?? window.location.origin).replace(/\/+$/, '');
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
      url: `${siteUrl}/locations/${s.id}`,
    }));

    const organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '都そば',
      alternateName: 'Miyako Soba',
      foundingDate: '1962',
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      areaServed: ['大阪府', '京都府', '兵庫県'],
      sameAs: [],
    };

    return [organization, ...restaurants];
  }, []);

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
  }, [data]);

  return null;
}
