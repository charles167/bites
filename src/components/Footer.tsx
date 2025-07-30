import { MapPin, Phone, Mail, Clock, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a2b17f30-234c-4381-9d58-c69114d65ac7.png" 
                alt="Reign Bites Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Artisan Nigerian-inspired bakery crafting fresh, homemade treats with love. 
              Experience the perfect blend of traditional flavors and modern baking techniques.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:+2349136034654" 
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+234 913 603 4654</span>
              </a>
              <a 
                href="mailto:hello@reignbites.com" 
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>hello@reignbites.com</span>
              </a>
              <a 
                href="https://www.reignbites.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span>www.reignbites.com</span>
              </a>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground">Monday - Friday</p>
                  <p className="text-primary-foreground/80 text-sm">7:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground">Saturday</p>
                  <p className="text-primary-foreground/80 text-sm">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground">Sunday</p>
                  <p className="text-primary-foreground/80 text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/reignbites" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@reignbites</span>
              </a>
              <div className="pt-4 space-y-2">
                <p className="text-primary-foreground font-medium">Quick Order</p>
                <button 
                  onClick={() => window.open('https://wa.me/2349136034654?text=Hello! I would like to place an order from Reign Bites', '_blank')}
                  className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  WhatsApp Order
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Reign Bites. All rights reserved. Made with ❤️ in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;