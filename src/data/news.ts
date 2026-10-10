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
      ja: '都そばの新名物「ぽて天」10月13日発売',
      en: 'New Signature "Potaten" Launches October 13',
      zh: '都荞麦新招牌「炸薯天」10月13日开售',
      ko: '미야코소바의 새 명물 「포테텐」 10월 13일 출시',
    },
    excerpt: {
      ja: 'ほくほく、じゅわっと広がる天のうまみ。新名物「ぽて天そば」520円（税込）を10月13日より発売します。',
      en: 'Fluffy potato, juicy tempura flavor. Our new signature Potaten Soba launches October 13 at ¥520 (incl. tax).',
      zh: '松软薯块，天妇罗鲜香四溢。新招牌「炸薯天荞麦面」520日元（含税），10月13日开售。',
      ko: '포근한 감자와 촉촉하게 퍼지는 튀김의 감칠맛. 새 명물 「포테텐 소바」 520엔(세금 포함), 10월 13일 출시.',
    },
    image: '/images/news-potaten-soba-v2.jpg',
    body: {
      ja: '【都そばの新名物完成!!👏🎊🎉】\n10月13日発売開始！！\nこの度都そばの新名物「ぽて天」誕生！！\n\n細かい味の調整にこだわりまくって完成した新商品です✨\n美味しいほくほくのポテトが天ぷらになりました！！\n\n腹持ちバツグンなのに単品なんと「120円」👀⁉\n都そばこだわりのそばつゆがしみるとさらに美味しい🤤\n\n多くのお客様にお召し上がりいただきたいので\n【本日からミニぽて天サンプルを無料でお付けしちゃいます！！】\n\n何度も試作を重ねてどのトッピングとも合うお味に仕上がりましたのでぜひご賞味ください🥰✨✨\n\n【発売日】令和8年10月13日（火）\n【サンプル配布期間】令和8年10月15日（木）まで\n※各店1日あたりのサンプル配布上限数がございますのでご了承ください。\n※一部店舗ではお取り扱いがございません。',
      en: '【Our new Miyako Soba signature is here!!👏🎊🎉】\nOn sale from October 13!!\nIntroducing "Potaten" — the new signature of Miyako Soba!!\n\nWe fine-tuned the flavor again and again to complete this new item✨\nDelicious, fluffy potato, turned into tempura!!\n\nSo filling, yet a single piece is just ¥120👀⁉\nEven better once it soaks up our signature soba broth🤤\n\nWe want as many customers as possible to try it, so\n【starting today, a free Mini Potaten sample comes with your order!!】\n\nAfter many trial batches, it now pairs with any topping — please give it a try🥰✨✨\n\n[On sale] Tuesday, October 13, 2026\n[Sample giveaway] Until Thursday, October 15, 2026\n*Each store has a daily limit on samples. Thank you for your understanding.\n*Not available at some stores.',
      zh: '【都荞麦的新招牌登场!!👏🎊🎉】\n10月13日开售！！\n都荞麦的新招牌「炸薯天」诞生！！\n\n反复细致调整味道才完成的新商品✨\n美味松软的土豆，变成了天妇罗！！\n\n饱腹感十足，单品竟然只要「120日元」👀⁉\n吸满都荞麦讲究的荞麦面汤后更加美味🤤\n\n希望让更多顾客品尝，所以\n【即日起免费附赠迷你炸薯天试吃！！】\n\n历经多次试作，与任何配料都相配，敬请品尝🥰✨✨\n\n【开售日】2026年10月13日（周二）\n【试吃发放期间】至2026年10月15日（周四）\n※各店每日试吃发放数量有上限，敬请谅解。\n※部分门店不提供此商品。',
      ko: '【미야코소바의 새 명물 완성!!👏🎊🎉】\n10월 13일 발매 개시!!\n이번에 미야코소바의 새 명물 「포테텐」 탄생!!\n\n세밀한 맛 조정에 공을 들여 완성한 신상품입니다✨\n맛있고 포근한 감자가 튀김이 되었습니다!!\n\n든든한데 단품이 무려 「120엔」👀⁉\n미야코소바 특제 소바 육수가 배어들면 더욱 맛있습니다🤤\n\n많은 분들께 맛보여 드리고 싶어\n【오늘부터 미니 포테텐 샘플을 무료로 드립니다!!】\n\n여러 번의 시작을 거쳐 어떤 토핑과도 어울리는 맛으로 완성했으니 꼭 맛봐 주세요🥰✨✨\n\n[발매일] 2026년 10월 13일(화)\n[샘플 배포 기간] 2026년 10월 15일(목)까지\n※각 점포마다 1일 샘플 배포 수량에 상한이 있으니 양해 부탁드립니다.\n※일부 점포에서는 취급하지 않습니다.',
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
      ja: 'そば・うどん全品対象（ラーメンは対象外）、「そば・うどん」の部分が半額に！さらに当日ご来店のお客様に50円引き券をプレゼント。',
      en: 'All soba & udon items (ramen excluded) — the soba/udon portion is half price! Visit on the day and receive a ¥50-off coupon.',
      zh: '荞麦面・乌冬面全品适用（拉面除外），「荞麦面・乌冬面」部分半价！当日到店的顾客还可获赠50日元优惠券。',
      ko: '소바・우동 전 메뉴 대상（라멘 제외）, "소바・우동" 부분이 반값! 당일 방문하신 고객께는 50엔 할인권도 드립니다.',
    },
    image: '/images/news-miyakosoba-day-202610.jpg',
    body: {
      ja: '毎月8日は「都そばの日」！\nそば・うどんの「麺の部分」が半額で食べられちゃいます。\n\n■ 対象：そば・うどん全品（※ラーメンは対象外です）\n■ 内容：「そば・うどん」の部分が半額に\n■ 特典：当日ご来店いただいたお客様に「50円引き券」をプレゼント！\n\n【例えば「たぬきそば」の場合…】\n・そば（通常）400円 → 200円\n・おあげ（通常）110円 → 110円\n　合わせて…通常価格510円 → 310円\n\n【その他の一例】\n・かけ　通常400円 → 200円\n・かき揚げ　通常560円 → 360円\n・スタミナ　通常640円 → 440円\n・大人気のかつ丼セット　通常1,050円 → 850円\n・ざるそば・ざるうどん　通常490円 → 290円\n・温玉かき揚げぶっかけ　通常670円 → 470円\n\n都そばの日に都そばを食べると2度美味しい。\n皆様のご来店を心よりお待ちしております！\n\n※その他の注意事項は店頭のポスターに記載しております。詳しくはポスターをご確認ください。',
      en: 'The 8th of every month is "Miyako Soba Day"!\nThe noodle portion of your soba or udon is half price.\n\n■ Eligible: All soba & udon items (ramen is excluded)\n■ Offer: The soba/udon portion of your order is half price\n■ Bonus: Visit on the day and receive a ¥50-off coupon!\n\n[Example: Tanuki Soba]\n・Soba (regular): 400 yen → 200 yen\n・Oage (regular): 110 yen → 110 yen\n　Together: regularly 510 yen → 310 yen\n\n[More examples]\n・Kake: regularly 400 yen → 200 yen\n・Kakiage: regularly 560 yen → 360 yen\n・Stamina: regularly 640 yen → 440 yen\n・Popular Katsudon Set: regularly 1,050 yen → 850 yen\n・Zaru Soba / Zaru Udon: regularly 490 yen → 290 yen\n・Onsen-egg Kakiage Bukkake: regularly 670 yen → 470 yen\n\nEating Miyako Soba on Miyako Soba Day is doubly delicious.\nWe look forward to your visit!\n\n* For other terms and conditions, please see the poster displayed in-store.',
      zh: '每月8日是"都荞麦日"！\n荞麦面・乌冬面的「面条部分」可享半价。\n\n■ 适用范围：荞麦面・乌冬面全品（※拉面不适用）\n■ 内容：「荞麦面・乌冬面」部分半价\n■ 特典：当日到店的顾客可获赠「50日元优惠券」！\n\n【以「狸荞麦面」为例…】\n・荞麦面（原价）400日元 → 200日元\n・油豆腐皮（原价）110日元 → 110日元\n　合计…原价510日元 → 310日元\n\n【其他示例】\n・清汤荞麦面　原价400日元 → 200日元\n・炸什锦天妇罗　原价560日元 → 360日元\n・能量盖浇　原价640日元 → 440日元\n・人气猪排盖饭套餐　原价1,050日元 → 850日元\n・凉拌荞麦面・凉拌乌冬面　原价490日元 → 290日元\n・温泉蛋天妇罗冷面　原价670日元 → 470日元\n\n在都荞麦日吃都荞麦，美味加倍。\n我们衷心期待您的光临！\n\n※其他注意事项请见店内海报，详情请确认海报内容。',
      ko: '매월 8일은 "미야코소바의 날"!\n소바・우동의 "면 부분"을 반값에 드실 수 있습니다.\n\n■ 대상: 소바・우동 전 메뉴（※라멘은 대상에서 제외）\n■ 내용: "소바・우동" 부분이 반값\n■ 혜택: 당일 방문하신 고객께 "50엔 할인권"을 드립니다!\n\n【예를 들어 "다누키 소바"의 경우…】\n・소바(기존) 400엔 → 200엔\n・유부(기존) 110엔 → 110엔\n　합계…기존 510엔 → 310엔\n\n【그 외 예시】\n・가케　기존 400엔 → 200엔\n・카키아게　기존 560엔 → 360엔\n・스태미나　기존 640엔 → 440엔\n・인기 카츠동 세트　기존 1,050엔 → 850엔\n・자루소바・자루우동　기존 490엔 → 290엔\n・온천란 카키아게 붓카케　기존 670엔 → 470엔\n\n미야코소바의 날에 미야코소바를 먹으면 두 배로 맛있습니다.\n여러분의 많은 방문 부탁드립니다!\n\n※기타 유의사항은 매장 내 포스터에 기재되어 있습니다. 자세한 내용은 포스터를 확인해 주세요.',
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
