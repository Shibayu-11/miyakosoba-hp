import { ChevronRight, Globe, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';

const XIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.99l-4.94-6.6L4.4 22H1.64l6.97-7.97L1.5 2h7.13l4.47 5.94L18.24 2zm-1.22 18h1.69L7.07 4H5.27l11.75 16z" />
  </svg>
);

const LineIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
    <path d="M19.365 9.89c.50 0 .906.41.906.91 0 .5-.406.906-.906.906h-1.265v.808h1.265c.5 0 .906.406.906.906 0 .5-.406.906-.906.906h-2.171a.91.91 0 0 1-.906-.906V8.077c0-.5.406-.906.906-.906h2.171c.5 0 .906.406.906.906 0 .5-.406.906-.906.906h-1.265v.808h1.265zM15.31 13.32c0 .39-.252.736-.625.86a.92.92 0 0 1-.281.045c-.281 0-.547-.13-.718-.36l-2.219-3.022v2.466a.91.91 0 0 1-.906.906.91.91 0 0 1-.906-.906V8.077c0-.391.25-.735.625-.859.094-.03.187-.046.281-.046.281 0 .547.13.718.36l2.219 3.021V8.078c0-.5.406-.906.906-.906.5 0 .906.406.906.906v5.241zm-7.16 0a.91.91 0 0 1-.906.906.91.91 0 0 1-.906-.906V8.077c0-.5.406-.906.906-.906.5 0 .906.406.906.906v5.241zm-2.55.906H3.43a.91.91 0 0 1-.906-.906V8.077c0-.5.406-.906.906-.906.5 0 .906.406.906.906v4.336h1.265c.5 0 .906.406.906.906 0 .5-.406.906-.906.906zM12 0C5.373 0 0 4.367 0 9.74c0 4.812 4.226 8.847 9.93 9.616.387.083.913.255 1.046.587.119.301.078.766.04 1.075l-.17 1.025c-.05.302-.241 1.187 1.054.647 1.297-.54 6.967-4.1 9.503-7.022 1.755-1.927 2.597-3.882 2.597-5.928C24 4.367 18.626 0 12 0z" />
  </svg>
);

export default function Footer() {
  const { t } = useT();
  const navItems = [
    { label: t.nav.kodawari, href: '/about', isRoute: true },
    { label: t.nav.menu, href: '/#menu', isRoute: false },
    { label: t.nav.locations, href: '/locations', isRoute: true },
    { label: t.nav.news, href: '/news', isRoute: true },
    { label: t.recruit.label, href: '/#recruit', isRoute: false },
  ];

  const lineUrl = (import.meta.env.VITE_LINE_URL as string | undefined) ?? '#';
  const instagramUrl = (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) ?? '#';
  const xUrl = (import.meta.env.VITE_X_URL as string | undefined) ?? '#';

  return (
    <footer className="bg-soba-ink text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="flex items-end gap-1.5 mb-5">
              <span className="font-serif text-3xl font-black leading-none">{t.brand.name}</span>
              <span className="bg-soba-red text-white text-[10px] font-bold px-1.5 py-0.5 leading-none mb-1 rounded-sm tracking-widest whitespace-pre-line">
                {t.brand.tag === 'STAND-UP' ? 'STAND\nUP' : '立ち\n食い'}
              </span>
            </div>
            <div className="flex gap-3">
              <a href={lineUrl} target={lineUrl === '#' ? undefined : '_blank'} rel="noreferrer" aria-label="LINE" className="w-9 h-9 rounded-full bg-[#06c755] hover:opacity-80 flex items-center justify-center transition-opacity">
                {LineIcon}
              </a>
              <a href={xUrl} target={xUrl === '#' ? undefined : '_blank'} rel="noreferrer" aria-label="X" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                {XIcon}
              </a>
              <a href={instagramUrl} target={instagramUrl === '#' ? undefined : '_blank'} rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Web" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <nav className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 content-start">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center justify-between text-sm border-b border-white/15 pb-2 hover:text-cream-100 transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight size={14} className="opacity-60" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between text-sm border-b border-white/15 pb-2 hover:text-cream-100 transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight size={14} className="opacity-60" />
                </a>
              ),
            )}
          </nav>

          <div className="md:col-span-3 flex flex-col gap-3 md:items-end">
            <Link to="/privacy" className="border border-white/40 hover:bg-white hover:text-soba-ink text-white text-xs font-medium px-5 py-2.5 transition-colors w-full md:w-auto text-center">
              {t.footer.privacy}
            </Link>
            <Link to="/tokutei" className="border border-white/40 hover:bg-white hover:text-soba-ink text-white text-xs font-medium px-5 py-2.5 transition-colors w-full md:w-auto text-center">
              {t.footer.tokutei}
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/50">
          {t.footer.copy}
        </div>
      </div>
    </footer>
  );
}
