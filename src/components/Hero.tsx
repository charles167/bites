import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Star } from "lucide-react";

const slides = [
  {
    image: "/Pictures/American pancakes - Copy.jpg",
    title: "New! American Pancakes",
    description:
      "Fluffy and golden, our American pancakes are stacked high and served with love. A morning favorite that feels like home.",
  },
  {
    image: "/Pictures/chicken sandwich - Copy.jpg",
    title: "Crispy Chicken Sandwich",
    description:
      "Juicy chicken breast, perfectly seasoned, layered in a soft bun. A savory bite you won’t forget.",
  },
  {
    image: "/Pictures/Vanilla cake loaf - Copy.jpg",
    title: "Vanilla Cake Loaf",
    description:
      "Soft, moist and fragrant vanilla loaf. The perfect pairing for tea time or dessert indulgence.",
  },
  // Add more items as needed
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="min-h-[90vh] bg-[#FCEED8] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2 text-magnolia-purple">
            <ChefHat className="h-6 w-6" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Fresh • Handmade • Daily
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#3E1C00] leading-tight">
            {currentSlide.title}
          </h1>

          <p className="text-lg text-[#5A3B1F] max-w-xl">
            {currentSlide.description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button
              variant="magnolia"
              size="lg"
              className="text-lg px-8"
              onClick={() =>
                document
                  .querySelector("#menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Our Menu
            </Button>
            <Button
              variant="order"
              size="lg"
              className="text-lg px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/2349136034654?text=Hello! I would like to place an order from Reign Bites",
                  "_blank"
                )
              }
            >
              Order Now
            </Button>
          </div>

          {/* Review & Love Tag */}
          <div className="flex items-center flex-wrap gap-6 pt-4">
            <div className="flex items-center space-x-2 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium">5.0 (120+ reviews)</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love since 2020</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex space-x-2 pt-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition ${
                  i === currentIndex ? "bg-[#3E1C00]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative w-full h-[500px]">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover rounded-3xl shadow-2xl transition duration-700"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/10 rounded-3xl" />

          {/* Nav arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 text-black rounded-full p-2 z-10 hover:bg-white"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 text-black rounded-full p-2 z-10 hover:bg-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
