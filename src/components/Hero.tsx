import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useT();
  return (
    <section className="relative bg-soba-ink text-white overflow-hidden">
      <div className="grid md:grid-cols-12 min-h-[640px]">
        <div className="md:col-span-5 relative flex items-center px-6 md:px-14 py-16 md:py-24 z-10 bg-soba-ink">
          <div className="max-w-md">
            <h1 className="font-serif text-5xl md:text-6xl font-black leading-[1.15] mb-6 tracking-wider">
              {t.hero.title1}<br />
              {t.hero.title2}
            </h1>
            <p className="text-base md:text-lg leading-loose text-cream-100/90 mb-10">
              {t.hero.sub1}<br />
              {t.hero.sub2}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-7 py-3.5 transition-colors shadow-md">
                <span className="font-bold tracking-wide">{t.hero.viewMenu}</span>
                <ChevronRight size={18} />
              </a>
              <Link to="/locations" className="inline-flex items-center gap-2 border border-white/80 hover:bg-white hover:text-soba-ink text-white px-7 py-3.5 transition-colors">
                <span className="font-bold tracking-wide">{t.hero.viewLocations}</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/hero-soba.jpg)' }}
          />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-soba-ink to-transparent hidden md:block" />
        </div>
      </div>
    </section>
  );
}
