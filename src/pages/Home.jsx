// Home.js
import React from 'react';
import Footer from './../components/Footer';
import HeroSection from './../components/HeroSection';
import Navv from './../components/Navv';
import ProductCard from './../components/ProductCard';
import Welcome from '../components/Welcome';
import CustomerReview from './../components/CustomerReview';
import Certification from '../components/Certificate';
import leg from './../assets/leg.gif';
import phone from './../assets/phone.webp';
import laptop from './../assets/laptop.webp';

function Home() {
  const products = [
    { name: 'Product 1', price: 999, rating: 4, image: leg },
    { name: 'Product 2', price: 799, rating: 5, image: phone },
    { name: 'Product 3', price: 1199, rating: 3, image: laptop },
    { name: 'Product 4', price: 999, rating: 4, image: phone },
    { name: 'Product 5', price: 1499, rating: 4, image: laptop },
  ];

  return (
    <div>
      <Navv />
      <HeroSection />
      <Welcome />

      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <CustomerReview />
      <Certification />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
