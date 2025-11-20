import React, { useState, useRef } from "react";

const sliderItems = [
  { id: 1, title: "Living Room", img: "/images/home/living.jpg" },
  { id: 2, title: "Bedroom", img: "/images/home/bedroom.jpg" },
  { id: 3, title: "Dining Room", img: "/images/home/dining.jpg" },
  { id: 4, title: "Study", img: "/images/home/study.jpg" },
  { id: 5, title: "Kitchen", img: "/images/home/study.jpg" },
  { id: 6, title: "Living Room", img: "/images/home/living.jpg" },
  { id: 7, title: "Bedroom", img: "/images/home/bedroom.jpg" },
  { id: 8, title: "Dining Room", img: "/images/home/dining.jpg" }
];

export default function FurnitureSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const touchStart = useRef(null);

  // Desktop: 4 cards, Mobile: 2 cards
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 4 : 2;
    }
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < sliderItems.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const end = e.changedTouches[0].clientX;
    if (touchStart.current - end > 60) nextSlide();
    if (end - touchStart.current > 60) prevSlide();
  };

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + visibleCount < sliderItems.length;

  return (
    <div className="w-full py-1 bg-white bg-white max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-center text-gray-900 mb-3">
          India's Finest Online Furniture Brand
        </h2>

        {/* Description */}
        <div className="text-center max-w-6xl mx-auto mb-6 text-gray-600 text-sm sm:text-base">
          <p className="inline leading-relaxed">
            {showMore
              ? "India's most premium and trusted furniture brand delivering comfort, design and durability to millions of households. Every piece of furniture is crafted with international-grade quality, modern aesthetics, and long-lasting material engineered to perfection for your beautiful home."
              : "India's most premium and trusted furniture brand delivering comfort and quality for modern homes"}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#FF7F19] font-semibold ml-1 inline hover:text-[#ff6600] transition-colors"
          >
            {showMore ? "...less" : "...more"}
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative">

          {/* Left Button - Always visible but disabled when can't go prev */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       w-6 h-6 lg:w-8 lg:h-8
                       bg-[#AFAEAF66]  rounded-full 
                       flex items-center justify-center
                       transition-all duration-200 -ml-3
                       ${canGoPrev 
                         ? 'hover:bg-gray-50 cursor-pointer opacity-100' 
                         : 'opacity-40 cursor-not-allowed'}`}
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Track */}
          <div
            className="overflow-hidden px-1 sm:px-2"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-3 sm:gap-4 lg:gap-5 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`
              }}
            >
              {sliderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * (visibleCount === 4 ? 1.25 : 0.75)}rem / ${visibleCount})` }}
                >
                  <div className="bg-white  overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <p className="text-gray-800 font-semibold text-sm sm:text-base text-center">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button - Always visible but disabled when can't go next */}
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20
                       w-6 h-6 lg:w-8 lg:h-8
                       bg-[#AFAEAF66]  rounded-full 
                       flex items-center justify-center
                       transition-all duration-200
                       -mr-3
                       ${canGoNext 
                         ? 'hover:bg-gray-50 cursor-pointer opacity-100' 
                         : 'opacity-40 cursor-not-allowed'}`}
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Navigation Dots */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(sliderItems.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index * visibleCount)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(startIndex / visibleCount) === index
                  ? 'w-8 bg-[#FF7F19]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}

      </div>
    </div>
  );
}