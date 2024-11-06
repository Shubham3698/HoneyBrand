// ProductDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state;

  const handleBuyNowClick = () => {
    const phoneNumber = "7080981033"; // Replace with the desired phone number (country code included)
    const message = `Hello,%0A I am interested in buying the product: ${product.name} for ₹${product.price}.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        <h2>{product.name}</h2>
        <p>Rating: {product.rating} ★</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Price: ₹{product.price}</p>
        <Button variant="success" onClick={handleBuyNowClick}>Buy Now</Button>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
