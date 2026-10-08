import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import { newsNorenBanner } from '../config/newsNorenBanner';

export default function Recommend() {
  const { t } = useT();

  return (
    <section className="bg-cream-100 pt-8 pb-4 sm:pt-10 sm:pb-14">
      <div className="mx-auto w-full max-w-[1680px] px-0 sm:px-6 lg:px-10">
        <div className="overflow-x-auto sm:overflow-visible">
          <div className={`relative w-full ${newsNorenBanner.minWidthClass}`}>
            <img
              src={newsNorenBanner.image}
              alt={newsNorenBanner.alt}
              className="block h-auto w-full select-none"
              draggable={false}
            />
            {newsNorenBanner.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-label={link.label}
                className={`absolute block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soba-red ${link.className}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end px-6 sm:px-0 -mt-8 sm:-mt-12 relative z-10">
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
