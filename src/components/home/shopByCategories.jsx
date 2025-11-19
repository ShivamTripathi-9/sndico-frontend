import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ image, title, price, originalPrice, route }) => {
  const handleClick = () => {
    if (route) {
      window.location.href = route;
    }
  };

  return (
    <div 
      className="flex flex-col group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative bg-white rounded-xl overflow-hidden mb-2 shadow-sm transition-all duration-300">
        <div className="w-full pt-[100%] relative">
          <div className="absolute inset-0  flex items-center justify-center">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Plus Button - Always Visible */}
        <button 
          className="absolute bottom-2.5 right-2.5 bg-[#D9D9D9] rounded-full p-1   hover:bg-gray-900 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      <div className="px-0.5">
        <h3 className="text-[#404040] font-semibold text-sm sm:text-base mb-1 tracking-tight leading-tight">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-[#404040]  font-500 text-base sm:text-sm">{price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-xs sm:text-sm font-medium">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ShopByCategories = () => {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&q=80',
      title: 'Sofa & Sofa Covers',
      price: '₹500.00',
      originalPrice: '₹900.00',
      route: '/category/sofa'
    },
    {
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=600&fit=crop&q=80',
      title: 'Wood Chair',
      price: '₹600.00',
      originalPrice: '₹1200.00',
      route: '/category/chair'
    },
    {
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop&q=80',
      title: 'Cupboard',
      price: '₹1000.00',
      originalPrice: '₹1800.00',
      route: '/category/cupboard'
    },
    {
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop&q=80',
      title: 'Bed & Bed Sheet',
      price: '₹820.00',
      originalPrice: '₹1500.00',
      route: '/category/bed'
    },
    {
      image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=600&h=600&fit=crop&q=80',
      title: 'Carpets & Rugs',
      price: '₹900.00',
      originalPrice: '₹1350.00',
      route: '/category/carpet'
    },
    {
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop&q=80',
      title: 'Figurines',
      price: '₹450.00',
      originalPrice: '₹900.00',
      route: '/category/figurines'
    },
    {
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=600&fit=crop&q=80',
      title: 'Table Linen',
      price: '₹1200.00',
      originalPrice: '₹1800.00',
      route: '/category/linen'
    },
    {
      image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&h=600&fit=crop&q=80',
      title: 'Table',
      price: '₹2250.00',
      originalPrice: '₹3000.00',
      route: '/category/table'
    }
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000ff] mb-2">
            Shop By Categories
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;