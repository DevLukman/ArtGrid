import Products from "../features/artworks/Products";
import Footer from "../ui/Footer";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";

function Product() {
  return (
    <>
      <Nav />
      <MobileNav />
      <Products />
      <Footer />
    </>
  );
}

export default Product;
