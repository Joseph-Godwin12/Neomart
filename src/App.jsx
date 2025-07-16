import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResult";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";


export default function App() {
  return (
    <>
       <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
