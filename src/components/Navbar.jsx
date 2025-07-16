import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartContext"; // adjust this path as needed

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart(); // 🛒 dynamic cart count

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
      const newHistory = [query, ...history.filter((item) => item !== query)].slice(0, 5);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));

      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-3xl font-extrabold text-white">
          <span className="text-blue-500">Neo</span>Mart
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-200">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 text-white text-xl">
          {/* Search Icon */}
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <FaSearch />
          </button>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                 {cartItems.reduce((sum, item) => sum + item.qty, 0)}
              </span>
            )}
          </Link>

          {/* Hamburger for Mobile */}
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="bg-gray-900 px-4 py-3 shadow-lg z-40">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-4 py-2 rounded bg-white text-black outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-gray-200 font-bold px-4 py-2 rounded hover:bg-blue-400"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
}
