import { ChevronRight } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

export default function Recruit() {
  const { t } = useT();
  return (
    <section id="recruit" className="relative bg-soba-ink text-white overflow-hidden">
      <div className="grid md:grid-cols-12 min-h-[360px]">
        <div
          className="md:col-span-7 relative bg-cover bg-center min-h-[240px] md:min-h-[360px]"
          style={{ backgroundImage: 'url(/images/recruit.jpg)' }}
        >
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-soba-ink to-transparent hidden md:block" />
        </div>
        <div className="md:col-span-5 flex items-center px-6 md:px-12 py-12 md:py-16">
          <div>
            <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">{t.recruit.label}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-snug mb-5">
              {t.recruit.heading}
            </h2>
            <p className="text-sm md:text-base text-cream-100/80 leading-loose mb-8">
              {t.recruit.body}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-8 py-3.5 font-bold transition-colors shadow-md"
            >
              <span>{t.recruit.cta}</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
