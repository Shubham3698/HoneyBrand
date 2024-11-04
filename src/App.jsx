// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext'; // Import CartProvider
import Navv from './components/Navv';
import Home from './pages/Home';
import OurProduct from './pages/OurProduct';
import WorkInProgress from './pages/Working';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>  {/* Wrap everything with CartProvider */}
      <Router>
        <Navv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Our-Products" element={<OurProduct />} />
          <Route path="/Our-Story" element={<WorkInProgress />} />
          <Route path="/Contact" element={<WorkInProgress />} />
          <Route path="/Track-order" element={<WorkInProgress />} />
          <Route path="/Account" element={<WorkInProgress />} />
          <Route path="/Cart" element={<Cart />} /> {/* Route for the Cart page */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
