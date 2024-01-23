import { Card } from "@/components/Card/Card";
import styles from "./Cards.module.scss";

export const Cards = ({data}) => {
  return (
      <div className={styles.cards}>
        {data.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
  );
};
