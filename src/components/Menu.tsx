import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';

type Card = {
  label: { ja: string; en: string };
  image: string;
  to: string;
};

const TOP_CARDS: Card[] = [
  {
    label: { ja: '全て', en: 'All' },
    image: '/images/menu-category-all.jpg',
    to: '/menu',
  },
  {
    label: { ja: '麺類', en: 'Noodles' },
    image: '/images/menu-kakiage-new.jpg',
    to: '/menu?type=noodle',
  },
  {
    label: { ja: '丼物', en: 'Rice Bowls' },
    image: '/images/menu-katsudon-new.jpg',
    to: '/menu?type=donburi',
  },
];

function CategoryCard({ card, lang, large }: { card: Card; lang: 'ja' | 'en'; large?: boolean }) {
  return (
    <Link
      to={card.to}
      className="relative overflow-hidden rounded-2xl group block aspect-[4/3] sm:aspect-auto sm:h-60 lg:h-64 transition-transform duration-300 ease-out hover:scale-[1.04] hover:z-10"
    >
      {/* 背景写真 */}
      <img
        src={card.image}
        alt={card.label[lang]}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* オーバーレイ（左から暗く） */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

      {/* 縦書きラベル */}
      <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
        <span
          className="font-serif font-black text-white"
          style={{
            writingMode: 'vertical-rl',
            fontSize: large ? 'clamp(1.8rem, 4vw, 3.2rem)' : 'clamp(1.3rem, 2.5vw, 2rem)',
            letterSpacing: '0.08em',
            textShadow: '0 2px 12px rgba(0,0,0,0.7)',
          }}
        >
          {card.label[lang]}
        </span>
      </div>

      {/* 矢印ボタン */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-soba-red flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
        <ArrowRight size={18} className="text-white" />
      </div>
    </Link>
  );
}

export default function Menu() {
  const { t, lang } = useT();

  return (
    <section id="menu" className="pt-4 pb-16 md:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* 見出し */}
        <div className="text-center mb-12">
          <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.menu.label}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
            {t.menu.heading}
          </h2>
        </div>

        {/* カテゴリカード */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7 max-w-7xl mx-auto">
          {TOP_CARDS.map((card) => (
            <CategoryCard key={card.to} card={card} lang={lang as 'ja' | 'en'} large />
          ))}
        </div>

        {/* 価格注記 */}
        <p className="text-center text-sm text-soba-ink/70">{t.menu.priceNote}</p>
        <p className="text-center text-sm text-soba-ink/70 mb-10">{t.menu.photoNote}</p>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 border border-soba-ink text-soba-ink hover:bg-soba-ink hover:text-white px-10 py-3 font-bold transition-colors"
          >
            <span>{t.menu.cta}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
