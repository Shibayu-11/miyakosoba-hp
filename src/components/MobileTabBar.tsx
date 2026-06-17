import { Home, UtensilsCrossed, Leaf, MapPin, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const HOME_LABEL: Record<Lang, string> = { ja: 'ホーム', en: 'Home', zh: '首页', ko: '홈' };

/**
 * モバイル専用の下部固定タブバー（丸亀製麺サイトを参考）。
 * md 以上（PC表示）では非表示。レイアウトには一切影響しない。
 */
export default function MobileTabBar() {
  const { t, lang } = useT();
  const { pathname } = useLocation();

  const tabs = [
    { to: '/', label: HOME_LABEL[lang], Icon: Home, active: pathname === '/' },
    { to: '/menu', label: t.nav.menu, Icon: UtensilsCrossed, active: pathname.startsWith('/menu') },
    { to: '/about', label: t.nav.kodawari, Icon: Leaf, active: pathname.startsWith('/about') },
    { to: '/locations', label: t.nav.locations, Icon: MapPin, active: pathname.startsWith('/locations') },
    { to: '/news', label: t.nav.news, Icon: Bell, active: pathname.startsWith('/news') },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-cream-50/95 backdrop-blur border-t border-cream-200 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label={HOME_LABEL[lang]}
    >
      <ul className="flex items-stretch">
        {tabs.map(({ to, label, Icon, active }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              aria-current={active ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-1 py-2 min-h-[3.5rem] transition-colors ${
                active ? 'text-soba-red' : 'text-soba-ink/55 hover:text-soba-ink'
              }`}
            >
              <Icon size={21} strokeWidth={active ? 2.4 : 2} />
              <span className="text-[10px] font-bold leading-none tracking-tight">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
