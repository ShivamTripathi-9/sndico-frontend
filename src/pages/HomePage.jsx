import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection  from '../components/home/heroSection';
import ShopByCategories from '../components/home/shopByCategories';
import LuxuryDesignComponent from '../components/home/luxuryDesignComponent';
import BestProductCard from '../components/home/bestProductCard';

import FurnitureSlider from '../components/home/furnitureSlider';
import Footer from '../components/footer';
export default function HomePage() {
  return (
    <>
      <Navbar />  
      <HeroSection />
      <ShopByCategories/>
      <LuxuryDesignComponent/>
      <BestProductCard/>
      <FurnitureSlider/>

      <Footer/>

    </>
  )
}
