import { MapPin, Phone, ChevronRight } from 'lucide-react';

interface StoreLocation {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
}

interface LocationsProps {
  locations: StoreLocation[];
}

export default function Locations({ locations }: LocationsProps) {
  return (
    <section id="locations" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-500 text-sm font-semibold tracking-wider mb-2">店舗案内</p>
            <h2 className="text-4xl font-bold mb-6">
              関西を中心に、駅近で<br />
              気軽に立ち寄れる店舗を展開。
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              途中・演奏の合間に、周辺の用事に。<br />
              あたなの場所に、都そばです。
            </p>
            <button className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 font-medium transition-colors">
              <span>店舗を探す</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-700 opacity-50" />
            <svg
              className="w-full h-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid meet"
            >
              <g opacity="0.3">
                <path d="M 50 50 L 350 50 L 350 250 L 50 250 Z" stroke="white" fill="none" strokeWidth="2" />
              </g>
            </svg>

            {locations.map((location, index) => {
              const offsetX = (location.longitude - 134.8) * 400;
              const offsetY = (35.3 - location.latitude) * 300;

              return (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${offsetX + 200}px`,
                    top: `${offsetY + 150}px`
                  }}
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-lg hover:bg-red-600 transition-colors cursor-pointer">
                    <MapPin size={16} className="text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {locations.map((location) => (
            <div key={location.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-lg font-bold mb-3">{location.name}</h3>
              <p className="text-gray-300 text-sm mb-3 flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-red-500" />
                {location.address}
              </p>
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <Phone size={16} className="text-red-500" />
                {location.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
