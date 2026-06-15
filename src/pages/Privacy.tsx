import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

export default function Privacy() {
  const { lang } = useT();
  const isJa = lang === 'ja';

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink mb-10">
          {isJa ? 'プライバシーポリシー' : 'Privacy Policy'}
        </h1>

        {isJa ? (
          <div className="prose prose-sm md:prose-base max-w-none text-soba-ink/85 leading-loose space-y-6">
            <p>
              大阪誠和食品株式会社（以下「当社」）は、当社が運営する立ち食いそば「都そば」の店舗および本ウェブサイト（以下「本サイト」）におけるお客様の個人情報を適切に取り扱うことが、お客様からの信頼にお応えするうえで重要な責務であると認識しております。当社は、個人情報の保護に関する法律（個人情報保護法）その他関係法令およびガイドラインを遵守し、以下のプライバシーポリシー（以下「本ポリシー」）に基づき、個人情報の適切な取得、利用、管理を行います。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">1. 個人情報の定義</h2>
            <p>
              本ポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できる情報、および特定の個人を識別できる情報と容易に照合でき、それにより特定の個人を識別できることとなるものを含みます。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">2. 取得する個人情報の項目および取得方法</h2>
            <p>当社は、お客様からの情報提供や本サイトのご利用に際して、主に以下の情報を取得します。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>お問い合わせ・ご意見フォームに入力される、氏名、メールアドレス、電話番号、ご住所、ご利用店舗、ご利用日時、お問い合わせ内容等の情報</li>
              <li>採用エントリーに際してご提出いただく、氏名、年齢、連絡先、学歴・職歴、写真その他選考に必要な情報</li>
              <li>本サイトのご利用時に自動的に記録される、IPアドレス、ブラウザの種類、OS、参照元URL、閲覧ページ、閲覧日時等のアクセスログ情報</li>
              <li>Cookie等を通じて取得される端末識別情報および本サイトの利用状況に関する情報</li>
              <li>店舗にお越しのお客様から、防犯目的の防犯カメラにより取得される映像情報（店舗に設置がある場合）</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">3. 個人情報の利用目的</h2>
            <p>当社は、取得した個人情報を、あらかじめ同意いただいた範囲内で、以下の目的のために利用します。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>お問い合わせ・ご意見・ご相談への回答および対応のため</li>
              <li>採用応募に関する選考、合否のご連絡、入社手続きのため</li>
              <li>新メニュー、キャンペーン、店舗情報、採用情報等に関するご案内のため</li>
              <li>本サイトの利用状況の分析、不具合の調査・改善および新サービスの検討・開発のため</li>
              <li>店舗における防犯・事故防止、トラブル発生時の状況確認のため</li>
              <li>本ポリシーまたは当社が別途定める利用規約等への違反行為への対応のため</li>
              <li>その他、上記利用目的に付随する目的のため</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">4. 利用目的の変更</h2>
            <p>
              当社は、利用目的が変更前と関連性を有すると合理的に認められる範囲において、個人情報の利用目的を変更することがあります。利用目的を変更する場合は、変更後の利用目的を本サイト上に公表するか、またはお客様に通知いたします。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">5. 個人情報の第三者提供</h2>
            <p>当社は、以下の場合を除き、あらかじめお客様の同意を得ずに、個人情報を第三者に提供することはありません。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              <li>合併、会社分割、事業譲渡その他の事由による事業の承継に伴って個人情報が提供される場合</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">6. 個人情報の取扱いの委託</h2>
            <p>
              当社は、個人情報の取扱いの全部または一部を外部の業者に委託する場合があります。この場合、当社は、委託先に対して必要かつ適切な監督を行い、個人情報の適切な管理・保護に努めます。委託先の例としては、本サイトのサーバー運用・保守を行う事業者、アクセス解析サービスの提供事業者等が挙げられます。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">7. 個人情報の安全管理</h2>
            <p>
              当社は、取得した個人情報の漏えい、滅失またはき損の防止その他の安全管理のため、組織的、人的、物理的および技術的な観点から必要かつ適切な措置を講じます。また、個人情報を取り扱う従業者に対して、必要かつ適切な監督を行います。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">8. 開示・訂正・利用停止等のご請求について</h2>
            <p>
              お客様は、当社が保有する自己の個人情報について、個人情報保護法の定めに基づき、開示、内容の訂正・追加・削除、利用停止、消去および第三者提供の停止（以下「開示等」）を請求することができます。開示等のご請求は、本人確認のうえ対応いたしますので、後述のお問い合わせ窓口よりご連絡ください。なお、法令の定めにより、開示等のご請求にお応えできない場合がございます。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">9. Cookieおよびアクセス解析ツールの利用について</h2>
            <p>
              本サイトでは、お客様の利便性向上、コンテンツの改善およびアクセス状況の分析を目的として、Cookieおよびこれに類する技術を使用する場合があります。また、本サイトのアクセス状況を把握するため、Google Analyticsを利用する場合があります。Google Analyticsはトラフィックデータの収集のためにCookieを使用しますが、これにより個人を特定する情報は取得されません。これらのデータはGoogle社のプライバシーポリシーに基づいて管理されます。お客様は、ブラウザの設定によりCookieの送受信を拒否することができますが、その場合、本サイトの一部機能がご利用いただけなくなることがあります。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">10. 外部サービス・SNSとの連携について</h2>
            <p>
              本サイトでは、LINE、Instagram、Xなどの外部サービスへのリンクを掲載しています。これらの外部サービスにおける情報の取扱いについては、各サービス提供者のプライバシーポリシーが適用されますので、各サービスの規約等をご確認ください。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">11. 未成年者の個人情報について</h2>
            <p>
              満18歳未満のお客様が当社に個人情報をご提供される場合には、保護者の同意を得たうえでご提供いただくものとします。当社は、未成年者からの個人情報の取得が判明した場合、必要に応じて当該情報の取扱いについて保護者に確認を行うことがあります。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">12. 本ポリシーの改定</h2>
            <p>
              当社は、法令の変更や事業内容の変化等に応じて、本ポリシーの内容を予告なく変更することがあります。変更後のプライバシーポリシーは、本サイトに掲載した時点から効力を生じるものとします。重要な変更を行う場合には、本サイト上で分かりやすく告知するよう努めます。
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">13. お問い合わせ窓口</h2>
            <p>
              本ポリシーの内容、個人情報の開示等のご請求その他個人情報の取扱いに関するお問い合わせは、
              <Link to="/contact" className="text-soba-red font-bold hover:underline">お問い合わせフォーム</Link>
              またはお電話（0120-123-123／受付時間 10:00〜18:00、土日祝日を含む）にて、運営会社である大阪誠和食品株式会社までご連絡ください。
            </p>

            <p className="text-xs text-soba-ink/60 mt-12">制定日：2024年4月1日　最終改定日：2026年6月15日</p>
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base max-w-none text-soba-ink/85 leading-loose space-y-6">
            <p>
              Osaka Seiwa Foods Co., Ltd. ("we", "us", or "our"), the operator of the stand-up soba
              chain "Miyako Soba" and this website (the "Site"), recognizes that the appropriate
              handling of our customers' personal information is essential to maintaining your
              trust. We comply with Japan's Act on the Protection of Personal Information and
              related laws and guidelines, and handle personal information appropriately in
              accordance with this Privacy Policy (this "Policy").
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">1. Definition of Personal Information</h2>
            <p>
              In this Policy, "personal information" means information about a living individual
              that can identify a specific individual, such as name, date of birth, address,
              telephone number, or email address, as well as information that can be readily
              combined with other information to identify a specific individual.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">2. Information We Collect</h2>
            <p>We may collect the following information when you contact us or use the Site.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Information you submit through our contact/feedback form, such as your name, email address, phone number, address, store of interest, intended visit date, and the content of your inquiry</li>
              <li>Information you submit when applying for a job, such as your name, age, contact details, education and work history, and a photograph</li>
              <li>Access log data automatically recorded when you use the Site, such as IP address, browser type, operating system, referrer URL, pages viewed, and access times</li>
              <li>Device identifiers and usage information collected via cookies and similar technologies</li>
              <li>Video footage captured by in-store security cameras for crime-prevention purposes, where installed</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">3. Purpose of Use</h2>
            <p>We use the personal information we collect, within the scope you have agreed to, for the following purposes.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to inquiries, comments, and consultations</li>
              <li>To process job applications, including screening, notifying applicants of results, and onboarding</li>
              <li>To provide information about new menu items, campaigns, store information, and recruitment</li>
              <li>To analyze use of the Site, investigate and fix issues, and develop new services</li>
              <li>To prevent crime and accidents at our stores and to investigate incidents</li>
              <li>To respond to violations of this Policy or our terms of use</li>
              <li>For other purposes incidental to the above</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">4. Changes to the Purpose of Use</h2>
            <p>
              We may change the purpose of use of personal information to the extent that the new
              purpose is reasonably related to the original purpose. If we change the purpose of
              use, we will announce the revised purpose on the Site or notify you directly.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">5. Sharing with Third Parties</h2>
            <p>We will not provide personal information to third parties without your prior consent, except in the following cases.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Where required by law</li>
              <li>Where necessary to protect a person's life, body, or property and obtaining consent is difficult</li>
              <li>Where cooperation with a national or local government agency is necessary for the performance of duties prescribed by law, and obtaining consent would impede that performance</li>
              <li>In connection with a merger, company split, business transfer, or other succession of business</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">6. Outsourcing of Personal Information Handling</h2>
            <p>
              We may outsource all or part of the handling of personal information to external
              service providers, such as those operating and maintaining the Site's servers or
              providing analytics services. In such cases, we exercise necessary and appropriate
              supervision over such providers to ensure the proper management and protection of
              personal information.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">7. Data Security</h2>
            <p>
              We implement necessary and appropriate organizational, human, physical, and technical
              measures to prevent the leakage, loss, or damage of personal information, and to
              otherwise ensure its security. We also provide necessary and appropriate supervision
              to our employees who handle personal information.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">8. Disclosure, Correction, and Suspension of Use</h2>
            <p>
              You may request the disclosure, correction, addition, deletion, suspension of use,
              erasure, or suspension of third-party provision of your personal information that we
              hold, in accordance with the Act on the Protection of Personal Information. We will
              respond to such requests after verifying your identity. Please contact us using the
              details below. Please note that we may be unable to respond to certain requests as
              permitted by law.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">9. Cookies and Analytics Tools</h2>
            <p>
              The Site may use cookies and similar technologies to improve your experience, improve
              our content, and analyze how the Site is used. We may also use Google Analytics to
              understand traffic to the Site. Google Analytics uses cookies to collect traffic data
              but does not collect information that identifies you personally. This data is managed
              in accordance with Google's privacy policy. You can disable cookies through your
              browser settings, although doing so may limit some features of the Site.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">10. Links to External Services and Social Media</h2>
            <p>
              The Site contains links to external services such as LINE, Instagram, and X. The
              handling of information on these external services is governed by the privacy
              policies of the respective service providers. Please review their terms before use.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">11. Information of Minors</h2>
            <p>
              If you are under 18 years of age, please obtain the consent of a parent or guardian
              before providing us with any personal information. Where we become aware that
              personal information has been provided by a minor, we may confirm the handling of
              that information with their parent or guardian as necessary.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">12. Changes to This Policy</h2>
            <p>
              We may revise this Policy without prior notice in response to changes in laws or our
              business. Any revised Policy will take effect from the time it is posted on the Site.
              We will make reasonable efforts to clearly announce any material changes on the Site.
            </p>

            <h2 className="font-serif text-xl font-bold text-soba-ink mt-10 mb-3">13. Contact</h2>
            <p>
              For questions about this Policy, requests regarding the disclosure of personal
              information, or any other matters related to the handling of personal information,
              please contact Osaka Seiwa Foods Co., Ltd. via our{' '}
              <Link to="/contact" className="text-soba-red font-bold hover:underline">contact form</Link>
              {' '}or by phone at 0120-123-123 (10:00–18:00, including weekends and holidays).
            </p>

            <p className="text-xs text-soba-ink/60 mt-12">Established: April 1, 2024　Last updated: June 15, 2026</p>
          </div>
        )}
      </article>
      <Footer />
    </div>
  );
}
