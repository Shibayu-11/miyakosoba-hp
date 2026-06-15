import { useT } from '../i18n/LanguageContext';
import { LANGS } from '../i18n/translations';

export default function LanguageToggle() {
  const { lang, setLang } = useT();
  return (
    <div className="flex items-center gap-1 text-xs font-bold tracking-wider">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => setLang(l)}
            className={`uppercase transition-colors ${
              lang === l ? 'text-soba-red' : 'text-soba-ink/50 hover:text-soba-ink'
            }`}
            aria-pressed={lang === l}
          >
            {l}
          </button>
          {i < LANGS.length - 1 && <span className="text-soba-ink/30">/</span>}
        </span>
      ))}
    </div>
  );
}
