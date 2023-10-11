"use client";
import { ProductCard } from "@/components/Product/ProductCard";
import { usePathname } from "next/navigation";

export default function Product() {
  const pathname = usePathname();
  const idPath = pathname.replace("/catalog/", "");


  const mockCardData = {
    id: 1,
    name: "Футболка Darkmood",
    price: "49,99",
    // imageUrl: imageUrl,
  };


  return (
    <section className="container">
      <ProductCard />

      <div>
        <h2>Рекомендуем к покупке</h2>
      </div>
    </section>
  );
}
