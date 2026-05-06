import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Locations from './components/Locations';
import Footer from './components/Footer';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_popular: boolean;
  available_time: string | null;
}

interface StoreLocation {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
}

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [locations, setLocations] = useState<StoreLocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuRes, locationsRes] = await Promise.all([
          supabase.from('menu_items').select('*'),
          supabase.from('store_locations').select('*')
        ]);

        if (menuRes.data) setMenuItems(menuRes.data);
        if (locationsRes.data) setLocations(locationsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p>読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Menu items={menuItems.filter(item => item.is_popular)} />
      <Locations locations={locations} />
      <Footer />
    </div>
  );
}

export default App;
