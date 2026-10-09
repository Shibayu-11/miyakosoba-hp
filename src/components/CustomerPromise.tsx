import { Smile, MessageCircleHeart, Utensils } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

const PROMISES = {
  ja: {
    label: 'OUR PROMISE',
    heading: 'お客様への約束',
    intro: '都そばで過ごすひとときが、気持ちよい時間になるように。従業員全員で、心を込めてお迎えします。',
    items: [
      {
        title: '明るく笑顔で',
        body: '私たちは「明るく笑顔で」をモットーに、接客に心掛けます。',
      },
      {
        title: '感謝の言葉を込めて',
        body: '「いらっしゃいませ」「ありがとうございました」の言葉に、感謝の気持ちを込めて接客に心掛けます。',
      },
      {
        title: '気持ちよく食べていただく',
        body: '私たちはお客様に気持ちよく食べていただくよう、接客に心掛けます。',
      },
    ],
    closing: '以上、従業員全員お約束いたします。',
  },
  en: {
    label: 'OUR PROMISE',
    heading: 'Our Promise to Guests',
    intro: 'We welcome every guest with care so each visit to Miyako Soba feels warm and comfortable.',
    items: [
      { title: 'Bright smiles', body: 'We serve every guest with a bright, welcoming smile.' },
      { title: 'Words of thanks', body: 'We put gratitude into every “welcome” and “thank you.”' },
      { title: 'A comfortable meal', body: 'We do our best so every guest can enjoy their meal comfortably.' },
    ],
    closing: 'Every member of our team promises this.',
  },
  zh: {
    label: 'OUR PROMISE',
    heading: '给顾客的承诺',
    intro: '为了让您在都荞麦度过舒适的用餐时光，我们全体员工用心迎接每一位顾客。',
    items: [
      { title: '明朗微笑', body: '我们以“明朗微笑”为信条，用心接待顾客。' },
      { title: '传达感谢', body: '我们把感谢之情融入“欢迎光临”“谢谢惠顾”的每一句话中。' },
      { title: '舒适用餐', body: '我们努力让每位顾客都能安心、愉快地用餐。' },
    ],
    closing: '以上，是我们全体员工的承诺。',
  },
  ko: {
    label: 'OUR PROMISE',
    heading: '고객님께 드리는 약속',
    intro: '미야코소바에서 보내는 시간이 기분 좋은 식사 시간이 되도록 전 직원이 정성을 다해 맞이하겠습니다.',
    items: [
      { title: '밝은 미소로', body: '저희는 “밝은 미소”를 모토로 고객 응대에 힘쓰겠습니다.' },
      { title: '감사의 마음을 담아', body: '“어서 오세요”, “감사합니다”라는 말에 감사의 마음을 담아 응대하겠습니다.' },
      { title: '기분 좋은 식사', body: '고객님께서 기분 좋게 식사하실 수 있도록 응대에 힘쓰겠습니다.' },
    ],
    closing: '이상, 전 직원이 약속드립니다.',
  },
};

const ICONS = [Smile, MessageCircleHeart, Utensils];

export default function CustomerPromise() {
  const { lang } = useT();
  const copy = PROMISES[lang];

  return (
    <section className="relative overflow-hidden bg-cream-100 py-14 md:py-24">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-soba-red/10 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-[#d4b06a]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.35em] text-soba-red">{copy.label}</p>
          <h2 className="font-serif text-3xl font-black leading-snug text-soba-ink md:text-4xl">
            {copy.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-loose text-soba-ink/70 md:text-base">
            {copy.intro}
          </p>
        </div>

        <div className="rounded-3xl border border-[#d4b06a]/35 bg-white/70 p-5 shadow-sm backdrop-blur md:p-8">
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {copy.items.map((item, index) => {
              const Icon = ICONS[index];
              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-cream-200 bg-gradient-to-br from-[#fffaf0] to-[#f4e6c7] p-6"
                >
                  <span className="absolute right-4 top-3 font-serif text-6xl font-black leading-none text-soba-red/10">
                    {index + 1}
                  </span>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-soba-red text-white shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-black text-soba-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-loose text-soba-ink/75">{item.body}</p>
                </article>
              );
            })}
          </div>

          <p className="mt-7 whitespace-nowrap text-center font-serif text-[0.95rem] font-black tracking-tight text-soba-ink sm:text-lg sm:tracking-wide">
            {copy.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
