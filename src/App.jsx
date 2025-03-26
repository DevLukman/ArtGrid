import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./ui/Nav";
import MobileNav from "./ui/MobileNav";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
