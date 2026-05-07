import { useMemo, useState } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoreMap from '../components/StoreMap';
import { stores } from '../data/stores';
import { useT } from '../i18n/LanguageContext';

const PREF_KEYS = ['all', 'osaka', 'kyoto', 'hyogo'] as const;
type PrefKey = (typeof PREF_KEYS)[number];

const PREF_TO_JP: Record<Exclude<PrefKey, 'all'>, '大阪府' | '京都府' | '兵庫県'> = {
  osaka: '大阪府',
  kyoto: '京都府',
  hyogo: '兵庫県',
};

export default function LocationsPage() {
  const { t } = useT();
  const [pref, setPref] = useState<PrefKey>('all');

  const visible = useMemo(
    () => (pref === 'all' ? stores : stores.filter((s) => s.prefecture === PREF_TO_JP[pref])),
    [pref],
  );

  const counts = useMemo(() => ({
    osaka: stores.filter((s) => s.prefecture === '大阪府').length,
    kyoto: stores.filter((s) => s.prefecture === '京都府').length,
    hyogo: stores.filter((s) => s.prefecture === '兵庫県').length,
  }), []);

  const labelFor = (k: PrefKey) => {
    if (k === 'all') return t.locations.filterAll;
    if (k === 'osaka') return t.locations.summaryOsaka;
    if (k === 'kyoto') return t.locations.summaryKyoto;
    return t.locations.summaryHyogo;
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* ページヘッダー */}
      <section className="bg-soba-ink text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">{t.locations.label}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-snug mb-5">
            {t.locations.headingPage}
          </h1>
          <p className="text-cream-100/80 max-w-2xl leading-loose">
            {t.locations.pageIntro}
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 text-sm text-cream-100/90">
            <span><span className="font-serif font-bold text-2xl text-white mr-1.5">{counts.osaka}</span>{t.locations.summaryOsaka}</span>
            <span><span className="font-serif font-bold text-2xl text-white mr-1.5">{counts.kyoto}</span>{t.locations.summaryKyoto}</span>
            <span><span className="font-serif font-bold text-2xl text-white mr-1.5">{counts.hyogo}</span>{t.locations.summaryHyogo}</span>
          </div>
        </div>
      </section>

      {/* マップ */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <StoreMap visible={visible} zoom={9} />
            <p className="text-xs text-soba-ink/60 mt-3 text-center">{t.locations.pinHint}</p>
          </div>
        </div>
      </section>

      {/* フィルタ + リスト */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {PREF_KEYS.map((k) => (
              <button
                key={k}
                onClick={() => setPref(k)}
                className={`text-sm font-bold px-5 py-2 border transition-colors ${
                  pref === k
                    ? 'bg-soba-ink text-white border-soba-ink'
                    : 'bg-white text-soba-ink border-cream-200 hover:border-soba-ink'
                }`}
              >
                {labelFor(k)}
                {k !== 'all' && (
                  <span className="ml-1.5 text-xs opacity-70">({counts[k]})</span>
                )}
              </button>
            ))}
            <span className="ml-auto text-xs text-soba-ink/60">
              {t.locations.showing(visible.length, stores.length)}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((s) => (
              <Link
                key={s.id}
                to={`/locations/${s.id}`}
                className="group bg-white border border-cream-200 rounded-sm p-5 hover:border-soba-red transition-colors"
              >
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3 className="font-serif font-bold text-soba-ink">{s.name}</h3>
                  <ChevronRight size={14} className="text-soba-ink/40 group-hover:text-soba-red transition-colors shrink-0" />
                </div>
                <p className="text-xs text-soba-ink/70 leading-relaxed flex items-start gap-1.5">
                  <MapPin size={12} className="mt-0.5 shrink-0 text-soba-red" />
                  <span>{s.prefecture}{s.address}</span>
                </p>
                {s.status === 'unverified' && (
                  <p className="mt-2 text-[10px] text-soba-ink/50">{t.locations.unverified}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
