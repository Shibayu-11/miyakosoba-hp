import { useT } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const HEADING: Record<Lang, string> = {
  ja: '都そばを、もっと近くに。',
  en: 'Miyako Soba, closer to you.',
  zh: '让都荞麦，离您更近。',
  ko: '도소바를, 더 가까이.',
};
const LABEL: Record<Lang, string> = { ja: '公式アカウント', en: 'Official Accounts', zh: '官方账号', ko: '공식 계정' };
const IG_LABEL: Record<Lang, string> = { ja: 'インスタグラム', en: 'Instagram', zh: 'Instagram', ko: '인스타그램' };
const LINE_LABEL: Record<Lang, string> = { ja: 'LINE公式', en: 'LINE Official', zh: 'LINE官方', ko: 'LINE 공식' };
const X_LABEL: Record<Lang, string> = { ja: 'X（旧Twitter）', en: 'X (Twitter)', zh: 'X（推特）', ko: 'X (트위터)' };

const LineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
    <path d="M12 0C5.373 0 0 4.367 0 9.74c0 4.812 4.226 8.847 9.93 9.616.387.083.913.255 1.046.587.119.301.078.766.04 1.075l-.17 1.025c-.05.302-.241 1.187 1.054.647 1.297-.54 6.967-4.1 9.503-7.022 1.755-1.927 2.597-3.882 2.597-5.928C24 4.367 18.626 0 12 0z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.99l-4.94-6.6L4.4 22H1.64l6.97-7.97L1.5 2h7.13l4.47 5.94L18.24 2zm-1.22 18h1.69L7.07 4H5.27l11.75 16z" />
  </svg>
);

const InstagramGradient = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden>
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#ffd600" />
        <stop offset="25%" stopColor="#ff7a00" />
        <stop offset="50%" stopColor="#ff0069" />
        <stop offset="75%" stopColor="#d300c5" />
        <stop offset="100%" stopColor="#7638fa" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);

export default function SocialFollow() {
  const { lang } = useT();

  const instagramUrl =
    (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) ??
    'https://www.instagram.com/miyakosobamiyakomiyako/';
  const lineUrl =
    (import.meta.env.VITE_LINE_URL as string | undefined) ??
    'https://page.line.me/857fmrkz?openQrModal=true';
  const xUrl = (import.meta.env.VITE_X_URL as string | undefined) ?? 'https://x.com/miyakosoba385';

  const label = LABEL[lang];
  const igLabel = IG_LABEL[lang];
  const lineLabel = LINE_LABEL[lang];
  const xLabel = X_LABEL[lang];

  return (
    <section className="bg-cream-100 py-16 md:py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 見出し */}
        <p className="text-xs font-bold tracking-[0.25em] text-soba-ink/50 mb-2 uppercase">Follow Us</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-soba-ink mb-1">{HEADING[lang]}</h2>
        <p className="text-sm text-soba-ink/60 mb-10">{label}</p>

        {/* カード */}
        <div className="bg-white rounded-2xl shadow-sm px-6 sm:px-10 py-10 flex flex-wrap items-center justify-center gap-10 sm:gap-14 mx-auto w-full max-w-md sm:max-w-none">
          {/* LINE */}
          <a
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LINE"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-[#06c755] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-white">
              <LineIcon />
            </div>
            <span className="text-xs font-medium text-soba-ink/70 group-hover:text-soba-ink transition-colors">
              {lineLabel}
            </span>
          </a>

          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-cream-50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <InstagramGradient />
            </div>
            <span className="text-xs font-medium text-soba-ink/70 group-hover:text-soba-ink transition-colors">
              {igLabel}
            </span>
          </a>

          {/* X */}
          <a
            href={xUrl}
            target={xUrl === '#' ? undefined : '_blank'}
            rel="noreferrer"
            aria-label="X"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-white">
              <XIcon />
            </div>
            <span className="text-xs font-medium text-soba-ink/70 group-hover:text-soba-ink transition-colors">
              {xLabel}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
