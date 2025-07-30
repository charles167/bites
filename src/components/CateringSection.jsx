import { Button } from "@/components/ui/button";

const CateringSection = () => {
  return (
    <section className="grid md:grid-cols-2 items-center bg-[#FAD2D2] min-h-[80vh] overflow-hidden">
     {/* LEFT SIDE - Text */}
<div className="p-10 md:p-20 text-center md:text-left space-y-6">
  <h2 className="text-4xl md:text-5xl font-extrabold text-[#541A1A]">
    Catering, Gifting & Events
  </h2>
  <p className="text-lg text-[#541A1A] max-w-xl mx-auto md:mx-0">
    Our catering, gifting and events team is ready to fill your event or
    celebration with a custom selection of our best creations. No
    occasion is too large—or too small!
  </p>
  <div className="pt-4">
    <a
      href="https://wa.me/2349136034654?text=Hello! I’d like to inquire about catering or events"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className="bg-white hover:bg-gray-100 text-green-600 text-lg font-semibold px-10 py-4 rounded-full border border-green-600 shadow-sm transition-all"
      >
        GET STARTED
      </Button>
    </a>
  </div>
</div>

      {/* RIGHT SIDE - Image with background */}
      <div
        className="relative h-full w-full flex items-center justify-center"
        style={{
          backgroundImage: `url('/bg-stripes.png')`, // Your vertical stripe background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src= "/Pictures/chicken sandwich - Copy.jpg"
          alt="Cake"
          className="w-80 md:w-[350px] lg:w-[400px] z-10 drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default CateringSection;
