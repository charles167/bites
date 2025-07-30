import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export const CartIcon = () => {
  const { state } = useCart();
  const navigate = useNavigate();
  
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => navigate('/cart')}
    >
      <ShoppingCart className="h-4 w-4" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-magnolia-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
          {itemCount}
        </span>
      )}
    </Button>
  );
};