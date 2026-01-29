import { products } from "./products";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
