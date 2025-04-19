import CategorySection from "../features/Home/CategorySection";
import FeaturedOne from "../features/Home/FeaturedOne";
import FeaturedTwo from "../features/Home/FeaturedTwo";
import HeroSection from "../features/Home/HeroSection";
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
