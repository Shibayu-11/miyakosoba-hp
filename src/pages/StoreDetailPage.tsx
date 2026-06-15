import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, MapPin, ExternalLink, Clock, CalendarX, Phone, Train } from 'lucide-react';
import {
  APIProvider,
  Map,
  Marker,
} from '@vis.gl/react-google-maps';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { stores } from '../data/stores';
import { useT } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

const STORE_DETAIL_TEXT: Record<Lang, {
  address: string;
  access: string;
  accessBody: string;
  hours: string;
  closed: string;
  phone: string;
  phoneBody: string;
  sameArea: (prefecture: string) => string;
}> = {
  ja: {
    address: '住所',
    access: 'アクセス',
    accessBody: '最寄駅から徒歩圏内（詳細は本部に確認のうえ追記）',
    hours: '営業時間',
    closed: '定休日',
    phone: '電話番号',
    phoneBody: '本部に確認のうえ追記',
    sameArea: (prefecture) => `同じエリアの店舗 (${prefecture})`,
  },
  en: {
    address: 'Address',
    access: 'Access',
    accessBody: 'Walking distance from the nearest station (TBD).',
    hours: 'Hours',
    closed: 'Closed',
    phone: 'Phone',
    phoneBody: 'TBD',
    sameArea: (prefecture) => `Other stores in ${prefecture}`,
  },
  zh: {
    address: '地址',
    access: '交通方式',
    accessBody: '步行可达最近车站（详情请向总部确认后补充）',
    hours: '营业时间',
    closed: '休息日',
    phone: '电话号码',
    phoneBody: '请向总部确认后补充',
    sameArea: (prefecture) => `同地区门店 (${prefecture})`,
  },
  ko: {
    address: '주소',
    access: '교통편',
    accessBody: '가까운 역에서 도보 거리 (자세한 내용은 본사 확인 후 추가)',
    hours: '영업시간',
    closed: '정기 휴일',
    phone: '전화번호',
    phoneBody: '본사 확인 후 추가',
    sameArea: (prefecture) => `같은 지역의 매장 (${prefecture})`,
  },
};

export default function StoreDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useT();

  const store = stores.find((s) => s.id === id);
  if (!store) return <Navigate to="/locations" replace />;

  const dt = STORE_DETAIL_TEXT[lang];
  const sameArea = stores.filter((s) => s.prefecture === store.prefecture && s.id !== store.id).slice(0, 6);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.prefecture + store.address)}`;

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />

      <article className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <Link to="/locations" className="inline-flex items-center gap-1 text-xs text-soba-ink/60 hover:text-soba-red mb-8">
          <ChevronLeft size={14} />
          {t.locations.headingPage}
        </Link>

        <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-3">{store.prefecture}</p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-soba-ink leading-snug mb-3">
          {store.name}
        </h1>
        {store.status === 'unverified' && (
          <p className="text-xs text-soba-ink/50 mb-3">{t.locations.unverified}</p>
        )}

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-10">
          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-soba-red mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-soba-ink/60 mb-1">{dt.address}</p>
                <p className="text-soba-ink leading-relaxed">{store.prefecture}{store.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Train size={18} className="text-soba-red mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-soba-ink/60 mb-1">{dt.access}</p>
                <p className="text-soba-ink leading-relaxed">
                  {dt.accessBody}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={18} className="text-soba-red mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-soba-ink/60 mb-1">{dt.hours}</p>
                {store.hoursWeekendHoliday ? (
                  <p className="text-soba-ink leading-relaxed">
                    {t.locations.weekday} {store.hours}
                    <br />
                    {t.locations.weekendHoliday} {store.hoursWeekendHoliday}
                  </p>
                ) : (
                  <p className="text-soba-ink leading-relaxed">{store.hours}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarX size={18} className="text-soba-red mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-soba-ink/60 mb-1">{dt.closed}</p>
                <p className="text-soba-ink leading-relaxed">
                  {store.closed}
                  {store.closedNote && <><br />{t.locations.closedNote}</>}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} className="text-soba-red mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-soba-ink/60 mb-1">{dt.phone}</p>
                <p className="text-soba-ink leading-relaxed">
                  {dt.phoneBody}
                </p>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-6 py-3 font-bold transition-colors"
            >
              <span>{t.locations.openInMaps}</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="aspect-[4/3] bg-cream-100 rounded-sm overflow-hidden">
            {apiKey ? (
              <APIProvider apiKey={apiKey}>
                <Map
                  defaultCenter={store.position}
                  defaultZoom={15}
                  gestureHandling="greedy"
                  clickableIcons={false}
                >
                  <Marker position={store.position} />
                </Map>
              </APIProvider>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 text-center text-sm text-soba-ink/60">
                {t.locations.apiKeyMissing}
              </div>
            )}
          </div>
        </div>
      </article>

      {sameArea.length > 0 && (
        <section className="bg-cream-100 py-14">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-soba-ink mb-6">
              {dt.sameArea(store.prefecture)}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sameArea.map((s) => (
                <Link
                  key={s.id}
                  to={`/locations/${s.id}`}
                  className="group bg-white border border-cream-200 rounded-sm p-5 hover:border-soba-red transition-colors"
                >
                  <h3 className="font-serif font-bold text-soba-ink mb-2">{s.name}</h3>
                  <p className="text-xs text-soba-ink/70 leading-relaxed">{s.address}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
