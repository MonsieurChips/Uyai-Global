import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { TrashIcon } from "../assets/icons";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Your Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Your cart is empty.
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any items yet.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-lg"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border-b last:border-b-0"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 text-lg font-bold"
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 text-lg font-bold"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-semibold w-20 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg sticky top-24">
              <h2 className="text-2xl font-semibold border-b pb-4 mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
                <span>Total</span>
                <span>${(cartTotal + 5.0).toFixed(2)}</span>
              </div>
              <button className="mt-6 w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;