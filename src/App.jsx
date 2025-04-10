// 1q77aQqZ1UcPD3AB
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
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
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
            backgroundColor: "blue",
            color: "green",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
