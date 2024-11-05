import React from 'react';
import { motion } from 'framer-motion';
import kasutamcow from './../assets/kasutamcow.webp'; // Replace with your honey image path
import { Link } from 'react-router-dom';


function Welcome() {
  return (
    <section style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fffbea' }}>
      {/* Motion Image */}
      <motion.img
        src={kasutamcow}
        alt="Fresh Honey"
        style={{ width: '200px', height: 'auto', marginBottom: '1rem' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Text Content */}
      <h2 style={{ color: '#d48806' }}>Pure, Natural, and Delicious Honey</h2>
      <p style={{ maxWidth: '500px', margin: '0 auto', color: '#4a4a4a' }}>
        Taste the richness of our pure honey, crafted by nature and delivered with love.
        Perfect for adding sweetness to your life, naturally!
      </p>

      {/* Shop Now Button */}
      <Link to="/Our-Products">
  <button
    style={{
      marginTop: '1.5rem',
      padding: '0.8rem 1.5rem',
      backgroundColor: '#d48806',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem'
    }}
  >
    Shop Now
  </button>
</Link>

    </section>
  );
}

export default Welcome;
