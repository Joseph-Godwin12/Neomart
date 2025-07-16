import { Link } from "react-router-dom";
import { FaArrowRight, FaCartPlus, FaStar } from "react-icons/fa";
import { useCart } from "../components/CartContext"; // ✅ Make sure this path matches your setup

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // ✅ from your context

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-[#f9f9ff] border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col h-full">
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 object-contain mb-4 mx-auto rounded-lg transition-transform duration-300 hover:scale-105"
      />

      {/* Product Title */}
      <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
        {product.title}
      </h3>

      {/* Brand */}
      <p className="text-xs text-gray-500 mb-2">{product.brand}</p>

      {/* Price + Discount */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-lg font-bold text-green-600">${product.price}</p>
        {product.discountPercentage && (
          <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
            -{product.discountPercentage}%
          </span>
        )}
      </div>

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-4">
          <FaStar />
          <span className="text-gray-700">{product.rating}</span>
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto flex justify-between items-center text-sm">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          View <FaArrowRight size={12} />
        </Link>

        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
        >
          <FaCartPlus />
          Add
        </button>
      </div>
    </div>
  );
}
