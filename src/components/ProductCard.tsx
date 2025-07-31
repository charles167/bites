import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  weight: string;
  rating?: number;
  isPopular?: boolean;
  image?: string;
  category: string;
}

const ProductCard = ({ 
  name, 
  description, 
  price, 
  weight, 
  rating = 4.8, 
  isPopular = false,
  image,
  category 
}: ProductCardProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const addToCart = () => {
    const item = {
      id: `${category}-${name.replace(/\s+/g, '-').toLowerCase()}`,
      name,
      price,
      weight,
      category
    };
    
    dispatch({ type: 'ADD_ITEM', payload: item });
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleOrder = () => {
    const message = `Hello! I would like to order ${name} (${weight}) for ${price}. Could you please confirm availability?`;
    window.open(`https://wa.me/2349136034654?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 relative overflow-hidden bg-gradient-card">
      {isPopular && (
        <div className="absolute top-3 right-3 bg-magnolia-green text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          Popular
        </div>
      )}
      
      {image && (
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-magnolia-text group-hover:text-magnolia-green transition-colors">
              {name}
            </h3>
            <div className="flex items-center space-x-1 text-magnolia-yellow">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-magnolia-green">{price}</p>
              <p className="text-xs text-muted-foreground">{weight}</p>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={addToCart}
            className="flex-shrink-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button 
            variant="elegant" 
            className="flex-1 group/btn"
            onClick={handleOrder}
          >
            <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
            Order Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;