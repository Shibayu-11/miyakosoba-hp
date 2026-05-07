import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Locations from './components/Locations';
import News from './components/News';
import Recruit from './components/Recruit';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <News />
      <Menu />
      <Locations />
      <Recruit />
      <Footer />
    </div>
  );
}

export default App;
