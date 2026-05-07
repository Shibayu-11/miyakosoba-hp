import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

const COMMITMENT_IMAGES = [
  '/images/feature-dashi.jpg',
  '/images/feature-soba.jpg',
  '/images/feature-shop.jpg',
];

export default function About() {
  const { t } = useT();

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* ページヘッダー */}
      <section className="bg-soba-ink text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">{t.about.headerLabel}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-snug mb-6">
            {t.about.headerTitle1}<br />
            {t.about.headerTitle2}
          </h1>
          <p className="text-cream-100/80 max-w-2xl leading-loose">
            {t.about.headerIntro}
          </p>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-20 md:py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.about.historyLabel}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
              {t.about.historyHeading}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream-200" aria-hidden />
            {t.about.timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-14 ${
                  i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <p className="font-serif text-3xl md:text-4xl font-black text-soba-red mb-2">{item.year}</p>
                  <h3 className="font-serif text-xl font-bold text-soba-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-soba-ink/75 leading-relaxed">{item.body}</p>
                </div>
                <div aria-hidden />
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-soba-red border-2 border-cream-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3つのこだわり詳細 */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.about.commitmentsLabel}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
              {t.about.commitmentsHeading}
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {t.about.commitments.map((c, i) => (
              <article
                key={i}
                className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center rounded-sm shadow-sm"
                  style={{ backgroundImage: `url(${COMMITMENT_IMAGES[i] ?? COMMITMENT_IMAGES[0]})` }}
                />
                <div>
                  <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">
                    0{i + 1} — {c.label}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-soba-ink mb-5 leading-snug">
                    {c.heading}
                  </h3>
                  <p className="text-sm text-soba-ink/80 leading-loose mb-4">{c.body}</p>
                  <p className="text-sm text-soba-ink/80 leading-loose">{c.body2}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* メッセージ */}
      <section className="py-20 md:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-4">{t.about.messageLabel}</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-soba-ink leading-relaxed mb-8">
            {t.about.messageHeading1}<br />
            {t.about.messageHeading2}
          </h2>
          <p className="text-sm text-soba-ink/80 leading-loose mb-10 whitespace-pre-line">
            {t.about.messageBody}
          </p>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-8 py-3.5 font-bold transition-colors shadow-sm"
          >
            <span>{t.about.messageCta}</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
