export type NewsNorenBannerLink = {
  to: string;
  label: string;
  className: string;
  /**
   * 掛け軸の枠にそのまま重ねるポスター画像。
   * 指定した枠は背景バナー（news-noren-banner.png）に焼き込まれた絵を覆い隠すため、
   * ポスターの差し替えはこのパスを変えるだけで済む（バナー画像の再合成は不要）。
   * 枠の比率は className のコメント参照（概ね 0.69〜0.71）。
   * これに近い縦長画像を用意すると、object-cover のトリミングが最小になる。
   *
   * 差し替えるときは必ず新しいファイル名にすること（例: -v2 → -v3）。
   * netlify.toml で /images/* は7日間キャッシュされるため、同名で上書きすると
   * 一度サイトを見た人には最大7日間、古いポスターが表示されたままになる。
   */
  poster?: string;
};

export const newsNorenBanner = {
  image: '/images/news-noren-banner.png',
  alt: 'お知らせ',
  minWidthClass: 'min-w-[760px]',
  links: [
    {
      to: '/news',
      label: 'お知らせ一覧',
      className: 'left-[3.9%] top-[26.5%] h-[50%] w-[15.2%]',
    },
    {
      to: '/news/potaten-soba-202610',
      label: '都そばの新名物「ぽて天」10月13日発売',
      // 背景バナー上の掛け軸の実寸（1748x900 中の x362-671 / y239-687）。枠の比率は 309:448。
      className: 'left-[20.709%] top-[26.556%] h-[49.778%] w-[17.677%]',
      poster: '/images/news-potaten-soba-v2.jpg',
    },
    {
      to: '/news/miyakosoba-no-hi-202606',
      label: '毎月8日は都そばの日',
      // 背景バナー上の掛け軸の実寸（1748x900 中の x699-1030 / y239-708）。枠の比率は 331:469。
      className: 'left-[39.989%] top-[26.556%] h-[52.111%] w-[18.936%]',
      poster: '/images/news-miyakosoba-day-202610.jpg',
    },
    {
      to: '/news/soba-udon-zoryo-202601',
      label: 'そば・うどん 増量無料キャンペーン',
      className: 'left-[59.2%] top-[26%] h-[51%] w-[18.2%]',
    },
    {
      to: '/news/newyear-2026',
      label: '謹賀新年 2026',
      className: 'left-[78.7%] top-[26%] h-[51%] w-[18.2%]',
    },
  ] satisfies NewsNorenBannerLink[],
};
