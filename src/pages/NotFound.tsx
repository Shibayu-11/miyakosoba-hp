import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';

export default function NotFound() {
  const { lang } = useT();
  const isJa = lang === 'ja';

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="font-serif text-7xl md:text-8xl font-black text-soba-red mb-6">404</p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-soba-ink mb-4">
            {isJa ? 'お探しのページは見つかりませんでした。' : 'Page not found.'}
          </h1>
          <p className="text-sm text-soba-ink/70 leading-relaxed mb-10">
            {isJa
              ? 'URLが変更されたか、削除された可能性があります。トップページからもう一度お探しください。'
              : 'The page may have moved or been removed. Please return to the home page.'}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-8 py-3.5 font-bold transition-colors"
          >
            <span>{isJa ? 'トップに戻る' : 'Back to Home'}</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
