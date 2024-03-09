"use client";
import { AdditionalSalesCard } from "../AdditionalSalesCard/AdditionalSalesCard";
import styles from "./AdditionalSales.module.scss";
// import imageUrl from "@/public/images/card-img.png";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const AdditionalSales = () => {
  const pathname = usePathname();
  const idPath = pathname.replace("/catalog/", "");

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

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
    const filteredData = json.data.filter((card) => card.id != idPath);
    setData(filteredData);
  };

  useEffect(() => {
    getCardsData();
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    800: { items: 3 },
    1024: {
      items: 6,
    },
  };

  const items = data.map((cardData) => (
    <AdditionalSalesCard key={cardData.id} data={cardData} />
  ));

  return (
    <div className={styles.additionalSales}>
      <h2 className={styles.additionalSales__title}>Рекомендуем к покупке</h2>
      {domLoaded && (
        <AliceCarousel
          mouseTracking
          disableDotsControls={true}
          items={items}
          responsive={responsive}
          renderPrevButton={({ isDisabled }) => {
            if (!isDisabled) {
              return (
                <p
                  style={{
                    fontSize: "50px",
                    left: "-40px",
                  }}
                  className="p-4 absolute left-0 top-20"
                >
                  <MdArrowBack />
                </p>
              );
            }
          }}
          renderNextButton={({ isDisabled }) => {
            if (!isDisabled) {
              return (
                <p
                  style={{ fontSize: "50px", right: "-40px" }}
                  className="p-4  absolute right-0 top-20"
                >
                  <MdArrowForward />
                </p>
              );
            }
          }}
        />
      )}

      {/* <div className={styles.additionalSales__cards}>
        {data &&
          data.map((cardData) => (
            <AdditionalSalesCard key={cardData.id} data={cardData} />
          ))}
      </div> */}
    </div>
  );
};
