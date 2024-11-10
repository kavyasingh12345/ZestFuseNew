// App.js
import React from 'react';
import Homepage from './pages/Homepage';
// import Admin from './pages/Admin';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="*" element={<Homepage />} />
        {/* <Route path="/admin/" element={<Admin />} /> */}
      </Routes>
    </CartProvider>
  );
}



export default App;
