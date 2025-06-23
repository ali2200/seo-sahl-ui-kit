
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToolsSection from '@/components/ToolsSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-arabic" dir="rtl">
      <Header />
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
