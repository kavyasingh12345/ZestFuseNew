// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Retrieve cart from localStorage if available, otherwise start with an empty cart
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : {};
  });

  const addToCart = (item, quantityChange) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      const existingItem = newCart[item.name];

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantityChange;
        if (newQuantity <= 0) {
          delete newCart[item.name];
        } else {
          newCart[item.name] = { ...existingItem, quantity: newQuantity };
        }
      } else if (quantityChange > 0) {
        newCart[item.name] = { ...item, quantity: quantityChange };
      }

      // Store updated cart in localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  // Sync cart state with localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);