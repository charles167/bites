import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/Pictures/Yellow 3D Coffee Product Feature Instagram Post (2).png",
    title: "New! American Pancakes",
    description:
      "Fluffy and golden, our American pancakes are stacked high and served with love.",
  },
  {
    image: "/Pictures/white-screen-display-mobile-phone-near-basket-full-baked-croissant-wooden-table.png",
    title: "Crispy Chicken Sandwich",
    description:
      "Juicy chicken breast, perfectly seasoned, layered in a soft bun. A savory bite you won’t forget.",
  },
  {
    image: "/Pictures/piece-brown-rye-bread-presented-near-take-away-blank-bag-from-craft-paper-artisan-bakery-wooden-background.png",
    title: "Vanilla Cake Loaf",
    description:
      "Soft, moist and fragrant vanilla loaf. The perfect pairing for tea time or dessert indulgence.",
  },
  {
    image: "/Pictures/front-view-packed-food-prepared-takeaway-(1).png",
    title: "Classic Belgian Waffles",
    description:
      "Crispy outside, fluffy inside — served with syrup and love.",
  },
 
  


];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-2xl shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="max-w-xl ml-12 p-6 bg-white/90 rounded-r-2xl shadow-lg">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-700">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
