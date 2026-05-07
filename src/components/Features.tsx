import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';

const DashiIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 28h44" />
    <path d="M14 28c0 12 8 22 18 22s18-10 18-22" />
    <path d="M22 14c-2 4 2 6 0 10" />
    <path d="M32 10c-2 4 2 6 0 10" />
    <path d="M42 14c-2 4 2 6 0 10" />
  </svg>
);

const SobaIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="32" r="22" />
    <path d="M16 26c4 4 8 0 16 4s12 0 16 4" />
    <path d="M16 34c4 4 8 0 16 4s12 0 16 4" />
    <path d="M20 42c4 2 8 0 12 2" />
  </svg>
);

const SpeedIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="36" r="20" />
    <path d="M32 36V22" />
    <path d="M32 36l10 6" />
    <path d="M26 8h12" />
    <path d="M32 8v6" />
  </svg>
);

export default function Features() {
  const { t } = useT();
  const features = [
    { icon: DashiIcon, title: t.features.dashi.title, description: t.features.dashi.desc, image: '/images/feature-dashi.jpg' },
    { icon: SobaIcon, title: t.features.soba.title, description: t.features.soba.desc, image: '/images/feature-soba.jpg' },
    { icon: SpeedIcon, title: t.features.speed.title, description: t.features.speed.desc, image: '/images/feature-shop.jpg' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-cream-50"
      style={{
        backgroundImage:
          'radial-gradient(circle at 12% 20%, rgba(164,35,31,0.06) 0, transparent 18%), radial-gradient(circle at 88% 75%, rgba(164,35,31,0.05) 0, transparent 22%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.features.label}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
            {t.features.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {features.map((f, i) => (
            <article key={i} className="flex flex-col">
              <div className="flex items-start gap-5 px-2 mb-5">
                <div className="text-soba-red shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-soba-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-soba-ink/75 leading-relaxed">{f.description}</p>
                </div>
              </div>
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-sm shadow-sm"
                style={{ backgroundImage: `url(${f.image})` }}
              />
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-soba-ink text-soba-ink hover:bg-soba-ink hover:text-white px-10 py-3 font-bold transition-colors"
          >
            <span>{t.features.cta}</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
