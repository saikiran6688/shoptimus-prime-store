
import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Summer Fashion Sale",
      subtitle: "Up to 70% OFF on trending styles",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop",
      buttonText: "Shop Now",
      gradient: "from-pink-500 to-orange-400"
    },
    {
      id: 2,
      title: "Tech Revolution",
      subtitle: "Latest laptops and mobiles with exclusive deals",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
      buttonText: "Explore Tech",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      title: "Home Essentials",
      subtitle: "Transform your space with our collection",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=600&fit=crop",
      buttonText: "Shop Home",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`relative h-full bg-gradient-to-r ${slide.gradient} flex items-center`}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            <div className="relative container mx-auto px-4 text-white">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle}
                </p>
                <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors hover:scale-105 transform animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
