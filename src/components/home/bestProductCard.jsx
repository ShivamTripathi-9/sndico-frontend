import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ image, title, price, originalPrice, onImageClick }) => (
  <div className="flex flex-col bg-white rounded-lg overflow-hidden "
 >
    <div 
      className="relative aspect-square overflow-hidden cursor-pointer gap-2 group"
      onClick={onImageClick}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300"
      />
      <button className="absolute bottom-2.5 right-2.5 bg-[#D9D9D9] rounded-full p-1   hover:bg-gray-900 hover:text-white">
        <Plus className="w-4 h-4 text-gray-700" />
      </button>
    </div>
    <div className="p-0.5">
      <h3 className="text-[#404040] font-semibold text-sm sm:text-base mb-1 tracking-tight leading-tight">{title}</h3>
      <div className="flex items-center gap-2">
        <span className="text-[#404040]  font-500 text-base sm:text-sm">{price}</span>
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through ">₹{originalPrice}</span>
        )}
      </div>
    </div>
  </div>
);

export default function BestSellerExplorer() {
  const [activeCategory, setActiveCategory] = useState('Furniture');

  const categories = ['Furniture', 'Mattresses', 'Home Goods'];

  const products = {
    Furniture: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
        title: 'Hall Table',
        price: '500.00',
        originalPrice: '750.00',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=500&fit=crop',
        title: 'Teapoy',
        price: '450.00',
        originalPrice: '650.00',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500&fit=crop',
        title: 'Chair And Table Dine',
        price: '1000.00',
        originalPrice: '1500.00',
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
        title: 'Relax Sit Sofa',
        price: '820.00',
        originalPrice: '1200.00',
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=500&fit=crop',
        title: 'Wooden Chair & Table',
        price: '2500.00',
        originalPrice: '3500.00',
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&h=500&fit=crop',
        title: 'Wooden Relax Chair',
        price: '450.00',
        originalPrice: '650.00',
      },
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
        title: 'Sofa Set',
        price: '3250.00',
        originalPrice: '4500.00',
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop',
        title: 'Bedroom Bed Set',
        price: '2250.00',
        originalPrice: '3200.00',
      },
    ],
    Mattresses: [
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&h=500&fit=crop',
        title: 'Memory Foam Mattress',
        price: '4500.00',
        originalPrice: '6000.00',
      },
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=500&fit=crop',
        title: 'Orthopedic Mattress',
        price: '5500.00',
        originalPrice: '7500.00',
      },
      {
        id: 11,
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&h=500&fit=crop',
        title: 'Latex Mattress',
        price: '6500.00',
        originalPrice: '8500.00',
      },
      {
        id: 12,
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&h=500&fit=crop',
        title: 'Spring Mattress',
        price: '3500.00',
        originalPrice: '5000.00',
      },
    ],
    'Home Goods': [
      {
        id: 13,
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop',
        title: 'Decorative Vase Set',
        price: '850.00',
        originalPrice: '1200.00',
      },
      {
        id: 14,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&h=500&fit=crop',
        title: 'Wall Clock Modern',
        price: '650.00',
        originalPrice: '900.00',
      },
      {
        id: 15,
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&h=500&fit=crop',
        title: 'Table Lamp Set',
        price: '1250.00',
        originalPrice: '1800.00',
      },
      {
        id: 16,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop',
        title: 'Cushion Collection',
        price: '950.00',
        originalPrice: '1400.00',
      },
    ],
  };

  const handleImageClick = (productId) => {
    // Redirect to product detail page
    window.location.href = `/product/${productId}`;
  };

  return (
    <div className=" bg-gray-50 py-8 px-1 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto ">
      <div className=" px-1 sm:px-6 lg:px-8 ">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-center text-[#000000] mb-6">

          Explore Best Seller Category
        </h1>

        {/* Category Tabs */}
       <div className="flex flex-wrap justify-center gap-3 mb-5 md:mb-8">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-4 py-1.5 rounded-full text-[16px] font-medium transition-all duration-200 ${
        activeCategory === category
          ? 'bg-[#E8E8E8] text-[#404040]'
          : ' text-[#404040] hover:bg-[#D5D5D5]'
      }`}
    >
      {category}
    </button>
  ))}
</div>


        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-2 md:gap-y-6">

          {products[activeCategory].map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              onImageClick={() => handleImageClick(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}