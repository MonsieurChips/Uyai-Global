import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                />
                {product.special && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                        Special Order
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 flex-grow">
                    {product.name}
                </h3>
                <p className="text-lg font-bold text-orange-600 my-2">
                    ${product.price.toFixed(2)}
                </p>
                <button
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;