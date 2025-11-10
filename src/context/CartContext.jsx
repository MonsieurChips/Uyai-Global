import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const cartItemCount = cartItems.reduce(
        (count, item) => count + item.quantity,
        0
    );

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartItemCount,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;