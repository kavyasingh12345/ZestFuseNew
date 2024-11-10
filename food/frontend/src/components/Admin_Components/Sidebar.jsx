import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gradient-to-br from-orange-300 to-red-500 min-h-screen flex flex-col gap-5 py-10">
      <NavLink
        to="add"
        className={({ isActive }) =>
          `flex justify-end ${isActive ? 'bg-orange-700 text-white' : 'text-gray-800'}`
        }
      >
        <span className="border-orange-700 border-4 border-r-0 p-3 rounded-l-full px-4 w-2/3">
          Add Items
        </span>
      </NavLink>
      <NavLink
        to="list"
        className={({ isActive }) =>
          `flex justify-end ${isActive ? 'bg-orange-700 text-white' : 'text-gray-800'}`
        }
      >
        <span className="border-orange-700 border-4 border-r-0 p-3 rounded-l-full px-4 w-2/3">
          List Items
        </span>
      </NavLink>
      <NavLink
        to="orders"
        className={({ isActive }) =>
          `flex justify-end ${isActive ? 'bg-orange-700 text-white' : 'text-gray-800'}`
        }
      >
        <span className="border-orange-700 border-4 border-r-0 p-3 rounded-l-full px-4 w-2/3">
          Orders
        </span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
