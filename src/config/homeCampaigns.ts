import { socialLinks } from './socialLinks';

export type HomeCampaign = {
  /** サイト内パス、または http(s):// で始まる外部URL（別タブで開く）。 */
  to: string;
  /** 画像の内容を表す文字列。alt とスクリーンリーダー向けのラベルに使う。 */
  label: string;
  /**
   * トップの「キャンペーン情報」に並べる横長バナー。
   * 切り抜かずにそのまま表示するので、全て同じ比率（1689x931 = 約1.81）で用意すること。
   * 差し替えるときは必ず新しいファイル名にすること（例: -v1 → -v2）。
   * netlify.toml で /images/* は7日間キャッシュされるため、同名で上書きすると
   * 一度サイトを見た人には最大7日間、古いバナーが表示されたままになる。
   */
  image: string;
};

// 配列の順がそのまま左から右への並び順になる。
export const homeCampaigns: HomeCampaign[] = [
  {
    to: '/news/miyakosoba-no-hi-202606',
    label: '毎月8日は都そばの日 そば・うどんの麺の部分が半額',
    image: '/images/campaign-miyakosoba-day-v1.jpg',
  },
  {
    // バナー自体が友だち追加の導線なので、記事ではなくLINEを直接開く。
    to: socialLinks.line,
    label: 'LINE友だち追加で50円OFFクーポンプレゼント',
    image: '/images/campaign-line-coupon-v1.jpg',
  },
];
