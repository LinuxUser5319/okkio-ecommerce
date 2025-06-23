import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const removeFromCart = () => {
    setCartItems(prev => Math.max(0, prev - 1));
  };

  const clearCart = () => {
    setCartItems(0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart
  };
};