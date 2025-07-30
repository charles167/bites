import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { CartIcon } from "@/components/CartIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Baked Goods", href: "#baked-goods" },
    { name: "Snacks & Crisps", href: "#snacks" },
    { name: "Pastries", href: "#pastries" },
    { name: "Brunch", href: "#brunch" },
    { name: "Sauces", href: "#sauces" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a2b17f30-234c-4381-9d58-c69114d65ac7.png" 
              alt="Reign Bites Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact & Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+2349136034654" 
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              +234 913 603 4654
            </a>
            <CartIcon />
            <Button 
              variant="order" 
              size="sm"
              onClick={() => window.open('https://wa.me/2349136034654?text=Hello! I would like to place an order from Reign Bites', '_blank')}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartIcon />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-border">
                <a 
                  href="tel:+2349136034654" 
                  className="flex items-center text-sm text-muted-foreground mb-3"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +234 913 603 4654
                </a>
                <Button 
                  variant="order" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/2349136034654?text=Hello! I would like to place an order from Reign Bites', '_blank')}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;