import { Card } from "@/components/Card/Card";
import styles from "./Cards.module.scss";
export const Cards = () => {
  const mockData = [
    { id: 1, name: "Футболка Darkmood", price: "49,99", imageUrl: "" },
    { id: 2, name: "Футболка Darkmood", price: "49,99", imageUrl: "" },
    { id: 3, name: "Футболка Darkmood", price: "49,99", imageUrl: "" },
    { id: 4, name: "Футболка Darkmood", price: "49,99", imageUrl: "" },
    { id: 5, name: "Футболка Darkmood", price: "49,99", imageUrl: "" },
    { id: 6, name: "Футболка Darkmood", price: "49,99", imageUrl: "" },
    { id: 7, name: "Футболка Darkmood", price: "49,99", imageUrl: "" },
  ];
  return (
    <>
      <div className={styles.cards}>
        {mockData.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </>
  );
};
