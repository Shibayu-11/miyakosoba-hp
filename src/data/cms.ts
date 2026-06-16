/**
 * CMS abstraction. Switch between local static data and microCMS without
 * changing the call sites in pages/components.
 *
 * To enable microCMS:
 *   1. Sign up at https://microcms.io and create a service.
 *   2. Create two APIs: `news` and `menu` matching the schema below.
 *   3. Add to .env:
 *        VITE_MICROCMS_SERVICE_DOMAIN=your-service
 *        VITE_MICROCMS_API_KEY=xxxx
 *   4. Switch all imports from `data/news` / `data/menu` to use these helpers.
 *
 * microCMS schema reference (news):
 *   - category: string ('newMenu' | 'campaign' | 'store' | 'notice')
 *   - title_ja: string
 *   - title_en: string
 *   - excerpt_ja: textarea
 *   - excerpt_en: textarea
 *   - body_ja: rich text
 *   - body_en: rich text
 *   - image: media
 *   - publishedAt: built-in
 *
 * Falls back to local static data if env vars are not set, so dev / preview
 * always works.
 */

import { news as staticNews, type NewsItem } from './news';
import { menu as staticMenu, type MenuItem } from './menu';

const SERVICE = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN as string | undefined;
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY as string | undefined;

const enabled = Boolean(SERVICE && API_KEY);

type MicroCmsNewsRow = {
  id: string;
  category: NewsItem['category'];
  title_ja: string;
  title_en: string;
  excerpt_ja: string;
  excerpt_en: string;
  body_ja?: string;
  body_en?: string;
  image?: { url: string };
  publishedAt: string;
};

async function fetchMicroCms<T>(endpoint: string): Promise<T | null> {
  if (!enabled) return null;
  try {
    const res = await fetch(`https://${SERVICE}.microcms.io/api/v1/${endpoint}?limit=100`, {
      headers: { 'X-MICROCMS-API-KEY': API_KEY! },
    });
    if (!res.ok) throw new Error(`microCMS ${endpoint} ${res.status}`);
    return (await res.json()) as T;
  } catch (err) {
    console.warn('[cms] falling back to static data:', err);
    return null;
  }
}

export async function fetchNews(): Promise<NewsItem[]> {
  const data = await fetchMicroCms<{ contents: MicroCmsNewsRow[] }>('news');
  if (!data) return staticNews;
  return data.contents.map((row) => ({
    id: row.id,
    category: row.category,
    date: row.publishedAt.slice(0, 10),
    title: { ja: row.title_ja, en: row.title_en, zh: row.title_ja, ko: row.title_ja },
    excerpt: { ja: row.excerpt_ja, en: row.excerpt_en, zh: row.excerpt_ja, ko: row.excerpt_ja },
    body: row.body_ja || row.body_en ? { ja: row.body_ja ?? '', en: row.body_en ?? '', zh: row.body_ja ?? '', ko: row.body_ja ?? '' } : undefined,
    image: row.image?.url ?? '/images/news-placeholder.jpg',
  }));
}

export async function fetchMenu(): Promise<MenuItem[]> {
  // microCMS migration for menu is similar — implement when content schema is finalized.
  return staticMenu;
}

export const cmsEnabled = enabled;
