import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975130/delicious-donuts-ai-generated_fnvwmb.png",
    title: "Delicious Donuts",
    description: "Glazed, soft, and satisfying — the perfect sweet treat.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975130/front-view-packed-food-prepared-takeaway-_1_qsuyw6.png",
    title: "Takeaway Packs",
    description: "Prepared fresh and packed with care for every order.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975128/closeup-yummy-chocolate-cookies-against-white-table_e5gnct.png",
    title: "Chocolate Cookies",
    description: "Rich, gooey, and freshly baked chocolatey goodness.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975122/piece-brown-rye-bread-presented-near-take-away-blank-bag-from-craft-paper-artisan-bakery-wooden-background_gl8kot.png",
    title: "Artisan Rye Bread",
    description: "Crafted for health and flavor. Naturally satisfying.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975121/55001980_10657902_iyfvdp.jpg",
    title: "Rustic Bread Loaves",
    description: "Traditional texture, rich in flavor and history.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753974967/23636885_m021t006_paper_food_box_mockup_02_zgvdob.png",
    title: "Eco Food Packaging",
    description: "Sustainable and smart. Our boxes care for your food & planet.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753974928/Yellow_z1i0mt.png",
    title: "Lemon Pancakes",
    description: "Bright, fluffy and zesty — sunshine on your plate.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753974894/Brown_3D_Illustration_Rice_Box_Packaging_Mockup_Instagram_Post_w6ku1w.png",
    title: "Rice Box Special",
    description: "Perfect for lunch on-the-go. Packed with nutrition & flavor.",
  },
  {
    image:
      "https://res.cloudinary.com/dspkz3qiq/image/upload/v1753975130/delicious-donuts-ai-generated_fnvwmb.png",
    title: "Back to Donuts",
    description: "Because one bite is never enough.",
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
