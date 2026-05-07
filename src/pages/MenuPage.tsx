import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menu, type MenuCategory, type MenuItem } from '../data/menu';
import { useT } from '../i18n/LanguageContext';

const FILTERS: ('all' | MenuCategory)[] = ['all', 'standard', 'tempura', 'set', 'topping', 'season'];
type Filter = (typeof FILTERS)[number];

function MenuRow({ item }: { item: MenuItem }) {
  const { t, lang } = useT();
  return (
    <article className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-6 py-6 border-b border-cream-200">
      <div
        className="aspect-square bg-cover bg-center bg-cream-100 rounded-sm"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="flex flex-col">
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1.5">
          <h3 className="font-serif text-lg md:text-xl font-bold text-soba-ink">
            {item.name[lang]}
            {item.badge && (
              <span className="ml-2 inline-block bg-soba-red text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider align-middle">
                {item.badge[lang]}
              </span>
            )}
          </h3>
          <p className="font-serif text-lg md:text-xl font-bold text-soba-ink whitespace-nowrap">
            {item.price}<span className="text-xs font-medium ml-1">{t.menu.yen}</span>
          </p>
        </div>
        <p className="text-xs md:text-sm text-soba-ink/75 leading-relaxed mb-3">{item.description[lang]}</p>
        <div className="mt-auto flex items-start gap-2 text-[10px] md:text-xs">
          <span className="text-soba-ink/60 shrink-0 font-bold tracking-wider">{t.menu.allergenLabel}:</span>
          <span className="text-soba-ink/70 flex flex-wrap gap-1">
            {item.allergens.map((a) => (
              <span key={a} className="px-1.5 py-0.5 bg-cream-100 rounded-sm">
                {a}
              </span>
            ))}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function MenuPage() {
  const { t } = useT();
  const [filter, setFilter] = useState<Filter>('all');

  const grouped = useMemo(() => {
    const visible = filter === 'all' ? menu : menu.filter((m) => m.category === filter);
    const groups: Record<MenuCategory, MenuItem[]> = {
      standard: [],
      tempura: [],
      set: [],
      topping: [],
      season: [],
    };
    for (const m of visible) groups[m.category].push(m);
    return groups;
  }, [filter]);

  const order: MenuCategory[] = ['standard', 'tempura', 'set', 'season', 'topping'];

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <section className="bg-soba-ink text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">{t.menu.label}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-snug mb-5">
            {t.menu.pageHeading}
          </h1>
          <p className="text-cream-100/80 max-w-2xl leading-loose">
            {t.menu.pageIntro}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 flex flex-wrap items-center gap-2">
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
                {t.menu.categories[f]}
              </button>
            ))}
          </div>

          {order.map((cat) => {
            const list = grouped[cat];
            if (list.length === 0) return null;
            return (
              <section key={cat} className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-soba-ink mb-2 border-l-4 border-soba-red pl-4">
                  {t.menu.categories[cat]}
                </h2>
                <div>
                  {list.map((item) => (
                    <MenuRow key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}

          <p className="text-xs text-soba-ink/60 leading-relaxed mt-12 p-5 bg-white border border-cream-200 rounded-sm">
            <span className="font-bold text-soba-ink">{t.menu.allergenLabel}: </span>
            {t.menu.allergenNote}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
