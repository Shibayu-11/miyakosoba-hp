import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg)',
          filter: 'brightness(0.6)'
        }}
      />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-md">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            毎日に、<br />
            うまい一杯。
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            気軽さはそのままに。<br />
            都そばの一杯を、もっと美しく。
          </p>

          <div className="flex gap-4">
            <button className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 transition-colors">
              <span className="font-medium">お品書きを見る</span>
              <ChevronRight size={18} />
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 transition-colors">
              <span className="font-medium">店舗一覧</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
