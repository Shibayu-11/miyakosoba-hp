export type Store = {
  id: string;
  name: string;
  prefecture: '大阪府' | '京都府' | '兵庫県';
  address: string;
  // 営業時間（平日）。土日祝の営業時間が異なる店舗のみ hoursWeekendHoliday を指定。
  hours: string;
  hoursWeekendHoliday?: string;
  // 定休日
  closed: string;
  closedNote?: boolean;
  position: { lat: number; lng: number };
  // status: confirmed = 現営業推定 / unverified = 要確認
  status?: 'confirmed' | 'unverified';
};

// 出典: 本部提供の店舗一覧（全34店舗）。
// 座標は住所から目視で求めた近似値。
export const stores: Store[] = [
  // 大阪
  { id: 'imazato',       name: '都そば 今里店',       prefecture: '大阪府', address: '大阪市生野区新今里4-10-1',                  hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.6600, lng: 135.5470 } },
  { id: 'umeda',         name: '都そば 梅田店',       prefecture: '大阪府', address: '大阪市北区堂山町5-1',                       hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 34.7042, lng: 135.4998 } },
  { id: 'doi',           name: '都そば 土居店',       prefecture: '大阪府', address: '守口市梅園町2-33',                          hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7410, lng: 135.5640 } },
  { id: 'kyobashi',      name: '都そば 京阪京橋店',   prefecture: '大阪府', address: '大阪市都島区東野田2-4-12',                  hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 34.6961, lng: 135.5340 } },
  { id: 'toyonaka',      name: '都そば 豊中店',       prefecture: '大阪府', address: '豊中市本町1-12-30',                         hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7810, lng: 135.4700 } },
  { id: 'tsuruhashi',    name: '都そば 鶴橋店',       prefecture: '大阪府', address: '大阪市東成区東小橋3-16-4',                  hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 34.6650, lng: 135.5320 } },
  { id: 'shin-sonezaki', name: '都そば 新曽根崎店',   prefecture: '大阪府', address: '大阪市北区曽根崎2-11-19',                   hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 34.7026, lng: 135.5010 } },
  { id: 'fuse',          name: '都そば 布施店',       prefecture: '大阪府', address: '東大阪市足代1-12-13',                       hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.6670, lng: 135.5610 } },
  { id: 'tenma',         name: '都そば 天満店',       prefecture: '大阪府', address: '大阪市北区天神橋4-12-1',                    hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7059, lng: 135.5118 } },
  { id: 'korien',        name: '都そば 香里園店',     prefecture: '大阪府', address: '寝屋川市香里南之町28-17',                   hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7620, lng: 135.6240 } },
  { id: 'takatsuki',     name: '都そば 高槻店',       prefecture: '大阪府', address: '高槻市北園町15-15',                         hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.8460, lng: 135.6170 } },
  { id: 'fuse2',         name: '都そば 第二布施店',   prefecture: '大阪府', address: '東大阪市長堂1-3-15',                        hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.6670, lng: 135.5640 } },
  { id: 'fukushima',     name: '都そば 福島店',       prefecture: '大阪府', address: '大阪市福島区福島5-12-22',                   hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.6950, lng: 135.4830 } },
  { id: 'kanzaki',       name: '都そば 神崎川店',     prefecture: '大阪府', address: '大阪市淀川区三津屋北1-5-16',                hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7333, lng: 135.4700 } },
  { id: 'okamachi',      name: '都そば 岡町駅前店',   prefecture: '大阪府', address: '豊中市中桜塚1-2-36',                        hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7850, lng: 135.4660 } },
  { id: 'umeda-shibata', name: '都そば 梅田芝田店',   prefecture: '大阪府', address: '大阪市北区芝田2-9-20',                      hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7060, lng: 135.4955 } },
  { id: 'tennoji',       name: '都そば 天王寺店',     prefecture: '大阪府', address: '大阪市天王寺区堀越町15-8',                  hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.6470, lng: 135.5140 } },
  { id: 'tenma5',        name: '都そば 天五店',       prefecture: '大阪府', address: '大阪市北区天神橋筋5-5-15',                  hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7110, lng: 135.5120 } },
  { id: 'hommachi',      name: '都そば 本町店',       prefecture: '大阪府', address: '大阪市中央区南本町1-3-14 エース本町ビル',   hours: '7:00〜20:00', hoursWeekendHoliday: '7:00〜18:00', closed: '1/1〜1/3', position: { lat: 34.6850, lng: 135.5030 } },
  { id: 'dojima',        name: '都由 堂島店',         prefecture: '大阪府', address: '大阪市北区堂島1丁目 堂島地下街8号',         hours: '7:00〜22:00', hoursWeekendHoliday: '7:00〜18:00', closed: '1/1〜1/3', closedNote: true, position: { lat: 34.6963, lng: 135.4980 } },

  // 京都
  { id: 'shijo',         name: '都そば 四条店',       prefecture: '京都府', address: '京都市下京区四条通寺町東入ル御旅宮本町11', hours: '7:30〜22:00', closed: '1/1〜1/3', position: { lat: 35.0040, lng: 135.7685 } },
  { id: 'kawaramachi',   name: '都そば 河原町店',     prefecture: '京都府', address: '京都市中京区河原町通蛸薬師西入裏寺町595',   hours: '8:00〜22:00', closed: '1/1〜1/3', position: { lat: 35.0050, lng: 135.7700 } },
  { id: 'saiin',         name: '都そば 西院巽町店',   prefecture: '京都府', address: '京都市右京区西院巽町1-1',                   hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 35.0040, lng: 135.7330 } },
  { id: 'momoyama',      name: '都そば 伏見桃山店',   prefecture: '京都府', address: '京都市伏見区両替町4-292-2',                 hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 34.9370, lng: 135.7680 } },

  // 兵庫
  { id: 'deyashiki',     name: '都そば 出屋敷店',     prefecture: '兵庫県', address: '尼崎市竹谷町2-183 リベル121号',             hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7480, lng: 135.3980 } },
  { id: 'tachibana',     name: '都そば 立花店',       prefecture: '兵庫県', address: '尼崎市立花町1-3-1',                          hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7330, lng: 135.3940 } },
  { id: 'tachibana-jt',  name: '都そば 立花ジョイタウン店', prefecture: '兵庫県', address: '尼崎市七松町1-1-1-108',                hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7380, lng: 135.3920 } },
  { id: 'amagasaki2',    name: '都そば 第二尼崎店',   prefecture: '兵庫県', address: '尼崎市神田中通3-30',                        hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7330, lng: 135.4135 } },
  { id: 'kuise',         name: '都そば 杭瀬店',       prefecture: '兵庫県', address: '尼崎市杭瀬本町1-2-15',                      hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7200, lng: 135.4480 } },
  { id: 'itami-sunroad', name: '都そば サンロード伊丹店', prefecture: '兵庫県', address: '伊丹市中央5-1-1',                       hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.7810, lng: 135.4010 } },
  { id: 'sannomiya',     name: '都そば 三宮サンシティ店', prefecture: '兵庫県', address: '神戸市中央区雲井通6-1-15 サンシティビル1F A110号', hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 34.6965, lng: 135.1972 } },
  { id: 'sannomiya-w',   name: '都そば 三宮西口店',   prefecture: '兵庫県', address: '神戸市中央区北長狭通1-31 高架下28号北',      hours: '7:00〜22:00', closed: '1/1〜1/3', position: { lat: 34.6940, lng: 135.1930 } },
  { id: 'motomachi',     name: '都そば 元町店',       prefecture: '兵庫県', address: '神戸市中央区元町通2-10-1',                  hours: '7:00〜20:00', hoursWeekendHoliday: '7:00〜19:30', closed: '1/1〜1/3', position: { lat: 34.6890, lng: 135.1900 } },
  { id: 'shin-nagata',   name: '都そば 新長田店',     prefecture: '兵庫県', address: '神戸市長田区若松町5-2-1-126',                hours: '7:00〜20:00', closed: '1/1〜1/3', position: { lat: 34.6650, lng: 135.1430 } },
];

// 関西全体が映る中心とズーム
export const KANSAI_CENTER = { lat: 34.78, lng: 135.50 };
