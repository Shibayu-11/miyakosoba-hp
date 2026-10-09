import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

const headingClass = 'font-serif text-xl font-bold text-soba-ink mt-10 mb-3';
const linkClass = 'text-soba-red font-bold hover:underline underline-offset-2';

export default function Privacy() {
  const { lang } = useT();
  const isJa = lang === 'ja';

  return (
    <div className="min-h-screen bg-cream-50 md:ml-56">
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-soba-red text-xs font-bold tracking-[0.35em] mb-4">PRIVACY POLICY</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-soba-ink mb-4">
          {isJa ? 'プライバシーポリシー' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-soba-ink/55 mb-10">
          {isJa ? 'お客様との信頼を、毎日の一杯と同じように大切に。' : 'We value your trust as much as every bowl we serve.'}
        </p>

        {isJa ? (
          <div className="prose prose-sm md:prose-base max-w-none text-soba-ink/85 leading-loose space-y-6">
            <p>
              大阪誠和食品株式会社（以下「当社」）は、立ち食いそば「都そば」の店舗および当社が運営するウェブサイト（以下「本サイト」）をご利用になるお客様その他の皆様の個人情報を大切に取り扱います。当社は、個人情報の保護に関する法律（以下「個人情報保護法」）その他の関係法令およびガイドラインを遵守し、以下の方針に基づいて個人情報を適正に取得、利用および管理します。
            </p>

            <h2 className={headingClass}>1. 本ポリシーの適用範囲</h2>
            <p>本ポリシーは、都そばの店舗および本サイトにおいて当社が取り扱う個人情報に適用されます。本サイトから移動した外部事業者のウェブサイトやサービスには、当該事業者が定める方針が適用されます。</p>

            <h2 className={headingClass}>2. 取得する情報と取得方法</h2>
            <p>当社は、利用目的の達成に必要な範囲で、適法かつ公正な方法により、次の情報を取得することがあります。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>お問い合わせ時にご提供いただく情報：返信希望の有無、ご利用店舗、ご利用日時、お問い合わせ区分、お問い合わせ内容、および個別の対応に必要となる連絡先その他の情報</li>
              <li>店舗での対応に伴う情報：ご意見、ご要望、事故・お申し出への対応記録、および店舗に防犯カメラを設置している場合の映像</li>
              <li>本サイトの利用に伴い自動的に送信される情報：IPアドレス、端末・ブラウザ・OSに関する情報、閲覧ページ、参照元、閲覧日時、Cookieその他の識別子</li>
            </ul>
            <p>当社は、要配慮個人情報を取得する場合、法令で認められる場合を除き、あらかじめご本人の同意を得ます。</p>

            <h2 className={headingClass}>3. 利用目的</h2>
            <p>当社は、取得した情報を次の目的で利用します。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>お問い合わせ、ご意見、ご要望、お申し出への回答、事実確認および必要な連絡のため</li>
              <li>店舗・商品・接客・本サイトの運営、品質向上、不具合の調査および改善のため</li>
              <li>店舗における安全の確保、防犯、事故防止およびトラブル発生時の確認・対応のため</li>
              <li>本サイトの利用状況を統計的に把握し、情報提供やサイト構成を改善するため</li>
              <li>不正利用の防止、セキュリティの確保、法令上必要な対応、および上記の各目的に付随する業務のため</li>
            </ul>
            <p>利用目的を変更する場合は、変更前の目的と合理的な関連性を有する範囲に限り、変更後の目的を本サイトで公表するか、ご本人に通知します。</p>

            <h2 className={headingClass}>4. 第三者への提供</h2>
            <p>当社は、ご本人の同意がある場合または次のような個人情報保護法その他の法令で認められる場合を除き、個人データを第三者に提供しません。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護に必要で、同意を得ることが困難な場合</li>
              <li>公衆衛生の向上または児童の健全な育成に特に必要で、同意を得ることが困難な場合</li>
              <li>国または地方公共団体等の法定事務への協力が必要で、同意を得ることによりその遂行に支障を及ぼすおそれがある場合</li>
              <li>合併、会社分割、事業譲渡その他の事業承継に伴い提供される場合</li>
            </ul>

            <h2 className={headingClass}>5. 取扱いの委託</h2>
            <p>当社は、サイトの運用・保守、お問い合わせ対応、アクセス解析その他の業務に必要な範囲で、個人情報の取扱いを外部事業者に委託することがあります。当社は、委託先を適切に選定し、契約等により必要な事項を定め、取扱状況を確認するなど、必要かつ適切な監督を行います。</p>

            <h2 className={headingClass}>6. CookieおよびGoogle Analytics</h2>
            <p>本サイトは、サイトの動作、利便性の向上および利用状況の分析のため、Cookieその他の類似技術を利用することがあります。また、アクセス状況の把握にGoogle Analytics 4を利用する場合があります。Google Analyticsでは、Cookie等を用いてページの閲覧状況、端末・ブラウザに関する情報、IPアドレス等がGoogleに送信され、Googleの方針に基づいて取り扱われます。当社は、これらの情報を個人を直接特定する目的では利用しません。</p>
            <p>
              Cookieはブラウザの設定で無効にできます。また、Google Analyticsによる測定は、Googleが提供する
              <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noreferrer" className={linkClass}>オプトアウト アドオン</a>
              でも停止できます。無効にした場合、本サイトの一部機能が正しく動作しないことがあります。詳しくは
              <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noreferrer" className={linkClass}>Googleのプライバシーポリシー</a>
              をご確認ください。
            </p>

            <h2 className={headingClass}>7. 外部サービスおよびリンク</h2>
            <p>本サイトでは、地図、SNSその他の外部サービスを利用または案内することがあります。外部サービスを表示または利用した場合、端末情報、IPアドレス、Cookie等の情報が各提供事業者に送信されることがあります。各サービスにおける情報の取扱いは、それぞれの利用規約およびプライバシーポリシーをご確認ください。当社は、リンク先の内容や情報管理について責任を負うものではありません。</p>

            <h2 className={headingClass}>8. 安全管理措置</h2>
            <p>当社は、個人データの漏えい、滅失またはき損を防止するため、取扱規程の整備、責任者および取扱者の明確化、従業者への教育、取扱区域・機器の管理、アクセス制御、不正アクセス対策等、事業内容および取り扱う情報の性質に応じた必要かつ適切な組織的・人的・物理的・技術的安全管理措置を講じます。また、問題が発生した場合に備え、報告・対応体制の整備に努めます。安全管理措置の詳細については、法令上必要な範囲で個別にご案内します。</p>

            <h2 className={headingClass}>9. 保有期間と廃棄</h2>
            <p>当社は、利用目的の達成に必要な期間または法令上保存が必要な期間に限って個人情報を保有し、保存の必要がなくなった情報は、業務上および法令上支障のない範囲で、安全な方法により消去、廃棄または匿名化します。</p>

            <h2 className={headingClass}>10. 開示、訂正、利用停止等の請求</h2>
            <p>ご本人は、当社が保有する保有個人データまたは第三者提供記録について、利用目的の通知、開示、内容の訂正・追加・削除、利用停止・消去、第三者提供の停止を、個人情報保護法の定めに従って請求できます。当社は、ご本人または正当な代理人であることを確認したうえで、法令に基づき合理的な期間および範囲で対応し、対応できない場合はその理由をご説明します。請求方法や必要書類については、下記窓口からお問い合わせください。</p>

            <h2 className={headingClass}>11. 未成年の方について</h2>
            <p>未成年の方が個人情報を提供する場合は、必要に応じて保護者の同意を得たうえで提供してください。当社は、未成年者の個人情報についても、本ポリシーに従い適切に取り扱います。</p>

            <h2 className={headingClass}>12. 本ポリシーの改定</h2>
            <p>当社は、法令の改正、サービス内容または取扱方法の変更等に応じて、本ポリシーを改定することがあります。改定後の内容は本サイトに掲載した時点から適用します。お客様への影響が大きい変更については、本サイト上で分かりやすくお知らせします。</p>

            <h2 className={headingClass}>13. 事業者およびお問い合わせ窓口</h2>
            <div className="bg-white/70 border border-cream-200 p-5 md:p-6 rounded-sm">
              <p className="m-0"><strong>事業者名：</strong>大阪誠和食品株式会社</p>
              <p className="mt-2 mb-0"><strong>お問い合わせ：</strong><Link to="/contact" className={linkClass}>お問い合わせ窓口</Link></p>
              <p className="text-sm text-soba-ink/65 mt-3 mb-0">個人情報に関するお問い合わせである旨を明記してください。内容を確認し、適切に対応します。</p>
            </div>
            <p className="text-xs text-soba-ink/60 mt-12">制定日：2024年4月1日<br />最終改定日：2026年8月31日</p>
          </div>
        ) : (
          <div className="prose prose-sm md:prose-base max-w-none text-soba-ink/85 leading-loose space-y-6">
            <p>Osaka Seiwa Foods Co., Ltd. ("we," "us," or "our") carefully handles personal information relating to customers and other individuals who use Miyako Soba stores and this website (the "Site"). We comply with Japan's Act on the Protection of Personal Information (the "APPI"), other applicable laws, and relevant guidelines.</p>

            <h2 className={headingClass}>1. Scope</h2>
            <p>This Policy applies to personal information handled by us at Miyako Soba stores and on the Site. Third-party websites and services are governed by their own privacy policies.</p>

            <h2 className={headingClass}>2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Inquiry information: reply preference, store visited, date and time of visit, inquiry category and details, and contact information needed to respond</li>
              <li>Store-related information: comments, requests, incident or complaint records, and security camera footage where cameras are installed</li>
              <li>Technical information: IP address, device, browser and OS details, pages viewed, referrer, access time, cookies, and similar identifiers</li>
            </ul>

            <h2 className={headingClass}>3. Purposes of Use</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to inquiries and complaints, verify facts, and contact you where necessary</li>
              <li>To operate and improve our stores, products, customer service and the Site</li>
              <li>To maintain store safety, prevent crime and accidents, and investigate incidents</li>
              <li>To statistically analyze Site use, maintain security, comply with laws, and perform incidental activities</li>
            </ul>
            <p>We only change a purpose where the revised purpose is reasonably related to the original purpose, and will publish or notify you of the change.</p>

            <h2 className={headingClass}>4. Disclosure to Third Parties</h2>
            <p>We do not disclose personal data to third parties without consent, except where permitted by the APPI or other applicable laws, including legal requirements, protection of life, body or property, public health or child welfare, government cooperation, or business succession.</p>

            <h2 className={headingClass}>5. Service Providers</h2>
            <p>We may entrust personal information to service providers for Site operation, inquiry handling, analytics, and other necessary operations. We select providers appropriately, impose relevant contractual requirements, and provide necessary and appropriate supervision.</p>

            <h2 className={headingClass}>6. Cookies and Google Analytics</h2>
            <p>The Site may use cookies and Google Analytics 4. Page-view data, device and browser information, IP addresses, and similar information may be transmitted to Google and handled under its policies. We do not use this information to directly identify individuals.</p>
            <p>You can disable cookies in your browser or use the <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noreferrer" className={linkClass}>Google Analytics Opt-out Browser Add-on</a>. See <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noreferrer" className={linkClass}>Google's Privacy Policy</a> for details.</p>

            <h2 className={headingClass}>7. External Services and Links</h2>
            <p>Maps, social media, and other external services may receive device information, IP addresses, cookies, or similar information when displayed or used. Their terms and privacy policies apply. We are not responsible for external sites' content or data practices.</p>

            <h2 className={headingClass}>8. Security Measures</h2>
            <p>We implement necessary and appropriate organizational, personnel, physical, and technical safeguards, including internal rules, defined responsibilities, training, access controls, equipment management, and protection against unauthorized access.</p>

            <h2 className={headingClass}>9. Retention and Disposal</h2>
            <p>We retain personal information only as long as necessary for its purpose or required by law, and then securely delete, destroy, or anonymize it where operationally and legally feasible.</p>

            <h2 className={headingClass}>10. Your Rights</h2>
            <p>Under the APPI, you may request notice of purpose, disclosure of retained personal data or third-party provision records, correction, addition, deletion, suspension of use, erasure, or suspension of third-party provision. We verify the identity of the requester and respond as required by law. Contact us below for the procedure.</p>

            <h2 className={headingClass}>11. Minors</h2>
            <p>Minors should obtain parental or guardian consent where appropriate before providing personal information. We handle minors' information under this Policy.</p>

            <h2 className={headingClass}>12. Changes to This Policy</h2>
            <p>We may revise this Policy following legal, service, or operational changes. A revised Policy applies when posted, and material changes will be clearly announced on the Site.</p>

            <h2 className={headingClass}>13. Business Operator and Contact</h2>
            <div className="bg-white/70 border border-cream-200 p-5 md:p-6 rounded-sm">
              <p className="m-0"><strong>Business operator:</strong> Osaka Seiwa Foods Co., Ltd.</p>
              <p className="mt-2 mb-0"><strong>Contact:</strong> <Link to="/contact" className={linkClass}>Contact desk</Link></p>
              <p className="text-sm text-soba-ink/65 mt-3 mb-0">Please indicate that your inquiry concerns personal information.</p>
            </div>
            <p className="text-xs text-soba-ink/60 mt-12">Established: April 1, 2024<br />Last updated: August 31, 2026</p>
          </div>
        )}
      </article>
      <Footer />
    </div>
  );
}
