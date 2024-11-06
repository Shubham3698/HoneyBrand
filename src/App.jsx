// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext'; // Import CartProvider
import Navv from './components/Navv';
import Home from './pages/Home';
import OurProduct from './pages/OurProduct';
import WorkInProgress from './pages/Working';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Account from './pages/Account';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <CartProvider>  {/* Wrap everything with CartProvider */}
      <Router>
        <Navv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Our-Products" element={<OurProduct />} />
          <Route path="/Our-Story" element={<WorkInProgress />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Track-order" element={<WorkInProgress />} />
          <Route path="/Account" element={<Account/>} />
          <Route path="/Cart" element={<Cart />} /> {/* Route for the Cart page */}
          <Route path="/product-details" element={<ProductDetails/>} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
