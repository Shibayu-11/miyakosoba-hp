import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';

const RamenIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17 18 Q19 13 17 9M24 16 Q26 11 24 7M31 18 Q33 13 31 9" />
    <path d="M11 26 Q14 21 18 26 Q22 31 26 26 Q30 21 34 26" />
    <path d="M9 30 Q9 44 24 44 Q39 44 39 30" />
    <line x1="9" y1="30" x2="39" y2="30" />
    <line x1="20" y1="19" x2="30" y2="30" />
    <line x1="24" y1="17" x2="34" y2="28" />
  </svg>
);

const StoreIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 22 L24 6 L44 22" />
    <rect x="8" y="22" width="32" height="22" />
    <rect x="19" y="32" width="10" height="12" />
    <rect x="10" y="25" width="8" height="7" rx="1" />
    <rect x="30" y="25" width="8" height="7" rx="1" />
    <path d="M18 6 Q20 2 18 0M24 4 Q26 0 24-2M30 6 Q32 2 30 0" />
  </svg>
);

export default function Hero() {
  const { t } = useT();
  return (
    <section className="relative bg-soba-ink text-white overflow-hidden">
      <div className="grid md:grid-cols-12 md:min-h-[640px]">
        <div className="md:col-span-5 relative flex items-center px-6 md:px-14 pt-14 pb-0 md:py-24 z-10 bg-soba-ink">
          <div className="max-w-md w-full">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.35] md:leading-[1.25] mb-6 tracking-wider animate-hero-text">
              <span className="whitespace-normal md:whitespace-nowrap">{t.hero.title1}</span><br />
              <span className="whitespace-normal md:whitespace-nowrap">{t.hero.title2}</span>
            </h1>
            <p className="text-base md:text-lg leading-loose text-cream-100/90 mb-10 animate-hero-text [animation-delay:350ms]">
              {t.hero.sub1}<br />
              {t.hero.sub2}
            </p>

            {/* PC のみ表示 */}
            <div className="hidden sm:flex gap-5 animate-hero-text [animation-delay:700ms]">
              <a
                href="#menu"
                className="w-32 h-32 rounded-full bg-soba-red hover:bg-soba-red-dark text-white flex flex-col items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <RamenIcon />
                <span className="font-bold text-sm tracking-wide leading-tight text-center">{t.hero.viewMenu}</span>
              </a>
              <Link
                to="/locations"
                className="w-32 h-32 rounded-full bg-cream-100 hover:bg-cream-200 text-soba-ink flex flex-col items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <StoreIcon />
                <span className="font-bold text-sm tracking-wide leading-tight text-center">{t.hero.viewLocations}</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 relative overflow-hidden h-80 sm:h-96 md:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center animate-hero-image"
            style={{ backgroundImage: 'url(/images/hero-soba.jpg)' }}
          />
          {/* PC：左からグラデーション */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-soba-ink to-transparent hidden md:block" />
          {/* モバイル：写真上部グラデーション */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-soba-ink to-transparent md:hidden" />
          {/* モバイルのみ：ボタンをグラデーション上に表示 */}
          <div className="md:hidden absolute top-4 left-10 flex gap-4 z-10">
            <Link
              to="/menu"
              className="w-20 h-20 rounded-full bg-soba-red hover:bg-soba-red-dark text-white flex flex-col items-center justify-center gap-1 shadow-lg transition-colors"
            >
              <RamenIcon />
              <span className="font-bold text-xs tracking-wide leading-tight text-center">{t.nav.menu}</span>
            </Link>
            <Link
              to="/locations"
              className="w-20 h-20 rounded-full bg-cream-100 hover:bg-cream-200 text-soba-ink flex flex-col items-center justify-center gap-1 shadow-lg transition-colors"
            >
              <StoreIcon />
              <span className="font-bold text-xs tracking-wide leading-tight text-center">{t.hero.viewLocations}</span>
            </Link>
          </div>
          {/* モバイルのみ：ロゴマーク＋縦書きブランド名 */}
          <div className="md:hidden absolute left-4 bottom-4 z-10 flex flex-col items-center gap-2">
            <img src="/images/logo-mark-white.png" alt="" className="w-9 h-9" />
            <span
              className="font-serif font-black text-white"
              style={{
                writingMode: 'vertical-rl',
                fontSize: '2rem',
                letterSpacing: '0.18em',
                textShadow: '0 2px 12px rgba(0,0,0,0.7)',
              }}
            >
              {t.brand.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
