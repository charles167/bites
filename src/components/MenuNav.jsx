import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const navItems = [
 
  { name: "Baked Goods", href: "#baked-goods", image:" /Pictures/American pancakes - Copy.jpg" },
  { name: "Snacks & Crisps", href: "#snacks", image: "/Pictures/chicken sandwich - Copy.jpg" },
  { name: "Pastries", href: "#pastries", image: "/Pictures/Vanilla cake loaf - Copy.jpg" },
  { name: "Brunch", href: "#brunch", image:  "/Pictures/jollof rice - Copy.jpg" },
  { name: "Sauces", href: "#sauces", image: "/Pictures/Hot Chocolate - Copy.jpg" },
];

const MenuNav = ({ onSelect }) => {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (onSelect) onSelect(href);
  };

  return (
    <div className="w-full px-2 py-3 bg-white sticky top-16 z-40 shadow-sm">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        className="flex"
      >
        {navItems.map((item) => (
          <SwiperSlide
            key={item.name}
            className="!w-auto flex justify-center items-center"
          >
            <button
              onClick={() => handleClick(item.href)}
              className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-xl hover:bg-purple-100 transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 object-contain mb-1"
                />
              )}
              <span className="text-xs font-medium text-center">{item.name}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenuNav;
