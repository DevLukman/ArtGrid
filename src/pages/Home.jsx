import FeaturedSection from "../features/HomePage/FeaturedSection";
import HeroSection from "../features/HomePage/HeroSection";
import BottomNav from "../ui/BottomNav";
import Footer from "../ui/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <BottomNav />
      <FeaturedSection />
      <Footer />
    </>
  );
}

export default Home;
