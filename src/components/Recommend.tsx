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
        {/* モバイルのみ：見出しスタイル */}
        <div className="sm:hidden text-center mb-8">
          <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.recommend.label}</p>
          <h2 className="font-serif text-3xl font-bold text-soba-ink">{t.recommend.heading}</h2>
        </div>

        <div className="relative hidden sm:block pt-16">
          {/* 木の棒 */}
          <div className="absolute left-0 right-0 top-3 z-10">
            <div className="h-5 rounded-full bg-gradient-to-b from-[#c79a68] via-[#7a5236] to-[#432817] shadow-[0_8px_18px_rgba(67,40,23,0.28)]" />
            <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
              {Array.from({ length: 11 }).map((_, i) => (
                <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#3a2113]/55 shadow-inner" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[120px_1fr] gap-6 lg:gap-8">
            {/* お知らせの吊り下げ札 */}
            <div className="relative pt-10">
              <div className="absolute left-1/2 top-0 h-12 w-px -translate-x-1/2 bg-[#6b4a2f]" />
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#4f3220] shadow-sm" />
              <div className="animate-noren-sway relative bg-[#283c4c] text-cream-50 rounded-sm shadow-xl px-5 pt-5 pb-5">
                <span
                  className="font-serif font-black leading-snug"
                  style={{ writingMode: 'vertical-rl', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', letterSpacing: '0.2em' }}
                >
                  {t.recommend.label}
                </span>
              </div>
            </div>

            {/* 吊り下げカード4枚 */}
            <div className="min-w-0 grid grid-cols-4 gap-4 md:gap-6">
              {ITEMS.map((item, index) => (
                <div key={item.id} className="relative pt-10">
                  <div className="absolute left-[22%] top-0 h-12 w-px bg-[#6b4a2f]" />
                  <div className="absolute right-[22%] top-0 h-12 w-px bg-[#6b4a2f]" />
                  <span className="absolute left-[22%] top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#4f3220] shadow-sm" />
                  <span className="absolute right-[22%] top-0 h-3 w-3 translate-x-1/2 rounded-full bg-[#4f3220] shadow-sm" />
                  <div
                    className="animate-noren-sway rounded-sm bg-[#283c4c] p-2 shadow-xl"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-sm border border-cream-50/15 bg-cream-50">
                      <img
                        src={item.image}
                        alt={item.title[lang as 'ja' | 'en'] ?? item.title.ja}
                        className="h-full w-full object-cover pointer-events-none"
                        draggable={false}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-soba-ink/80 leading-relaxed">
                    {item.title[lang as 'ja' | 'en'] ?? item.title.ja}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* モバイルは従来通り見やすい2列カード */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {ITEMS.map((item) => (
            <div key={item.id}>
              <div className="rounded-sm bg-[#283c4c] p-2 shadow-lg">
                <div className="aspect-[4/5] overflow-hidden rounded-sm border border-cream-50/15">
                  <img
                    src={item.image}
                    alt={item.title[lang as 'ja' | 'en'] ?? item.title.ja}
                    className="h-full w-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-soba-ink/80 leading-relaxed">
                {item.title[lang as 'ja' | 'en'] ?? item.title.ja}
              </p>
            </div>
          ))}
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
