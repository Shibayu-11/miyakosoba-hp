import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';

const RamenIcon = () => (
  <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17 18 Q19 13 17 9M24 16 Q26 11 24 7M31 18 Q33 13 31 9" />
    <path d="M11 26 Q14 21 18 26 Q22 31 26 26 Q30 21 34 26" />
    <path d="M9 30 Q9 44 24 44 Q39 44 39 30" />
    <line x1="9" y1="30" x2="39" y2="30" />
    <line x1="20" y1="19" x2="30" y2="30" />
    <line x1="24" y1="17" x2="34" y2="28" />
  </svg>
);

const StoreIcon = () => (
  <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
            <div className="hidden max-w-sm grid-cols-2 gap-3 border-t border-white/15 pt-6 sm:grid animate-hero-text [animation-delay:700ms]">
              <a
                href="#menu"
                className="group flex min-h-20 items-center gap-3 border border-soba-red bg-soba-red px-4 py-3 text-white shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c13a34] hover:bg-soba-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream-100"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/30 bg-white/5">
                  <RamenIcon />
                </span>
                <span className="min-w-0 flex-1 font-serif text-sm font-bold leading-snug tracking-[0.08em]">{t.hero.viewMenu}</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              </a>
              <Link
                to="/locations"
                className="group flex min-h-20 items-center gap-3 border border-cream-100/35 bg-white/[0.04] px-4 py-3 text-cream-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cream-100 hover:bg-cream-100 hover:text-soba-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream-100"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-current/30">
                  <StoreIcon />
                </span>
                <span className="min-w-0 flex-1 font-serif text-sm font-bold leading-snug tracking-[0.08em]">{t.hero.viewLocations}</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
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
          <div className="absolute left-4 right-4 top-4 z-10 grid grid-cols-2 gap-2 md:hidden">
            <Link
              to="/menu"
              className="group flex min-h-16 items-center gap-2 border border-soba-red bg-soba-red/95 px-3 py-2 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-colors hover:bg-soba-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/30">
                <RamenIcon />
              </span>
              <span className="min-w-0 flex-1 font-serif text-xs font-bold leading-tight tracking-wide">{t.nav.menu}</span>
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </Link>
            <Link
              to="/locations"
              className="group flex min-h-16 items-center gap-2 border border-cream-100/70 bg-cream-100/95 px-3 py-2 text-soba-ink shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-colors hover:bg-cream-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-soba-ink/25">
                <StoreIcon />
              </span>
              <span className="min-w-0 flex-1 font-serif text-xs font-bold leading-tight tracking-wide">{t.hero.viewLocations}</span>
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
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
