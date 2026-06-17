import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import { news } from '../data/news';

export default function News() {
  const { t, lang } = useT();
  const CAMPAIGN_IDS = ['miyakosoba-no-hi-202606', 'soba-udon-zoryo'];
  const latest = CAMPAIGN_IDS.map(id => news.find(n => n.id === id)).filter(Boolean) as typeof news;

  return (
    <section id="news" className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
            {t.news.headingHome}
          </h2>
        </div>

        {/* キャンペーンカードコンテナ */}
        <div className="rounded-2xl bg-[#d4b06a]/20 border border-[#c4a060]/30 p-6 md:p-10">
          <h3 className="font-serif text-2xl md:text-3xl font-black text-soba-ink text-center mb-8">
            {t.news.categories.campaign}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {latest.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="block overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
