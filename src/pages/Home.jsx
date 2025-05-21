import CategorySection from "../features/home/CategorySection";
import FeaturedOne from "../features/home/FeaturedOne";
import FeaturedTwo from "../features/home/FeaturedTwo";
import HeroSection from "../features/home/HeroSection";
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
