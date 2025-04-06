import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";
import PrivateSales from "./pages/PrivateSales";
import RareArtwork from "./pages/RareArtwork";
import Artists from "./pages/Artists";
import PageNotFound from "./pages/PageNotFound";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";
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
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
