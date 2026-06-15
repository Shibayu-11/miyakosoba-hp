import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menu, type Allergen, type MenuItem } from '../data/menu';
import { useT } from '../i18n/LanguageContext';
import type { Dict, Lang } from '../i18n/translations';

type Filter = 'all' | 'noodle' | 'donburi' | 'set' | 'takeout';
const FILTERS: Filter[] = ['all', 'noodle', 'donburi', 'set', 'takeout'];

const CATEGORY_IMAGES: Record<Filter, string> = {
  all: '/images/menu-kitsune.jpg',
  noodle: '/images/menu-tsukimi.jpg',
  donburi: '/images/menu-asa.jpg',
  set: '/images/menu-tempura.jpg',
  takeout: '/images/feature-shop.jpg',
};

const TAX_LABEL: Record<Lang, string> = { ja: '税込', en: 'incl. tax', zh: '含税', ko: '세금 포함' };

const SOBA_UDON_SUFFIX = 'そば／うどん';

function splitName(item: MenuItem, lang: Lang) {
  const name = item.name[lang];
  if (lang === 'ja' && name.endsWith(SOBA_UDON_SUFFIX)) {
    return { base: name.slice(0, -SOBA_UDON_SUFFIX.length), soba: 'そば', udon: 'うどん' };
  }
  return { base: name, soba: null, udon: null };
}

function MenuFuda({ item }: { item: MenuItem }) {
  const { lang } = useT();
  const name = splitName(item, lang);

  return (
    <article
      className="group flex flex-col items-center rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{ background: 'linear-gradient(170deg, #fdf7ec 0%, #f5e9ce 100%)' }}
    >
      {/* バッジ */}
      <div className="self-start mt-4 ml-4 h-6 flex items-center">
        {item.badge && (
          <span className="bg-soba-red text-white text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-wider">
            {item.badge[lang]}
          </span>
        )}
      </div>

      {/* 丸い写真 */}
      <div className="mt-3 mb-5">
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-[5px] border-white shadow-md">
          <img
            src={item.image}
            alt={item.name[lang]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* 区切り */}
      <div className="w-12 h-px bg-soba-ink/20 mb-5" />

      {/* 縦書き品名 */}
      <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-2">
        <span
          className="font-serif font-black text-soba-ink leading-tight"
          style={{ writingMode: 'vertical-rl', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '0.08em' }}
        >
          {name.base}
        </span>
        {name.soba && name.udon && (
          <div className="flex gap-1">
            <span
              className="font-serif font-black text-soba-ink leading-tight"
              style={{ writingMode: 'vertical-rl', fontSize: 'clamp(1.1rem, 1.9vw, 1.5rem)', letterSpacing: '0.08em' }}
            >
              {name.udon}
            </span>
            <span
              className="font-serif font-black text-soba-ink leading-tight"
              style={{ writingMode: 'vertical-rl', fontSize: 'clamp(1.1rem, 1.9vw, 1.5rem)', letterSpacing: '0.08em' }}
            >
              {name.soba}
            </span>
          </div>
        )}
      </div>

      {/* 区切り */}
      <div className="w-12 h-px bg-soba-ink/20 mt-4 mb-4" />

      {/* 価格 */}
      <div className="pb-6 text-center px-4">
        <p className="text-soba-ink/50 text-[10px] mb-1">{TAX_LABEL[lang]}</p>
        <p className="font-serif font-black text-soba-ink leading-none">
          <span className="text-2xl md:text-3xl">{item.price.toLocaleString()}</span>
          <span className="text-sm ml-0.5">円</span>
        </p>
      </div>
    </article>
  );
}

const ALLERGEN_COLUMNS: { key: Allergen; labelKey: keyof Dict['allergenTable']['labels'] }[] = [
  { key: 'そば', labelKey: 'soba' },
  { key: '小麦', labelKey: 'wheat' },
  { key: '卵', labelKey: 'egg' },
  { key: '乳', labelKey: 'milk' },
  { key: 'えび', labelKey: 'shrimp' },
  { key: 'かに', labelKey: 'crab' },
  { key: '落花生', labelKey: 'peanut' },
  { key: 'くるみ', labelKey: 'walnut' },
];

