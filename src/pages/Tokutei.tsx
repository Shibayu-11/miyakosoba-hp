import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

type Row = {
  label: string;
  value: React.ReactNode;
};

const linkClass = 'text-soba-red font-bold hover:underline underline-offset-2';

export default function Tokutei() {
  const { lang } = useT();
  const isJa = lang === 'ja';

  const rows: Row[] = [
    { label: '事業者名', value: '大阪誠和食品株式会社' },
    { label: '法人番号', value: '8120001072556' },
    { label: '所在地', value: '〒530-0012 大阪府大阪市北区芝田二丁目9番20号' },
    {
      label: 'お問い合わせ',
      value: (
        <>
          <Link to="/contact" className={linkClass}>お問い合わせ窓口</Link>
          <span className="block text-xs text-soba-ink/60 mt-1">
            店舗に関するお問い合わせは、ご利用店舗と日時を添えてご連絡ください。
          </span>
        </>
      ),
    },
    { label: '事業内容', value: 'そば・うどん・丼物等を提供する「都そば」の店舗運営' },
    { label: '販売価格', value: '各店舗の店頭メニューまたは本サイトのお品書きに、消費税込みの価格を表示しています。店舗や時期により、取扱商品・価格が異なる場合があります。' },
    { label: '商品代金以外の料金', value: '店頭での商品提供について、通常は商品代金以外の料金は発生しません。個別に追加料金が発生する場合は、ご注文前に店頭でご案内します。' },
    { label: 'お支払い方法', value: '各店舗で利用可能な現金その他の決済方法。対応する決済方法は店舗により異なりますので、店頭でご確認ください。' },
    { label: 'お支払い時期', value: '店頭でのご注文時または商品提供時' },
    { label: '商品の提供時期', value: '店頭でご注文を受け付けた後、調理が整い次第提供します。混雑状況や商品により、お時間をいただく場合があります。' },
    { label: '注文の取消し', value: '調理開始後のお客様都合による注文の取消しは、商品の性質上お受けできない場合があります。取消しをご希望の場合は、速やかに店舗スタッフへお申し出ください。' },
    { label: '返品・交換', value: '飲食物という商品の性質上、提供後のお客様都合による返品・交換はお受けしていません。商品違い、異物混入、品質上の問題等がある場合は、飲食を中止し、商品とレシートを保管のうえ、速やかに店舗スタッフまたはお問い合わせ窓口へお申し出ください。状況を確認し、適切に対応します。' },
  ];

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-soba-red text-xs font-bold tracking-[0.35em] mb-4">LEGAL NOTICE</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink mb-4">
          {isJa ? '特定商取引法に基づく表記' : 'Legal Notice for Commercial Transactions'}
        </h1>
        <p className="text-sm text-soba-ink/55 mb-10">
          {isJa ? '安心してお食事を楽しんでいただくために。' : 'Information for a safe and reliable dining experience.'}
        </p>

        {isJa ? (
          <>
            <div className="bg-white/75 border border-cream-200 rounded-sm p-5 md:p-6 mb-10 text-sm text-soba-ink/80 leading-loose">
              <p className="font-serif font-bold text-base text-soba-ink mt-0 mb-2">本サイトでの商品販売について</p>
              <p className="m-0">
                現在、本サイトでは通信販売、オンライン注文、予約または決済の申込みを受け付けていません。商品は各店舗の店頭でご注文・お支払いいただき、その場で提供しています。そのため、現時点では本サイト上の掲載情報は特定商取引法上の「通信販売の広告」には該当しませんが、お客様に取引条件を分かりやすくお伝えするため、店頭販売に関する情報を以下に掲載します。
              </p>
            </div>

            <table className="w-full text-sm border-t border-cream-200">
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-cream-200">
                    <th className="block sm:table-cell text-left align-top pt-4 sm:py-5 sm:pr-8 font-serif font-bold text-soba-ink sm:w-[30%]">
                      {row.label}
                    </th>
                    <td className="block sm:table-cell pt-2 pb-4 sm:py-5 text-soba-ink/80 leading-loose">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-10 text-sm text-soba-ink/70 leading-loose">
              <h2 className="font-serif text-lg font-bold text-soba-ink mb-2">今後オンライン販売等を開始する場合</h2>
              <p>
                当社が本サイトまたは外部サービスを通じて通信販売、オンライン注文、予約、事前決済等を開始する場合は、対象サービスの開始前に、販売責任者、連絡先、提供条件、キャンセル・返金条件その他法令上必要な事項を掲載し、本ページを更新します。外部サービス上で注文する場合は、そのサービス内に表示される取引条件もあわせてご確認ください。
              </p>
            </div>

            <p className="text-xs text-soba-ink/60 mt-12">最終改定日：2026年8月31日</p>
          </>
        ) : (
          <div className="text-soba-ink/85 leading-loose space-y-8">
            <div className="bg-white/75 border border-cream-200 rounded-sm p-5 md:p-6 text-sm">
              <h2 className="font-serif font-bold text-base text-soba-ink mt-0 mb-2">Sales through this Site</h2>
              <p className="m-0">
                This Site currently does not accept mail orders, online orders, reservations, or payments. Products are ordered, paid for, and served at each store. Accordingly, the Site does not currently constitute mail-order advertising under Japan's Act on Specified Commercial Transactions.
              </p>
            </div>
            <dl className="divide-y divide-cream-200 border-y border-cream-200 text-sm">
              <div className="py-5 grid sm:grid-cols-[30%_1fr] gap-2 sm:gap-8">
                <dt className="font-serif font-bold text-soba-ink">Business operator</dt>
                <dd>Osaka Seiwa Foods Co., Ltd.</dd>
              </div>
              <div className="py-5 grid sm:grid-cols-[30%_1fr] gap-2 sm:gap-8">
                <dt className="font-serif font-bold text-soba-ink">Address</dt>
                <dd>2-9-20 Shibata, Kita-ku, Osaka 530-0012, Japan</dd>
              </div>
              <div className="py-5 grid sm:grid-cols-[30%_1fr] gap-2 sm:gap-8">
                <dt className="font-serif font-bold text-soba-ink">Contact</dt>
                <dd><Link to="/contact" className={linkClass}>Contact desk</Link></dd>
              </div>
              <div className="py-5 grid sm:grid-cols-[30%_1fr] gap-2 sm:gap-8">
                <dt className="font-serif font-bold text-soba-ink">Prices and payment</dt>
                <dd>Tax-inclusive prices and accepted payment methods are displayed at each store. Products, prices, and payment methods may differ by location.</dd>
              </div>
              <div className="py-5 grid sm:grid-cols-[30%_1fr] gap-2 sm:gap-8">
                <dt className="font-serif font-bold text-soba-ink">Returns</dt>
                <dd>Due to the nature of prepared food, customer-requested returns or exchanges after service are not accepted. For an incorrect item or quality issue, stop consuming the item and promptly notify store staff or our contact desk.</dd>
              </div>
            </dl>
            <p className="text-xs text-soba-ink/60">Last updated: August 31, 2026</p>
          </div>
        )}
      </article>
      <Footer />
    </div>
  );
}
