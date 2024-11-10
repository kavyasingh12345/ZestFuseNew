import React from 'react';

const List = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-orange-200 p-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">Your List of Dishes</h2>

        <div className="space-y-6">
          {/* Dish 1 */}
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/100" // Placeholder image
              alt="Dish"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <p className="text-lg font-bold text-gray-700">Dish Name</p>
              <p className="text-gray-600">This is a description of the dish, with all the delicious details.</p>
            </div>
            <div className="text-right">
              <p className="text-orange-600 font-semibold">Rs 100</p>
              <button className="mt-2 text-sm text-red-500 hover:underline">Remove</button>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/100" // Placeholder image
              alt="Dish"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <p className="text-lg font-bold text-gray-700">Dish Name</p>
              <p className="text-gray-600">This is a description of the dish, with all the delicious details.</p>
            </div>
            <div className="text-right">
              <p className="text-orange-600 font-semibold">Rs 150</p>
              <button className="mt-2 text-sm text-red-500 hover:underline">Remove</button>
            </div>
          </div>

          {/* Add more dish items as needed */}
        </div>
      </div>
    </div>
  );
};

export default List;
