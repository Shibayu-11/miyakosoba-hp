import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import About from './pages/About.tsx';
import LocationsPage from './pages/LocationsPage.tsx';
import StoreDetailPage from './pages/StoreDetailPage.tsx';
import NewsPage from './pages/NewsPage.tsx';
import NewsDetailPage from './pages/NewsDetailPage.tsx';
import MenuPage from './pages/MenuPage.tsx';
import Privacy from './pages/Privacy.tsx';
import Tokutei from './pages/Tokutei.tsx';
import NotFound from './pages/NotFound.tsx';
import { LanguageProvider } from './i18n/LanguageContext';
import StructuredData from './components/StructuredData';
import Analytics from './components/Analytics';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Analytics />
        <StructuredData />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:id" element={<StoreDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tokutei" element={<Tokutei />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
