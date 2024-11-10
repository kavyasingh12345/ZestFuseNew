import React, { useState } from 'react';
import imag from '/upload2.png'; // Corrected path if using `public` folder

const Add = () => {
  const [image, setImage] = useState(null);

  // Handler to set the selected image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-200 to-orange-200 p-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Add New Dish</h2>
        <form className="space-y-6">
          <div className="flex items-center space-x-4">
            <p className="text-gray-700">Upload Image of Your Dish:</p>
            <label htmlFor="image" className="cursor-pointer hover:opacity-80">
              <img
                src={image ? URL.createObjectURL(image) : imag}
                alt="Upload Dish"
                className="w-20 h-20 object-cover rounded-full border-2 border-orange-500"
              />
            </label>
            <input type="file" id="image" hidden onChange={handleImageChange} required />
          </div>

          {/* Remaining form fields */}
          <div>
            <label className="block text-gray-700 mb-2">Name of Your Dish:</label>
            <input
              type="text"
              name="name"
              placeholder="Dish Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description:</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a description..."
              className="w-full p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[120px]">
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                name="category"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500"
                required
              >
                <option value="Chinese">Chinese</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Italian">Italian</option>
              </select>
            </div>

            <div className="flex-1 min-w-[120px]">
              <label className="block text-gray-700 mb-2">Price (in Rs):</label>
              <input
                type="number"
                name="price"
                placeholder="100"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              Add Dish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
