import { Cards } from "@/components/Cards/Cards";
import styles from "./catalog.module.scss";
import imageUrl from "@/public/images/card-img.png";

export default function Catalog() {


  

  const mockData = [
    {
      id: 1,
      name: "Футболка Darkmood",
      price: "49,99",
      imageUrl: imageUrl,
    },
    { id: 2, name: "Футболка Darkmood", price: "49,99", imageUrl: imageUrl },
    { id: 3, name: "Футболка Darkmood", price: "49,99", imageUrl: imageUrl },
    { id: 4, name: "Футболка Darkmood", price: "49,99", imageUrl: imageUrl },
    { id: 5, name: "Футболка Darkmood", price: "49,99", imageUrl: imageUrl },
  ];

  return (
    <section className={styles.container  }>
      <Cards/>
    </section>
  );
}
