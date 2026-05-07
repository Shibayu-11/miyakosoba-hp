import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import type { NewsItem, NewsCategory } from '../data/news';

const CATEGORY_COLOR: Record<NewsCategory, string> = {
  newMenu: 'bg-soba-red text-white',
  campaign: 'bg-amber-700 text-white',
  store: 'bg-emerald-800 text-white',
  notice: 'bg-soba-ink text-white',
};

export default function NewsCard({ item }: { item: NewsItem }) {
  const { lang, t } = useT();
  const dateStr =
    lang === 'ja'
      ? item.date.replace(/-/g, '.')
      : new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <Link
      to={`/news/${item.id}`}
      className="group flex flex-col bg-white border border-cream-200 rounded-sm overflow-hidden hover:border-soba-red transition-colors"
    >
      <div
        className="aspect-[4/3] bg-cover bg-center bg-cream-100"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-[10px] font-bold tracking-wider px-2 py-1 ${CATEGORY_COLOR[item.category]}`}>
            {t.news.categories[item.category]}
          </span>
          <span className="text-xs text-soba-ink/60">{dateStr}</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-soba-ink leading-snug mb-2">
          {item.title[lang]}
        </h3>
        <p className="text-xs text-soba-ink/70 leading-relaxed line-clamp-3 mb-4">
          {item.excerpt[lang]}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-soba-red group-hover:gap-2 transition-all">
          {t.news.readMore}
          <ChevronRight size={14} />
        </span>
      </div>
    </Link>
  );
}
