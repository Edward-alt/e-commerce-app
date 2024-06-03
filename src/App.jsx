import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Home, Cart, Product } from './components';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
