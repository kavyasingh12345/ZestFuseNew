import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <header className="bg-orange-500 text-white py-8">
      <div className="container mx-auto flex justify-between items-center px-4 w-full">
        <div className="text-2xl font-bold">
          <span className="text-black">Zest</span>
          <span className="text-orange-600">Fuse.</span>
          <span className="text-orange-900"> Admin Panel</span>
        </div>
        <nav className="space-x-6">
          {/* Link to Homepage */}
          <Link to="/" className="text-black hover:text-orange-600">Home</Link>
          <Link to="/profile" className="text-black hover:text-orange-600">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar2;
