export type NewsNorenBannerLink = {
  to: string;
  label: string;
  className: string;
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
      to: '/news/miyakosoba-no-hi-202606',
      label: '毎月8日は都そばの日',
      className: 'left-[19.5%] top-[26%] h-[51%] w-[18.2%]',
    },
    {
      to: '/news/katsudon-mini-set-202601',
      label: 'かつ丼ミニ麺セット、期間限定で復活',
      className: 'left-[39.1%] top-[26%] h-[51%] w-[18.2%]',
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
