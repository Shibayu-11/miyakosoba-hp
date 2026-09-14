import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';

type RecommendItem = {
  id: string;
  image: string;
  title: { ja: string; en: string };
};

const ITEMS: RecommendItem[] = [
  { id: 'item-1', image: '/images/news-katsudon-mini-set.jpg', title: { ja: 'かつ丼ミニ麺セット、期間限定で復活', en: 'Katsudon Mini-Noodle Set Returns' } },
  { id: 'item-2', image: '/images/news-soba-udon-zoryo.jpg', title: { ja: 'そば・うどん 増量無料キャンペーン', en: 'Free Size Upgrade Campaign' } },
  { id: 'item-3', image: '/images/news-kinoko-tamago-ankake.jpg', title: { ja: '秋の限定 きのこたまごあんかけ', en: 'Autumn Limited: Mushroom & Egg Ankake' } },
  { id: 'item-4', image: '/images/menu-tempura.jpg', title: { ja: '大えび天そば、新登場', en: 'New: Large Shrimp Tempura Soba' } },
];

export default function Recommend() {
  const { t, lang } = useT();

  return (
    <section className="bg-cream-100 pt-10 pb-4 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* PC のみ全幅の棒 */}
        <div className="hidden sm:block relative mb-10">
          <div className="h-3 rounded-full bg-gradient-to-b from-[#b08763] via-[#7a5236] to-[#4f3220] shadow-md" />
          <div className="absolute inset-x-2 top-0 flex justify-between">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="-mt-1 w-2.5 h-2.5 rounded-full bg-cream-50 border-2 border-[#4f3220]" />
            ))}
          </div>
        </div>

        {/* モバイルのみ：見出しスタイル */}
        <div className="sm:hidden text-center mb-8">
          <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.recommend.label}</p>
          <h2 className="font-serif text-3xl font-bold text-soba-ink">{t.recommend.heading}</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* のれん風ラベル（PC のみ） */}
          <div className="hidden sm:block shrink-0 sm:self-start">
            <div className="animate-noren-sway relative bg-[#283c4c] text-cream-50 rounded-t-sm shadow-lg px-5 pt-5 pb-1.5">
              <span
                className="font-serif font-black leading-snug"
                style={{ writingMode: 'vertical-rl', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', letterSpacing: '0.2em' }}
              >
                {t.recommend.label}
              </span>
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="w-2 h-3 bg-[#283c4c]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)' }} />
                ))}
              </div>
            </div>
          </div>

          {/* お知らせカード4枚 */}
          <div className="flex-1 min-w-0 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ITEMS.map((item) => (
              <div key={item.id}>
                {/* のれん布（写真＋裾フリンジ） */}
                <div className="animate-noren-sway bg-[#283c4c] rounded-t-sm shadow-lg p-2 pb-0">
                  <div className="aspect-[4/5] rounded-sm overflow-hidden border border-cream-50/15">
                    <img
                      src={item.image}
                      alt={item.title[lang as 'ja' | 'en'] ?? item.title.ja}
                      className="w-full h-full object-cover pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <div className="flex justify-center gap-1 pt-1.5 pb-px">
                    {Array.from({ length: 6 }).map((_, j) => (
                      <span key={j} className="w-2 h-3 bg-[#283c4c]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)' }} />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-soba-ink/80 leading-relaxed">
                  {item.title[lang as 'ja' | 'en'] ?? item.title.ja}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-1 text-sm font-bold text-soba-ink hover:text-soba-red transition-colors"
          >
            <span>{t.news.headingPage}</span>
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
