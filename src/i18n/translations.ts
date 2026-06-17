export const LANGS = ['ja', 'en', 'zh', 'ko'] as const;
export type Lang = (typeof LANGS)[number];

export type Dict = {
  brand: { name: string };
  nav: { kodawari: string; menu: string; locations: string; news: string; campaign: string };
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
  recommend: {
    label: string;
    heading: string;
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
      noodle: string;
      donburi: string;
      takeout: string;
      set: string;
    };
    priceNote: string;
    photoNote: string;
    setComingSoon: string;
  };
  allergenTable: {
    heading: string;
    toggleShow: string;
    toggleHide: string;
    itemHeader: string;
    note: string;
    labels: {
      soba: string;
      wheat: string;
      egg: string;
      milk: string;
      shrimp: string;
      crab: string;
      peanut: string;
      walnut: string;
    };
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
    searchPlaceholder: string;
    searchNoResults: string;
    colName: string;
    colAddress: string;
    hoursLabel: string;
    closedLabel: string;
    weekday: string;
    weekendHoliday: string;
    closedNote: string;
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
  footer: { privacy: string; tokutei: string; contact: string; hours: string; copy: string };
  parentCompany: { name: string; profile: string; message: string };
  contact: {
    label: string;
    heading: string;
    intro: string;
    phoneHeading: string;
    phoneNumber: string;
    phoneHoursLabel: string;
    phoneHours: string;
    notesHeading: string;
    notes: string[];
    formHeading: string;
    required: string;
    replyLabel: string;
    replyNo: string;
    replyYes: string;
    storeLabel: string;
    storePlaceholder: string;
    dateLabel: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    categories: string[];
    messageLabel: string;
    charCount: (n: number, max: number) => string;
    submit: string;
    submittedMessage: string;
  };
};

