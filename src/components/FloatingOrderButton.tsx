import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleOrder = () => {
    window.open('https://wa.me/2349136034654?text=Hello! I would like to place an order from Reign Bites. Could you please share your menu?', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        variant="magnolia" 
        size="lg" 
        className="rounded-full shadow-elegant hover:shadow-lg px-6 py-3 text-base font-semibold"
        onClick={handleOrder}
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Order via WhatsApp
      </Button>
    </div>
  );
};

export default FloatingOrderButton;