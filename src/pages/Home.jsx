import CategorySection from "../features/HomePage/CategorySection";
import FeaturedOne from "../features/HomePage/FeaturedOne";
import FeaturedTwo from "../features/HomePage/FeaturedTwo";
import HeroSection from "../features/HomePage/HeroSection";
import BottomNav from "../ui/BottomNav";

function Home() {
  return (
    <>
      <HeroSection />
      <BottomNav />
      <CategorySection />
      <FeaturedOne />
      <FeaturedTwo />
    </>
  );
}

export default Home;
