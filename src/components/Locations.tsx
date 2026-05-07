import { useMemo } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stores } from '../data/stores';
import { useT } from '../i18n/LanguageContext';
import StoreMap from './StoreMap';

export default function Locations() {
  const { t } = useT();

  const counts = useMemo(() => ({
    osaka: stores.filter((s) => s.prefecture === '大阪府').length,
    kyoto: stores.filter((s) => s.prefecture === '京都府').length,
    hyogo: stores.filter((s) => s.prefecture === '兵庫県').length,
  }), []);

  return (
    <section id="locations" className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="flex gap-6">
            <div className="shrink-0 w-16 h-16 rounded-full border-2 border-soba-red flex items-center justify-center">
              <MapPin size={26} className="text-soba-red" />
            </div>
            <div>
              <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.locations.label}</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-soba-ink leading-snug mb-5">
                {t.locations.headingHome}
              </h2>
              <p className="text-sm text-soba-ink/75 leading-relaxed mb-6">
                {t.locations.subText}<br />
                {t.locations.foundedNote}
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-soba-ink/80 mb-7 border-l-2 border-soba-red pl-4">
                <span><span className="font-serif font-bold text-soba-ink">{counts.osaka}</span> {t.locations.summaryOsaka}</span>
                <span><span className="font-serif font-bold text-soba-ink">{counts.kyoto}</span> {t.locations.summaryKyoto}</span>
                <span><span className="font-serif font-bold text-soba-ink">{counts.hyogo}</span> {t.locations.summaryHyogo}</span>
              </div>

              <p className="text-xs text-soba-ink/60 leading-relaxed mb-7">
                {t.locations.pinHint}
              </p>
              <Link
                to="/locations"
                className="inline-flex items-center gap-3 bg-soba-red hover:bg-soba-red-dark text-white px-8 py-3 font-bold transition-colors"
              >
                <span>{t.locations.ctaList}</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          <StoreMap visible={stores} />
        </div>
      </div>
    </section>
  );
}
