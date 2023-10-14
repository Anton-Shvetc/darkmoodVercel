import { Card } from "@/components/Card/Card";
import styles from "./Cards.module.scss";
import imageUrl from "@/public/images/card-img.png"

export const Cards = () => {
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
      <div className={styles.cards}>
        {mockData.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
  );
};
