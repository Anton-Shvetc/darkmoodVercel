"use client";
import { Card } from "@/components/Card/Card";
import styles from "./Cards.module.scss";
import { useEffect, useState } from "react";

export const Cards = () => {
  const [data, setData] = useState([]);

  const getCardsData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_HOST}/api/catalogs?populate=images`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    setData(json.data);
  };

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div className={styles.cards}>
      {data &&
        data.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
    </div>
  );
};
