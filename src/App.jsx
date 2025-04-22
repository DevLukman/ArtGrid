import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artists from "./pages/Artists";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import PageNotFound from "./pages/PageNotFound";
import PrivateSales from "./pages/PrivateSales";
import Product from "./pages/Product";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RareArtwork from "./pages/RareArtwork";
import SignUp from "./pages/SignUp";
import ScrollToTop from "./ui/scrollToTop";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="detail/:id" element={<ProductDetailsPage />} />
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
