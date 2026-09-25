import { ChevronRight, Clock, MapPin, Phone, Soup, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

const POINTS = [
  {
    icon: Users,
    title: '未経験の方も歓迎',
    body: '接客や調理が初めてでも、できることから少しずつ覚えていただけます。',
  },
  {
    icon: Clock,
    title: '働く時間は相談OK',
    body: '朝・昼・夕方以降など、店舗の募集状況に合わせてご相談ください。',
  },
  {
    icon: Soup,
    title: 'まかない・食事補助あり',
    body: '都そばの味を身近に感じながら、無理なく働ける環境を目指しています。',
  },
  {
    icon: MapPin,
    title: '関西各地の店舗で募集',
    body: '大阪・京都・兵庫を中心に、お住まいや通いやすさに合わせてご相談いただけます。',
  },
];

const JOBS = [
  {
    role: '店舗スタッフ',
    type: 'パート・アルバイト',
    details: ['接客・レジ対応', 'そば、うどん、丼物などの簡単な調理', '仕込み・洗い場・店内清掃'],
  },
  {
    role: '時間帯責任者候補',
    type: '経験者歓迎',
    details: ['開店・閉店作業の補助', '商品の提供品質チェック', '新人スタッフのサポート'],
  },
];

export default function RecruitPage() {
  const { t } = useT();

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />

      <section className="relative overflow-hidden bg-soba-ink text-white py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/feature-shop.jpg)' }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soba-ink via-soba-ink/90 to-soba-ink/60" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-soba-red text-xs font-bold tracking-[0.4em] mb-4">RECRUIT</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6">
            都そばで、<br className="sm:hidden" />
            一緒に働きませんか。
          </h1>
          <p className="text-cream-100/85 max-w-2xl leading-loose">
            関西のまちで親しまれてきた都そば。お客様の「いつもの一杯」を支える店舗スタッフを募集しています。
            接客が好きな方、飲食のお仕事に挑戦したい方、空いた時間を活かしたい方を歓迎します。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">WORK STYLE</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-soba-ink">働きやすいポイント</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-white border border-cream-200 rounded-sm p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-soba-red text-white flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-soba-ink mb-3">{point.title}</h3>
                  <p className="text-sm text-soba-ink/75 leading-relaxed">{point.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">JOB</p>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-soba-ink leading-snug mb-5">
                募集しているお仕事
              </h2>
              <p className="text-sm text-soba-ink/75 leading-loose">
                募集店舗・勤務条件は時期により異なります。詳しい内容はお問い合わせ窓口までご連絡ください。
              </p>
            </div>

            <div className="lg:col-span-8 space-y-5">
              {JOBS.map((job) => (
                <article key={job.role} className="border border-cream-200 bg-cream-50 rounded-sm p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="bg-soba-red text-white text-xs font-bold px-3 py-1 rounded-sm">{job.type}</span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-soba-ink">{job.role}</h3>
                  </div>
                  <ul className="grid sm:grid-cols-3 gap-3">
                    {job.details.map((detail) => (
                      <li key={detail} className="text-sm text-soba-ink/80 bg-white border border-cream-200 px-4 py-3">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-cream-200 rounded-sm p-7 md:p-10">
            <div className="text-center mb-8">
              <p className="text-soba-red text-xs font-bold tracking-[0.3em] mb-3">ENTRY</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-soba-ink">応募・お問い合わせ</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-cream-50 border border-cream-200 p-6 text-center">
                <p className="font-bold text-soba-ink mb-3">お電話でのお問い合わせ</p>
                <p className="flex items-center justify-center gap-2 font-serif text-2xl md:text-3xl font-black text-soba-ink mb-2">
                  <Phone size={24} className="text-soba-red" />
                  {t.contact.phoneNumber}
                </p>
                <p className="text-sm text-soba-ink/65">受付時間：{t.contact.phoneHours}</p>
              </div>

              <div className="bg-cream-50 border border-cream-200 p-6 text-center flex flex-col items-center justify-center">
                <p className="font-bold text-soba-ink mb-4">フォームからのお問い合わせ</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-8 py-3 font-bold transition-colors shadow-sm"
                >
                  <span>お問い合わせ窓口へ</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            <p className="mt-6 text-xs text-center text-soba-ink/55 leading-relaxed">
              店舗により募集状況・勤務時間・待遇が異なります。応募時にご希望の店舗や時間帯をお知らせください。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
