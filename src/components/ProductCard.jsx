// ProductCard.js
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './../Context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img
        variant="top"
        src={product.image}
        alt="Product Image"
        style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < product.rating ? 'gold' : 'lightgray'} />
          ))}
          <span style={{ marginLeft: '0.5rem' }}>{product.rating}</span>
        </div>
        <Card.Text style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          ₹{product.price}
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
