import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import { news, type NewsCategory } from '../data/news';
import { useT } from '../i18n/LanguageContext';

const FILTERS = ['all', 'newMenu', 'campaign', 'store', 'notice'] as const;
type Filter = (typeof FILTERS)[number];

export default function NewsPage() {
  const { t } = useT();
  const [filter, setFilter] = useState<Filter>('all');

  const sorted = useMemo(
    () => [...news].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  const visible = useMemo(
    () => (filter === 'all' ? sorted : sorted.filter((n) => n.category === (filter as NewsCategory))),
    [filter, sorted],
  );

  const counts = useMemo(() => {
    const c = { newMenu: 0, campaign: 0, store: 0, notice: 0 } as Record<NewsCategory, number>;
    for (const n of news) c[n.category]++;
    return c;
  }, []);

  const labelFor = (k: Filter) => (k === 'all' ? t.news.filterAll : t.news.categories[k]);

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />

      <section className="bg-soba-ink text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">{t.news.label}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-snug mb-5">
            {t.news.headingPage}
          </h1>
          <p className="text-cream-100/80 max-w-2xl leading-loose">
            {t.news.pageIntro}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm font-bold px-5 py-2 border transition-colors ${
                  filter === f
                    ? 'bg-soba-ink text-white border-soba-ink'
                    : 'bg-white text-soba-ink border-cream-200 hover:border-soba-ink'
                }`}
              >
                {labelFor(f)}
                {f !== 'all' && (
                  <span className="ml-1.5 text-xs opacity-70">({counts[f as NewsCategory]})</span>
                )}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="text-center text-soba-ink/60 py-20">{t.news.empty}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
