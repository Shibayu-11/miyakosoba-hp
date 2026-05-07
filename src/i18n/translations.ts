export const LANGS = ['ja', 'en'] as const;
export type Lang = (typeof LANGS)[number];

type Dict = {
  brand: { name: string; tag: string };
  nav: { kodawari: string; menu: string; locations: string; news: string };
  header: { findStore: string };
  hero: {
    title1: string;
    title2: string;
    sub1: string;
    sub2: string;
    viewMenu: string;
    viewLocations: string;
  };
  features: {
    label: string;
    heading: string;
    dashi: { title: string; desc: string };
    soba: { title: string; desc: string };
    speed: { title: string; desc: string };
    cta: string;
  };
  menu: {
    label: string;
    heading: string;
    pageHeading: string;
    pageIntro: string;
    yen: string;
    cta: string;
    categories: {
      all: string;
      standard: string;
      tempura: string;
      set: string;
      topping: string;
      season: string;
    };
    allergenLabel: string;
    allergenNote: string;
  };
  locations: {
    label: string;
    headingHome: string;
    headingPage: string;
    pageIntro: string;
    subText: string;
    foundedNote: string;
    pinHint: string;
    ctaList: string;
    ctaPage: string;
    summaryOsaka: string;
    summaryKyoto: string;
    summaryHyogo: string;
    filterAll: string;
    showing: (n: number, total: number) => string;
    unverified: string;
    openInMaps: string;
    apiKeyMissing: string;
  };
  about: {
    headerLabel: string;
    headerTitle1: string;
    headerTitle2: string;
    headerIntro: string;
    historyLabel: string;
    historyHeading: string;
    timeline: { year: string; title: string; body: string }[];
    commitmentsLabel: string;
    commitmentsHeading: string;
    commitments: { label: string; heading: string; body: string; body2: string }[];
    messageLabel: string;
    messageHeading1: string;
    messageHeading2: string;
    messageBody: string;
    messageCta: string;
  };
  news: {
    label: string;
    headingHome: string;
    headingPage: string;
    pageIntro: string;
    cta: string;
    readMore: string;
    filterAll: string;
    categories: { newMenu: string; campaign: string; store: string; notice: string };
    empty: string;
  };
  recruit: {
    label: string;
    heading: string;
    body: string;
    cta: string;
  };
  footer: { privacy: string; tokutei: string; copy: string };
};

