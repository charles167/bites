import { useState, useEffect } from "react";

const images = [
  "/Pictures/American pancakes - Copy.jpg",
  "/Pictures/chicken sandwich - Copy.jpg",
  "/Pictures/Vanilla cake loaf - Copy.jpg",
  "/Pictures/jollof rice - Copy.jpg",
  "/Pictures/Hot Chocolate - Copy.jpg",
  "/Pictures/Egg roll - Copy.jpg",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Optional: Autoplay feature
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-lg max-h-[600px] sm:max-h-[400px] h-[60vh]">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 text-black rounded-full p-2"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 text-black rounded-full p-2"
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
