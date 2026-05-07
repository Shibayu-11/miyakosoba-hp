export type NewsCategory = 'newMenu' | 'campaign' | 'store' | 'notice';

export type NewsItem = {
  id: string;
  category: NewsCategory;
  date: string; // ISO yyyy-mm-dd
  title: { ja: string; en: string };
  excerpt: { ja: string; en: string };
  image: string;
  body?: { ja: string; en: string };
};

// 仮データ。後日 microCMS / Supabase 等のCMSに差し替える前提。
export const news: NewsItem[] = [
  {
    id: 'katsudon-mini-set',
    category: 'campaign',
    date: '2026-01-07',
    title: {
      ja: 'かつ丼ミニ麺セット、期間限定で復活',
      en: 'Katsudon Mini-Noodle Set Returns for a Limited Time',
    },
    excerpt: {
      ja: '都そば人気No.1のかつ丼に、ミニそばまたはミニうどんがついたお得なセットが期間限定で復活。840円（税込）。',
      en: 'Our most popular Katsudon, paired with mini soba or udon — back for a limited time. 840 JPY (incl. tax).',
    },
    image: '/images/news-katsudon-mini-set.jpg',
    body: {
      ja: '都そば人気No.1と言っても過言ではないほど大人気の「かつ丼」。\nそのかつ丼とミニ麺のセットが、期間限定で復活します。\n\nご飯ものにはやはり汁物が欲しい。そんな時にはやっぱりミニ麺セット。\nミニそば、またはミニうどんからお選びいただけます。\n\n■ 価格：840円（税込）\n■ 内容：かつ丼 ＋ ミニそば または ミニうどん\n\n※店舗限定の販売ですのでご注意ください。\n\n【対象店舗】\n元町店 / 立花店 / 福島店 / 立花ジョイタウン店 / 中津店 / 新長田店 / 土居店 / 香里園店 / 高槻店 / 今里店 / 出屋敷店 / 豊中店 / 第二尼崎店 / 杭瀬店 / サンロード伊丹店 / 神崎川店 / 岡町駅前店 / 布施店 / 第二布施店',
      en: 'The Katsudon — arguably the most popular item across Miyako Soba — returns paired with a mini noodle bowl, for a limited time only.\n\nPairing rice with a hot bowl always feels right. The Katsudon Mini-Noodle Set lets you choose between mini soba and mini udon.\n\n■ Price: 840 JPY (incl. tax)\n■ What you get: Katsudon + mini soba or mini udon\n\n* Store-limited offering. Available at the locations below.\n\n[Available stores]\nMotomachi / Tachibana / Fukushima / Tachibana Joytown / Nakatsu / Shin-Nagata / Doi / Korien / Takatsuki / Imazato / Deyashiki / Toyonaka / Daini-Amagasaki / Kuise / Sunroad Itami / Kanzakigawa / Okamachi-Ekimae / Fuse / Daini-Fuse',
    },
  },
  {
    id: 'soba-udon-zoryo',
    category: 'campaign',
    date: '2026-01-07',
    title: {
      ja: 'そば・うどん 増量無料キャンペーン',
      en: 'Free Upgrade: Larger Soba & Udon Bowls',
    },
    excerpt: {
      ja: '令和8年1月7日〜1月20日、大盛り料金￥200が無料に。新年からお得に食べる。',
      en: 'Jan 7–20, 2026: the +200 yen large-size charge is on us. A great way to start the year.',
    },
    image: '/images/news-soba-udon-zoryo.jpg',
    body: {
      ja: '本日より、お好きなそば・うどんの増量無料キャンペーンを開催いたします。\n\n新年食べ過ぎてしまったけど、ご飯はちゃんと食べないと元気が出ない——そんなあなたへ。\nたくさん食べてもなんだか罪悪感低めの、おそばの大盛りはいかがでしょうか。\n\n■ 対象期間：令和8年（2026年）1月7日（水）〜1月20日（火）\n■ 内容：大盛り分の￥200が無料\n\n※大盛りの麺は通常の麺の量の1.5倍です。\n※店舗限定の販売ですのでご注意ください。',
      en: 'Starting today, enjoy a free size upgrade on your soba or udon.\n\nFor those who indulged a little over the new year but still need a real meal — a heartier bowl that feels (somehow) less guilty might be just the thing.\n\n■ Period: January 7 (Wed) – January 20 (Tue), 2026\n■ Offer: The +200 yen large-size charge is waived\n\n* Large size = 1.5× the regular noodle portion.\n* Available at participating stores only.',
    },
  },
  {
    id: 'kinoko-tamago-ankake-2025',
    category: 'newMenu',
    date: '2025-11-06',
    title: {
      ja: '秋の季節限定「たっぷりきのこたまごのあんかけ うどん／そば」発売',
      en: 'Autumn Limited: Mushroom & Egg Ankake Soba/Udon Is Back',
    },
    excerpt: {
      ja: '昨年大人気のきのこたまごあんかけがバージョンアップ。たっぷりのきのことふわふわ玉子が相性バツグン。11月6日（木）発売開始。',
      en: 'Last year\'s popular Mushroom & Egg Ankake returns, generously upgraded. Plenty of mushrooms with fluffy egg — on sale from November 6.',
    },
    image: '/images/news-kinoko-tamago-ankake.jpg',
    body: {
      ja: 'おはようございます。都そばです。\nみなさま、大変お待たせいたしました。秋の季節限定商品「たっぷりきのこたまごのあんかけ うどん／そば」のお知らせです。\n\n昨年大人気だったきのこたまごのあんかけが、バージョンアップして再登場。\n増量したたっぷりのきのこと、ふわふわ玉子が相性バツグン。あんかけが余るほどたっぷりなので、「追いごはん」や「麺大盛り」もおすすめです。\n\n毎日忙しいあなたにこそ食べてもらいたい、食べたらほっこりな一品です。\n\n■ 発売開始日：2025年11月6日（木）\n■ メニュー：たっぷりきのこたまごのあんかけ うどん／そば\n\n―――\n\n【都そば】\n1962年創業、日本初の老舗立ち食い蕎麦チェーン店。\n「早い」「安い」「うまい」の変わらぬ味を、毎日店舗で引くこだわりの出汁で。\n大阪の味として、半世紀以上愛され続けています。',
      en: 'Good morning from Miyako Soba. Thank you for waiting.\n\nWe are pleased to announce our autumn seasonal item: "Mushroom & Egg Ankake Udon / Soba" — a generous bowl of mushrooms and fluffy egg in a thickened broth.\n\nLast year\'s popular Mushroom & Egg Ankake returns, fully upgraded. The mushrooms are even more generous, and the soft egg pairs perfectly. There is so much ankake to spare — adding rice or upgrading to a large noodle portion is highly recommended.\n\nIt is the kind of bowl we want our busy customers to try — something quietly comforting after a long day.\n\n■ On sale from: Thursday, November 6, 2025\n■ Item: Mushroom & Egg Ankake Udon / Soba\n\n―――\n\n[Miyako Soba]\nSince 1962, Japan\'s very first standing soba chain.\n"Fast, affordable, delicious" — with authentic dashi prepared fresh in every shop each day.\nFor over half a century, the taste of Osaka.',
    },
  },
  {
    id: 'year-end-2025',
    category: 'notice',
    date: '2025-12-31',
    title: {
      ja: '2025年もありがとうございました',
      en: 'Thank You for 2025',
    },
    excerpt: {
      ja: '本年も多くのお客様にご来店いただき、誠にありがとうございました。値上げにご負担をおかけしたことへのお詫びと、感謝を込めて。',
      en: 'Thank you for visiting us throughout 2025. With apologies for the price increases, and our deepest thanks for staying with us.',
    },
    image: '/images/news-yearend-2025.jpg',
    body: {
      ja: '2025年もたくさんのお客様にご来店いただきまして、本当にありがとうございました。\n本年は広報担当が独断で勝手に作成した、ちょっとレトロな「都スペシャル」のビジュアルで締めくくりをさせていただきます。\n\n―――\n\n前々から少しずつ物価が上昇していた中、何とかやりくりしていたものの、ついに大幅な値上げをしなければ従業員の生活が守れない。そんな年だった2025年でした。\n\n都そばには欠かせない昆布の不作、米の価格上昇。\nそれでも昔からこだわって毎朝作る、あのそばつゆの味は落としたくない。美味しいものをお客様に食べていただきたい。\n\nお客様には多大なご負担をおかけしてしまい、本当に申し訳ございません。\nそれでも受け入れてくださったお客様、本当にありがとうございます。\n\n来年も皆様に美味しいおそば・おうどんをお召し上がりいただけるよう精進いたしますので、どうぞよろしくお願いいたします。\n\n※今回は広報担当ではなく、弊社代表より改めて皆様にお詫びと感謝を申し上げます。',
      en: 'Thank you so much for visiting us throughout 2025.\nWe are closing out the year with a slightly retro "Miyako Special" visual, put together by our PR team a little on a whim.\n\n―――\n\nPrices had been rising gradually for some time, and we had been managing — but 2025 was the year we finally had to raise our own substantially, to protect the livelihoods of our staff.\n\nA poor kombu harvest — essential to Miyako Soba — and rising rice prices made this unavoidable.\nEven so, the soba broth we have made fresh every morning since the beginning — that flavor, we will not compromise. We want to serve our customers food that is genuinely good.\n\nWe are deeply sorry for the burden this places on you.\nAnd to all of you who continued to support us through this year — thank you, sincerely.\n\nWe will keep working so that next year you can again enjoy our soba and udon at their best. Thank you for your continued support.\n\n* This message comes, this time, not from our PR team but from our company representative — as a personal apology and a heartfelt thanks.',
    },
  },
];
