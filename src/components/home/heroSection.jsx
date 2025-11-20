import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FurnitureLandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { bgImage: "/images/home/wooden-sofa.png" },
    { bgImage: "/images/home/6-seater.png" },
    { bgImage: "/images/home/all-beds.png" },
    { bgImage: "/images/home/sofacumbeds.jpeg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-white py-2 px-2 sm:py-4 sm:px-3 lg:px-6 xl:py-6 bg-white max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-4">

          {/* SLIDER - Full width on mobile, 8 columns on desktop */}
          <div className="lg:col-span-8 relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[480px] xl:h-[520px] rounded-lg lg:rounded-xl overflow-hidden shadow-md">
            <a href="#" className="block w-full h-full">
              <img
                src={slides[currentSlide].bgImage}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </a>
            
            {/* Navigation Buttons - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:block absolute left-2 lg:left-3 top-1/2 -translate-y-1/2  hover:bg-white p-1.5 lg:p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous slide"
            >
               
            </button>
            <button
              onClick={nextSlide}
              className="hidden sm:block absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 hover:bg-white p-1.5 lg:p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800" />
            </button>
            
            {/* Slide Indicators - Always visible */}
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-orange-500 w-5 sm:w-6 lg:w-8" : "bg-white/70 w-1.5 sm:w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE CARDS - Only visible on large screens (desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">

            {/* CARD 1 - */}
            <a 
              href="#deal-of-the-day" 
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group block flex-1 min-h-[235px]"
            >
              <img
                src="/images/home/deal-of-the-day.png"
                alt="Deal of the Day"
                className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
              />
            </a> 


            {/* CARD 2 - Mattress */}
            <a 
              href="#mattress-online" 
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group block flex-1 min-h-[235px]"
            >
              <img
                src="/images/home/mattress-online.png"
                alt="Mattress Online"
                className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
              />
            </a>

          </div>

        </div>
      </div>



      <div className="w-full mt-2 flex justify-center">
  <div className="w-full max-w-7xl rounded-lg overflow-hidden shadow-lg">
    <img
      src="/images/home/sndicobanner.png"
      alt="Bottom Banner"
      className="w-full h-full object-cover"
    />
  </div>
</div>


    </div>
  );
};

export default FurnitureLandingPage;