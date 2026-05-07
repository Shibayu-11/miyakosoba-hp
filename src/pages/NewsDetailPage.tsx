import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import { news, type NewsCategory } from '../data/news';
import { useT } from '../i18n/LanguageContext';

const CATEGORY_COLOR: Record<NewsCategory, string> = {
  newMenu: 'bg-soba-red text-white',
  campaign: 'bg-amber-700 text-white',
  store: 'bg-emerald-800 text-white',
  notice: 'bg-soba-ink text-white',
};

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useT();

  const item = news.find((n) => n.id === id);
  if (!item) return <Navigate to="/news" replace />;

  const others = news
    .filter((n) => n.id !== item.id)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const dateStr =
    lang === 'ja'
      ? item.date.replace(/-/g, '.')
      : new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <article className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <Link to="/news" className="inline-flex items-center gap-1 text-xs text-soba-ink/60 hover:text-soba-red mb-8">
          <ChevronLeft size={14} />
          {t.news.headingPage}
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[10px] font-bold tracking-wider px-2 py-1 ${CATEGORY_COLOR[item.category]}`}>
            {t.news.categories[item.category]}
          </span>
          <span className="text-xs text-soba-ink/60">{dateStr}</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink leading-snug mb-8">
          {item.title[lang]}
        </h1>

        <div
          className="aspect-[16/9] bg-cover bg-center bg-cream-100 rounded-sm mb-10"
          style={{ backgroundImage: `url(${item.image})` }}
        />

        {item.body ? (
          <div className="text-sm md:text-base text-soba-ink/85 leading-loose whitespace-pre-line">
            {item.body[lang]}
          </div>
        ) : (
          <p className="text-sm md:text-base text-soba-ink/85 leading-loose">{item.excerpt[lang]}</p>
        )}
      </article>

      <section className="bg-cream-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-soba-ink">
              {lang === 'ja' ? 'その他のお知らせ' : 'Other News'}
            </h2>
            <Link to="/news" className="inline-flex items-center gap-1 text-sm font-bold text-soba-ink hover:text-soba-red">
              {t.news.cta}
              <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