export const translations: Record<Lang, Dict> = {
  ja: {
    brand: { name: '都そば', tag: '立ち食い' },
    nav: { kodawari: 'こだわり', menu: 'お品書き', locations: '店舗案内', news: 'お知らせ' },
    header: { findStore: '店舗を探す' },
    hero: {
      title1: '毎日に、',
      title2: 'うまい一杯。',
      sub1: '気軽さはそのままに。',
      sub2: '都そばの一杯を、もっと美しく。',
      viewMenu: 'お品書きを見る',
      viewLocations: '店舗一覧',
    },
    features: {
      label: 'こだわり',
      heading: '一杯に込めた、3つのこだわり。',
      dashi: { title: 'だし', desc: '厳選した鰹節と昆布から丁寧にとる風味豊かな関西だし。' },
      soba: { title: 'そば', desc: 'のどごしと香りを大切にした、毎日食べたくなるそば。' },
      speed: { title: 'はやさと気軽さ', desc: '立ち食いだからこその心地よい速さと、いつでも気軽に立ち寄れる安心感。' },
      cta: '都そばのこだわり・歴史を見る',
    },
    menu: {
      label: '人気メニュー',
      heading: '定番の一杯をどうぞ。',
      pageHeading: 'お品書き',
      pageIntro: '関西の朝も昼も夜も。都そばのいつもの一杯と、季節の味わいを。',
      yen: '円(税込)',
      cta: 'お品書きを見る',
      categories: {
        all: 'すべて',
        standard: '定番',
        tempura: '天ぷら',
        set: 'セット',
        topping: 'トッピング',
        season: '季節限定',
      },
      allergenLabel: 'アレルゲン情報',
      allergenNote:
        'アレルギーをお持ちのお客様は、ご注文前に店舗スタッフまでお声がけください。共通の調理場・揚げ油を使用しているため、表示外のアレルゲンが微量混入する可能性があります。',
    },
    locations: {
      label: '店舗案内',
      headingHome: '大阪・京都・兵庫を中心に、駅近で気軽に立ち寄れる店舗を展開。',
      headingPage: '店舗一覧',
      pageIntro: 'マップから探す、エリアから探す。あなたの最寄りの都そばを。',
      subText: '通勤・通学の合間に、旅の途中に。',
      foundedNote: '1962年創業、日本初の老舗立ち食い蕎麦。大阪の味として、半世紀以上。',
      pinHint: 'マップ上の赤いピンをクリックすると、店舗の詳細・Google Mapsへのリンクが表示されます。',
      ctaList: '全店舗一覧を見る',
      ctaPage: 'お近くの店舗を探す',
      summaryOsaka: '大阪',
      summaryKyoto: '京都',
      summaryHyogo: '兵庫',
      filterAll: 'すべて',
      showing: (n, total) => `表示中 ${n} / 全 ${total} 店舗`,
      unverified: '※営業状況は要確認',
      openInMaps: 'Google Mapsで開く',
      apiKeyMissing: 'Google Maps API キーが未設定です。.env に VITE_GOOGLE_MAPS_API_KEY を設定してください。',
    },
    about: {
      headerLabel: 'OUR STORY',
      headerTitle1: '1962年、日本初の',
      headerTitle2: '老舗立ち食い蕎麦として。',
      headerIntro:
        '「早い」「安い」「うまい」の変わらぬ味を、毎日店舗で引くこだわりの出汁で。1962年に大阪で生まれた都そばは、大阪の味として、半世紀以上にわたり関西の毎日に寄り添ってきました。',
      historyLabel: '歴史',
      historyHeading: '都そばの歩み',
      timeline: [
        { year: '1962', title: '日本初の立ち食い蕎麦チェーンとして、大阪に。', body: '「早く、安く、うまいものを」。戦後の高度経済成長期、忙しく行き交う人々のために、ぱっと食べられて、しっかり美味しい一杯を。都そばは大阪の駅前から始まりました。' },
        { year: '1970s', title: '関西各地へ、暖簾を広げる。', body: '大阪・京都・兵庫の主要駅周辺へと出店を拡大。サラリーマンや学生、旅人の毎日に寄り添う「いつもの一杯」として親しまれるようになりました。' },
        { year: '1990s', title: '「早い」「安い」「うまい」を、毎日守る。', body: 'チェーン化しても、出汁は毎日店舗で引く。そばも毎日仕込む。創業当時から変わらない手間と、その日いちばんの状態で出す姿勢を貫いています。' },
        { year: 'Now', title: '大阪の味として、半世紀以上。', body: '関西を中心に約34店舗を展開。朝の出勤前から、深夜の帰宅まで、駅前のあかりと暖簾は、今日も変わらず灯っています。' },
      ],
      commitmentsLabel: 'こだわり',
      commitmentsHeading: '一杯に込めた、3つの約束。',
      commitments: [
        { label: 'だし', heading: '毎日店舗で引く、こだわりの出汁。',
          body: '厳選した鰹節と利尻昆布を中心に、各店舗で毎日丁寧に出汁を引いています。化学調味料に頼らず、素材と仕込みの時間で味を引き出すのが、創業以来の流儀です。',
          body2: '関西人の舌に染み込む、澄んだ色と深い香り。「もう一口」と思わず飲み干したくなる、その一杯のために。' },
        { label: 'そば', heading: 'のどごしと香りを、毎日仕込む。',
          body: 'そばは、その日のうちに食べられる分だけを各店で仕込みます。茹でたての一杯にこそ、本当のおいしさがあると信じているから。',
          body2: 'ざる、かけ、月見、天ぷら——どんな食べ方でも、まずそばそのものが立っている。それが私たちの目指す、毎日のそばです。' },
        { label: 'はやさと気軽さ', heading: '「早い」「安い」「うまい」を、立ち食いの形で。',
          body: '注文から提供まで、わずか数分。立ち食いという形だからこそ、丁寧に作ったものをいちばん新鮮な状態で、変わらない価格でお出しできる。',
          body2: '一人でも入りやすく、急いでいても、ふらっと寄れる。そんな日常の余白に、都そばはずっと居続けたいと思っています。' },
      ],
      messageLabel: 'MESSAGE',
      messageHeading1: '早い、安い、うまい。',
      messageHeading2: 'その変わらぬ一杯のために。',
      messageBody:
        '私たちが目指しているのは、誰かの「いつもの一杯」であり続けること。朝の通勤前、昼休みの合間、夜の帰り道。あなたの毎日のどこかに、都そばのあかりがあれば。それが、創業から半世紀以上、ずっと変わらない私たちの願いです。',
      messageCta: 'お近くの店舗を探す',
    },
    news: {
      label: 'お知らせ',
      headingHome: '新メニュー・キャンペーン情報',
      headingPage: 'お知らせ一覧',
      pageIntro: '新メニューやキャンペーン、店舗情報など、都そばからの最新のお知らせ。',
      cta: 'お知らせを全て見る',
      readMore: '詳しく見る',
      filterAll: 'すべて',
      categories: { newMenu: '新メニュー', campaign: 'キャンペーン', store: '店舗情報', notice: 'お知らせ' },
      empty: '該当するお知らせはありません。',
    },
    recruit: {
      label: 'RECRUIT',
      heading: '都そばで、働きませんか。',
      body: 'アルバイト・社員ともに、関西の各店舗で募集中。立ち食いの粋を、一緒に。',
      cta: '採用情報を見る',
    },
    footer: {
      privacy: 'プライバシーポリシー',
      tokutei: '特定商取引法に基づく表記',
      copy: '© MIYAKO SOBA. All Rights Reserved.',
    },
  },
  en: {
    brand: { name: 'Miyako Soba', tag: 'STAND-UP' },
    nav: { kodawari: 'Our Craft', menu: 'Menu', locations: 'Stores', news: 'News' },
    header: { findStore: 'Find a Store' },
    hero: {
      title1: 'A great bowl,',
      title2: 'every single day.',
      sub1: 'Casual, quick, and quietly excellent.',
      sub2: 'The Miyako Soba bowl, made beautiful again.',
      viewMenu: 'See the Menu',
      viewLocations: 'Our Stores',
    },
    features: {
      label: 'OUR CRAFT',
      heading: 'Three things in every bowl.',
      dashi: { title: 'Dashi', desc: 'Kansai-style broth, carefully drawn each day from selected katsuobushi and kombu.' },
      soba: { title: 'Soba', desc: 'Buckwheat noodles you’ll want every day — fragrant, with a clean bite.' },
      speed: { title: 'Quick & Easy', desc: 'The pleasant rhythm only stand-up shops can offer — drop in anytime.' },
      cta: 'Read our story & history',
    },
    menu: {
      label: 'POPULAR ITEMS',
      heading: 'Our daily favorites.',
      pageHeading: 'Menu',
      pageIntro: 'Morning, noon and night across Kansai — our usual bowls and seasonal flavors.',
      yen: 'JPY (incl. tax)',
      cta: 'See the full menu',
      categories: {
        all: 'All',
        standard: 'Standard',
        tempura: 'Tempura',
        set: 'Sets',
        topping: 'Toppings',
        season: 'Seasonal',
      },
      allergenLabel: 'Allergens',
      allergenNote:
        'If you have allergies, please ask the store staff before ordering. Trace allergens from shared cooking surfaces and oil may be present.',
    },
    locations: {
      label: 'STORES',
      headingHome: 'Stations across Osaka, Kyoto and Hyogo — drop in any day.',
      headingPage: 'Our Stores',
      pageIntro: 'Find your nearest Miyako Soba — by map or by area.',
      subText: 'On the way to work, between classes, on a journey.',
      foundedNote: 'Since 1962, Japan\'s first standing soba chain. The taste of Osaka, for over half a century.',
      pinHint: 'Click any red pin on the map to see store details and a Google Maps link.',
      ctaList: 'See all stores',
      ctaPage: 'Find your nearest store',
      summaryOsaka: 'Osaka',
      summaryKyoto: 'Kyoto',
      summaryHyogo: 'Hyogo',
      filterAll: 'All',
      showing: (n, total) => `Showing ${n} of ${total} stores`,
      unverified: '※Operating status to be confirmed',
      openInMaps: 'Open in Google Maps',
      apiKeyMissing: 'Google Maps API key is not set. Add VITE_GOOGLE_MAPS_API_KEY to .env.',
    },
    about: {
      headerLabel: 'OUR STORY',
      headerTitle1: 'Since 1962,',
      headerTitle2: 'Japan\'s first standing soba chain.',
      headerIntro:
        '"Fast, affordable, delicious" — the unchanging taste, with authentic dashi prepared fresh in every shop each day. Born in Osaka in 1962, Miyako Soba has been the taste of Osaka for over half a century, woven into the everyday of Kansai.',
      historyLabel: 'HISTORY',
      historyHeading: 'Our journey',
      timeline: [
        { year: '1962', title: 'Born in Osaka, as Japan\'s first standing soba chain.', body: '"Fast, affordable, genuinely good." In post-war high-growth Japan, we set out to serve a quick, honest bowl to busy passers-by. Miyako Soba began at a station front in Osaka.' },
        { year: '1970s', title: 'Spreading our noren across Kansai.', body: 'We expanded around major stations in Osaka, Kyoto and Hyogo, becoming the "usual bowl" for office workers, students and travelers alike.' },
        { year: '1990s', title: 'Keeping "fast, affordable, delicious" — every day.', body: 'Even as a chain, every store still draws its dashi fresh each day, and preps its soba daily. The same effort, the same just-made state — kept since day one.' },
        { year: 'Now', title: 'The taste of Osaka, for over half a century.', body: 'Today we run roughly 34 stores around Kansai. From the morning rush to the late-night walk home, our station-front lights are still lit.' },
      ],
      commitmentsLabel: 'OUR CRAFT',
      commitmentsHeading: 'Three promises in every bowl.',
      commitments: [
        { label: 'Dashi', heading: 'Authentic dashi, drawn fresh in every shop.',
          body: 'Every store carefully draws its dashi every morning, centered on selected katsuobushi and Rishiri kombu. We rely on ingredients and time, not chemical seasonings — the way it has been since 1962.',
          body2: 'A clear color and deep aroma that Kansai palates know by heart — the kind of bowl you finish to the last drop.' },
        { label: 'Soba', heading: 'Aroma and bite, prepped daily.',
          body: 'Soba is prepared at each store in the amount we serve that day. The truest taste of soba lives in a bowl just boiled.',
          body2: 'Cold or hot, with egg or tempura — the noodle stands on its own first. That is the daily soba we aim for.' },
        { label: 'Quick & Easy', heading: '"Fast, affordable, delicious" — in stand-up form.',
          body: 'Just a few minutes from order to bowl. The stand-up form lets us serve carefully made food at its freshest moment, at a price that does not change.',
          body2: 'Easy to come alone, easy to drop in even in a hurry. We want to keep living in those small gaps of your everyday.' },
      ],
      messageLabel: 'MESSAGE',
      messageHeading1: 'Fast, affordable, delicious.',
      messageHeading2: 'For that unchanging bowl.',
      messageBody:
        'What we aim for is to keep being someone\'s "usual bowl." The morning commute, the lunch break, the walk home at night. If the lights of Miyako Soba flicker somewhere in your day — that is the one wish we have kept, unchanged, for over half a century.',
      messageCta: 'Find your nearest store',
    },
    news: {
      label: 'NEWS',
      headingHome: 'New menus & campaigns',
      headingPage: 'All News',
      pageIntro: 'New menus, campaigns and store updates from Miyako Soba.',
      cta: 'See all news',
      readMore: 'Read more',
      filterAll: 'All',
      categories: { newMenu: 'New Menu', campaign: 'Campaign', store: 'Store', notice: 'Notice' },
      empty: 'No news in this category.',
    },
    recruit: {
      label: 'RECRUIT',
      heading: 'Work with us at Miyako Soba.',
      body: 'Hiring crew and staff at stores across Kansai. Carry the spirit of stand-up soba with us.',
      cta: 'See careers',
    },
    footer: {
      privacy: 'Privacy Policy',
      tokutei: 'Specified Commercial Transactions Act',
      copy: '© MIYAKO SOBA. All Rights Reserved.',
    },
  },
};
