import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import CheckOut from './pages/CheckOut/CheckOut';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {

  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/:id" element={<ProductDescription />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />


          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </SearchProvider>
    </>

  );
}

export default App;
