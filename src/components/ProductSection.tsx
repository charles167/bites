import ProductCard from "./ProductCard";

interface Product {
  name: string;
  description: string;
  price: string;
  weight: string;
  rating?: number;
  isPopular?: boolean;
  image?: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  emoji: string;
  products: Product[];
}

const ProductSection = ({ id, title, emoji, products }: ProductSectionProps) => {
  return (
    <section id={id} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-magnolia-cream px-6 py-3 rounded-full mb-4">
            <span className="text-3xl">{emoji}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-magnolia-text">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted selection of fresh, delicious treats made with premium ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={`${id}-${index}`}
              {...product}
              category={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;