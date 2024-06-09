"use client";
import { Card } from "@/components/Card/Card";
import styles from "./Cards.module.scss";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

export const Cards = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("все категории");

  const filteringData = (filterValue) => {
    if (filterValue === "все категории") {
      setFilterData(data);
      setActiveCategory("все категории");
      return;
    }

    const newData = data.filter(
      (el) => el?.attributes?.category.toLowerCase() === filterValue
    );
    setActiveCategory(filterValue);
    setFilterData(newData);
  };

  const getCategories = async (data) => {
    const categories = await data.map((el) =>
      el.attributes.category.toLowerCase()
    );

    const uniqueValues = Array.from(new Set(categories));

    setCategories(["все категории", ...uniqueValues]);

    return;
  };

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

    const categories = await getCategories(json.data);
    setData(json.data);
    setFilterData(json.data);
  };

  useEffect(() => {
    getCardsData();
  }, []);

  if (!categories || !data) {
    return <div className={styles.cards}>Загрузка страницы...</div>;
  }

  return (
    <div>
      {categories && (
        <ul className={styles.categories}>
          {categories.map((el) => {
            return (
              <li
                className={
                  activeCategory !== el
                    ? styles.category
                    : styles.category__active
                }
                onClick={() => filteringData(el)}
                key={el}
              >
                {el}
              </li>
            );
          })}
        </ul>
      )}

      <div className={styles.cards}>
        {filterData &&
          filterData.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
      </div>
    </div>
  );
};
