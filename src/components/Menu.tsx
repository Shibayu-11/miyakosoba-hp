import { ChevronRight } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  available_time?: string;
}

interface MenuProps {
  items: MenuItem[];
}

export default function Menu({ items }: MenuProps) {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-700 text-sm font-semibold tracking-wider mb-2">人気メニュー</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            定番の一杯をどうぞ。
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image_url})` }}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{item.price}円(税込)</span>
                  {item.available_time && (
                    <span className="text-xs text-red-600 font-semibold">{item.available_time}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 font-medium transition-colors">
            <span>お品書きを見る</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
