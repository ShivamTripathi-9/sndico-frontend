import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection  from '../components/home/heroSection';
import ShopByCategories from '../components/home/shopByCategories';
import LuxuryDesignComponent from '../components/home/luxuryDesignComponent';
import BestProductCard from '../components/home/bestProductCard';

import FurnitureSlider from '../components/home/furnitureSlider';
import BlogSlider from '../components/home/blogSlider';
import TestimonialSlider from '../components/home/testimonialSlider';
import HandleSubmit from '../components/home/handleSubmit';
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
      <BlogSlider/>
      <TestimonialSlider/>
      <HandleSubmit/>   
      
      <Footer/>

    </>
  )
}
