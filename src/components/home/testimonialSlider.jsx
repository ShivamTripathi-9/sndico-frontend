import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const testimonials = [
    {
      id: 1,
      name: "Vijay Pandey",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 4
    },
    {
      id: 2,
      name: "Vijay Sharma",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5
    },
    {
      id: 3,
      name: "Vijay Sharma",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5
    },
    {
      id: 4,
      name: "Vijay Sharma",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5
    },
    {
      id: 5,
      name: "Vijay Sharma",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5
    },
    {
      id: 6,
      name: "Vijay Sharma",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      rating: 5
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide for mobile only
  useEffect(() => {
    if (window.innerWidth < 640) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + slidesToShow >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - slidesToShow) : prev - 1
    );
  };

  return (
    <div className="w-full relative overflow-hidden bg-white max-w-7xl mx-auto">
      {/* Background with curved shapes */}
      <div className="absolute inset-0 bg-[#FFECDD] wave-top">
        {/* Left curved shape */}
        {/* <div className="absolute left-0 top-0 w-1/3 h-full">
          <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
            <path d="M0,0 L400,0 Q300,400 400,800 L0,800 Z" fill="rgba(255, 220, 200, 0.3)" />
          </svg>
        </div> */}
        
        {/* Right curved shape */}
        {/* <div className="absolute right-0 top-0 w-1/3 h-full">
          <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
            <path d="M400,0 L0,0 Q100,400 0,800 L400,800 Z" fill="rgba(255, 220, 200, 0.3)" />
          </svg>
        </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 py- px-4 sm:px-6 lg:px-1">
        <div className="">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-center text-gray-900 mb-2">
              What Our Customer Say
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Real reviews from real customer
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative sm:px-12">
            {/* Navigation Buttons - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#AFAEAF66] rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#AFAEAF66] rounded-full shadow-lg hover:bg-gray-50 p-2 transition-all duration-300 hover:scale-110"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Cards Container with proper clipping */}
            <div className="overflow-hidden pt-16 pb-8">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-0 sm:gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 px-4 sm:px-0"
                    style={{ 
                      width: slidesToShow === 1 ? '100%' : `calc(${100 / slidesToShow}% - ${24 * (slidesToShow - 1) / slidesToShow}px)`,
                      minWidth: slidesToShow === 1 ? '100%' : `calc(${100 / slidesToShow}% - ${24 * (slidesToShow - 1) / slidesToShow}px)`
                    }}
                  >
                    {/* Card wrapper with proper spacing */}
                    <div className="relative">
                      {/* White card */}
                      <div className="bg-white rounded-2xl relative pt-12 pb-5 px-6">
                        {/* Image positioned at top, overlapping the card */}
                        <div className="absolute -top-16 left-6 right-8">
                          <div className="overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-24 sm:h-28 object-contain"
                            />
                          </div>
                        </div>

                        {/* Name */}
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {testimonial.name}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center text-orange-500 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1 fill-orange-500" />
                          <span className="font-medium">{testimonial.location}</span>
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {testimonial.text}
                        </p>

                        {/* Star Rating */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-orange-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * slidesToShow)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / slidesToShow) === idx
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;