import { useState, useEffect } from 'react';
import { MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // ルート遷移時にメニュー閉じる
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // 背景固定
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navLinks: { label: string; to: string; route: boolean }[] = [
    { label: t.nav.kodawari, to: '/about', route: true },
    { label: t.nav.menu, to: '/menu', route: true },
    { label: t.nav.locations, to: '/locations', route: true },
    { label: t.nav.news, to: '/news', route: true },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <Link to="/" className="flex items-end gap-1.5">
          <span className="font-serif text-3xl font-black text-soba-ink leading-none">{t.brand.name}</span>
          <span className="bg-soba-red text-white text-[10px] font-bold px-1.5 py-0.5 leading-none mb-1 rounded-sm tracking-widest whitespace-pre-line">
            {t.brand.tag === 'STAND-UP' ? 'STAND\nUP' : '立ち\n食い'}
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-soba-ink hover:text-soba-red transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <LanguageToggle />

          <Link
            to="/locations"
            className="hidden md:inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-5 py-2.5 rounded transition-colors shadow-sm"
          >
            <MapPin size={16} />
            <span className="text-sm font-bold">{t.header.findStore}</span>
          </Link>

          {/* ハンバーガー */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden w-10 h-10 flex items-center justify-center text-soba-ink"
          >
            {open ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* モバイルドロワー */}
      {open && (
        <div
          className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-cream-50 z-30 overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col px-6 py-8 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-serif text-2xl font-bold text-soba-ink py-4 border-b border-cream-200 hover:text-soba-red transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/locations"
              className="mt-6 flex items-center justify-center gap-2 bg-soba-red text-white py-4 rounded font-bold"
            >
              <MapPin size={18} />
              {t.header.findStore}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
