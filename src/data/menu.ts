export type ItemType = 'soba' | 'udon' | 'both' | 'donburi' | 'other' | 'takeout';

export type Allergen =
  | '小麦' | 'そば' | '卵' | '乳' | 'えび' | 'かに' | '落花生' | 'くるみ'
  | '大豆' | '鶏肉' | '牛肉' | '豚肉' | 'ごま' | 'いか' | 'さば';

export type MenuItem = {
  id: string;
  type: ItemType;
  name: { ja: string; en: string; zh: string; ko: string };
  description: { ja: string; en: string; zh: string; ko: string };
  price: number;
  image: string;
  badge?: { ja: string; en: string; zh: string; ko: string };
  allergens: Allergen[];
  popular?: boolean;
  set?: boolean;
};

// ─── そば・うどん共通（typeはboth）/ そばのみ（soba）/ うどんのみ（udon） ───

export const menu: MenuItem[] = [
  {
    id: 'kake',
    type: 'both',
    name: { ja: 'かけそば／うどん', en: 'Kake Soba/Udon', zh: '清汤荞麦面／乌冬面', ko: '가케소바／우동' },
    description: { ja: 'だしの旨みをそのまま味わえる、原点の一杯。', en: 'A pure bowl that lets the dashi speak for itself.', zh: '原汁原味享受高汤鲜美的基础一碗。', ko: '육수의 깊은 맛을 그대로 느낄 수 있는 기본 한 그릇.' },
    price: 400,
    image: '/images/feature-soba.jpg',
    allergens: ['そば', '小麦', '大豆'],
    popular: true,
  },
  {
    id: 'kitsune',
    type: 'both',
    name: { ja: 'きつねそば／うどん', en: 'Kitsune Soba/Udon', zh: '豆皮荞麦面／乌冬面', ko: '유부소바／우동' },
    description: { ja: '甘辛いお揚げがじゅわっとしみた、やさしい味わい。', en: 'Sweet-savory fried tofu soaked through — gentle and warming.', zh: '甜咸入味的炸豆皮，温润可口。', ko: '달콤짭짤하게 배어든 유부가 부드럽고 포근한 맛.' },
    price: 510,
    image: '/images/menu-kitsune-photo.jpg',
    allergens: ['そば', '小麦', '大豆'],
    popular: true,
  },
  {
    id: 'tsukimi',
    type: 'both',
    name: { ja: '月見そば／うどん', en: 'Tsukimi Soba/Udon', zh: '月见荞麦面／乌冬面', ko: '츠키미소바(달걀)／우동' },
    description: { ja: 'まろやかな卵がだしに溶け込む、やさしい一杯。', en: 'A rich egg in dashi — comforting and simple.', zh: '浓郁的鸡蛋融入高汤，温和暖心的一碗。', ko: '부드러운 달걀이 육수에 녹아드는 포근한 한 그릇.' },
    price: 510,
    image: '/images/menu-tsukimi-photo.jpg',
    allergens: ['そば', '小麦', '卵', '大豆'],
    popular: true,
  },
  {
    id: 'wakame',
    type: 'both',
    name: { ja: 'わかめそば／うどん', en: 'Wakame Soba/Udon', zh: '裙带菜荞麦面／乌冬面', ko: '미역소바／우동' },
    description: { ja: '磯の香りとシャキッとした歯ごたえが心地よい。', en: 'The salt-air aroma and crisp bite of wakame.', zh: '海藻的香气与爽脆口感令人愉悦。', ko: '바다 내음과 아삭한 식감이 기분 좋은 한 그릇.' },
    price: 510,
    image: '/images/menu-wakame-photo.jpg',
    allergens: ['そば', '小麦', '大豆'],
  },
  {
    id: 'oboro',
    type: 'both',
    name: { ja: 'おぼろそば／うどん', en: 'Oboro Soba/Udon', zh: '朧昆布荞麦面／乌冬面', ko: '오보로소바(다시마)／우동' },
    description: { ja: 'とろとろのおぼろ昆布がだしに溶け込む関西の味。', en: 'Silky oboro kombu melted into Kansai-style dashi.', zh: '入口即化的朧昆布融入高汤，关西风味十足。', ko: '부드럽게 녹는 오보로 다시마가 어우러진 간사이의 맛.' },
    price: 510,
    image: '/images/feature-soba.jpg',
    allergens: ['そば', '小麦', '大豆'],
  },
  {
    id: 'kizami',
    type: 'both',
    name: { ja: 'きざみそば／うどん', en: 'Kizami Soba/Udon', zh: '细丝豆皮荞麦面／乌冬面', ko: '키자미소바(잘게 썬 유부)／우동' },
    description: { ja: '細かく刻んだお揚げが全体に広がる、京風の一杯。', en: 'Finely chopped fried tofu spread throughout — Kyoto style.', zh: '切碎的炸豆皮均匀分布，京都风味的一碗。', ko: '잘게 썬 유부가 골고루 퍼진 교토풍 한 그릇.' },
    price: 510,
    image: '/images/menu-kizami.jpg',
    allergens: ['そば', '小麦', '大豆'],
  },
  {
    id: 'tempura',
    type: 'both',
    name: { ja: '天ぷらそば／うどん', en: 'Tempura Soba/Udon', zh: '天妇罗荞麦面／乌冬面', ko: '튀김소바／우동' },
    description: { ja: 'サクサクの天ぷらをのせた、不動の人気メニュー。', en: 'Crispy tempura on a hot bowl — our signature.', zh: '酥脆天妇罗满载，长盛不衰的人气菜单。', ko: '바삭한 튀김을 올린, 변함없는 인기 메뉴.' },
    price: 530,
    image: '/images/menu-tempura-photo.jpg',
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
    popular: true,
  },
  {
    id: 'kakiage',
    type: 'both',
    name: { ja: 'かき揚げそば／うどん', en: 'Kakiage Soba/Udon', zh: '炸什锦天妇罗荞麦面／乌冬面', ko: '카키아게소바(모듬튀김)／우동' },
    description: { ja: '玉ねぎと小えびを揚げた、香ばしいかき揚げ。', en: 'A fragrant kakiage of onion and small shrimp.', zh: '洋葱与小虾炸成的香浓天妇罗。', ko: '양파와 작은 새우를 튀긴 고소한 카키아게.' },
    price: 560,
    image: '/images/menu-kakiage.jpg',
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
  },
  {
    id: 'oebiten',
    type: 'both',
    name: { ja: '大えび天そば／うどん', en: 'Large Shrimp Tempura Soba/Udon', zh: '大虾天妇罗荞麦面／乌冬面', ko: '왕새우 튀김소바／우동' },
    description: { ja: '自家製大えびの天ぷらをどんとのせた、贅沢な一杯。', en: 'Generous house-made large shrimp tempura.', zh: '满满一份自家制大虾天妇罗，奢华的一碗。', ko: '푸짐한 수제 왕새우 튀김을 올린 풍성한 한 그릇.' },
    price: 610,
    image: '/images/menu-oebiten.jpg',
    badge: { ja: '自家製', en: 'House-made', zh: '自家制', ko: '수제' },
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
  },
  {
    id: 'stamina',
    type: 'both',
    name: { ja: 'スタミナそば／うどん', en: 'Stamina Soba/Udon', zh: '能量荞麦面／乌冬面', ko: '스태미나소바／우동' },
    description: { ja: '天ぷらと卵の組み合わせで、しっかりお腹を満たす。', en: 'Tempura and egg together for a truly filling bowl.', zh: '天妇罗与鸡蛋的组合，让人吃得饱饱的。', ko: '튀김과 달걀의 조합으로 든든하게 채워주는 한 그릇.' },
    price: 640,
    image: '/images/hero-soba.jpg',
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
  },
  {
    id: 'niku',
    type: 'both',
    name: { ja: '肉そば／うどん', en: 'Beef Soba/Udon', zh: '牛肉荞麦面／乌冬面', ko: '소고기소바／우동' },
    description: { ja: 'しっかりと味付けした牛肉がだしに絡む、満足の一杯。', en: 'Richly seasoned beef nestled in dashi.', zh: '入味十足的牛肉与高汤完美融合，满足感十足。', ko: '깊게 양념한 소고기가 육수와 어우러진 든든한 한 그릇.' },
    price: 680,
    image: '/images/menu-niku.jpg',
    allergens: ['そば', '小麦', '牛肉', '大豆'],
  },
  {
    id: 'miyako-special',
    type: 'both',
    name: { ja: '都スペシャルそば／うどん', en: 'Miyako Special Soba/Udon', zh: '都特别套餐荞麦面／乌冬面', ko: '미야코 스페셜 소바／우동' },
    description: { ja: '天ぷら・卵・お揚げを全部のせた、都そばの最高傑作。', en: 'Tempura, egg and fried tofu all together — our masterpiece.', zh: '天妇罗、鸡蛋、炸豆皮一应俱全，都荞麦的巅峰之作。', ko: '튀김・달걀・유부를 모두 올린, 미야코소바의 최고 걸작.' },
    price: 830,
    image: '/images/menu-miyakospecial.jpg',
    badge: { ja: '自家製', en: 'House-made', zh: '自家制', ko: '수제' },
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
    popular: true,
  },
  {
    id: 'curry',
    type: 'both',
    name: { ja: 'カレーそば／うどん', en: 'Curry Soba/Udon', zh: '咖喱荞麦面／乌冬面', ko: '카레소바／우동' },
    description: { ja: 'スパイスの効いたカレーだしが、そばに絡む一杯。', en: 'Spiced curry dashi clinging to every noodle.', zh: '香辛浓郁的咖喱高汤，与荞麦面相得益彰。', ko: '향신료가 살아있는 카레 육수가 면에 어우러진 한 그릇.' },
    price: 790,
    image: '/images/menu-curry.jpg',
    allergens: ['そば', '小麦', '乳', '大豆'],
  },
  {
    id: 'nishin',
    type: 'both',
    name: { ja: 'にしんそば／うどん', en: 'Nishin Soba/Udon', zh: '鲱鱼荞麦面／乌冬面', ko: '청어소바／우동' },
    description: { ja: '京都名物の甘辛く炊いたにしんをのせた一杯。', en: 'Sweet-soy simmered herring — a Kyoto specialty.', zh: '京都名物，甜咸炖煮的鲱鱼盖在面上的一碗。', ko: '교토 명물, 달콤짭짤하게 조린 청어를 올린 한 그릇.' },
    price: 880,
    image: '/images/menu-nishin-photo.jpg',
    badge: { ja: '京都名物', en: 'Kyoto Classic', zh: '京都名物', ko: '교토 명물' },
    allergens: ['そば', '小麦', 'さば', '大豆'],
  },

  // ── そばのみ ──
  {
    id: 'chuka-soba',
    type: 'soba',
    name: { ja: '中華そば', en: 'Chuka Soba', zh: '中华荞麦面', ko: '중화소바' },
    description: { ja: '自家製の中華そばを使ったこだわりの醤油スープ。', en: 'House-made Chinese noodles in our signature soy broth.', zh: '使用自家制中华面条的讲究酱油汤底。', ko: '수제 중화면을 사용한 깊은 맛의 간장 국물.' },
    price: 600,
    image: '/images/menu-chukasoba.jpg',
    badge: { ja: '自家製', en: 'House-made', zh: '自家制', ko: '수제' },
    allergens: ['そば', '小麦', '鶏肉', '大豆'],
  },

  // ── どんぶり ──
  {
    id: 'joten-don',
    type: 'donburi',
    name: { ja: '上天丼', en: 'Premium Tempura Bowl', zh: '上等天妇罗盖饭', ko: '특상 튀김덮밥' },
    description: { ja: '3Lえびを使った自家製天ぷらをのせた贅沢な丼。', en: 'Premium house-made tempura with 3L shrimp on rice.', zh: '使用3L大虾的自家制天妇罗，奢华的盖饭。', ko: '3L 사이즈 새우를 사용한 수제 튀김을 올린 풍성한 덮밥.' },
    price: 570,
    image: '/images/menu-jotendon.jpg',
    badge: { ja: '自家製', en: 'House-made', zh: '自家制', ko: '수제' },
    allergens: ['小麦', '卵', 'えび'],
    popular: true,
  },
  {
    id: 'katsu-don',
    type: 'donburi',
    name: { ja: 'かつ丼', en: 'Katsu Don', zh: '猪排盖饭', ko: '카츠동(돈가스 덮밥)' },
    description: { ja: '甘辛いカツと玉子のとじ丼。しっかりご飯が進む。', en: 'Crispy pork cutlet and egg on rice.', zh: '甜咸炸猪排与鸡蛋的盖饭，十分下饭。', ko: '달콤짭짤한 돈가스와 달걀이 어우러진 덮밥.' },
    price: 650,
    image: '/images/menu-katsudon.jpg',
    allergens: ['小麦', '卵', '豚肉', '大豆'],
  },
  {
    id: 'onigiri',
    type: 'donburi',
    name: { ja: 'おにぎり', en: 'Onigiri', zh: '饭团', ko: '주먹밥' },
    description: { ja: '一杯のお供にちょうどいい、シンプルなおにぎり。', en: 'A simple rice ball — the perfect side for any bowl.', zh: '简单的饭团，是搭配一碗面的最佳选择。', ko: '한 그릇과 함께하기 좋은, 심플한 주먹밥.' },
    price: 150,
    image: '/images/menu-asa.jpg',
    allergens: ['小麦', '大豆'],
  },

  // ── その他 ──
  {
    id: 'reimen',
    type: 'other',
    name: { ja: '冷麺', en: 'Cold Noodles', zh: '冷面', ko: '냉면' },
    description: { ja: 'さっぱりとした冷たいスープでいただく、冷麺。', en: 'Refreshing chilled noodles in a cold savory broth.', zh: '清爽冷汤享用的冷面。', ko: '시원한 냉국물로 즐기는 냉면.' },
    price: 650,
    image: '/images/feature-dashi.jpg',
    allergens: ['小麦', '卵', '大豆', 'ごま'],
  },

  // ── お持ち帰り ──
  {
    id: 'takeout-soba',
    type: 'takeout',
    name: { ja: '生そば・うどん（お持ち帰り）', en: 'Takeout Raw Soba / Udon', zh: '生荞麦面・乌冬面（外带）', ko: '생소바・우동(포장)' },
    description: { ja: 'お店の生麺をご自宅で。茹で時間の目安付き。', en: 'Our raw noodles to enjoy at home, with cooking instructions.', zh: '将店内生面带回家享用，附煮制时间说明。', ko: '매장의 생면을 집에서. 삶는 시간 안내 포함.' },
    price: 350,
    image: '/images/menu-kitsune.jpg',
    allergens: ['そば', '小麦', '大豆'],
  },
];

export function getPopular(): MenuItem[] {
  return menu.filter((m) => m.popular);
}

// 旧コードとの互換用エイリアス
export type MenuCategory = ItemType;
