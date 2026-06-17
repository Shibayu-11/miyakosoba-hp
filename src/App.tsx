import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Recommend from './components/Recommend';
import Menu from './components/Menu';
import Locations from './components/Locations';
import News from './components/News';
import Recruit from './components/Recruit';
import SocialFollow from './components/SocialFollow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white md:flex">
      <Header />
      {/* デスクトップ: サイドバー分のオフセット */}
      <div className="flex-1 md:ml-56">
        <Hero />
        <Recommend />
        <Menu />
        <Features />
        <News />
        <Locations />
        <Recruit />
        <SocialFollow />
        <Footer />
      </div>
    </div>
  );
}

export default App;
