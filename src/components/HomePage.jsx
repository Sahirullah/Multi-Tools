import Header from './Header';
import HeroSection from './HeroSection';
import ToolsGrid from './ToolsGrid';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      <ToolsGrid />
      <Footer />
    </div>
  );
};

export default HomePage;