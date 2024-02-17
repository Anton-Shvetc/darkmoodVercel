"use client";
import { Card } from "@/components/Card/Card";
import styles from "./Cards.module.scss";
import { useEffect, useState } from "react";


export const Cards = () => {

  const [data, setData] = useState([])

  const getCardsData = async() => {


const myHeaders = new Headers({
  "Content-Type": "application/json",
  Authorization:
    "63e74db5f842896da84149d352ea13c224cb240781490ff12f574a960df9a33894190bc96d5a5fc11483876cf43cc0d682900d178466dec4afdda24df86930916d7c4eaeb620c766ff2eb4889158991490aa90b598e940ca6cd11d50d21179f6c0c3096510f83eb9d867abbaf3d97693c477735fb250af26014c044494064979",
});

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

const json = await response.json()
setData(json.data);



  }

  useEffect(() => {getCardsData()}, [])


  return (
    <div className={styles.cards}>
      {data && data.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
};
