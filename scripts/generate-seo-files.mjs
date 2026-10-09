import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const outputDir = process.argv[2] ? resolve(root, process.argv[2]) : resolve(root, 'public');
const productionSiteUrl = 'https://miyakosoba.com';

function loadEnvFile(path) {
  try {
    const body = readFileSync(path, 'utf8');
    for (const line of body.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
      if (!match) continue;
      const [, key, rawValue] = match;
      if (process.env[key] !== undefined) continue;
      process.env[key] = rawValue.replace(/^['"]|['"]$/g, '');
    }
  } catch {
    // Missing env files are fine; CI/Netlify usually provides variables directly.
  }
}

loadEnvFile(resolve(root, '.env'));
loadEnvFile(resolve(root, '.env.local'));

const firstNonEmpty = (...values) =>
  values.find((value) => typeof value === 'string' && value.trim().length > 0)?.trim();

const siteUrl = firstNonEmpty(
  process.env.VITE_SITE_URL,
  process.env.CF_PAGES_URL,
  process.env.URL,
  productionSiteUrl,
).replace(/\/+$/, '');
const today = new Date().toISOString().slice(0, 10);

const storesSource = readFileSync(resolve(root, 'src/data/stores.ts'), 'utf8');
const newsSource = readFileSync(resolve(root, 'src/data/news.ts'), 'utf8');

const storeIds = [...storesSource.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1]);
const newsItems = [...newsSource.matchAll(/\bid:\s*'([^']+)'[\s\S]*?\bdate:\s*'([^']+)'/g)]
  .map((match) => ({ id: match[1], date: match[2] }));

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/menu', changefreq: 'weekly', priority: '0.9' },
  { path: '/locations', changefreq: 'weekly', priority: '0.9' },
  { path: '/news', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/recruit', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.2' },
  { path: '/tokutei', changefreq: 'yearly', priority: '0.2' },
];

const routes = [
  ...staticRoutes.map((route) => ({ ...route, lastmod: today })),
  ...storeIds.map((id) => ({
    path: `/locations/${id}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  })),
  ...newsItems.map((item) => ({
    path: `/news/${item.id}`,
    lastmod: item.date,
    changefreq: 'monthly',
    priority: '0.6',
  })),
];

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(`${siteUrl}${route.path}`)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'sitemap.xml'), sitemap);
writeFileSync(resolve(outputDir, 'robots.txt'), robots);

if (siteUrl === productionSiteUrl) {
  console.log(`[seo] Generated sitemap.xml and robots.txt for production URL: ${productionSiteUrl}`);
} else {
  console.log(`[seo] Generated sitemap.xml and robots.txt for ${siteUrl}`);
}
