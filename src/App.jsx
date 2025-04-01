import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./ui/Footer";
import Product from "./pages/Product";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";
import PrivateSales from "./pages/PrivateSales";
import RareArtwork from "./pages/RareArtwork";
import Artists from "./pages/Artists";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="detail" element={<ProductDetailsPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="privateSales" element={<PrivateSales />} />
        <Route path="rareartwork" element={<RareArtwork />} />
        <Route path="artist" element={<Artists />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
