export type MenuCategory = 'standard' | 'tempura' | 'set' | 'topping' | 'season';

// 食品表示法上の特定原材料7品目 + 特定原材料に準ずるもの21品目から代表的なものを抜粋
export type Allergen =
  | '小麦' | 'そば' | '卵' | '乳' | 'えび' | 'かに' | '落花生'
  | '大豆' | '鶏肉' | '牛肉' | '豚肉' | 'ごま' | 'いか' | 'さば';

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: { ja: string; en: string };
  description: { ja: string; en: string };
  price: number;
  image: string;
  badge?: { ja: string; en: string };
  allergens: Allergen[];
  popular?: boolean;
};

export const menu: MenuItem[] = [
  // 定番
  {
    id: 'kake',
    category: 'standard',
    name: { ja: 'かけそば', en: 'Kake Soba' },
    description: { ja: 'シンプルにだしの旨味を味わえる、原点の一杯。', en: 'A pure bowl that lets the dashi speak for itself.' },
    price: 380,
    image: '/images/menu-kake.jpg',
    allergens: ['そば', '小麦', '大豆'],
  },
  {
    id: 'kitsune',
    category: 'standard',
    name: { ja: 'きつねそば', en: 'Kitsune Soba' },
    description: { ja: '甘辛いお揚げがじゅわっとしみた、やさしい味わい。', en: 'Sweet-savory fried tofu, soaked through — gentle and warming.' },
    price: 480,
    image: '/images/menu-kitsune.jpg',
    allergens: ['そば', '小麦', '大豆'],
    popular: true,
  },
  {
    id: 'tsukimi',
    category: 'standard',
    name: { ja: '月見そば', en: 'Tsukimi Soba' },
    description: { ja: 'まろやかな卵黄がそばに絡む、ほっとする一杯。', en: 'A rich egg yolk laced through soba — comforting and simple.' },
    price: 470,
    image: '/images/menu-tsukimi.jpg',
    allergens: ['そば', '小麦', '卵', '大豆'],
    popular: true,
  },
  {
    id: 'wakame',
    category: 'standard',
    name: { ja: 'わかめそば', en: 'Wakame Soba' },
    description: { ja: '磯の香りとシャキッとした歯ごたえが心地よい。', en: 'A bowl with the salt-air aroma and crisp bite of wakame.' },
    price: 430,
    image: '/images/menu-wakame.jpg',
    allergens: ['そば', '小麦', '大豆'],
  },

  // 天ぷら系
  {
    id: 'tempura',
    category: 'tempura',
    name: { ja: '天ぷらそば', en: 'Tempura Soba' },
    description: { ja: 'サクサクの天ぷらをのせた、不動の人気メニュー。', en: 'Crispy tempura on a hot bowl of soba — our signature.' },
    price: 550,
    image: '/images/menu-tempura.jpg',
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
    popular: true,
  },
  {
    id: 'kakiage',
    category: 'tempura',
    name: { ja: 'かき揚げそば', en: 'Kakiage Soba' },
    description: { ja: '玉ねぎと小えびを揚げた、香ばしいかき揚げが主役。', en: 'A fragrant kakiage of onion and small shrimp tops this hearty bowl.' },
    price: 530,
    image: '/images/menu-kakiage.jpg',
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
  },
  {
    id: 'tenmusu',
    category: 'tempura',
    name: { ja: '天むすそばセット', en: 'Tempura-Musu Set' },
    description: { ja: 'そばと天むす2個のセット。お腹いっぱいになる定番。', en: 'A bowl of soba with two tempura-musu rice balls — a filling classic.' },
    price: 720,
    image: '/images/menu-tenmusu.jpg',
    allergens: ['そば', '小麦', '卵', 'えび', '大豆'],
  },

  // セット
  {
    id: 'asa',
    category: 'set',
    name: { ja: '朝定食', en: 'Morning Set' },
    description: { ja: '朝にうれしい、そばとごはんのお得なセット。', en: 'Soba with rice — a value set to start the day.' },
    price: 450,
    image: '/images/menu-asa.jpg',
    badge: { ja: '7:00〜10:00', en: '7:00–10:00' },
    allergens: ['そば', '小麦', '大豆'],
    popular: true,
  },
  {
    id: 'mini-don',
    category: 'set',
    name: { ja: 'ミニ親子丼セット', en: 'Mini Oyakodon Set' },
    description: { ja: 'お好きなそばに、ミニサイズの親子丼をプラス。', en: 'Your choice of soba with a mini oyakodon on the side.' },
    price: 780,
    image: '/images/menu-oyakodon.jpg',
    allergens: ['そば', '小麦', '卵', '鶏肉', '大豆'],
  },
  {
    id: 'mini-curry',
    category: 'set',
    name: { ja: 'ミニカレーセット', en: 'Mini Curry Set' },
    description: { ja: 'スパイスの効いたミニカレーとそばのセット。', en: 'A spiced mini curry paired with soba.' },
    price: 750,
    image: '/images/menu-curry.jpg',
    allergens: ['そば', '小麦', '乳', '牛肉', '大豆'],
  },

  // トッピング
  {
    id: 'top-tempura',
    category: 'topping',
    name: { ja: '天ぷら（追加）', en: 'Extra Tempura' },
    description: { ja: 'お好きな一杯にもう一枚、サクッと。', en: 'Add one more piece to any bowl.' },
    price: 130,
    image: '/images/topping-tempura.jpg',
    allergens: ['小麦', '卵', 'えび'],
  },
  {
    id: 'top-egg',
    category: 'topping',
    name: { ja: '生卵', en: 'Raw Egg' },
    description: { ja: 'まろやかさを足したい時に。', en: 'For an extra layer of richness.' },
    price: 60,
    image: '/images/topping-egg.jpg',
    allergens: ['卵'],
  },
  {
    id: 'top-aburaage',
    category: 'topping',
    name: { ja: 'お揚げ（追加）', en: 'Extra Fried Tofu' },
    description: { ja: 'もう一枚、しっかり甘辛く煮含めて。', en: 'One more sheet of our sweet-savory fried tofu.' },
    price: 120,
    image: '/images/topping-aburaage.jpg',
    allergens: ['大豆'],
  },

  // 季節
  {
    id: 'sansai',
    category: 'season',
    name: { ja: '山菜そば', en: 'Sansai Soba' },
    description: { ja: '春限定。わらび・ぜんまい・たけのこの香り。', en: 'Spring only — the aroma of warabi, zenmai and bamboo shoots.' },
    price: 530,
    image: '/images/menu-sansai.jpg',
    badge: { ja: '春限定', en: 'Spring Only' },
    allergens: ['そば', '小麦', '大豆'],
  },
];

export function getPopular(): MenuItem[] {
  return menu.filter((m) => m.popular);
}
