export type NewsCategory = 'newMenu' | 'campaign' | 'store' | 'notice';

export type NewsItem = {
  id: string;
  category: NewsCategory;
  date: string; // ISO yyyy-mm-dd
  title: { ja: string; en: string; zh: string; ko: string };
  excerpt: { ja: string; en: string; zh: string; ko: string };
  image: string;
  body?: { ja: string; en: string; zh: string; ko: string };
};

// 仮データ。後日 microCMS / Supabase 等のCMSに差し替える前提。
export const news: NewsItem[] = [
  {
    id: 'miyakosoba-no-hi-202606',
    category: 'campaign',
    date: '2026-06-08',
    title: {
      ja: '毎月8日は「都そばの日」！麺類み〜んなお得',
      en: 'The 8th of Every Month Is "Miyako Soba Day"!',
      zh: '每月8日是"都荞麦日"！面类全员超值',
      ko: '매월 8일은 "미야코소바의 날"! 면류 전부 이득',
    },
    excerpt: {
      ja: 'そば・うどん全品対象（ラーメンは対象外）、「そば・うどん」の部分が半額に！ご来店のお客様には6月9日〜6月30日に使えるそば・うどん50円引き券もプレゼント。',
      en: 'All soba & udon items (ramen excluded) — the soba/udon portion is half price! Visitors also receive a 50-yen discount coupon valid June 9–30.',
      zh: '荞麦面・乌冬面全品适用（拉面除外），「荞麦面・乌冬面」部分半价！到店顾客还可获赠6月9日〜6月30日可用的荞麦面・乌冬面50日元优惠券。',
      ko: '소바・우동 전 메뉴 대상（라멘 제외）, "소바・우동" 부분이 반값! 방문 고객에게는 6월 9일~6월 30일에 사용 가능한 소바・우동 50엔 할인권도 증정합니다.',
    },
    image: '/images/campaign-miyakosoba-day.jpg',
    body: {
      ja: '毎月8日は「都そばの日」！\nということで、そば・うどんが200円引きで食べられちゃいます。\n\n今回はざるそば・ざるうどんも対象ですので、暑い日にもピッタリです。\n\n■ 対象：そば・うどん全品（※ラーメンは対象外です）\n■ 内容：「そば・うどん」の部分が半額に\n\n【一例】\n・かけ　通常400円 → 200円\n・かき揚げ　通常560円 → 360円\n・スタミナ　通常640円 → 440円\n・大人気のかつ丼セット　通常1,050円 → 850円\n・ざるそば・ざるうどん　通常490円 → 290円\n・温玉かき揚げぶっかけ（冷たい麺も対象！）　通常670円 → 470円\n\n―――\n\nさらに、ご来店いただいたお客様には、令和8年6月9日〜令和8年6月30日の間にお使いいただけるそば・うどん50円引き券を配布いたします。\n\n都そばの日に都そばを食べると2度美味しい。\n皆様のご来店を心よりお待ちしております！\n\n※その他の注意事項は店頭のポスターに記載しております。詳しくはポスターをご確認ください。',
      en: 'The 8th of every month is "Miyako Soba Day"!\nOn this day, soba and udon are 200 yen off.\n\nThis time, zaru soba and zaru udon are included too, so it\'s perfect for a hot day.\n\n■ Eligible: All soba & udon items (ramen is excluded)\n■ Offer: The soba/udon portion of your order is half price\n\n[Examples]\n・Kake: regularly 400 yen → 200 yen\n・Kakiage: regularly 560 yen → 360 yen\n・Stamina: regularly 640 yen → 440 yen\n・Popular Katsudon Set: regularly 1,050 yen → 850 yen\n・Zaru Soba / Zaru Udon: regularly 490 yen → 290 yen\n・Onsen-egg Kakiage Bukkake (cold noodles included!): regularly 670 yen → 470 yen\n\n―――\n\nAdditionally, all visitors will receive a 50-yen discount coupon for soba/udon, valid from June 9 to June 30, 2026.\n\nEating Miyako Soba on Miyako Soba Day is doubly delicious.\nWe look forward to your visit!\n\n* For other terms and conditions, please see the poster displayed in-store.',
      zh: '每月8日是"都荞麦日"！\n这一天，荞麦面・乌冬面可享受200日元优惠。\n\n这次连凉拌荞麦面・凉拌乌冬面也在适用范围内，炎热的日子里正合适。\n\n■ 适用范围：荞麦面・乌冬面全品（※拉面不适用）\n■ 内容：「荞麦面・乌冬面」部分半价\n\n【示例】\n・清汤荞麦面　原价400日元 → 200日元\n・炸什锦天妇罗　原价560日元 → 360日元\n・能量盖浇　原价640日元 → 440日元\n・人气猪排盖饭套餐　原价1,050日元 → 850日元\n・凉拌荞麦面・凉拌乌冬面　原价490日元 → 290日元\n・温泉蛋天妇罗冷面（冷面也适用！）　原价670日元 → 470日元\n\n―――\n\n此外，到店顾客还将获赠一张荞麦面・乌冬面50日元优惠券，可于2026年6月9日〜6月30日期间使用。\n\n在都荞麦日吃都荞麦，美味加倍。\n我们衷心期待您的光临！\n\n※其他注意事项请见店内海报，详情请确认海报内容。',
      ko: '매월 8일은 "미야코소바의 날"!\n이날은 소바・우동을 200엔 할인된 가격으로 즐기실 수 있습니다.\n\n이번에는 자루소바・자루우동도 대상이므로, 더운 날에도 안성맞춤입니다.\n\n■ 대상: 소바・우동 전 메뉴（※라멘은 대상에서 제외）\n■ 내용: "소바・우동" 부분이 반값\n\n【예시】\n・가케　기존 400엔 → 200엔\n・카키아게　기존 560엔 → 360엔\n・스태미나　기존 640엔 → 440엔\n・인기 카츠동 세트　기존 1,050엔 → 850엔\n・자루소바・자루우동　기존 490엔 → 290엔\n・온천란 카키아게 붓카케（차가운 면도 대상!）　기존 670엔 → 470엔\n\n―――\n\n또한, 방문해 주신 고객님께는 2026년 6월 9일~6월 30일 동안 사용하실 수 있는 소바・우동 50엔 할인권을 증정해 드립니다.\n\n미야코소바의 날에 미야코소바를 먹으면 두 배로 맛있습니다.\n여러분의 많은 방문 부탁드립니다!\n\n※기타 유의사항은 매장 내 포스터에 기재되어 있습니다. 자세한 내용은 포스터를 확인해 주세요.',
    },
  },
  {
    id: 'katsudon-mini-set',
    category: 'campaign',
    date: '2026-01-07',
    title: {
      ja: 'かつ丼ミニ麺セット、期間限定で復活',
      en: 'Katsudon Mini-Noodle Set Returns for a Limited Time',
      zh: '猪排盖饭迷你面套餐，限期回归',
      ko: '카츠동 미니면 세트, 기간 한정으로 부활',
    },
    excerpt: {
      ja: '都そば人気No.1のかつ丼に、ミニそばまたはミニうどんがついたお得なセットが期間限定で復活。840円（税込）。',
      en: 'Our most popular Katsudon, paired with mini soba or udon — back for a limited time. 840 JPY (incl. tax).',
      zh: '都荞麦人气No.1的猪排盖饭，搭配迷你荞麦面或迷你乌冬面的超值套餐限期回归。840日元（含税）。',
      ko: '미야코소바 인기 No.1 카츠동에 미니소바 또는 미니우동이 곁들여진 알뜰 세트가 기간 한정으로 부활. 840엔（세금 포함）.',
    },
    image: '/images/news-katsudon-mini-set.jpg',
    body: {
      ja: '都そば人気No.1と言っても過言ではないほど大人気の「かつ丼」。\nそのかつ丼とミニ麺のセットが、期間限定で復活します。\n\nご飯ものにはやはり汁物が欲しい。そんな時にはやっぱりミニ麺セット。\nミニそば、またはミニうどんからお選びいただけます。\n\n■ 価格：840円（税込）\n■ 内容：かつ丼 ＋ ミニそば または ミニうどん\n\n※店舗限定の販売ですのでご注意ください。\n\n【対象店舗】\n元町店 / 立花店 / 福島店 / 立花ジョイタウン店 / 中津店 / 新長田店 / 土居店 / 香里園店 / 高槻店 / 今里店 / 出屋敷店 / 豊中店 / 第二尼崎店 / 杭瀬店 / サンロード伊丹店 / 神崎川店 / 岡町駅前店 / 布施店 / 第二布施店',
      en: 'The Katsudon — arguably the most popular item across Miyako Soba — returns paired with a mini noodle bowl, for a limited time only.\n\nPairing rice with a hot bowl always feels right. The Katsudon Mini-Noodle Set lets you choose between mini soba and mini udon.\n\n■ Price: 840 JPY (incl. tax)\n■ What you get: Katsudon + mini soba or mini udon\n\n* Store-limited offering. Available at the locations below.\n\n[Available stores]\nMotomachi / Tachibana / Fukushima / Tachibana Joytown / Nakatsu / Shin-Nagata / Doi / Korien / Takatsuki / Imazato / Deyashiki / Toyonaka / Daini-Amagasaki / Kuise / Sunroad Itami / Kanzakigawa / Okamachi-Ekimae / Fuse / Daini-Fuse',
      zh: '被誉为都荞麦人气No.1毫不为过的「猪排盖饭」。\n这款猪排盖饭与迷你面的套餐，将限期回归。\n\n吃饭总想配点汤面。这种时候就该选迷你面套餐。\n可在迷你荞麦面与迷你乌冬面中任选其一。\n\n■ 价格：840日元（含税）\n■ 内容：猪排盖饭 ＋ 迷你荞麦面 或 迷你乌冬面\n\n※仅限部分门店销售，敬请留意。\n\n【对象门店】\n元町店 / 立花店 / 福岛店 / 立花Joytown店 / 中津店 / 新长田店 / 土居店 / 香里园店 / 高槻店 / 今里店 / 出屋敷店 / 丰中店 / 第二尼崎店 / 杭濑店 / Sunroad伊丹店 / 神崎川店 / 冈町站前店 / 布施店 / 第二布施店',
      ko: '미야코소바 인기 No.1이라고 해도 과언이 아닐 정도로 인기가 많은 「카츠동」.\n이 카츠동과 미니면 세트가 기간 한정으로 부활합니다.\n\n밥과 함께라면 역시 국물이 필요하죠. 그럴 때는 역시 미니면 세트.\n미니소바 또는 미니우동 중에서 선택하실 수 있습니다.\n\n■ 가격: 840엔（세금 포함）\n■ 내용: 카츠동 ＋ 미니소바 또는 미니우동\n\n※매장 한정 판매이므로 주의해 주세요.\n\n【대상 매장】\n모토마치점 / 다치바나점 / 후쿠시마점 / 다치바나 조이타운점 / 나카쓰점 / 신나가타점 / 도이점 / 고리엔점 / 다카쓰키점 / 이마자토점 / 데야시키점 / 도요나카점 / 다이니아마가사키점 / 구이세점 / 선로드이타미점 / 간자키가와점 / 오카마치역앞점 / 후세점 / 다이니후세점',
    },
  },
  {
    id: 'soba-udon-zoryo',
    category: 'campaign',
    date: '2026-01-07',
    title: {
      ja: 'そば・うどん 増量無料キャンペーン',
      en: 'Free Upgrade: Larger Soba & Udon Bowls',
      zh: '荞麦面・乌冬面 加量免费活动',
      ko: '소바・우동 증량 무료 캠페인',
    },
    excerpt: {
      ja: '令和8年1月7日〜1月20日、大盛り料金￥200が無料に。新年からお得に食べる。',
      en: 'Jan 7–20, 2026: the +200 yen large-size charge is on us. A great way to start the year.',
      zh: '2026年1月7日〜1月20日，大份加价￥200免费。新年享受超值美味。',
      ko: '2026년 1월 7일~1월 20일, 곱빼기 추가요금 ￥200이 무료. 새해부터 알뜰하게 즐기세요.',
    },
    image: '/images/campaign-zoryo.jpg',
    body: {
      ja: '本日より、お好きなそば・うどんの増量無料キャンペーンを開催いたします。\n\n新年食べ過ぎてしまったけど、ご飯はちゃんと食べないと元気が出ない——そんなあなたへ。\nたくさん食べてもなんだか罪悪感低めの、おそばの大盛りはいかがでしょうか。\n\n■ 対象期間：令和8年（2026年）1月7日（水）〜1月20日（火）\n■ 内容：大盛り分の￥200が無料\n\n※大盛りの麺は通常の麺の量の1.5倍です。\n※店舗限定の販売ですのでご注意ください。',
      en: 'Starting today, enjoy a free size upgrade on your soba or udon.\n\nFor those who indulged a little over the new year but still need a real meal — a heartier bowl that feels (somehow) less guilty might be just the thing.\n\n■ Period: January 7 (Wed) – January 20 (Tue), 2026\n■ Offer: The +200 yen large-size charge is waived\n\n* Large size = 1.5× the regular noodle portion.\n* Available at participating stores only.',
      zh: '即日起，举办您喜爱的荞麦面・乌冬面加量免费活动。\n\n新年吃多了，但不好好吃饭就没精神——给这样的您。\n不妨试试罪恶感较低的荞麦面大份吧。\n\n■ 活动期间：2026年1月7日（周三）〜1月20日（周二）\n■ 内容：大份加价￥200免费\n\n※大份面量为普通面量的1.5倍。\n※仅限部分门店销售，敬请留意。',
      ko: '오늘부터 원하시는 소바・우동 증량 무료 캠페인을 진행합니다.\n\n새해에 과식했지만, 그래도 든든히 먹어야 힘이 나는 법이죠—그런 분들께.\n많이 먹어도 죄책감이 덜한 소바 곱빼기는 어떠세요.\n\n■ 행사 기간: 2026년 1월 7일（수）~1월 20일（화）\n■ 내용: 곱빼기 추가요금 ￥200 무료\n\n※곱빼기 면의 양은 일반 면의 1.5배입니다.\n※매장 한정 판매이므로 주의해 주세요.',
    },
  },
  {
    id: 'kinoko-tamago-ankake-2025',
    category: 'newMenu',
    date: '2025-11-06',
    title: {
      ja: '秋の季節限定「たっぷりきのこたまごのあんかけ うどん／そば」発売',
      en: 'Autumn Limited: Mushroom & Egg Ankake Soba/Udon Is Back',
      zh: '秋季限定「满满香菇鸡蛋芡汁乌冬面／荞麦面」发售',
      ko: '가을 한정「듬뿍 버섯 달걀 안카케 우동/소바」출시',
    },
    excerpt: {
      ja: '昨年大人気のきのこたまごあんかけがバージョンアップ。たっぷりのきのことふわふわ玉子が相性バツグン。11月6日（木）発売開始。',
      en: 'Last year\'s popular Mushroom & Egg Ankake returns, generously upgraded. Plenty of mushrooms with fluffy egg — on sale from November 6.',
      zh: '去年人气爆棚的香菇鸡蛋芡汁全面升级。满满的香菇与松软鸡蛋绝配。11月6日（周四）开售。',
      ko: '작년 큰 인기를 끌었던 버섯 달걀 안카케가 업그레이드. 듬뿍 들어간 버섯과 폭신한 달걀의 환상 궁합. 11월 6일（목）출시.',
    },
    image: '/images/news-kinoko-tamago-ankake.jpg',
    body: {
      ja: 'おはようございます。都そばです。\nみなさま、大変お待たせいたしました。秋の季節限定商品「たっぷりきのこたまごのあんかけ うどん／そば」のお知らせです。\n\n昨年大人気だったきのこたまごのあんかけが、バージョンアップして再登場。\n増量したたっぷりのきのこと、ふわふわ玉子が相性バツグン。あんかけが余るほどたっぷりなので、「追いごはん」や「麺大盛り」もおすすめです。\n\n毎日忙しいあなたにこそ食べてもらいたい、食べたらほっこりな一品です。\n\n■ 発売開始日：2025年11月6日（木）\n■ メニュー：たっぷりきのこたまごのあんかけ うどん／そば\n\n―――\n\n【都そば】\n1962年創業、日本初の老舗立ち食い蕎麦チェーン店。\n「早い」「安い」「うまい」の変わらぬ味を、毎日店舗で引くこだわりの出汁で。\n大阪の味として、半世紀以上愛され続けています。',
      en: 'Good morning from Miyako Soba. Thank you for waiting.\n\nWe are pleased to announce our autumn seasonal item: "Mushroom & Egg Ankake Udon / Soba" — a generous bowl of mushrooms and fluffy egg in a thickened broth.\n\nLast year\'s popular Mushroom & Egg Ankake returns, fully upgraded. The mushrooms are even more generous, and the soft egg pairs perfectly. There is so much ankake to spare — adding rice or upgrading to a large noodle portion is highly recommended.\n\nIt is the kind of bowl we want our busy customers to try — something quietly comforting after a long day.\n\n■ On sale from: Thursday, November 6, 2025\n■ Item: Mushroom & Egg Ankake Udon / Soba\n\n―――\n\n[Miyako Soba]\nSince 1962, Japan\'s very first standing soba chain.\n"Fast, affordable, delicious" — with authentic dashi prepared fresh in every shop each day.\nFor over half a century, the taste of Osaka.',
      zh: '早上好，这里是都荞麦。\n各位久等了。为大家带来秋季限定商品「满满香菇鸡蛋芡汁乌冬面／荞麦面」的发售消息。\n\n去年大受欢迎的香菇鸡蛋芡汁，全面升级再度登场。\n加量的满满香菇与松软鸡蛋堪称绝配。芡汁分量十足，推荐搭配「加饭」或「面条大份」一起享用。\n\n这是一道想献给每天忙碌的您、吃了让人倍感温暖的料理。\n\n■ 发售日期：2025年11月6日（周四）\n■ 菜品：满满香菇鸡蛋芡汁乌冬面／荞麦面\n\n―――\n\n【都荞麦】\n1962年创立，日本首家老字号站立式荞麦面连锁店。\n「快速」「实惠」「美味」的不变味道，源自每日在店内精心熬制的高汤。\n作为大阪的味道，深受喜爱已超过半个世纪。',
      ko: '안녕하세요. 미야코소바입니다.\n많이 기다리셨습니다. 가을 시즌 한정 상품「듬뿍 버섯 달걀 안카케 우동/소바」출시 소식을 전해 드립니다.\n\n작년 큰 인기를 끌었던 버섯 달걀 안카케가 업그레이드되어 다시 등장합니다.\n양을 늘린 듬뿍 버섯과 폭신한 달걀의 환상적인 궁합. 안카케가 넘칠 만큼 듬뿍 들어가 있어, "공깃밥 추가"나 "면 곱빼기"도 추천드립니다.\n\n매일 바쁜 당신에게 꼭 권해드리고 싶은, 먹으면 마음까지 따뜻해지는 한 그릇입니다.\n\n■ 출시일: 2025년 11월 6일（목）\n■ 메뉴: 듬뿍 버섯 달걀 안카케 우동/소바\n\n―――\n\n【미야코소바】\n1962년 창업, 일본 최초의 노포 스탠딩 소바 체인점.\n"빠르게" "저렴하게" "맛있게"라는 변함없는 맛을, 매일 매장에서 우려내는 정성 가득한 육수로.\n오사카의 맛으로서 반세기 이상 사랑받고 있습니다.',
    },
  },
  {
    id: 'year-end-2025',
    category: 'notice',
    date: '2025-12-31',
    title: {
      ja: '2025年もありがとうございました',
      en: 'Thank You for 2025',
      zh: '感谢大家2025年的支持',
      ko: '2025년에도 감사했습니다',
    },
    excerpt: {
      ja: '本年も多くのお客様にご来店いただき、誠にありがとうございました。値上げにご負担をおかけしたことへのお詫びと、感謝を込めて。',
      en: 'Thank you for visiting us throughout 2025. With apologies for the price increases, and our deepest thanks for staying with us.',
      zh: '感谢今年众多顾客的光临惠顾。对于因涨价给大家带来的负担，致以诚挚的歉意与感谢。',
      ko: '올해도 많은 고객님께서 방문해 주셔서 진심으로 감사드립니다. 가격 인상으로 부담을 드린 점에 대한 사과와 감사의 마음을 담아.',
    },
    image: '/images/news-yearend-2025.jpg',
    body: {
      ja: '2025年もたくさんのお客様にご来店いただきまして、本当にありがとうございました。\n本年は広報担当が独断で勝手に作成した、ちょっとレトロな「都スペシャル」のビジュアルで締めくくりをさせていただきます。\n\n―――\n\n前々から少しずつ物価が上昇していた中、何とかやりくりしていたものの、ついに大幅な値上げをしなければ従業員の生活が守れない。そんな年だった2025年でした。\n\n都そばには欠かせない昆布の不作、米の価格上昇。\nそれでも昔からこだわって毎朝作る、あのそばつゆの味は落としたくない。美味しいものをお客様に食べていただきたい。\n\nお客様には多大なご負担をおかけしてしまい、本当に申し訳ございません。\nそれでも受け入れてくださったお客様、本当にありがとうございます。\n\n来年も皆様に美味しいおそば・おうどんをお召し上がりいただけるよう精進いたしますので、どうぞよろしくお願いいたします。\n\n※今回は広報担当ではなく、弊社代表より改めて皆様にお詫びと感謝を申し上げます。',
      en: 'Thank you so much for visiting us throughout 2025.\nWe are closing out the year with a slightly retro "Miyako Special" visual, put together by our PR team a little on a whim.\n\n―――\n\nPrices had been rising gradually for some time, and we had been managing — but 2025 was the year we finally had to raise our own substantially, to protect the livelihoods of our staff.\n\nA poor kombu harvest — essential to Miyako Soba — and rising rice prices made this unavoidable.\nEven so, the soba broth we have made fresh every morning since the beginning — that flavor, we will not compromise. We want to serve our customers food that is genuinely good.\n\nWe are deeply sorry for the burden this places on you.\nAnd to all of you who continued to support us through this year — thank you, sincerely.\n\nWe will keep working so that next year you can again enjoy our soba and udon at their best. Thank you for your continued support.\n\n* This message comes, this time, not from our PR team but from our company representative — as a personal apology and a heartfelt thanks.',
      zh: '2025年承蒙众多顾客光临，衷心感谢。\n今年的结尾，就用宣传负责人擅自制作的一张略带复古风格的「都特别套餐」视觉来收尾吧。\n\n―――\n\n物价早已逐渐上涨，我们一直在想方设法维持，但最终还是不得不大幅涨价，否则无法保障员工的生活。2025年就是这样的一年。\n\n都荞麦不可或缺的昆布歉收，米价也在上涨。\n即便如此，我们也不想放弃自创业以来每天清晨用心熬制的那份荞麦汤的味道。我们希望让顾客吃到真正美味的食物。\n\n给各位顾客带来了沉重的负担，我们深感抱歉。\n即便如此仍然接受我们的顾客，真的非常感谢。\n\n明年我们也将继续精进，为大家奉上美味的荞麦面与乌冬面，敬请多多关照。\n\n※这次不是宣传负责人，而是由本公司代表再次向各位致以歉意与感谢。',
      ko: '2025년에도 많은 고객님께서 방문해 주셔서 진심으로 감사드립니다.\n올해는 홍보 담당자가 독단으로 제작한, 살짝 레트로한 「미야코 스페셜」 이미지로 마무리하고자 합니다.\n\n―――\n\n예전부터 조금씩 물가가 오르는 가운데 어떻게든 버텨왔지만, 결국 큰 폭의 가격 인상 없이는 직원들의 생활을 지킬 수 없게 되었습니다. 2025년은 그런 한 해였습니다.\n\n미야코소바에 빠질 수 없는 다시마의 흉작, 그리고 쌀값 상승.\n그럼에도 불구하고 창업 이래 매일 아침 정성껏 우려온 그 소바 국물의 맛만큼은 떨어뜨리고 싶지 않습니다. 고객님께 맛있는 음식을 드리고 싶습니다.\n\n고객님께 큰 부담을 드리게 되어 진심으로 죄송합니다.\n그럼에도 받아들여 주신 고객님께 진심으로 감사드립니다.\n\n내년에도 여러분께 맛있는 소바・우동을 드릴 수 있도록 정진하겠습니다. 잘 부탁드립니다.\n\n※이번에는 홍보 담당자가 아닌, 저희 회사 대표가 직접 여러분께 사과와 감사의 말씀을 드립니다.',
    },
  },
];
