import { useEffect, useRef } from 'react';
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
  { id: 'item-5', image: '/images/menu-tsukimi.jpg', title: { ja: '月見うどん、お得なセット販売中', en: 'Tsukimi Udon Value Set' } },
  { id: 'item-6', image: '/images/menu-asa.jpg', title: { ja: '上天丼、数量限定で登場', en: 'Premium Tempura Bowl, Limited Stock' } },
  { id: 'item-7', image: '/images/feature-dashi.jpg', title: { ja: '京都名物 にしんそば、期間限定', en: 'Kyoto Classic: Nishin Soba, Limited Time' } },
  { id: 'item-8', image: '/images/menu-kitsune.jpg', title: { ja: 'きつねそば、お持ち帰りも好評', en: 'Kitsune Soba, Now Available for Takeout' } },
];

const COUNT = ITEMS.length;
// 前後にバッファを持たせて、端まで来たら無音でループ位置に戻す
const SLIDES = [...ITEMS, ...ITEMS, ...ITEMS];

const AUTO_INTERVAL = 5000;
const SCROLL_END_DELAY = 120;

export default function Recommend() {
  const { t, lang } = useT();
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(COUNT);

  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const scrollEndTimer = useRef<number>();

  const scrollToIndex = (index: number, smooth = true) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
  };

  // 中央コピーの範囲に収まるよう、必要なら無音でジャンプする
  const normalize = (index: number) => {
    if (index < COUNT) return index + COUNT;
    if (index >= COUNT * 2) return index - COUNT;
    return index;
  };

  const settleIndex = (index: number) => {
    const norm = normalize(index);
    if (norm !== index) {
      scrollToIndex(norm, false);
    }
    indexRef.current = norm;
  };

  const syncIndexFromScroll = () => {
    const el = scrollRef.current;
    if (!el) return indexRef.current;
    let closest = 0;
    let minDiff = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const diff = Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closest = i;
      }
    });
    return closest;
  };

  useEffect(() => {
    scrollToIndex(COUNT, false);
    indexRef.current = COUNT;
    return () => {
      if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
    };
  }, []);

  // スクロールが落ち着いたタイミングで、無音でループ位置に補正する
  const onScroll = () => {
    if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
    scrollEndTimer.current = window.setTimeout(() => {
      if (dragging.current) return;
      settleIndex(syncIndexFromScroll());
    }, SCROLL_END_DELAY);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const next = indexRef.current + 2;
      indexRef.current = next;
      scrollToIndex(next, true);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - dragStartX.current;
    el.scrollLeft = dragStartScroll.current - dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    scrollRef.current?.releasePointerCapture(e.pointerId);
    onScroll();
  };

  return (
    <section className="bg-cream-100 pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* のれん竿（木の棒＋金具） */}
        <div className="relative mb-10">
          <div className="h-3 rounded-full bg-gradient-to-b from-[#b08763] via-[#7a5236] to-[#4f3220] shadow-md" />
          <div className="absolute inset-x-2 top-0 flex justify-between">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="-mt-1 w-2.5 h-2.5 rounded-full bg-cream-50 border-2 border-[#4f3220]" />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* のれん風ラベル */}
          <div className="shrink-0 sm:self-start">
            <div className="animate-noren-sway relative bg-[#283c4c] text-cream-50 rounded-t-sm shadow-lg px-4 sm:px-5 pt-5 pb-1.5 flex sm:block items-center">
              <span
                className="font-serif font-black leading-snug"
                style={{ writingMode: 'vertical-rl', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', letterSpacing: '0.2em' }}
              >
                {t.recommend.label}
              </span>
              {/* のれんの裾（フリンジ） */}
              <div className="hidden sm:flex justify-center gap-1 mt-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="w-2 h-3 bg-[#283c4c]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)' }} />
                ))}
              </div>
            </div>
          </div>

          {/* カード横スワイプ（自動スライド + 手動ドラッグ対応・無限ループ） */}
          <div
            ref={scrollRef}
            className="flex-1 min-w-0 flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 -mx-1 px-1 snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onScroll={onScroll}
          >
            {SLIDES.map((item, i) => (
              <div key={`${item.id}-${i}`} className="shrink-0 w-[68%] sm:w-64 snap-start">
                {/* のれん布（写真＋裾フリンジ） */}
                <div className="animate-noren-sway bg-[#283c4c] rounded-t-sm shadow-lg p-2 pb-0">
                  <div className="aspect-[4/5] rounded-sm overflow-hidden border border-cream-50/15">
                    <img
                      src={item.image}
                      alt={item.title[lang]}
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
                  {item.title[lang]}
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
