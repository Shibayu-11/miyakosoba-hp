import { useMemo, useState } from 'react';
import { MapPin, ChevronRight, Search, Clock, CalendarX } from 'lucide-react';
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
  const [query, setQuery] = useState('');

  const byPref = useMemo(
    () => (pref === 'all' ? stores : stores.filter((s) => s.prefecture === PREF_TO_JP[pref])),
    [pref],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return byPref;
    return byPref.filter(
      (s) => s.name.toLowerCase().includes(q) || (s.prefecture + s.address).toLowerCase().includes(q),
    );
  }, [byPref, query]);

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
    <div className="min-h-screen bg-cream-50 md:ml-56">
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

      {/* 検索 + 一覧 + マップ */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* 検索ボックス */}
          <div className="relative mb-5">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-soba-ink/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.locations.searchPlaceholder}
              className="w-full bg-white border border-cream-200 rounded-sm pl-11 pr-4 py-3 text-sm text-soba-ink placeholder:text-soba-ink/40 focus:outline-none focus:border-soba-red transition-colors"
            />
          </div>

          {/* エリアフィルタ */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
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

          {/* 左: 店舗一覧 / 右: マップ */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* 店舗一覧（テーブル） */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              {visible.length > 0 ? (
                <div className="border border-cream-200 bg-white rounded-sm divide-y divide-cream-200">
                  {/* ヘッダー行（PC のみ） */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 text-xs font-bold text-soba-ink/60 bg-cream-100">
                    <div className="col-span-4">{t.locations.colName}</div>
                    <div className="col-span-8">{t.locations.colAddress}</div>
                  </div>

                  {visible.map((s) => (
                    <Link
                      key={s.id}
                      to={`/locations/${s.id}`}
                      className="group grid md:grid-cols-12 gap-1.5 md:gap-4 px-5 py-4 hover:bg-cream-50 transition-colors"
                    >
                      <div className="md:col-span-4 flex items-center justify-between gap-2 md:justify-start">
                        <h3 className="font-serif font-bold text-soba-ink group-hover:text-soba-red transition-colors">
                          {s.name}
                        </h3>
                        <ChevronRight size={14} className="text-soba-ink/40 group-hover:text-soba-red transition-colors shrink-0 md:hidden" />
                      </div>

                      <div className="md:col-span-8 space-y-1.5">
                        <p className="text-xs text-soba-ink/70 leading-relaxed flex items-start gap-1.5">
                          <MapPin size={12} className="mt-0.5 shrink-0 text-soba-red" />
                          <span>{s.prefecture}{s.address}</span>
                        </p>

                        <p className="text-xs text-soba-ink/70 leading-relaxed flex items-start gap-1.5">
                          <Clock size={12} className="mt-0.5 shrink-0 text-soba-red" />
                          <span>
                            {t.locations.hoursLabel}
                            {s.hoursWeekendHoliday
                              ? `${t.locations.weekday} ${s.hours} ／ ${t.locations.weekendHoliday} ${s.hoursWeekendHoliday}`
                              : s.hours}
                          </span>
                        </p>

                        <p className="text-xs text-soba-ink/70 leading-relaxed flex items-start gap-1.5">
                          <CalendarX size={12} className="mt-0.5 shrink-0 text-soba-red" />
                          <span>
                            {t.locations.closedLabel}{s.closed}
                            {s.closedNote && <> {t.locations.closedNote}</>}
                          </span>
                        </p>
                      </div>

                      {s.status === 'unverified' && (
                        <p className="md:col-span-12 text-[10px] text-soba-ink/50">{t.locations.unverified}</p>
                      )}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-cream-200 rounded-sm py-20 text-center text-sm text-soba-ink/50">
                  {t.locations.searchNoResults}
                </div>
              )}
            </div>

            {/* マップ（PC では右側に固定表示） */}
            <div className="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-24">
              <StoreMap visible={visible} zoom={9} />
              <p className="text-xs text-soba-ink/60 mt-3 text-center">{t.locations.pinHint}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
