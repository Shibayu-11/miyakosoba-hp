import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import { newsNorenBanner } from '../config/newsNorenBanner';

export default function Recommend() {
  const { t } = useT();

  return (
    <section className="bg-cream-100 pt-8 pb-4 sm:pt-10 sm:pb-14">
      <div className="mx-auto w-full max-w-[1680px] px-0 sm:px-6 lg:px-10">
        <div className="relative">
          {/* 右端をぼかして、画面の外にまだ続くことを示す。
              のれんは最小1040pxなので、sm未満では必ずはみ出す。 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-cream-100 via-cream-100/70 to-transparent sm:hidden"
          />
          <div className="overflow-x-auto sm:overflow-visible">
          <div className={`relative w-full ${newsNorenBanner.minWidthClass}`}>
            <img
              src={newsNorenBanner.image}
              alt={newsNorenBanner.alt}
              className="block h-auto w-full select-none"
              draggable={false}
            />
            {newsNorenBanner.links.map((link) => {
              const className = `absolute block overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soba-red ${link.className}`;
              const poster = link.poster && (
                <img
                  src={link.poster}
                  alt=""
                  className="block h-full w-full object-cover"
                  draggable={false}
                />
              );

              return /^https?:\/\//i.test(link.to) ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className={className}
                >
                  {poster}
                </a>
              ) : (
                <Link key={link.to} to={link.to} aria-label={link.label} className={className}>
                  {poster}
                </Link>
              );
            })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 px-6 sm:justify-end sm:px-0 -mt-8 sm:-mt-12 relative z-20">
          <p className="inline-flex items-center gap-1 text-xs font-bold text-soba-ink/60 sm:hidden">
            {t.recommend.swipeHint}
            <ChevronRight size={14} className="animate-swipe-hint text-soba-red" />
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-1 text-sm font-bold text-soba-ink hover:text-soba-red transition-colors"
          >
            <span>{t.news.headingPage}</span>
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
