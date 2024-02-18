"use client";
import { AdditionalSalesCard } from "../AdditionalSalesCard/AdditionalSalesCard";
import styles from "./AdditionalSales.module.scss";
import imageUrl from "@/public/images/card-img.png";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const AdditionalSales = () => {
  const pathname = usePathname();
  const idPath = pathname.replace("/catalog/", "");

  // const mockAdditionalSalesData = [
  //   {
  //     id: 1,
  //     title: "Ультра черная футболка",
  //     price: "26.25",
  //     image: { imageUrl },
  //   },
  //   {
  //     id: 2,
  //     title: "Ультра черная футболка",
  //     price: "26.25",
  //     image: { imageUrl },
  //   },
  //   {
  //     id: 3,
  //     title: "Ультра черная футболка",
  //     price: "26.25",
  //     image: { imageUrl },
  //   },
  //   {
  //     id: 4,
  //     title: "Ультра черная футболка",
  //     price: "26.25",
  //     image: { imageUrl },
  //   },
  //   {
  //     id: 5,
  //     title: "Ультра черная футболка",
  //     price: "26.25",
  //     image: { imageUrl },
  //   },
  //   {
  //     id: 6,
  //     title: "Ультра черная футболка",
  //     price: "26.25",
  //     image: { imageUrl },
  //   },
  // ];

  const [data, setData] = useState([]);

  const getCardsData = async () => {
    const response = await fetch(
      "https://darkmode-serve.ru/api/catalogs?populate=images",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer 63e74db5f842896da84149d352ea13c224cb240781490ff12f574a960df9a33894190bc96d5a5fc11483876cf43cc0d682900d178466dec4afdda24df86930916d7c4eaeb620c766ff2eb4889158991490aa90b598e940ca6cd11d50d21179f6c0c3096510f83eb9d867abbaf3d97693c477735fb250af26014c044494064979",

          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    const filteredData = json.data.filter((card) => card.id != idPath);
    setData(filteredData);
  };

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div className={styles.additionalSales}>
      <h2 className={styles.additionalSales__title}>Рекомендуем к покупке</h2>

      <div className={styles.additionalSales__cards}>
        {data &&
          data.map((cardData) => (
            <AdditionalSalesCard key={cardData.id} data={cardData} />
          ))}
      </div>
    </div>
  );
};
