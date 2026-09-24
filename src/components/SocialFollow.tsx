import { useT } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';
import { socialLinks } from '../config/socialLinks';

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

export default function SocialFollow() {
  const { lang } = useT();

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
            href={socialLinks.line}
            aria-label="LINE"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/images/social-line.png" alt="" className="w-16 h-16 object-contain" />
            </div>
            <span className="text-xs font-medium text-soba-ink/70 group-hover:text-soba-ink transition-colors">
              {lineLabel}
            </span>
          </a>

          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            aria-label="Instagram"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/images/social-instagram.png" alt="" className="w-14 h-14 object-contain" />
            </div>
            <span className="text-xs font-medium text-soba-ink/70 group-hover:text-soba-ink transition-colors">
              {igLabel}
            </span>
          </a>

          {/* X */}
          <a
            href={socialLinks.x}
            aria-label="X"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/images/social-x-black.svg" alt="" className="w-11 h-11 object-contain" />
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
