import { ChevronRight } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

export default function Recruit() {
  const { t } = useT();
  return (
    <section id="recruit" className="relative bg-gradient-to-br from-soba-red-dark via-[#7a2a1c] to-soba-ink text-white overflow-hidden">
      <div className="min-h-[360px] flex items-center justify-center px-6 py-16 text-center">
        <div className="max-w-xl">
          <p className="text-cream-100 text-xs font-bold tracking-[0.4em] mb-4">{t.recruit.label}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-snug mb-5">
            {t.recruit.heading}
          </h2>
          <p className="text-sm md:text-base text-cream-100/80 leading-loose mb-8">
            {t.recruit.body}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-cream-50 hover:bg-white text-soba-ink px-8 py-3.5 font-bold transition-colors shadow-md"
          >
            <span>{t.recruit.cta}</span>
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
