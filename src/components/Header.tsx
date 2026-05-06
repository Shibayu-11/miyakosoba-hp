import { MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-gray-900">都そば</div>
          <div className="text-xs text-red-600 font-semibold">個</div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-gray-700 hover:text-gray-900">こだわり</a>
          <a href="#menu" className="text-sm text-gray-700 hover:text-gray-900">お品書き</a>
          <a href="#locations" className="text-sm text-gray-700 hover:text-gray-900">店舗案内</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900">お知らせ</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900">お問い合わせ</a>
        </nav>

        <button className="hidden md:flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded transition-colors">
          <MapPin size={16} />
          <span className="text-sm font-medium">店舗を探す</span>
        </button>
      </div>
    </header>
  );
}
