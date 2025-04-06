import CheckOuts from "../features/Checkout/CheckOuts";
import Footer from "../ui/Footer";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";

function CheckOut() {
  return (
    <>
      <Nav />
      <MobileNav />
      <CheckOuts />
      <Footer />
    </>
  );
}

export default CheckOut;
