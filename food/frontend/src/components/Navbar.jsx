import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-orange-500 text-white py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <span className="text-black">Zest</span>
          <span className="text-orange-600">Fuse.</span>
        </div>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700 font-bold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700 font-bold" : ""}`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700 font-bold" : ""}`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700 font-bold" : ""}`
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700 font-bold" : ""}`
            }
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