function AllergenTable() {
  const { t, lang } = useT();
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-14">
      <h2 className="font-serif text-xl md:text-2xl font-bold text-soba-ink mb-4">{t.allergenTable.heading}</h2>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="text-sm font-bold px-6 py-2.5 border border-soba-ink text-soba-ink hover:bg-soba-ink hover:text-white transition-colors"
      >
        {open ? t.allergenTable.toggleHide : t.allergenTable.toggleShow}
      </button>

      {open && (
        <div className="mt-4">
          <div className="overflow-x-auto border border-cream-200 rounded-sm bg-white">
            <table className="w-full text-sm whitespace-nowrap">
              <thead>
                <tr className="bg-soba-ink text-white">
                  <th className="text-left font-bold px-4 py-3 sticky left-0 bg-soba-ink">{t.allergenTable.itemHeader}</th>
                  {ALLERGEN_COLUMNS.map((col) => (
                    <th key={col.key} className="font-bold px-3 py-3 text-center">
                      {t.allergenTable.labels[col.labelKey]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menu.map((item, i) => (
                  <tr key={item.id} className={i % 2 === 0 ? 'bg-cream-50' : 'bg-white'}>
                    <th className="text-left font-bold text-soba-ink px-4 py-2.5 sticky left-0 bg-inherit">
                      {item.name[lang]}
                    </th>
                    {ALLERGEN_COLUMNS.map((col) => (
                      <td key={col.key} className="px-3 py-2.5 text-center text-soba-ink/80">
                        {item.allergens.includes(col.key) ? '●' : '－'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-soba-ink/60 leading-relaxed mt-4">{t.allergenTable.note}</p>
        </div>
      )}
    </div>
  );
}

function CategoryCard({
  filter,
  active,
  onClick,
  className = '',
}: {
  filter: Filter;
  active: boolean;
  onClick: () => void;
  className?: string;
}) {
  const { t } = useT();

  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`group relative overflow-hidden rounded-xl text-left transition-shadow ${active ? 'ring-2 ring-soba-red' : ''} ${className}`}
    >
      <img
        src={CATEGORY_IMAGES[filter]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/10 to-transparent" />
      <span
        className="absolute top-2 left-2 text-white font-serif font-black leading-tight drop-shadow"
        style={{ writingMode: 'vertical-rl', fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)', letterSpacing: '0.1em' }}
      >
        {t.menu.categories[filter]}
      </span>
      <span className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-soba-red text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
        <ArrowRight size={12} />
      </span>
    </button>
  );
}

export default function MenuPage() {
  const { t } = useT();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    const type = searchParams.get('type') as Filter | null;
    if (type && FILTERS.includes(type)) setFilter(type);
  }, [searchParams]);

  const visible = useMemo(() => {
    if (filter === 'all') return menu;
    if (filter === 'noodle') return menu.filter((m) => m.type === 'soba' || m.type === 'udon' || m.type === 'both' || m.type === 'other');
    if (filter === 'takeout') return menu.filter((m) => m.type === 'takeout');
    if (filter === 'set') return menu.filter((m) => m.set);
    return menu.filter((m) => m.type === 'donburi');
  }, [filter]);

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />

      <section className="bg-soba-ink text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">{t.menu.label}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-snug mb-5">{t.menu.pageHeading}</h1>
          <p className="text-cream-100/80 max-w-2xl leading-loose">{t.menu.pageIntro}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-6 grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-3 max-w-3xl">
            <CategoryCard filter="all" active={filter === 'all'} onClick={() => setFilter('all')} className="aspect-square" />
            <CategoryCard filter="noodle" active={filter === 'noodle'} onClick={() => setFilter('noodle')} className="aspect-square" />
            <CategoryCard filter="donburi" active={filter === 'donburi'} onClick={() => setFilter('donburi')} className="aspect-square" />
            <CategoryCard filter="set" active={filter === 'set'} onClick={() => setFilter('set')} className="aspect-square" />
            <CategoryCard filter="takeout" active={filter === 'takeout'} onClick={() => setFilter('takeout')} className="aspect-square" />
          </div>

          <p className="text-xs text-soba-ink/55">{t.menu.priceNote}</p>
          <p className="text-xs text-soba-ink/55 mb-10">{t.menu.photoNote}</p>

          {visible.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {visible.map((item) => (
                <MenuFuda key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-soba-ink/50 border border-dashed border-cream-200 rounded-sm">
              {t.menu.setComingSoon}
            </div>
          )}

          <AllergenTable />
        </div>
      </section>

      <Footer />
    </div>
  );
}
