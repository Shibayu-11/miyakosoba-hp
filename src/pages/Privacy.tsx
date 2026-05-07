import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

export default function Privacy() {
  const { lang } = useT();
  const isJa = lang === 'ja';

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink mb-10">
          {isJa ? 'プライバシーポリシー' : 'Privacy Policy'}
        </h1>

        {isJa ? (
          <div className="prose prose-sm md:prose-base max-w-none text-soba-ink/85 leading-loose space-y-6">
            <p>
              都そば（以下「当社」）は、お客様の個人情報を尊重し、個人情報の保護に関する法律、その他関係法令およびガイドラインを遵守し、適切な取り扱いと保護に努めます。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">1. 個人情報の利用目的</h2>
            <p>当社は、以下の目的のために個人情報を取得・利用します。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>お問い合わせへの回答および対応</li>
              <li>採用応募に関する選考・連絡</li>
              <li>キャンペーンやサービスに関するご案内</li>
              <li>サービス改善および新サービス開発のための分析</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">2. 個人情報の第三者提供</h2>
            <p>当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">3. 個人情報の管理</h2>
            <p>当社は、個人情報への不正アクセス、紛失、破壊、改ざん、漏えい等を防止するため、適切な安全管理措置を講じます。</p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">4. Cookie等の利用について</h2>
            <p>当ウェブサイトでは、サービス改善およびアクセス解析のためにCookieを使用する場合があります。ブラウザの設定によりCookieの受け入れを拒否することができます。</p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">5. お問い合わせ窓口</h2>
            <p>本ポリシーに関するお問い合わせは、本部までご連絡ください。</p>

            <p className="text-xs text-soba-ink/60 mt-12">最終改定日：2026年5月7日</p>
            <p className="text-xs text-soba-ink/60">
              ※本ページは雛形です。実際の事業内容・法人情報に合わせて差し替えてください。
            </p>
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base max-w-none text-soba-ink/85 leading-loose space-y-6">
            <p>
              Miyako Soba ("we") respects your personal information and complies with the
              Act on the Protection of Personal Information and related laws and guidelines.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">1. Purpose of Use</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to inquiries</li>
              <li>Processing job applications</li>
              <li>Sending information about campaigns and services</li>
              <li>Service improvement and analytics</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">2. Sharing with Third Parties</h2>
            <p>We do not share personal information with third parties without your consent, except as required by law.</p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">3. Data Security</h2>
            <p>We take appropriate security measures to protect personal information from unauthorized access, loss, destruction, alteration, or disclosure.</p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">4. Cookies</h2>
            <p>This website may use cookies for service improvement and analytics. You can disable cookies via your browser settings.</p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">5. Contact</h2>
            <p>For questions about this policy, please contact our headquarters.</p>

            <p className="text-xs text-soba-ink/60 mt-12">Last updated: May 7, 2026</p>
            <p className="text-xs text-soba-ink/60">
              * This is a template. Replace with actual business and corporate details.
            </p>
          </div>
        )}
      </article>
      <Footer />
    </div>
  );
}
