import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

const rows: { label: string; value: string }[] = [
  { label: '販売事業者', value: '株式会社 ◯◯◯◯' },
  { label: '代表者', value: '◯◯ ◯◯' },
  { label: '所在地', value: '〒◯◯◯-◯◯◯◯ 大阪府大阪市◯◯区◯◯◯-◯-◯' },
  { label: '電話番号', value: '06-0000-0000（受付：平日10:00〜17:00）' },
  { label: 'メールアドレス', value: 'info@example.com' },
  { label: '事業内容', value: '立ち食いそば店の経営' },
  { label: '販売価格', value: '各メニューに記載の価格（税込）' },
  { label: '商品代金以外の必要料金', value: '消費税はメニュー記載価格に含まれます。' },
  { label: 'お支払い方法', value: '現金、各種クレジットカード、電子マネー、QRコード決済' },
  { label: 'お支払い時期', value: '商品提供時' },
  { label: '商品の引渡し時期', value: 'ご注文受付後、店頭にて即時提供' },
  { label: '返品・交換について', value: '商品の特性上、返品・交換はお受けしておりません。万一品質に問題があった場合は店舗までお申し出ください。' },
];

export default function Tokutei() {
  const { lang } = useT();
  const isJa = lang === 'ja';

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink mb-10">
          {isJa ? '特定商取引法に基づく表記' : 'Specified Commercial Transactions Act'}
        </h1>

        {isJa ? (
          <>
            <table className="w-full text-sm border-t border-cream-200">
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-cream-200">
                    <th className="text-left align-top py-4 pr-6 font-serif font-bold text-soba-ink w-1/3">{r.label}</th>
                    <td className="py-4 text-soba-ink/85 leading-relaxed">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-soba-ink/60 mt-8">
              ※本ページは雛形です。実際の法人情報・連絡先・支払い方法等に合わせて差し替えてください。
            </p>
          </>
        ) : (
          <p className="text-soba-ink/85 leading-loose">
            This page is required under Japanese law (Act on Specified Commercial Transactions).
            Please refer to the Japanese version for the full disclosure of business details.
          </p>
        )}
      </article>
      <Footer />
    </div>
  );
}
