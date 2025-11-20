import React from 'react';

export default function LuxuryDesignComponent() {
  return (
    <div className="w-full flex items-center justify-center bg-white max-w-7xl mx-auto">
      <div className="px-1 sm:px-6 lg:px-8  flex flex-col lg:flex-row lg:h-[400px] bg-white">
        {/* Image Section - 50% */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop" 
            alt="Luxury bedroom interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section - 50% */}
        <div className="w-full lg:w-1/2 bg-[#F4F4F4] flex items-center justify-center px-6 py-6 lg:px-12 lg:py-8 min-h-[350px] lg:h-[400px]">
          <div className="w-full">
            {/* Sale Badge */}
            <div className="inline-block bg-[#B14E00] px-4 py-2 mb-4">
              <p 
                className="text-white text-sm tracking-[0.06em] leading-none"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '6%'
                }}
              >
                SALE UP TO 25% OFF
              </p>
            </div>
            
            {/* Heading */}
            <h1 className="text-[#000000] text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4 leading-tight">
              Luxury Designs, Now More Adorable!
            </h1>
            
            {/* Description */}
            <p className="text-[#696969] text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            {/* Button */}
            <button className="bg-[#FF7F19] text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:bg-[#e66f10] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}