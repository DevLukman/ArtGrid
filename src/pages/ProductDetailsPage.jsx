import ProductDetail from "../features/Artworks/ProductDetail";
import Footer from "../ui/Footer";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";

function ProductDetailsPage() {
  return (
    <>
      <Nav />
      <MobileNav />
      <ProductDetail />
      <Footer />
    </>
  );
}

export default ProductDetailsPage;
