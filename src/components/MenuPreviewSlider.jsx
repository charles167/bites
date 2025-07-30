import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useRef } from "react";

const menuItems = [
  { title: "Chicken Sandwich", image: "/Pictures/chicken sandwich - Copy.jpg" },
 { title: "Chicken Skewers ", image: "/Pictures/Chicken Skewers - Copy.jpg" },
//   { title: "Puff-puff", image: "/Pictures/puff-puff - Copy.jpg" },
  { title: "Reign Bread", image: "/Pictures/Reign bread - Copy.jpg" },
  { title: "Spiced Kuli Kuli", image: "/Pictures/Spiced Kuli kuli - Copy.jpg" },
//   { title: "Fruit Cake", image: "/Pictures/fruit cake - Copy.jpg" },
//   { title: "Roasted Groundnut", image: "/Pictures/Roasted Groundnut - Copy.jpg" },
  { title: "Naija Buns", image: "/Pictures/Naija Buns - Copy.jpg" },
];

const MenuPreviewSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 bg-muted relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-magnolia-purple">
          Explore Our Menu
        </h2>
        <div className="relative">
          {/* Custom Arrows */}
          <div
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-4xl text-magnolia-purple font-bold"
          >
            ‹
          </div>
          <div
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-4xl text-magnolia-purple font-bold"
          >
            ›
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{ delay: 2500 }}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Navigation]}
          >
            {menuItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center space-y-3 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md shadow-md transition duration-300 transform group-hover:scale-105 group-hover:shadow-xl border border-border"
                  />
                  <p className="font-medium text-sm text-muted-foreground">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSlider;
