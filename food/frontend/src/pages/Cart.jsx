// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;