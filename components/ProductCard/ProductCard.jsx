"use client";
import styles from "./ProductCard.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { usePathname } from "next/navigation";

import imageUrl from "@/public/images/card-img.png";

export const ProductCard = () => {
  // const pathname = usePathname();
  // const idPath = pathname.replace("/catalog/", "");

  const dataCard = {
    id: 1,
    title: "Футболка Darkmood",
    price: "49,99",
    subTitle: "Тонкая. Легкая. Черная.",
    description: [
      "Футболка линейки DARKMOOD - первая единица контрбрендовой линии одежды. Потрясающие качество в совместительстве с утонченным подходом к деталям, которым не могут похвастаться именитые раздутые фирмы.",
    ],
    fabrics: ["Ткань сорта пенье"],
    structure: ["95% cotton", "5% spandex"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 10,
    details: ["Плотность 170 г/м²"],
    images: [imageUrl, imageUrl, imageUrl],
  };

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>{dataCard.title}</h1>

      <div className={styles.info}>
        <div className={styles.slider}>
          <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            className={styles.mySwiper}
          >
            {dataCard.images.map((item, index) => (
              <div key={index} className={styles.swipItem}>
                <div className={styles.imgBox}>
                  <img src={item.src} alt="slides" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.description}>
          <div>
            <p>{dataCard.subTitle}</p>
            <p>{dataCard.description}</p>
            <p>{(dataCard.structure[0], dataCard.structure[1])}</p>
            <p>{dataCard.details[0]}</p>
          </div>
          <div>
            <p>Выберите размер</p>
          </div>
          <div>
            <p>Количество</p>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};
