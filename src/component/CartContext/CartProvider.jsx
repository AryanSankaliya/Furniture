import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [likedItems, setLikedItems] = useState(() => {
    const stored = localStorage.getItem("likedItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const toggleLike = (id) => {
    setLikedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const updateQty = (id, newQty) => {
    if (newQty < 1) return; // prevent invalid qty

    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };


  const addToCart = (product, qty = 1) => {
    const existing = cartItems.find((item) => item.id === product.id);
    const productName = product.title || product.name || "Item";

    if (existing) {
      const newQty = existing.qty + qty;
      if (newQty > 5) {
        return { success: false, message: `You can only add up to 5 ${productName}s!` };
      }
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: newQty } : item
        )
      );
      return { success: true, message: `${productName} quantity updated!` };
    } else {
      if (qty > 5) {
        return { success: false, message: `You can only add up to 5 ${productName}s!` };
      }
      setCartItems([...cartItems, { ...product, qty: qty }]);
      return { success: true, message: `${productName} added to cart!` };
    }
  };


  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, likedItems, toggleLike, addToCart, removeFromCart, clearCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}
