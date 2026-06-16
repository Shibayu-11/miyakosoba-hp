import { useState, useEffect } from 'react';
import { MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navLinks: { label: string; to?: string; href?: string }[] = [
    { label: t.nav.news, to: '/news' },
    { label: t.nav.menu, to: '/menu' },
    { label: t.nav.kodawari, to: '/about' },
    { label: t.nav.campaign, href: '/#news' },
    { label: t.nav.locations, to: '/locations' },
  ];

  return (
    <>
      {/* ── デスクトップ：左サイドバー ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-56 bg-cream-50 border-r border-cream-200 z-40 flex-col items-center py-10">
        {/* ロゴ */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-3 mb-10 px-8"
        >
          <img src="/images/logo-miyakosoba.png" alt={t.brand.name} className="w-full h-auto" />
        </Link>

        {/* ナビ：2×2 横並び */}
        <nav className="flex flex-col gap-y-5 px-6 flex-1 items-center">
          {navLinks.map((l) =>
            l.to ? (
              <Link key={l.label} to={l.to} className="font-serif text-sm font-bold text-soba-ink hover:text-soba-red transition-colors text-center">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className="font-serif text-sm font-bold text-soba-ink hover:text-soba-red transition-colors text-center">
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* 店舗リンク */}
        <Link
          to="/locations"
          className="flex items-center gap-2 text-soba-ink hover:text-soba-red transition-colors mb-6"
        >
          <MapPin size={15} />
          <span className="text-xs font-bold">{t.header.findStore}</span>
        </Link>

        {/* 言語切替 */}
        <LanguageToggle />
      </aside>

      {/* ── モバイル：トップバー ── */}
      <header className="md:hidden sticky top-0 z-40 bg-cream-50/95 backdrop-blur border-b border-cream-200">
        <div className="px-5 py-3 flex items-center">
          <Link to="/" className="flex items-center gap-1.5">
            <img src="/images/logo-miyakosoba.png" alt={t.brand.name} className="h-8 w-auto" />
          </Link>
          <div className="ml-auto flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="w-10 h-10 flex items-center justify-center text-soba-ink"
            >
              {open ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {/* モバイルドロワー */}
        {open && (
          <div
            className="fixed inset-x-0 top-[57px] bottom-0 bg-cream-50 z-30 overflow-y-auto animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((l) =>
                l.to ? (
                  <Link key={l.label} to={l.to} className="font-serif text-2xl font-bold text-soba-ink py-4 border-b border-cream-200 hover:text-soba-red transition-colors">
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} className="font-serif text-2xl font-bold text-soba-ink py-4 border-b border-cream-200 hover:text-soba-red transition-colors">
                    {l.label}
                  </a>
                )
              )}
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
    </>
  );
}
