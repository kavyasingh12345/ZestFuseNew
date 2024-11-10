import React from 'react';

const Orders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-orange-200 p-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">Your Orders</h2>

        <div className="space-y-6">
          {/* Order 1 */}
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex-1">
              <p className="text-lg font-bold text-gray-700">Order #001</p>
              <p className="text-gray-600">Dish: Spicy Noodles</p>
              <p className="text-gray-600">Quantity: 2</p>
              <p className="text-gray-600">Ordered on: Oct 27, 2024, 12:30 PM</p>
            </div>
            <div className="text-right">
              <p className="text-orange-600 font-semibold">Status: Preparing</p>
              <button className="mt-2 text-sm text-green-500 hover:underline">Mark as Completed</button>
            </div>
          </div>

          {/* Order 2 */}
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex-1">
              <p className="text-lg font-bold text-gray-700">Order #002</p>
              <p className="text-gray-600">Dish: Margherita Pizza</p>
              <p className="text-gray-600">Quantity: 1</p>
              <p className="text-gray-600">Ordered on: Oct 27, 2024, 1:00 PM</p>
            </div>
            <div className="text-right">
              <p className="text-orange-600 font-semibold">Status: Ready for Pickup</p>
              <button className="mt-2 text-sm text-green-500 hover:underline">Mark as Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
