import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n/LanguageContext';
import { socialLinks } from '../config/socialLinks';

const CONTACT_URL = (import.meta.env.VITE_CONTACT_URL as string | undefined) ?? '/contact';

export default function Footer() {
  const { t } = useT();
  const navItems = [
    { label: t.nav.news, href: '/news', isRoute: true },
    { label: t.nav.menu, href: '/#menu', isRoute: false },
    { label: t.nav.kodawari, href: '/about', isRoute: true },
    { label: t.nav.campaign, href: '/#news', isRoute: false },
    { label: t.nav.locations, href: '/locations', isRoute: true },
    { label: t.recruit.label, href: '/recruit', isRoute: true },
  ];

  return (
    <footer className="bg-soba-ink text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo-mark-white.png" alt="" className="w-9 h-9" />
              <img src="/images/logo-text-white.png" alt={t.brand.name} className="h-9 w-auto" />
            </div>
            <div className="flex justify-between items-center md:block">
              <div className="flex gap-3">
                <a href={socialLinks.line} aria-label="LINE" className="w-9 h-9 hover:opacity-80 flex items-center justify-center transition-opacity">
                  <img src="/images/social-line.png" alt="" className="w-9 h-9 object-contain" />
                </a>
                <a href={socialLinks.instagram} aria-label="Instagram" className="w-9 h-9 hover:opacity-80 flex items-center justify-center transition-opacity">
                  <img src="/images/social-instagram.png" alt="" className="w-7 h-7 object-contain" />
                </a>
                <a href={socialLinks.x} aria-label="X" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <img src="/images/social-x-white.svg" alt="" className="w-4 h-4 object-contain" />
                </a>
              </div>
              <p className="text-sm text-white/80 leading-relaxed text-right md:text-left md:mt-5">
                {t.footer.hours.replace('（', '\n（').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </p>
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
            {CONTACT_URL.startsWith('/') ? (
              <Link
                to={CONTACT_URL}
                className="border border-white/40 hover:bg-white hover:text-soba-ink text-white text-xs font-medium px-5 py-2.5 transition-colors w-full md:w-auto text-center"
              >
                {t.footer.contact}
              </Link>
            ) : (
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noreferrer"
                className="border border-white/40 hover:bg-white hover:text-soba-ink text-white text-xs font-medium px-5 py-2.5 transition-colors w-full md:w-auto text-center"
              >
                {t.footer.contact}
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-bold text-white/70">
          <span>{t.parentCompany.name}</span>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          {t.footer.copy}
        </div>
      </div>
    </footer>
  );
}
