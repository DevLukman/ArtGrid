import PrivateSalesList from "../features/PrivateSales/PrivateSalesList";
import Footer from "../ui/Footer";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";

function PrivateSales() {
  return (
    <>
      <Nav />
      <MobileNav />
      <PrivateSalesList />
      <Footer />
    </>
  );
}

export default PrivateSales;
