import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import StatsAndTestimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsAndTestimonials />
      <Footer />
    </div>
  );
}
