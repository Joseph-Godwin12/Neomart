import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import {
  FaShoppingBag,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import shopping from "../assets/shopping.jpg";

export default function Home() {
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const scrollRefs = useRef({}); 

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        const allProducts = data.products;

        const grouped = allProducts.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {});

        setGroupedProducts(grouped);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Scroll handler
  const scrollRow = (category, direction) => {
    const ref = scrollRefs.current[category];
    if (ref) {
      ref.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    
    <div className="bg-gray-100 min-h-screen font-sans">
        {/*Hero Section */}
    <motion.section
        className="relative bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-700 text-white overflow-hidden py-48 px-6 md:flex items-center justify-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
            backgroundImage: `url(${shopping})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
        }}
    >
        {/* Overlay for gradient effect */}
    <div
        style={{
            position: "absolute",
            inset: 0,
            background:
                "linear-gradient(135deg, rgba(67,56,202,0.85) 0%, rgba(37,99,235,0.85) 50%, rgba(139,92,246,0.85) 100%)",
             zIndex: 1,
             pointerEvents: "none",
        }}
    />
        {/* Background glow effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

  {/* Content container */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left: Text */}
    <div className="text-center max-w-3xl md:-mx-72">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 drop-shadow"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Discover <span className="text-yellow-300">Timeless</span> Style<br />at <span className="text-yellow-300">NeoMart</span>
      </motion.h1>
      <p className="text-lg text-gray-100 font-semibold mb-6">
         <Typewriter
            words={['Shop electronics', 'Fashion', 'Accessories', 'And many more with unbeatable deals.']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow transition"
      >
        Start Shopping
      </motion.button>
    </div>
  </div>
</motion.section>
      {/* Product Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center text-gray-500">Loading products...</div>
        ) : (
          Object.entries(groupedProducts).map(([category, items]) => (
            <motion.div
              key={category}
              className="mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize flex items-center gap-2">
                <FaShoppingBag className="text-purple-600" />
                {category.replace("-", " ")}
              </h2>

              {/* Arrows + Row */}
              <div className="relative">
                <button
                  onClick={() => scrollRow(category, "left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
                >
                  <FaChevronLeft />
                </button>

                <div
                  ref={(el) => (scrollRefs.current[category] = el)}
                  className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-8"
                >
                  {items.map((product) => (
                    <motion.div
                      key={product.id}
                      className="min-w-[250px] max-w-[250px] flex-shrink-0"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => scrollRow(category, "right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
                >
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </section>
    </div>
  );
}
