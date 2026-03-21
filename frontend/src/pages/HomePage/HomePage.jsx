import HeroSection from '../../components/Hero/HeroSection';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <CategoryGrid />
    </div>
  );
};

export default HomePage;
