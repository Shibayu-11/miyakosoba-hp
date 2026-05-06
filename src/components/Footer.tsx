import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-2">都そば</div>
            <div className="text-xs text-red-500 font-semibold mb-6">個</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4">メニュー</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">こだわり</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">お品書き</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">情報</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">店舗案内</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">お知らせ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 MIYAKO SOBA. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表示</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
