import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import { news } from '../data/news';
import NewsCard from './NewsCard';

export default function News() {
  const { t } = useT();
  const latest = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <section id="news" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.news.label}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
              {t.news.headingHome}
            </h2>
          </div>
          <Link
            to="/news"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-soba-ink hover:text-soba-red transition-colors"
          >
            <span>{t.news.cta}</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 border border-soba-ink text-soba-ink px-8 py-3 font-bold transition-colors hover:bg-soba-ink hover:text-white"
          >
            <span>{t.news.cta}</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
