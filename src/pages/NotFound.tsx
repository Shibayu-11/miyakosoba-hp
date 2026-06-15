import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useT } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const NOT_FOUND_TEXT: Record<Lang, { title: string; body: string; cta: string }> = {
  ja: {
    title: 'お探しのページは見つかりませんでした。',
    body: 'URLが変更されたか、削除された可能性があります。トップページからもう一度お探しください。',
    cta: 'トップに戻る',
  },
  en: {
    title: 'Page not found.',
    body: 'The page may have moved or been removed. Please return to the home page.',
    cta: 'Back to Home',
  },
  zh: {
    title: '未找到您要查找的页面。',
    body: '该网址可能已变更或已被删除。请返回首页重新查找。',
    cta: '返回首页',
  },
  ko: {
    title: '페이지를 찾을 수 없습니다.',
    body: 'URL이 변경되었거나 삭제되었을 수 있습니다. 홈페이지에서 다시 찾아 주세요.',
    cta: '홈으로 돌아가기',
  },
};

export default function NotFound() {
  const { lang } = useT();
  const text = NOT_FOUND_TEXT[lang];

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col md:ml-56">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="font-serif text-7xl md:text-8xl font-black text-soba-red mb-6">404</p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-soba-ink mb-4">
            {text.title}
          </h1>
          <p className="text-sm text-soba-ink/70 leading-relaxed mb-10">
            {text.body}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-soba-red hover:bg-soba-red-dark text-white px-8 py-3.5 font-bold transition-colors"
          >
            <span>{text.cta}</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
