/*
  # Create initial schema for 都そば website

  1. New Tables
    - `menu_items`
      - `id` (uuid, primary key)
      - `name` (text, menu item name)
      - `description` (text, menu description)
      - `price` (integer, price in yen)
      - `image_url` (text, image URL)
      - `category` (text, menu category)
      - `is_popular` (boolean, featured on homepage)
      - `available_time` (text, availability time)
      - `created_at` (timestamp)
      
    - `store_locations`
      - `id` (uuid, primary key)
      - `name` (text, store name)
      - `address` (text, store address)
      - `latitude` (float, latitude coordinate)
      - `longitude` (float, longitude coordinate)
      - `phone` (text, phone number)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  is_popular boolean DEFAULT false,
  available_time text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS store_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  latitude float NOT NULL,
  longitude float NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access on menu items"
  ON menu_items
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access on store locations"
  ON store_locations
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO menu_items (name, description, price, image_url, category, is_popular, available_time) VALUES
  ('天ぶらそば', 'サクサクの天ぷらがのせた、昼間の人気メニュー。', 550, 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', 'main', true, NULL),
  ('きつねそば', '甘辛いお揚げがそばのおいしさを引き出す。やさしい味わい。', 480, 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', 'main', true, NULL),
  ('月見そば', 'まろやかな卵黄がそばに絡む一杯。', 470, 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', 'main', true, NULL),
  ('朝定食', '新どうしい、そばとごはんの朝食セット。', 450, 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg', 'set', true, '7:00~10:00');

INSERT INTO store_locations (name, address, latitude, longitude, phone) VALUES
  ('都そば 梅田店', '大阪府大阪市北区曽根崎1-4-20', 34.7026, 135.4957, '06-1234-5678'),
  ('都そば 淀屋橋店', '大阪府大阪市中央区北浜1-1-1', 34.6814, 135.5044, '06-2345-6789'),
  ('都そば 京橋店', '大阪府大阪市中央区京橋1-1-1', 34.6761, 135.5306, '06-3456-7890'),
  ('都そば 難波店', '大阪府大阪市中央区難波2-2-2', 34.6552, 135.5009, '06-4567-8901');
