import React from 'react'
import Footer from './../components/Footer';
import HeroSection from './../components/HeroSection';
import Navv from './../components/Navv';
import ProductCard from './../components/ProductCard';
import Welcome from '../components/Welcome';
import CustomerReview from './../components/CustomerReview'
import Certification from '../components/Certificate';

function Home() {
  return (
    <div>
      <Navv />
      <HeroSection/>
        <Welcome/>
      <div style={{display:'flex',flexWrap:'wrap'}} className="jars">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      <CustomerReview/>
      <Certification/>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  )
}

export default Home