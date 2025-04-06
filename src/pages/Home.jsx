import CategorySection from "../features/HomePage/CategorySection";
import FeaturedOne from "../features/HomePage/FeaturedOne";
import FeaturedTwo from "../features/HomePage/FeaturedTwo";
import HeroSection from "../features/HomePage/HeroSection";
import Footer from "../ui/Footer";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";

function Home() {
  return (
    <>
      <Nav />
      <MobileNav />
      <HeroSection />
      <CategorySection />
      <FeaturedOne />
      <FeaturedTwo />
      <Footer />
    </>
  );
}

export default Home;
