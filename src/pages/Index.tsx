import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import Footer from "@/components/Footer";
import { productsData } from "@/data/products";
import MenuPreviewSlider from "@/components/MenuPreviewSlider";
import MenuNav from "@/components/MenuNav";
import CateringSection from "@/components/CateringSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuNav />

      <MenuPreviewSlider />

      <CateringSection/>
      
      <div id="menu" className="space-y-0">
        <ProductSection
          id="baked-goods"
          title="Baked Goods"
          emoji="🧁"
          products={productsData.bakedGoods}
        />
        
        <ProductSection
          id="snacks"
          title="Snacks & Crisps"
          emoji="🍿"
          products={productsData.snacks}
        />
        
        <ProductSection
          id="pastries"
          title="Pastries"
          emoji="🥐"
          products={productsData.pastries}
        />
        
        <ProductSection
          id="brunch"
          title="Brunch & Savouries"
          emoji="🍳"
          products={productsData.brunch}
        />
        
        <ProductSection
          id="sauces"
          title="Sauces & Add-Ons"
          emoji="🥫"
          products={productsData.sauces}
        />
      </div>
      
      <FloatingOrderButton />
      <Footer />
    </div>
  );
};

export default Index;
