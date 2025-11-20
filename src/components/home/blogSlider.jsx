import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const BlogSlider = () => {
  const blogData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      title: 'Purchase Securely',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  ',
      link: '/purchase-securely'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
      title: 'Ships From Warehouse',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/ships-from-warehouse'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
      title: 'Style Your Room',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/style-your-room'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      title: 'Modern Living',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/modern-living'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      title: 'Luxury Furniture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/luxury-furniture'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
      title: 'Home Decor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/home-decor'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, blogData.length - cardsPerView);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleCardClick = (link) => {
    // Simulate page redirect
    alert(`Redirecting to: ${link}`);
    // In a real application, you would use:
    // window.location.href = link;
    // or with React Router: navigate(link);
  };

  return (
    <div className="w-full  bg-white py-4  bg-white max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-3xl font-semibold text-center mb-5 mt-0 text-[#000000]">
        Blog
      </h1>

      {/* Desktop View - 3 Cards Slider */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-1/3 flex-shrink-0 px-3"
              >
                <div
                  className="bg-white rounded-lg overflow-hidden "
                  onClick={() => handleCardClick(blog.link)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-1xl font-bold mb-1 text-[#333333]">
                      {blog.title}
                    </h3>
                    <p className="text-[#666666] mb-1 leading-relaxed line-clamp-2">
  {blog.description?.slice(0, 120)}
  {blog.description?.length > 120 && (
    <span className="text-blue-600 cursor-pointer">...more</span>
  )}
</p>

                    <button className="flex items-center gap-2 text-[#FF7F19] font-medium">
                      Read More
                      <ArrowRight size={18} color="#FF7F19" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons for Desktop */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          )}
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-[#FF7F19] w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}
      </div>

      {/* Tablet View - 2 Cards Slider */}
      <div className="hidden md:block lg:hidden max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`
            }}
          >
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-1/2 flex-shrink-0 px-3"
              >
                <div
                  className="bg-white rounded-lg overflow-hidden "
                  onClick={() => handleCardClick(blog.link)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xl font-semibold mb-0 text-[#333333]">
                      {blog.title}
                    </h3>
                    <p className="text-[#666666] mb-1 leading-relaxed">
                      {blog.description}
                    </p>
                    <button className="flex items-center gap-3 text-[#FF7F19] font-medium">
                      Read More
                      <ArrowRight size={18} color="#FF7F19" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons for Tablet */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          )}
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center gap-2 mt-0">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-[#FF7F19] w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}
      </div>

      {/* Mobile View - Single Card Slider */}
      <div className="md:hidden max-w-md mx-auto">
        <div
          ref={sliderRef}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div
                  className="bg-white rounded-lg overflow-hidden "
                  onClick={() => handleCardClick(blog.link)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xl font-semibold mb-0 text-gray-900">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-2 leading-relaxed">
                      {blog.description}
                    </p>
                    <button className="flex items-center gap-2 text-[#FF7F19] font-medium">
                      Read More
                      <ArrowRight size={18} color="#FF7F19" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {blogData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-[#FF7F19] w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BlogSlider;