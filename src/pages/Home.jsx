import CategorySection from "../features/HomePage/CategorySection";
import FeaturedOne from "../features/HomePage/FeaturedOne";
import FeaturedTwo from "../features/HomePage/FeaturedTwo";
import HeroSection from "../features/HomePage/HeroSection";
import BottomNav from "../ui/BottomNav";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";

function Home() {
  return (
    <>
      <Nav />
      <MobileNav />
      <HeroSection />
      <BottomNav />
      <CategorySection />
      <FeaturedOne />
      <FeaturedTwo />
    </>
  );
}

export default Home;
