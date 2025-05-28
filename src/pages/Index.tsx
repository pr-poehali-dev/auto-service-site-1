import Header from "@/components/auto-service/Header";
import HeroSection from "@/components/auto-service/HeroSection";
import ServicesSection from "@/components/auto-service/ServicesSection";
import AboutSection from "@/components/auto-service/AboutSection";
import ContactSection from "@/components/auto-service/ContactSection";
import Footer from "@/components/auto-service/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
