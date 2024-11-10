import React from 'react';
import { useCart } from '../context/CartContext';

const Item = ({ item }) => {
  const { cart, addToCart } = useCart();
  const itemCount = cart[item.name]?.quantity || 0;

  const increaseItemCount = () => {
    addToCart(item, 1);
  };

  const decreaseItemCount = () => {
    if (itemCount > 0) {
      addToCart(item, -1);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col justify-between h-full">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-32 rounded-lg object-cover mb-4"
      />
      <div className="text-left flex-1">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <span className="text-lg font-semibold text-gray-700">${item.price.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button 
          className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          onClick={decreaseItemCount}
          disabled={itemCount === 0}
        >
          -
        </button>
        <span className="mx-2 text-lg font-semibold text-gray-700">{itemCount}</span>
        <button 
          className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          onClick={increaseItemCount}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Item;

