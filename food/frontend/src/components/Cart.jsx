import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  // Calculate total amount by summing up the price * quantity for each item in the cart
  const totalAmount = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-full mx-auto p-6 text-center bg-gradient-to-b from-orange-200 to-orange-400 pb-36 min-h-[80vh]">
      <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Your Cart</h2>
        
        {Object.keys(cart).length > 0 ? (
          <div>
            {Object.values(cart).map((item, idx) => (
              <div key={idx} className="flex justify-between items-center mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            
            <hr className="my-4" />

            <p className="text-gray-800 font-semibold text-lg">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>

            <button
              className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition"
              onClick={() => alert('Proceeding to payment...')}
            >
              Proceed to Pay
            </button>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty</p>
        )}

        <p className="text-gray-800 font-semibold mt-4">
          Total Items: {Object.values(cart).reduce((total, item) => total + item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
