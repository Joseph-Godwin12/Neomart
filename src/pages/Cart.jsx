import { useCart } from "../components/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-sm inline-block mt-2"
        >
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600 text-lg">${item.price * item.qty}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1 mt-1"
              >
                <FaTrash />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={clearCart}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded shadow"
        >
          Clear Cart
        </button>

        <p className="text-xl font-bold text-green-700">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
