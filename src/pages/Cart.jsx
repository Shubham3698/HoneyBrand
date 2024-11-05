// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './../Context/CartContext';
import { Button, Image } from 'react-bootstrap';
import Footer from '../components/Footer';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (id, change) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(id, newQuantity);
      }
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
                {/* Product Details */}
                <td style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                  <Image src={item.image} alt={item.name} style={{ width: '80px', marginRight: '10px' }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                    <p style={{ margin: 0 }}>₹{item.price}</p>
                  </div>
                </td>

                {/* Quantity Adjustment */}
                <td style={{ padding: '10px' }}>
                  <Button variant="secondary" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <Button variant="secondary" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                </td>

                {/* Total Price */}
                <td style={{ padding: '10px' }}>
                  ₹{item.price * item.quantity}
                </td>

                {/* Remove Button */}
                <td style={{ padding: '10px' }}>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
}

export default Cart;
