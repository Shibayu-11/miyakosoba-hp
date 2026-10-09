import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import { homeCampaigns } from '../config/homeCampaigns';

export default function News() {
  const { t } = useT();

  return (
    <section id="news" className="pt-8 pb-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink">
            {t.news.headingHome}
          </h2>
        </div>

        {/* キャンペーンカードコンテナ */}
        <div className="rounded-2xl bg-[#d4b06a]/20 border border-[#c4a060]/30 p-6 md:p-10">
          <h3 className="font-serif text-2xl md:text-3xl font-black text-soba-ink text-center mb-8">
            {t.news.categories.campaign}
          </h3>
          <div className="mx-auto grid max-w-3xl gap-5 md:gap-6">
            {homeCampaigns.map((campaign) => {
              const className =
                'block overflow-hidden rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300';
              // バナーは全て同じ比率なので、切り抜かずそのまま並べる。
              const banner = (
                <img src={campaign.image} alt={campaign.label} className="block h-auto w-full" />
              );

              return /^https?:\/\//i.test(campaign.to) ? (
                <a
                  key={campaign.to}
                  href={campaign.to}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {banner}
                </a>
              ) : (
                <Link key={campaign.to} to={campaign.to} className={className}>
                  {banner}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
