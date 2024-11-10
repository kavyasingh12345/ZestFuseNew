// pages/Homepage.js
import React from 'react';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import Login from '../components/Login';
import Register from './Register';


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Homepage;
