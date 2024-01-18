import { ProductCard } from "@/components/ProductCard/ProductCard";
import styles from './product.module.scss'
import { AdditionalSales } from "@/components/AdditionalSales/AdditionalSales";

export default function Product() {
  return (
    <section className="container">
      <ProductCard />


    <AdditionalSales />
    </section>
  );
}
