import CartList from "../features/Cart/CartList";
import Footer from "../ui/Footer";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";

function Cart() {
  return (
    <>
      <Nav />
      <MobileNav />
      <CartList />
      <Footer />
    </>
  );
}

export default Cart;
