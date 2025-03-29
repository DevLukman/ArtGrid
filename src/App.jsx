import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./ui/Nav";
import MobileNav from "./ui/MobileNav";
import Footer from "./ui/Footer";
import Product from "./pages/Product";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
