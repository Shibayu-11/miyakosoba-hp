export type NewsCategory = 'newMenu' | 'campaign' | 'store' | 'notice';

export type NewsItem = {
  id: string;
  category: NewsCategory;
  date: string; // ISO yyyy-mm-dd
  title: { ja: string; en: string; zh: string; ko: string };
  excerpt: { ja: string; en: string; zh: string; ko: string };
  image: string;
  body?: { ja: string; en: string; zh: string; ko: string };
  hiddenFromList?: boolean;
};

// 仮データ。後日 microCMS / Supabase 等のCMSに差し替える前提。
export const news: NewsItem[] = [
  {
    id: 'potaten-soba-202610',
    category: 'newMenu',
    date: '2026-10-09',
    title: {
      ja: '都そばの新名物「ぽて天そば」10月13日発売',
      en: 'New Signature "Potaten Soba" Launches October 13',
      zh: '都荞麦新招牌「炸薯天荞麦面」10月13日开售',
      ko: '미야코소바의 새 명물 「포테텐 소바」 10월 13일 출시',
    },
    excerpt: {
      ja: 'ほくほく、じゅわっと広がる天のうまみ。新名物「ぽて天そば」520円（税込）を10月13日より発売します。',
      en: 'Fluffy potato, juicy tempura flavor. Our new signature Potaten Soba launches October 13 at ¥520 (incl. tax).',
      zh: '松软薯块，天妇罗鲜香四溢。新招牌「炸薯天荞麦面」520日元（含税），10月13日开售。',
      ko: '포근한 감자와 촉촉하게 퍼지는 튀김의 감칠맛. 새 명물 「포테텐 소바」 520엔(세금 포함), 10월 13일 출시.',
    },
    image: '/images/news-potaten-soba.jpg',
    body: {
      ja: 'ほくほく、じゅわっと広がる天のうまみ。都そばの新名物「ぽて天そば」が登場します。\n\n■ ぽて天そば　520円（税込）\n■ ぽて天（単品）　120円（税込）\n\n【発売開始】2026年10月13日（火）\n\n【「ミニぽて天」無料キャンペーン】\n2026年10月9日（金）〜10月15日（木）\n\n※店舗により販売状況・価格・実施内容が異なる場合がございます。\n※数量限定のため、なくなり次第終了となります。',
      en: 'Fluffy potato with the juicy savor of tempura — meet Potaten Soba, our new signature bowl.\n\n■ Potaten Soba — ¥520 (incl. tax)\n■ Potaten (single piece) — ¥120 (incl. tax)\n\n[On sale from] Tuesday, October 13, 2026\n\n[Free "Mini Potaten" campaign]\nFriday, October 9 – Thursday, October 15, 2026\n\n*Availability, prices, and campaign details may vary by store.\n*Limited quantities; the campaign ends once stock runs out.',
      zh: '松软的薯块，搭配天妇罗四溢的鲜香。都荞麦的新招牌「炸薯天荞麦面」隆重登场。\n\n■ 炸薯天荞麦面　520日元（含税）\n■ 炸薯天（单品）　120日元（含税）\n\n【开售日】2026年10月13日（周二）\n\n【「迷你炸薯天」免费活动】\n2026年10月9日（周五）〜10月15日（周四）\n\n※销售情况、价格与活动内容可能因门店而异。\n※数量有限，售完即止。',
      ko: '포근한 감자와 촉촉하게 퍼지는 튀김의 감칠맛. 미야코소바의 새 명물 「포테텐 소바」가 등장합니다.\n\n■ 포테텐 소바　520엔(세금 포함)\n■ 포테텐(단품)　120엔(세금 포함)\n\n[출시일] 2026년 10월 13일(화)\n\n[「미니 포테텐」 무료 캠페인]\n2026년 10월 9일(금)〜10월 15일(목)\n\n※판매 여부, 가격, 실시 내용은 점포에 따라 다를 수 있습니다.\n※수량 한정으로 소진 시 종료됩니다.',
    },
  },
  {
    id: 'soba-udon-zoryo-202601',
    category: 'campaign',
    date: '2026-01-07',
    title: {
      ja: 'そば・うどん 増量無料キャンペーン',
      en: 'Free Soba & Udon Size Upgrade Campaign',
      zh: '荞麦面・乌冬面免费增量活动',
      ko: '소바・우동 무료 증량 캠페인',
    },
    excerpt: {
      ja: '対象期間中、大盛り料金が無料に。新年からお得に食べられるキャンペーンです。',
      en: 'During the campaign period, large-size upgrades are free.',
      zh: '活动期间，大份加量费用免费。',
      ko: '행사 기간 동안 곱빼기 요금이 무료입니다.',
    },
    image: '/images/news-soba-udon-zoryo.jpg',
    body: {
      ja: 'そば・うどんの増量無料キャンペーンを実施します。\n\n対象期間中は、大盛り料金が無料。いつもの一杯をさらに満足感たっぷりにお楽しみいただけます。\n\n※対象商品・実施店舗は店頭にてご確認ください。',
      en: 'We are running a free size-up campaign for soba and udon.\n\nDuring the campaign, large-size upgrades are free.\n\n*Please check in store for eligible items and participating locations.',
      zh: '我们将举办荞麦面・乌冬面免费增量活动。\n\n活动期间，大份加量费用免费。\n\n※适用商品与实施门店请于店内确认。',
      ko: '소바・우동 무료 증량 캠페인을 실시합니다.\n\n행사 기간 동안 곱빼기 요금이 무료입니다.\n\n※대상 상품 및 실시 점포는 매장에서 확인해 주세요.',
    },
    hiddenFromList: true,
  },
  {
    id: 'kinoko-tamago-ankake-202511',
    category: 'newMenu',
    date: '2025-11-06',
    title: {
      ja: '秋の限定 きのこたまごあんかけ',
      en: 'Autumn Limited: Mushroom & Egg Ankake',
      zh: '秋季限定 蘑菇鸡蛋芡汁面',
      ko: '가을 한정 버섯 계란 앙카케',
    },
    excerpt: {
      ja: '旨み広がる、ほっとする一杯。秋限定のきのこたまごあんかけです。',
      en: 'A warm autumn bowl with mushrooms and egg ankake.',
      zh: '鲜味满满、温暖身心的秋季限定一碗。',
      ko: '버섯과 계란의 감칠맛이 퍼지는 가을 한정 메뉴입니다.',
    },
    image: '/images/news-kinoko-tamago-ankake.jpg',
    body: {
      ja: '秋限定メニューとして、きのこたまごあんかけが登場しました。\n\nきのこの旨みとたまごのやさしさを、あんかけでほっと温まる一杯に仕上げています。\n\n※販売状況は店舗により異なる場合がございます。',
      en: 'Our autumn limited mushroom and egg ankake is now available.\n\nA comforting bowl with mushroom umami and gentle egg flavor.\n\n*Availability may vary by store.',
      zh: '秋季限定的蘑菇鸡蛋芡汁面登场。\n\n蘑菇的鲜味与鸡蛋的温和口感，带来温暖的一碗。\n\n※销售情况可能因门店而异。',
      ko: '가을 한정 버섯 계란 앙카케가 출시되었습니다.\n\n버섯의 감칠맛과 계란의 부드러움을 따뜻한 앙카케로 즐겨보세요.\n\n※판매 여부는 점포에 따라 다를 수 있습니다.',
    },
  },
  {
    id: 'oebi-tempura-soba',
    category: 'newMenu',
    date: '2025-10-01',
    title: {
      ja: '大えび天そば、新登場',
      en: 'New: Large Shrimp Tempura Soba',
      zh: '大虾天妇罗荞麦面新登场',
      ko: '대새우 튀김 소바 신등장',
    },
    excerpt: {
      ja: '食べ応えのある大えび天をのせた、新しい一杯です。',
      en: 'A new bowl topped with satisfying large shrimp tempura.',
      zh: '搭配大虾天妇罗的全新一碗。',
      ko: '먹음직한 대새우 튀김을 올린 새로운 한 그릇입니다.',
    },
    image: '/images/menu-tempura.jpg',
    body: {
      ja: '大えび天そばが新登場しました。\n\n食べ応えのある大えび天と、都そばのだしがよく合う一杯です。\n\n※店舗により販売状況・価格が異なる場合がございます。',
      en: 'Large shrimp tempura soba is now available.\n\nEnjoy satisfying shrimp tempura with Miyako Soba broth.\n\n*Availability and prices may vary by store.',
      zh: '大虾天妇罗荞麦面新登场。\n\n大虾天妇罗与都荞麦汤底相得益彰。\n\n※销售情况与价格可能因门店而异。',
      ko: '대새우 튀김 소바가 새롭게 등장했습니다.\n\n먹음직한 대새우 튀김과 미야코소바의 국물이 잘 어울리는 한 그릇입니다.\n\n※판매 여부와 가격은 점포에 따라 다를 수 있습니다.',
    },
  },
  {
    id: 'newyear-2026',
    category: 'notice',
    date: '2026-01-01',
    title: {
      ja: '謹賀新年 2026',
      en: 'Happy New Year 2026',
      zh: '恭贺新年 2026',
      ko: '근하신년 2026',
    },
    excerpt: {
      ja: '2026年も都そばをよろしくお願いいたします。',
      en: 'Thank you for your continued support of Miyako Soba in 2026.',
      zh: '2026年也请继续支持都荞麦。',
      ko: '2026년에도 미야코소바를 잘 부탁드립니다.',
    },
    image: '/images/news-newyear-2026.jpg',
    body: {
      ja: '謹賀新年。\n\n2026年も都そばをよろしくお願いいたします。\n\nいつもの一杯を、今年も気軽にお楽しみいただけるよう努めてまいります。\n皆様のご来店を心よりお待ちしております。',
      en: 'Happy New Year.\n\nThank you for your continued support of Miyako Soba in 2026.\n\nWe look forward to serving you your familiar bowl again this year.',
      zh: '恭贺新年。\n\n2026年也请继续支持都荞麦。\n\n我们将继续努力，让大家轻松享用熟悉的一碗。',
      ko: '새해 복 많이 받으세요.\n\n2026년에도 미야코소바를 잘 부탁드립니다.\n\n올해도 언제나처럼 편하게 즐길 수 있는 한 그릇을 준비하겠습니다.',
    },
    hiddenFromList: true,
  },
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
      ja: 'そば・うどん全品対象（ラーメンは対象外）、「そば・うどん」の部分が半額に！',
      en: 'All soba & udon items (ramen excluded) — the soba/udon portion is half price!',
      zh: '荞麦面・乌冬面全品适用（拉面除外），「荞麦面・乌冬面」部分半价！',
      ko: '소바・우동 전 메뉴 대상（라멘 제외）, "소바・우동" 부분이 반값!',
    },
    image: '/images/news-miyakosoba-day-half.jpg',
    body: {
      ja: '毎月8日は「都そばの日」！\nということで、そば・うどんが200円引きで食べられちゃいます。\n\n今回はざるそば・ざるうどんも対象ですので、暑い日にもピッタリです。\n\n■ 対象：そば・うどん全品（※ラーメンは対象外です）\n■ 内容：「そば・うどん」の部分が半額に\n\n【一例】\n・かけ　通常400円 → 200円\n・かき揚げ　通常560円 → 360円\n・スタミナ　通常640円 → 440円\n・大人気のかつ丼セット　通常1,050円 → 850円\n・ざるそば・ざるうどん　通常490円 → 290円\n・温玉かき揚げぶっかけ（冷たい麺も対象！）　通常670円 → 470円\n\n都そばの日に都そばを食べると2度美味しい。\n皆様のご来店を心よりお待ちしております！\n\n※その他の注意事項は店頭のポスターに記載しております。詳しくはポスターをご確認ください。',
      en: 'The 8th of every month is "Miyako Soba Day"!\nOn this day, soba and udon are 200 yen off.\n\nThis time, zaru soba and zaru udon are included too, so it\'s perfect for a hot day.\n\n■ Eligible: All soba & udon items (ramen is excluded)\n■ Offer: The soba/udon portion of your order is half price\n\n[Examples]\n・Kake: regularly 400 yen → 200 yen\n・Kakiage: regularly 560 yen → 360 yen\n・Stamina: regularly 640 yen → 440 yen\n・Popular Katsudon Set: regularly 1,050 yen → 850 yen\n・Zaru Soba / Zaru Udon: regularly 490 yen → 290 yen\n・Onsen-egg Kakiage Bukkake (cold noodles included!): regularly 670 yen → 470 yen\n\nEating Miyako Soba on Miyako Soba Day is doubly delicious.\nWe look forward to your visit!\n\n* For other terms and conditions, please see the poster displayed in-store.',
      zh: '每月8日是"都荞麦日"！\n这一天，荞麦面・乌冬面可享受200日元优惠。\n\n这次连凉拌荞麦面・凉拌乌冬面也在适用范围内，炎热的日子里正合适。\n\n■ 适用范围：荞麦面・乌冬面全品（※拉面不适用）\n■ 内容：「荞麦面・乌冬面」部分半价\n\n【示例】\n・清汤荞麦面　原价400日元 → 200日元\n・炸什锦天妇罗　原价560日元 → 360日元\n・能量盖浇　原价640日元 → 440日元\n・人气猪排盖饭套餐　原价1,050日元 → 850日元\n・凉拌荞麦面・凉拌乌冬面　原价490日元 → 290日元\n・温泉蛋天妇罗冷面（冷面也适用！）　原价670日元 → 470日元\n\n在都荞麦日吃都荞麦，美味加倍。\n我们衷心期待您的光临！\n\n※其他注意事项请见店内海报，详情请确认海报内容。',
      ko: '매월 8일은 "미야코소바의 날"!\n이날은 소바・우동을 200엔 할인된 가격으로 즐기실 수 있습니다.\n\n이번에는 자루소바・자루우동도 대상이므로, 더운 날에도 안성맞춤입니다.\n\n■ 대상: 소바・우동 전 메뉴（※라멘은 대상에서 제외）\n■ 내용: "소바・우동" 부분이 반값\n\n【예시】\n・가케　기존 400엔 → 200엔\n・카키아게　기존 560엔 → 360엔\n・스태미나　기존 640엔 → 440엔\n・인기 카츠동 세트　기존 1,050엔 → 850엔\n・자루소바・자루우동　기존 490엔 → 290엔\n・온천란 카키아게 붓카케（차가운 면도 대상!）　기존 670엔 → 470엔\n\n미야코소바의 날에 미야코소바를 먹으면 두 배로 맛있습니다.\n여러분의 많은 방문 부탁드립니다!\n\n※기타 유의사항은 매장 내 포스터에 기재되어 있습니다. 자세한 내용은 포스터를 확인해 주세요.',
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