export const translations: Record<Lang, Dict> = {
  ja: {
    brand: { name: '都そば' },
    nav: { kodawari: 'こだわり', menu: 'お品書き', locations: '店舗案内', news: 'お知らせ', campaign: 'キャンペーン情報' },
    header: { findStore: '店舗を探す' },
    hero: {
      title1: '1962年創業の日本初',
      title2: '立ち食いそばチェーン店',
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
    recommend: {
      label: 'お知らせ',
      heading: '最新情報をお届けします。',
    },
    menu: {
      label: '人気メニュー',
      heading: '定番の一杯をどうぞ。',
      pageHeading: 'お品書き',
      pageIntro: '関西の朝も昼も夜も。都そばのいつもの一杯と、季節の味わいを。',
      yen: '円(税込)',
      cta: 'お品書きを見る',
      categories: {
        all: '全て',
        noodle: '麺類',
        donburi: '丼物',
        takeout: 'お持ち帰り',
        set: 'お得なセット',
      },
      priceNote: '※店舗により価格が異なります。表示は参考価格（税込）です。',
      photoNote: '※メニュー写真と実物の商品では、見た目や内容が異なる場合がございます。',
      setComingSoon: '近日公開予定です。お楽しみに。',
    },
    allergenTable: {
      heading: 'アレルゲン情報',
      toggleShow: 'アレルゲン情報を見る',
      toggleHide: 'アレルゲン情報を閉じる',
      itemHeader: 'メニュー',
      note: '※共通の調理場・揚げ油を使用しているため、表示外のアレルゲンが微量混入する可能性があります。アレルギーをお持ちのお客様はスタッフにお声がけください。',
      labels: { soba: 'そば', wheat: '小麦', egg: '卵', milk: '乳', shrimp: 'えび', crab: 'かに', peanut: '落花生', walnut: 'くるみ' },
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
      searchPlaceholder: '店舗名・住所で検索',
      searchNoResults: '該当する店舗が見つかりませんでした。',
      colName: '店舗名',
      colAddress: '住所',
      hoursLabel: '営業時間：',
      closedLabel: '定休日：',
      weekday: '平日',
      weekendHoliday: '土日祝',
      closedNote: '※堂島地下街の定休日に準じます。',
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
      headingHome: 'キャンペーン情報',
      headingPage: 'お知らせ一覧',
      pageIntro: '新メニューやキャンペーン、店舗情報など、都そばからの最新のお知らせ。',
      cta: 'お知らせを全て見る',
      readMore: '詳しく見る',
      filterAll: 'すべて',
      categories: { newMenu: '新メニュー', campaign: 'キャンペーン', store: '店舗情報', notice: 'お知らせ' },
      empty: '該当するお知らせはありません。',
    },
    recruit: {
      label: 'パート、アルバイト募集',
      heading: '都そばで、働きませんか。',
      body: '関西の各店舗で募集中。立ち食いの粋を、一緒に。',
      cta: '採用情報を見る',
    },
    footer: {
      privacy: 'プライバシーポリシー',
      tokutei: '特定商取引法に基づく表記',
      contact: 'お問い合わせ窓口',
      hours: '営業時間：7:00〜22:00（店舗により異なります）',
      copy: '© MIYAKO SOBA. All Rights Reserved.',
    },
    parentCompany: {
      name: '大阪誠和食品株式会社',
      profile: '会社概要',
      message: '社長からのメッセージ',
    },
    contact: {
      label: 'CONTACT',
      heading: 'お問い合わせ',
      intro: '店舗・メニュー・採用などに関するご意見やご質問は、以下のフォームまたはお電話にて承っております。',
      phoneHeading: 'お電話でのお問い合わせ',
      phoneNumber: '0120-123-123',
      phoneHoursLabel: '受付時間',
      phoneHours: '10:00〜18:00（土日祝日を含む）',
      notesHeading: 'お問い合わせに際してのご注意',
      notes: [
        '弊社からお送りする返信メールにつきましては、回答内容の転載・二次利用はご遠慮ください。',
        '弊社からのメールを受信できるよう、迷惑メール設定等をご確認ください。',
        'お問い合わせ内容によっては、電話・郵便などの連絡手段を取らせていただく場合がございます。資料送付等をご希望の際は、必ずご住所をご入力ください。',
        'お問い合わせ内容は具体的にご入力ください。内容によりご回答しかねる場合がございますので、あらかじめご了承ください。',
        '半角カタカナのご入力は、表示・送信の際に不具合が生じる可能性がございます。必ず全角カタカナでご入力ください。',
      ],
      formHeading: 'お問い合わせフォーム',
      required: '必須',
      replyLabel: '返信のご希望',
      replyNo: '返信を希望しない',
      replyYes: '返信を希望する',
      storeLabel: 'ご利用店舗',
      storePlaceholder: '店舗を選択してください',
      dateLabel: 'ご利用日時／ご予定日時',
      categoryLabel: 'お問い合わせカテゴリ',
      categoryPlaceholder: '選択してください',
      categories: ['ご予約について', 'メニューについて', '店舗・営業時間について', 'ご意見・ご感想', '採用について', 'その他'],
      messageLabel: 'ご意見・お問い合わせ内容',
      charCount: (n, max) => `文字数 ${n} / ${max}`,
      submit: '送信する',
      submittedMessage: 'お問い合わせを受け付けました。内容を確認のうえ、担当者よりご連絡いたします。',
    },
  },
  en: {
    brand: { name: 'Miyako Soba' },
    nav: { kodawari: 'Our Craft', menu: 'Menu', locations: 'Stores', news: 'News', campaign: 'Campaigns' },
    header: { findStore: 'Find a Store' },
    hero: {
      title1: "Japan's First Stand-Up",
      title2: 'Soba Chain Since 1962',
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
    recommend: {
      label: 'NEWS',
      heading: 'Latest Updates.',
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
        noodle: 'Noodles',
        donburi: 'Rice Bowls',
        takeout: 'Takeout',
        set: 'Value Sets',
      },
      priceNote: '※Prices vary by location. Prices shown are reference prices (tax included).',
      photoNote: '※Actual products may differ in appearance and content from the menu photos.',
      setComingSoon: 'Coming soon. Stay tuned.',
    },
    allergenTable: {
      heading: 'Allergen Information',
      toggleShow: 'View Allergen Information',
      toggleHide: 'Hide Allergen Information',
      itemHeader: 'Menu Item',
      note: '※Our kitchen and frying oil are shared across all items, so trace amounts of allergens not listed may be present. If you have allergies, please let our staff know.',
      labels: { soba: 'Buckwheat', wheat: 'Wheat', egg: 'Egg', milk: 'Milk', shrimp: 'Shrimp', crab: 'Crab', peanut: 'Peanut', walnut: 'Walnut' },
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
      searchPlaceholder: 'Search by store name or address',
      searchNoResults: 'No stores matched your search.',
      colName: 'Store',
      colAddress: 'Address',
      hoursLabel: 'Hours: ',
      closedLabel: 'Closed: ',
      weekday: 'Weekdays',
      weekendHoliday: 'Weekends/Holidays',
      closedNote: '※Follows the holiday schedule of the Dojima underground shopping street.',
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
      headingHome: 'Campaigns',
      headingPage: 'All News',
      pageIntro: 'New menus, campaigns and store updates from Miyako Soba.',
      cta: 'See all news',
      readMore: 'Read more',
      filterAll: 'All',
      categories: { newMenu: 'New Menu', campaign: 'Campaign', store: 'Store', notice: 'Notice' },
      empty: 'No news in this category.',
    },
    recruit: {
      label: 'Part-time / Hourly Staff Wanted',
      heading: 'Work with us at Miyako Soba.',
      body: 'Hiring crew and staff at stores across Kansai. Carry the spirit of stand-up soba with us.',
      cta: 'See careers',
    },
    footer: {
      privacy: 'Privacy Policy',
      tokutei: 'Specified Commercial Transactions Act',
      contact: 'Contact Us',
      hours: 'Hours: 7:00 – 22:00 (may vary by store)',
      copy: '© MIYAKO SOBA. All Rights Reserved.',
    },
    parentCompany: {
      name: 'Osaka Seiwa Foods Co., Ltd.',
      profile: 'Company Profile',
      message: "Message from the President",
    },
    contact: {
      label: 'CONTACT',
      heading: 'Contact Us',
      intro: 'For questions about our stores, menu, or recruitment, please use the form below or call us.',
      phoneHeading: 'Contact by Phone',
      phoneNumber: '0120-123-123',
      phoneHoursLabel: 'Hours',
      phoneHours: '10:00–18:00 (including weekends and holidays)',
      notesHeading: 'Notes Before Contacting Us',
      notes: [
        'Please do not repost or reuse the content of our reply emails.',
        'Please check your spam settings so that our reply emails are not blocked.',
        'Depending on your inquiry, we may contact you by phone or postal mail. If you would like materials sent to you, please include your address.',
        'Please describe your inquiry as specifically as possible. We may be unable to respond to some inquiries.',
        'Please avoid using half-width katakana, as it may not display or send correctly.',
      ],
      formHeading: 'Contact Form',
      required: 'Required',
      replyLabel: 'Reply Requested',
      replyNo: 'No reply needed',
      replyYes: 'Reply requested',
      storeLabel: 'Store',
      storePlaceholder: 'Select a store',
      dateLabel: 'Visit Date / Time',
      categoryLabel: 'Inquiry Category',
      categoryPlaceholder: 'Please select',
      categories: ['Reservations', 'Menu', 'Store / Hours', 'Feedback', 'Recruitment', 'Other'],
      messageLabel: 'Your Message',
      charCount: (n, max) => `${n} / ${max} characters`,
      submit: 'Submit',
      submittedMessage: 'Thank you. We have received your inquiry and will contact you if a reply is needed.',
    },
  },
  zh: {
    brand: { name: '都荞麦' },
    nav: { kodawari: '匠心', menu: '菜单', locations: '门店信息', news: '最新消息', campaign: '活动信息' },
    header: { findStore: '查找门店' },
    hero: {
      title1: '1962年创立的日本首家',
      title2: '站立式荞麦面连锁店',
      sub1: '保留轻松随意的氛围。',
      sub2: '让都荞麦的一碗，更加精致美味。',
      viewMenu: '查看菜单',
      viewLocations: '门店一览',
    },
    features: {
      label: '匠心',
      heading: '一碗荞麦面里的三大坚持。',
      dashi: { title: '高汤', desc: '精选鲣鱼干与昆布，每日精心熬制的浓郁关西风味高汤。' },
      soba: { title: '荞麦面', desc: '注重顺滑口感与香气，让人每天都想吃的荞麦面。' },
      speed: { title: '快捷与轻松', desc: '站立式用餐带来的舒适速度，随时都能轻松光顾。' },
      cta: '了解都荞麦的匠心与历史',
    },
    recommend: {
      label: '最新消息',
      heading: '为您带来最新资讯。',
    },
    menu: {
      label: '人气菜单',
      heading: '为您奉上经典的一碗。',
      pageHeading: '菜单',
      pageIntro: '关西的清晨、午后与夜晚。都荞麦的日常一碗，与四季限定的美味。',
      yen: '日元（含税）',
      cta: '查看菜单',
      categories: {
        all: '全部',
        noodle: '面类',
        donburi: '盖饭',
        takeout: '外带',
        set: '超值套餐',
      },
      priceNote: '※价格可能因门店而异。所示为参考价格（含税）。',
      photoNote: '※实际商品的外观和内容可能与菜单图片有所不同。',
      setComingSoon: '即将公开，敬请期待。',
    },
    allergenTable: {
      heading: '过敏原信息',
      toggleShow: '查看过敏原信息',
      toggleHide: '收起过敏原信息',
      itemHeader: '菜品',
      note: '※由于使用共用厨房及炸油，可能会微量混入未标示的过敏原。如有过敏，请告知店员。',
      labels: { soba: '荞麦', wheat: '小麦', egg: '蛋', milk: '乳', shrimp: '虾', crab: '螃蟹', peanut: '花生', walnut: '核桃' },
    },
    locations: {
      label: '门店信息',
      headingHome: '以大阪、京都、兵库为中心，展开多家邻近车站、便于光顾的门店。',
      headingPage: '门店一览',
      pageIntro: '通过地图或地区查找离您最近的都荞麦。',
      subText: '通勤通学途中，旅行途中，随时光临。',
      foundedNote: '1962年创立，日本首家老字号站立式荞麦面。作为大阪的味道，已传承半个多世纪。',
      pinHint: '点击地图上的红色图钉，即可查看门店详情及Google地图链接。',
      ctaList: '查看全部门店',
      ctaPage: '查找附近门店',
      summaryOsaka: '大阪',
      summaryKyoto: '京都',
      summaryHyogo: '兵库',
      filterAll: '全部',
      showing: (n, total) => `显示 ${n} / 共 ${total} 家门店`,
      unverified: '※营业状态请另行确认',
      openInMaps: '在Google地图中打开',
      apiKeyMissing: '尚未设置Google Maps API密钥。请在.env中设置VITE_GOOGLE_MAPS_API_KEY。',
      searchPlaceholder: '按门店名称或地址搜索',
      searchNoResults: '未找到符合条件的门店。',
      colName: '门店名称',
      colAddress: '地址',
      hoursLabel: '营业时间：',
      closedLabel: '休息日：',
      weekday: '平日',
      weekendHoliday: '周末/节假日',
      closedNote: '※依照堂岛地下街的休息日安排。',
    },
    about: {
      headerLabel: 'OUR STORY',
      headerTitle1: '1962年，作为日本首家',
      headerTitle2: '老字号站立式荞麦面诞生。',
      headerIntro:
        '"快速""实惠""美味"的不变味道，源自每日在店内精心熬制的高汤。1962年诞生于大阪的都荞麦，半个多世纪以来一直作为大阪的味道，陪伴着关西人的日常生活。',
      historyLabel: '历史',
      historyHeading: '都荞麦的历程',
      timeline: [
        { year: '1962', title: '作为日本首家站立式荞麦面连锁店，诞生于大阪。', body: '"快速、实惠、美味"。在战后经济高速增长期，为了忙碌往来的人们，提供能迅速吃完又确实美味的一碗。都荞麦从大阪的车站前起步。' },
        { year: '1970年代', title: '将暖帘拓展至关西各地。', body: '在大阪、京都、兵库的主要车站周边持续开店。逐渐成为上班族、学生与旅人日常生活中熟悉的"那一碗"。' },
        { year: '1990年代', title: '每日坚守"快速""实惠""美味"。', body: '即便发展为连锁店，高汤依旧每日在各门店现熬，荞麦面也每日现备。从创业之初延续至今的用心，以及以当日最佳状态供应的态度，从未改变。' },
        { year: '现在', title: '作为大阪的味道，传承半个多世纪。', body: '以关西为中心展开约34家门店。从清晨上班前到深夜归途，车站前的灯光与暖帘，今天依旧如常点亮。' },
      ],
      commitmentsLabel: '匠心',
      commitmentsHeading: '一碗中蕴含的三大承诺。',
      commitments: [
        { label: '高汤', heading: '每日在店内现熬的匠心高汤。',
          body: '以精选鲣鱼干与利尻昆布为主，各门店每日都会精心熬制高汤。不依赖化学调味料，而是通过食材本身与熬制时间来呈现风味，这是创业以来一直坚持的做法。',
          body2: '渗透关西人味蕾的清澈色泽与浓郁香气。为了让人忍不住一饮而尽的那一碗。' },
        { label: '荞麦面', heading: '每日现制的顺滑口感与香气。',
          body: '荞麦面只制作当天可售出的分量，由各门店每日现制。我们相信，刚煮好的一碗，才是真正的美味所在。',
          body2: '无论是凉拌、清汤、月见还是天妇罗——任何吃法，荞麦面本身的风味都不会被埋没。这就是我们每天追求的荞麦面。' },
        { label: '快捷与轻松', heading: '以站立式形式呈现"快速""实惠""美味"。',
          body: '从点单到上桌，仅需数分钟。正因为是站立式，才能以不变的价格，将精心制作的美味以最新鲜的状态呈现给您。',
          body2: '一个人也能轻松光顾，即使匆忙也能随时进店。我们希望都荞麦能一直存在于您日常生活的这些空隙之中。' },
      ],
      messageLabel: 'MESSAGE',
      messageHeading1: '快速、实惠、美味。',
      messageHeading2: '为了那不变的一碗。',
      messageBody:
        '我们的目标，是一直成为某个人"日常的那一碗"。清晨上班前，午休的片刻，深夜归途中。如果都荞麦的灯光能出现在您每天的某个角落——这便是我们自创业以来半个多世纪从未改变的心愿。',
      messageCta: '查找附近门店',
    },
    news: {
      label: '最新消息',
      headingHome: '活动信息',
      headingPage: '消息一览',
      pageIntro: '来自都荞麦的新菜单、活动及门店信息等最新消息。',
      cta: '查看全部消息',
      readMore: '查看详情',
      filterAll: '全部',
      categories: { newMenu: '新菜单', campaign: '活动', store: '门店信息', notice: '通知' },
      empty: '暂无相关消息。',
    },
    recruit: {
      label: '招聘兼职・临时工',
      heading: '要不要来都荞麦工作？',
      body: '关西各门店正在招聘兼职及正式员工。一起感受站立式餐饮的魅力。',
      cta: '查看招聘信息',
    },
    footer: {
      privacy: '隐私政策',
      tokutei: '基于特定商业交易法的标示',
      contact: '咨询窗口',
      hours: '营业时间：7:00～22:00（因门店而异）',
      copy: '© MIYAKO SOBA. All Rights Reserved.',
    },
    parentCompany: {
      name: '大阪诚和食品株式会社',
      profile: '公司简介',
      message: '社长致辞',
    },
    contact: {
      label: 'CONTACT',
      heading: '咨询窗口',
      intro: '如对门店、菜单或招聘等有任何意见或疑问，请通过以下表单或电话与我们联系。',
      phoneHeading: '电话咨询',
      phoneNumber: '0120-123-123',
      phoneHoursLabel: '受理时间',
      phoneHours: '10:00〜18:00（含周末及节假日）',
      notesHeading: '咨询须知',
      notes: [
        '请勿转载或二次利用我们回复邮件中的内容。',
        '请检查垃圾邮件设置，以免我方的回复邮件被屏蔽。',
        '根据咨询内容，我们可能通过电话或邮寄方式与您联系。如需邮寄资料，请务必填写您的地址。',
        '请尽可能具体地填写咨询内容。视内容而定，我们可能无法回复，敬请谅解。',
        '请使用全角片假名输入，半角片假名可能导致显示或发送异常。',
      ],
      formHeading: '咨询表单',
      required: '必填',
      replyLabel: '是否需要回复',
      replyNo: '不需要回复',
      replyYes: '需要回复',
      storeLabel: '使用门店',
      storePlaceholder: '请选择门店',
      dateLabel: '使用日期/预定日期',
      categoryLabel: '咨询类别',
      categoryPlaceholder: '请选择',
      categories: ['预约相关', '菜单相关', '门店/营业时间相关', '意见与感想', '招聘相关', '其他'],
      messageLabel: '咨询内容',
      charCount: (n, max) => `字数 ${n} / ${max}`,
      submit: '提交',
      submittedMessage: '我们已收到您的咨询，将在确认内容后与您联系。',
    },
  },
  ko: {
    brand: { name: '미야코소바' },
    nav: { kodawari: '고집', menu: '메뉴', locations: '매장 안내', news: '공지사항', campaign: '이벤트 정보' },
    header: { findStore: '매장 찾기' },
    hero: {
      title1: '1962년 창업, 일본 최초',
      title2: '스탠딩 소바 체인점',
      sub1: '편안한 분위기는 그대로.',
      sub2: '미야코소바의 한 그릇을, 더욱 아름답게.',
      viewMenu: '메뉴 보기',
      viewLocations: '매장 목록',
    },
    features: {
      label: '고집',
      heading: '한 그릇에 담은 세 가지 고집.',
      dashi: { title: '육수', desc: '엄선한 가다랑어포와 다시마로 정성껏 우려낸 풍미 가득한 간사이식 육수.' },
      soba: { title: '소바', desc: '목넘김과 향을 중요하게 여긴, 매일 먹고 싶어지는 소바.' },
      speed: { title: '빠르고 편안함', desc: '서서 먹는 스타일이기에 가능한 쾌적한 속도와, 언제든 부담 없이 들를 수 있는 편안함.' },
      cta: '미야코소바의 고집과 역사 보기',
    },
    recommend: {
      label: '공지사항',
      heading: '최신 소식을 전해드립니다.',
    },
    menu: {
      label: '인기 메뉴',
      heading: '대표 메뉴를 즐겨보세요.',
      pageHeading: '메뉴',
      pageIntro: '간사이의 아침, 점심, 저녁. 미야코소바의 일상 메뉴와 계절의 맛을.',
      yen: '엔(세금 포함)',
      cta: '메뉴 보기',
      categories: {
        all: '전체',
        noodle: '면류',
        donburi: '덮밥',
        takeout: '포장',
        set: '알뜰 세트',
      },
      priceNote: '※가격은 매장에 따라 다를 수 있습니다. 표시 가격은 참고용(세금 포함)입니다.',
      photoNote: '※실제 상품은 메뉴 사진과 외관 및 내용이 다를 수 있습니다.',
      setComingSoon: '곧 공개 예정입니다. 기대해 주세요.',
    },
    allergenTable: {
      heading: '알레르기 정보',
      toggleShow: '알레르기 정보 보기',
      toggleHide: '알레르기 정보 닫기',
      itemHeader: '메뉴',
      note: '※공용 조리장과 튀김유를 사용하기 때문에 표시되지 않은 알레르기 유발 물질이 미량 혼입될 수 있습니다. 알레르기가 있으신 분은 직원에게 말씀해 주세요.',
      labels: { soba: '메밀', wheat: '밀', egg: '계란', milk: '우유', shrimp: '새우', crab: '게', peanut: '땅콩', walnut: '호두' },
    },
    locations: {
      label: '매장 안내',
      headingHome: '오사카・교토・효고를 중심으로, 역에서 가까워 부담 없이 들를 수 있는 매장을 운영하고 있습니다.',
      headingPage: '매장 목록',
      pageIntro: '지도에서 찾기, 지역에서 찾기. 가장 가까운 미야코소바를 찾아보세요.',
      subText: '출퇴근・통학길에, 여행 도중에.',
      foundedNote: '1962년 창업, 일본 최초의 노포 스탠딩 소바. 오사카의 맛으로 반세기 이상.',
      pinHint: '지도 위의 빨간 핀을 클릭하면 매장 상세 정보와 구글 지도 링크가 표시됩니다.',
      ctaList: '전체 매장 목록 보기',
      ctaPage: '가까운 매장 찾기',
      summaryOsaka: '오사카',
      summaryKyoto: '교토',
      summaryHyogo: '효고',
      filterAll: '전체',
      showing: (n, total) => `${total}개 매장 중 ${n}개 표시`,
      unverified: '※영업 상황은 별도 확인 필요',
      openInMaps: '구글 지도에서 열기',
      apiKeyMissing: 'Google Maps API 키가 설정되어 있지 않습니다. .env에 VITE_GOOGLE_MAPS_API_KEY를 설정해 주세요.',
      searchPlaceholder: '매장명・주소로 검색',
      searchNoResults: '해당하는 매장을 찾을 수 없습니다.',
      colName: '매장명',
      colAddress: '주소',
      hoursLabel: '영업시간：',
      closedLabel: '정기 휴일：',
      weekday: '평일',
      weekendHoliday: '주말/공휴일',
      closedNote: '※도지마 지하상가의 휴무일에 따릅니다.',
    },
    about: {
      headerLabel: 'OUR STORY',
      headerTitle1: '1962년, 일본 최초의',
      headerTitle2: '노포 스탠딩 소바로서.',
      headerIntro:
        '"빠르게" "저렴하게" "맛있게"라는 변함없는 맛을, 매일 매장에서 우려내는 정성 가득한 육수로. 1962년 오사카에서 탄생한 미야코소바는, 오사카의 맛으로서 반세기 이상 간사이의 일상과 함께해 왔습니다.',
      historyLabel: '역사',
      historyHeading: '미야코소바의 발자취',
      timeline: [
        { year: '1962', title: '일본 최초의 스탠딩 소바 체인으로, 오사카에서.', body: '"빠르고, 저렴하고, 맛있는 것을". 전후 고도성장기, 바쁘게 오가는 사람들을 위해 빠르게 먹을 수 있으면서도 확실히 맛있는 한 그릇을. 미야코소바는 오사카의 역 앞에서 시작되었습니다.' },
        { year: '1970년대', title: '간사이 각지로 노렌을 넓히다.', body: '오사카・교토・효고의 주요 역 주변으로 출점을 확대. 직장인과 학생, 여행자들의 일상 속 "늘 먹는 한 그릇"으로 자리 잡았습니다.' },
        { year: '1990년대', title: '"빠르게" "저렴하게" "맛있게"를 매일 지키다.', body: '체인화되어도 육수는 매일 매장에서 우려냅니다. 소바도 매일 준비합니다. 창업 당시부터 변함없는 정성과, 그날 가장 좋은 상태로 제공하는 자세를 지켜오고 있습니다.' },
        { year: '현재', title: '오사카의 맛으로, 반세기 이상.', body: '간사이를 중심으로 약 34개 매장을 운영하고 있습니다. 출근 전 아침부터 늦은 밤 귀갓길까지, 역 앞의 불빛과 노렌은 오늘도 변함없이 켜져 있습니다.' },
      ],
      commitmentsLabel: '고집',
      commitmentsHeading: '한 그릇에 담은 세 가지 약속.',
      commitments: [
        { label: '육수', heading: '매일 매장에서 우려내는, 정성 가득한 육수.',
          body: '엄선한 가다랑어포와 리시리 다시마를 중심으로, 각 매장에서 매일 정성껏 육수를 우려내고 있습니다. 화학조미료에 의존하지 않고, 재료와 시간으로 맛을 끌어내는 것이 창업 이래의 방식입니다.',
          body2: '간사이 사람들의 입맛에 깊이 스며든 맑은 색과 깊은 향. "한 입 더"라는 생각에 끝까지 마시고 싶어지는 한 그릇을 위해.' },
        { label: '소바', heading: '목넘김과 향을, 매일 준비합니다.',
          body: '소바는 그날 판매할 만큼만 각 매장에서 준비합니다. 갓 삶은 한 그릇에야말로 진정한 맛이 있다고 믿기 때문입니다.',
          body2: '자루소바, 가케소바, 츠키미, 튀김 — 어떤 방식으로 즐기더라도, 먼저 소바 그 자체가 살아 있어야 합니다. 그것이 저희가 추구하는 매일의 소바입니다.' },
        { label: '빠르고 편안함', heading: '"빠르게" "저렴하게" "맛있게"를, 서서 먹는 형태로.',
          body: '주문부터 제공까지 단 몇 분. 서서 먹는 형태이기 때문에, 정성껏 만든 음식을 가장 신선한 상태로, 변함없는 가격에 제공할 수 있습니다.',
          body2: '혼자서도 들어가기 편하고, 바쁠 때도 부담 없이 들를 수 있습니다. 그런 일상의 틈새에 미야코소바가 계속 함께하고 싶습니다.' },
      ],
      messageLabel: 'MESSAGE',
      messageHeading1: '빠르고, 저렴하고, 맛있게.',
      messageHeading2: '그 변함없는 한 그릇을 위해.',
      messageBody:
        '저희가 지향하는 것은, 누군가의 "늘 먹는 한 그릇"으로 계속 남는 것입니다. 출근 전 아침, 점심시간의 짧은 틈, 밤 귀갓길. 당신의 일상 어딘가에 미야코소바의 불빛이 있다면. 그것이 창업 이래 반세기 이상 변함없이 이어온 저희의 바람입니다.',
      messageCta: '가까운 매장 찾기',
    },
    news: {
      label: '공지사항',
      headingHome: '이벤트 정보',
      headingPage: '공지사항 목록',
      pageIntro: '신메뉴, 이벤트, 매장 정보 등 미야코소바의 최신 소식.',
      cta: '모든 공지 보기',
      readMore: '자세히 보기',
      filterAll: '전체',
      categories: { newMenu: '신메뉴', campaign: '이벤트', store: '매장 정보', notice: '공지' },
      empty: '해당하는 공지사항이 없습니다.',
    },
    recruit: {
      label: '파트타임・아르바이트 모집',
      heading: '미야코소바에서 함께 일해요.',
      body: '아르바이트・정직원 모두 간사이 각 매장에서 모집 중입니다. 스탠딩 소바의 멋을 함께 만들어가요.',
      cta: '채용 정보 보기',
    },
    footer: {
      privacy: '개인정보처리방침',
      tokutei: '특정상거래법에 따른 표기',
      contact: '문의 창구',
      hours: '영업시간：7:00~22:00 (매장에 따라 다를 수 있습니다)',
      copy: '© MIYAKO SOBA. All Rights Reserved.',
    },
    parentCompany: {
      name: '오사카 세이와 식품 주식회사',
      profile: '회사 개요',
      message: '대표 메시지',
    },
    contact: {
      label: 'CONTACT',
      heading: '문의 창구',
      intro: '매장, 메뉴, 채용 등에 관한 의견이나 질문은 아래 양식 또는 전화로 접수해 주세요.',
      phoneHeading: '전화 문의',
      phoneNumber: '0120-123-123',
      phoneHoursLabel: '접수 시간',
      phoneHours: '10:00〜18:00（주말 및 공휴일 포함）',
      notesHeading: '문의 시 주의사항',
      notes: [
        '저희가 보내드리는 회신 메일의 내용은 전재·재사용을 삼가 주세요.',
        '회신 메일이 차단되지 않도록 스팸 메일 설정을 확인해 주세요.',
        '문의 내용에 따라 전화나 우편 등으로 연락드릴 수 있습니다. 자료 발송을 원하시는 경우 주소를 반드시 입력해 주세요.',
        '문의 내용은 구체적으로 입력해 주세요. 내용에 따라 답변이 어려운 경우가 있을 수 있습니다.',
        '반각 가타카나로 입력하시면 표시·전송 시 오류가 발생할 수 있으니 반드시 전각 가타카나로 입력해 주세요.',
      ],
      formHeading: '문의 양식',
      required: '필수',
      replyLabel: '답신 희망 여부',
      replyNo: '답신을 희망하지 않음',
      replyYes: '답신을 희망함',
      storeLabel: '이용 매장',
      storePlaceholder: '매장을 선택해 주세요',
      dateLabel: '이용 일시 / 예정 일시',
      categoryLabel: '문의 카테고리',
      categoryPlaceholder: '선택해 주세요',
      categories: ['예약 관련', '메뉴 관련', '매장·영업시간 관련', '의견·감상', '채용 관련', '기타'],
      messageLabel: '문의 내용',
      charCount: (n, max) => `글자 수 ${n} / ${max}`,
      submit: '전송하기',
      submittedMessage: '문의가 접수되었습니다. 내용 확인 후 담당자가 연락드리겠습니다.',
    },
  },
};
