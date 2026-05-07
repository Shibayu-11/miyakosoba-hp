import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import { getPopular } from '../data/menu';

export default function Menu() {
  const { t, lang } = useT();
  const items = getPopular();

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">{t.menu.label}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
            {t.menu.heading}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-cream-50 rounded-md overflow-hidden border border-cream-200 hover:shadow-md transition-shadow"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-2 gap-2">
                  <h3 className="font-serif text-lg font-bold text-soba-ink">{item.name[lang]}</h3>
                  <p className="text-base font-bold text-soba-ink whitespace-nowrap">
                    {item.price}<span className="text-xs font-medium ml-0.5">{t.menu.yen}</span>
                  </p>
                </div>
                {item.badge && (
                  <span className="inline-block bg-soba-red text-white text-[10px] font-bold px-2 py-0.5 rounded-sm mb-2 tracking-wider">
                    {item.badge[lang]}
                  </span>
                )}
                <p className="text-xs text-soba-ink/70 leading-relaxed">{item.description[lang]}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 border border-soba-ink text-soba-ink hover:bg-soba-ink hover:text-white px-10 py-3 font-bold transition-colors"
          >
            <span>{t.menu.cta}</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
