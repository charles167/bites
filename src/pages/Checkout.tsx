import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    let message = `🧁 *REIGN BITES ORDER*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Email: ${formData.email}\n\n`;
    
    message += `*Delivery Address:*\n`;
    message += `${formData.address}\n`;
    message += `${formData.city}, ${formData.state}\n\n`;
    
    message += `*Order Items:*\n`;
    state.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Price: ${item.price} | Qty: ${item.quantity} | Weight: ${item.weight}\n\n`;
    });
    
    message += `*Total Amount: ₦${state.total.toLocaleString()}*\n\n`;
    
    if (formData.notes) {
      message += `*Special Notes:*\n${formData.notes}\n\n`;
    }
    
    message += `Thank you for choosing Reign Bites! 🍰`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/2348123456789?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Order Sent!",
      description: "Your order has been sent via WhatsApp. We'll contact you soon!",
    });
    
    navigate('/');
  };

  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-magnolia-text mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-magnolia-text mb-6">Delivery Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <Label htmlFor="address">Street Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="notes">Special Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any special instructions for your order..."
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-3">
                <Button type="submit" variant="magnolia" className="w-full">
                  Send Order via WhatsApp
                </Button>
                <Button 
                  type="button"
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/')}
                >
                  Continue Shopping
                </Button>
              </div>
            </form>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-magnolia-text mb-6">Order Summary</h2>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-magnolia-text/70">{item.weight}</p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <span>Total</span>
                  <span>₦{state.total.toLocaleString()}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/cart')}
                >
                  Edit Cart
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;