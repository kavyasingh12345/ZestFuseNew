import React from 'react'

const MainContent = () => (
  <main className="container mx-auto flex md:flex-row items-center justify-center px-4 bg-gradient-to-b from-orange-200 to-orange-400 min-h-[70vh]">
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-5xl font-bold text-black">
        Enjoy Our Campus's <br /> Delicious Meal
      </h1>
      <p className="text-black-800 mt-4">
        Craving campus comfort? Get fresh, delicious meals delivered to your dorm - college dining made easy!
      </p>
      <div className="mt-6 flex justify-center md:justify-start items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
          <i className="fas fa-map-marker-alt text-orange-600"></i>
          <span className="ml-2">MNNIT Campus</span>
          <i className="fas fa-chevron-down ml-2 text-gray-600"></i>
        </div>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-500">
          Find Meals
        </button>
      </div>
    </div>
    <div className="md:w-1/2 mt-10 md:mt-0 relative">
      <div className="absolute top-0 right-4 w-64 h-64 bg-orange-500 rounded-full -z-10"></div>
      <img
        src="https://storage.googleapis.com/a1aa/image/heSZFfQDdsiz4kLVCNGRchA32AHZRV3w9PciojoeDYq20evOB.jpg"
        alt="A bowl of delicious spaghetti with tomato sauce and basil leaves"
        className="rounded-full shadow-lg"
        width="400"
        height="400"
      />
    </div>
  </main>
);

export default MainContent
