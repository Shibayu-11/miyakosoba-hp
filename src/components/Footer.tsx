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
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-12 gap-8">
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

          <nav className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 content-start">
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

        </div>

        <div className="border-t border-white/10 mt-8 pt-5 text-xs font-bold text-white/70">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {CONTACT_URL.startsWith('/') ? (
              <Link to={CONTACT_URL} className="hover:text-white hover:underline underline-offset-4 transition-colors">
                {t.footer.contact}
              </Link>
            ) : (
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                {t.footer.contact}
              </a>
            )}
            <span className="opacity-40">|</span>
            <Link to="/tokutei" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              {t.footer.tokutei}
            </Link>
            <span className="opacity-40">|</span>
            <Link to="/privacy" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              {t.footer.privacy}
            </Link>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-white/60">
            <span>{t.parentCompany.name}</span>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-white/10 text-center text-xs text-white/50">
          {t.footer.copy}
        </div>
      </div>
    </footer>
  );
}
